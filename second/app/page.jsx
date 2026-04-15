// import { useState, useEffect } from "react";
import fs from "fs/promises";
import Navbar from "./components/Navbar";

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("hey, i am KJ.....");
  let a = fs.readFile(".gitignore");
  a.then((e) => {
    console.log(e.toString());
  });
  return (
    <div>
      <Navbar />
      i am a component
      {/* {count} */}
      {/* <br></br>
      <button onClick={() => setCount(count + 1)}>count</button> */}
    </div>
  );
}
