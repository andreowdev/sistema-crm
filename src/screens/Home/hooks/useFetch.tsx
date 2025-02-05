
export const MetaData = () => {
  const storedData = JSON.parse(localStorage.getItem('leadersData') || 'null');

  return storedData;
}

interface SaveToLocalStorage {
  (key: string, data: unknown): void;
}

export const saveToLocalStorage: SaveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

interface GetFromLocalStorage {
  (key: string): unknown | null;
}

export const getFromLocalStorage: GetFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

interface CheckIfDataExists {
  (key: string): boolean;
}

export const checkIfDataExists: CheckIfDataExists = (key) => {
  return localStorage.getItem(key) !== null;
}