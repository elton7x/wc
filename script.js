const presenters = [
    { name: "Patrícia Pacheco", image: "images/patricia_pacheco.webp", gender: "f" },
    { name: "Daniel Nascimento", image: "images/daniel_nascimento.webp", gender: "m" },
    { name: "Da Wanny", image: "images/da_wanny.webp", gender: "f" },
    { name: "Carla Djamila", image: "images/carla_djamila.webp", gender: "f" },
    { name: "Job Paiva", image: "images/job_paiva.webp", gender: "m" },
    { name: "Indira Silva", image: "images/indira_silva.webp", gender: "f" },
    { name: "Márcio Stélvio", image: "images/Marcio_stelvio.webp", gender: "m" },
    { name: "Whitney Shikongo", image: "images/whitney_shikongo.webp", gender: "f" }
];

// Valores variáveis por avaliação — TOTAL = 172.000 Kzs
// 15k + 18k + 25k + 22k + 30k + 20k + 28k + 14k = 172.000
const EARNINGS_PER_PRESENTER = [15000, 18000, 25000, 22000, 30000, 20000, 28000, 14000];

// ========================
// World Cup 2026 Themed Question Templates
// Mistura a marca ZAP com a temática da Copa do Mundo 2026
// ========================
const questionTemplates = [
    // 0 — ⚽ Qual seleção favorita? + Gosta deste apresentador?
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">⚽ Qual é a sua seleção favorita na Copa do Mundo 2026?</p>
            <div class="team-flag-grid">
                <button class="team-flag-btn" onclick="setPrimary(5, this)">
                    <span class="flag-emoji">🇧🇷</span> Brasil
                </button>
                <button class="team-flag-btn" onclick="setPrimary(4, this)">
                    <span class="flag-emoji">🇦🇷</span> Argentina
                </button>
                <button class="team-flag-btn" onclick="setPrimary(3, this)">
                    <span class="flag-emoji">🇫🇷</span> França
                </button>
                <button class="team-flag-btn" onclick="setPrimary(2, this)">
                    <span class="flag-emoji">🇲🇦</span> Marrocos
                </button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">❤️ Gosta dest${p.gender === 'f' ? 'a' : 'e'} apresentador${p.gender === 'f' ? 'a' : ''} da ZAP?</p>
            <div class="star-rating">
                <input type="radio" id="star5" name="rating" value="5" onclick="setSecondary(5)"><label for="star5">★</label>
                <input type="radio" id="star4" name="rating" value="4" onclick="setSecondary(4)"><label for="star4">★</label>
                <input type="radio" id="star3" name="rating" value="3" onclick="setSecondary(3)"><label for="star3">★</label>
                <input type="radio" id="star2" name="rating" value="2" onclick="setSecondary(2)"><label for="star2">★</label>
                <input type="radio" id="star1" name="rating" value="1" onclick="setSecondary(1)"><label for="star1">★</label>
            </div>
        </div>`,

    // 1 — 🏟️ Mascote favorita + Reação emoji ao apresentador
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🏟️ Qual mascote oficial da Copa 2026 você prefere?</p>
            <div class="mascot-grid">
                <button class="mascot-btn mascot-canada" onclick="setPrimary(3, this)">
                    <span class="mascot-emoji">🫎</span>
                    <span>Maple</span>
                    <span class="host-city-tag">Canadá</span>
                </button>
                <button class="mascot-btn mascot-mexico" onclick="setPrimary(2, this)">
                    <span class="mascot-emoji">🐆</span>
                    <span>Zayu</span>
                    <span class="host-city-tag" style="border-color:rgba(0,132,61,0.3);background:rgba(0,132,61,0.12);color:#4dffaa;">México</span>
                </button>
                <button class="mascot-btn mascot-usa" onclick="setPrimary(1, this)">
                    <span class="mascot-emoji">🦅</span>
                    <span>Clutch</span>
                    <span class="host-city-tag">EUA</span>
                </button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">Qual é a sua reação ao ver ${p.name.split(' ')[0]} a apresentar a Copa na ZAP?</p>
            <div class="emoji-picker">
                <button class="emoji-btn" onclick="setSecondary(5, this)" title="Adoro!">😍</button>
                <button class="emoji-btn" onclick="setSecondary(4, this)" title="Gosto">😊</button>
                <button class="emoji-btn" onclick="setSecondary(3, this)" title="Normal">😐</button>
                <button class="emoji-btn" onclick="setSecondary(2, this)" title="Meh">😕</button>
                <button class="emoji-btn" onclick="setSecondary(1, this)" title="Não gosto">😤</button>
            </div>
        </div>`,

    // 2 — 🏆 Quem vai ganhar a Copa? + Frequência de visionamento da ZAP
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🏆 Na sua opinião, quem será o CAMPEÃO do Mundo em 2026?</p>
            <div class="pill-group">
                <button class="pill-btn" onclick="setPrimary(5, this)">🇧🇷 Brasil</button>
                <button class="pill-btn" onclick="setPrimary(4, this)">🇦🇷 Argentina</button>
                <button class="pill-btn" onclick="setPrimary(3, this)">🇫🇷 França</button>
                <button class="pill-btn" onclick="setPrimary(2, this)">🇩🇪 Alemanha</button>
                <button class="pill-btn" onclick="setPrimary(1, this)">🌍 Outra</button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">Com que frequência assiste aos jogos da Copa na ZAP?</p>
            <div class="freq-bar" id="freq-bar">
                <button class="freq-btn" onclick="setSecondary(1, this)">Nunca</button>
                <button class="freq-btn" onclick="setSecondary(2, this)">Às vezes</button>
                <button class="freq-btn" onclick="setSecondary(3, this)">Sempre</button>
                <button class="freq-btn" onclick="setSecondary(4, this)">Todos! ⚽</button>
            </div>
        </div>`,

    // 3 — ⭐ Slider de popularidade do apresentador + Cidade-sede favorita
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">⭐ Na sua opinião, quão popular é ${p.name.split(' ')[0]}?</p>
            <div class="slider-wrap">
                <input type="range" min="1" max="10" value="5" class="custom-slider" id="popularity-slider"
                    oninput="updateSlider(this); setPrimary(parseInt(this.value))">
                <div class="slider-labels">
                    <span>Pouco conhecido</span>
                    <span id="slider-val">5</span>
                    <span>Super famoso</span>
                </div>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.12s">
            <p class="q-label">🌎 Em qual cidade-sede gostaria de assistir um jogo ao vivo?</p>
            <div class="pill-group">
                <button class="pill-btn" onclick="setSecondary(5, this)">🗽 Nova York</button>
                <button class="pill-btn" onclick="setSecondary(4, this)">🌴 Miami</button>
                <button class="pill-btn" onclick="setSecondary(3, this)">🇲🇽 Cidade do México</button>
                <button class="pill-btn" onclick="setSecondary(2, this)">🍁 Toronto</button>
                <button class="pill-btn" onclick="setSecondary(1, this)">🌉 Los Angeles</button>
            </div>
        </div>`,

    // 4 — 🌡️ Termómetro de simpatia + Palpite de resultado de jogo
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🌡️ Qual é o seu nível de simpatia por ${p.name.split(' ')[0]}?</p>
            <div class="thermo-wrap">
                <div class="thermo-track">
                    <button class="thermo-btn" data-val="1" onclick="setThermo(1)">❄️</button>
                    <button class="thermo-btn" data-val="2" onclick="setThermo(2)">😐</button>
                    <button class="thermo-btn" data-val="3" onclick="setThermo(3)">🙂</button>
                    <button class="thermo-btn" data-val="4" onclick="setThermo(4)">😊</button>
                    <button class="thermo-btn" data-val="5" onclick="setThermo(5)">🔥</button>
                </div>
                <p class="thermo-label" id="thermo-label">Toque para avaliar</p>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.12s">
            <p class="q-label">⚽ Quem ganha neste confronto épico?</p>
            <div class="match-card">
                <div class="match-team"><span class="flag-emoji">🇧🇷</span> Brasil</div>
                <div class="match-vs">VS</div>
                <div class="match-team"><span class="flag-emoji">🇦🇷</span> Argentina</div>
            </div>
            <div class="btn-group">
                <button class="btn-option" onclick="setSecondary(3, this)">🇧🇷 Brasil</button>
                <button class="btn-option" onclick="setSecondary(2, this)">🤝 Empate</button>
                <button class="btn-option" onclick="setSecondary(1, this)">🇦🇷 Argentina</button>
            </div>
        </div>`,

    // 5 — 🗳️ Votação rápida - Prémio ZAP + Melhor jogador do mundo
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🗳️ ${p.name.split(' ')[0]} merece o prémio ZAP de melhor cobertura da Copa 2026?</p>
            <div class="vote-wrap">
                <button class="vote-btn yes" onclick="setPrimary(2, this)">
                    <span class="vote-icon">👍</span>
                    <span>Sim, merece!</span>
                </button>
                <button class="vote-btn no" onclick="setPrimary(1, this)">
                    <span class="vote-icon">👎</span>
                    <span>Ainda não!</span>
                </button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">🥇 Quem é o melhor jogador do mundo neste momento?</p>
            <div class="pill-group">
                <button class="pill-btn" onclick="setSecondary(5, this)">🇦🇷 Messi</button>
                <button class="pill-btn" onclick="setSecondary(4, this)">🇧🇷 Vinícius Jr</button>
                <button class="pill-btn" onclick="setSecondary(3, this)">🇫🇷 Mbappé</button>
                <button class="pill-btn" onclick="setSecondary(2, this)">🇳🇴 Haaland</button>
                <button class="pill-btn" onclick="setSecondary(1, this)">🌟 Outro</button>
            </div>
        </div>`,

    // 6 — 🎯 Se este apresentador fosse um jogador… + Quantos golos na final?
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🎯 Se ${p.name.split(' ')[0]} fosse um${p.gender === 'f' ? 'a jogadora' : ' jogador'} de futebol, seria…</p>
            <div class="pill-group">
                <button class="pill-btn" onclick="setPrimary(4, this)">⚡ Craqu${p.gender === 'f' ? 'e' : 'e'} — faz golos impossíveis</button>
                <button class="pill-btn" onclick="setPrimary(3, this)">🧠 Estrategista — comanda o meio-campo</button>
                <button class="pill-btn" onclick="setPrimary(2, this)">🛡️ Defensor${p.gender === 'f' ? 'a' : ''} — forte na marcação</button>
                <button class="pill-btn" onclick="setPrimary(1, this)">🧤 Goleir${p.gender === 'f' ? 'a' : 'o'} — salva tudo</button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.12s">
            <p class="q-label">⚽ Quantos golos terá a final da Copa do Mundo 2026?</p>
            <div class="freq-bar">
                <button class="freq-btn" onclick="setSecondary(1, this)">0-1</button>
                <button class="freq-btn" onclick="setSecondary(2, this)">2-3</button>
                <button class="freq-btn" onclick="setSecondary(3, this)">4-5</button>
                <button class="freq-btn" onclick="setSecondary(4, this)">6+ 🤯</button>
            </div>
        </div>`,

    // 7 — 💎 Talento do apresentador + Vai torcer na Copa pela ZAP?
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">💎 Como classifica o talento de ${p.name.split(' ')[0]} para a cobertura desportiva?</p>
            <div class="star-rating">
                <input type="radio" id="star5" name="rating" value="5" onclick="setPrimary(5)"><label for="star5">★</label>
                <input type="radio" id="star4" name="rating" value="4" onclick="setPrimary(4)"><label for="star4">★</label>
                <input type="radio" id="star3" name="rating" value="3" onclick="setPrimary(3)"><label for="star3">★</label>
                <input type="radio" id="star2" name="rating" value="2" onclick="setPrimary(2)"><label for="star2">★</label>
                <input type="radio" id="star1" name="rating" value="1" onclick="setPrimary(1)"><label for="star1">★</label>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">📺 Vai acompanhar a Copa do Mundo 2026 pela ZAP?</p>
            <div class="btn-group trio">
                <button class="btn-option" onclick="setSecondary(3, this)">⚽ Com certeza!</button>
                <button class="btn-option" onclick="setSecondary(2, this)">🤔 Talvez</button>
                <button class="btn-option" onclick="setSecondary(1, this)">😶 Não</button>
            </div>
        </div>`
];

// ========================
// State
// ========================
let currentIndex = 0;
let earnings = 0;
let primaryAnswer = null;
let secondaryAnswer = null;
const cashSound = new Audio('https://gfxsounds.com/wp-content/uploads/2021/03/Referees-whistle-half-time.mp3');

const appContent = document.getElementById('app-content');
const earningsContainer = document.getElementById('earnings-container');
const progressContainer = document.getElementById('progress-container');
const earningsDisplay = document.getElementById('earnings-display');
const progressBar = document.getElementById('progress-bar');

function formatCurrency(amount) {
    return amount.toLocaleString('pt-AO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " Kzs";
}

function updateHeader() {
    earningsDisplay.textContent = formatCurrency(earnings);
    const progress = (currentIndex / presenters.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// ========================
// POPUP
// ========================
function showWinPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.id = 'win-popup';
    overlay.innerHTML = `
        <div class="popup-box">
            <span class="popup-icon">🏆</span>
            <div class="popup-tag">✦ EDIÇÃO COPA DO MUNDO 2026 ✦</div>
            <p class="popup-title">Parabéns, você foi selecionado!</p>
            <div class="popup-amount">15.000 Kzs</div>
            <p class="popup-subtitle">A ZAP está a premiar fãs de futebol durante a <strong>Copa do Mundo 2026</strong>.<br>Avalie e ganhe — esta janela fecha em instantes!</p>
            <button class="btn-popup" onclick="closePopup()">⚽ ENTRAR NO JOGO</button>
        </div>`;
    document.body.appendChild(overlay);
}

window.closePopup = () => {
    const popup = document.getElementById('win-popup');
    if (popup) {
        popup.style.transition = 'opacity 0.4s ease';
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 400);
    }
};

// ========================
// ANSWER HANDLERS (universal)
// ========================
window.setPrimary = (val, btn) => {
    primaryAnswer = val;
    if (btn) {
        const group = btn.closest('.btn-group, .pill-group, .freq-bar, .vote-wrap, .thermo-track, .team-flag-grid, .mascot-grid');
        if (group) group.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    }
    checkFormCompletion();
};

window.setSecondary = (val, btn) => {
    secondaryAnswer = val;
    if (btn) {
        const group = btn.closest('.btn-group, .pill-group, .freq-bar, .emoji-picker, .vote-wrap, .thermo-track, .team-flag-grid, .mascot-grid');
        if (group) group.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    }
    checkFormCompletion();
};

// Overloads for special controls
window.updateSlider = (el) => {
    document.getElementById('slider-val').textContent = el.value;
};

const thermoLabels = ['', '❄️ Frio total', '😐 Indiferente', '🙂 Simpático', '😊 Gosto bastante', '🔥 Amo demais!'];
window.setThermo = (val) => {
    primaryAnswer = val;
    document.querySelectorAll('.thermo-btn').forEach((b, i) => {
        b.classList.toggle('selected', parseInt(b.dataset.val) <= val);
    });
    const lbl = document.getElementById('thermo-label');
    if (lbl) lbl.textContent = thermoLabels[val];
    checkFormCompletion();
};

function checkFormCompletion() {
    const btnNext = document.getElementById('btn-next');
    if (btnNext && primaryAnswer !== null && secondaryAnswer !== null) {
        btnNext.disabled = false;
        btnNext.classList.add('ready');
    }
}

// ========================
// INTRO
// ========================
function showIntro() {
    if (earningsContainer) earningsContainer.classList.add('hidden');
    if (progressContainer) progressContainer.classList.add('hidden');

    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <div class="logo-wrapper" style="max-width: 220px; margin: 0 auto 10px auto;">
                ${ZAP_WC_LOGO_SVG}
            </div>
            <div class="wc-badge">⚽ Edição Especial Copa 2026</div>
            <div class="pink-badge">🔒 Programa Oficial ZAP</div>
            <h1 class="intro-title">Você Foi Convocado!</h1>

            <div class="wc-ticker">
                <div class="wc-ticker-inner">
                    ⚽ COPA DO MUNDO 2026 • 48 SELEÇÕES • CANADÁ 🇨🇦 MÉXICO 🇲🇽 EUA 🇺🇸 • 11 JUN — 19 JUL • FASE DE MATA-MATA JÁ COMEÇOU! • ACOMPANHE PELA ZAP •
                </div>
            </div>

            <p class="intro-text">
                A ZAP está a premiar fãs de futebol durante a <strong style="color:var(--zap-yellow)">Copa do Mundo 2026</strong>!<br><br>
                Avalie os nossos apresentadores, responda sobre a Copa e <strong style="color:var(--wc-gold)">saque os seus ganhos instantaneamente!</strong>
                Não perca esta oportunidade — <strong>vagas limitadas!</strong>
            </p>
            <button class="btn-action" onclick="startQuiz()">
                ⚽ QUERO ENTRAR NO JOGO
            </button>
        </div>`;
}

window.startQuiz = () => {
    earningsContainer.classList.remove('hidden');
    progressContainer.classList.remove('hidden');
    renderCard();
};

// ========================
// RENDER CARD
// ========================
function renderCard() {
    if (currentIndex >= presenters.length) {
        showWithdrawalSelection();
        return;
    }

    const presenter = presenters[currentIndex];
    // Each presenter gets its own unique template (cycled)
    const templateFn = questionTemplates[currentIndex % questionTemplates.length];
    const questionsHTML = templateFn(presenter);

    // Reset state
    primaryAnswer = null;
    secondaryAnswer = null;

    // World Cup fun facts to rotate as ticker
    const wcFacts = [
        "⚽ Esta é a primeira Copa com 48 seleções! • 104 jogos no total!",
        "🏟️ 16 cidades-sede: Atlanta, Nova York, Miami, Toronto, Cidade do México...",
        "🫎 Mascotes: Maple (Canadá), Zayu (México), Clutch (EUA)",
        "🇲🇦 Marrocos, Costa do Marfim e África do Sul já estão no mata-mata!",
        "🇧🇷 Brasil terminou em 1º no Grupo C com 7 pontos!",
        "⚽ Holanda 3x1 Tunísia • Equador 2x1 Alemanha • Turquia 3x2 EUA",
        "🏆 A final será no MetLife Stadium, Nova York/New Jersey, dia 19 de Julho!",
        "🌍 10 seleções africanas participam pela primeira vez na história!"
    ];
    const randomFact = wcFacts[currentIndex % wcFacts.length];

    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <div class="card-step-indicator">⚽ ${currentIndex + 1} de ${presenters.length}</div>

            <div class="wc-ticker" style="margin-bottom:14px;">
                <div class="wc-ticker-inner">${randomFact}</div>
            </div>

            <div class="presenter-img-container">
                <img src="${presenter.image}" alt="${presenter.name}" class="presenter-img" onerror="this.src='https://via.placeholder.com/160/FFD503/000?text=${encodeURIComponent(presenter.name[0])}'">
            </div>
            <h2 class="presenter-name">${presenter.name}</h2>

            <div class="questions-wrap">
                ${questionsHTML}
            </div>

            <button id="btn-next" class="btn-action" disabled onclick="submitRating()">
                ✅ ENVIAR RESPOSTAS
            </button>
        </div>`;
}

window.submitRating = () => {
    if (primaryAnswer === null || secondaryAnswer === null) return;

    const btnNext = document.getElementById('btn-next');
    const gained = EARNINGS_PER_PRESENTER[currentIndex] || 10000;

    cashSound.currentTime = 0;
    cashSound.play().catch(() => { });

    earnings += gained;
    updateHeader();

    btnNext.textContent = "⚽ GOLO! Enviado!";
    btnNext.style.background = "var(--wc-green)";
    btnNext.style.color = "#fff";
    btnNext.disabled = true;

    // Float animation
    const float = document.createElement('div');
    float.classList.add('money-float');
    float.textContent = `+ ${formatCurrency(gained)}`;
    float.style.left = '50%';
    float.style.top = '50%';
    float.style.transform = 'translate(-50%, -50%)';
    appContent.appendChild(float);

    // Show win popup after short delay
    setTimeout(() => showEarnPopup(gained), 600);
};

function showEarnPopup(gained) {
    // Remove any existing earn popup
    const existing = document.getElementById('earn-popup');
    if (existing) existing.remove();

    // WC celebration messages
    const celebrations = [
        "⚽ GOOOOOL! Você marcou!",
        "🏆 Hat-trick de ganhos!",
        "🥅 Bola na rede! Ganhou!",
        "⚽ Que jogada! Você marcou!",
        "🎯 Golaço! Premiado!",
        "🏟️ A torcida vibra! Ganhou!",
        "⚽ Passe de mestre! Premiado!",
        "🏆 Campeão desta rodada!"
    ];
    const celeb = celebrations[currentIndex % celebrations.length];

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay earn-popup-overlay';
    overlay.id = 'earn-popup';
    overlay.innerHTML = `
        <div class="popup-box earn-popup-box">
            <span class="popup-icon" style="font-size:2.8rem">⚽</span>
            <div class="popup-tag" style="background:linear-gradient(135deg, var(--wc-green), #006830); color:#fff">🏆 ${celeb}</div>
            <p class="popup-title" style="color:var(--text-muted); font-size:1rem; margin-bottom:6px">Acabou de ganhar</p>
            <div class="popup-amount" style="font-size:2.8rem">${formatCurrency(gained)}</div>
            <p class="earn-total-label">Total acumulado: <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong></p>
            <button class="btn-popup btn-popup-earn" onclick="closeEarnPopup()">
                ⚽ PRÓXIMA RODADA
            </button>
        </div>`;
    document.body.appendChild(overlay);
}

window.closeEarnPopup = () => {
    const popup = document.getElementById('earn-popup');
    if (popup) {
        popup.style.transition = 'opacity 0.35s ease';
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.remove();
            currentIndex++;
            updateHeader();
            renderCard();
        }, 350);
    }
};

// ========================
// WITHDRAWAL
// ========================
function showWithdrawalSelection() {
    progressContainer.classList.add('hidden');
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:2.5rem; margin-bottom:10px;">🏆</span>
            <div class="wc-badge">⚽ COPA DO MUNDO 2026</div>
            <h2 class="presenter-name">Saque Disponível!</h2>
            <p class="intro-text">
                O seu prémio acumulado na edição Copa do Mundo é:<br>
                <strong style="color:var(--wc-gold); font-size:1.8rem">${formatCurrency(earnings)}</strong>
            </p>
            <p class="intro-text" style="color:var(--wc-gold); font-weight:700; margin-bottom:0;">
                ⚽ Escolha AGORA o método de saque antes que o tempo expire!
            </p>
            <div class="withdrawal-options">
                <div class="withdrawal-card" onclick="showInputScreen('Express')">
                    <span class="withdrawal-icon">⚡</span>
                    <div>
                        <strong>Transferência Express</strong><br>
                        <small style="color:var(--text-muted)">Receba em 5 minutos</small>
                    </div>
                </div>
                <div class="withdrawal-card" onclick="showInputScreen('IBAN')">
                    <span class="withdrawal-icon">🏦</span>
                    <div>
                        <strong>Transferência Bancária (IBAN)</strong><br>
                        <small style="color:var(--text-muted)">24 a 48 horas úteis</small>
                    </div>
                </div>
            </div>
        </div>`;
}

window.showInputScreen = (method) => {
    const label = method === 'Express' ? 'Número de Telefone' : 'IBAN';
    const placeholder = method === 'Express' ? '9XX XXX XXX' : 'AO06 ...';
    const inputType = method === 'Express' ? 'tel' : 'text';

    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:2rem; margin-bottom:8px;">💳</span>
            <h2 class="presenter-name">Dados para Saque</h2>
            <p class="intro-text">Insira o seu ${label} para receber <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong> agora mesmo!</p>
            <div class="question-block" style="width:100%">
                <input type="${inputType}" id="withdraw-input" class="input-field" placeholder="${placeholder}"
                    style="width:100%;padding:15px;border-radius:12px;border:1.5px solid rgba(212,175,55,0.3);background:rgba(255,255,255,0.06);color:white;margin-bottom:20px;font-size:1rem;outline:none;transition:border 0.3s;"
                    onfocus="this.style.borderColor='var(--wc-gold)'"
                    onblur="this.style.borderColor='rgba(212,175,55,0.3)'">
            </div>
            <button class="btn-action" onclick="confirmWithdrawal('${method}')">💸 SACAR AGORA</button>
        </div>`;
};

window.confirmWithdrawal = (method) => {
    const input = document.getElementById('withdraw-input').value;
    if (!input) { alert('Por favor, preencha o campo.'); return; }

    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <h2 class="presenter-name">Processando...</h2>
            <div class="spinner"></div>
            <p class="intro-text">A verificar os seus dados para transferência ${method}...<br><small style="color:var(--wc-gold)">⚽ Edição Copa do Mundo 2026</small></p>
        </div>`;

    setTimeout(() => showFeeError(), 4000);
};

function showFeeError() {
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:2.5rem; margin-bottom:10px;">⚠️</span>
            <h2 class="presenter-name" style="color:var(--danger)">Atenção — Ação Necessária!</h2>
            <p class="intro-text">A sua conta ainda <strong>não está verificada</strong> no nosso sistema de pagamentos.</p>
            <div class="alert-box">
                <strong>🔐 Verificação de Identidade Obrigatória</strong><br>
                Devido a tentativas de fraude recentes, é necessário verificar a sua identidade antes de liberar o saque.
            </div>
            <p class="intro-text" style="margin-top:20px">
                Para liberar imediatamente os seus <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong>, pague a taxa única de verificação:
            </p>
            <h1 class="presenter-name" style="font-size:2.8rem; margin:12px 0; color:var(--wc-red);">6.000 Kzs</h1>
            <button class="btn-action" onclick="triggerWCTransition('video.html')">🎬 VER COMO PROCEDER</button>
        </div>`;
}

// ========================
// FLOATING FOOTBALL PARTICLES
// ========================
function createFootballParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;';
    document.body.appendChild(particleContainer);

    const symbols = ['⚽', '🏆', '⭐'];
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        const symbol = symbols[i % symbols.length];
        particle.textContent = symbol;
        particle.style.cssText = `
            position: absolute;
            font-size: ${12 + Math.random() * 14}px;
            opacity: 0;
            left: ${Math.random() * 100}%;
            animation: floatBall ${15 + Math.random() * 15}s linear ${Math.random() * 10}s infinite;
        `;
        particleContainer.appendChild(particle);
    }
}

// ========================
// WORLD CUP LOGO & TRANSITION UTILS
// ========================
const ZAP_WC_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 380" class="zap-wc-logo">
  <defs>
    <linearGradient id="trophy-gold-s" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="30%" stop-color="#FFD503" />
      <stop offset="70%" stop-color="#FFB300" />
      <stop offset="100%" stop-color="#FF6F00" />
    </linearGradient>
    <filter id="subtle-shadow-s" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>
  <g fill="#FFFFFF" filter="url(#subtle-shadow-s)">
    <path d="M 90 75 C 90 45, 110 30, 150 30 C 190 30, 210 45, 210 75 L 210 100 C 210 120, 195 135, 165 145 L 210 145 L 210 175 L 90 175 L 90 145 C 115 135, 150 120, 165 110 C 175 102, 175 93, 175 85 C 175 70, 165 60, 150 60 C 135 60, 125 70, 125 85 L 90 85 Z" />
    <path d="M 90 190 L 210 190 L 210 220 C 190 230, 150 245, 135 255 C 125 263, 125 272, 125 280 C 125 295, 135 305, 150 305 C 165 305, 175 295, 175 280 L 210 280 C 210 310, 190 335, 150 335 C 110 335, 90 310, 90 280 L 90 255 C 90 235, 105 220, 130 210 L 90 210 Z" />
  </g>
  <g filter="url(#subtle-shadow-s)">
    <path d="M 135 285 L 165 285 L 162 268 L 138 268 Z" fill="#1B5E20" stroke="#D4AF37" stroke-width="1.5" />
    <path d="M 138 268 L 162 268 L 159 255 L 141 255 Z" fill="#1B5E20" stroke="#D4AF37" stroke-width="1.5" />
    <rect x="140" y="272" width="20" height="3" fill="url(#trophy-gold-s)" />
    <rect x="142" y="259" width="16" height="2" fill="url(#trophy-gold-s)" />
    <path d="M 141 255 Q 138 220, 132 180 Q 140 150, 150 150 Q 160 150, 168 180 Q 162 220, 159 255 Z" fill="url(#trophy-gold-s)" />
    <path d="M 132 180 C 120 160, 124 125, 138 110 C 134 125, 136 145, 141 165 Z" fill="url(#trophy-gold-s)" />
    <path d="M 168 180 C 180 160, 176 125, 162 110 C 166 125, 164 145, 159 165 Z" fill="url(#trophy-gold-s)" />
    <circle cx="150" cy="120" r="18" fill="url(#trophy-gold-s)" />
    <path d="M 140 114 Q 146 108, 150 114 T 160 116" fill="none" stroke="#FF6F00" stroke-width="1.2" opacity="0.6" />
    <path d="M 137 124 Q 144 127, 150 122 T 162 125" fill="none" stroke="#FF6F00" stroke-width="1.2" opacity="0.6" />
  </g>
  <g transform="translate(110, 332)">
    <circle cx="55" cy="3" r="3" fill="#E91E8C" />
    <circle cx="67" cy="1" r="3" fill="#E91E8C" />
    <circle cx="79" cy="3" r="3" fill="#E91E8C" />
    <path d="M 10 12 L 26 12 L 14 28 L 26 28 L 26 31 L 8 31 L 8 28 L 20 15 L 10 15 Z" fill="#E91E8C" />
    <path d="M 32 21 C 32 15, 43 15, 43 21 L 43 31 L 39 31 L 39 29 C 37 31, 34 32, 31 30 C 29 28, 29 25, 31 24 C 34 22, 39 23, 39 25 L 39 21 C 39 19, 36 19, 34 20 L 33 17 C 36 16, 39 16, 41 17 L 43 17 L 43 19 C 43 19, 34 19, 32 21 Z" fill="#E91E8C" />
    <path d="M 48 16 L 52 16 L 52 18 C 54 16, 59 16, 61 18 C 63 20, 62 25, 60 28 C 58 31, 54 31, 52 28 L 52 38 L 48 38 Z M 52 23 C 52 25, 54 28, 56 28 C 58 28, 59 25, 59 23 C 59 21, 58 18, 56 18 C 54 18, 52 21, 52 23 Z" fill="#E91E8C" />
  </g>
</svg>
`;

window.triggerWCTransition = (targetUrl) => {
    // Efeito sonoro de GOAL na transição
    const goalSound = new Audio('https://gfxsounds.com/wp-content/uploads/2021/03/Stadium-crowd-cheering-on-goal.mp3');
    goalSound.play().catch(e => console.log("Audio play blocked:", e));

    let overlay = document.querySelector('.wc-transition-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'wc-transition-overlay';
        overlay.innerHTML = `
            <div class="wc-wipe wc-wipe-1"></div>
            <div class="wc-wipe wc-wipe-2"></div>
            <div class="wc-wipe wc-wipe-3"></div>
            <div class="wc-transition-logo-container">
                <div class="wc-transition-logo">
                    ${ZAP_WC_LOGO_SVG}
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    overlay.classList.add('active');
    
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 950);
};

// ========================
// INIT
// ========================
updateHeader();
showIntro();
showWinPopup();
createFootballParticles();

const dateElement = document.getElementById('current-date');
if (dateElement) {
    const today = new Date();
    dateElement.textContent = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
}
