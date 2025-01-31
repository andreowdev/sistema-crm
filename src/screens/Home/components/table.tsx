import React, { useState, useEffect, useMemo } from "react";
import { LeaderDAO } from "@/Repository/HomeDAO";
import { LeaderDTO } from "@/screens/Home/dto/homeDTO";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableComp() {
  // Usamos useMemo para garantir que a instância de LeaderDAO não seja recriada
  const leaderDAO = useMemo(() => new LeaderDAO(), []); 

  const [data, setData] = useState<LeaderDTO[]>([]);

  // Atualiza a lista de líderes sempre que o componente é montado ou quando o state muda
  useEffect(() => {
    setData(leaderDAO.getLeadersSortedByVotes());
  }, [leaderDAO]);

  const adicionarVoto = (index: number) => {
    leaderDAO.addVote(index);
    setData([...leaderDAO.getLeadersSortedByVotes()]); // Atualiza a lista após o voto
  };

  const removerVoto = (index: number) => {
    leaderDAO.removeVote(index);
    setData([...leaderDAO.getLeadersSortedByVotes()]); // Atualiza a lista após remover o voto
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] bg-black text-white">Líderes</TableHead>
          <TableHead className="bg-green-500 text-white">Votos Certos</TableHead>
          <TableHead className="bg-red-500 text-white">A Conquistar</TableHead>
          <TableHead className="text-right bg-amber-500 text-white">Município</TableHead>
          <TableHead className="text-right bg-amber-500 text-white">REMOVER</TableHead>
          <TableHead className="text-right bg-amber-500 text-white">ADICIONAR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.nome}</TableCell>
            <TableCell>{item.votosConquistados} votos</TableCell>
            <TableCell>{item.votosAConquistar} votos</TableCell>
            <TableCell className="text-right">{item.municipio}</TableCell>
            <TableCell className="text-right">
              <button
                onClick={() => removerVoto(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remover
              </button>
            </TableCell>
            <TableCell className="text-right">
              <button
                onClick={() => adicionarVoto(index)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Adicionar
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
