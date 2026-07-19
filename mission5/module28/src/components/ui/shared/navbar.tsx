"use client"

import Link from "next/link"
import { Menu, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/service/logout"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

type IUser = {
    success: boolean;
    message: string;
    data: {
        id: string;
        name: string;
        email: string;
        status: string;
        role: string;
        createdAt: string;
        updatedAt: string;
        reviews: any[];
        orders: any[];
    };  

}
type NavbarProps = {
    user: IUser 
}

export function Navbar({user}: NavbarProps) {
    const router = useRouter()
    const handleUserMenuAction = async (action: string) => {
        console.log(`User menu action: ${action}`)

        if (action === "logout") {
            await logout()
            toast.success("User logged out Successfully!")
            router.push("/login")
        }
    }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            A
          </span>
          <span className="text-lg font-semibold tracking-tight">AlgoDevs Inc</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: user dropdown + mobile menu */}
        <div className="flex items-center gap-2">
          {
            user.success ? ( <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/diverse-avatars.png" alt="User avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex flex-col gap-1">
                <span className="text-sm font-medium">{user.data?.name || null}</span>
                <span className="text-xs font-normal text-muted-foreground">{user.data?.email || null}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={async () => await handleUserMenuAction("logout")}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>) : <Link href={"/login"}>
                <Button className="cursor-pointer">
                    Login
                </Button>
          </Link>
          }

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 md:hidden">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
