<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AstroYoga · Admin</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
:root {
  --bg: #0D0818;
  --surface: #160E2A;
  --surface2: #1F1438;
  --border: rgba(180,140,255,0.12);
  --purple: #9B6FD4;
  --purple-light: #C4A0F0;
  --gold: #D4A853;
  --gold-light: #E8C98A;
  --text: #F0EAF8;
  --text-mid: rgba(240,234,248,0.6);
  --text-dim: rgba(240,234,248,0.3);
  --rose: #D4698C;
  --success: #6DB88A;
  --error: #D46969;
}
body { font-family:'Jost',sans-serif; background:var(--bg); color:var(--text); min-height:100vh; }
body::before {
  content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(80,40,120,0.2) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(120,60,160,0.15) 0%, transparent 50%),
    radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 85% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 15% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 90% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 25%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 60% 55%, rgba(255,255,255,0.4) 0%, transparent 100%);
}

/* LOGIN */
#login-screen { position:fixed; inset:0; z-index:10; display:flex; align-items:center; justify-content:center; padding:2rem; }
.login-card { background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:3rem 2.5rem; width:100%; max-width:400px; text-align:center; position:relative; z-index:1; box-shadow:0 40px 80px rgba(0,0,0,0.5); }
.login-moon { font-size:2.8rem; display:block; margin-bottom:1.5rem; }
.login-title { font-family:'Cormorant Garamond',serif; font-size:2rem; font-weight:300; margin-bottom:0.3rem; }
.login-sub { font-size:0.7rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--text-dim); margin-bottom:2.5rem; }
.form-field { margin-bottom:1rem; text-align:left; }
.form-field label { display:block; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-dim); margin-bottom:0.5rem; }
.form-field input { width:100%; padding:0.9rem 1rem; background:var(--surface2); border:1px solid var(--border); border-radius:4px; color:var(--text); font-family:'Jost',sans-serif; font-size:0.9rem; outline:none; transition:border 0.2s; }
.form-field input:focus { border-color:var(--purple); }
.form-field input::placeholder { color:var(--text-dim); }
.login-btn { width:100%; padding:0.95rem; background:linear-gradient(135deg,var(--purple),var(--rose)); border:none; border-radius:4px; color:white; font-family:'Cormorant Garamond',serif; font-size:1.15rem; cursor:pointer; margin-top:0.5rem; letter-spacing:0.05em; transition:all 0.2s; }
.login-btn:hover { opacity:0.9; transform:translateY(-1px); }
.back-link { display:block; margin-top:1.5rem; color:var(--text-dim); font-size:0.75rem; text-decoration:none; }
.back-link:hover { color:var(--purple-light); }

/* DASHBOARD */
#dashboard { display:none; min-height:100vh; position:relative; z-index:1; }
.dash-header { background:var(--surface); border-bottom:1px solid var(--border); padding:1rem 2rem; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:100; }
.dash-logo { font-family:'Cormorant Garamond',serif; font-size:1.3rem; }
.dash-logo em { color:var(--gold-light); font-style:normal; }
.dash-meta { display:flex; align-items:center; gap:1rem; }
.dash-user-email { font-size:0.72rem; color:var(--text-dim); }
.logout-btn { background:none; border:1px solid var(--border); color:var(--text-mid); padding:0.35rem 0.9rem; border-radius:3px; cursor:pointer; font-size:0.72rem; font-family:'Jost',sans-serif; transition:all 0.2s; }
.logout-btn:hover { border-color:var(--rose); color:var(--rose); }
.dash-body { display:grid; grid-template-columns:220px 1fr; min-height:calc(100vh - 57px); }

/* SIDEBAR */
.dash-sidebar { background:var(--surface); border-right:1px solid var(--border); padding:1.5rem 0; }
.sidebar-label { display:block; font-size:0.6rem; letter-spacing:0.25em; text-transform:uppercase; color:var(--text-dim); padding:0.8rem 1.8rem 0.4rem; }
.sidebar-btn { display:flex; align-items:center; gap:0.7rem; width:100%; padding:0.7rem 1.5rem; background:none; border:none; color:var(--text-mid); font-family:'Jost',sans-serif; font-size:0.85rem; cursor:pointer; text-align:left; transition:all 0.2s; }
.sidebar-btn:hover { background:var(--surface2); color:var(--text); }
.sidebar-btn.active { background:rgba(155,111,212,0.12); color:var(--purple-light); border-right:2px solid var(--purple); }

/* MAIN */
.dash-main { padding:2rem; overflow-y:auto; }
.panel { display:none; }
.panel.active { display:block; }
.panel-title { font-family:'Cormorant Garamond',serif; font-size:1.9rem; font-weight:300; margin-bottom:0.3rem; }
.panel-sub { font-size:0.78rem; color:var(--text-dim); margin-bottom:2rem; }

/* CARDS */
.edit-card { background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:1.8rem; margin-bottom:1.2rem; }
.card-title { font-family:'Cormorant Garamond',serif; font-size:1.05rem; color:var(--gold-light); margin-bottom:1.3rem; }
.field-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem; }
.field-row.full { grid-template-columns:1fr; }
.field-row.three { grid-template-columns:1fr 1fr 1fr; }
.field-group { display:flex; flex-direction:column; gap:0.4rem; }
.field-group label { font-size:0.67rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--text-dim); }
.field-group input, .field-group textarea, .field-group select { background:var(--surface2); border:1px solid var(--border); border-radius:4px; color:var(--text); font-family:'Jost',sans-serif; font-size:0.85rem; padding:0.7rem 0.9rem; outline:none; transition:border 0.2s; width:100%; }
.field-group input:focus, .field-group textarea:focus { border-color:var(--purple); }
.field-group textarea { resize:vertical; min-height:80px; line-height:1.5; }
.save-row { display:flex; align-items:center; gap:1rem; margin-top:1.2rem; }
.save-btn { padding:0.7rem 1.8rem; background:linear-gradient(135deg,var(--purple),var(--rose)); border:none; border-radius:4px; color:white; font-family:'Jost',sans-serif; font-size:0.85rem; cursor:pointer; transition:all 0.2s; }
.save-btn:hover { opacity:0.9; transform:translateY(-1px); }
.save-ok { font-size:0.78rem; color:var(--success); opacity:0; transition:opacity 0.3s; }
.save-ok.show { opacity:1; }

/* ITEMS */
.item-card { background:var(--surface2); border:1px solid var(--border); border-radius:4px; padding:1.2rem; margin-bottom:0.8rem; }
.item-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem; }
.item-title { font-family:'Cormorant Garamond',serif; font-size:1rem; color:var(--gold-light); }
.del-btn { background:none; border:none; color:var(--text-dim); cursor:pointer; font-size:1rem; padding:0.2rem 0.4rem; border-radius:3px; transition:color 0.2s; }
.del-btn:hover { color:var(--error); }
.add-btn { width:100%; padding:0.75rem; background:none; border:1px dashed rgba(155,111,212,0.3); border-radius:4px; color:var(--text-dim); font-family:'Jost',sans-serif; font-size:0.82rem; cursor:pointer; transition:all 0.2s; margin-top:0.5rem; }
.add-btn:hover { border-color:var(--purple); color:var(--purple-light); }

/* DEPLOY */
.deploy-bar { background:linear-gradient(135deg,rgba(155,111,212,0.08),rgba(212,105,140,0.08)); border:1px solid rgba(155,111,212,0.15); border-radius:6px; padding:1rem 1.5rem; margin-bottom:2rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; }
.deploy-info strong { display:block; color:var(--purple-light); font-size:0.85rem; margin-bottom:0.2rem; }
.deploy-info span { font-size:0.75rem; color:var(--text-dim); }
.deploy-btn { padding:0.6rem 1.4rem; background:linear-gradient(135deg,var(--purple),var(--rose)); border:none; border-radius:4px; color:white; font-size:0.8rem; cursor:pointer; font-family:'Jost',sans-serif; white-space:nowrap; transition:opacity 0.2s; }
.deploy-btn:hover { opacity:0.85; }

/* PHOTO GRID */
.photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }
.photo-slot { aspect-ratio:4/3; border-radius:6px; overflow:hidden; border:1px solid var(--border); position:relative; cursor:pointer; transition:border 0.2s; background:var(--surface2); }
.photo-slot:hover { border-color:var(--purple); }
.photo-slot img { width:100%; height:100%; object-fit:cover; }
.photo-slot .photo-lbl { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent,rgba(0,0,0,0.75)); padding:1.5rem 0.8rem 0.6rem; font-size:0.67rem; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.7); }
.photo-slot input[type=file] { position:absolute; inset:0; opacity:0; cursor:pointer; }

@media(max-width:768px) {
  .dash-body { grid-template-columns:1fr; }
  .dash-sidebar { display:none; }
  .field-row, .field-row.three { grid-template-columns:1fr; }
  .photo-grid { grid-template-columns:1fr 1fr; }
}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="login-screen">
  <div class="login-card">
    <span class="login-moon">🌙</span>
    <h1 class="login-title">AstroYoga</h1>
    <p class="login-sub">Admin Portal</p>
    <div class="form-field">
      <label>Email</label>
      <input type="email" id="email" placeholder="isidora@astroyoga.com" onkeydown="if(event.key==='Enter')login()">
    </div>
    <div class="form-field">
      <label>Password</label>
      <input type="password" id="password" placeholder="••••••••" onkeydown="if(event.key==='Enter')login()">
    </div>
    <button class="login-btn" onclick="login()">Enter the Portal ✦</button>
    <a href="../index.html" class="back-link">← Back to website</a>
  </div>
</div>

<!-- DASHBOARD -->
<div id="dashboard">
  <header class="dash-header">
    <div class="dash-logo">Astro<em>Yoga</em> <span style="font-size:0.65rem;color:var(--text-dim);font-family:'Jost',sans-serif;letter-spacing:0.15em;margin-left:0.5rem;">ADMIN</span></div>
    <div class="dash-meta">
      <span class="dash-user-email" id="user-email"></span>
      <button class="logout-btn" onclick="logout()">Sign out</button>
    </div>
  </header>

  <div class="dash-body">
    <aside class="dash-sidebar">
      <span class="sidebar-label">Content</span>
      <button class="sidebar-btn active" onclick="show('homepage',this)">🏠 &nbsp;Homepage</button>
      <button class="sidebar-btn" onclick="show('about',this)">👤 &nbsp;About</button>
      <button class="sidebar-btn" onclick="show('services',this)">✦ &nbsp;Services & Prices</button>
      <button class="sidebar-btn" onclick="show('cosmic',this)">🌙 &nbsp;Cosmic Calendar</button>
      <button class="sidebar-btn" onclick="show('faq',this)">❓ &nbsp;FAQ</button>
      <span class="sidebar-label">Media</span>
      <button class="sidebar-btn" onclick="show('photos',this)">📷 &nbsp;Photos</button>
      <span class="sidebar-label">Settings</span>
      <button class="sidebar-btn" onclick="show('settings',this)">⚙️ &nbsp;Settings</button>
    </aside>

    <main class="dash-main">

      <div class="deploy-bar">
        <div class="deploy-info">
          <strong>✦ How to publish changes</strong>
          <span>Save your edits → click Download → upload the files to GitHub → site updates in 30 seconds</span>
        </div>
        <button class="deploy-btn" onclick="exportAll()">⬇ Download Changes</button>
      </div>

      <!-- HOMEPAGE -->
      <div class="panel active" id="panel-homepage">
        <h2 class="panel-title">Homepage</h2>
        <p class="panel-sub">Edit the main hero text</p>
        <div class="edit-card">
          <div class="card-title">✦ Hero Section</div>
          <div class="field-row">
            <div class="field-group"><label>Title (English)</label><input id="hero_en" value="Astrology, Healing & Yoga"></div>
            <div class="field-group"><label>Title (Spanish)</label><input id="hero_es" value="Astrología, Sanación & Yoga"></div>
          </div>
          <div class="field-row">
            <div class="field-group"><label>Subtitle (English)</label><textarea id="sub_en">Integrative sessions to understand yourself through the stars, heal your energy, and reconnect with your body.</textarea></div>
            <div class="field-group"><label>Subtitle (Spanish)</label><textarea id="sub_es">Sesiones integrativas para comprenderte a través de los astros, sanar tu energía y reconectar con tu cuerpo.</textarea></div>
          </div>
          <div class="save-row"><button class="save-btn" onclick="saved('hp')">Save</button><span class="save-ok" id="ok-hp">✓ Saved!</span></div>
        </div>
      </div>

      <!-- ABOUT -->
      <div class="panel" id="panel-about">
        <h2 class="panel-title">About Page</h2>
        <p class="panel-sub">Edit Isidora's tagline and bio</p>
        <div class="edit-card">
          <div class="card-title">✦ Hero Tagline</div>
          <div class="field-row">
            <div class="field-group"><label>Tagline (English)</label><input id="tag_en" value="Where the sky meets the body"></div>
            <div class="field-group"><label>Tagline (Spanish)</label><input id="tag_es" value="Donde el cielo se encuentra con el cuerpo"></div>
          </div>
          <div class="save-row"><button class="save-btn" onclick="saved('ab')">Save</button><span class="save-ok" id="ok-ab">✓ Saved!</span></div>
        </div>
      </div>

      <!-- SERVICES -->
      <div class="panel" id="panel-services">
        <h2 class="panel-title">Services & Prices</h2>
        <p class="panel-sub">Update session names, durations and prices</p>
        <div class="edit-card">
          <div class="card-title">✦ Sessions</div>
          <div id="services-list"></div>
          <button class="add-btn" onclick="addService()">+ Add New Service</button>
          <div class="save-row"><button class="save-btn" onclick="saved('sv')">Save Services</button><span class="save-ok" id="ok-sv">✓ Saved!</span></div>
        </div>
      </div>

      <!-- COSMIC -->
      <div class="panel" id="panel-cosmic">
        <h2 class="panel-title">Cosmic Calendar</h2>
        <p class="panel-sub">Add, edit or remove upcoming astrological events</p>
        <div class="edit-card">
          <div class="card-title">✦ Upcoming Events</div>
          <div id="events-list"></div>
          <button class="add-btn" onclick="addEvent()">+ Add New Event</button>
          <div class="save-row"><button class="save-btn" onclick="saved('co')">Save Events</button><span class="save-ok" id="ok-co">✓ Saved!</span></div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="panel" id="panel-faq">
        <h2 class="panel-title">FAQ</h2>
        <p class="panel-sub">Edit frequently asked questions</p>
        <div class="edit-card">
          <div class="card-title">✦ Questions</div>
          <div id="faq-list"></div>
          <button class="add-btn" onclick="addFaq()">+ Add Question</button>
          <div class="save-row"><button class="save-btn" onclick="saved('fq')">Save FAQ</button><span class="save-ok" id="ok-fq">✓ Saved!</span></div>
        </div>
      </div>

      <!-- PHOTOS -->
      <div class="panel" id="panel-photos">
        <h2 class="panel-title">Photos</h2>
        <p class="panel-sub">Click any photo to replace it — then Download Changes to publish</p>
        <div class="edit-card">
          <div class="card-title">✦ Site Photos</div>
          <div class="photo-grid">
            <div class="photo-slot"><img id="ph-hero" src="" onerror="this.style.display='none'"><div class="photo-lbl">Homepage Hero</div><input type="file" accept="image/*" onchange="previewPhoto(event,'ph-hero','hero')"></div>
            <div class="photo-slot"><img id="ph-snippet" src="" onerror="this.style.display='none'"><div class="photo-lbl">Homepage About</div><input type="file" accept="image/*" onchange="previewPhoto(event,'ph-snippet','snippet')"></div>
            <div class="photo-slot"><img id="ph-about-hero" src="" onerror="this.style.display='none'"><div class="photo-lbl">About Hero</div><input type="file" accept="image/*" onchange="previewPhoto(event,'ph-about-hero','about-hero')"></div>
            <div class="photo-slot"><img id="ph-story" src="" onerror="this.style.display='none'"><div class="photo-lbl">About Story</div><input type="file" accept="image/*" onchange="previewPhoto(event,'ph-story','story')"></div>
            <div class="photo-slot"><img id="ph-philosophy" src="" onerror="this.style.display='none'"><div class="photo-lbl">About Philosophy</div><input type="file" accept="image/*" onchange="previewPhoto(event,'ph-philosophy','philosophy')"></div>
          </div>
        </div>
      </div>

      <!-- SETTINGS -->
      <div class="panel" id="panel-settings">
        <h2 class="panel-title">Settings</h2>
        <p class="panel-sub">Booking links and social media</p>
        <div class="edit-card">
          <div class="card-title">✦ Booking</div>
          <div class="field-row full"><div class="field-group"><label>Encuadrado URL</label><input id="encuadrado" value="https://encuadrado.com/p/isidora-astroyoga"></div></div>
          <div class="field-row full"><div class="field-group"><label>Calendly URL</label><input id="calendly" value="https://calendly.com/isidora-astroyoga"></div></div>
        </div>
        <div class="edit-card">
          <div class="card-title">✦ Social</div>
          <div class="field-row">
            <div class="field-group"><label>Instagram</label><input id="instagram" value="https://www.instagram.com/_astroyoga_/"></div>
            <div class="field-group"><label>WhatsApp (with country code)</label><input id="whatsapp" placeholder="+56912345678"></div>
          </div>
          <div class="save-row"><button class="save-btn" onclick="saved('st')">Save Settings</button><span class="save-ok" id="ok-st">✓ Saved!</span></div>
        </div>
      </div>

    </main>
  </div>
</div>

<script>
// ── AUTH ──
const identity = window.netlifyIdentity;
identity.on('init', u => { if(u) enter(u); });
identity.on('login', u => { enter(u); identity.close(); });
identity.on('logout', () => { document.getElementById('dashboard').style.display='none'; document.getElementById('login-screen').style.display='flex'; });

function login() { identity.open('login'); }
function logout() { identity.logout(); }
function enter(user) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('user-email').textContent = user.email;
  renderAll();
}
identity.init();

// ── NAV ──
function show(name, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  btn.classList.add('active');
}

// ── DATA ──
const D = {
  services: [
    {en:'Astral Healing', es:'Sanación Astral', usd:'150', clp:'100.000', dur:'60 min'},
    {en:'Carta Astral', es:'Carta Astral', usd:'98', clp:'70.000', dur:'75 min'},
    {en:'Revolución Solar', es:'Revolución Solar', usd:'85', clp:'60.000', dur:'60 min'},
    {en:'Reiki a Distancia', es:'Reiki a Distancia', usd:'50', clp:'35.000', dur:'45 min'},
    {en:'Theta Healing', es:'Theta Healing', usd:'70', clp:'50.000', dur:'50 min'},
  ],
  events: [
    {day:'25',month:'Feb',year:'2026',icon:'♄',en:'Saturn in Aries — Ongoing',es:'Saturno en Aries — En Curso',guide_en:'Identity, discipline, long-term goals',guide_es:'Identidad, disciplina, metas a largo plazo'},
    {day:'13',month:'March',year:'2026',icon:'🌕',en:'Total Lunar Eclipse in Virgo',es:'Eclipse Lunar Total en Virgo',guide_en:'Release, completion, healing',guide_es:'Liberación, completud, sanación'},
    {day:'20',month:'March',year:'2026',icon:'☿',en:'Mercury Stations Direct',es:'Mercurio Estaciona Directo',guide_en:'Clarity returning, restart projects',guide_es:'Claridad que regresa, proyectos pausados'},
    {day:'29',month:'March',year:'2026',icon:'🌑',en:'Solar Eclipse in Aries',es:'Eclipse Solar en Aries',guide_en:'New intentions, identity, courage',guide_es:'Nuevas intenciones, identidad, coraje'},
    {day:'12',month:'June',year:'2026',icon:'♃',en:'Jupiter enters Cancer',es:'Júpiter entra en Cáncer',guide_en:'Home, family, emotional healing',guide_es:'Hogar, familia, sanación emocional'},
  ],
  faq: [
    {qe:'Do I need to know astrology?',qs:'¿Necesito saber astrología?',ae:'Not at all — sessions are for everyone.',as:'Para nada — las sesiones son para todos.'},
    {qe:'Are sessions online?',qs:'¿Las sesiones son online?',ae:'Yes, all sessions are via Zoom or Google Meet.',as:'Sí, todas las sesiones son por Zoom o Google Meet.'},
  ]
};

function renderAll() { renderServices(); renderEvents(); renderFaq(); }

// SERVICES
function renderServices() {
  const el = document.getElementById('services-list');
  el.innerHTML = D.services.map((s,i)=>`
    <div class="item-card">
      <div class="item-header"><span class="item-title">${s.en}</span><button class="del-btn" onclick="D.services.splice(${i},1);renderServices()">✕</button></div>
      <div class="field-row">
        <div class="field-group"><label>Name EN</label><input value="${s.en}" oninput="D.services[${i}].en=this.value"></div>
        <div class="field-group"><label>Name ES</label><input value="${s.es}" oninput="D.services[${i}].es=this.value"></div>
      </div>
      <div class="field-row three">
        <div class="field-group"><label>Price USD</label><input value="${s.usd}" oninput="D.services[${i}].usd=this.value"></div>
        <div class="field-group"><label>Price CLP</label><input value="${s.clp}" oninput="D.services[${i}].clp=this.value"></div>
        <div class="field-group"><label>Duration</label><input value="${s.dur}" oninput="D.services[${i}].dur=this.value"></div>
      </div>
    </div>`).join('');
}
function addService() { D.services.push({en:'New Session',es:'Nueva Sesión',usd:'',clp:'',dur:'60 min'}); renderServices(); }

// EVENTS
function renderEvents() {
  const el = document.getElementById('events-list');
  el.innerHTML = D.events.map((e,i)=>`
    <div class="item-card">
      <div class="item-header"><span class="item-title">${e.icon} ${e.en}</span><button class="del-btn" onclick="D.events.splice(${i},1);renderEvents()">✕</button></div>
      <div class="field-row three">
        <div class="field-group"><label>Day</label><input value="${e.day}" oninput="D.events[${i}].day=this.value"></div>
        <div class="field-group"><label>Month</label><input value="${e.month}" oninput="D.events[${i}].month=this.value"></div>
        <div class="field-group"><label>Year</label><input value="${e.year}" oninput="D.events[${i}].year=this.value"></div>
      </div>
      <div class="field-row">
        <div class="field-group"><label>Name EN</label><input value="${e.en}" oninput="D.events[${i}].en=this.value"></div>
        <div class="field-group"><label>Name ES</label><input value="${e.es}" oninput="D.events[${i}].es=this.value"></div>
      </div>
      <div class="field-row">
        <div class="field-group"><label>Guidance EN</label><input value="${e.guide_en}" oninput="D.events[${i}].guide_en=this.value"></div>
        <div class="field-group"><label>Guidance ES</label><input value="${e.guide_es}" oninput="D.events[${i}].guide_es=this.value"></div>
      </div>
    </div>`).join('');
}
function addEvent() { D.events.push({day:'',month:'',year:'2026',icon:'✦',en:'New Event',es:'Nuevo Evento',guide_en:'',guide_es:''}); renderEvents(); }

// FAQ
function renderFaq() {
  const el = document.getElementById('faq-list');
  el.innerHTML = D.faq.map((f,i)=>`
    <div class="item-card">
      <div class="item-header"><span class="item-title">${f.qe}</span><button class="del-btn" onclick="D.faq.splice(${i},1);renderFaq()">✕</button></div>
      <div class="field-row">
        <div class="field-group"><label>Question EN</label><input value="${f.qe}" oninput="D.faq[${i}].qe=this.value"></div>
        <div class="field-group"><label>Question ES</label><input value="${f.qs}" oninput="D.faq[${i}].qs=this.value"></div>
      </div>
      <div class="field-row">
        <div class="field-group"><label>Answer EN</label><textarea oninput="D.faq[${i}].ae=this.value">${f.ae}</textarea></div>
        <div class="field-group"><label>Answer ES</label><textarea oninput="D.faq[${i}].as=this.value">${f.as}</textarea></div>
      </div>
    </div>`).join('');
}
function addFaq() { D.faq.push({qe:'New Question',qs:'Nueva Pregunta',ae:'',as:''}); renderFaq(); }

// PHOTOS
function previewPhoto(e, id, slot) {
  const r = new FileReader();
  r.onload = ev => { const img = document.getElementById(id); img.src = ev.target.result; img.style.display='block'; };
  r.readAsDataURL(e.target.files[0]);
}

// SAVE STATUS
function saved(id) {
  const el = document.getElementById('ok-'+id);
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2500);
}

// EXPORT
function exportAll() {
  const cosmic = JSON.stringify({events: D.events.map(e=>({
    day:e.day, month:e.month, year:e.year, icon:e.icon,
    name_en:e.en, name_es:e.es,
    guidance_en:e.guide_en, guidance_es:e.guide_es
  }))}, null, 2);

  const settings = JSON.stringify({
    encuadrado_url: document.getElementById('encuadrado').value,
    calendly_url: document.getElementById('calendly').value,
    instagram_url: document.getElementById('instagram').value,
    whatsapp: document.getElementById('whatsapp').value,
  }, null, 2);

  dl('cosmic.json', cosmic);
  setTimeout(()=>dl('settings.json', settings), 400);

  alert('✓ 2 files downloaded!\n\nUpload them to the _data/ folder in your GitHub repository.\nThe site will update automatically within 30 seconds.');
}

function dl(name, content) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content],{type:'application/json'}));
  a.download = name;
  a.click();
}
</script>
</body>
</html>
