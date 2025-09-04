import {
  Computer,
  LayoutDashboard,
  PanelLeftDashed,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";

function MainMenu({ icons, text }) {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full p-1 gap-2 rounded-md border-1 border-dark">
        <div className="flex items-center justify-center h-full p-1 gap-2 border-1 border-dark">
          {icons}
        </div>
        <div className="flex items-center justify-start w-full h-full p-1 gap-2 border-1 border-dark">
          {text}
        </div>
      </div>
    </>
  );
}

export default function PagesLayout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-row items-center justify-center w-full h-fit border-b-1 border-secondary">
          <div className="flex items-center justify-center w-[5%] h-full p-1 gap-2 border-1 border-dark">
            <Image
              src="/logoCompany/logoCompany_1.png"
              alt="logoCompany"
              width={18}
              height={18}
              priority
            />
          </div>
          <div className="flex items-center justify-start w-[10%] h-full p-1 gap-2 border-1 border-dark">
            Panuinc's Org
          </div>
          <div className="flex items-center justify-center w-[85%] h-full p-1 gap-2 border-1 border-dark">
            1
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-full border-t-1 border-secondary overflow-auto">
          <div className="flex flex-col items-center justify-start w-[15%] h-full gap-2 border-r-1 border-secondary overflow-auto">
            <div className="flex flex-col items-center justify-start w-full p-1 gap-2">
              <div className="flex flex-row items-center justify-center w-full p-1 gap-2 rounded-md border-1 border-dark">
                <div className="flex items-center justify-center h-full p-1 gap-2 border-1 border-dark">
                  <LayoutDashboard />
                </div>
                <div className="flex items-center justify-start w-full h-full p-1 gap-2 border-1 border-dark">
                  Overview
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-2 overflow-auto">
              <MainMenu icons={<User />} text="Human Resource" />
              <MainMenu icons={<Computer />} text="Technology" />
              <MainMenu icons={<Settings />} text="Setting" />
            </div>
            <div className="flex flex-col items-center justify-center w-full p-1 gap-2">
              <div className="flex flex-row items-center justify-start w-full p-1 gap-2 rounded-md border-1 border-dark">
                <div className="flex items-center justify-center h-full p-1 gap-2 border-1 border-dark">
                  <PanelLeftDashed />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[85%] h-full gap-2 border-l-1 border-secondary overflow-auto">
            <div className="flex flex-col items-center justify-start w-full h-full p-1 gap-2 border-1 border-danger overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
