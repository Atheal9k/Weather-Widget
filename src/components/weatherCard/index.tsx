import React, { useEffect, useState } from "react"
import Table from "../table"
import {
  Div,
  TableContainer,
  CurrentInfoDiv,
  FlexDiv,
  StyledDiv,
} from "./weatherCard.style"

interface Props {
  data: object[]
}

interface DataObject {
  city?: any
  list?: any
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const [today, setToday] = useState<Date | string>()

  useEffect(() => {
    const getDate = () => {
      const theDate = new Date()
      const readable = theDate.toDateString()
      setToday(readable)
    }
    getDate()
  }, [])

  return (
    <StyledDiv>
      <Div>
        <div>
          {data.map((theData: DataObject) => (
            <h1 key={theData.city.name}>{theData.city.name}</h1>
          ))}
          <h4 style={{ color: "grey" }}>{today}</h4>
        </div>

        <CurrentInfoDiv>
          {data.map((theData: DataObject, index: number) => (
            <div key={index}>
              <h3>{theData.list[0].weather[0].main}</h3>
              <FlexDiv>
                <img
                  src={`http://openweathermap.org/img/wn/${theData.list[0].weather[0].icon}@2x.png`}
                  alt={`The current weather condition is ${theData.list[0].weather[0].main}`}
                />

                {theData.list.map((dailyData: any, index: number) =>
                  index < 1 ? (
                    <div>
                      <span>{dailyData.main.temp}</span>
                    </div>
                  ) : null
                )}
              </FlexDiv>
            </div>
          ))}
        </CurrentInfoDiv>

        <TableContainer>
          <Table weatherData={data} />
        </TableContainer>
      </Div>
    </StyledDiv>
  )
}

export default WeatherCard
