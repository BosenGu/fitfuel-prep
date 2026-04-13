import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ArrowLeft, Check, ChevronDown, ChevronUp, Minus, Plus, RefreshCw, X, Zap } from "lucide-react";
import { allFoodItems, foodCategories } from "../data/foods";
import { AIFab } from "./AIFab";
import { MobileContainer } from "./MobileContainer";

export function Store() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLazyMode = new URLSearchParams(location.search).get("mode") === "lazy";
  const [cart, setCart] = useState<Record<string, number>>(() =>
    isLazyMode
      ? {
          "澳洲草饲西冷牛排": 1,
          "挪威冰鲜三文鱼柳": 1,
          "日本金时地瓜": 1,
          "高山蓝莓": 1,
        }
      : {},
  );
  const [expandedZones, setExpandedZones] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(foodCategories.map((zone) => [zone.id, !isLazyMode])),
  );
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [expandedSwap, setExpandedSwap] = useState("protein");

  const updateQuantity = (name: string, delta: number) => {
    setCart((current) => {
      const next = Math.max(0, (current[name] ?? 0) + delta);
      if (next === 0) {
        const { [name]: _removed, ...rest } = current;
        return rest;
      }
      return { ...current, [name]: next };
    });
  };

  const totals = useMemo(() => {
    return allFoodItems.reduce(
      (sum, item) => {
        const quantity = cart[item.name] ?? 0;
        return {
          price: sum.price + item.price * quantity,
          protein: sum.protein + item.macros.protein * quantity,
          carbs: sum.carbs + item.macros.carbs * quantity,
          fat: sum.fat + item.macros.fat * quantity,
        };
      },
      { price: 0, protein: 0, carbs: 0, fat: 0 },
    );
  }, [cart]);

  const toggleZone = (id: string) => setExpandedZones((current) => ({ ...current, [id]: !current[id] }));

  return (
    <MobileContainer>
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1E1E1E] bg-[#121212]/95 px-4 py-4 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="text-center">
          <h1 className="text-[17px] font-bold tracking-wide text-white">AI 营养自选仓</h1>
          <p className="text-[11px] font-medium text-[#A0A0A0]">总开销 ${totals.price.toFixed(2)} / $40</p>
        </div>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-36 pt-4">
        <section className="sticky top-0 z-10 mb-4 rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold text-white">宏量营养追踪</span>
            <span className="rounded bg-[#39FF14]/10 px-2 py-1 text-[11px] font-bold text-[#39FF14]">准备 2 顿晚餐</span>
          </div>
          {[
            ["蛋白质", totals.protein, 120, "#39FF14"],
            ["碳水", totals.carbs, 100, "#FFD700"],
            ["脂肪", totals.fat, 35, "#FF5722"],
          ].map(([label, value, target, color]) => (
            <div key={String(label)} className="mb-2 last:mb-0">
              <div className="mb-1 flex justify-between text-[11px] font-bold text-[#A0A0A0]">
                <span>{label}</span>
                <span>{Number(value)}g / {Number(target)}g</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#121212]">
                <div className="h-full rounded-full" style={{ width: `${Math.min(100, (Number(value) / Number(target)) * 100)}%`, backgroundColor: String(color) }} />
              </div>
            </div>
          ))}
        </section>

        <div className="flex flex-col gap-4">
          {foodCategories.map((zone) => (
            <section key={zone.id} className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#1E1E1E]">
              <button onClick={() => toggleZone(zone.id)} className="flex w-full items-center justify-between p-4 text-left">
                <div>
                  <h2 className="text-[15px] font-bold text-white">{zone.title}</h2>
                  <p className="mt-1 text-xs text-[#A0A0A0]">{zone.subtitle}</p>
                </div>
                {expandedZones[zone.id] ? <ChevronUp className="h-5 w-5 text-[#A0A0A0]" /> : <ChevronDown className="h-5 w-5 text-[#A0A0A0]" />}
              </button>

              {expandedZones[zone.id] && (
                <div className="flex flex-col gap-3 border-t border-[#2A2A2A] p-3">
                  {zone.items.map((item) => {
                    const quantity = cart[item.name] ?? 0;
                    return (
                      <article key={item.name} className={`flex gap-3 rounded-xl border p-3 transition-colors ${quantity > 0 ? "border-[#39FF14]/50 bg-[#39FF14]/5" : "border-[#2A2A2A] bg-[#121212]"}`}>
                        <img src={item.image} alt={item.name} className="h-24 w-24 shrink-0 rounded-lg object-cover" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="text-[14px] font-bold leading-tight text-white">{item.name}</h3>
                              <p className="mt-1 text-xs text-[#A0A0A0]">{item.weight}</p>
                            </div>
                            <span className="text-[14px] font-bold text-[#39FF14]">${item.price.toFixed(2)}</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span key={tag.text} className={`rounded border bg-white/5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tag.className}`}>
                                {tag.text}
                              </span>
                            ))}
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-2">
                            {item.hasSwap ? (
                              <button onClick={() => setShowSwapModal(true)} className="flex items-center gap-1.5 rounded border border-[#39FF14]/30 bg-[#39FF14]/10 px-2.5 py-1.5 text-[11px] font-bold text-[#39FF14] transition-colors hover:bg-[#39FF14]/20">
                                <RefreshCw className="h-3.5 w-3.5" />
                                AI 智能平替
                              </button>
                            ) : (
                              <span />
                            )}
                            <div className="flex items-center rounded-lg border border-[#2A2A2A] bg-[#1E1E1E]">
                              <button onClick={() => updateQuantity(item.name, -1)} className="flex h-8 w-8 items-center justify-center text-[#A0A0A0] hover:text-white" aria-label={`减少 ${item.name}`}>
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-white">{quantity}</span>
                              <button onClick={() => updateQuantity(item.name, 1)} className="flex h-8 w-8 items-center justify-center text-[#39FF14] hover:bg-[#39FF14]/10" aria-label={`增加 ${item.name}`}>
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <AIFab />

      <div className="absolute bottom-0 z-30 w-full border-t border-[#1E1E1E] bg-[#121212]/95 p-4 pb-8 pt-3 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="mb-3.5 flex items-center justify-between px-1">
          <span className="text-[15px] font-bold tracking-wide text-white">总计 ${totals.price.toFixed(2)}</span>
          <span className="rounded-md border border-[#2A2A2A] bg-[#1E1E1E] px-2 py-1 text-[11px] font-medium text-[#A0A0A0]">预算 $40</span>
        </div>
        <button onClick={() => navigate("/app/sop")} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#39FF14] py-4 text-[17px] font-bold text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all hover:bg-[#32e011] active:scale-[0.98]">
          锁定清单并生成烹饪 SOP
          <Zap className="h-5 w-5 fill-black" />
        </button>
      </div>

      {showSwapModal && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end overflow-hidden">
          <button className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setShowSwapModal(false)} aria-label="关闭平替方案" />
          <div className="relative flex h-[65%] w-full flex-col rounded-t-[24px] bg-[#1E1E1E] shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
            <div className="mx-auto mb-1 mt-3 h-1.5 w-12 shrink-0 rounded-full bg-[#3A3A3A]" />
            <div className="relative flex shrink-0 flex-col gap-1 border-b border-[#2A2A2A] px-5 pb-4 pt-3">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold tracking-wide text-white">AI 智能平替方案</h2>
                <button onClick={() => setShowSwapModal(false)} className="rounded-full p-1 text-[#A0A0A0] transition-colors hover:bg-white/5 hover:text-white" aria-label="关闭">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#A0A0A0]">
                原计划：挪威三文鱼柳。目标匹配：60g 蛋白质、39g 脂肪。
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-3 pb-10">
              {[
                { id: "protein", title: "蛋白质区", body: "深海罗非鱼排 + 初榨橄榄油，蛋白接近、脂肪更可控。", tag: "62g 蛋白质 / 35g 脂肪" },
                { id: "fat", title: "脂肪区", body: "可用牛油果或橄榄油微调脂肪缺口。", tag: "平衡健康脂肪" },
                { id: "fiber", title: "膳食纤维区", body: "补充有机菠菜，提升纤维和微量营养密度。", tag: "消化支持" },
              ].map((section) => (
                <section key={section.id} className="overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#121212]">
                  <button onClick={() => setExpandedSwap(expandedSwap === section.id ? "" : section.id)} className="flex w-full items-center justify-between bg-[#1E1E1E] p-4">
                    <span className="text-[15px] font-bold text-white">{section.title}</span>
                    {expandedSwap === section.id ? <ChevronUp className="h-5 w-5 text-[#A0A0A0]" /> : <ChevronDown className="h-5 w-5 text-[#A0A0A0]" />}
                  </button>
                  {expandedSwap === section.id && (
                    <div className="border-t border-[#2A2A2A] p-4">
                      <div className="rounded-xl border border-[#39FF14]/40 bg-[#1E1E1E] p-3">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <p className="text-[14px] font-bold leading-snug text-white">{section.body}</p>
                          <Check className="h-5 w-5 shrink-0 text-[#39FF14]" />
                        </div>
                        <span className="rounded border border-[#39FF14] bg-[#39FF14]/5 px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#39FF14]">{section.tag}</span>
                        <button onClick={() => setShowSwapModal(false)} className="mt-3 w-full rounded-lg bg-[#39FF14] py-2.5 text-[14px] font-bold text-black transition-all hover:bg-[#32e011] active:scale-[0.98]">
                          选择此方案
                        </button>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </MobileContainer>
  );
}
