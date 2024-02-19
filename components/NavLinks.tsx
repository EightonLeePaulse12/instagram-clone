'use client';

import { Clapperboard, Compass, Heart, Home, MessageCircle, PlusSquare, Search } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/dashboard", icon: Home },
    {
        name: "Search",
        href: "/dashboard/search",
        icon: Search,
        hideOnMobile: true,
    },
    { name: "Explore", href: "/dashboard/explore", icon: Compass },
    {
        name: "Reels",
        href: "/dashboard/reels",
        icon: Clapperboard,
    },
    {
        name: "Messages",
        href: "/dashboard/messages",
        icon: MessageCircle,
    },
    {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: Heart,
        hideOnMobile: true,
    },
    {
        name: "Create",
        href: "/dashboard/create",
        icon: PlusSquare,
    },
];

function NavLinks() {

    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                <Link key={link.name} href={link.href} className={buttonVariants({
                    variant: isActive ? "secondary" : "ghost",
                    className: cn("navLink", { "hidden md:flex": link.hideOnMobile }),
                    size: "lg",
                })}>

                </Link>
            })}
        </>
    )
}

export default NavLinks