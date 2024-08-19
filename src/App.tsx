import { useState } from "react";
import { Header } from "./components/header";
import { CityFinder } from "./components/cityFinder";

export default function App() {
  const [acronym, setAcronym] = useState("")
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen">
      <div>
      <Header acronym={acronym} setAcronym={setAcronym}/>
      <CityFinder acronym={acronym}/>
      </div>
      <p className="mb-3">Desenvolvido por <a className="text-primary underline" href="https://github.com/DevSolto">Santiago Souto</a></p>
    </div>
  )
}

