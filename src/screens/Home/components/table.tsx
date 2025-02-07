import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLideranca } from "@/Context/liderancaContext";
import { MouseEventHandler, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";


function ActionButton({ onClick, color, children }: { onClick: MouseEventHandler<HTMLButtonElement>, color: string, children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[${color}] rounded px-4 py-2`}
    >
      {children}
    </button>
  );
}

export default function TableComp() {
  const { liderancas, adicionarVoto, removerVoto } = useLideranca();
  const [filter, setFilter] = useState("");

  const totalMeta = 120;

  const liderancasComVotos = liderancas.map((lideranca, index) => ({
    ...lideranca,
    id: index,
    votosAConquistar: Math.max(totalMeta - lideranca.votosConquistados, 0),
  }));

  const liderancasOrdenadas = liderancasComVotos.sort((a, b) => b.votosConquistados - a.votosConquistados);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredLiderancas = liderancasOrdenadas.filter(lideranca =>
    lideranca.nome.toLowerCase().includes(filter.toLowerCase()) ||
    lideranca.municipio.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row  items-center">
        <FaSearch size={25} className="mr-3 mb-3 sm:mb-0" />
        <Input
          className="text-2xl mb-2 sm:mb-0 sm:w-full"
          placeholder="ex: Saimon..."
          value={filter}
          onChange={handleFilterChange}
        />
        <Button className="ml-0 sm:ml-2 w-full sm:w-auto">
          <FaFilter size={20}/>
          FILTER
          </Button>
      </div>
      
      <Table className="overflow-x-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] ">Líderes</TableHead>
            <TableHead className="">Votos Certos</TableHead>
            <TableHead className="">A Conquistar</TableHead>
            <TableHead className="text-center ">Município</TableHead>
            <TableHead className="text-right ">REMOVER</TableHead>
            <TableHead className="text-right ">ADICIONAR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLiderancas.map((item) => (
            <TableRow
              key={item.id}
             
            >
              <TableCell className="font-medium">{item.nome}</TableCell>
              <TableCell className={item.votosConquistados.toString()}>
                {item.votosConquistados} votos
              </TableCell>
              <TableCell className={item.votosAConquistar.toString()}>
                {item.votosAConquistar} votos
              </TableCell>
              <TableCell>{item.municipio}</TableCell>
              <TableCell className="text-right">
                <ActionButton onClick={() => removerVoto(item.id)} color="red">
                  Remover
                </ActionButton>
              </TableCell>
              <TableCell className="text-right">
                <ActionButton onClick={() => adicionarVoto(item.id)} color="green">
                  Adicionar
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
