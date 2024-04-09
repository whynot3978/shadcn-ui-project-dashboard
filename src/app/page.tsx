import { BarChart } from "@/components/BarChart";
import { Card, CardContent, CardProps } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const CardData: CardProps[] = [
  {
    label: "Общий доход",
    amount: "$45,231.89",
    description: "+20.1% по сравнению с прошлым месяцем",
    icon: DollarSign
  },
  {
    label: "Подписчиков",
    amount: "+2350",
    description: "+180.1% по сравнению с прошлым месяцем",
    icon: Users
  },
  {
    label: "Продажи",
    amount: "+12,234",
    description: "+19% по сравнению с прошлым месяцем",
    icon: CreditCard
  },
  {
    label: "Активность сейас",
    amount: "$45,231.89",
    description: "+20.1% по сравнению с прошлым часом",
    icon: Activity
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Панель управления" />

      <section className="grid w-fill grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {CardData.map((d, i) => (  // d-data, i-index
          <Card
            key={i}

            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Обзор</p>
          <BarChart />
        </CardContent>

        <CardContent>
          <section>
            <p>Недавние продажи</p>
            <p className="text-sm text-gray-400">
              Вы совершили 256 продаж в этом месяце
            </p>
          </section>
        </CardContent>
      </section>
    </div>
  );
}
