import { FaEarthAmericas } from "react-icons/fa6";
import { Label } from "../ui/label";
import { SelectState } from "./select";

type HeaderProps = {
  acronym: string
  setAcronym: (acronym: string) => void;
}

export function Header({ acronym, setAcronym }: HeaderProps) {
  return (
    <header className="py-10 flex flex-col items-center">
      <h1 className="flex text-3xl items-center justify-center gap-2 font-bold">
        <FaEarthAmericas className="text-primary" />
        GeoQuizBrasil
      </h1>
      <div className="flex flex-col gap-3 items-center">
        <Label className="text-lg">
          Selecione um estado
        </Label>
        <SelectState acronym={acronym} setAcronym={setAcronym} />
      </div>
      
    </header>
  )
}