import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

export type State = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

type SelectStateProps = {
  setAcronym: (acronym: string) => void;
  acronym: string;
};

export function SelectState({ acronym, setAcronym }: SelectStateProps) {
  const [open, setOpen] = useState(false);
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://brasilapi.com.br/api/ibge/uf/v1"
        );
        const data = response.data.sort((a: { nome: string }, b: { nome: string }) =>
          a.nome.localeCompare(b.nome)
        );
        setStates(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStates();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {acronym
            ? states.find((state) => state.sigla === acronym)?.nome
            : "Selecione um estado..."}
          <FaChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search state..." /> */}
          <CommandList>
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup>
              {states.map((state) => (
                <CommandItem
                  key={state.sigla}
                  value={state.sigla}
                  onSelect={() => {
                    setAcronym(state.sigla);
                    setOpen(false);
                  }}
                >
                  <FaCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      acronym === state.sigla ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {state.nome}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
