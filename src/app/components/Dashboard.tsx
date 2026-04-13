import { useState } from "react";
import { useNavigate } from "react-router";
import { Minus, Plus, Settings, Zap } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

type MealKey = "breakfast" | "lunch" | "postWorkout" | "dinner";

const mealRows: Array<{ key: MealKey; title: string; subtitle: string }> = [
  { key: "breakfast", title: "早餐", subtitle: "缓释供能" },
  { key: "lunch", title: "午餐", subtitle: "均衡供能与饱腹感" },
  { key: "postWorkout", title: "练后餐", subtitle: "高蛋白 + 快碳窗口" },
  { key: "dinner", title: "晚餐", subtitle: "低碳高蛋白" },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [strategy, setStrategy] = useState("维持 Maintain");
  const [isCarbCycling, setIsCarbCycling] = useState(false);
  const [meals, setMeals] = useState<Record<MealKey, number>>({ breakfast: 0, lunch: 2, postWorkout: 0, dinner: 2 });
  const [budget, setBudget] = useState(40);
  const strategies = ["减脂 Cut", "维持 Maintain", "增肌 Bulk"];

  const updateMeal = (key: MealKey, delta: number) => {
    setMeals((current) => ({ ...current, [key]: Math.max(0, current[key] + delta) }));
  };

  return (
    <MobileContainer>
      <div className="sticky top-0 z-20 flex items-center justify-between bg-[#121212] px-4 py-4">
        <button onClick={() => navigate("/app/profile")} className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#39FF14] bg-[#1E1E1E] p-[2px] shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-transform hover:scale-105" aria-label="打开个人档案">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop" alt="Bosen 头像" className="h-full w-full rounded-full object-cover" />
        </button>
        <button className="p-2 text-[#A0A0A0] transition-colors hover:text-white" aria-label="设置">
          <Settings className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-36">
        <div className="pb-6 pt-2">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white">Hi, Bosen.</h1>
          <p className="mb-4 text-[15px] font-medium leading-snug text-[#A0A0A0]">
            我是你的专业健身营养 AI 助手。准备好生成下一轮备餐计划了吗？
          </p>
          <div className="flex flex-wrap gap-2">
            {["75kg", "每周 5 练", "Clean Bulk"].map((tag) => (
              <span key={tag} className="rounded-full border border-[#2A2A2A] bg-[#1E1E1E] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#39FF14]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-3 rounded-xl bg-[#1E1E1E] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-wider text-white">本周饮食策略</h2>
              {isCarbCycling && <span className="rounded bg-[#FFD700] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">碳循环已开启</span>}
            </div>
            <div className="flex rounded-xl border border-[#2A2A2A] bg-[#121212] p-1">
              {strategies.map((item) => (
                <button key={item} onClick={() => setStrategy(item)} className={`flex-1 rounded-lg py-2 text-[13px] font-bold transition-all ${strategy === item ? "bg-[#39FF14] text-black shadow-md shadow-[#39FF14]/20" : "text-[#A0A0A0] hover:text-white"}`}>
                  {item}
                </button>
              ))}
            </div>
            <button onClick={() => setIsCarbCycling((value) => !value)} className={`mt-2 flex items-center justify-between rounded-lg border p-3 text-left transition-all ${isCarbCycling ? "border-[#FFD700] bg-[#FFD700]/10" : "border-[#2A2A2A] bg-[#121212] hover:border-[#A0A0A0]"}`}>
              <div>
                <h3 className={`mb-0.5 text-[14px] font-bold ${isCarbCycling ? "text-[#FFD700]" : "text-white"}`}>碳水循环 Carb Cycling</h3>
                <p className="text-[11px] leading-tight text-[#A0A0A0]">训练日高碳低脂，休息日低碳高脂。</p>
              </div>
              <div className={`flex h-6 w-10 items-center rounded-full p-1 transition-colors ${isCarbCycling ? "bg-[#FFD700]" : "bg-[#2A2A2A]"}`}>
                <div className={`h-4 w-4 rounded-full bg-white transition-transform ${isCarbCycling ? "translate-x-4" : "translate-x-0"}`} />
              </div>
            </button>
          </section>

          <section className="flex flex-col gap-4 rounded-xl bg-[#1E1E1E] p-4 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-white">备餐顿数分配</h2>
            {mealRows.map((row) => (
              <div key={row.key} className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-bold text-white">{row.title}</h3>
                  <p className="mt-0.5 text-xs text-[#A0A0A0]">{row.subtitle}</p>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-[#2A2A2A] bg-[#121212] p-1.5">
                  <button onClick={() => updateMeal(row.key, -1)} className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E1E1E] text-[#A0A0A0] hover:text-white">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-[15px] font-bold text-white">{meals[row.key]} 份</span>
                  <button onClick={() => updateMeal(row.key, 1)} className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E1E1E] text-[#39FF14] hover:bg-[#39FF14]/10">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="flex items-center justify-between rounded-xl bg-[#1E1E1E] p-4 shadow-sm">
            <h2 className="text-sm font-bold tracking-wider text-white">食材采购预算</h2>
            <div className="flex items-center gap-3 rounded-lg border border-[#2A2A2A] bg-[#121212] p-1.5">
              <button onClick={() => setBudget((value) => Math.max(10, value - 5))} className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E1E1E] text-[#A0A0A0] hover:text-white">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-14 text-center text-[15px] font-bold text-white">$ {budget}</span>
              <button onClick={() => setBudget((value) => value + 5)} className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1E1E1E] text-[#39FF14] hover:bg-[#39FF14]/10">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className="absolute bottom-0 z-10 flex w-full flex-col gap-3 border-t border-[#1E1E1E] bg-[#121212] p-4 pb-8 pt-3">
        <button onClick={() => navigate("/app/store?mode=lazy")} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#39FF14] py-3.5 text-[17px] font-bold text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all hover:bg-[#32e011] active:scale-[0.98]">
          <Zap className="h-5 w-5 fill-black" />
          AI 一键生成备餐清单
        </button>
        <button onClick={() => navigate("/app/store")} className="flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#2A2A2A] bg-transparent py-3 text-[15px] font-bold text-white transition-all hover:border-[#39FF14] hover:text-[#39FF14] active:scale-[0.98]">
          进入食材仓手动挑选
        </button>
      </div>
    </MobileContainer>
  );
}
