// داده‌ی برنامه‌های تمرینی
// anim: نوع انیمیشن حرکت که در exercises-anim.css تعریف شده
// equip: وسیله‌ی مورد استفاده (فقط برای نمایش برچسب)

const PROGRAMS = {
  "آرشام": {
    displayName: "آرشام",
    subtitle: "برنامه‌ی هفتگی Push / Pull / Leg + یک روز استراحت با حرکات اصلاحی",
    days: [
      {
        title: "روز ۱ — Push (سینه، سرشانه، پشت بازو، شکم)",
        exercises: [
          { name: "پرس سینه هالتر", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر", anim: "press" },
          { name: "پرس بالا سینه دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل", anim: "press" },
          { name: "شنای سوئدی", sets: "۳ ست تا نزدیک ناتوانی", equip: "بدون وسیله", anim: "pushup" },
          { name: "پرس سرشانه دمبل", sets: "۴ ست × ۱۰ تکرار", equip: "دمبل", anim: "shoulderpress" },
          { name: "نشر جانب", sets: "۳ ست × ۱۵ تکرار", equip: "دمبل", anim: "lateral" },
          { name: "پشت بازو خوابیده با هالتر", sets: "۳ ست × ۱۲ تکرار", equip: "هالتر", anim: "press" },
          { name: "پشت بازو تک‌دست دمبل بالای سر", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل", anim: "shoulderpress" },
          { name: "کرانچ روی میز شکم", sets: "۳ ست × ۲۰ تکرار", equip: "میز شکم", anim: "situp" },
          { name: "پلانک", sets: "۳ ست × ۴۵ ثانیه", equip: "بدون وسیله", anim: "plank" }
        ]
      },
      {
        title: "روز ۲ — Pull (پشت، کول، جلو بازو، ساعد)",
        exercises: [
          { name: "پارویی خم با هالتر", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر", anim: "row" },
          { name: "پارویی تک‌دست دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل", anim: "row" },
          { name: "ددلیفت رومانیایی سبک", sets: "۳ ست × ۱۰ تکرار", equip: "هالتر یا دمبل", anim: "deadlift" },
          { name: "فلای معکوس دمبل", sets: "۳ ست × ۱۵ تکرار", equip: "دمبل", anim: "lateral" },
          { name: "شراگ با هالتر", sets: "۴ ست × ۱۵ تکرار", equip: "هالتر", anim: "row" },
          { name: "جلو بازو هالتر", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر", anim: "curl" },
          { name: "جلو بازو چکشی دمبل", sets: "۳ ست × ۱۲ تکرار", equip: "دمبل", anim: "curl" },
          { name: "ساعد با هالتر", sets: "۳ ست × ۱۵ تکرار", equip: "هالتر", anim: "curl" }
        ]
      },
      {
        title: "روز ۳ — پا، باسن، میان‌تنه و اصلاح قوز",
        exercises: [
          { name: "اسکوات با هالتر", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر", anim: "squat" },
          { name: "لانج دمبل", sets: "۳ ست × ۱۲ تکرار هر پا", equip: "دمبل", anim: "lunge" },
          { name: "ددلیفت رومانیایی", sets: "۴ ست × ۱۰ تکرار", equip: "هالتر", anim: "deadlift" },
          { name: "هیپ تراست", sets: "۴ ست × ۱۲ تکرار", equip: "هالتر", anim: "squat" },
          { name: "ساق پا ایستاده", sets: "۵ ست × ۲۰ تکرار", equip: "بدون وسیله یا هالتر", anim: "squat" },
          { name: "کرانچ معکوس", sets: "۳ ست × ۱۵ تکرار", equip: "بدون وسیله", anim: "legraise" },
          { name: "چرخش روسی", sets: "۳ ست × ۲۰ تکرار", equip: "بدون وسیله", anim: "twist" },
          { name: "Bird Dog", sets: "۳ ست × ۱۲ تکرار", equip: "بدون وسیله", anim: "plank" },
          { name: "Dead Bug", sets: "۳ ست × ۱۲ تکرار", equip: "بدون وسیله", anim: "plank" }
        ]
      },
      {
        title: "روز استراحت — پیاده‌روی و حرکات اصلاحی",
        exercises: [
          { name: "پیاده‌روی سبک", sets: "۳۰ دقیقه", equip: "بدون وسیله", anim: "lunge" },
          { name: "Wall Slide", sets: "۳ ست × ۱۵ تکرار", equip: "بدون وسیله", anim: "shoulderpress" },
          { name: "Chin Tuck", sets: "۳ ست × ۱۵ تکرار", equip: "بدون وسیله", anim: "plank" },
          { name: "کشش در (Door Stretch)", sets: "۳ ست × ۳۰ ثانیه", equip: "بدون وسیله", anim: "plank" },
          { name: "Cat Cow", sets: "۲ دقیقه", equip: "بدون وسیله", anim: "plank" }
        ]
      }
    ]
  },

  "رضا": {
    displayName: "رضا",
    subtitle: "تناسب اندام — کاهش چربی و ساخت عضله؛ ۳ روز تمرین پشت سر هم + ۱ روز استراحت",
    days: [
      {
        title: "روز ۱ — فول‌بادی A (+ کاردیو ۱۵-۲۰ دقیقه)",
        exercises: [
          { name: "اسکات با هالتر یا گابلت اسکات دمبل", sets: "۴ ست × ۱۰-۱۲ تکرار", equip: "هالتر یا دمبل", anim: "squat" },
          { name: "پرس سینه هالتر یا دمبل روی میز پرس", sets: "۴ ست × ۸-۱۲ تکرار", equip: "هالتر/دمبل + میز پرس", anim: "press" },
          { name: "زیربغل خم با هالتر یا تک‌دست دمبل", sets: "۳ ست × ۱۰-۱۲ تکرار هر دست", equip: "هالتر یا دمبل", anim: "row" },
          { name: "پرس سرشانه دمبل نشسته روی میز", sets: "۳ ست × ۱۰-۱۲ تکرار", equip: "دمبل + میز پرس", anim: "shoulderpress" },
          { name: "لانج یا استپ‌آپ روی میز با دمبل", sets: "۳ ست × ۱۰ تکرار هر پا", equip: "دمبل", anim: "lunge" },
          { name: "کرانچ روی میز شکم", sets: "۳ ست × ۱۵-۲۰ تکرار", equip: "میز شکم", anim: "situp" },
          { name: "پلانک", sets: "۳ ست × ۳۰-۶۰ ثانیه", equip: "بدون وسیله", anim: "plank" }
        ]
      },
      {
        title: "روز ۲ — فول‌بادی B (+ کاردیو ۲۰ دقیقه)",
        exercises: [
          { name: "ددلیفت رومانیایی هالتر یا دمبل", sets: "۴ ست × ۱۰-۱۲ تکرار", equip: "هالتر یا دمبل", anim: "deadlift" },
          { name: "روئینگ خم با هالتر یا دمبل", sets: "۳ ست × ۱۰-۱۲ تکرار", equip: "هالتر یا دمبل", anim: "row" },
          { name: "پرس سینه شیب‌دار روی میز", sets: "۳ ست × ۱۰-۱۲ تکرار", equip: "هالتر/دمبل + میز پرس", anim: "press" },
          { name: "نشر جانب دمبل", sets: "۳ ست × ۱۲-۱۵ تکرار", equip: "دمبل", anim: "lateral" },
          { name: "لگ ریز یا کرانچ معکوس روی میز شکم", sets: "۳ ست × ۱۵-۲۰ تکرار", equip: "میز شکم", anim: "legraise" },
          { name: "پل باسن با هالتر", sets: "۳ ست × ۱۲-۱۵ تکرار", equip: "هالتر", anim: "squat" },
          { name: "Shoulder Tap یا پلانک", sets: "۳ ست × ۲۰ تکرار هر طرف", equip: "بدون وسیله", anim: "plank" }
        ]
      },
      {
        title: "روز ۳ — فول‌بادی C (+ کاردیو ۲۰-۲۵ دقیقه)",
        exercises: [
          { name: "اسکات بلغاری با دمبل", sets: "۳ ست × ۱۰ تکرار هر پا", equip: "دمبل", anim: "lunge" },
          { name: "پرس سینه افقی هالتر یا دمبل", sets: "۳ ست × ۱۰-۱۲ تکرار", equip: "هالتر/دمبل + میز پرس", anim: "press" },
          { name: "زیربغل تک‌دست دمبل", sets: "۳ ست × ۱۰-۱۲ تکرار هر دست", equip: "دمبل", anim: "row" },
          { name: "پرس سرشانه هالتر یا دمبل", sets: "۳ ست × ۱۰-۱۲ تکرار", equip: "هالتر یا دمبل", anim: "shoulderpress" },
          { name: "کرانچ معکوس + لگ ریز روی میز شکم", sets: "۴ ست × ۱۵-۲۰ تکرار", equip: "میز شکم", anim: "legraise" },
          { name: "چرخش روسی با دمبل", sets: "۳ ست × ۲۰ تکرار هر طرف", equip: "دمبل", anim: "twist" },
          { name: "Superman روی زمین", sets: "۳ ست × ۱۲-۱۵ تکرار", equip: "بدون وسیله", anim: "plank" }
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
