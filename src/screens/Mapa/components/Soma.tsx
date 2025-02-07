interface Distrito {
  qtdLideres: number;
  qtdVotos: number;
}

interface Municipio {
  nome: string;
  distritos: Distrito[];
}

interface Estado {
  municipios: Municipio[];
}

export function somarLideresEmManaus(dadosDeCoordenadas: Estado[]): number {
  let somaLideres = 0;
  
  dadosDeCoordenadas.forEach((estado: Estado) => {
    estado.municipios.forEach((municipio: Municipio) => {
      if (municipio.nome === "Manaus") { // Verifica se o município é Manaus
        municipio.distritos.forEach((distrito: Distrito) => {
          somaLideres += distrito.qtdLideres;
        });
      }
    });
  });

  return somaLideres;
}

export function somarVotosEmManaus(dadosDeCoordenadas: Estado[]): number {
  let somaVotos = 0;
  
  dadosDeCoordenadas.forEach((estado: Estado) => {
    estado.municipios.forEach((municipio: Municipio) => {
      if (municipio.nome === "Manaus") { // Verifica se o município é Manaus
        municipio.distritos.forEach((distrito: Distrito) => {
          somaVotos += distrito.qtdLideres;
        });
      }
    });
  });

  return somaVotos;
}