import cricApi, { cricApiKey } from "../api/cricApi"

const fetchPlayer = async (id) => {
  const response = await cricApi.get("/playerStats", {
    params: {
      pid: id,
      apikey: process.env.REACT_APP_CRICKET_API_KEY,
    },
  })
  return response.data
}

export default fetchPlayer
