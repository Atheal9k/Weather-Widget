import React, { useState } from "react"
import { Div } from "./inputForm.style"

interface Props {
  onLocationSubmit: (
    location: string,
    preferredUnit: string
  ) => string | Promise<void>
}

const InputForm: React.FC<Props> = ({ onLocationSubmit }) => {
  const [names, setNames] = useState("")
  const [unit, setUnit] = useState("")
  const submitTerm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Invokes the function in App and passes in these terms
    onLocationSubmit(names, unit)
  }

  return (
    <Div>
      <form onSubmit={submitTerm}>
        <label>Enter The Location to get Weather Forecast</label>
        <br></br>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <br></br>
        <input
          type="radio"
          value="metric"
          name="units"
          onChange={(e) => setUnit(e.target.value)}></input>
        <label>Celsius</label> <br></br>
        <input
          type="radio"
          value="imperial"
          name="units"
          onChange={(e) => setUnit(e.target.value)}></input>
        <label>Fahrenheit</label> <br></br>
        <button>Submit</button>
      </form>
    </Div>
  )
}

export default InputForm
