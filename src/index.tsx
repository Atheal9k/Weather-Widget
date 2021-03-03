import ReactDOM from "react-dom"
import App from "./components/App"
import dotenv from "dotenv"

dotenv.config()

ReactDOM.render(<App />, document.querySelector("#root"))
