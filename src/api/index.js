import axios from "axios";

const comicvineURL = "https://comicvine.gamespot.com/api/";
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const baseURL =
  process.env.REACT_APP_ENV === "dev"
    ? corsAnywhere + comicvineURL
    : comicvineURL;
const api_key = process.env.REACT_APP_KEY;
const field_list = "name,gender,real_name,aliases,birth,image,id,deck";
const format = "json";

const api = axios.create({
  baseURL,
});

export const getData = async (route, queryParams) => {
  const paramsObj = { format, api_key, field_list, ...queryParams };
  const params = new URLSearchParams(paramsObj);

  try {
    const { data } = await api.get(`${route}`, {
      params: params,
    });

    return data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
