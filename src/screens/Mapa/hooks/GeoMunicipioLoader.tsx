import React, { useEffect } from 'react';
import { loadGeoAmazonas, loadGeoManaus, loadGeoAlvaraes, loadGeoAmatura, loadGeoAnama, loadGeoAnori, loadGeoApui } from './GeoMunicipiosData';
import L from 'leaflet';

interface GeoLoaderProps {
  mapa: L.Map;  
}

const GeoLoader: React.FC<GeoLoaderProps> = ({ mapa }) => {
  useEffect(() => {
    if (mapa) {
     
      loadGeoAmazonas(mapa);
      loadGeoManaus(mapa);
      loadGeoAlvaraes(mapa);
      loadGeoAmatura(mapa)
      loadGeoAnama(mapa)
      loadGeoAnori(mapa)
      loadGeoApui(mapa)
    }
  }, [mapa]); 

  return null; 
};

export default GeoLoader;
