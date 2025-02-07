import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosMan } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { GoAlertFill } from "react-icons/go";
import { useLideranca } from "@/Context/liderancaContext";

export default function ZCards() {
  const { liderancas, votosRemovidos } = useLideranca();  // Contexto
  const totalProjeto = 960;

  // Somando os votos conquistados de todas as lideranças
  const votosConquistadosTotal = liderancas.reduce((total, lideranca) => total + lideranca.votosConquistados, 0);

  // Calcular votos a conquistar
  const votosAConquistarTotal = totalProjeto - votosConquistadosTotal;

  // Porcentagens
  const porcentagemConquistados = (votosConquistadosTotal / totalProjeto) * 100;
  const porcentagemAConquistar = (votosAConquistarTotal / totalProjeto) * 100;
  const porcentagemPerdidos = (votosRemovidos / totalProjeto) * 100;

  return (
    <div className="w-full sm:w-6/12 sm:h-44 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center b">
      {/* Card de Meta Total */}
      <Card className="w-full">
        <IoIosMan size={50} className="w-full mt-2" color="#4528e6da" />
        <CardHeader>
          <CardTitle className="text-lg">Meta Total: </CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold mt-7">{totalProjeto} votos</p>
          <p className="text-sm">Total de Contatos</p>
        </div>
      </Card>

      {/* Card de Votos Conquistados */}
      <Card className="w-full ">
        <FaVoteYea size={50} className="w-full mt-2" color="green" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Conquistados</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votosConquistadosTotal} votos</p>
          <p className="text-sm">{porcentagemConquistados.toFixed(2)}% da base</p>
        </div>
      </Card>

      {/* Card de Votos a Conquistar */}
      <Card className="w-full">
        <GoAlertFill size={50} className="w-full mt-2" color="brown" />
        <CardHeader>
          <CardTitle className="text-lg">Votos A Conquistar</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votosAConquistarTotal} votos</p>
          <p className="text-sm">{porcentagemAConquistar.toFixed(2)}% da base</p>
        </div>
      </Card>

      {/* Card de Votos Perdidos */}
      <Card className="w-full">
        <CgCloseR size={50} className="w-full mt-2" color="red" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Perdidos</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold mt-7">{votosRemovidos} votos</p>
          <p className="text-sm">{porcentagemPerdidos.toFixed(2)}% da base</p>
        </div>
      </Card>
    </div>
  );
}
