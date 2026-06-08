function boot(lines){
  const log = document.getElementById("modemLog");
  if(!log) return;
  lines.forEach((line, i) => {
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = "> " + line;
      log.appendChild(p);
    }, i * 260);
  });
}

function commonDossierInteractions(wizzText){
  const toast = document.getElementById("wizzToast");
  const wizzBtn = document.getElementById("wizzBtn");
  const wtBody = toast?.querySelector(".wt-body");
  const modemSound = initModemSound();
  if(wtBody) wtBody.textContent = wizzText;
  function showWizz(){
    if(!toast) return;
    toast.classList.add("show");
    document.body.animate([{transform:"translateX(0)"},{transform:"translateX(6px)"},{transform:"translateX(-6px)"},{transform:"translateX(0)"}],{duration:260});
    setTimeout(() => toast.classList.remove("show"), 2600);
  }
  wizzBtn?.addEventListener("click", showWizz);
  document.getElementById("wtClose")?.addEventListener("click", () => toast?.classList.remove("show"));
  document.getElementById("skipIntro")?.addEventListener("click", () => document.getElementById("dossier")?.scrollIntoView({behavior:"smooth"}));
  modemSound.arm();
  const sourcesToggle = document.getElementById("sourcesToggle");
  const sourcesBody = document.getElementById("sourcesBody");
  sourcesToggle?.addEventListener("click", () => {
    const isHidden = sourcesBody?.hasAttribute("hidden");
    if(!sourcesBody) return;
    if(isHidden) sourcesBody.removeAttribute("hidden"); else sourcesBody.setAttribute("hidden", "");
    sourcesToggle.setAttribute("aria-expanded", String(isHidden));
    const arrow = sourcesToggle.querySelector(".src-arrow");
    if(arrow) arrow.textContent = isHidden ? "▾" : "▸";
  });
  const track = document.getElementById("marqueeTrack");
  if(track) track.textContent = " INTERNET.EXE EUROPE · DOSSIER MIRADOURO · PARTIE 1 / 4 · ".repeat(12);
  const odo = document.getElementById("odometer");
  if(odo) odo.textContent = String(128000 + new Date().getDate() * 137).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  initSnake();
}

function initModemSound(){
  const button = document.getElementById("modemMute");
  const isFr = document.documentElement.lang === "fr";
  const labels = {
    playing: isFr ? "🔊 couper" : "🔊 mute",
    stopped: isFr ? "🔇 relancer" : "🔇 replay"
  };
  const audio = new Audio("../assets/audio/dial-up-modem-01.mp3");
  audio.preload = "auto";
  audio.volume = 0.55;
  let playing = false, triedAutoplay = false;
  function setButton(){
    if(button) button.textContent = playing ? labels.playing : labels.stopped;
  }
  function stop(){
    playing = false;
    audio.pause();
    audio.currentTime = 0;
    setButton();
  }
  async function play(){
    if(playing) return;
    stop();
    playing = true;
    setButton();
    try {
      await audio.play();
      return true;
    } catch(e) {
      playing = false;
      setButton();
      return false;
    }
  }
  function arm(){
    if(!button) return;
    setButton();
    audio.addEventListener("ended", stop);
    if(!triedAutoplay){
      triedAutoplay = true;
      play();
    }
    const unlock = (event) => {
      if(event?.target?.closest?.("#modemMute")) return;
      if(!playing) play();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
    window.addEventListener("pointerdown", unlock, {once:true});
    window.addEventListener("keydown", unlock, {once:true});
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if(playing) stop(); else play();
    });
  }
  return {arm, play, stop};
}

function initSnake(){
  const overlay = document.getElementById("snakeOverlay");
  const canvas = document.getElementById("snakeCanvas");
  if(!overlay || !canvas) return;
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("snakeScore");
  const bestEl = document.getElementById("snakeBest");
  const stateEl = document.getElementById("snakeState");
  let snake, food, dir, nextDir, score, timer, best = Number(localStorage.getItem("miradouroSnakeBest") || 0);
  const size = 16;
  canvas.width = 256;
  canvas.height = 256;
  if(bestEl) bestEl.textContent = String(best).padStart(3, "0");
  function reset(){
    snake = [{x:7,y:8},{x:6,y:8},{x:5,y:8}];
    food = {x:11,y:8};
    dir = nextDir = {x:1,y:0};
    score = 0;
    if(scoreEl) scoreEl.textContent = "000";
    if(stateEl) stateEl.textContent = "SPACE / OK pour lancer";
    draw();
  }
  function draw(){
    ctx.fillStyle = "#a7bf3f";
    ctx.fillRect(0,0,256,256);
    ctx.fillStyle = "#14210a";
    snake.forEach(p => ctx.fillRect(p.x*size+1,p.y*size+1,size-2,size-2));
    ctx.fillRect(food.x*size+3, food.y*size+3, size-6, size-6);
  }
  function tick(){
    dir = nextDir;
    const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
    if(head.x < 0 || head.y < 0 || head.x >= 16 || head.y >= 16 || snake.some(p => p.x === head.x && p.y === head.y)){
      clearInterval(timer); timer = null;
      if(stateEl) stateEl.textContent = "GAME OVER · OK pour rejouer";
      return;
    }
    snake.unshift(head);
    if(head.x === food.x && head.y === food.y){
      score += 10;
      best = Math.max(best, score);
      localStorage.setItem("miradouroSnakeBest", String(best));
      if(scoreEl) scoreEl.textContent = String(score).padStart(3, "0");
      if(bestEl) bestEl.textContent = String(best).padStart(3, "0");
      do {
        food = {x: Math.floor(Math.random()*16), y: Math.floor(Math.random()*16)};
      } while(snake.some(p => p.x === food.x && p.y === food.y));
    } else {
      snake.pop();
    }
    draw();
  }
  function start(){
    if(timer) return;
    if(stateEl) stateEl.textContent = "SNAKE.EXE";
    timer = setInterval(tick, 130);
    canvas.focus();
  }
  function setDir(name){
    const dirs = {up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};
    const nd = dirs[name];
    if(!nd) return start();
    if(nd.x + dir.x !== 0 || nd.y + dir.y !== 0) nextDir = nd;
  }
  document.querySelectorAll("[data-snake-open]").forEach(el => el.addEventListener("click", () => { overlay.classList.add("show"); overlay.setAttribute("aria-hidden","false"); reset(); canvas.focus(); }));
  document.querySelectorAll("[data-snake-close]").forEach(el => el.addEventListener("click", () => { overlay.classList.remove("show"); overlay.setAttribute("aria-hidden","true"); clearInterval(timer); timer = null; }));
  document.querySelectorAll("[data-snk]").forEach(btn => btn.addEventListener("click", () => setDir(btn.dataset.snk)));
  window.addEventListener("keydown", (event) => {
    if(!overlay.classList.contains("show")) return;
    const map = {ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"," ":"ok",Enter:"ok"};
    if(map[event.key]){ event.preventDefault(); setDir(map[event.key]); }
  });
  reset();
}

(function(){
  const config = window.INTERNET_EXE_BOOT || {};
  boot(config.lines || []);
  commonDossierInteractions(config.wizzText || "Jonathan sent you a WIZZ");
})();
