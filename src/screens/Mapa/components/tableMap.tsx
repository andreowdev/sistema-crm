import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from "@/components/ui/table";

interface DadosZona {
  bairro: string;
  zona: string;
  qtdLideres: number;
  qtdVotos: number;
}

interface TableMapProps {
  dados: DadosZona | null;  // Garantindo que a prop pode ser null
}

export default function TableMap({ dados }: TableMapProps) {
  if (!dados) {
    return <p>Nenhum dado disponível para exibir.</p>;  // Exibindo mensagem se os dados não forem passados
  }

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
          <TableCell>{dados.bairro}</TableCell>
          <TableCell>{dados.zona}</TableCell>
          <TableCell>{dados.qtdLideres}</TableCell>
          <TableCell>{dados.qtdVotos}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
