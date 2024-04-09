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
    category: string
    value: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "category",
        header: "Категория"
    },
    {
        accessorKey: "value",
        header: "Значение"
    }
  ]
  
export const data: Payment[] = [
    {
        category: "Аккаунт",
        value: "Подключён"
    },
    {
        category: "Уведомления",
        value: "Не подключены"
    },
    {
        category: "Язык",
        value: "Русский"
    },
    {
        category: "Тема приложения",
        value: "Светлая"
    }
]  

export default function OrdersPage ({}: Props) {
    return (
        <div className="flex flex-col gap-5 w-full">
            <PageTitle title="Настройки приложения" />

            <DataTable columns={columns} data={data} />
        </div>
    )
}