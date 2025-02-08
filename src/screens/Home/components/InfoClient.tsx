import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function ProfileCard() {
  const user = {
    name: "Nome de usuário",
    Partido: "Nome do partido",
    Coligação: "Nome da Coligação",
    location: "Nome do município",
    avatarUrl: 'https://static.vecteezy.com/ti/vetor-gratis/p1/2248241-politico-elite-giz-branco-icone-sobre-fundo-preto-vetor.jpg'
  };

  return (
    <Card className="w-full sm:w-64 h-auto flex flex-col items-center shadow-lg rounded-lg ">
      <Avatar className="w-20 h-20  rounded-full border-4 ">
        <img src={user.avatarUrl} alt={user.name} />
      </Avatar>
      <div className="flex flex-col items-center text-center space-y-1 ">
        <CardHeader>
          <CardTitle className="text-xl font-semibold t">Candidato: {user.name}</CardTitle>
        </CardHeader>
        <div className="w-full  ">
          <CardDescription className="text-sm">Partido: <span className="font-medium">{user.Partido}</span></CardDescription>
          <CardDescription className="text-sm">Coligação: <span className="font-medium">{user.Coligação}</span></CardDescription>
          <CardDescription className="text-sm">Município: <span className="font-medium">{user.location}</span></CardDescription>
        </div>
      </div>
    </Card>
  );
}
