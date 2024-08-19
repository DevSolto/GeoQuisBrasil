import { useState } from "react";
import { Header } from "./components/header";
import { CityFinder } from "./components/cityFinder";

export default function App() {
  const [acronym, setAcronym] = useState("")
  return (
    <div className="w-full flex flex-col items-center">
      <Header acronym={acronym} setAcronym={setAcronym}/>
      <CityFinder acronym={acronym}/>
    </div>
  )
}

