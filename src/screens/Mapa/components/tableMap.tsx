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
  if (!dados) {
    return <p>Nenhum dado disponível para exibir.</p>;  // Exibindo mensagem se os dados não forem passados
  }

  const somaLideres = somarLideresEmManaus(dadosDeCoordenadas);
  const somaVotos = somarVotosEmManaus(dadosDeCoordenadas);

  return (
    <div className="w-full overflow-x-auto"> {/* Adiciona um container para overflow horizontal */}
      <Table className="min-w-full dark:text-white table-auto"> {/* min-w-full para ocupar a largura total e table-auto para responsividade */}
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-2 text-left">BAIRRO</TableHead> {/* Adiciona padding e alinhamento */}
            <TableHead className="px-4 py-2 text-left">ZONA</TableHead>
            <TableHead className="px-4 py-2 text-left">QUANTIDADE DE LIDERES</TableHead>
            <TableHead className="px-4 py-2 text-left">QUANTIDADE DE VOTOS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="px-4 py-2">{dados.bairro || dados.nome}</TableCell> {/* Adiciona padding */}
            <TableCell className="px-4 py-2">{dados.zona}</TableCell>
            <TableCell className="px-4 py-2">{dados.qtdLideres || somaLideres}</TableCell>
            <TableCell className="px-4 py-2">{dados.qtdVotos || somaVotos}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}