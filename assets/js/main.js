(function () {
  "use strict";

  /* Menu mobile */
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Modulo "Richiedi una riparazione": compone il messaggio e apre WhatsApp. L'invio lo fa l'utente. */
  var form = document.getElementById("repair-form");
  if (!form || !window.DBT) return;

  var preview = document.getElementById("preview");
  var send = document.getElementById("send");
  var hint = document.getElementById("form-hint");
  var f = form.elements;

  // Precompila il tipo di dispositivo da ?tipo=smartphone|pc
  var tipo = new URLSearchParams(location.search).get("tipo");
  if (tipo === "smartphone") f.kind.value = "Smartphone";
  if (tipo === "pc") f.kind.value = "PC";

  function val(el) { return (el.value || "").trim(); }

  function build() {
    var lines = ["Ciao, vorrei richiedere una riparazione.", ""];
    lines.push("Dispositivo: " + val(f.kind));
    lines.push("Marca: " + val(f.brand));
    lines.push("Modello: " + val(f.model));
    lines.push("Problema: " + val(f.problem));
    if (val(f.details)) lines.push("Dettagli: " + val(f.details));
    lines.push("");
    lines.push("Nome: " + val(f.name));
    if (val(f.contact)) lines.push("Altro contatto: " + val(f.contact));
    lines.push("");
    lines.push("Inviata dal sito " + window.DBT.name);
    return lines.join("\n");
  }

  function complete() {
    return ["kind", "brand", "model", "problem", "name"].every(function (n) { return val(f[n]) !== ""; });
  }

  function update() {
    var ok = complete();
    send.disabled = !ok;
    hint.style.display = ok ? "none" : "";
    preview.textContent = ok ? build() : "—";
  }

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var missing = false;
    ["kind", "brand", "model", "problem", "name"].forEach(function (n) {
      var bad = val(f[n]) === "";
      f[n].classList.toggle("invalid", bad);
      if (bad) missing = true;
    });
    if (missing) return;
    var url = "https://wa.me/" + window.DBT.whatsapp + "?text=" + encodeURIComponent(build());
    window.open(url, "_blank", "noopener");
  });
  update();
})();
