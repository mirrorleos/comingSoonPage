async function loadConfig() {
  try {
    const res = await fetch("config.json");
    const cfg = await res.json();

    const logo = document.getElementById("logo");
    const text = document.getElementById("text");

    logo.src = cfg.logo || "";
    text.textContent = cfg.text || "";
    document.title = cfg.title || "";
  } catch (e) {
    console.error("Errore nel caricamento della configurazione:", e);
  }
}

loadConfig();