import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosMan } from "react-icons/io";
import { FaVoteYea } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { GoAlertFill } from "react-icons/go";
import { useFetchVotes } from "../hooks/useFetch";

export default function Cards() {
  const votos = useFetchVotes(); 

  return (
    <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 flex  justify-between gap-4 text-center">
      <Card className="w-full">
        <IoIosMan size={50} className="w-full mt-2" />
        <CardHeader>
          <CardTitle className="text-lg">Meta Total</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votos.votosTotal} votos</p>
        </div>
      </Card>

      <Card className="w-full">
        <FaVoteYea size={50} className="w-full mt-2" color="green" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Conquistados</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votos.votosConquistados} votos</p>
        </div>
      </Card>

      <Card className="w-full">
        <GoAlertFill size={50} className="w-full mt-2" color="brown" />
        <CardHeader>
          <CardTitle className="text-lg">Votos A Conquistar</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votos.votosAConquistar} votos</p>
        </div>
      </Card>

      <Card className="w-full">
        <CgCloseR size={50} className="w-full mt-2" color="red" />
        <CardHeader>
          <CardTitle className="text-lg">Votos Perdidos</CardTitle>
        </CardHeader>
        <div className="p-4">
          <p className="text-2xl font-semibold">{votos.votosPerdidos} votos</p>
        </div>
      </Card>
    </div>
  );
}
