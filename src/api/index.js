import axios from "axios";

const comicvineURL = "https://comicvine.gamespot.com/api/";
const corsUrl = "https://evening-badlands-17508.herokuapp.com/";
const baseURL = corsUrl + comicvineURL;
const api_key = process.env.REACT_APP_KEY;
const format = "json";

const api = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getData = async (route, queryParams) => {
  const paramsObj = { format, api_key, ...queryParams };
  const params = new URLSearchParams(paramsObj);

  const { data } = await api.get(`${route}`, {
    params: params,
  });

  return data;
};
