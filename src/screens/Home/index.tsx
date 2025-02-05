import { LiderancaProvider } from "@/Context/liderancaContext";
import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { Charts } from "@/screens/Home/components/charts";
import InputCharts from "./components/inputCharts";

export default function Home() {
  return (
    <LiderancaProvider>
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row sm:space-x-8 p-4 bg-gray-100 shadow-lg mb-8">
        <PerfilClient />
        <Cards />
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Table Component */}
          <div className="flex-1 bg-[#9ACBD0] p-6 rounded-lg shadow-md mb-6 sm:mb-0">
            <TableComp />
          </div>

          {/* Charts Section */}
          <div className="w-full sm:w-4/12 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <InputCharts />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    </LiderancaProvider>
  );
}
