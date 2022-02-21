import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// const rga4 = require("react-ga4");

function App() {
  // rga4.default.initialize("your GA measurement id");
  return (
    <div className="App">
      <button
        onClick={() => {
          axios
            .post("http://localhost:4000/tracking", {
              category: "category A",
              action: "action A",
              label: "label A",
              gaId: 123,
            })
            .then((res) => console.log(res));
        }}
      >
        click A
      </button>
      <button
        onClick={() => {
          axios
            .post("http://localhost:4000/tracking", {
              category: "category B",
              action: "action B",
              label: "label B",
              gaId: 124,
            })
            .then((res) => console.log(res));
        }}
      >
        click B
      </button>
    </div>
  );
}

export default App;
