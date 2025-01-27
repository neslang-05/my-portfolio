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
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer"><a href="../">Home</a></div>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer"><a href="/blog">Blog</a></div>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer"><a href="/tags">Tag</a></div>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <div className="cursor-pointer"><a href="/about">About</a></div>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>)
  }

  export default NavbarSet