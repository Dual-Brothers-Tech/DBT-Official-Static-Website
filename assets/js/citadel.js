/* Easter egg "Powered by Citadel".
   Il link rosso nel footer richiede 20 tocchi: il sito si sgretola in ASCII, emerge l'emblema
   della Citadel, poi la console scrive il messaggio e dopo 5 secondi si apre il sito Citadel.
   File generato da tools/build.py (emblema ASCII da tools/citadel_emblem.html). */
(function () {
  "use strict";

  var URL_CITADEL = "https://the-citadel-mainframe.github.io/citadel-website/index.html";
  var TOTAL = 20;
  var MESSAGE = "The Citadel is waiting for you";
  var EMBLEM = "                              <span class=\"g\">*+</span>                              \n                             <span class=\"g\">#%##</span>                             \n                            <span class=\"g\">+@%#@+</span>                            \n                       <span class=\"g\">:+**</span> <span class=\"g\">%@%#@%</span> <span class=\"g\">+*+:</span>                       \n                   <span class=\"g\">*#@@@@@#</span> <span class=\"g\">#@%#@%</span> <span class=\"g\">*@@@@@#+</span>                   \n               <span class=\"g\">:#@@@%*+</span>     <span class=\"g\">#@*+@%</span>     <span class=\"g\">+#%@@@#:</span>               \n             <span class=\"g\">+@@@#+</span> <span class=\"r\">+%@@</span>  <span class=\"g\">:@#@</span><span class=\"r\">&amp;@</span><span class=\"g\">%#@+</span>  <span class=\"r\">@@%+</span> <span class=\"g\">+%@@@+</span>             \n           <span class=\"g\">*@@@+</span> <span class=\"r\">*&amp;@%</span>     <span class=\"g\">+@#%</span><span class=\"r\">@@</span><span class=\"g\">%#@+</span>    <span class=\"r\">+%@&amp;+</span> <span class=\"g\">*@@@+</span>           \n         <span class=\"g\">:@@@+</span> <span class=\"r\">%@%</span>       <span class=\"g\">:@@*%</span><span class=\"r\">@@</span><span class=\"g\">%#@@+</span>       <span class=\"r\">%@%</span> <span class=\"g\">+@@@:</span>         \n        <span class=\"g\">*@@*</span> <span class=\"r\">*@*</span>        <span class=\"g\">#@@@*%</span><span class=\"r\">@@</span><span class=\"g\">##@@@#</span>        <span class=\"r\">%@*</span> <span class=\"g\">#@@*</span>        \n       <span class=\"g\">#@@:</span> <span class=\"r\">@&amp;</span>          <span class=\"g\">%@@@*%</span><span class=\"r\">@@</span><span class=\"g\">##@@@@</span>          <span class=\"r\">@@</span> <span class=\"g\">+@@#</span>       \n      <span class=\"g\">#@@:</span> <span class=\"r\">@%</span>           <span class=\"g\">%@@@*#</span><span class=\"r\">@@</span><span class=\"g\">##@@@@</span>           <span class=\"r\">%@</span> <span class=\"g\">:@@*</span>      \n     <span class=\"g\">+@@:</span> <span class=\"r\">@%</span>            <span class=\"g\">%@@@*#</span><span class=\"r\">@@</span><span class=\"g\">##@@@@</span>            <span class=\"r\">%@</span> <span class=\"g\">+@@:</span>     \n     <span class=\"g\">@@#</span> <span class=\"r\">&amp;@</span>             <span class=\"g\">@@@@*#</span><span class=\"r\">@@</span><span class=\"g\">*#@@@@</span>             <span class=\"r\">@%</span> <span class=\"g\">%@@</span>     \n    <span class=\"g\">+@@:</span> <span class=\"r\">@+</span>           <span class=\"g\">#@@@%#@*</span><span class=\"r\">@@</span><span class=\"g\">*@#%@@@#</span>           <span class=\"r\">+@</span> <span class=\"g\">:@@:</span>    \n    <span class=\"g\">#@@</span> <span class=\"r\">*@</span>           <span class=\"g\">:@@@*%@@*</span><span class=\"r\">@@</span><span class=\"g\">*@@%+@@@+</span>           <span class=\"r\">@*</span> <span class=\"g\">@@*</span>    \n  <span class=\"g\">.::++::::::</span>        <span class=\"g\">+@@@:@@@+</span><span class=\"r\">@@</span><span class=\"g\">+@@@:@@@+</span>        <span class=\"g\">::::::++::.</span>  \n<span class=\"g\">:+++****##*+++</span>       <span class=\"g\">+@@@:@@@+</span><span class=\"r\">@@</span><span class=\"g\">+@@@:@@@+</span>       <span class=\"g\">+++*##****+++:</span>\n     <span class=\"g\">#@@@@@@#########%@@@:@@@+</span><span class=\"r\">@@</span><span class=\"g\">:@@@:@@@%#########@@@@@@#</span>     \n    <span class=\"g\">*%+*####*************</span> <span class=\"g\">@@@:</span><span class=\"r\">@@</span><span class=\"g\">:@@@</span> <span class=\"g\">************#####*+%*</span>    \n     <span class=\"g\">@@#</span> <span class=\"r\">*@</span>             <span class=\"g\">:#@@@:</span><span class=\"r\">@@</span><span class=\"g\">:@@@%:</span>             <span class=\"r\">@*</span> <span class=\"g\">#@@</span>     \n     <span class=\"g\">*@@+</span> <span class=\"r\">@@</span>          <span class=\"g\">+%@@@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@@@@+</span>          <span class=\"r\">@&amp;</span> <span class=\"g\">+@@*</span>     \n      <span class=\"g\">%@@+</span> <span class=\"r\">&amp;@</span>        <span class=\"g\">:@@@@@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@@@@@:</span>        <span class=\"r\">@&amp;</span> <span class=\"g\">+@@#</span>      \n       <span class=\"g\">%@@*</span> <span class=\"r\">*@%</span>      <span class=\"g\">:@@@*@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@#%@@:</span>      <span class=\"r\">%@+</span> <span class=\"g\">*@@#</span>       \n        <span class=\"g\">*@@@:</span> <span class=\"r\">%@*</span>    <span class=\"g\">+@@@*@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@#%@@+</span>    <span class=\"r\">%@%</span> <span class=\"g\">:@@@*</span>        \n         <span class=\"g\">:@@@%:</span> <span class=\"r\">*%</span>   <span class=\"g\">+@@@*@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@#%@@+</span>  <span class=\"r\">+&amp;*</span> <span class=\"g\">:%@@%:</span>         \n           <span class=\"g\">+@@@%*++**%@@@*@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@*%@@#++++*%@@@+</span>           \n             <span class=\"g\">+%@@@@@@@@@%*@@@:</span><span class=\"r\">@@</span> <span class=\"g\">@@@*#@@@@@@@@@%:</span>             \n                <span class=\"g\">:#%%%%%#</span> <span class=\"g\">+@@@:</span><span class=\"r\">@@</span><span class=\"g\">:@@@+</span> <span class=\"g\">#%%%%%#:</span>                \n                  <span class=\"g\">:++++#@#:%@@::@@@:*@#++++:</span>                  \n                         <span class=\"g\">*%:@@#*@@+%#</span>                         \n                           <span class=\"g\">:@@##@@+</span>                           \n                            <span class=\"g\">%@##@@</span>                            \n                             <span class=\"g\">@##@</span>                             \n                             <span class=\"g\">:##:</span>                             ";

  var link = document.querySelector("a.cx-link");
  if (!link) return;

  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var GLYPH_A = "#%&@*+=?!/\\|<>01";
  var GLYPH_B = "░▒▓█#@%&:;";
  var GLYPH_C = ".:'`,·";
  var level = 0, nodes = null, ambient = null, started = false;

  function rnd(s) { return s.charAt(Math.floor(Math.random() * s.length)); }

  function collect() {
    var out = [];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest(".cx-immune, script, style, noscript, #cx-bg, #cx-final, #cx-live")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) {
      var n = w.currentNode, s = n.nodeValue, th = [];
      for (var i = 0; i < s.length; i++) th.push(Math.random());
      out.push({ n: n, s: s, t: th });
    }
    return out;
  }

  function symbol() {
    if (level >= 16 && Math.random() < ((level - 15) / 5) * 0.8) return " ";
    if (level >= 11) return rnd(Math.random() < 0.5 ? GLYPH_B : GLYPH_C);
    return rnd(GLYPH_A);
  }

  function render() {
    var cut = Math.pow(level / TOTAL, 0.85);
    for (var k = 0; k < nodes.length; k++) {
      var o = nodes[k], out = "";
      for (var i = 0; i < o.s.length; i++) {
        var c = o.s.charAt(i);
        out += (/\s/.test(c) || o.t[i] > cut) ? c : symbol();
      }
      o.n.nodeValue = out;
    }
  }

  function burst() {
    render();
    if (reduce) return;
    var n = 0;
    var t = setInterval(function () { render(); if (++n >= 4) clearInterval(t); }, 70);
  }

  function applyLevel() {
    var stages = [1, 5, 10, 15];
    for (var i = 0; i < stages.length; i++) {
      root.classList.toggle("cx-s" + (i + 1), level >= stages[i]);
    }
    var q = Math.max(0, Math.min(1, (level - 7) / 12));
    var e = Math.max(0, Math.min(1, (level - 8) / 9));
    root.style.setProperty("--cx-q", q.toFixed(3));
    root.style.setProperty("--cx-e", (e * 0.9).toFixed(3));
    root.style.setProperty("--cx-l", String(level));
  }

  function start() {
    started = true;
    root.classList.add("cx-on");
    nodes = collect();

    var frags = document.querySelectorAll(
      ".card,.steps li,.svc-list li,.faq,.box,.timeline li,.info,.hero-mark,.section-title,h1,.lead,.brand,.nav a,.preview,.form fieldset,.cta-band .btn,.page-head .btn,.hero .btn");
    for (var i = 0; i < frags.length; i++) {
      var f = frags[i];
      if (f.closest(".cx-immune")) continue;
      f.classList.add("cx-frag");
      f.style.setProperty("--cx-dx", (Math.random() * 2 - 1).toFixed(2));
      f.style.setProperty("--cx-dy", (Math.random() * 0.9 + 0.1).toFixed(2));
      f.style.setProperty("--cx-r", (Math.random() * 2 - 1).toFixed(2));
    }

    var bg = document.createElement("div");
    bg.id = "cx-bg";
    bg.className = "cx-immune";
    bg.setAttribute("aria-hidden", "true");
    bg.innerHTML = '<pre class="cx-ascii">' + EMBLEM + "</pre>";
    document.body.appendChild(bg);

    var live = document.createElement("p");
    live.id = "cx-live";
    live.className = "cx-sr";
    live.setAttribute("role", "status");
    document.body.appendChild(live);

    var hide = document.querySelectorAll(".site-header, main");
    for (var j = 0; j < hide.length; j++) hide[j].setAttribute("aria-hidden", "true");

    if (document.fonts && document.fonts.load) document.fonts.load("22px VT323");
    if (!reduce) ambient = setInterval(function () { if (level < TOTAL) render(); }, 650);
  }

  function openCitadel() {
    var w = null;
    try { w = window.open(URL_CITADEL, "_blank"); } catch (e) { w = null; }
    if (w) {
      try { w.opener = null; } catch (e) { /* noop */ }
      setTimeout(function () { location.reload(); }, 400);
    } else {
      /* popup bloccato dal browser: si apre nella stessa scheda */
      location.href = URL_CITADEL;
    }
  }

  function finale() {
    clearInterval(ambient);
    root.classList.add("cx-final-on");
    var bg = document.getElementById("cx-bg");
    if (bg) bg.remove();

    var f = document.createElement("div");
    f.id = "cx-final";
    f.className = "cx-immune";
    f.innerHTML =
      '<div class="cx-wrap">' +
      '<pre class="cx-ascii cx-ascii-final" aria-hidden="true">' + EMBLEM + "</pre>" +
      '<div class="cx-console" aria-hidden="true">' +
      '<div class="cx-bar"><span>CITADEL-OS // TERMINAL</span><span>SESSION: VISITOR</span></div>' +
      '<p class="cx-line"><span class="cx-prompt">visitor@citadel:~$</span> <span id="cx-typed"></span><span class="cx-cursor">█</span></p>' +
      "</div></div>" +
      '<p class="cx-powered" aria-hidden="true">Powered by <span class="cx-red">Citadel</span></p>';
    document.body.appendChild(f);

    var typed = document.getElementById("cx-typed");
    var i = 0;
    function tick() {
      if (i < MESSAGE.length) {
        typed.textContent += MESSAGE.charAt(i++);
        setTimeout(tick, 55 + Math.random() * 65);
      } else {
        var live = document.getElementById("cx-live");
        if (live) live.textContent = MESSAGE;
        setTimeout(openCitadel, 5000);
      }
    }
    setTimeout(tick, 900);
  }

  link.addEventListener("click", function (e) {
    if (e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (level >= TOTAL) return;
    if (!started) start();
    level++;
    if (level >= TOTAL) { finale(); return; }
    applyLevel();
    burst();
  });

  /* Esc interrompe l'effetto e ripristina la pagina */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && started) location.reload();
  });
  /* tornando indietro dalla cache la pagina riparte normale */
  window.addEventListener("pageshow", function (e) {
    if (e.persisted && started) location.reload();
  });
})();
