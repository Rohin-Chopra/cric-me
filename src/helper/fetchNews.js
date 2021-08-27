import newsApi, { newsApiKey } from "../api/newsApi"

const fetchNews = async (q = "cricket") => {
  const response = await newsApi
    .get("/", {
      params: {
        apiKey: newsApiKey,
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
