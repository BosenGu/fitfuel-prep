import { ReactNode } from "react";

export function MobileContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center bg-black min-h-screen font-sans text-white selection:bg-[#39FF14] selection:text-black">
      <div className="w-[393px] max-w-full bg-[#121212] min-h-[100dvh] relative shadow-2xl flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
