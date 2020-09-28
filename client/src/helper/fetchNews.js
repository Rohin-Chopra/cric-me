import newsApi, { newsApiKey } from "../api/newsApi";

const fetchNews = async () => {
  const response = await newsApi
    .get("/", {
      params: {
        token: newsApiKey,
        q: "cricket",
      },
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  console.log(response);
  return response.data?.articles !== null ? response.data?.articles : [];
};
export default fetchNews;
