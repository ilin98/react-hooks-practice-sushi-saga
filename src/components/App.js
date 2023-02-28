import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [money, setMoney] = useState(100)
  function newBalance (price) {
      setMoney(money - price)
  }
  return (
    <div className="app">
      <SushiContainer newBalance={newBalance} money={money}/>
      <Table totalMoney={money} />
    </div>
  );
}

export default App;
