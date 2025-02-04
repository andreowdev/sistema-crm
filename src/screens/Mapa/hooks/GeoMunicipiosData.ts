import L from 'leaflet';

export const loadGeoAmazonas = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/estados/AM?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregar o GeoJSON:', error);
  }
};

export const loadGeoManaus = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1302603?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregar o GeoJSON:', error);
  }
};

export const loadGeoAlvaraes = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1300029?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregar o GeoJSON:', error);
  }
};

export const loadGeoAmatura = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1300060?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregar o GeoJSON:', error);
  }
};

export const loadGeoAnori = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1300102?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregado o GeoJson: ',error)
  }
}

export const loadGeoApui = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1300144?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregado o GeoJson: ',error)
  }
}
  
export const loadGeoAnama = async (mapa: L.Map) => {
  try {
    const request = await fetch('https://servicodados.ibge.gov.br/api/v3/malhas/municipios/1300086?formato=application/vnd.geo+json&qualidade=maxima');
    const response = await request.json();
    L.geoJSON(response).addTo(mapa);
  } catch (error) {
    console.log('Erro ao carregado o GeoJson: ',error)
  }
}