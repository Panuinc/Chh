import React from "react";

export default function UITopic({ topic }) {
  return (
    <>
      <div className="flex items-center justify-start w-full p-1 gap-2 border-1 border-dark text-lg">
        {topic}
      </div>
    </>
  );
}
