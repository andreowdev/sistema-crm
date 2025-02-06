import { LiderancaProvider } from "@/Context/liderancaContext";
import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { Charts } from "@/screens/Home/components/charts";
import { ModeToggle } from "@/components/ui/toggleMode";

export default function Home() {
  return (
    <LiderancaProvider>
      <header className="flex flex-col sm:flex-row sm:space-x-8 p-4  shadow-lg mb-8">
        <PerfilClient />
        <Cards />
        <ModeToggle />
      </header>

      <div className="container mx-auto p-6">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Table Component */}
          <div className="p-6 rounded-lg shadow-md mb-6 sm:mb-0 dark:bg-[#121b30]">
            <TableComp />
          </div>

          <div className="w-full sm:w-4/12 space-y-6">
            <div className=" p-4 rounded-lg shadow-md">
              <Charts />
              
            </div>
          </div>
        </div>
      </div>
    </LiderancaProvider>
  );
}
