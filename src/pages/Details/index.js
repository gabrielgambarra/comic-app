import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import EmptyList from "../../components/EmptyList";
import {
  DetailsContainer,
  InfoContainer,
  InfoGrid,
  InfoBlock,
  EditButtonsContainer,
} from "./style";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Flex } from "../../shared/styles";
import EditInput from "../../components/EditInput";
import { useEdit } from "../../hooks/useEdit";

const gender = {
  0: "Other",
  1: "Male",
  2: "Female",
};

const Details = ({ match }) => {
  const [character, setCharacter] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [newName, setNewName] = useState("");
  const [newRealName, setNewRealName] = useState("");
  const [newBirth, setNewBirth] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newAliases, setNewAliases] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [edit, setEdit] = useState(false);
  const { saveEdit, isEdited, getEditedCharacter } = useEdit();

  useEffect(() => {
    getCharacterDetails();
  }, []);

  const populateInputsToEdit = () => {
    setNewName(character.name);
    setNewRealName(character.real_name);
    setNewBirth(character.birth);
    setNewGender(character.gender);
    setNewAliases(character.aliases);
    setNewDescription(character.deck);
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
    setNewName("");
    setNewRealName("");
    setNewBirth("");
    setNewGender("");
    setNewAliases("");
    setNewDescription("");
  };

  const buildObjToSaveEdit = () => {
    const characterEdited = {
      ...character,
      name: newName,
      real_name: newRealName,
      birth: newBirth,
      gender: newGender,
      aliases: newAliases,
      deck: newDescription,
    };

    saveEdit(characterEdited);
    setCharacter(characterEdited);
    setEdit(false);
  };

  const getCharacterDetails = async () => {
    setIsLoading(true);
    const urlId = parseInt(match.params.id);
    if (isEdited(urlId)) {
      const characterData = getEditedCharacter(urlId);
      setTotalLength(1);
      setCharacter(characterData);
    } else {
      await getAPIData();
    }
    setIsLoading(false);
  };

  const getAPIData = async () => {
    try {
      const { results, number_of_page_results } = await getData("/characters", {
        filter: `id:${match.params.id}`,
        field_list: "name,gender,real_name,aliases,birth,image,id,deck",
      });

      setTotalLength(number_of_page_results);

      if (number_of_page_results === 1) {
        results[0].aliases = results[0].aliases.replace(/\n/g, " ");
        setCharacter(results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoading = () => {
    return isLoading ? <span>Loading...</span> : null;
  };

  return (
    <DetailsContainer>
      {handleLoading()}

      {totalLength < 1 && !isLoading && <EmptyList notFound />}

      {character && (
        <>
          <InfoContainer width="100%" flexDirection="column">
            <Flex margin="0 0 0.5em">
              <InfoGrid>
                <InfoBlock>
                  <h5>Name:</h5>
                  {edit ? (
                    <EditInput onChange={setNewName} value={newName} />
                  ) : (
                    <p>{character.name || "Unknown"}</p>
                  )}
                </InfoBlock>

                <InfoBlock>
                  <h5>Real name:</h5>
                  {edit ? (
                    <EditInput onChange={setNewRealName} value={newRealName} />
                  ) : (
                    <p>{character.real_name || "Unknown"}</p>
                  )}
                </InfoBlock>

                <InfoBlock>
                  <h5>Birth:</h5>
                  {edit ? (
                    <EditInput onChange={setNewBirth} value={newBirth} />
                  ) : (
                    <p>{character.birth || "Unknown"}</p>
                  )}
                </InfoBlock>

                <InfoBlock>
                  <h5>Gender:</h5>
                  {edit ? (
                    <EditInput onChange={setNewGender} value={newGender} />
                  ) : (
                    <p>{gender[character.gender] || character.gender}</p>
                  )}
                </InfoBlock>
              </InfoGrid>
            </Flex>

            <Flex margin="0 0 0.5em">
              <InfoBlock>
                <h5>Aliases:</h5>
                {edit ? (
                  <EditInput onChange={setNewAliases} value={newAliases} />
                ) : (
                  <p>{character.aliases || "Unknown"}</p>
                )}
              </InfoBlock>
            </Flex>

            <Flex>
              <InfoBlock>
                <h5>Description:</h5>
                {edit ? (
                  <EditInput
                    onChange={setNewDescription}
                    value={newDescription}
                    type="textarea"
                  />
                ) : (
                  <p>{character.deck || "Unknown"}</p>
                )}
              </InfoBlock>
            </Flex>
          </InfoContainer>

          <EditButtonsContainer>
            {edit ? (
              <div>
                <button onClick={() => buildObjToSaveEdit()}>Save</button>
                <button onClick={() => cancelEdit()}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => populateInputsToEdit()}>Edit</button>
            )}
          </EditButtonsContainer>

          <Flex margin="0 0 1em">
            <Carousel plugins={["arrows", "infinite"]}>
              {Object.values(character.image).map((item) => {
                if (item.includes("http")) {
                  return <img src={item} />;
                }
              })}
            </Carousel>
          </Flex>
        </>
      )}
    </DetailsContainer>
  );
};

export default Details;
