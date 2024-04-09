import { BarChart } from "@/components/BarChart";
import { Card, CardContent, CardProps } from "@/components/Card";
import { PageTitle } from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/ui/SalesCard";
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
];

const userSalesData: SalesProps[] = [
  {
    name: 'Алиса Валиева',
    email: 'alisa.valieva@mail.ru',
    saleAmount: '+$1,999.00'
  },
  {
    name: 'Дмитрий Карпов',
    email: 'dmitriy.karpov@mail.ru',
    saleAmount: '+$1,999.00'
  },
  {
    name: 'Василиса Короткова',
    email: 'vasilisa.korotkova@mail.ru',
    saleAmount: '+$39.00'
  },
  {
    name: 'Сергей Булавкин',
    email: 'sergey.bulavkin@mail.ru',
    saleAmount: '+$299.00'
  },
  {
    name: 'Карина Куликова',
    email: 'karina.kulikova@mail.ru',
    saleAmount: '+$39.00'
  }
];

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

        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Недавние продажи</p>
            <p className="text-sm text-gray-400">
              Вы совершили 256 продаж в этом месяце
            </p>
          </section>

          {userSalesData.map((d, i) => (  // d-data, i-index
            <SalesCard
              key={i}
              name={d.name}
              email={d.email}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
