import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

export function TargetSetup() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="flex flex-1 flex-col justify-center gap-5 px-6 text-center">
        <button onClick={() => navigate(-1)} className="absolute left-4 top-4 rounded-full p-2 text-white hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#39FF14]">Archived Screen</p>
        <h1 className="text-2xl font-black text-white">旧版目标设置页已归档</h1>
        <p className="text-[14px] leading-relaxed text-[#A0A0A0]">
          当前 GitHub 展示主流程已收敛到暗黑硬核健身原型。此页面保留为历史入口占位，避免旧版浅色稿影响主流程。
        </p>
        <button onClick={() => navigate("/app")} className="rounded-xl bg-[#39FF14] px-4 py-3 text-[15px] font-bold text-black">
          回到主流程
        </button>
      </div>
    </MobileContainer>
  );
}
