import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import EmptyList from "../../components/EmptyList";
import { DetailsContainer, InfoContainer } from "./style";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Flex } from "../../shared/styles";

const gender = {
  1: "Male",
  2: "Female",
};

const Details = ({ match }) => {
  const [character, setCharacter] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCharacterDetails();
  }, []);

  const getCharacterDetails = async () => {
    setIsLoading(true);
    try {
      const { results, number_of_page_results } = await getData("/characters", {
        filter: `id:${match.params.id}`,
        field_list: "name,gender,real_name,aliases,birth,image,id,deck",
      });

      setTotalLength(number_of_page_results);

      if (number_of_page_results === 1) {
        setCharacter(results[0]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
            <Flex justifyContent="space-between" margin="0 0 0.5em">
              <div>
                <h5>Name:</h5>
                <p>{character.name}</p>
              </div>

              <div>
                <h5>Real name:</h5>
                <p>{character.real_name}</p>
              </div>

              <div>
                <h5>Birth:</h5>
                <p>{character.birth || "Unknown"}</p>
              </div>

              <div>
                <h5>Gender:</h5>
                <p>{gender[character.gender] || "Other"}</p>
              </div>
            </Flex>

            <Flex margin="0 0 0.5em">
              <div>
                <h5>Aliases:</h5>
                <p>{character.aliases || "Unknown"}</p>
              </div>
            </Flex>

            <Flex>
              <div>
                <h5>Description:</h5>
                <p>{character.deck || "Unknown"}</p>
              </div>
            </Flex>
          </InfoContainer>

          <div>
            <Carousel plugins={["arrows", "infinite"]}>
              {Object.values(character.image).map((item) => {
                if (item.includes("http")) {
                  return <img src={item} />;
                }
              })}
            </Carousel>
          </div>
        </>
      )}
    </DetailsContainer>
  );
};

export default Details;
