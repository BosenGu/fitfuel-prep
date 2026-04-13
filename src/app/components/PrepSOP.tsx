import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function PrepSOP() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-1 flex-col justify-center gap-5 px-6 text-center">
        <button onClick={() => navigate(-1)} className="absolute left-4 top-4 rounded-full p-2 text-white hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#39FF14]">Archived Screen</p>
        <h1 className="text-2xl font-black text-white">旧版 SOP 页面已归档</h1>
        <p className="text-[14px] leading-relaxed text-[#A0A0A0]">
          当前展示版本使用新版备餐 SOP 页面，包含 AI 评分、三套烹饪策略和备餐打卡入口。
        </p>
        <button onClick={() => navigate("/app/sop")} className="rounded-xl bg-[#39FF14] px-4 py-3 text-[15px] font-bold text-black">
          打开新版 SOP
        </button>
      </div>
    </MobileContainer>
  );
}
