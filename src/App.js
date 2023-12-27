import "./App.css";
import { useState } from "react";
import Button from "./components/any";
import Card from "./components/card";

function App() {
  const [counter, setcounter] = useState(0);
  const [gold, setgold] = useState(0);
  const [upgrade, setupgrade] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const Numberchange = (u) => {
    u = upgrade + 1;
    setcounter(counter + 1 * u);
    setgold(gold + 1 * u);
    if (counter === 10) {
      alert("lets gooo");

      return;
    }
    if (counter === 20) {
      alert("yaaa");

      return;
    }
  };
  const Upgrade = (x) => {
    if (10 >= x) {
      setgold(gold - x);
      setupgrade(upgrade + 1);
      setIsVisible(false);
    } else if (20 >= x) {
      setgold(gold - x);
      setupgrade(upgrade + 2);
      setIsVisible(false);
    } else if (30 >= x) {
      setgold(gold - x);
      setupgrade(upgrade + 3);
      setIsVisible(false);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: "cadetblue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card props={counter} />
        <div>
          <Button onClick={Numberchange} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <Card props={gold} />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "red",
            gap: "20px",
          }}
        >
          {gold >= 10 && isVisible && (
            <Button onClick={() => Upgrade(10)}>Upgrade</Button>
          )}
          {gold >= 20 && isVisible && (
            <Button onClick={() => Upgrade(20)}>Upgrade</Button>
          )}
          {gold >= 30 && isVisible && (
            <Button onClick={() => Upgrade(30)}>Upgrade</Button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
