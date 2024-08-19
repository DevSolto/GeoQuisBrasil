import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import axios from "axios";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

type CityFinderProps = {
  acronym: string;
};

type City = {
  nome: string;
  codigo_ibge: string;
};

export function CityFinder({ acronym }: CityFinderProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [value, setValue] = useState("");
  const [correctCities, setCorrectCities] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          `https://brasilapi.com.br/api/ibge/municipios/v1/${acronym}?providers=dados-abertos-br,gov,wikipedia`
        );
        const data = response.data.sort((a: { nome: string }, b: { nome: string }) =>
          a.nome.localeCompare(b.nome)
        );
        setCities(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (acronym) {
      fetchCities();
    }
  }, [acronym]);

  const searchCity = () => {
    // Função para normalizar a string, removendo acentos e cedilhas
    const normalizeString = (str: string) =>
      str
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s*\(.*\)\s*$/, "")

    // Verifica se o nome da cidade digitado está na lista de cidades
    const foundCity = cities.find(
      (city) => normalizeString(city.nome) === normalizeString(value)
    );

    if (foundCity && !correctCities.includes(foundCity.nome)) {
      // Adiciona a cidade à lista de cidades corretas se ainda não estiver nela
      setCorrectCities((prevCities) => [...prevCities, foundCity.nome.toLowerCase()]);
      progressCalculator(correctCities.length, cities.length)
    }

    // Limpa o campo de input após a tentativa
    setValue("");
  };
  const progressCalculator = (value: number, total: number) => {
    if (total === 0) {
      setProgress(0)
    }
    setProgress((value / total) * 100)
  }

  if (!acronym) {
    return <p className="w-full text-center">Selecione um estado!</p>;
  }

  return (
    <section className="w-72 flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Digite o nome de uma cidade"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={searchCity}>Testar</Button>
      </div>
      <p>
        Acertos {correctCities.length} / {cities.length}
      </p>
      <Progress value={progress} />
      <ul>
        {correctCities.map((city) => (
          <li className="capitalize" key={city}>{city}</li>
        ))}
      </ul>
    </section>
  );
}
