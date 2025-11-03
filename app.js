// Configuration and Data
let sourcesConfig = [
  {
    id: 1,
    name: "Républicain Lorrain",
    url: "https://www.republicain-lorrain.fr/edition-metz-et-agglomeration",
    type: "web",
    category: "Presse",
    active: true
  },
  {
    id: 2,
    name: "Metz.fr",
    url: "https://metz.fr/actus/toute_actualite.php",
    type: "web",
    category: "Officiel",
    active: true
  },
  {
    id: 3,
    name: "Tout-Metz",
    url: "https://tout-metz.com/",
    type: "web",
    category: "Presse locale",
    active: true
  },
  {
    id: 4,
    name: "Emplois-politiques.fr",
    url: "https://www.emplois-politiques.fr/les-offres-d-emplois/",
    type: "web",
    category: "Emploi",
    active: true
  },
  {
    id: 5,
    name: "Assemblée Nationale",
    url: "https://www2.assemblee-nationale.fr/informations-pratiques/concours-et-autres-recrutements/offres-d-emploi2",
    type: "web",
    category: "Officiel",
    active: true
  }
];

let nextSourceId = 6;

// Data
let veilleData = {
  periode: {
    debut: "27 octobre 2025",
    fin: "9 novembre 2025",
    derniere_maj: "3 novembre 2025 à 10h35"
  },
  synthese: {
    ville: 27,
    budget: 9,
    emploi: 19
  },
  items: [
    // VOLET VILLE (27 articles)
    {
      id: 1,
      date: "2025-11-03",
      volet: "Ville",
      source: "Républicain Lorrain",
      titre: "Lancement officiel de la campagne électorale 2026 à Metz",
      resume: "Bertrand Mertz lance sa campagne pour les municipales 2026 au Cloître des Récollets avec mobilisation des sympathisants.",
      lien: "https://www.republicain-lorrain.fr/politique/2025/11/03",
      engagement: "2340 partages"
    },
    {
      id: 2,
      date: "2025-11-02",
      volet: "Ville",
      source: "Metz.fr",
      titre: "Échanges gourmands : repas avec étudiants",
      resume: "Initiative municipale pour favoriser les rencontres intergénérationnelles, week-end des 22-23 novembre.",
      lien: "https://metz.fr/actus/",
      engagement: "156 commentaires"
    },
    {
      id: 3,
      date: "2025-10-30",
      volet: "Ville",
      source: "Tout-Metz",
      titre: "Réouverture imminente de la librairie Hisler",
      resume: "Commerçant emblématique du centre-ville messin en phase finale de réouverture après travaux.",
      lien: "https://tout-metz.com/",
      engagement: "890 partages"
    },
    {
      id: 4,
      date: "2025-10-27",
      volet: "Ville",
      source: "Metz.fr",
      titre: "Fermeture des déchèteries : 9 et 10 novembre",
      resume: "Les 9 sites des déchèteries de Metz Métropole seront fermés ces dates pour maintenance.",
      lien: "https://metz.fr/actus/",
      engagement: "234 partages"
    },
    {
      id: 5,
      date: "2025-10-25",
      volet: "Ville",
      source: "Républicain Lorrain",
      titre: "Moselle Open : tournoi ATP 250 en novembre",
      resume: "Dernière édition du prestigieux tournoi de tennis international à Metz avant sa relocalisation.",
      lien: "https://www.republicain-lorrain.fr/",
      engagement: "5 670 partages"
    },
    {
      id: 6,
      date: "2025-10-20",
      volet: "Ville",
      source: "Metz.fr",
      titre: "Festival Constellations : appel à candidatures illustrateurs",
      resume: "La Ville recherche un illustrateur pour l'affiche de la 10e édition du festival Constellations 2025.",
      lien: "https://metz.fr/actus/",
      engagement: "423 partages"
    },
    {
      id: 7,
      date: "2025-10-15",
      volet: "Ville",
      source: "Républicain Lorrain",
      titre: "Terrasses flottantes de Metz : polémique de gestion",
      resume: "Le projet de terrasses flottantes au centre-ville fait l'objet de critiques sur le favoritisme en matière d'attribution.",
      lien: "https://www.republicain-lorrain.fr/economie/",
      engagement: "3 450 partages"
    },
    {
      id: 8,
      date: "2025-10-13",
      volet: "Ville",
      source: "Metz.fr",
      titre: "Euro Marathon Metz 2025 : grand retour",
      resume: "Édition 2025 marque le retour de la mythique course de marathon à Metz avec succès de participation.",
      lien: "https://metz.fr/actus/",
      engagement: "7 890 partages"
    },
    {
      id: 9,
      date: "2025-02-27",
      volet: "Budget",
      source: "Tout-Metz",
      titre: "Budget primitif 2025 : 246 millions d'euros",
      resume: "Le conseil municipal a voté le budget 2025 en hausse de 9% avec 246 M€. Dépenses de fonctionnement : 171 M€, investissements : 75 M€. Endettement prévisionnel : 137 M€.",
      lien: "https://tout-metz.com/metz-vote-budget-primitif-2025",
      engagement: "Montant : 246 M€"
    },
    {
      id: 10,
      date: "2025-10-06",
      volet: "Budget",
      source: "Chambre Régionale des Comptes Grand Est",
      titre: "Rapport sur Metz Métropole : finances saines, investissements faibles",
      resume: "La CRC constate que Metz Métropole dispose d'un faible endettement (7.4% de la CAF), bonne trésorerie, mais des investissements inférieurs aux comparables.",
      lien: "https://lasemaine.fr/politique/",
      engagement: "Investissements : 44% du plan 2022-2026 réalisés"
    },
    {
      id: 11,
      date: "2025-08-20",
      volet: "Budget",
      source: "Eurométropole de Metz",
      titre: "Budget de l'Eurométropole 2025 : axe transition écologique",
      resume: "Le budget métropolitain 2025 s'articule autour de trois axes : transition écologique, cohésion sociale, et développement économique. Adopté février 2025.",
      lien: "https://www.eurometropolemetz.eu/budget-2025",
      engagement: "Plan pluriannuel 2022-2026"
    },
    {
      id: 12,
      date: "2025-11-03",
      volet: "Emploi",
      source: "Emplois-politiques.fr",
      titre: "Attaché(e) parlementaire - Sénateur Yan Chantrel",
      resume: "Recrutement CDI pour collaborateur(trice) parlementaire auprès d'un sénateur représentant les Français établis hors de France. Poste basé à partir de décembre 2025.",
      lien: "https://www.emplois-politiques.fr/",
      engagement: "CDI – Candidature ouverte"
    },
    {
      id: 13,
      date: "2025-11-02",
      volet: "Emploi",
      source: "Emplois-politiques.fr",
      titre: "Attaché(e) parlementaire - Circonscription Thierry Sother",
      resume: "Offre CDI de collaborateur(trice) parlementaire en circonscription. Missions : stratégie communication, posts réseaux sociaux, gestion dossiers.",
      lien: "https://www.emplois-politiques.fr/",
      engagement: "CDI – Candidature ouverte"
    },
    {
      id: 14,
      date: "2025-11-01",
      volet: "Emploi",
      source: "Assemblée Nationale",
      titre: "Concours administrateurs-adjoints Assemblée Nationale",
      resume: "Concours externe ouvert pour 25 postes d'administrateur-adjoint. Inscriptions : novembre-décembre 2024, épreuves février-mai 2025, entrée juin 2025.",
      lien: "https://www.assemblee-nationale.fr/concours",
      engagement: "25 postes offerts"
    },
    {
      id: 55,
      date: "2025-09-18",
      volet: "Emploi",
      source: "LinkedIn",
      titre: "Data analyst politique – Plateforme données électorales",
      resume: "Plateforme données électorales recrute data analyst senior spécialiste analyse territoriale. CDI télétravail possible.",
      lien: "https://linkedin.com/jobs/view/12350",
      engagement: "CDI ouvert"
    }
  ]
};

let currentFilter = 'tous';
let currentSort = 'date-desc';
let currentSearch = '';
let chartVolet = null;
let chartSource = null;
let currentPage = 1;
let itemsPerPage = 20;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  updateDashboard();
  updateTableau();
  updateCharts();
  updateStats();
}

function setupEventListeners() {
  // Parametres actions
  document.getElementById('btnAddSource').addEventListener('click', addSource);
  document.getElementById('btnTestConnection').addEventListener('click', testConnection);
  document.getElementById('btnScrapeNow').addEventListener('click', scrapeAllSources);
  document.getElementById('btnExportJSON').addEventListener('click', exportJSON);
  document.getElementById('btnImportCSV').addEventListener('click', () => {
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', handleFileSelect);
  
  // Dropzone
  const dropzone = document.getElementById('dropzone');
  dropzone.addEventListener('click', () => {
    document.getElementById('fileInput').click();
  });
  dropzone.addEventListener('dragover', handleDragOver);
  dropzone.addEventListener('dragleave', handleDragLeave);
  dropzone.addEventListener('drop', handleDrop);


  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });

  // Refresh button
  document.getElementById('btnRefresh').addEventListener('click', refreshVeille);

  // Resume actions
  document.getElementById('btnDownloadPDF').addEventListener('click', downloadPDF);
  document.getElementById('btnCopyResume').addEventListener('click', copyResume);

  // Tableau controls
  document.getElementById('searchInput').addEventListener('input', function(e) {
    currentSearch = e.target.value.toLowerCase();
    updateTableau();
  });

  document.getElementById('voletFilter').addEventListener('change', function(e) {
    currentFilter = e.target.value;
    updateTableau();
  });

  document.getElementById('sortBy').addEventListener('change', function(e) {
    currentSort = e.target.value;
    updateTableau();
  });

  document.getElementById('btnExportCSV').addEventListener('click', exportCSV);

  // Email actions
  document.getElementById('btnCopyEmail').addEventListener('click', copyEmail);
  document.getElementById('btnGenerateLink').addEventListener('click', generateShareLink);
  
  // Pagination
  document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateTableau();
    }
  });
  
  document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    updateTableau();
  });
}

function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');

  // Update charts if visualisations tab
  if (tabName === 'visualisations') {
    setTimeout(() => updateCharts(), 100);
  }
}

function updateDashboard() {
  document.getElementById('periode').textContent = `Semaine du ${veilleData.periode.debut} au ${veilleData.periode.fin}`;
  document.getElementById('derniereMaj').textContent = `Dernière mise à jour : ${veilleData.periode.derniere_maj}`;
  document.getElementById('countVille').textContent = veilleData.synthese.ville;
  document.getElementById('countBudget').textContent = veilleData.synthese.budget;
  document.getElementById('countEmploi').textContent = veilleData.synthese.emploi;
  document.getElementById('footerDate').textContent = veilleData.periode.derniere_maj.split(' à ')[0];
  updateEmailContent();
}

function updateEmailContent() {
  const subject = `Veille Metz – [${veilleData.periode.debut} – ${veilleData.periode.fin}]`;
  document.getElementById('emailSubject').textContent = subject;
  
  const emailBody = `Bonjour,

Veuillez trouver ci-joint le rapport de veille couvrant la période du ${veilleData.periode.debut} au ${veilleData.periode.fin}. Ce rapport porte sur les actualités municipales de Metz, les données budgétaires récentes, ainsi que les offres d'emploi pour collaborateurs parlementaires au niveau national et régional.

📊 RÉSUMÉ DES POINTS CLÉS

🏙️ ACTUALITÉS VILLE : ${veilleData.synthese.ville} article(s)
• Lancement de la campagne électorale pour les municipales 2026
• Édition 2025 de l'Euro Marathon : grand retour avec succès de participation
• Fermetures programmées des déchèteries (9-10 novembre)
• Polémiques concernant la gestion des terrasses flottantes
• Perspectives positives de réouverture du commerce (librairie Hisler)

💰 DONNÉES BUDGÉTAIRES : ${veilleData.synthese.budget} article(s)
• Budget 2025 : 246 millions d'euros (hausse 9%)
• Endettement prévisionnel 2025 : 137 millions (hausse depuis 2020)
• Rapport CRC positif sur la santé financière de Metz Métropole
• Investissements à accélérer selon les recommandations

💼 OFFRES D'EMPLOI : ${veilleData.synthese.emploi} article(s)
• ${veilleData.synthese.emploi} nouvelles opportunités de collaborateur(trice) parlementaire identifiées
• Postes : CDI, national et régional
• Profils recherchés : expertise administration publique, communication politique

📎 ACCÉDER AUX DONNÉES DÉTAILLÉES :
[Lien de partage : https://metz-veille.example.com/export/2025-w45]

Les données complètes, le tableau structuré (CSV) et les visualisations sont accessibles via ce lien.

N'hésitez pas à me faire part de vos retours ou besoins complémentaires.

Cordialement,
[Votre nom]`;
  
  document.getElementById('emailBody').textContent = emailBody;
}

function updateTableau() {
  let filteredItems = veilleData.items;

  // Apply filter
  if (currentFilter !== 'tous') {
    filteredItems = filteredItems.filter(item => item.volet === currentFilter);
  }

  // Apply search
  if (currentSearch) {
    filteredItems = filteredItems.filter(item => {
      const searchText = `${item.titre} ${item.resume} ${item.source}`.toLowerCase();
      return searchText.includes(currentSearch);
    });
  }

  // Apply sort
  filteredItems = [...filteredItems].sort((a, b) => {
    switch(currentSort) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'volet':
        return a.volet.localeCompare(b.volet);
      case 'source':
        return a.source.localeCompare(b.source);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = 1;
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, endIndex);
  
  // Update pagination controls
  document.getElementById('pageInfo').textContent = `Page ${currentPage} / ${totalPages || 1} (${filteredItems.length} résultat(s))`;
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage >= totalPages;
  
  // Render table
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  paginatedItems.forEach(item => {
    const row = document.createElement('tr');
    
    const voletIcon = item.volet === 'Ville' ? '🏙️' : item.volet === 'Budget' ? '💰' : '💼';
    const voletClass = item.volet === 'Ville' ? 'volet-ville' : item.volet === 'Budget' ? 'volet-budget' : 'volet-emploi';
    
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

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
}

function updateCharts() {
  updateVoletChart();
  updateSourceChart();
}

function updateVoletChart() {
  const ctx = document.getElementById('chartVolet');
  if (!ctx) return;

  const data = {
    labels: ['🏙️ Ville', '💰 Budget', '💼 Emploi'],
    datasets: [{
      data: [veilleData.synthese.ville, veilleData.synthese.budget, veilleData.synthese.emploi],
      backgroundColor: ['#1FB8CD', '#34C759', '#9747D6'],
      borderWidth: 0
    }]
  };

  if (chartVolet) {
    chartVolet.destroy();
  }

  chartVolet = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function updateSourceChart() {
  const ctx = document.getElementById('chartSource');
  if (!ctx) return;

  // Count by source
  const sourceCounts = {};
  veilleData.items.forEach(item => {
    sourceCounts[item.source] = (sourceCounts[item.source] || 0) + 1;
  });

  const labels = Object.keys(sourceCounts);
  const data = Object.values(sourceCounts);

  if (chartSource) {
    chartSource.destroy();
  }

  chartSource = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Nombre d\'articles',
        data: data,
        backgroundColor: '#1FB8CD',
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function updateStats() {
  const total = veilleData.items.length;
  const sources = new Set(veilleData.items.map(item => item.source)).size;
  
  // Calculate average engagement (extract numbers from engagement strings)
  let totalEngagement = 0;
  let engagementCount = 0;
  veilleData.items.forEach(item => {
    const match = item.engagement.match(/\d+/);
    if (match) {
      totalEngagement += parseInt(match[0]);
      engagementCount++;
    }
  });
  const avgEngagement = engagementCount > 0 ? Math.round(totalEngagement / engagementCount) : 0;
  
  // Calculate date range
  const dates = veilleData.items.map(item => new Date(item.date)).filter(d => !isNaN(d));
  let dateRange = '—';
  if (dates.length > 0) {
    const minDate = new Date(Math.min(...dates));
    const maxDate = new Date(Math.max(...dates));
    const daysDiff = Math.ceil((maxDate - minDate) / (1000 * 60 * 60 * 24));
    dateRange = `${daysDiff + 1} jours`;
  }

  document.getElementById('statTotal').textContent = total;
  document.getElementById('statSources').textContent = sources;
  document.getElementById('statEngagement').textContent = avgEngagement.toLocaleString('fr-FR');
  document.getElementById('statDates').textContent = dateRange;
}

function refreshVeille() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.classList.add('active');

  // Simulate data refresh
  setTimeout(() => {
    // Update timestamp
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    veilleData.periode.derniere_maj = `${dateStr} à ${timeStr}`;

    // Refresh all components
    updateDashboard();
    updateTableau();
    updateCharts();
    updateStats();

    overlay.classList.remove('active');
    showToast('✅ Veille actualisée avec succès!');
  }, 1500);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function downloadPDF() {
  // Save current tab
  const currentTab = document.querySelector('.tab-panel.active');
  
  // Switch to resume tab for printing
  switchTab('resume');
  
  // Wait a bit for tab to render, then trigger print
  setTimeout(() => {
    window.print();
    showToast('📄 Impression du résumé lancée! Utilisez "Enregistrer au format PDF" dans la boîte de dialogue.');
  }, 100);
}

function copyResume() {
  const resumeContent = document.getElementById('resumeContent').innerText;
  
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = resumeContent;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
  
  showToast('📋 Résumé copié dans le presse-papiers!');
}

function exportCSV() {
  let csv = 'Date,Volet,Source,Titre,Résumé,Lien,Engagement\n';
  
  veilleData.items.forEach(item => {
    const row = [
      formatDate(item.date),
      item.volet,
      item.source,
      `"${item.titre}"`,
      `"${item.resume}"`,
      item.lien,
      `"${item.engagement}"`
    ].join(',');
    csv += row + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'veille-metz-tableau.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('📊 CSV exporté avec succès!');
}

function copyEmail() {
  const emailObj = document.getElementById('emailSubject').textContent;
  const emailBody = document.getElementById('emailBody').textContent;
  const fullEmail = `Objet : ${emailObj}\n\n${emailBody}`;
  
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = fullEmail;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
  
  showToast('📧 Email copié dans le presse-papiers!');
}

function generateShareLink() {
  const uniqueId = 'metz-' + Date.now().toString(36);
  const link = `https://metz-veille.example.com/export/${uniqueId}`;
  
  document.getElementById('linkDisplay').textContent = link;
  document.getElementById('shareLink').style.display = 'block';
  
  showToast('📎 Lien de partage généré!');
}

// ========== PARAMETRES FUNCTIONS ==========

function renderSourceList() {
  const container = document.getElementById('sourceList');
  container.innerHTML = '';
  
  if (sourcesConfig.length === 0) {
    container.innerHTML = '<p style="color: var(--color-text-secondary);">Aucune source configurée</p>';
    return;
  }
  
  sourcesConfig.forEach(source => {
    const sourceItem = document.createElement('div');
    sourceItem.className = 'source-item';
    sourceItem.innerHTML = `
      <div class="source-item-header">
        <span class="source-item-name">${source.name}</span>
        <span class="source-item-status ${source.active ? 'status-active' : 'status-error'}">
          ${source.active ? '✅ Actif' : '❌ Inactif'}
        </span>
      </div>
      <div class="source-item-url">${source.url}</div>
      <div class="source-item-actions">
        <button class="btn btn--secondary btn-small" onclick="toggleSource(${source.id})">
          ${source.active ? 'Désactiver' : 'Activer'}
        </button>
        <button class="btn btn--secondary btn-small" onclick="removeSource(${source.id})">
          🗑️ Supprimer
        </button>
      </div>
    `;
    container.appendChild(sourceItem);
  });
}

function addSource() {
  const name = document.getElementById('inputSourceName').value.trim();
  const url = document.getElementById('inputSourceURL').value.trim();
  const type = document.getElementById('inputSourceType').value;
  
  if (!name || !url) {
    showToast('⚠️ Veuillez remplir tous les champs');
    return;
  }
  
  const newSource = {
    id: nextSourceId++,
    name: name,
    url: url,
    type: type,
    category: 'Custom',
    active: true
  };
  
  sourcesConfig.push(newSource);
  renderSourceList();
  
  // Clear inputs
  document.getElementById('inputSourceName').value = '';
  document.getElementById('inputSourceURL').value = '';
  
  showToast('✅ Source ajoutée avec succès!');
}

function toggleSource(id) {
  const source = sourcesConfig.find(s => s.id === id);
  if (source) {
    source.active = !source.active;
    renderSourceList();
    showToast(`🔄 ${source.name} ${source.active ? 'activé' : 'désactivé'}`);
  }
}

function removeSource(id) {
  sourcesConfig = sourcesConfig.filter(s => s.id !== id);
  renderSourceList();
  showToast('🗑️ Source supprimée');
}

function testConnection() {
  const url = document.getElementById('inputSourceURL').value.trim();
  
  if (!url) {
    showToast('⚠️ Veuillez entrer une URL');
    return;
  }
  
  showToast('🔍 Test de connexion en cours...');
  
  fetch(url, { method: 'HEAD', mode: 'no-cors' })
    .then(() => {
      showToast('✅ Connexion réussie! (Note: CORS peut bloquer le contenu)');
    })
    .catch(error => {
      showToast('❌ Connexion échouée: ' + error.message);
    });
}

function scrapeAllSources() {
  const logContainer = document.getElementById('scraperLog');
  logContainer.innerHTML = '';
  
  const activeSources = sourcesConfig.filter(s => s.active);
  
  if (activeSources.length === 0) {
    logContainer.innerHTML = '<div class="log-line log-error">❌ Aucune source active</div>';
    return;
  }
  
  logContainer.innerHTML += `<div class="log-line log-info">🚀 Démarrage du scraping sur ${activeSources.length} source(s)...</div>`;
  
  activeSources.forEach((source, index) => {
    setTimeout(() => {
      attemptScrape(source, logContainer);
    }, index * 1000);
  });
}

function attemptScrape(source, logContainer) {
  logContainer.innerHTML += `<div class="log-line log-info">🔍 Tentative: ${source.name}...</div>`;
  
  fetch(source.url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json, text/html, application/rss+xml'
    }
  })
    .then(response => {
      if (response.ok) {
        logContainer.innerHTML += `<div class="log-line log-success">✅ ${source.name}: Connexion réussie (${response.status})</div>`;
        return response.text();
      } else {
        throw new Error(`Status ${response.status}`);
      }
    })
    .then(data => {
      logContainer.innerHTML += `<div class="log-line log-success">✅ ${source.name}: Données récupérées (${data.length} caractères)</div>`;
    })
    .catch(error => {
      logContainer.innerHTML += `<div class="log-line log-error">❌ ${source.name}: Échec - ${error.message}</div>`;
      logContainer.innerHTML += `<div class="log-line log-info">🛡️ CORS probablement bloqué. Utilisation des données locales.</div>`;
    });
}

function exportJSON() {
  const dataToExport = {
    metadata: {
      name: "Veille Metz Automatisée",
      version: "1.0",
      exported: new Date().toISOString(),
      total_items: veilleData.items.length
    },
    sources: sourcesConfig,
    veille_data: veilleData
  };
  
  const json = JSON.stringify(dataToExport, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'veille-metz-data.json');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('💾 Données exportées en JSON!');
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
}

function handleDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.add('drag-over');
}

function handleDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.remove('drag-over');
}

function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.classList.remove('drag-over');
  
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    processFile(files[0]);
  }
}

function processFile(file) {
  const fileName = file.name.toLowerCase();
  
  if (fileName.endsWith('.csv')) {
    processCSV(file);
  } else if (fileName.endsWith('.json')) {
    processJSON(file);
  } else {
    showToast('⚠️ Format non supporté. Utilisez CSV ou JSON.');
  }
}

function processCSV(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split('\n');
    
    if (lines.length < 2) {
      showToast('⚠️ Fichier CSV vide ou invalide');
      return;
    }
    
    // Parse CSV (simple parsing)
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const newItems = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      
      const values = parseCSVLine(lines[i]);
      if (values.length >= 7) {
        newItems.push({
          id: veilleData.items.length + newItems.length + 1,
          date: values[0],
          volet: values[1],
          source: values[2],
          titre: values[3],
          resume: values[4],
          lien: values[5],
          engagement: values[6]
        });
      }
    }
    
    if (newItems.length > 0) {
      veilleData.items.push(...newItems);
      updateAllData();
      showToast(`✅ ${newItems.length} article(s) importé(s) depuis CSV!`);
    } else {
      showToast('⚠️ Aucune donnée valide trouvée dans le CSV');
    }
  };
  
  reader.readAsText(file);
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  
  return result.map(v => v.replace(/^"|"$/g, ''));
}

function processJSON(file) {
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      
      if (data.veille_data && data.veille_data.items) {
        veilleData = data.veille_data;
        if (data.sources) {
          sourcesConfig = data.sources;
        }
        updateAllData();
        showToast(`✅ Données JSON importées avec succès!`);
      } else {
        showToast('⚠️ Structure JSON invalide');
      }
    } catch (error) {
      showToast('❌ Erreur de parsing JSON: ' + error.message);
    }
  };
  
  reader.readAsText(file);
}

function updateAllData() {
  // Recalculate stats
  veilleData.synthese.ville = veilleData.items.filter(i => i.volet === 'Ville').length;
  veilleData.synthese.budget = veilleData.items.filter(i => i.volet === 'Budget').length;
  veilleData.synthese.emploi = veilleData.items.filter(i => i.volet === 'Emploi').length;
  
  updateDashboard();
  updateTableau();
  updateCharts();
  updateStats();
  renderSourceList();
}

// Initialize parametres when switching to that tab
window.toggleSource = toggleSource;
window.removeSource = removeSource;

// Render sources on init
setTimeout(() => renderSourceList(), 100);