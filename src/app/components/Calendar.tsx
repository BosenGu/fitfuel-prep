import { ArrowLeft, Award, Calendar as CalendarIcon, Check, CheckCircle2, Flame, Settings, Target } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileContainer } from "./MobileContainer";

export function Calendar() {
  const navigate = useNavigate();
  const calendarDays = Array.from({ length: 28 }, (_, index) => {
    const day = index + 1;
    if (day < 18) return { day, status: "completed" };
    if (day === 18) return { day, status: "current" };
    return { day, status: "future" };
  });

  return (
    <MobileContainer>
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#1E1E1E] bg-[#121212]/90 px-4 py-4 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="返回">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-[17px] font-bold tracking-wide text-white">我的硬核备餐日历</h1>
        <button className="rounded-full p-2 text-white transition-colors hover:bg-white/5" aria-label="日历设置">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {[
            { label: "28 天无缺勤", color: "#FF5722", icon: <Flame className="h-4 w-4" /> },
            { label: "膳食纤维达标", color: "#00E5FF", icon: <Target className="h-4 w-4" /> },
            { label: "干净增肌周达成", color: "#39FF14", icon: <Award className="h-4 w-4" /> },
          ].map((tag) => (
            <div key={tag.label} className="flex shrink-0 items-center gap-1.5 rounded-lg border bg-[#1E1E1E] px-3 py-2 text-[12px] font-bold uppercase tracking-wider" style={{ color: tag.color, borderColor: `${tag.color}55` }}>
              {tag.icon}
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        <section className="relative overflow-hidden rounded-xl border border-[#39FF14]/50 bg-[#1E1E1E] p-5 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
          <div className="absolute right-0 top-0 rounded-bl-xl bg-[#39FF14] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-black">Today</div>
          <div className="mb-4 flex items-end gap-3">
            <span className="text-5xl font-black leading-none text-white">18</span>
            <span className="mb-1 text-sm font-bold uppercase tracking-widest text-[#A0A0A0]">October</span>
          </div>
          <div className="mb-3">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[13px] font-bold tracking-wide text-white">今日备餐 2/2 份已达成</span>
              <span className="text-[13px] font-bold text-[#39FF14]">100%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full border border-[#2A2A2A] bg-[#121212]">
              <div className="h-full w-full bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {["午餐", "晚餐"].map((meal) => (
              <div key={meal} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#121212] p-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#39FF14]" />
                <span className="text-[12px] font-bold text-white">{meal}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[15px] font-bold tracking-wide text-white">月度达成矩阵</h2>
            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#A0A0A0]">
              <CalendarIcon className="h-4 w-4" /> 10 月
            </div>
          </div>
          <div className="mb-2 grid grid-cols-7 gap-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <div key={`${day}-${index}`} className="text-center text-[11px] font-bold text-[#A0A0A0]">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day) => {
              if (day.status === "completed") {
                return (
                  <div key={day.day} className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-[#39FF14]/30 bg-[#39FF14]/10">
                    <Check className="absolute h-6 w-6 text-[#39FF14] opacity-20" />
                    <span className="relative z-10 text-[13px] font-bold text-[#39FF14]">{day.day}</span>
                  </div>
                );
              }
              if (day.status === "current") {
                return (
                  <div key={day.day} className="flex aspect-square items-center justify-center rounded-lg bg-[#39FF14] text-black shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                    <span className="text-[14px] font-black">{day.day}</span>
                  </div>
                );
              }
              return (
                <div key={day.day} className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-dashed border-[#2A2A2A]">
                  <Check className="absolute h-5 w-5 text-white opacity-10" />
                  <span className="relative z-10 text-[13px] font-medium text-[#A0A0A0]">{day.day}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-10 flex items-center justify-between rounded-xl border border-[#2A2A2A] bg-[#121212] p-4">
          <div className="flex-1 border-r border-[#2A2A2A] text-center">
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">连续打卡</div>
            <div className="text-2xl font-black text-white">17<span className="ml-1 text-sm font-medium text-[#A0A0A0]">天</span></div>
          </div>
          <div className="flex-1 text-center">
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">总备餐数</div>
            <div className="text-2xl font-black text-white">140<span className="ml-1 text-sm font-medium text-[#A0A0A0]">份</span></div>
          </div>
        </section>
      </div>
    </MobileContainer>
  );
}
