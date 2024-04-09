/* eslint-disable @next/next/no-img-element */
/** @format */

'use client'

import { DataTable } from "@/components/DataTable";
import { PageTitle } from "@/components/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type Props = {}

export type Payment = {
    name: string
    email: string
    lastOrder: string
    method: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Имя пользователя",
        cell: ({row}) => {
            return (
                <div className="flex gap-2 items-center">
                    <img
                        className="h-10 w-10"
                        src={
                            `https://api.dicebear.com/8.x/adventurer/svg?seed=${row.getValue("name")}`
                        }
                        alt=""
                    />
                    <p>{row.getValue("name")}</p>
                </div>
            )
        }
    },
    {
      accessorKey: "email",
      header: "Электронная почта",
    },
    {
      accessorKey: "lastOrder",
      header: "Дата последнего заказа",
    },
    {
      accessorKey: "method",
      header: "Способ оплаты",
    },
  ]
  
export const data: Payment[] = [
    {
        name: "Михаил Саверин",
        email: "mihail.saverin@mail.ru",
        lastOrder: "06-11-2021",
        method: "MasterCard"
    },
    {
        name: "Жанна Фёдорова",
        email: "janna.federova@mail.ru",
        lastOrder: "01-01-2021",
        method: "PayPal"
    },
    {
        name: "Алексей Тихонов",
        email: "aleksey.tihonov@mail.ru",
        lastOrder: "01-01-2021",
        method: "Payoneer"
    },
    {
        name: "Екатерина Белкина",
        email: "ekaterina.belkina@mail.ru",
        lastOrder: "15-03-2021",
        method: "MasterCard"
    },
    {
        name: "Дмитрий Алексеев",
        email: "dmitriy.alekseev@mail.ru",
        lastOrder: "01-11-2021",
        method: "Payoneer"
    },
    {
        name: "Валентина Миронова",
        email: "valentina.mironova@mail.ru",
        lastOrder: "06-12-2021",
        method: "Payoneer"
    },
    {
        name: "Василий Добрый",
        email: "vasiliy.dobriy@mail.ru",
        lastOrder: "24-11-2021",
        method: "MasterCard"
    },
    {
        name: "Карина Васильева",
        email: "karina.vasilieva@mail.ru",
        lastOrder: "01-05-2021",
        method: "PayPal"
    },
    {
        name: "Генадий Петров",
        email: "egnadiy.petrov@mail.ru",
        lastOrder: "23-01-2021",
        method: "Payoneer"
    },
    {
        name: "Яна Тимофеева",
        email: "yana.timofeeva@mail.ru",
        lastOrder: "01-09-2021",
        method: "PayPal"
    }
]  

export default function UsersPage ({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Пользователи" />

            <DataTable columns={columns} data={data} />
        </div>
    )
}