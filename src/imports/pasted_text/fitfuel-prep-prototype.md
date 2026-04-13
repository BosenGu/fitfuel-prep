Design a 5-screen mobile application prototype flow for a hardcore bodybuilding and fitness AI nutrition agent named "FitFuel Prep". Use an iPhone 15 frame for all screens. The entire flow should be dark mode.

### Global Design System - Hardcore Fitness
Style: Professional, data-driven, intense, and bodybuilding-focused.
Theme: Dark Mode. Background is very dark gray/almost black (#121212). 
Colors: Primary accent color is Neon Green (#39FF14) or Vibrating Orange for high contrast. Text is white and secondary text is gray (#A0A0A0). Use Red for budget alerts.
Components: Rounded corners (12px - 16px). Cards are lighter dark gray (#1E1E1E). Use Auto Layout with 16px - 24px gaps and padding. All input components (Steppers, Dropdowns) must be rendered as active, interactive elements.

[--- SCREEN 1: Health Archive / Profile (Fully Interactive Settings Page) ---]
- Header: Left-aligned "< 返回" icon. Center title "个人健康档案".
- User Profile Area: Centered circular User Avatar with a subtle Neon Green glow. Name "Bosen". Neon Green tag "Pro Member". Clickable.
- Interactive Stats Card (3 columns, each an input Stepper component): 
  - Column 1: Label "体重". Value "75 kg". With "-" and "+" buttons.
  - Column 2: Label "体脂率". Value "12 %". With "-" and "+" buttons.
  - Column 3: Label "身高". Value "178 cm". With "-" and "+" buttons.
- Routine Input Card: Label "当前训练容量". Value displayed in an interactive dropdown component style with a Chevron: "力量训练 | 每周 5 练".
- Goal Input Card: Label "现阶段形体目标". Value displayed in an interactive dropdown component style with a Chevron: "干净增肌 Clean Bulk".
- Bottom Fixed Area: Large full-width primary button (Neon Green). Text: "保存档案并同步 AI ✨".
- *Prototype Flow*: Clicking Save Button links to Screen 2.

[--- SCREEN 2: Target Setup (Hardcore Dashboard) ---]
- Top App Bar: Left: Circular User Avatar (profile picture of a fit person). Right: Settings gear icon.
- Greeting Section: Large Bold Title "Hi, Bosen." Subtitle (gray) "我是你的专业健身营养AI助手，准备好接下来的饮食计划了吗？" Compact tags: "75kg" | "每周5练" | "干净增肌".
- Body Card 1 (Strategy - Fully Interactive): 
  - Label: "本周饮食策略 (基于当前档案)".
  - Component: Segmented Control with 3 tabs. Tab 1: "减脂 Cut", Tab 2: "维持 Maintain" (Selected state, Neon Green), Tab 3: "增肌 Bulk".
- Body Card 2 (Meal Timing Stepper Matrix - Fully Interactive):
  - Label: "计划备餐顿数 (精确分配营养时机)".
  - Layout: 3 rows inside this card. Each row has a Label/Subtitle pair on the left and a Stepper (+/-) on the right. 
    - Row 1: Title "早餐", Subtitle "缓释供能" | Stepper: "0 份"
    - Row 2: Title "练后餐 / 午餐", Subtitle "高碳水补给" | Stepper: "0 份"
    - Row 3: Title "晚餐", Subtitle "低碳高蛋白" | Stepper: "2 份"
- Body Card 3 (Budget - Fully Interactive):
  - Label: "总采购预算上限".
  - Component: A large Stepper or input field with the value "$ 40".
- Bottom Fixed Area: Large, full-width primary button (Neon Green, Black bold text). Button text: "生成硬核备餐计划 ⚡".
- *Prototype Flow*: Clicking Generate Button links to Screen 3.

[--- SCREEN 3: Smart Macro Storefront ---]
- Top Header: "< 返回" icon. Title "AI 营养自选仓". Right text "总开销: $0.00 / $40".
- Sticky Macro Tracker Card: Light gray card. 3 slime Neon Green progress bars: "蛋白质 0g/120g", "碳水 0g/100g", "脂肪 0g/35g". Below bars: "🎯 准备 2 顿晚餐".
- Body (Item List - No Categories): Product cards with high-quality raw images (e.g., raw ribeye, raw salmon, sweet potato, blueberries). Image on left. Right side: Title (e.g., 澳洲草饲西冷牛排 400g), Price, colorful Macro Tags (e.g., 84g蛋白 - Neon Green, 20g脂肪 - Orange). A large "+" button on far right.
- *Prototype Flow*: Clicking the "AI 智能平替" button on the Salmon card (which is added in Screen 4) links to the Modal.
- Bottom Fixed Area: Large primary button "锁定清单并生成烹饪 SOP ⚡".
- *Prototype Flow*: Clicking this button links to Screen 5.

[--- SCREEN 4: Smart Swap Modal (Categorized, Collapsible Bottom Sheet) ---]
- Modal Sliding up from Bottom (taking 60% of screen). Background: Dark gray (#1E1E1E), rounded top corners. Drag handle. Close "X" icon. Title "AI 智能平替方案". Subtitle (Gray) "原计划: 挪威三文鱼柳 | 需匹配: 60g蛋白, 39g脂肪".
- Body (Categorized & Collapsible Items): A list of collapsible headers (Accordions) with colorful icons.
  - Collapsible 1 (🟢 Protein Area): Icon, Label "蛋白质区". Initially collapsed. When expanded, shows swap cards like Tilapia. (Swap item example: Tilapia card with Neon Tag "优质蛋白平替" and Primary "选择方案" button).
  - Collapsible 2 (🟠 Fat Area): Icon, Label "脂肪区". Initially collapsed.
  - Collapsible 3 (🟡 Carbs Area): Icon, Label "碳水区". Initially collapsed.
  - Collapsible 4 (🔵 Dietary Fiber Zone): Icon, Label "膳食纤维区". Initially collapsed. Swap item example: Spinach (菠菜) card with Blue tag "促消化".
  - Collapsible 5 (🟣 Fitness Beneficial Zone): Icon, Label "运动有益食品区". Initially collapsed. Swap item example: Blueberries (蓝莓) card with Blue tag "极速抗炎".
- Bottom area of modal: Close Button.

[--- SCREEN 5: Prep SOP & Calendar Tracker (The Final Page) ---]
- Header: "< 返回" icon. Title "今日硬核备餐 (2顿)". Right icon "share".
- Scoring Card: Glowing green board. Large score "98 / 100" in Neon Green. Gold star icon, text "S级优选 👑". Positive feedback text.
- Plans Tabs: Horizontal row of segmented tabs: [Plan A: 极速单锅] [Plan B: 主厨煎烤] [Plan C: 极简水煮]. (Plan A Selected).
- SOP List: Vertical timeline style. Each card shows an Icon, Step Number, and Text Instruction for the recipe (e.g., Step 1: Handle Carbs. Step 2: Cook Meat/Salmon).
- Bottom Fixed Area: Large full-width primary button (Neon Green). Button text: "完成备餐并开始打卡日历 ⚡".
- *Prototype Flow*: Clicking this button links to the New Prep Calendar Screen.

[--- NEW SCREEN 6: Prep Calendar / Tracker (Completion View) ---]
- Header: Title "我的硬核备餐日历". Clickable gear/calendar setting icon.
- Monthly Calendar Grid (or Weekly, choose most professional for bodybuilding): Monthly calendar grid view of the current month. Each day cell has a small status icon. 
  - Completed Prep Days (e.g., last Week): Neon Green checkmarks filling the entire cell.
  - Current Day: Card style with bold number. Shows a progress bar: "今日备餐 2/2顿 已达成". List of meal icons: [Breakfast/checked] [Dinner 1/checked] [Dinner 2/checked].
  - Planned Prep Days (future): Simple dotted outline with a gray placeholder checkmark. 
- Achievement Tag Area: Row of earned tags for consecutive weeks/days of prep completion: "🔥 28天无缺勤" | "🥦 膳食纤维达标" | "🥩 干净增肌周达成".
- Bottom area of screen: A section with stats like "连续打卡: 7天", "总备餐顿数: 140顿". 
- Navigation bar to go back.