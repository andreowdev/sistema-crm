import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { LiderancaProvider } from "@/Context/liderancaContext";
import { Charts } from "@/screens/Home/components/charts";
export default function Home() {
  return (
    <LiderancaProvider>
      <header className="flex space-x-8 p-8">
        <PerfilClient />
        <Cards />
      </header>

      <div className="container pt-21">
        <div className="flex space-x-8">
          <div className="w-4/12 ">
            <TableComp />
          </div>
          <div className="w-3/12">
            <Charts />
          </div>
          <div className="">
           Em construção
          </div>
        </div>
      </div>
    </LiderancaProvider>
  );
}

