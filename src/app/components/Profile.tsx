import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ChevronDown, Minus, Plus } from "lucide-react";
import { MobileContainer } from "./MobileContainer";

function MetricStepper({
  label,
  value,
  unit,
  min,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm font-medium tracking-wider text-[#A0A0A0]">{label}</span>
      <div className="flex items-center gap-3">
        <button onClick={() => onChange(Math.max(min, value - 1))} className="flex h-8 w-8 items-center justify-center rounded border border-[#2A2A2A] bg-[#121212] text-[#A0A0A0] hover:border-[#39FF14]/50 hover:text-[#39FF14]">
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-16 text-center text-xl font-bold text-white">
          {value} <span className="text-xs font-normal text-[#A0A0A0]">{unit}</span>
        </span>
        <button onClick={() => onChange(value + 1)} className="flex h-8 w-8 items-center justify-center rounded border border-[#2A2A2A] bg-[#121212] text-[#A0A0A0] hover:border-[#39FF14]/50 hover:text-[#39FF14]">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Profile() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(75);
  const [bodyFat, setBodyFat] = useState(12);
  const [height, setHeight] = useState(178);
  const [routine, setRoutine] = useState("力量训练 | 每周 5 练");
  const [goal, setGoal] = useState("干净增肌 Clean Bulk");

  return (
    <MobileContainer>
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1E1E1E] bg-[#121212]/80 px-4 py-4 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-[17px] font-semibold tracking-wide text-white">个人健康档案</h1>
        <div className="w-10" />
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6 pb-32">
        <div className="flex flex-col items-center justify-center pb-4 pt-2">
          <div className="mb-3 h-24 w-24 overflow-hidden rounded-full border-2 border-[#39FF14] bg-[#1E1E1E] p-1 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=250&auto=format&fit=crop" alt="Bosen 头像" className="h-full w-full rounded-full object-cover" />
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">Bosen</h2>
          <div className="rounded-full border border-[#39FF14] bg-[#39FF14]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#39FF14]">
            Pro Member
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#1E1E1E] p-4 shadow-sm">
          <MetricStepper label="体重" value={weight} unit="kg" min={40} onChange={setWeight} />
          <MetricStepper label="体脂率" value={bodyFat} unit="%" min={3} onChange={setBodyFat} />
          <MetricStepper label="身高" value={height} unit="cm" min={140} onChange={setHeight} />
        </div>

        <label className="group relative flex flex-col gap-2 rounded-xl bg-[#1E1E1E] p-4">
          <span className="text-sm font-medium tracking-wide text-[#A0A0A0]">当前训练容量</span>
          <select value={routine} onChange={(event) => setRoutine(event.target.value)} className="w-full cursor-pointer appearance-none rounded-lg border border-[#2A2A2A] bg-[#121212] p-3.5 font-medium text-white outline-none transition-all focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/50">
            <option>力量训练 | 每周 3 练</option>
            <option>力量训练 | 每周 4 练</option>
            <option>力量训练 | 每周 5 练</option>
            <option>力量训练 | 每周 6 练</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-8 top-[50px] h-5 w-5 text-[#A0A0A0]" />
        </label>

        <label className="group relative flex flex-col gap-2 rounded-xl bg-[#1E1E1E] p-4">
          <span className="text-sm font-medium tracking-wide text-[#A0A0A0]">现阶段形体目标</span>
          <select value={goal} onChange={(event) => setGoal(event.target.value)} className="w-full cursor-pointer appearance-none rounded-lg border border-[#2A2A2A] bg-[#121212] p-3.5 font-medium text-[#39FF14] outline-none transition-all focus:border-[#39FF14]/50 focus:ring-1 focus:ring-[#39FF14]/50">
            <option>极限减脂 Cut</option>
            <option>维持状态 Maintain</option>
            <option>干净增肌 Clean Bulk</option>
            <option>快速增重 Dirty Bulk</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-8 top-[50px] h-5 w-5 text-[#A0A0A0]" />
        </label>
      </div>

      <div className="absolute bottom-0 z-10 w-full border-t border-[#1E1E1E] bg-[#121212] p-5 pb-8 pt-4">
        <button onClick={() => navigate("/app")} className="w-full rounded-xl bg-[#39FF14] py-4 text-[17px] font-bold text-black shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all hover:bg-[#32e011] active:scale-[0.98]">
          保存档案并同步 AI
        </button>
      </div>
    </MobileContainer>
  );
}
