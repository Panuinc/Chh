import React from "react";

export default function UIIndex() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full h-screen p-2 gap-2 border-2 border-dark">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          1
        </div>
        <div className="lg:flex hidden flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          1
        </div>
      </div>
    </>
  );
}
