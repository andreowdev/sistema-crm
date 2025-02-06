import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function ProfileCard() {
  const user = {
    name: "João da Silva",
    Partido: "Republicanos",
    Coligação: "Unidados Por Manaus",
    location: "Manaus, Am",
    avatarUrl: "https://github.com/andreowdev.png"
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-96 h-auto flex flex-col items-center p-4 shadow-lg rounded-lg ">
        <Avatar className="w-24 h-24 mb-4 rounded-full">
          <img src={user.avatarUrl} alt={user.name} />
        </Avatar>
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-semibold">Candidato: {user.name}</CardTitle>
          <CardDescription className="text-sm ">Partido: {user.Partido}</CardDescription>
          <div>
            <CardDescription className="text-sm ">Coligação: {user.Coligação}</CardDescription>
            <CardDescription className="text-sm  mt-2">Município: {user.location}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
