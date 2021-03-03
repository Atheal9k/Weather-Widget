import React, { useState, useEffect } from "react"
import WeatherCard from "./weatherCard"
import weather from "../apis/weather"
import InputForm from "./inputForm"
import { GlobalStyles } from "./globalStyles"
import styled from "styled-components"

//container css for Input field and weather widget
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  const [data, setData] = useState<object[]>([])

  useEffect(() => {
    //Title for Screen Readers
    document.title = "Weather Widget"
  }, [])

  //main function to fetch data
  const getWeather = async (
    location: string | Promise<void>,
    preferredUnit: string | Promise<void>
  ) => {
    const response = await weather.get("", {
      params: {
        q: location,
        units: preferredUnit,
        //Usually I would not expose api key but you can use it :)
        appid: "4aa7d12c78761b15cbaa7007b4ebe3b2",
      },
    })
    //Had to push the response into an array as it was a pure object
    //Which meant I could not run .map function
    const Store = []
    Store.push(response.data)
    setData(Store)

    console.log(response.data)
  }

  return (
    <div>
      <GlobalStyles />
      <Div>
        <InputForm onLocationSubmit={getWeather} />
        <WeatherCard data={data} />
      </Div>
    </div>
  )
}

export default App
