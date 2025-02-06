import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <nav className="flex gap-6 p-4  justify-between items-center">
      <div className="mr-auto">
        <h1>SISTEMA CRM</h1>
      </div>
      <Button>
        <Link to="/" className="">
          Home
        </Link>
      </Button>
      <Button>
        <Link to="/mapa" className="">
          Mapa
        </Link>
      </Button>
    </nav>
  );
}
