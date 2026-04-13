import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Flame, Leaf, Package, Share2, UtensilsCrossed, Zap } from "lucide-react";
import { AIFab } from "./AIFab";
import { MobileContainer } from "./MobileContainer";

type PlanKey = "A" | "B" | "C";

const plans: Record<PlanKey, { title: string; subtitle: string; meta: string[]; steps: Array<{ text: string; icon: "flame" | "cook" | "leaf" | "pack"; color: string }> }> = {
  A: {
    title: "极速单烤：牛排、三文鱼与地瓜",
    subtitle: "适合训练日后的高蛋白恢复餐，清洗量低，出餐稳定。",
    meta: ["总耗时 25 分钟", "难度 极低", "洗碗友好"],
    steps: [
      { text: "地瓜切块，喷少量橄榄油，放入空气炸锅或烤箱，200 度烤 20 分钟。", icon: "flame", color: "border-[#FF5722]" },
      { text: "牛排与三文鱼同放烤盘，撒海盐和黑胡椒。三文鱼表面铺柠檬片，180 度烤 15 分钟。", icon: "cook", color: "border-[#39FF14]" },
      { text: "羽衣甘蓝切碎，与蓝莓、牛油果拌匀，淋少量苹果醋，保留抗氧化食材的新鲜口感。", icon: "leaf", color: "border-[#00E5FF]" },
      { text: "按两份晚餐分装：一盒牛排配地瓜，一盒三文鱼配沙拉，冷藏保存。", icon: "pack", color: "border-[#A0A0A0]" },
    ],
  },
  B: {
    title: "主推煎烤：焦香牛排与脆皮三文鱼",
    subtitle: "更适合想要口感和仪式感的备餐日。",
    meta: ["总耗时 35 分钟", "难度 中等", "风味更强"],
    steps: [
      { text: "地瓜与羽衣甘蓝先入烤箱，地瓜烤 25 分钟，羽衣甘蓝 10 分钟后取出。", icon: "flame", color: "border-[#FF5722]" },
      { text: "三文鱼皮面朝下小火煎出油脂，再翻面煎至七分熟，取出静置。", icon: "cook", color: "border-[#FFD700]" },
      { text: "牛排入热锅，每面煎 1 分钟，加入蒜与少量黄油做 Baste，静置 5 分钟后切片。", icon: "flame", color: "border-[#39FF14]" },
      { text: "牛排、三文鱼、地瓜和蔬菜分装，蓝莓作为餐后抗氧化补充。", icon: "pack", color: "border-[#A0A0A0]" },
    ],
  },
  C: {
    title: "极简水煮：低油脂恢复餐",
    subtitle: "适合减脂期或肠胃压力较高的训练周。",
    meta: ["总耗时 20 分钟", "难度 极低", "低油脂"],
    steps: [
      { text: "地瓜去皮切大块，上锅蒸 15 分钟至完全软糯。", icon: "flame", color: "border-[#FF5722]" },
      { text: "水中加入姜片与料酒，牛排薄片快速汆烫，三文鱼低温煮 3 分钟。", icon: "cook", color: "border-[#00E5FF]" },
      { text: "羽衣甘蓝焯水 45 秒后过冷水，保持口感和绿色。", icon: "leaf", color: "border-[#39FF14]" },
      { text: "所有食材分装，用海盐、黑胡椒或低糖酱油简单调味。", icon: "pack", color: "border-[#A0A0A0]" },
    ],
  },
};

function StepIcon({ icon }: { icon: "flame" | "cook" | "leaf" | "pack" }) {
  const className = "h-5 w-5";
  if (icon === "flame") return <Flame className={`${className} text-[#FF5722]`} />;
  if (icon === "cook") return <UtensilsCrossed className={`${className} text-[#39FF14]`} />;
  if (icon === "leaf") return <Leaf className={`${className} text-[#00E5FF]`} />;
  return <Package className={`${className} text-white`} />;
}

export function SOP() {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState<PlanKey>("A");
  const currentPlan = plans[activePlan];

  return (
    <MobileContainer>
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1E1E1E] bg-[#121212]/90 px-4 py-4 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-[17px] font-bold tracking-wide text-white">今日硬核备餐 2 份</h1>
        <button className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="分享">
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 pb-32 pt-6">
        <section className="relative overflow-hidden rounded-xl p-[2px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#39FF14] via-[#00E5FF] to-[#39FF14] opacity-50 blur-sm" />
          <div className="relative rounded-xl border border-[#39FF14]/50 bg-[#1E1E1E] p-5 shadow-[0_0_20px_rgba(57,255,20,0.15)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#39FF14]">AI 营养学评分</span>
              <span className="rounded border border-[#FFD700]/30 bg-[#FFD700]/10 px-2.5 py-1 text-[13px] font-extrabold uppercase tracking-wider text-[#FFD700]">S 级优选</span>
            </div>
            <div className="my-4 flex justify-center">
              <div className="text-6xl font-black tracking-tighter text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                98 <span className="text-3xl font-bold text-[#A0A0A0]">/ 100</span>
              </div>
            </div>
            <p className="rounded-lg border border-[#2A2A2A] bg-[#121212] p-3 text-[13px] font-medium leading-relaxed text-[#A0A0A0]">
              <span className="font-bold text-white">策略达标：</span>优质动物蛋白充足，碳水集中在训练恢复窗口，蓝莓和绿叶菜补足抗氧化与膳食纤维。
            </p>
          </div>
        </section>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
          {(["A", "B", "C"] as PlanKey[]).map((key) => (
            <button key={key} onClick={() => setActivePlan(key)} className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2.5 text-[13px] font-bold transition-all ${activePlan === key ? "bg-[#39FF14] text-black shadow-[0_0_10px_rgba(57,255,20,0.2)]" : "border border-[#2A2A2A] bg-[#1E1E1E] text-white hover:border-[#A0A0A0]"}`}>
              Plan {key}
            </button>
          ))}
        </div>

        <section className="rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-5 shadow-sm">
          <div className="mb-6">
            <h2 className="mb-1.5 text-[19px] font-extrabold leading-tight text-white">{currentPlan.title}</h2>
            <p className="mb-4 text-[14px] font-medium text-[#A0A0A0]">{currentPlan.subtitle}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wide">
              {currentPlan.meta.map((item) => (
                <span key={item} className="rounded border border-[#2A2A2A] bg-[#121212] px-2 py-1 text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col">
            {currentPlan.steps.map((step, index) => (
              <div key={step.text} className="relative mb-6 flex gap-4 last:mb-0">
                {index !== currentPlan.steps.length - 1 && <div className="absolute bottom-[-16px] left-[19px] top-[40px] z-0 w-[2px] bg-[#2A2A2A]" />}
                <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-[#121212] shadow-sm ${step.color}`}>
                  <StepIcon icon={step.icon} />
                  <div className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <p className="flex-1 pt-1 text-[14px] font-medium leading-relaxed text-white">{step.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AIFab />

      <div className="absolute bottom-0 z-10 w-full border-t border-[#1E1E1E] bg-[#121212] p-5 pb-8 pt-4">
        <button onClick={() => navigate("/app/calendar")} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#39FF14] py-4 text-[17px] font-bold text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all hover:bg-[#32e011] active:scale-[0.98]">
          完成备餐并开始打卡日历
          <Zap className="h-5 w-5 fill-black" />
        </button>
      </div>
    </MobileContainer>
  );
}
