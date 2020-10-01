import newsApi, { newsApiKey } from "../api/newsApi";

const fetchNews = async (q = "cricket") => {
  const response = await newsApi
    .get("/", {
      params: {
        token: newsApiKey,
        q: q,
      },
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
  return response.data?.articles !== null ? response.data?.articles : [];
};
export default fetchNews;
