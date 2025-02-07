import { LiderancaProvider } from "@/Context/liderancaContext";
import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards";
import { Charts } from "@/screens/Home/components/charts";

export default function Home() {
  return (
    <LiderancaProvider>
      <header className="flex flex-col sm:flex-row sm:space-x-60 p-4 h-auto shadow-lg mb-8">
        <PerfilClient />
        <Cards />
      </header>
      <main className="container ">
        <section className="flex flex-col sm:flex-row sm:space-x-8">
          {/* Table Component */}
          <div className="p-4 rounded-lg shadow-md mb-6 sm:mb-0 dark:bg-[#121b30]">
            <TableComp />
          </div>

          <div className="w-full sm:w-6/12  rounded-lg shadow-md">
            <div className="rounded-lg shadow-md">
              <Charts />
            </div>
          </div>
        </section>
      </main>
    </LiderancaProvider>
  );
}
