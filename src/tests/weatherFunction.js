import axios from "axios"

export default async (location, preferredUnit) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?",
    {
      params: {
        q: location,
        units: preferredUnit,
        appid: "4aa7d12c78761b15cbaa7007b4ebe3b2",
      },
    }
  )
  return response.data
}
