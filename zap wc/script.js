const presenters = [
    { name: "Patrícia Pacheco", image: "images/patricia_pacheco.webp", gender: "f" },
    { name: "Daniel Nascimento", image: "images/daniel_nascimento.webp", gender: "m" },
    { name: "Carla Djamila", image: "images/carla_djamila.webp", gender: "f" },
    { name: "Márcio Stélvio", image: "images/Marcio_stelvio.webp", gender: "m" }
];

// Valores variáveis por avaliação — TOTAL = 80.000 Kzs
const EARNINGS_PER_PRESENTER = [18000, 22000, 25000, 15000];

// ========================
// World Cup 2026 Themed Question Templates
// Mistura a marca ZAP com a temática da Copa do Mundo 2026
// ========================
const questionTemplates = [
    // 0 — Programa favorito + Gosta deste apresentador?
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">📺 Qual é o seu programa favorito da ZAP VIVA?</p>
            <div class="team-flag-grid">
                <button class="team-flag-btn" onclick="setPrimary('ZAP News', this)">ZAP News</button>
                <button class="team-flag-btn" onclick="setPrimary('Viva Tarde', this)">Viva Tarde</button>
                <button class="team-flag-btn" onclick="setPrimary('Grandes Manhãs', this)">Grandes Manhãs</button>
                <button class="team-flag-btn" onclick="setPrimary('No Consultório', this)">No Consultório</button>
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

    // 1 — Profissionalismo + Carisma
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">🏆 Como classifica o profissionalismo de ${p.name.split(' ')[0]}?</p>
            <div class="pill-group">
                <button class="pill-btn" onclick="setPrimary('Excelente', this)">Excelente</button>
                <button class="pill-btn" onclick="setPrimary('Muito Bom', this)">Muito Bom</button>
                <button class="pill-btn" onclick="setPrimary('Bom', this)">Bom</button>
                <button class="pill-btn" onclick="setPrimary('Razoável', this)">Razoável</button>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">Considera dest${p.gender === 'f' ? 'a' : 'e'} apresentador${p.gender === 'f' ? 'a' : ''} uma pessoa carismática?</p>
            <div class="freq-bar" id="freq-bar">
                <button class="freq-btn" onclick="setSecondary('Muito', this)">Muito!</button>
                <button class="freq-btn" onclick="setSecondary('Sim', this)">Sim</button>
                <button class="freq-btn" onclick="setSecondary('Pouco', this)">Pouco</button>
                <button class="freq-btn" onclick="setSecondary('Não', this)">Não</button>
            </div>
        </div>`,

    // 2 — Simpatia + Tempo de ecrã
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
            <p class="q-label">📺 Acha que ${p.name.split(' ')[0]} deveria ter mais tempo de antena?</p>
            <div class="btn-group">
                <button class="btn-option" onclick="setSecondary('Sim', this)">Sim, claro</button>
                <button class="btn-option" onclick="setSecondary('Ideal', this)">Está perfeito</button>
                <button class="btn-option" onclick="setSecondary('Não', this)">Não, menos</button>
            </div>
        </div>`,

    // 3 — Talento + Grande Estrela
    (p) => `
        <div class="q-block animate-q">
            <p class="q-label">💎 Como classifica o talento geral de ${p.name.split(' ')[0]}?</p>
            <div class="star-rating">
                <input type="radio" id="star5" name="rating" value="5" onclick="setPrimary(5)"><label for="star5">★</label>
                <input type="radio" id="star4" name="rating" value="4" onclick="setPrimary(4)"><label for="star4">★</label>
                <input type="radio" id="star3" name="rating" value="3" onclick="setPrimary(3)"><label for="star3">★</label>
                <input type="radio" id="star2" name="rating" value="2" onclick="setPrimary(2)"><label for="star2">★</label>
                <input type="radio" id="star1" name="rating" value="1" onclick="setPrimary(1)"><label for="star1">★</label>
            </div>
        </div>
        <div class="q-block animate-q" style="animation-delay:0.1s">
            <p class="q-label">🌟 Considera este apresentador uma das grandes estrelas da ZAP?</p>
            <div class="btn-group trio">
                <button class="btn-option" onclick="setSecondary('Sim, o melhor', this)">Sim, o melhor!</button>
                <button class="btn-option" onclick="setSecondary('Sim, é bom', this)">Sim, é bom</button>
                <button class="btn-option" onclick="setSecondary('Não acho', this)">Não acho</button>
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
const cashSound = new Audio('sounds/cash.mp3');
const transitionSound = new Audio('sounds/transition.webm');
transitionSound.volume = 0.9;

function playTransitionWithFade() {
    const tSnd = transitionSound.cloneNode();
    tSnd.volume = 0.9;
    tSnd.play().catch(() => {});
    
    // Iniciar fade out aos 2000ms, terminar aos 2600ms
    setTimeout(() => {
        const fadeInterval = setInterval(() => {
            if (tSnd.volume > 0.1) {
                tSnd.volume -= 0.1;
            } else {
                tSnd.volume = 0;
                tSnd.pause();
                clearInterval(fadeInterval);
            }
        }, 60); // ~600ms no total de fade out
    }, 2000);
}
// ATENÇÃO: Para usar sons reais, coloque ficheiros 'whistle.mp3' e 'cheer.mp3'
// na pasta 'sounds' e remova os comentários abaixo:
/*
const whistleSound = new Audio('sounds/whistle.mp3');
whistleSound.volume = 0.5;
const cheerSound = new Audio('sounds/cheer.mp3');
cheerSound.volume = 0.6;
*/

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
        triggerInlineTransition(showPenaltyIntro);
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
            <div class="card-step-indicator">⚽ Apresentadores: ${currentIndex + 1} de ${presenters.length}</div>

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

    btnNext.textContent = "⚽ SUBMETIDO!";
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
        "👍 Avaliação submetida!",
        "💎 Ótimo palpite!",
        "📝 Formulário gravado!",
        "⚡ Excelente progresso!",
        "🎯 Opinião guardada!",
        "💫 Obrigado pelo feedback!",
        "🔥 Apresentador avaliado!",
        "🏆 Mais uma avaliação!"
    ];
    const celeb = celebrations[currentIndex % celebrations.length];

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay earn-popup-overlay';
    overlay.id = 'earn-popup';
    overlay.innerHTML = `
        <div class="popup-box earn-popup-box">
            <span class="popup-icon" style="font-size:2.8rem">📝</span>
            <div class="popup-tag" style="background:linear-gradient(135deg, var(--zap-pink), #a01060); color:#fff">🏆 ${celeb}</div>
            <p class="popup-title" style="color:var(--text-muted); font-size:1rem; margin-bottom:6px">Acabou de ganhar</p>
            <div class="popup-amount" style="font-size:2.8rem">${formatCurrency(gained)}</div>
            <p class="earn-total-label">Total acumulado: <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong></p>
            <button class="btn-popup btn-popup-earn" onclick="closeEarnPopup()">
                ➡️ PRÓXIMO
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
// TRANSITIONS & INTERACTIVE GAMES (FASE 2)
// ========================
window.triggerInlineTransition = (callback) => {
    let overlay = document.querySelector('.wc-transition-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'wc-transition-overlay';
        overlay.innerHTML = `
            <div class="wc-wipe wc-wipe-1"></div>
            <div class="wc-wipe wc-wipe-2"></div>
            <div class="wc-wipe wc-wipe-3"></div>
            <div class="wc-wipe wc-wipe-4"></div>
            <div class="wc-sweep"></div>
            <div class="wc-transition-logo-container">
                <div class="wc-rays"></div>
                <div class="wc-transition-logo">
                    ${ZAP_WC_LOGO_SVG}
                    <div class="wc-shine"></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    // Áudio oficial da transição FIFA 2026 (cortado aos 2.6s com fade out)
    playTransitionWithFade();

    overlay.style.display = 'block';
    overlay.classList.remove('active-out', 'start-out');
    void overlay.offsetWidth; // Forçar reflow
    overlay.classList.add('active');
    
    setTimeout(() => {
        if (callback) callback();
        
        overlay.classList.remove('active');
        overlay.classList.add('active-out');
        void overlay.offsetWidth;
        overlay.classList.add('start-out');
        
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.classList.remove('active-out', 'start-out');
        }, 750);
    }, 1050);
};

// --- PENALTY SHOOTOUT GAME (MINI-JOGO REALISTA) ---
let penaltyGoals = 0;
let penaltyAttempts = 0;
const REQUIRED_PENALTY_GOALS = 3;
const MAX_PENALTY_ATTEMPTS = 5;

function showPenaltyIntro() {
    progressContainer.classList.add('hidden');
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:3rem; margin-bottom:10px;">⚽</span>
            <div class="wc-badge">⚽ FASE 2: DESAFIOS DA COPA</div>
            <h2 class="presenter-name">Grande Decisão por Pênaltis!</h2>
            <p class="intro-text">
                Parabéns! Completou a avaliação dos apresentadores e acumulou <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong>!<br><br>
                Agora, entre em campo! Toque diretamente na baliza para rematar. Marque <strong>${REQUIRED_PENALTY_GOALS} golos em ${MAX_PENALTY_ATTEMPTS} tentativas</strong> para avançar!
            </p>
            <button class="btn-action ready" onclick="triggerInlineTransition(startPenaltyGame)">
                🏃‍♂️ COBRAR PÊNALTIS
            </button>
        </div>`;
}

function startPenaltyGame() {
    penaltyGoals = 0;
    penaltyAttempts = 0;
    renderPenaltyRound();
}

function renderPenaltyRound() {
    if (penaltyAttempts >= MAX_PENALTY_ATTEMPTS) {
        if (penaltyGoals >= REQUIRED_PENALTY_GOALS) {
            showPenaltySuccess();
        } else {
            // Bonus round — give extra chance
            penaltyAttempts = MAX_PENALTY_ATTEMPTS - 1;
            renderPenaltyRound();
        }
        return;
    }
    
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <div class="card-step-indicator">⚽ Pênaltis: ${penaltyGoals}/${REQUIRED_PENALTY_GOALS} Golos • Tentativa ${penaltyAttempts + 1}/${MAX_PENALTY_ATTEMPTS}</div>
            <h2 class="presenter-name" style="margin-bottom: 5px;">Toque na baliza para rematar!</h2>
            
            <div class="penalty-arena" id="penalty-arena">
                <div class="football-goal" id="football-goal">
                    <div class="goal-net" id="goal-net"></div>
                    <!-- 6 alvos clicáveis -->
                    <div class="goal-target target-tl" onclick="shootAtTarget('tl')" title="Canto superior esquerdo"></div>
                    <div class="goal-target target-tc" onclick="shootAtTarget('tc')" title="Centro superior"></div>
                    <div class="goal-target target-tr" onclick="shootAtTarget('tr')" title="Canto superior direito"></div>
                    <div class="goal-target target-bl" onclick="shootAtTarget('bl')" title="Canto inferior esquerdo"></div>
                    <div class="goal-target target-bc" onclick="shootAtTarget('bc')" title="Centro inferior"></div>
                    <div class="goal-target target-br" onclick="shootAtTarget('br')" title="Canto inferior direito"></div>
                    <div id="goalkeeper" class="goalkeeper">🧤</div>
                </div>
                <div id="football" class="football">⚽</div>
            </div>
            
            <div id="penalty-result-text" class="intro-text" style="font-size: 1.1rem; font-weight: 700; margin-top: 15px; min-height: 1.5em;"></div>
        </div>`;
}

window.shootAtTarget = (zone) => {
    // Impedir duplos cliques
    const targets = document.querySelectorAll('.goal-target');
    targets.forEach(t => t.style.pointerEvents = 'none');
    
    const goalkeeper = document.getElementById('goalkeeper');
    const football = document.getElementById('football');
    const resultText = document.getElementById('penalty-result-text');
    const net = document.getElementById('goal-net');
    
    // Mapeamento de alvos para posições de mergulho
    const keeperZones = ['tl', 'tc', 'tr', 'bl', 'bc', 'br'];
    const keeperDive = keeperZones[Math.floor(Math.random() * keeperZones.length)];
    
    // Animar a bola
    football.className = 'football shoot-zone-' + zone;
    
    // Animar o guarda-redes
    goalkeeper.className = 'goalkeeper gk-dive-' + keeperDive;
    
    penaltyAttempts++;
    
    setTimeout(() => {
        const isGoal = zone !== keeperDive;
        
        if (isGoal) {
            penaltyGoals++;
            resultText.innerHTML = `<span style="color: var(--success); font-size: 1.3rem;">⚽ GOOOOLO!!! Bola na rede!</span>`;
            
            // Vibrar a rede
            if (net) net.classList.add('net-shake');
            
            // Som real de estádio
            // if (typeof cheerSound !== 'undefined') cheerSound.cloneNode().play().catch(() => {});
            
            const float = document.createElement('div');
            float.classList.add('money-float');
            float.textContent = `+ 8.000 Kzs`;
            float.style.left = '50%';
            float.style.top = '40%';
            appContent.appendChild(float);
            
            earnings += 8000;
            updateHeader();
        } else {
            resultText.innerHTML = `<span style="color: var(--danger); font-size: 1.1rem;">🧤 GRANDE DEFESA! O guarda-redes voou!</span>`;
            // (sem vaias disponíveis de alta qualidade)
        }
        
        setTimeout(() => {
            if (penaltyGoals >= REQUIRED_PENALTY_GOALS) {
                earnings += 10000;
                updateHeader();
                showPenaltySuccess();
            } else if (penaltyAttempts >= MAX_PENALTY_ATTEMPTS) {
                // Deu chance extra — vamos continuar mesmo assim
                earnings += 5000;
                updateHeader();
                showPenaltySuccess();
            } else {
                renderPenaltyRound();
            }
        }, 1800);
        
    }, 700);
};

function showPenaltySuccess() {
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:3rem; margin-bottom:10px;">🏆</span>
            <div class="wc-badge">⚽ PÊNALTIS CONCLUÍDOS</div>
            <h2 class="presenter-name">Pontaria de Estrela!</h2>
            <p class="intro-text">
                Marcou ${penaltyGoals} golo${penaltyGoals > 1 ? 's' : ''} em ${penaltyAttempts} tentativas!<br>
                Saldo acumulado: <strong style="color:var(--wc-gold)">${formatCurrency(earnings)}</strong>
            </p>
            <button class="btn-action ready" onclick="triggerInlineTransition(showPredictorIntro)">
                🎮 PRÓXIMO DESAFIO: PREDICTOR
            </button>
        </div>`;
}

// --- MATCH PREDICTOR GAME (MANIPULADO: 2 acertos, 1 erro) ---
const predictorMatches = [
    { teamA: "Brasil", flagA: "🇧🇷", teamB: "Argentina", flagB: "🇦🇷" },
    { teamA: "França", flagA: "🇫🇷", teamB: "Marrocos", flagB: "🇲🇦" },
    { teamA: "Portugal", flagA: "🇵🇹", teamB: "Espanha", flagB: "🇪🇸" }
];
// Jogos 0 e 1 = utilizador acerta. Jogo 2 = utilizador erra.
const RIGGED_WIN_INDICES = [0, 1];
const RIGGED_LOSE_INDEX = 2;
let currentMatchIndex = 0;
let selectedPrediction = null;
let riggedFinalScoreA = 0;
let riggedFinalScoreB = 0;

function showPredictorIntro() {
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size:3rem; margin-bottom:10px;">📊</span>
            <div class="wc-badge">⚽ DESAFIO 2: PREDICTOR DA COPA</div>
            <h2 class="presenter-name">Simulador de Resultados</h2>
            <p class="intro-text">
                Preveja os grandes confrontos simulados da Copa do Mundo 2026!<br><br>
                Acerte no palpite do vencedor e ganhe <strong style="color:var(--wc-gold)">15.000 Kzs</strong> por cada jogo!
            </p>
            <button class="btn-action ready" onclick="triggerInlineTransition(startPredictorGame)">
                ⚡ COMEÇAR SIMULAÇÃO
            </button>
        </div>`;
}

function startPredictorGame() {
    currentMatchIndex = 0;
    renderPredictorMatch();
}

function generateRiggedScore(prediction, shouldWin) {
    // Gera placares dinâmicos que correspondem (ou contrariam) a previsão
    const low = () => Math.floor(Math.random() * 2) + 1; // 1 ou 2
    const high = () => Math.floor(Math.random() * 2) + 2; // 2 ou 3
    
    if (shouldWin) {
        // Placar deve corresponder à previsão
        if (prediction === 'A') {
            riggedFinalScoreA = high();
            riggedFinalScoreB = Math.max(0, riggedFinalScoreA - low());
        } else if (prediction === 'B') {
            riggedFinalScoreB = high();
            riggedFinalScoreA = Math.max(0, riggedFinalScoreB - low());
        } else {
            // Empate
            riggedFinalScoreA = low();
            riggedFinalScoreB = riggedFinalScoreA;
        }
    } else {
        // Placar deve contrariar a previsão
        if (prediction === 'A') {
            // Previsão era A vencer, mas B vence
            riggedFinalScoreB = high();
            riggedFinalScoreA = Math.max(0, riggedFinalScoreB - low());
        } else if (prediction === 'B') {
            // Previsão era B vencer, mas A vence
            riggedFinalScoreA = high();
            riggedFinalScoreB = Math.max(0, riggedFinalScoreA - low());
        } else {
            // Previsão era empate, mas um dos dois vence
            riggedFinalScoreA = high();
            riggedFinalScoreB = Math.max(0, riggedFinalScoreA - low());
            if (riggedFinalScoreA === riggedFinalScoreB) riggedFinalScoreA++;
        }
    }
}

function renderPredictorMatch() {
    if (currentMatchIndex >= predictorMatches.length) {
        triggerInlineTransition(showWithdrawalSelection);
        return;
    }
    
    const match = predictorMatches[currentMatchIndex];
    selectedPrediction = null;
    
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <div class="card-step-indicator">⚽ Jogo ${currentMatchIndex + 1} de ${predictorMatches.length}</div>
            <h2 class="presenter-name" style="margin-bottom: 15px;">Quem vence o jogo?</h2>
            
            <div class="match-predictor-card" style="width: 100%;">
                <div class="match-card">
                    <div class="match-team">
                        <span class="flag-emoji">${match.flagA}</span>
                        <span>${match.teamA}</span>
                    </div>
                    <div class="match-vs">VS</div>
                    <div class="match-team">
                        <span class="flag-emoji">${match.flagB}</span>
                        <span>${match.teamB}</span>
                    </div>
                </div>
            </div>
            
            <div class="predictor-controls btn-group" style="margin-top: 15px;">
                <button class="btn-option" onclick="selectPrediction('A', this)">${match.teamA}</button>
                <button class="btn-option" onclick="selectPrediction('Draw', this)">Empate</button>
                <button class="btn-option" onclick="selectPrediction('B', this)">${match.teamB}</button>
            </div>
            
            <button id="btn-simulate" class="btn-action" disabled style="margin-top: 20px;" onclick="simulateMatch()">
                ⚽ SIMULAR PARTIDA
            </button>
        </div>`;
}

window.selectPrediction = (prediction, btn) => {
    selectedPrediction = prediction;
    const buttons = document.querySelectorAll('.predictor-controls button');
    buttons.forEach(b => b.classList.remove('selected'));
    if (btn) btn.classList.add('selected');
    
    const simulateBtn = document.getElementById('btn-simulate');
    if (simulateBtn) {
        simulateBtn.disabled = false;
        simulateBtn.classList.add('ready');
    }
};

window.simulateMatch = () => {
    const simulateBtn = document.getElementById('btn-simulate');
    if (simulateBtn) {
        simulateBtn.disabled = true;
        simulateBtn.classList.remove('ready');
    }
    
    const match = predictorMatches[currentMatchIndex];
    const shouldWin = RIGGED_WIN_INDICES.includes(currentMatchIndex);
    generateRiggedScore(selectedPrediction, shouldWin);
    
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <div class="card-step-indicator">⚽ SIMULAÇÃO EM CURSO</div>
            <h2 class="presenter-name" style="margin-bottom: 20px;">${match.teamA} VS ${match.teamB}</h2>
            
            <div class="live-ticker-container" style="width: 100%; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 16px; border: 1px solid rgba(255,213,3,0.15);">
                <div class="live-scoreboard" style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 15px;">
                    <div class="score-team" style="display: flex; flex-direction: column; align-items: center;">
                        <span class="flag-emoji" style="font-size: 2.5rem;">${match.flagA}</span>
                        <span style="font-size: 0.95rem; font-weight: 700;">${match.teamA}</span>
                        <span id="live-score-A" class="live-score-number" style="font-size: 2.2rem; font-weight: 800; color: var(--zap-yellow); margin-top: 8px;">0</span>
                    </div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: var(--wc-gold);">:</div>
                    <div class="score-team" style="display: flex; flex-direction: column; align-items: center;">
                        <span class="flag-emoji" style="font-size: 2.5rem;">${match.flagB}</span>
                        <span style="font-size: 0.95rem; font-weight: 700;">${match.teamB}</span>
                        <span id="live-score-B" class="live-score-number" style="font-size: 2.2rem; font-weight: 800; color: var(--zap-yellow); margin-top: 8px;">0</span>
                    </div>
                </div>
                <div id="live-minute" class="live-minute" style="font-size: 1.2rem; font-weight: 800; color: var(--wc-red); text-align: center; margin-bottom: 10px;">0'</div>
                <div id="live-commentary" class="live-commentary" style="font-size: 0.85rem; color: var(--text-muted); text-align: center; min-height: 2.5em; line-height: 1.4;">⚽ Apito inicial! O jogo começa.</div>
            </div>
        </div>`;
        
    const scoreAEl = document.getElementById('live-score-A');
    const scoreBEl = document.getElementById('live-score-B');
    const minEl = document.getElementById('live-minute');
    const commEl = document.getElementById('live-commentary');
    
    let currentMin = 0;
    let displayA = 0;
    let displayB = 0;
    
    // Agendar golos em minutos aleatórios
    const totalGoals = riggedFinalScoreA + riggedFinalScoreB;
    const goalMinutes = [];
    const usedMins = new Set();
    for (let i = 0; i < totalGoals; i++) {
        let m;
        do { m = (Math.floor(Math.random() * 5) + 1) * 15; } while (usedMins.has(m) && usedMins.size < 6);
        usedMins.add(m);
        goalMinutes.push(m);
    }
    goalMinutes.sort((a, b) => a - b);
    
    // Distribuir golos entre equipas
    const goalEvents = [];
    let goalsA = 0, goalsB = 0;
    for (let i = 0; i < goalMinutes.length; i++) {
        if (goalsA < riggedFinalScoreA && (goalsB >= riggedFinalScoreB || Math.random() > 0.5)) {
            goalEvents.push({ min: goalMinutes[i], team: 'A' });
            goalsA++;
        } else {
            goalEvents.push({ min: goalMinutes[i], team: 'B' });
            goalsB++;
        }
    }
    
    const commentaryNotes = [
        "Jogo muito disputado a meio-campo.",
        `Perigo! Ataque rápido do ${match.teamA}!`,
        "O guarda-redes faz uma grande defesa!",
        `Remate forte da ${match.teamB} ao poste!`,
        "Falta perigosa assinalada pelo árbitro."
    ];
    
    const interval = setInterval(() => {
        currentMin += 15;
        if (currentMin > 90) {
            clearInterval(interval);
            finishMatchSimulation();
            return;
        }
        
        if (minEl) minEl.textContent = `${currentMin}'`;
        
        const goalEvent = goalEvents.find(e => e.min === currentMin);
        if (goalEvent) {
            if (goalEvent.team === 'A') {
                displayA++;
                if (scoreAEl) scoreAEl.textContent = displayA;
                if (commEl) commEl.innerHTML = `<span style="color: var(--success); font-weight: 800;">⚽ GOLO DO ${match.teamA.toUpperCase()}!</span>`;
            } else {
                displayB++;
                if (scoreBEl) scoreBEl.textContent = displayB;
                if (commEl) commEl.innerHTML = `<span style="color: var(--success); font-weight: 800;">⚽ GOLO DA ${match.teamB.toUpperCase()}!</span>`;
            }
            playGoalSound();
        } else {
            if (commEl) commEl.textContent = commentaryNotes[Math.floor(Math.random() * commentaryNotes.length)];
        }
    }, 800);
};

function playGoalSound() {
    // Festejo real da claque
    // if (typeof cheerSound !== 'undefined') cheerSound.cloneNode().play().catch(() => {});
}

function finishMatchSimulation() {
    const match = predictorMatches[currentMatchIndex];
    const actualResult = riggedFinalScoreA > riggedFinalScoreB ? 'A' : (riggedFinalScoreA < riggedFinalScoreB ? 'B' : 'Draw');
    const isCorrect = selectedPrediction === actualResult;
    
    let resultMessage = "";
    let gained = 15000;
    
    if (isCorrect) {
        resultMessage = `🎉 PALPITE CERTO! Ganhou ${formatCurrency(gained)}!`;
    } else {
        gained = 5000;
        resultMessage = `😅 Palpite falhado! Ganha ${formatCurrency(gained)} de consolação!`;
    }
    
    earnings += gained;
    updateHeader();
    
    appContent.innerHTML = `
        <div class="card-content animate-entry">
            <span style="font-size: 3rem;">🏁</span>
            <h2 class="presenter-name">Fim da Partida!</h2>
            <h3 style="font-size: 1.5rem; color: var(--wc-gold); margin-bottom: 10px;">${match.teamA} ${riggedFinalScoreA} - ${riggedFinalScoreB} ${match.teamB}</h3>
            
            <p class="intro-text" style="font-size: 1.1rem; font-weight: 700; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom: 20px;">
                ${resultMessage}
            </p>
            
            <button class="btn-action ready" onclick="triggerInlineTransition(nextPredictorStep)">
                ⚽ CONTINUAR
            </button>
        </div>`;
}

window.nextPredictorStep = () => {
    currentMatchIndex++;
    renderPredictorMatch();
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
const ZAP_WC_LOGO_SVG = `<img src="images/logo-wc2026.png" alt="ZAP — Edição Copa do Mundo FIFA 2026" class="zap-wc-logo">`;

window.triggerWCTransition = (targetUrl) => {
    // Áudio oficial da transição FIFA 2026 (cortado aos 2.6s com fade out)
    playTransitionWithFade();

    let overlay = document.querySelector('.wc-transition-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'wc-transition-overlay';
        overlay.innerHTML = `
            <div class="wc-wipe wc-wipe-1"></div>
            <div class="wc-wipe wc-wipe-2"></div>
            <div class="wc-wipe wc-wipe-3"></div>
            <div class="wc-wipe wc-wipe-4"></div>
            <div class="wc-sweep"></div>
            <div class="wc-transition-logo-container">
                <div class="wc-rays"></div>
                <div class="wc-transition-logo">
                    ${ZAP_WC_LOGO_SVG}
                    <div class="wc-shine"></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    overlay.style.display = 'block';
    void overlay.offsetWidth;
    overlay.classList.add('active');
    
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 1050);
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
