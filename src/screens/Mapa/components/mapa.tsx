import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { dadosDeCoordenadas} from '../hooks/useFetch'; // Certifique-se de que os dados de coordenadas estejam sendo importados corretamente
import TableMap from './tableMap';
import icon from "./gps-svgrepo-com.svg"
import L from 'leaflet'

const Mapa: React.FC = () => {
  const [dadosZona, setDadosZona] = useState<{nome:string; bairro: string; zona: string; qtdLideres: number; qtdVotos: number } | null>(null);
  const [posicaoClicada, setPosicaoClicada] = useState<LatLngExpression>([-3.1, -60]);

  const MapaEventos = () => {
    useMapEvents({
      click(event) {

        let zona

        const latitude = event.latlng.lat;
        const longitude = event.latlng.lng;


        const chave = `${latitude},${longitude}`;


        
        dadosDeCoordenadas.forEach(estado => {
          estado.municipios.forEach(municipio => {
            const coordenadaMunicipio = municipio.cordenadas.find(coordenada => coordenada.slice(0,6) === chave.slice(0, 6))
              if(coordenadaMunicipio) {
                zona = municipio;
                return; //saindo do loop
              }
            municipio.distritos.forEach(distrito => {
              const coordenadaEncontrada = distrito.cordenadas.find(coordenada => coordenada.slice(0, 6) === chave.slice(0, 6));
              if (coordenadaEncontrada) {
                zona = distrito;
                return; // Sai do loop de distritos imediatamente após encontrar a coordenada
              }
              
            });
          });
        });

        
        


        if (zona) {
          setDadosZona(zona);
        } else {
          setDadosZona(null);
        }

        setPosicaoClicada([latitude, longitude]);
      },
    });

    return null;
  };

  const myIcon = L.icon({
    iconUrl: icon, // Use the imported SVG URL
    iconSize: [32, 32], // Adjust size as needed
    // ... other icon options (iconAnchor, popupAnchor, etc.)
});

  return (
    <div className="flex justify-center min-h-[96.9vh] dark:text-white">
      <div className="flex space-x-2">
        <div id="mapa" style={{ height: '600px', width: '90rem' }} className="h-[600px] w-[70%]">
          <MapContainer center={[-3.1, -60]} zoom={12.3} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
            <MapaEventos />
            {posicaoClicada && (
              <Marker position={posicaoClicada} icon={myIcon}>
                <Popup>
                  <p>Localização: {(posicaoClicada as [number, number])[0]}, {(posicaoClicada as [number, number])[1]}</p>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <div
          id="tabela-dados"
          className="w-[35%] h-[600px] shadow-lg shadow-black dark:bg-[#292929] border border-gray-300 p-4 text-center overflow-y-auto"
        >
          <h3 className="text-lg font-semibold">Selecione uma zona no mapa</h3>
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
