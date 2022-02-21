import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// const rga4 = require("react-ga4");
import ReactGA from "react-ga4";
// ReactGA.initialize("UA-221024268-1");
ReactGA.initialize("G-85G9QPGZMB");

function App() {
  // rga4.default.initialize("your GA measurement id");
  return (
    <div className="App">
      <button
        onClick={() => {
          axios
            .post("https://test-ga-backend.herokuapp.com/tracking", {
              category: "category A",
              action: "action A",
              label: "label A",
              gaId: "304540515",
            })
            .then((res) => console.log(res));
        }}
      >
        click A
      </button>
      <button
        onClick={() => {
          axios
            .post("https://test-ga-backend.herokuapp.com/tracking", {
              category: "category B",
              action: "action B",
              label: "label B",
              gaId: "304540515",
            })
            .then((res) => console.log(res));
        }}
      >
        click B
      </button>
      <button
        onClick={() => {
          ReactGA.event({
            category: "category C",
            action: "action C",
            label: "label C",
          });
          ReactGA.send({
            hitType: "event",
            eventCategory: "category C",
            eventAction: "action C",
          });
        }}
      >
        click C
      </button>
    </div>
  );
}

export default App;
