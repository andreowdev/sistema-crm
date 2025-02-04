import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLideranca } from "@/Context/liderancaContext";

export default function TableComp() {
  const { liderancas, adicionarVoto, removerVoto } = useLideranca();
  const totalMeta = 120;

  const liderancasComVotos = liderancas.map((lideranca, index) => ({
    ...lideranca,
    id: index, // Adding an id property
    votosAConquistar: Math.max(totalMeta - lideranca.votosConquistados, 0),
  }));

  // Ordenando por votos conquistados em ordem decrescente
  const liderancasOrdenadas = liderancasComVotos.sort((a, b) => b.votosConquistados - a.votosConquistados);

  return (
    <Table>
      <TableCaption>Votos conquistados e os Votos A conquistar!</TableCaption>
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
        {liderancasOrdenadas.map((item) => (
          <TableRow key={item.id}> {/* Usando 'id' como chave única */}
            <TableCell className="font-medium">{item.nome}</TableCell>
            <TableCell>{item.votosConquistados} votos</TableCell>
            <TableCell>{item.votosAConquistar} votos</TableCell>
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
  );
}

import { MouseEventHandler } from "react";

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
