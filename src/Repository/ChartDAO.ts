import { ChartDTO } from "@/screens/Home/dto/homeDTO";

export class ChartDAO {
  private data: ChartDTO[];

  constructor() {
    // Tenta carregar os dados do localStorage
    const storedData = localStorage.getItem("chartsData");
    if (storedData) {
      // Se os dados existirem no localStorage, usa-os
      this.data = JSON.parse(storedData);
    } else {
      // Caso contrário, usa dados padrão
      this.data = [
        { month: "Mar", base: 0 },
        { month: "April", base: 20 },
        { month: "May", base: 40 },
        { month: "June", base: 27 },
        { month: "Jul", base: 45 },
        { month: "Aug", base: 120 },
        { month: "Sep", base: 0 },
      ];
      // Salva os dados padrão no localStorage
      this.saveToLocalStorage();
    }
  }

  // Método para salvar os dados no localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem("chartsData", JSON.stringify(this.data));
  }

  public getLeaders(): ChartDTO[] {
    return this.data;
  }
}
 