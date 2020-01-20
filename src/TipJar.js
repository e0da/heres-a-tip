import React, { useCallback, useState } from "react";

const TOTAL = "total";

const TipJar = () => {
  const initialTotal = (localStorage.getItem(TOTAL) || 0) * 1;
  const [total, setTotal] = useState(initialTotal);
  const updateTotal = useCallback(
    amount => {
      setTotal(amount);
      localStorage.setItem(TOTAL, amount);
    },
    [setTotal]
  );
  const tip = useCallback(amount => () => updateTotal(amount + total), [
    total,
    updateTotal
  ]);
  const empty = useCallback(() => updateTotal(0), [updateTotal]);
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
