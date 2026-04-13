import { ArrowRight, BarChart3, CalendarCheck, CheckCircle2, ChefHat, Database, Dumbbell, RefreshCw, Sparkles, Target, Utensils } from "lucide-react";
import { useNavigate } from "react-router";
import { foodCategories } from "../data/foods";

const featureCards = [
  {
    title: "健康档案驱动",
    description: "用体重、体脂率、训练频率和当前目标生成备餐上下文。",
    icon: <Target className="h-6 w-6" />,
  },
  {
    title: "AI 食材仓",
    description: "按蛋白、低 GI 碳水、健康脂肪、纤维和恢复食品组织选择。",
    icon: <Utensils className="h-6 w-6" />,
  },
  {
    title: "智能平替",
    description: "围绕宏量营养、预算和口味偏好给出可解释替换方案。",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "烹饪 SOP",
    description: "把食材清单转成可执行步骤，降低备餐决策成本。",
    icon: <ChefHat className="h-6 w-6" />,
  },
];

const metrics = [
  { label: "demo 食材", value: "16+", tone: "text-[#39FF14]" },
  { label: "营养分类", value: "5", tone: "text-[#00E5FF]" },
  { label: "备餐方案", value: "3", tone: "text-[#FFD700]" },
];

export function LandingPage() {
  const navigate = useNavigate();
  const featuredFoods = foodCategories.flatMap((category) => category.items.slice(0, 1));

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-[#39FF14] selection:text-black">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => navigate("/")} className="flex items-center gap-3" aria-label="FitFuel 首页">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#39FF14]/50 bg-[#39FF14]/10 text-[#39FF14]">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-black uppercase tracking-[0.24em] text-[#39FF14]">FitFuel</div>
              <div className="text-xs font-medium text-[#A0A0A0]">AI Prep System</div>
            </div>
          </button>
          <nav className="hidden items-center gap-8 text-sm font-bold text-[#A0A0A0] md:flex">
            <a className="transition-colors hover:text-white" href="#features">功能</a>
            <a className="transition-colors hover:text-white" href="#foods">食材库</a>
            <a className="transition-colors hover:text-white" href="#flow">流程</a>
          </nav>
          <button onClick={() => navigate("/app")} className="rounded-lg bg-[#39FF14] px-4 py-2.5 text-sm font-black text-black transition-transform hover:scale-[1.02]">
            打开 App 原型
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#39FF14]">
            <Sparkles className="h-4 w-4" />
            Hardcore Fitness Nutrition
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
            为高强度训练者设计的 AI 备餐系统
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#A0A0A0]">
            FitFuel Prep 把健康档案、预算、宏量营养和烹饪 SOP 放进同一条流程，让增肌、减脂和维持期的备餐更快进入执行状态。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => navigate("/app")} className="flex items-center justify-center gap-2 rounded-lg bg-[#39FF14] px-6 py-4 text-base font-black text-black shadow-[0_0_28px_rgba(57,255,20,0.25)] transition-transform hover:scale-[1.02]">
              体验移动端原型
              <ArrowRight className="h-5 w-5" />
            </button>
            <a href="#foods" className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-4 text-base font-black text-white transition-colors hover:border-[#39FF14]/60 hover:text-[#39FF14]">
              查看食材库
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className={`text-3xl font-black ${metric.tone}`}>{metric.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#A0A0A0]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-[#39FF14]/30 bg-[#101010] p-5 shadow-[0_0_32px_rgba(57,255,20,0.08)]">
                <BarChart3 className="mb-4 h-8 w-8 text-[#39FF14]" />
                <div className="text-sm font-black uppercase tracking-[0.2em] text-[#A0A0A0]">Macro Target</div>
                <div className="mt-4 space-y-3">
                  {[
                    ["蛋白质", "118/120g", "98%", "#39FF14"],
                    ["碳水", "96/100g", "96%", "#FFD700"],
                    ["脂肪", "34/35g", "97%", "#FF5722"],
                  ].map(([label, value, width, color]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs font-bold text-[#A0A0A0]">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#1E1E1E]">
                        <div className="h-full rounded-full" style={{ width, backgroundColor: color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <CalendarCheck className="mb-4 h-8 w-8 text-[#00E5FF]" />
                <div className="text-3xl font-black">17 天</div>
                <div className="mt-1 text-sm font-bold text-[#A0A0A0]">连续备餐打卡</div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#101010] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.2em] text-[#39FF14]">AI Cart</div>
                  <div className="mt-1 text-xs font-bold text-[#A0A0A0]">$38.70 / $40 budget</div>
                </div>
                <Database className="h-7 w-7 text-[#39FF14]" />
              </div>
              <div className="space-y-3">
                {featuredFoods.map((food) => (
                  <div key={food.name} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#080808] p-3">
                    <img src={food.image} alt={food.name} className="h-14 w-14 rounded-md object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-black text-white">{food.name}</div>
                      <div className="mt-1 text-xs font-bold text-[#A0A0A0]">{food.weight} · ${food.price.toFixed(2)}</div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#39FF14]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-[#0D0D0D] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#39FF14]">Product System</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">从档案到打卡的一条完整链路</h2>
            </div>
            <p className="max-w-xl text-base font-medium leading-7 text-[#A0A0A0]">
              官网用于介绍产品价值；移动端原型用于演示真实 App 交互，两者在同一个项目中共存。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-white/10 bg-[#101010] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#39FF14]/40 bg-[#39FF14]/10 text-[#39FF14]">{feature.icon}</div>
                <h3 className="text-xl font-black text-white">{feature.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#A0A0A0]">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="foods" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#39FF14]">Food Database</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">扩充后的 demo 食材库</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {foodCategories.map((category) => (
            <article key={category.id} className="rounded-lg border border-white/10 bg-[#101010] p-5">
              <h3 className="text-lg font-black text-white">{category.title}</h3>
              <p className="mt-2 min-h-10 text-sm font-medium leading-5 text-[#A0A0A0]">{category.subtitle}</p>
              <div className="mt-5 space-y-2">
                {category.items.slice(0, 3).map((food) => (
                  <div key={food.name} className="rounded-md border border-white/10 bg-[#080808] p-3">
                    <div className="text-sm font-bold text-white">{food.name}</div>
                    <div className="mt-1 text-xs font-medium text-[#A0A0A0]">
                      P {food.macros.protein}g · C {food.macros.carbs}g · F {food.macros.fat}g
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="flow" className="bg-[#0D0D0D] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#39FF14]">Demo Flow</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">推荐演示路径</h2>
            <p className="mt-5 text-base font-medium leading-7 text-[#A0A0A0]">
              先通过网页版理解产品定位，再进入 `/app` 体验手机原型完整流程：Dashboard、Profile、Store、SOP、Calendar。
            </p>
            <button onClick={() => navigate("/app")} className="mt-8 flex items-center gap-2 rounded-lg bg-[#39FF14] px-6 py-4 text-base font-black text-black">
              进入 `/app`
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {["档案", "策略", "食材", "SOP", "打卡"].map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-[#101010] p-5">
                <div className="text-3xl font-black text-[#39FF14]">0{index + 1}</div>
                <div className="mt-4 text-lg font-black text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
