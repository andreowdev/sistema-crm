import { useState, useEffect } from "react";
import { LeaderDAO } from "@/Repository/HomeDAO";

interface Votos {
  votosTotal: number;
  votosConquistados: number;
  votosAConquistar: number;
  votosPerdidos: number;
}

export function useFetchVotes() {
    const [votos, setVotos] = useState<Votos>({
        votosTotal: 0,
        votosConquistados: 0,
        votosAConquistar: 0,
        votosPerdidos: 0,
      });


  useEffect(() => {
    const leaderDAO = new LeaderDAO();

    const votosTotais = leaderDAO.getLeadersSortedByVotes();
    

    const total = votosTotais.reduce(
      (acc, leader) => {
        acc.votosConquistados += leader.votosConquistados;
        acc.votosAConquistar += leader.votosAConquistar;
        acc.votosPerdidos += leader.votosPerdidos || 0;
        return acc;
      },
      { votosTotal: 0, votosConquistados: 0, votosAConquistar: 0, votosPerdidos: 0 }
    );

    total.votosTotal = total.votosConquistados + total.votosAConquistar;

    setVotos(total);
  }, []);

  return votos;
}
