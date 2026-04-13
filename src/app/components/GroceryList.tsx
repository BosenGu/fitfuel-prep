import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function GroceryList() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-1 flex-col justify-center gap-5 px-6 text-center">
        <button onClick={() => navigate(-1)} className="absolute left-4 top-4 rounded-full p-2 text-white hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#39FF14]">Archived Screen</p>
        <h1 className="text-2xl font-black text-white">旧版采购清单页已归档</h1>
        <p className="text-[14px] leading-relaxed text-[#A0A0A0]">
          新版主流程使用 AI 营养自选仓承载采购清单、预算和宏量营养追踪。此页面仅作为历史兼容占位。
        </p>
        <button onClick={() => navigate("/app/store")} className="rounded-xl bg-[#39FF14] px-4 py-3 text-[15px] font-bold text-black">
          打开 AI 营养自选仓
        </button>
      </div>
    </MobileContainer>
  );
}
