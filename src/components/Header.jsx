import { useState } from 'react';
import logo from '../assets/rocket.png';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
            <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-transparent text-white' maxWidth='xl'>
                <NavbarContent justify='start'>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />

                    <NavbarBrand>
                        <img
                            src={logo}
                            alt='SpaceX'
                            className='object-contain'
                            height={32}
                            width={32}
                        />
                        <p className="font-medium text-base">Space<span className='text-blue-500 font-black'>X</span></p>
                    </NavbarBrand>

                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className='mx-4'>
                        <Link isActive aria-current="page" href="#" className='font-medium'>
                            Rockets
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link href="#"  className='text-gray-100 font-[300]' >
                            Concept
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link className='text-gray-100 font-[300]' href="#">
                            Explore
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link className='text-gray-100 font-[300]' href="#">
                            Planet
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex mr-2">
                        <Link href="#" className='text-gray-50'>Login</Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
    );
}
