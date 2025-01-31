// src/dao/LeaderDAO.ts
import { LeaderDTO } from "../screens/Home/dto/homeDTO";

export class LeaderDAO {
  private data: LeaderDTO[];

  constructor() {
    // Tenta carregar os dados do localStorage
    const storedData = localStorage.getItem("leadersData");
    if (storedData) {
      // Se os dados existirem no localStorage, usa-os
      this.data = JSON.parse(storedData);
    } else {
      // Caso contrário, usa dados padrão
      this.data = [
        {
          nome: "Saimon",
          votosConquistados: 38,
          votosAConquistar: 82,
          municipio: "Manaus (capital)",
          votosPerdidos: 0, // Adicionando votos perdidos
        },
        {
          nome: "Luiza",
          votosConquistados: 20,
          votosAConquistar: 100,
          municipio: "Autazes",
          votosPerdidos: 0,
        },
        {
          nome: "Fabiano",
          votosConquistados: 12,
          votosAConquistar: 108,
          municipio: "Iranduba",
          votosPerdidos: 0,
        },
        {
          nome: "Cristian",
          votosConquistados: 10,
          votosAConquistar: 110,
          municipio: "Manacapuru",
          votosPerdidos: 0,
        },
        {
          nome: "José",
          votosConquistados: 18,
          votosAConquistar: 102,
          municipio: "Itacoatiara",
          votosPerdidos: 0,
        },
        {
          nome: "Maria",
          votosConquistados: 10,
          votosAConquistar: 110,
          municipio: "Presidente Figueiredo",
          votosPerdidos: 0,
        },
        {
          nome: "João",
          votosConquistados: 15,
          votosAConquistar: 105,
          municipio: "Careiro",
          votosPerdidos: 0,
        },
        {
          nome: "Sergio",
          votosConquistados: 15,
          votosAConquistar: 105,
          municipio: "Careiro da Várzea",
          votosPerdidos: 0,
        },
      ];
      // Salva os dados padrão no localStorage
      this.saveToLocalStorage();
    }
  }

  // Método para salvar os dados no localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem("leadersData", JSON.stringify(this.data));
  }

  public getLeaders(): LeaderDTO[] {
    return this.data;
  }

  // Ordena os líderes por votos conquistados
  public getLeadersSortedByVotes(): LeaderDTO[] {
    return this.data.sort((a, b) => b.votosConquistados - a.votosConquistados);
  }

  // Adiciona um voto a um líder
  public addVote(index: number): void {
    if (this.data[index]) {
      this.data[index].votosConquistados += 1;
      this.saveToLocalStorage(); // Atualiza os dados no localStorage
    }
  }

  // Remove um voto de um líder e adiciona no número de votos perdidos
  public removeVote(index: number): void {
    if (this.data[index] && this.data[index].votosConquistados > 0) {
      this.data[index].votosConquistados -= 1;
      this.data[index].votosPerdidos += 1; // Incrementa votos perdidos
      this.saveToLocalStorage(); // Atualiza os dados no localStorage
    }
  }
}
