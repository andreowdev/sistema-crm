import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles-map.css';
import GeoLoader from './hooks/GeoMunicipioLoader';  // Importando o componente GeoLoader

const Mapa: React.FC = () => {
  const [mapa, setMapa] = useState<L.Map | null>(null); // Armazenar a instância do mapa no estado

  useEffect(() => {
    // Criação do mapa
    const mapaInicial = L.map('mapa').setView([-4, -64], 5); // Defina a localização inicial e o zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapaInicial);

    setMapa(mapaInicial); // Armazenando a instância do mapa no estado

    // Limpeza do mapa ao desmontar o componente
    return () => {
      mapaInicial.remove();
    };
  }, []);

  return (
    <div>
      <div id="mapa" style={{ height: '500px' }}></div>
      <GeoLoader mapa={mapa!} /> {/* Passando a instância do mapa para o GeoLoader */}
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
        {/* A tabela será exibida aqui quando uma zona for clicada */}
      </div>
    </div>
  );
};

export default Mapa;
