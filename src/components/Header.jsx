import { useState } from 'react';
import logo from '../assets/rocket.png';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Rockets",
        "Explore",
        "Planets",
        "Meet the Crew",
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
                        <Link aria-current="page" href="#" className='font-medium'>
                            Rockets
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link href="#"  className='text-gray-100 font-[300]' >
                            Explore
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link className='text-gray-100 font-[300]' href="#">
                            Planets
                        </Link>
                    </NavbarItem>

                    <NavbarItem className='mx-4'>
                        <Link className='text-gray-100 font-[300]' href="#">
                            Meet the Crew
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

                <NavbarMenu className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                // color={
                                //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                // }
                                className="w-full text-gray-300"
                                href="#"
                                size="base"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
    );
}
