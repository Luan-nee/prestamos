import { useState } from "react";

function Navbar(){
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="btn bg-primary-300" onClick={() => setCount(count + 1)}>AUMENTAR</button>
      <p>{count}</p>
    </>
  );
}

export default Navbar;