/** @format */
'use client'

import { useState } from 'react'
import { Nav } from './ui/nav'

import {
    AlertCircle,
    Archive,
    ArchiveX,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    MessagesSquare,
    Search,
    Send,
    Settings,
    ShoppingCart,
    Trash2,
    Users2,
    UsersRound,
  } from "lucide-react"
import { Button } from './ui/button'

import { useWindowWidth } from '@react-hook/window-size'

export type Props = {}

export function SideNavBar ({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>
      {!mobileWidth && (
        <div className='absolute right-[-20px] top-7'>
          <Button
            variant='secondary' 
            className='rounded-full p-2'
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Панель управления",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Пользователи",
            href: "/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Заказы",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Настройки",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          }
        ]}
      />
    </div>
  )
}