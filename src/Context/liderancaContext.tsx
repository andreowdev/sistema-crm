import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../screens/Home/hooks/useFetch";

interface Lideranca {
  nome: string;
  votosConquistados: number;
  votosAConquistar: number;
  municipio: string;
  votosPerdidos: number;
}

interface LiderancaContextType {
  liderancas: Lideranca[];
  adicionarVoto: (index: number) => void;
  removerVoto: (index: number) => void;
  votosRemovidos: number;
}

const LiderancaContext = createContext<LiderancaContextType | undefined>(undefined);

export const useLideranca = () => {
  const context = useContext(LiderancaContext);
  if (!context) {
    throw new Error("useLideranca deve ser usado dentro de um LiderancaProvider");
  }
  return context;
};

interface LiderancaProviderProps {
  children: ReactNode;
}

const defaultLiderancas: Lideranca[] = [
  { nome: "Saimon", votosConquistados: 38, votosAConquistar: 82, municipio: "Manaus (capital)", votosPerdidos: 0 },
  { nome: "Luiza", votosConquistados: 20, votosAConquistar: 100, municipio: "Autazes", votosPerdidos: 0 },
  { nome: "Fabiano", votosConquistados: 12, votosAConquistar: 108, municipio: "Iranduba", votosPerdidos: 0 },
  { nome: "Cristian", votosConquistados: 10, votosAConquistar: 110, municipio: "Manacapuru", votosPerdidos: 0 },
  { nome: "José", votosConquistados: 18, votosAConquistar: 102, municipio: "Itacoatiara", votosPerdidos: 0 },
  { nome: "Maria", votosConquistados: 10, votosAConquistar: 110, municipio: "Presidente Figueiredo", votosPerdidos: 0 },
  { nome: "João", votosConquistados: 15, votosAConquistar: 105, municipio: "Careiro", votosPerdidos: 0 },
  { nome: "Sergio", votosConquistados: 15, votosAConquistar: 105, municipio: "Careiro da Várzea", votosPerdidos: 0 },
];

export const LiderancaProvider = ({ children }: LiderancaProviderProps) => {
  const [liderancas, setLiderancas] = useState<Lideranca[]>([]);
  const [votosRemovidos, setVotosRemovidos] = useState<number>(0);

  useEffect(() => {
    const storedData = getFromLocalStorage("liderancas") as Lideranca[] | null;
    const storedVotosRemovidos = getFromLocalStorage("votosRemovidos") as number | null;

    if (storedData) {
      setLiderancas(storedData);
    } else {
      setLiderancas(defaultLiderancas);
      saveToLocalStorage("liderancas", defaultLiderancas);
    }

    if (storedVotosRemovidos !== null) {
      setVotosRemovidos(storedVotosRemovidos);
    } else {
      saveToLocalStorage("votosRemovidos", 0);
    }
  }, []);

  const updateLiderancas = (newLiderancas: Lideranca[]) => {
    setLiderancas(newLiderancas);
    saveToLocalStorage("liderancas", newLiderancas);
  };

  const adicionarVoto = (index: number) => {
    const novosLiderancas = [...liderancas];
    const totalMeta = 120;
    if (novosLiderancas[index].votosConquistados < totalMeta) {
      novosLiderancas[index].votosConquistados += 1;
      updateLiderancas(novosLiderancas);
    }
  };

  const removerVoto = (index: number) => {
    const novosLiderancas = [...liderancas];
    if (novosLiderancas[index].votosConquistados > 0) {
      novosLiderancas[index].votosConquistados -= 1;
      const novosVotosRemovidos = votosRemovidos + 1;
      setVotosRemovidos(novosVotosRemovidos);
      saveToLocalStorage("votosRemovidos", novosVotosRemovidos);
      updateLiderancas(novosLiderancas);
    }
  };

  return (
    <LiderancaContext.Provider value={{ liderancas, adicionarVoto, removerVoto, votosRemovidos }}>
      {children}
    </LiderancaContext.Provider>
  );
};
