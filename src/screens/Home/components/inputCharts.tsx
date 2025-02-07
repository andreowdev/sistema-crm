import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface InputChartsProps {
  data: { month: string; base: number }[];
  handleChange: (month: string, newBase: number) => void;
}

export function InputCharts({ data, handleChange }: InputChartsProps) {
  return (
    <Popover>
      <PopoverTrigger className="rounded-sm mt-auto  ml-2 cursor-pointer">
        Modificar dados do gráfico
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div>
          {data.map((item) => (
            <div key={item.month} className="mb-4">
              <label className="block text-sm font-medium">
                {item.month}:
                <Input
                  type="number"
                  value={item.base}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (!isNaN(value)) {
                      handleChange(item.month, value);
                    }
                  }}
                  className="rounded-md text-center "
                  placeholder="Insira um número"
                />
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
