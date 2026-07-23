// ============ عناصر ============
const gateView = document.getElementById("gateView");
const programView = document.getElementById("programView");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const errorBox = document.getElementById("errorBox");
const switchUserBtn = document.getElementById("switchUserBtn");

const progName = document.getElementById("progName");
const progSubtitle = document.getElementById("progSubtitle");
const daysContainer = document.getElementById("daysContainer");
const progressFill = document.getElementById("progressFill");
const progressNum = document.getElementById("progressNum");

let currentProgram = null;
let currentKey = "";

// ============ لینک ویدیوی طرز صحیح حرکت ============
// برای هر حرکت یه لینک جستجوی یوتیوب می‌سازه که با کلیک،
// ویدیوهای آموزش طرز صحیح همون حرکت رو نشون میده.
function videoSearchUrl(exerciseName){
  const query = exerciseName + " طرز صحیح حرکت آموزش";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
}

// ============ ورود اسم ============
nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = nameInput.value.trim();
  if (!val) return;
  const program = findProgram(val);
  if (!program) {
    errorBox.style.display = "block";
    return;
  }
  errorBox.style.display = "none";
  loadProgram(program);
});

switchUserBtn.addEventListener("click", () => {
  programView.style.display = "none";
  gateView.style.display = "flex";
  nameInput.value = "";
  nameInput.focus();
});

// ============ ساخت صفحه‌ی برنامه ============
function loadProgram(program){
  currentProgram = program;
  currentKey = "zarban_progress_" + program.displayName;

  progName.textContent = "برنامه‌ی " + program.displayName;
  progSubtitle.textContent = program.subtitle;

  const doneSet = getDoneSet();

  daysContainer.innerHTML = "";
  program.days.forEach((day, dIdx) => {
    const dayBlock = document.createElement("div");
    dayBlock.className = "day-block";

    const dayTitle = document.createElement("h3");
    dayTitle.className = "day-title";
    dayTitle.textContent = day.title;
    dayBlock.appendChild(dayTitle);

    day.exercises.forEach((ex, eIdx) => {
      const id = dIdx + "-" + eIdx;
      const card = document.createElement("div");
      card.className = "exercise-card" + (doneSet.has(id) ? " done" : "");
      card.dataset.id = id;

      card.innerHTML = `
        <div class="ex-top">
          <div class="checkbox" role="checkbox" aria-checked="${doneSet.has(id)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>
          </div>
          <div class="ex-info">
            <p class="ex-name">${ex.name}</p>
            <div class="ex-meta">
              <span>${ex.sets}</span>
              <span>${ex.equip}</span>
            </div>
          </div>
        </div>
        <a class="video-link" href="${videoSearchUrl(ex.name)}" target="_blank" rel="noopener noreferrer">
          <span class="video-link-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
          </span>
          <span class="video-link-text">
            <span class="video-link-title">دیدن ویدیوی طرز صحیح حرکت</span>
            <span class="video-link-sub">${ex.name}</span>
          </span>
        </a>
      `;

      card.querySelector(".checkbox").addEventListener("click", () => {
        toggleDone(id, card);
      });

      dayBlock.appendChild(card);
    });

    daysContainer.appendChild(dayBlock);
  });

  updateProgress();

  gateView.style.display = "none";
  programView.style.display = "block";
}

// ============ چک‌باکس‌ها + ذخیره‌سازی ============
function getDoneSet(){
  try{
    const raw = localStorage.getItem(currentKey);
    return new Set(raw ? JSON.parse(raw) : []);
  }catch(e){ return new Set(); }
}
function saveDoneSet(set){
  localStorage.setItem(currentKey, JSON.stringify([...set]));
}

function toggleDone(id, card){
  const set = getDoneSet();
  const nowDone = !set.has(id);
  if (nowDone) set.add(id); else set.delete(id);
  saveDoneSet(set);

  card.classList.toggle("done", nowDone);
  card.querySelector(".checkbox").setAttribute("aria-checked", nowDone);
  updateProgress();
}

function updateProgress(){
  const totalExercises = currentProgram.days.reduce((sum, d) => sum + d.exercises.length, 0);
  const doneSet = getDoneSet();
  const donePercent = totalExercises ? Math.round((doneSet.size / totalExercises) * 100) : 0;
  progressFill.style.width = donePercent + "%";
  progressNum.textContent = toFaDigits(donePercent) + "٪";
}

function toFaDigits(num){
  const fa = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  return String(num).replace(/[0-9]/g, d => fa[d]);
}

// ============ پخش‌کننده‌ی موزیک محلی ============
const audioEl = document.getElementById("audioEl");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const trackTitle = document.getElementById("trackTitle");
const trackSub = document.getElementById("trackSub");
const pBars = document.getElementById("pBars");
const pickFileBtn = document.getElementById("pickFileBtn");
const audioFileInput = document.getElementById("audioFileInput");

let playlist = [];
let currentTrack = 0;

pickFileBtn.addEventListener("click", () => audioFileInput.click());

audioFileInput.addEventListener("change", (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  playlist = files.map(f => ({ url: URL.createObjectURL(f), name: f.name.replace(/\.[^/.]+$/, "") }));
  currentTrack = 0;
  loadTrack(currentTrack);
  playAudio();
});

function loadTrack(i){
  const t = playlist[i];
  if (!t) return;
  audioEl.src = t.url;
  trackTitle.textContent = t.name;
  trackSub.textContent = "آهنگ " + toFaDigits(i + 1) + " از " + toFaDigits(playlist.length);
}

function playAudio(){
  if (!playlist.length) { audioFileInput.click(); return; }
  audioEl.play();
}

playBtn.addEventListener("click", () => {
  if (!playlist.length) { audioFileInput.click(); return; }
  if (audioEl.paused) playAudio(); else audioEl.pause();
});

audioEl.addEventListener("play", () => {
  pBars.classList.add("playing");
  playIcon.innerHTML = '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>';
});
audioEl.addEventListener("pause", () => {
  pBars.classList.remove("playing");
  playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
});
audioEl.addEventListener("ended", () => {
  if (playlist.length > 1){
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    playAudio();
  }
});
