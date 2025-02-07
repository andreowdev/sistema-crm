import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from "@/components/ui/table";
import { somarLideresEmManaus, somarVotosEmManaus } from "./Soma";
import { dadosDeCoordenadas } from "../hooks/useFetch";

interface DadosZona {
  bairro: string;
  zona: string;
  qtdLideres: number;
  qtdVotos: number;
  nome: string;
}

interface TableMapProps {
  dados: DadosZona | null;  // Garantindo que a prop pode ser null
}

export default function TableMap({ dados }: TableMapProps) {
  console.log(dados)
  if (!dados) {
    return <p>Nenhum dado disponível para exibir.</p>;  // Exibindo mensagem se os dados não forem passados
  }

  const somaLideres = somarLideresEmManaus(dadosDeCoordenadas)
  const somaVotos = somarVotosEmManaus(dadosDeCoordenadas)
  return (
    <Table className="w-9/12 dark:text-white">
      <TableHeader>
        <TableRow>
          <TableHead className="">BAIRRO</TableHead>
          <TableHead>ZONA</TableHead>
          <TableHead>QUANTIDADE DE LIDERES</TableHead>
          <TableHead>QUANTIDADE DE VOTOS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{dados.bairro || dados.nome}</TableCell>
          <TableCell>{dados.zona}</TableCell>
          <TableCell>{dados.qtdLideres || somaLideres}</TableCell>
          <TableCell>{dados.qtdVotos || somaVotos}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
