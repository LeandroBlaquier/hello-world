
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [hello, setHello] = useState("");
  useEffect(() => {
   setHello("hello bot")  
  },[])

  return (
    <>
    <h1>Hello world</h1>

    <p>{hello}</p>
    </>
  );
}

export default App;
