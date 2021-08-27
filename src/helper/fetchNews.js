import newsApi, { newsApiKey } from "../api/newsApi"

const fetchNews = async (q = "cricket") => {
  const response = await newsApi
    .get("/", {
      params: {
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
        q: q,
        sortBy: 'relevance'
      },
    })
    .catch((error) => {
      console.log(error)
      return []
    })
  return response.data?.articles !== null ? response.data?.articles : []
}
export default fetchNews
