const weatherFunction = require("./weatherFunction")
const mockAxios = require("axios")

it("calls axios and returns weather data", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: [
          {
            city: {
              name: Melbourne,
            },
            unit: "metric",
          },
        ],
      },
    })
  )

  const location = await weatherFunction("Melbourne", "metric")
  expect(location).toEqual([
    {
      city: {
        name: Melbourne,
      },
      unit: "metric",
    },
  ])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.openweathermap.org/data/2.5/forecast?",
    {
      params: {
        q: location,
        units: preferredUnit,
        appid: "4aa7d12c78761b15cbaa7007b4ebe3b2",
      },
    }
  )
})
