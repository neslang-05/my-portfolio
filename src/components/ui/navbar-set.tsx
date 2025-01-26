import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavbarSet = () => {
    return (
        <NavigationMenu >
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3 space-y-2 width-y-48" >
                        <ul className="gap-3 p-1 md:w-[200px] ">
                            <div className="text-sm-bold">
                                <li><a className="hover:font-bold hover:text-green-900" href="#about">My Projects</a></li>
                                <li><a className="hover:font-bold hover:text-green-900" href="#about">Work Experience</a></li>
                                <li><a className="hover:font-bold hover:text-green-900" href="#about">Education</a></li>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer">Blog</div>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer">Tag</div>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer">About</div>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>)
  }

  export default NavbarSet