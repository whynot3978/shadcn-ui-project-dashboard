/* eslint-disable @next/next/no-img-element */
/** @format */

'use client'

import { DataTable } from "@/components/DataTable";
import { PageTitle } from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type Props = {}

export type Payment = {
    order: string
    status: string
    lastOrder: string
    method: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "order",
        header: "Номер заказа"
    },
    {
        accessorKey: "status",
        header: "Статус заказа",
        cell: ({row}) => {
            return (
                <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
                    "bg-red-200": row.getValue("status") === "Подготавливается",
                    "bg-orange-200": row.getValue("status") === "Заказ в пути",
                    "bg-green-200": row.getValue("status") === "Готов к выдаче"
                })}>
                    {row.getValue("status")}
                </div>
            )
        }
    },
    {
        accessorKey: "lastOrder",
        header: "Дата последнего заказа"
    },
    {
        accessorKey: "method",
        header: "Способ оплаты"
    }
  ]
  
export const data: Payment[] = [
    {
        order: "001",
        status: "Подготавливается",
        lastOrder: "06-11-2021",
        method: "MasterCard"
    },
    {
        order: "002",
        status: "Заказ в пути",
        lastOrder: "01-01-2021",
        method: "PayPal"
    },
    {
        order: "003",
        status: "Подготавливается",
        lastOrder: "01-01-2021",
        method: "Payoneer"
    },
    {
        order: "004",
        status: "Готов к выдаче",
        lastOrder: "15-03-2021",
        method: "MasterCard"
    },
    {
        order: "005",
        status: "Заказ в пути",
        lastOrder: "01-11-2021",
        method: "Payoneer"
    },
    {
        order: "006",
        status: "Заказ в пути",
        lastOrder: "06-12-2021",
        method: "Payoneer"
    },
    {
        order: "007",
        status: "Подготавливается",
        lastOrder: "24-11-2021",
        method: "MasterCard"
    },
    {
        order: "008",
        status: "Заказ в пути",
        lastOrder: "01-05-2021",
        method: "PayPal"
    },
    {
        order: "009",
        status: "Подготавливается",
        lastOrder: "23-01-2021",
        method: "Payoneer"
    },
    {
        order: "010",
        status: "Готов к выдаче",
        lastOrder: "01-09-2021",
        method: "PayPal"
    }
]  

export default function OrdersPage ({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Заказы" />

            <DataTable columns={columns} data={data} />
        </div>
    )
}