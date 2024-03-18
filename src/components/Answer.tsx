import { ReactNode } from "react";

const Answer = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-center text-xl w-[75%] mx-auto bg-zinc-700 text-zinc-50 cursor-pointer hover:bg-zinc-800">
      {children}
    </p>
  );
};

export default Answer;
