"use client";
import {
  BellDot,
  Computer,
  LayoutDashboard,
  LogOut,
  PanelLeftDashed,
  Settings,
  User,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

function MainMenu({ icons, text, collapsed, href, onClick, active }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex flex-row items-center justify-center w-full p-1 gap-1 rounded-lg cursor-pointer ${
        active
          ? "bg-light-foreground dark:bg-dark-foreground"
          : "hover:bg-light-foreground hover:dark:bg-dark-foreground"
      }`}
    >
      <div className="flex items-center justify-center w-fit h-full p-1 gap-1">
        {icons}
      </div>
      {!collapsed && (
        <div className="flex items-center justify-start w-full h-full p-1 gap-1">
          {text}
        </div>
      )}
    </Link>
  );
}

function SubMenu({ text, href, active }) {
  return (
    <Link
      href={href}
      className={`flex flex-row items-center justify-start w-full p-1 gap-1 rounded-lg cursor-pointer ${
        active
          ? "bg-light-foreground dark:bg-dark-foreground"
          : "hover:bg-light-foreground hover:dark:bg-dark-foreground"
      }`}
    >
      <div className="flex items-center justify-start w-full h-full p-1 gap-1">
        {text}
      </div>
    </Link>
  );
}

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menus = [
    {
      icon: <User />,
      text: "Human Resource",
      href: "/human",
      subMenus: [
        { text: "Human Resource 1", href: "/human/1" },
        { text: "Human Resource 2", href: "/human/2" },
        { text: "Human Resource 3", href: "/human/3" },
        { text: "Human Resource 4", href: "/human/4" },
      ],
    },
    {
      icon: <Computer />,
      text: "Technology",
      href: "/tech",
      subMenus: [
        { text: "Tech 1", href: "/tech/1" },
        { text: "Tech 2", href: "/tech/2" },
      ],
    },
    {
      icon: <Settings />,
      text: "Setting",
      href: "/settings",
      subMenus: [
        { text: "Profile", href: "/settings/profile" },
        { text: "Security", href: "/settings/security" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-center w-full h-fit border-[0.5px] border-light-foreground dark:border-dark-foreground">
        <div className="flex items-center justify-center w-[5%] h-full p-1 gap-1">
          <Image
            src="/logoCompany/logoCompany_1.png"
            alt="logoCompany"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="flex items-end justify-start w-[10%] h-full p-1 gap-1">
          Panuinc's Org
        </div>
        <div className="flex items-center justify-center w-[76%] h-full p-1 gap-1">
          {" "}
        </div>
        <div className="flex items-center justify-center w-[3%] aspect-square p-1 gap-1 hover:bg-light-foreground hover:dark:bg-dark-foreground rounded-lg">
          <BellDot />
        </div>
        <div className="flex items-center justify-center w-[3%] h-full p-1 gap-1 hover:bg-light-foreground hover:dark:bg-dark-foreground rounded-lg">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center justify-center w-full h-full"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>
          )}
        </div>
        <div className="flex items-center justify-center w-[3%] h-full p-1 gap-1">
          <Image
            src="/pictureUser/pictureUser_1.png"
            alt="pictureUser"
            width={30}
            height={30}
            priority
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full h-full border-[0.5px] border-light-foreground dark:border-dark-foreground overflow-auto">
        <div
          className={`flex flex-col items-center justify-start h-full p-1 gap-1 border-[0.5px] border-light-foreground dark:border-dark-foreground ${
            collapsed ? "w-fit" : "w-[15%]"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full p-1 gap-1 border-b-1 border-light-foreground dark:border-dark-foreground">
            <Link
              href="/overview"
              className={`flex flex-row items-center justify-center w-full p-1 gap-1 rounded-lg cursor-pointer ${
                pathname === "/overview"
                  ? "bg-light-foreground dark:bg-dark-foreground"
                  : "hover:bg-light-foreground hover:dark:bg-dark-foreground"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              <div className="flex items-center justify-center w-fit h-full p-1 gap-1">
                <LayoutDashboard />
              </div>
              {!collapsed && (
                <div className="flex items-center justify-start w-full h-full p-1 gap-1">
                  Overview
                </div>
              )}
            </Link>
          </div>

          <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 overflow-auto">
            {menus.map((menu, idx) => (
              <MainMenu
                key={idx}
                icons={menu.icon}
                text={menu.text}
                href={menu.href}
                collapsed={collapsed}
                onClick={() => setActiveMenu(menu)}
                active={pathname.startsWith(menu.href)}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center w-full p-1 gap-1 border-t-1 border-light-foreground dark:border-dark-foreground">
            <div className="flex flex-row items-center justify-center w-full p-1 gap-1 hover:bg-light-foreground hover:dark:bg-dark-foreground rounded-lg cursor-pointer">
              <div className="flex items-center justify-center w-fit h-full p-1 gap-1">
                <LogOut />
              </div>
              {!collapsed && (
                <div className="flex items-center justify-start w-full h-full p-1 gap-1">
                  Logout
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-end justify-center w-full p-1 gap-1">
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="flex flex-row items-center justify-center p-1 gap-1 hover:bg-light-foreground hover:dark:bg-dark-foreground rounded-lg"
            >
              <div className="flex items-center justify-center w-full h-full p-1 gap-1">
                <PanelLeftDashed />
              </div>
            </button>
          </div>
        </div>

        {activeMenu && (
          <div
            className={`flex flex-col items-center justify-center h-full p-1 gap-1 border-[0.5px] border-light-foreground dark:border-dark-foreground ${
              collapsed ? "w-[15%]" : "w-[15%]"
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full p-1 gap-1 border-b-1 border-light-foreground dark:border-dark-foreground">
              <div className="flex flex-row items-center justify-center w-full h-full p-1 gap-1">
                <div className="flex items-center justify-start w-full h-full p-1 gap-1">
                  {activeMenu.text}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 overflow-auto">
              {activeMenu.subMenus.map((s, i) => (
                <SubMenu
                  key={i}
                  text={s.text}
                  href={s.href}
                  active={pathname === s.href}
                />
              ))}
            </div>
          </div>
        )}

        <div
          className={`flex flex-col items-center justify-center h-full p-1 gap-1 border-[0.5px] border-light-foreground dark:border-dark-foreground ${
            activeMenu && !collapsed
              ? "w-[70%]"
              : !activeMenu && !collapsed
              ? "w-[85%]"
              : !activeMenu && collapsed
              ? "flex-1"
              : "w-[85%]"
          }`}
        >
          <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
