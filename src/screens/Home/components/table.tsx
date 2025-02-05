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

function ActionButton({ onClick, color, children }: { onClick: MouseEventHandler<HTMLButtonElement>, color: string, children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 text-white px-2 py-1 rounded`}
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
      <div className="flex mb-2 p-1 text-xl">
        <Input
          className=" text-2xl border-black border-2"
          placeholder="ex: Saimon..."
          value={filter}
          onChange={handleFilterChange}
        />
        <Button className="ml-2">FILTER</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] bg-black text-white">Líderes</TableHead>
            <TableHead className="bg-green-500 text-white">Votos Certos</TableHead>
            <TableHead className="bg-red-500 text-white">A Conquistar</TableHead>
            <TableHead className="text-right bg-amber-500 text-white">Município</TableHead>
            <TableHead className="text-right bg-red-500 text-white">REMOVER</TableHead>
            <TableHead className="text-right bg-green-500 text-white">ADICIONAR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLiderancas.map((item, index) => (
            <TableRow
              key={item.id}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <TableCell className="font-medium">{item.nome}</TableCell>
              <TableCell className={item.votosConquistados >= totalMeta ? 'bg-green-500 text-white' : 'bg-yellow-200'}>
                {item.votosConquistados} votos
              </TableCell>
              <TableCell className={item.votosAConquistar <= 10 ? 'bg-red-500 text-white' : 'bg-blue-200'}>
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
