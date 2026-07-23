// داده‌ی برنامه‌های تمرینی
// anim: نوع انیمیشن حرکت که در exercises-anim.css تعریف شده
// equip: وسیله‌ی مورد استفاده (فقط برای نمایش برچسب)

const PROGRAMS = {
  "آرشام": {
    displayName: "آرشام",
    subtitle: "برنامه‌ی سه‌روزه‌ی شروع قدرتی",
    days: [
      {
        title: "روز ۱ — سینه و شانه",
        exercises: [
          { name: "پرس سینه با هالتر روی میز پرس", sets: "۳ ست × ۱۰ تکرار", equip: "هالتر ۲۰ کیلو + میز پرس", anim: "press" },
          { name: "پرس سرشانه با دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل ۵ کیلو", anim: "shoulderpress" },
          { name: "نشر از جانب با دمبل", sets: "۳ ست × ۱۵ تکرار", equip: "دمبل ۵ کیلو", anim: "lateral" },
          { name: "شنای سوئدی", sets: "۳ ست × حداکثر تکرار", equip: "بدون وسیله", anim: "pushup" }
        ]
      },
      {
        title: "روز ۲ — پا و پشت",
        exercises: [
          { name: "اسکوات با هالتر", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر ۳۰ کیلو", anim: "squat" },
          { name: "ددلیفت با هالتر", sets: "۳ ست × ۸ تکرار", equip: "هالتر ۲۰ کیلو", anim: "deadlift" },
          { name: "زیربغل خم تک‌دست با دمبل", sets: "۳ ست × ۱۲ تکرار هر دست", equip: "دمبل ۱۰ کیلو", anim: "row" },
          { name: "جلوبازو با دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل ۵ کیلو", anim: "curl" }
        ]
      },
      {
        title: "روز ۳ — شکم و هوازی سبک",
        exercises: [
          { name: "دراز و نشست روی میز شکم", sets: "۳ ست × ۱۵ تکرار", equip: "میز شکم", anim: "situp" },
          { name: "پابلند کردن خوابیده", sets: "۳ ست × ۱۲ تکرار", equip: "بدون وسیله", anim: "legraise" },
          { name: "چرخش روسی", sets: "۳ ست × ۲۰ تکرار", equip: "دمبل ۵ کیلو", anim: "twist" },
          { name: "پلانک", sets: "۳ ست × ۴۵ ثانیه", equip: "بدون وسیله", anim: "plank" }
        ]
      }
    ]
  },

  "رضا": {
    displayName: "رضا",
    subtitle: "برنامه‌ی سه‌روزه‌ی بالاتنه و پایین‌تنه",
    days: [
      {
        title: "روز ۱ — بالاتنه",
        exercises: [
          { name: "پرس سینه با دمبل روی میز پرس", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل ۱۰ کیلو + میز پرس", anim: "press" },
          { name: "زیربغل خم با هالتر", sets: "۳ ست × ۱۰ تکرار", equip: "هالتر ۲۰ کیلو", anim: "row" },
          { name: "پرس سرشانه با هالتر نشسته", sets: "۳ ست × ۱۰ تکرار", equip: "هالتر ۱۰ کیلو + میز پرس", anim: "shoulderpress" },
          { name: "جلوبازو با دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل ۱۰ کیلو", anim: "curl" }
        ]
      },
      {
        title: "روز ۲ — پایین‌تنه",
        exercises: [
          { name: "اسکوات با هالتر", sets: "۴ ست × ۱۲ تکرار", equip: "هالتر ۳۰ کیلو", anim: "squat" },
          { name: "ددلیفت با هالتر", sets: "۳ ست × ۱۰ تکرار", equip: "هالتر ۳۰ کیلو", anim: "deadlift" },
          { name: "لانگز با دمبل", sets: "۳ ست × ۱۰ تکرار هر پا", equip: "دمبل ۵ کیلو", anim: "lunge" },
          { name: "نشر از جانب با دمبل", sets: "۳ ست × ۱۵ تکرار", equip: "دمبل ۵ کیلو", anim: "lateral" }
        ]
      },
      {
        title: "روز ۳ — شکم و هوازی سبک",
        exercises: [
          { name: "دراز و نشست روی میز شکم", sets: "۳ ست × ۲۰ تکرار", equip: "میز شکم", anim: "situp" },
          { name: "پابلند کردن خوابیده", sets: "۳ ست × ۱۵ تکرار", equip: "بدون وسیله", anim: "legraise" },
          { name: "چرخش روسی", sets: "۳ ست × ۲۵ تکرار", equip: "دمبل ۱۰ کیلو", anim: "twist" },
          { name: "پلانک", sets: "۳ ست × ۶۰ ثانیه", equip: "بدون وسیله", anim: "plank" }
        ]
      }
    ]
  }
};

// نرمال‌سازی حروف عربی به فارسی برای مچ کردن اسم‌ها
function normalizeFa(str) {
  return str
    .trim()
    .replace(/[\u064A]/g, "ی")   // ي عربی -> ی فارسی
    .replace(/[\u0643]/g, "ک")   // ك عربی -> ک فارسی
    .replace(/\s+/g, " ");
}

function findProgram(inputName) {
  const norm = normalizeFa(inputName);
  for (const key in PROGRAMS) {
    if (normalizeFa(key) === norm) return PROGRAMS[key];
  }
  return null;
}
