import ButtonMMUI from "@/components/ButtonMMUI";
import { SupportAgent } from "@mui/icons-material";
import Image from "next/image";

import { Avatar, Skeleton } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import BasicPie from "@/components/PieChart";

const loading = true;

export default function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      <header className="w-full flex items-center justify-between bg-primary-500 md:px-20 lg:px-[6%]">
        <div>
          <Image src="/logo-white.png" alt="logo" height={118} width={220} />
        </div>
        <div className="flex gap-3">
          <ButtonMMUI label="Sair" white />
          <ButtonMMUI label="Suporte" icon={<SupportAgent />} white />
        </div>
      </header>
      <div className="w-full flex items-start justify-center gap-3 md:px-20 lg:px-[6%] mt-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <ButtonMMUI label="Cadastrar Produto" />
          <ButtonMMUI label="Editar Produto" />
          <ButtonMMUI label="Remover Produto" />
        </div>
        <div className="w-full h-full flex relative items-start justify-end border border-primary-500">
          <h2 className="absolute right-2 top-2">Rangos mais pedidos</h2>
          <BasicPie />
        </div>
      </div>
    </main>
  );
}
