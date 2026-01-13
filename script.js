async function loadConfig() {
  const logo = document.getElementById("logo");
  const text = document.getElementById("text");
  const link = document.querySelector("link[rel='icon']");

  try {
    const res = await fetch("config.json");
    const cfg = await res.json();

    logo.src = cfg.logo || "";
    logo.alt = cfg.logo_alt || "";
    text.textContent = cfg.text || "";
    document.title = cfg.title || "";
    link.href = cfg.favicon;
  } catch (e) {
    console.error("Errore nel caricamento della configurazione:", e);
    text.textContent = "config.json file unavailable."
  }
}

loadConfig();