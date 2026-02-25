// Language toggle
function setLang(lang) {
  localStorage.setItem('lang', lang);
  // Toggle all data-lang elements
  document.querySelectorAll('[data-lang]').forEach(el => {
    const elLang = el.getAttribute('data-lang');
    el.style.display = (elLang === lang) ? '' : 'none';
  });
  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });
  const chatInput = document.getElementById('chat-input');
  if (chatInput) chatInput.placeholder = lang === 'es' ? 'Escribe tu mensaje...' : 'Type a message...';
}

// Restore saved language
(function() {
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
})();

// Mobile menu
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// Active nav link
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

// Chatbot
const SYSTEM_PROMPT = `You are a warm, friendly assistant for Isidora Castro's astrology and healing business AstroYoga.
Help clients learn about services, pricing, booking, and courses. Be concise and warm.

SERVICES:
- Astral Healing: 125 min, $100,000 CLP / 150 USD — integrative astrology + energy healing
- Carta Astral (Natal Chart): 60 min, $70,000 CLP / 98 USD
- Revolución Solar (Solar Return): 60 min, $60,000 CLP / ~85 USD
- Sesión Reiki a Distancia: 40 min, $35,000 CLP / 50 USD
- Theta Healing: 40 min, $50,000 CLP / 70 USD

All sessions ONLINE only. Book at: https://encuadrado.com/p/isidora-astroyoga
Instagram: https://www.instagram.com/_astroyoga_/
5.0 stars · 9 verified reviews · 10+ years experience
Courses coming soon. Free resources available on the website.

Match the user's language (Spanish or English). Keep responses brief and helpful.`;

let chatHistory = [];

function toggleChat() {
  const w = document.getElementById('chat-window');
  w.classList.toggle('open');
  if (w.classList.contains('open')) document.getElementById('chat-input').focus();
}

async function sendMsg() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMsg(text, 'user');
  chatHistory.push({ role: 'user', content: text });
  const typing = addMsg('...', 'bot typing');
  try {
    const API_KEY = window.ASTROYOGA_API_KEY || '';
    if (!API_KEY) {
      typing.remove();
      addMsg('Chat coming soon! For now, visit the booking page or DM on Instagram 🌿', 'bot');
      return;
    }
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 400, system: SYSTEM_PROMPT, messages: chatHistory })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Something went wrong, please try again!';
    typing.remove();
    addMsg(reply, 'bot');
    chatHistory.push({ role: 'assistant', content: reply });
  } catch(e) {
    typing.remove();
    addMsg('Hmm, try again or visit the booking page! 🌿', 'bot');
  }
}

function addMsg(text, type) {
  const msgs = document.getElementById('chat-messages');
  const el = document.createElement('div');
  el.className = 'msg ' + type;
  el.textContent = text;
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

// ============================================================
// 🔑 PASTE YOUR ANTHROPIC API KEY BELOW
// Get one at: https://console.anthropic.com
// ============================================================
window.ASTROYOGA_API_KEY = '';
