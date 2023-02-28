import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({money, newBalance}) {
  const[sushiList, setSushiList] = useState([])
  const [startNum, setStartNum] = useState(0)
  const [endNum, setEndNum] = useState(4)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(resp => resp.json())
    .then(data => setSushiList(data))
  }, [])

  const displayedPlants = sushiList.map((sushi, index) => {
    while (index >= startNum && index < endNum ) {
      return <Sushi newBalance={newBalance} money={money} name={sushi.name} price={sushi.price} img_url={sushi.img_url}
      id={sushi.id} key={sushi.id} />
    }
  })

  function handleMoreClick() {
    setStartNum(startNum + 4)
    setEndNum(endNum + 4)
  }

  return (
    <div className="belt">
      {displayedPlants}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
