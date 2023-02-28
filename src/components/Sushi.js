import React, { useState } from "react";

function Sushi({newBalance, money, name, price, img_url, id}) {
  const [eaten, setEaten] = useState(false)

  function handleEatenClick(){
    if (money > price) {
      setEaten(true)
      newBalance(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
