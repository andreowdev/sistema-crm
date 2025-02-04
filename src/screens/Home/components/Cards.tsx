import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosMan } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { GoAlertFill } from "react-icons/go";
import { useLideranca } from "@/Context/liderancaContext";

export default function Cards() {
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
    <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-between gap-4 text-center">
      {/* Card de Meta Total */}
      <Card className="w-full">
        <IoIosMan size={50} className="w-full mt-2" />
        <CardHeader>
          <CardTitle className="text-lg">Meta Total</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{totalProjeto} votos</p>
        </div>
      </Card>

      {/* Card de Votos Conquistados */}
      <Card className="w-full">
        <FaVoteYea size={50} className="w-full mt-2" color="green" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Conquistados</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votosConquistadosTotal} votos</p>
          <p className="text-sm">{porcentagemConquistados.toFixed(2)}% da meta</p>
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
          <p className="text-sm">{porcentagemAConquistar.toFixed(2)}% da meta</p>
        </div>
      </Card>

      {/* Card de Votos Perdidos */}
      <Card className="w-full">
        <CgCloseR size={50} className="w-full mt-2" color="red" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Perdidos</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votosRemovidos} votos</p>
          <p className="text-sm">{porcentagemPerdidos.toFixed(2)}% da meta</p>
        </div>
      </Card>
    </div>
  );
}
