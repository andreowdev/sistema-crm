import { Card, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function ProfileCard() {
  const user = {
    name: "João da Silva",
    Partido: "Republicanos",
    Coligação: "Unidados Por Manaus",
    location: "Manaus, Am",
    avatarUrl: "https://github.com/andreowdev.png" 
  };

  return (
    <Card className="w-3/12 h-40 flex pl-1">
      <Avatar className="w-24 h-24 mx-auto mt-8 rounded-full">
        <img src={user.avatarUrl} alt="" srcSet="" />
      </Avatar>
      <CardHeader>
        <CardTitle className="mt-4 text-xl font-semibold">Candidato: {user.name}</CardTitle>
        <CardDescription className="text-sm text-gray-700">Partido: {user.Partido}</CardDescription>
      <div className="">
        <p className="text-sm text-gray-700">Coligação: {user.Coligação}</p>
        <p className="text-sm text-gray-700 mt-2">Município: {user.location}</p>
      </div>
      </CardHeader>
    </Card>
  );
}
