// =============================
// 🌐 APP.JS - Version connectée à data.json
// =============================

// --- Configuration (inchangée) ---
let sourcesConfig = [
  { id: 1, name: "Républicain Lorrain", url: "https://www.republicain-lorrain.fr/edition-metz-et-agglomeration", type: "web", category: "Presse", active: true },
  { id: 2, name: "Metz.fr", url: "https://metz.fr/actus/toute_actualite.php", type: "web", category: "Officiel", active: true },
  { id: 3, name: "Tout-Metz", url: "https://tout-metz.com/", type: "web", category: "Presse locale", active: true },
  { id: 4, name: "Emplois-politiques.fr", url: "https://www.emplois-politiques.fr/les-offres-d-emplois/", type: "web", category: "Emploi", active: true },
  { id: 5, name: "Assemblée Nationale", url: "https://www2.assemblee-nationale.fr/informations-pratiques/concours-et-autres-recrutements/offres-d-emploi2", type: "web", category: "Officiel", active: true }
];
let nextSourceId = 6;

// --- Données dynamiques (chargées depuis data.json) ---
let veilleData = null;

// --- Variables d'état ---
let currentFilter = 'tous';
let currentSort = 'date-desc';
let currentSearch = '';
let chartVolet = null;
let chartSource = null;
let currentPage = 1;
let itemsPerPage = 20;

// =============================
// 🔄 Chargement automatique depuis data.json
// =============================
async function loadVeilleData() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) overlay.classList.add("active");

  try {
    const response = await fetch("./data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();

    // Construire les données internes attendues par le site
    veilleData = {
      periode: {
        debut: "—",
        fin: "—",
        derniere_maj: new Date(data.updated_at).toLocaleString("fr-FR")
      },
      synthese: {
        ville: data.articles.filter(a => a.title.match(/ville/i)).length,
        budget: data.articles.filter(a => a.title.match(/budget|finances|économie/i)).length,
        emploi: data.articles.filter(a => a.title.match(/emploi|recrutement|poste/i)).length
      },
      items: data.articles.map((a, i) => ({
        id: i + 1,
        date: new Date().toISOString().slice(0, 10),
        volet:
          /budget|finances|économie/i.test(a.title)
            ? "Budget"
            : /emploi|recrutement|poste/i.test(a.title)
            ? "Emploi"
            : "Ville",
        source: a.url.split("/")[2] || "Inconnu",
        titre: a.title,
        resume: a.summary || "",
        lien: a.url,
        engagement: ""
      }))
    };

    initializeApp();
    setupEventListeners();
    showToast("✅ Données actualisées depuis data.json !");
  } catch (err) {
    console.error("Erreur lors du chargement de data.json :", err);
    const tbody = document.getElementById("tableBody");
    if (tbody) tbody.innerHTML = "<tr><td colspan='7'>⚠️ Impossible de charger les données.</td></tr>";
    showToast("⚠️ Erreur de chargement des données");
  } finally {
    if (overlay) overlay.classList.remove("active");
  }
}

// Lancer le chargement au démarrage
document.addEventListener("DOMContentLoaded", loadVeilleData);

// =============================
// 🧱 Fonctions principales
// =============================
function initializeApp() {
  updateDashboard();
  updateTableau();
  updateCharts();
  updateStats();
}

function setupEventListeners() {
  document.getElementById('btnRefresh').addEventListener('click', loadVeilleData);
  document.getElementById('searchInput').addEventListener('input', e => { currentSearch = e.target.value.toLowerCase(); updateTableau(); });
  document.getElementById('voletFilter').addEventListener('change', e => { currentFilter = e.target.value; updateTableau(); });
  document.getElementById('sortBy').addEventListener('change', e => { currentSort = e.target.value; updateTableau(); });
  document.getElementById('prevPage').addEventListener('click', () => { if (currentPage > 1) { currentPage--; updateTableau(); } });
  document.getElementById('nextPage').addEventListener('click', () => { currentPage++; updateTableau(); });
}

// =============================
// 📊 Tableau principal
// =============================
function updateDashboard() {
  if (!veilleData) return;
  document.getElementById('derniereMaj').textContent = `Dernière mise à jour : ${veilleData.periode.derniere_maj}`;
  document.getElementById('countVille').textContent = veilleData.synthese.ville;
  document.getElementById('countBudget').textContent = veilleData.synthese.budget;
  document.getElementById('countEmploi').textContent = veilleData.synthese.emploi;
}

function updateTableau() {
  if (!veilleData) return;
  let filtered = veilleData.items;

  if (currentFilter !== 'tous') filtered = filtered.filter(i => i.volet === currentFilter);
  if (currentSearch) filtered = filtered.filter(i =>
    `${i.titre} ${i.resume} ${i.source}`.toLowerCase().includes(currentSearch)
  );

  filtered = filtered.sort((a, b) => {
    switch (currentSort) {
      case 'date-desc': return new Date(b.date) - new Date(a.date);
      case 'date-asc': return new Date(a.date) - new Date(b.date);
      case 'volet': return a.volet.localeCompare(b.volet);
      case 'source': return a.source.localeCompare(b.source);
      default: return 0;
    }
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = 1;
  const start = (currentPage - 1) * itemsPerPage;
  const visible = filtered.slice(start, start + itemsPerPage);

  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  if (visible.length === 0) {
    tbody.innerHTML = "<tr><td colspan='7'>Aucun article trouvé</td></tr>";
  } else {
    visible.forEach(item => {
      const voletIcon = item.volet === 'Ville' ? '🏙️' : item.volet === 'Budget' ? '💰' : '💼';
      const voletClass = item.volet === 'Ville' ? 'volet-ville' : item.volet === 'Budget' ? 'volet-budget' : 'volet-emploi';
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${formatDate(item.date)}</td>
        <td><span class="volet-badge ${voletClass}">${voletIcon} ${item.volet}</span></td>
        <td>${item.source}</td>
        <td><strong>${item.titre}</strong></td>
        <td>${item.resume}</td>
        <td><a href="${item.lien}" target="_blank">Voir</a></td>
        <td>${item.engagement}</td>
      `;
      tbody.appendChild(row);
    });
  }

  document.getElementById('pageInfo').textContent = `Page ${currentPage} / ${totalPages || 1} (${filtered.length} résultat${filtered.length > 1 ? 's' : ''})`;
}

function formatDate(d) {
  const date = new Date(d);
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// =============================
// 📈 Graphiques (Chart.js)
// =============================
function updateCharts() {
  updateVoletChart();
  updateSourceChart();
}

function updateVoletChart() {
  const ctx = document.getElementById("chartVolet");
  if (!ctx || !veilleData) return;
  const data = {
    labels: ['🏙️ Ville', '💰 Budget', '💼 Emploi'],
    datasets: [{
      data: [veilleData.synthese.ville, veilleData.synthese.budget, veilleData.synthese.emploi],
      backgroundColor: ['#1FB8CD', '#34C759', '#9747D6']
    }]
  };
  if (chartVolet) chartVolet.destroy();
  chartVolet = new Chart(ctx, { type: "doughnut", data, options: { plugins: { legend: { position: "bottom" } } } });
}

function updateSourceChart() {
  const ctx = document.getElementById("chartSource");
  if (!ctx || !veilleData) return;
  const counts = {};
  veilleData.items.forEach(i => counts[i.source] = (counts[i.source] || 0) + 1);
  const data = { labels: Object.keys(counts), datasets: [{ data: Object.values(counts), backgroundColor: "#1FB8CD" }] };
  if (chartSource) chartSource.destroy();
  chartSource = new Chart(ctx, { type: "bar", data, options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } } });
}

// =============================
// 📊 Statistiques
// =============================
function updateStats() {
  if (!veilleData) return;
  const total = veilleData.items.length;
  const sources = new Set(veilleData.items.map(i => i.source)).size;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statSources').textContent = sources;
  document.getElementById('statEngagement').textContent = "—";
  document.getElementById('statDates').textContent = "—";
}

// =============================
// 🔔 Toast messages
// =============================
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
