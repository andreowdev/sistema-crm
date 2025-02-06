import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/toggleMode";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">SISTEMA CRM</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
          <Link to="/" className="text-white">
            Home
          </Link>
        </Button>
        <Button className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
          <Link to="/mapa" className="text-white">
            Mapa
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
