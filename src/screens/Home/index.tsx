import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { LiderancaProvider } from "@/Context/liderancaContext";
import { Charts } from "@/screens/Home/components/charts";
import InputCharts from "./components/inputCharts";
import Mapa from "../Mapa/mapa";
export default function Home() {
  return (
    <LiderancaProvider>
      <header className="flex space-x-4 p-2">
        <PerfilClient />
        <Cards />
      </header>

      <div className="container pt-21">
        <div className="flex space-x-20 ">
          <div className="w-3/12 ml-5 rounded-sm p-1 border-gray-500 border-2  ">
            <TableComp />
          </div>
          <div className="w-4/12">
            <div>
              <InputCharts />
              <Charts />
            </div>
          </div>
          <div className="w-6/12">
           <Mapa />
          </div>
        </div>
      </div>
    </LiderancaProvider>
  );
}

