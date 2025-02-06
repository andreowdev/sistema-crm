
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


export const chartData = [
  { month: "Mar", base: 0},
  { month: "April", base: 20},
  { month: "May", base: 40},
  { month: "June", base: 27},
  { month: "Jul", base: 45},
  { month: "Aug", base: 120},
  { month: "Sep", base: 0},
]