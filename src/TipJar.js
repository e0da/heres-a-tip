import React, { useState } from "react";

const TipJar = () => {
  const [total, setTotal] = useState(0);
  const tip = amount => () => setTotal(amount + total);
  const empty = () => setTotal(0);
  return (
    <>
      <h2>Tip Jar</h2>
      <p style={{ fontSize: "3rem" }}>${total}</p>
      <button onClick={tip(1)}>Tip $1</button>
      <button onClick={empty}>Empty Jar</button>
    </>
  );
};

export default TipJar;
