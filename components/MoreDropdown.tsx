'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";


function MoreDropdown() {
    const [open, setOpen] = useState(false)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'lg'} className="md:w-full !justify-start space-x-2 !px-3">
                    <Menu />
                    <div className="hidden lg:block">More</div>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}

export default MoreDropdown