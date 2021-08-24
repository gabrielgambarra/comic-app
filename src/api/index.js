import axios from "axios";

const comicvineURL = "https://comicvine.gamespot.com/api/";
const corsUrl = "http://localhost:8010/proxy/";
const baseURL = process.env.REACT_APP_ENV === "dev" ? corsUrl : comicvineURL;
const api_key = process.env.REACT_APP_KEY;
const format = "json";

const api = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getData = async (route, queryParams) => {
  const paramsObj = { format, api_key, ...queryParams, limit: 5 };
  const params = new URLSearchParams(paramsObj);

  const { data } = await api.get(`${route}`, {
    params: params,
  });

  return data;
};
