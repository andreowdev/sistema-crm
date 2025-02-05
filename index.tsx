import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { LiderancaProvider } from "@/Context/liderancaContext";
import { Charts } from "@/screens/Home/components/charts";
import InputCharts from "./components/inputCharts";
export default function Home() {
  return (
    <LiderancaProvider>
      <header className="flex space-x-4 p-2">
        <PerfilClient />
        <Cards />
      </header>

      <div className="container ">
        <div className="flex space-x-1 ">
          <div className="rounded-sm">
            <TableComp />
          </div>
          <div className="w-4/12">
            <div>
              <InputCharts />
              <Charts />
            </div>
          </div>
          
        </div>
      </div>
    </LiderancaProvider>
  );
}

