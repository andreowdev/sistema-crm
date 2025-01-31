import TableComp from "@/screens/Home/components/table";
import PerfilClient from "./components/InfoClient";
import Cards from "./components/Cards"

export default function Home() {

  return (
    <>
      <header className="flex space-x-8 p-8">
          <PerfilClient />
          <Cards />
      </header>

      <div className="container p-8">
        <div className="w-4/12">
          <TableComp />
        </div>
      </div>
    </>
  );
}
