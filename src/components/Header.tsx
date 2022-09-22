import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonMenuHamburger } from "./ButtonMenuHambuger";
import { NavItemDropdown } from "./NavItemDropdown";
import { SideBar } from "./SideBar";

type Props = {};

export const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsFetures = [
    {
      name: "Todo List",
      icon: "/images/icon-todo.svg",
    },
    {
      name: "Calendar",
      icon: "/images/icon-calendar.svg",
    },
    {
      name: "Reminders",
      icon: "/images/icon-reminders.svg",
    },
    {
      name: "Planning",
      icon: "/images/icon-planning.svg",
    },
  ];

  const itemsCompany = [
    {
      name: "History",
    },
    {
      name: "Our Team",
    },
    {
      name: "Blog",
    },
  ];

  return (
    <>
      <header className="relative bg-almost-white flex items-center justify-between py-4 px-4 xl:px-0">
        <div className="flex justify-center items-center space-x-12">
          <Link href="/">
            <a className="relative w-20 h-12 flex items-center">
              <Image src="/images/logo.svg" width={84} height={27} />
            </a>
          </Link>
          <nav className="hidden items-center text-sm sm:flex">
            <NavItemDropdown name="Features" items={itemsFetures} />
            <NavItemDropdown name="Company" items={itemsCompany} />
            <Link href="#">
              <a className="nav-item inline-flex">Careers</a>
            </Link>{" "}
            <Link href="#">
              <a className="nav-item inline-flex">About</a>
            </Link>
          </nav>
        </div>
        <div className="hidden items-center space-x-4 text-sm md:flex">
          <Link href="#">
            <a className="nav-item">Login</a>
          </Link>
          <Link href="#">
            <a className="nav-item border border-medium-gray rounded-lg hover:border-almost-black">
              Register
            </a>
          </Link>
        </div>
        <ButtonMenuHamburger
          isOpen={isOpen}
          handleClick={() => setIsOpen(!isOpen)}
        />
      </header>
      <SideBar isOpen={isOpen}>
        <p>menu</p>
      </SideBar>
    </>
  );
};
