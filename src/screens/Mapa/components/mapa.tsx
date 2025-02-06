import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { dadosDeCoordenadas } from '../hooks/useFetch';  // Certifique-se de que os dados de coordenadas estejam sendo importados corretamente
import TableMap from './tableMap';
import { ModeToggle } from '@/components/ui/toggleMode';

const Mapa: React.FC = () => {
  const [mapa, setMapa] = useState<L.Map | null>(null);
  const [dadosZona, setDadosZona] = useState<{ bairro: string; zona: string; qtdLideres: number; qtdVotos: number } | null>(null);

  useEffect(() => {
    const mapaInicial = L.map('mapa').setView([-3.1, -60], 12.3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapaInicial);

    setMapa(mapaInicial);

    mapaInicial.on('click', (event) => {
      const latitude = event.latlng.lat;
      const longitude = event.latlng.lng;
	
      console.log(`Localização clicada: Latitude: ${latitude}, Longitude: ${longitude}`);
      const chave = `${latitude.toFixed(2)},${longitude.toFixed(2)}`;

      if (dadosDeCoordenadas[chave]) {
        setDadosZona(dadosDeCoordenadas[chave]);
      } else {
        setDadosZona(null); 
      }
    });

    return () => {
      mapaInicial.remove();
    };
  }, []);

  return (
    <div className='flex justify-center items-center min-h-[96.9vh] dark:text-white'>
      <div className='flex space-x-2'>
        <div id="mapa" style={{height: '600px', width: '90rem'}} className='h-[600px] w-[70%]'></div>
        <div
          id="tabela-dados"
          className='w-[35%] h-[600px] shadow-lg shadow-black dark:bg-[#292929] border border-gray-300 p-4 text-center overflow-y-auto'
        >
      <ModeToggle />
          <h3 className='text-lg font-semibold'>Selecione uma zona no mapa</h3>
          {dadosZona ? (
            <TableMap dados={dadosZona} /> 
          ) : (
            <p>Clique em uma área do mapa para selecionar uma zona.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mapa;
