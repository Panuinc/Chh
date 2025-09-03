export default function PagesLayout({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-2">
        <div className="flex flex-row items-center justify-center w-full h-fit p-2 gap-2 border-2 border-danger">
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-danger">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-danger">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-danger">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
              1
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-full p-2 gap-2 border-2 border-danger overflow-auto">
          <div className="flex flex-col items-center justify-start w-[15%] h-full p-2 gap-2 border-2 border-danger overflow-auto">
            <div className="flex flex-col items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark hover:bg-amber-300">
                <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark">
                  1
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  1
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark overflow-auto">
              <div className="flex flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark">
                  2
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  2
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full p-2 gap-2 border-2 border-dark">
              <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                <div className="flex items-center justify-center h-full p-2 gap-2 border-2 border-dark">
                  3
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
                  3
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[85%] h-full p-2 gap-2 border-2 border-danger overflow-auto">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark overflow-auto">
              <div className="flex items-center justify-center w-full h-20 p-2 gap-2 border-2 border-dark overflow-auto">
                1
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark overflow-auto">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
