export type FoodMacro = {
  protein: number;
  carbs: number;
  fat: number;
};

export type FoodTag = {
  text: string;
  className: string;
};

export type FoodItem = {
  name: string;
  image: string;
  weight: string;
  price: number;
  tags: FoodTag[];
  macros: FoodMacro;
  hasSwap?: boolean;
};

export type FoodCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: FoodItem[];
};

export const foodCategories: FoodCategory[] = [
  {
    id: "protein",
    title: "核心优质蛋白区",
    subtitle: "牛排、鱼类与高蛋白主菜",
    items: [
      {
        name: "澳洲草饲西冷牛排",
        image: "https://images.unsplash.com/photo-1690983321402-35ff91692b56?q=80&w=600&auto=format&fit=crop",
        weight: "400g",
        price: 18.5,
        tags: [
          { text: "84g 蛋白质", className: "text-[#39FF14] border-[#39FF14]" },
          { text: "20g 脂肪", className: "text-[#FF5722] border-[#FF5722]" },
        ],
        macros: { protein: 84, carbs: 0, fat: 20 },
      },
      {
        name: "挪威冰鲜三文鱼柳",
        image: "https://images.unsplash.com/photo-1559058789-672da06263d8?q=80&w=600&auto=format&fit=crop",
        weight: "300g",
        price: 12,
        tags: [
          { text: "60g 蛋白质", className: "text-[#39FF14] border-[#39FF14]" },
          { text: "39g 脂肪", className: "text-[#FF5722] border-[#FF5722]" },
        ],
        macros: { protein: 60, carbs: 0, fat: 39 },
        hasSwap: true,
      },
      {
        name: "去皮鸡胸肉",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=600&auto=format&fit=crop",
        weight: "500g",
        price: 5.5,
        tags: [
          { text: "110g 蛋白质", className: "text-[#39FF14] border-[#39FF14]" },
          { text: "极低脂", className: "text-[#00E5FF] border-[#00E5FF]" },
        ],
        macros: { protein: 110, carbs: 0, fat: 5 },
      },
      {
        name: "希腊无糖酸奶",
        image: "https://images.unsplash.com/photo-1691043795570-9478750e7fd2?q=80&w=600&auto=format&fit=crop",
        weight: "500g",
        price: 6,
        tags: [
          { text: "50g 酪蛋白", className: "text-[#39FF14] border-[#39FF14]" },
          { text: "夜间恢复", className: "text-[#FFD700] border-[#FFD700]" },
        ],
        macros: { protein: 50, carbs: 20, fat: 0 },
      },
    ],
  },
  {
    id: "carbs",
    title: "干净低 GI 碳水区",
    subtitle: "训练表现与恢复燃料",
    items: [
      {
        name: "日本金时地瓜",
        image: "https://images.unsplash.com/photo-1730815048561-45df6f7f331d?q=80&w=600&auto=format&fit=crop",
        weight: "500g",
        price: 3.5,
        tags: [
          { text: "100g 碳水", className: "text-[#FFD700] border-[#FFD700]" },
          { text: "强饱腹感", className: "text-[#00E5FF] border-[#00E5FF]" },
        ],
        macros: { protein: 0, carbs: 100, fat: 0 },
      },
      {
        name: "有机三色藜麦",
        image: "https://images.unsplash.com/photo-1708949125682-c0cb09727101?q=80&w=600&auto=format&fit=crop",
        weight: "300g",
        price: 5.8,
        tags: [
          { text: "全氨基酸", className: "text-[#39FF14] border-[#39FF14]" },
          { text: "慢碳供能", className: "text-[#FFD700] border-[#FFD700]" },
        ],
        macros: { protein: 12, carbs: 60, fat: 5 },
      },
      {
        name: "传统燕麦片",
        image: "https://images.unsplash.com/photo-1566575167524-1b8b9c66c30d?q=80&w=600&auto=format&fit=crop",
        weight: "500g",
        price: 4,
        tags: [
          { text: "快手碳水", className: "text-[#FFD700] border-[#FFD700]" },
          { text: "早餐友好", className: "text-[#00E5FF] border-[#00E5FF]" },
        ],
        macros: { protein: 15, carbs: 65, fat: 6 },
      },
    ],
  },
  {
    id: "fat",
    title: "健康脂肪区",
    subtitle: "激素支持与热量补足",
    items: [
      {
        name: "新西兰哈斯牛油果",
        image: "https://images.unsplash.com/photo-1630898042976-ede9b22a81b7?q=80&w=600&auto=format&fit=crop",
        weight: "2 颗",
        price: 3.8,
        tags: [
          { text: "30g 脂肪", className: "text-[#FF5722] border-[#FF5722]" },
          { text: "单不饱和脂肪", className: "text-[#00E5FF] border-[#00E5FF]" },
        ],
        macros: { protein: 4, carbs: 15, fat: 30 },
      },
      {
        name: "初榨橄榄油便携装",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
        weight: "100ml",
        price: 4.5,
        tags: [
          { text: "地中海脂肪", className: "text-[#FFD700] border-[#FFD700]" },
          { text: "拌餐增香", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 0, carbs: 0, fat: 90 },
      },
      {
        name: "无盐混合坚果",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600&auto=format&fit=crop",
        weight: "150g",
        price: 6.5,
        tags: [
          { text: "Omega-3/6", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "加餐可用", className: "text-[#FFD700] border-[#FFD700]" },
        ],
        macros: { protein: 20, carbs: 25, fat: 75 },
      },
    ],
  },
  {
    id: "fiber",
    title: "蔬菜纤维区",
    subtitle: "消化、微量营养与抗炎恢复",
    items: [
      {
        name: "有机羽衣甘蓝",
        image: "https://images.unsplash.com/photo-1618788856642-8e491177d973?q=80&w=600&auto=format&fit=crop",
        weight: "250g",
        price: 4.2,
        tags: [
          { text: "膳食纤维", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "微量营养", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 6, carbs: 14, fat: 1 },
      },
      {
        name: "新鲜菠菜",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop",
        weight: "300g",
        price: 3.2,
        tags: [
          { text: "促消化", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "低热量", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 8, carbs: 10, fat: 1 },
      },
      {
        name: "西兰花",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=600&auto=format&fit=crop",
        weight: "400g",
        price: 3.6,
        tags: [
          { text: "高纤维", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "分装友好", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 10, carbs: 28, fat: 1 },
      },
    ],
  },
  {
    id: "recovery",
    title: "训练恢复食品区",
    subtitle: "抗氧化、补糖原与训练后恢复",
    items: [
      {
        name: "高山蓝莓",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600&auto=format&fit=crop",
        weight: "125g",
        price: 4,
        tags: [
          { text: "抗氧化", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "训练恢复", className: "text-[#FFD700] border-[#FFD700]" },
        ],
        macros: { protein: 1, carbs: 18, fat: 0 },
      },
      {
        name: "香蕉",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=600&auto=format&fit=crop",
        weight: "4 根",
        price: 2.4,
        tags: [
          { text: "快碳", className: "text-[#FFD700] border-[#FFD700]" },
          { text: "练后补糖原", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 4, carbs: 92, fat: 1 },
      },
      {
        name: "低脂巧克力奶",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=600&auto=format&fit=crop",
        weight: "1L",
        price: 3.9,
        tags: [
          { text: "恢复饮", className: "text-[#00E5FF] border-[#00E5FF]" },
          { text: "蛋白 + 碳水", className: "text-[#39FF14] border-[#39FF14]" },
        ],
        macros: { protein: 32, carbs: 48, fat: 8 },
      },
    ],
  },
];

export const allFoodItems = foodCategories.flatMap((category) => category.items);
