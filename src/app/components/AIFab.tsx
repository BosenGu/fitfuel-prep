import { useState } from "react";
import { Mic, Send, Sparkles, X } from "lucide-react";

export function AIFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-36 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#32e011] bg-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all hover:scale-105 active:scale-95"
        aria-label="打开 FitFuel AI 助理"
      >
        <Sparkles className="h-6 w-6 fill-black text-black" />
      </button>

      {isOpen && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm">
          <div className="relative flex w-full flex-col gap-5 overflow-hidden rounded-t-[24px] border-t border-[#39FF14]/30 bg-[#1E1E1E] p-5 pb-8 shadow-[0_-10px_40px_rgba(57,255,20,0.1)]">
            <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 rounded-full bg-[#39FF14] blur-[8px]" />

            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10">
                  <Sparkles className="h-4 w-4 text-[#39FF14]" />
                </div>
                <span className="font-bold tracking-wide text-white">FitFuel 智能助理</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#121212] p-2 text-[#A0A0A0] transition-colors hover:text-white"
                aria-label="关闭 AI 助理"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-2 flex max-h-[40vh] flex-col gap-4 overflow-y-auto">
              <div className="max-w-[80%] self-end rounded-2xl rounded-tr-sm bg-[#2A2A2A] px-4 py-3 text-[14px] text-white shadow-sm">
                我不想吃鸡胸肉，能换成鱼类吗？
              </div>

              <div className="relative max-w-[90%] self-start rounded-2xl rounded-tl-sm border border-[#39FF14]/20 bg-gradient-to-r from-[#39FF14]/10 to-[#1E1E1E] px-4 py-3 text-[14px] leading-relaxed text-[#E0E0E0] shadow-sm">
                <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,1)]" />
                没问题，已替换为 <strong className="text-[#39FF14]">挪威冰鲜三文鱼柳</strong>，并重新计算宏量营养。当前蛋白质达标，脂肪略高但仍在备餐策略范围内。
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-[#2A2A2A] bg-[#121212] p-1.5 transition-colors focus-within:border-[#39FF14]/50">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1E1E] text-[#39FF14] transition-colors hover:bg-[#2A2A2A]" aria-label="语音输入">
                <Mic className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="输入替换偏好或备餐指令..."
                className="flex-1 border-none bg-transparent px-2 text-[14px] text-white outline-none placeholder:text-[#A0A0A0]"
                disabled
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39FF14] text-black transition-colors hover:bg-[#32e011]" aria-label="发送">
                <Send className="ml-[-2px] h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
