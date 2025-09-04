"use client";
import {
  Computer,
  LayoutDashboard,
  PanelLeftDashed,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function MainMenu({ icons, text, collapsed, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center justify-center w-full p-1 gap-1 border-1 border-dark cursor-pointer"
    >
      <div className="flex items-center justify-center w-fit h-full p-1 gap-1 border-1 border-dark">
        {icons}
      </div>
      {!collapsed && (
        <div className="flex items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark">
          {text}
        </div>
      )}
    </div>
  );
}

function SubMenu({ text }) {
  return (
    <div className="flex flex-row items-center justify-start w-full p-1 gap-1 border-1 border-dark cursor-pointer">
      {text}
    </div>
  );
}

export default function PagesLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    {
      icon: <User />,
      text: "Human Resource",
      subMenus: [
        "Human Resource 1",
        "Human Resource 2",
        "Human Resource 3",
        "Human Resource 4",
      ],
    },
    {
      icon: <Computer />,
      text: "Technology",
      subMenus: ["Tech 1", "Tech 2"],
    },
    {
      icon: <Settings />,
      text: "Setting",
      subMenus: ["Profile", "Security"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-center w-full h-fit border-1 border-danger">
        <div className="flex items-center justify-center w-[5%] h-full p-1 gap-1 border-1 border-dark">
          <Image
            src="/logoCompany/logoCompany_1.png"
            alt="logoCompany"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="flex items-center justify-start w-[10%] h-full p-1 gap-1 border-1 border-dark">
          Panuinc's Org
        </div>
        <div className="flex items-center justify-center w-[85%] h-full p-1 gap-1 border-1 border-dark">
          1
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full h-full border-1 border-danger overflow-auto">
        <div
          className={`flex flex-col items-center justify-start ${
            collapsed ? "w-fit" : "w-[15%]"
          } h-full p-1 gap-1 border-1 border-danger`}
        >
          <div
            className="flex flex-row items-center justify-center w-full p-1 gap-1 border-1 border-dark cursor-pointer"
            onClick={() => setActiveMenu(null)}
          >
            <div className="flex items-center justify-center w-fit h-full p-1 gap-1 border-1 border-dark">
              <LayoutDashboard />
            </div>
            {!collapsed && (
              <div className="flex items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark">
                Overview
              </div>
            )}
          </div>

          <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark overflow-auto">
            {menus.map((menu, idx) => (
              <MainMenu
                key={idx}
                icons={menu.icon}
                text={menu.text}
                collapsed={collapsed}
                onClick={() => setActiveMenu(menu)}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center w-full p-1 gap-1 border-1 border-dark">
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="flex flex-row items-center justify-end w-full p-1 gap-1 border-1 border-dark"
            >
              <div className="flex items-center justify-center w-fit h-full p-1 gap-1 border-1 border-dark">
                <PanelLeftDashed />
              </div>
            </button>
          </div>
        </div>

        {activeMenu && (
          <div
            className={`flex flex-col items-center justify-center ${
              collapsed ? "w-[15%]" : "w-[15%]"
            } h-full p-1 gap-1 border-1 border-danger`}
          >
            <div className="flex flex-col items-center justify-center w-full p-1 gap-1 border-1 border-dark">
              <div className="flex items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark">
                {activeMenu.text}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark overflow-auto">
              {activeMenu.subMenus.map((s, i) => (
                <SubMenu key={i} text={s} />
              ))}
            </div>
          </div>
        )}

        <div
          className={`flex flex-col items-center justify-center ${
            activeMenu ? (collapsed ? "w-[85%]" : "w-[70%]") : "w-full"
          } h-full p-1 gap-1 border-1 border-danger`}
        >
          <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-1 border-1 border-dark overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
