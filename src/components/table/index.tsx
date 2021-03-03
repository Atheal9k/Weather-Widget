import React, { useEffect, useState } from "react"
import { StyledTable } from "./table.style"

interface Props {
  weatherData: object[]
}

interface DataObject {
  list?: any
  city?: any
}

const Table: React.FC<Props> = ({ weatherData }) => {
  const [nameArray, setNameArray] = useState<number[]>([])

  //Array of days - It's got more than 7 days because of the solution I'm implementing
  //I'm essentially calling .getDay() to get the current day in number representation
  //Then adding + 6 days to the current number and making a new array of indexes
  //Then accessing this array with the array of indexes to dynamically generate the weekdays
  const arrayOfWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  useEffect(() => {
    const getDateName = () => {
      const dateObject = new Date()
      let weekdayIndex = dateObject.getDay()

      const Store = []

      for (let i = 0; i < 8; i++) {
        Store.push(weekdayIndex + i)
      }
      setNameArray(Store)
    }
    getDateName()
  }, [])

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <span>Today</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[1]]}</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[2]]}</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[3]]}</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[4]]}</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[5]]}</span>
            </th>
            <th>
              <span>{arrayOfWeekdays[nameArray[6]]}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {weatherData.map((theData: DataObject) => (
            <tr key={theData.city.name}>
              {theData.list.map((dailyData: any, index: number) =>
                index < 7 ? (
                  <td key={dailyData.main.temp_max}>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${theData.list[index].weather[0].icon}@2x.png`}
                        alt={`The weather condition is ${theData.list[index].weather[0].main}`}
                      />
                    </div>
                    <span style={{ color: "black" }}>
                      {dailyData.main.temp_max} |
                    </span>
                    <span style={{ color: "grey" }}>
                      {dailyData.main.temp_min}
                    </span>
                  </td>
                ) : null
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}

export default Table
