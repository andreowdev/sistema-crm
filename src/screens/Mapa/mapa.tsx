import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles-map.css';

const Mapa: React.FC = () => {
  const [mapa, setMapa] = useState<L.Map | null>(null);
  const [zonaSelecionada, setZonaSelecionada] = useState<string | null>(null); // Para armazenar a zona
  const [dadosZona, setDadosZona] = useState<{ bairro: string; zona: string; qtdLideres: number; qtdVotos: number } | null>(null); // Dados da zona selecionada

  // Dados fictícios para algumas coordenadas
  const dadosDeCoordenadas: { [key: string]: { bairro: string; zona: string; qtdLideres: number; qtdVotos: number } } = {
    "-3.03,-59.99": {
      bairro: "Cidade Nova",
      zona: "Norte",
      qtdLideres: 1419.38,
      qtdVotos: 143.201,
    },
    "-3.02,-59.95": {
      bairro: "Cidade de Deus",
      zona: "Norte",
      qtdLideres: 676.76,
      qtdVotos: 143.201
    },
    "-3.10,-60.00": {
      bairro: "Compensa",
      zona: "Oeste",
      qtdLideres: 820.50,
      qtdVotos: 400.45
    },
    "-3.13,-69.98": {
      bairro: "Manaus",
      zona: "Norte do Brasil",
      qtdLideres: 1,
      qtdVotos: 1
    }
  };

  useEffect(() => {
    // Criação do mapa
    const mapaInicial = L.map('mapa').setView([-3.1, -60], 12.3); // Define a localização inicial e o zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapaInicial);

    setMapa(mapaInicial);

    // Adiciona evento de click no mapa
    mapaInicial.on('click', (event) => {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;

      console.log(`Localização clicada: Latitude: ${latitude}, Longitude: ${longitude}`);

      const chave = `${latitude.toFixed(2)},${longitude.toFixed(2)}`;

      // Verifica se a coordenada clicada tem dados correspondentes
      if (dadosDeCoordenadas[chave]) {
        const dados = dadosDeCoordenadas[chave];

        // Quando o clique ocorre em uma área representando Manaus, soma os dados de todos os bairros
        if (dados.bairro === "Manaus") {
          let totalLideres = 0;
          let totalVotos = 0;
          
          // Soma os dados de todos os bairros de Manaus
          Object.keys(dadosDeCoordenadas).forEach((key) => {
            const bairroData = dadosDeCoordenadas[key];
            // Para somar, verificamos se a zona do bairro está dentro de Manaus ou se ele é um bairro de Manaus
            if (bairroData.zona === "Norte" || bairroData.zona === "Centro" || bairroData.zona === "Oeste") {
              totalLideres += bairroData.qtdLideres;
              totalVotos += bairroData.qtdVotos;
            }
          });

          // Atualiza os dados para Manaus com as somas
          setDadosZona({
            bairro: "Manaus",
            zona: "Município de Manaus",
            qtdLideres: totalLideres,
            qtdVotos: totalVotos
          });
          setZonaSelecionada("Manaus");
        } else {
          setDadosZona(dados);
          setZonaSelecionada(`Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`);
        }
      } else {
        setDadosZona(null);
        setZonaSelecionada(`Nenhuma zona definida para essas coordenadas.`);
      }
    });

    return () => {
      mapaInicial.remove();
    };
  }, []);
  

  return (
    <div>
      <div id="mapa" style={{ height: '500px' }}></div>
      <div
        id="tabela-dados"
        style={{
          marginTop: '20px',
          padding: '10px',
          border: '1px solid #ddd',
          background: '#f9f9f9',
        }}
      >
        <h3>Selecione uma zona no mapa</h3>
        {zonaSelecionada ? (
          <div>
            <p><strong>{zonaSelecionada}</strong></p>
            {dadosZona ? (
              <div>
                <h4>Informações sobre a zona:</h4>
                <ul>
                  <li><strong>Bairro:</strong> {dadosZona.bairro}</li>
                  <li><strong>Zona:</strong> {dadosZona.zona}</li>
                  <li><strong>Quantidade de Lideres:</strong> {dadosZona.qtdLideres}</li>
                  <li><strong>Quantidade de Votos:</strong> {dadosZona.qtdVotos}</li>
                </ul>
              </div>
            ) : (
              <p>Não há dados disponíveis para essa zona.</p>
            )}
          </div>
        ) : (
          <p>Clique em uma área do mapa para selecionar uma zona.</p>
        )}
      </div>
    </div>
  );
};

export default Mapa;
