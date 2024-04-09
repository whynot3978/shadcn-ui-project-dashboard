/** @format */

'use client'

import  React from 'react';
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from 'recharts';

export type Props = {}

const data = [
  {
    name: 'Янв',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Фвр',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Март',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Апр',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Май',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Июнь',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Июль',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Авг',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Снт',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Нбр',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Окт',
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: 'Дек',
    total: Math.floor(Math.random() * 5000) + 1000
  }
]

export function BarChart ({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={'name'}
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          stroke='#888888'
          fontSize={12}
          tickFormatter={
            (value) => {
              return (
                `$${value}`
              )
            }
          }
        />

        <Bar 
          dataKey={'total'}
          radius={[4, 4, 0, 0]}
        />
      </BarGraph>
    </ResponsiveContainer>
  );
}