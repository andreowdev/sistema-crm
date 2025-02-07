import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { dadosDeCoordenadas } from "../hooks/useFetch";
import TableMap from "./tableMap";
import icon from "./gps-svgrepo-com.svg";
import L from "leaflet";

const Mapa: React.FC = () => {
  const [dadosZona, setDadosZona] = useState<{
    nome: string;
    bairro: string;
    zona: string;
    qtdLideres: number;
    qtdVotos: number;
  } | null>(null);
  const [posicaoClicada, setPosicaoClicada] = useState<LatLngExpression>([
    -3.1, -60,
  ]);

  const MapaEventos = () => {
    useMapEvents({
      click(event) {
        let zona;
        const latitude = event.latlng.lat;
        const longitude = event.latlng.lng;
        const chave = `${latitude},${longitude}`;

        console.log({latitude},{longitude})

        dadosDeCoordenadas.forEach((estado) => {
          estado.municipios.forEach((municipio) => {
            const coordenadaMunicipio = municipio.cordenadas.find(
              (coordenada) => coordenada.slice(0, 6) === chave.slice(0, 6)
            );
            if (coordenadaMunicipio) {
              zona = municipio;
              return; //saindo do loop
            }
            municipio.distritos.forEach((distrito) => {
              const coordenadaEncontrada = distrito.cordenadas.find(
                (coordenada) => coordenada.slice(0, 6) === chave.slice(0, 6)
              );
              if (coordenadaEncontrada) {
                zona = distrito;
                return; 
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
    iconUrl: icon,
    iconSize: [32, 32],
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen dark:text-white">
      {" "}
      {/* Mudança para flex-col em telas menores */}
      <div className="w-full md:w-2/3 h-[600px] md:h-screen">
        {" "}
        {/* Mapa ocupa 2/3 da largura em telas médias e maiores */}
        <MapContainer
          center={[-3.1, -60]}
          zoom={12.3}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <MapaEventos />
          {posicaoClicada && (
            <Marker position={posicaoClicada} icon={myIcon}>
              <Popup>
                <div className="bg-slate-900 p-4 rounded">
                  {" "}
                  {/* Adicione classes aqui */}
                  {dadosZona ? (
                    <TableMap dados={dadosZona} />
                  ) : (
                    <p>Clique em uma área do mapa para selecionar uma zona.</p>
                  )}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      <div className="w-full md:w-1/3 h-[600px] md:h-screen shadow-lg shadow-black dark:bg-[#292929] border border-gray-300 p-4 text-center overflow-y-auto">
        {" "}
        {/* Tabela ocupa 1/3 da largura em telas médias e maiores */}
        <h3 className="text-lg font-semibold">Selecione uma zona no mapa</h3>
        {dadosZona ? (
          <TableMap dados={dadosZona} />
        ) : (
          <p>Clique em uma área do mapa para selecionar uma zona.</p>
        )}
      </div>
    </div>
  );
};

export default Mapa;
