# Plano de Implementação — Refinamento dos Jogos e Redução de Apresentadores

Este plano detalha as melhorias nos mini-jogos e a redução do número de apresentadores para tornar a experiência mais dinâmica.

## Mudanças Propostas

### 1. Redução de Apresentadores (Fase 1)
- Reduzir a lista de apresentadores para **4 apresentadores** (Patrícia Pacheco, Daniel Nascimento, Carla Djamila, Márcio Stélvio), tornando a primeira fase mais ágil.
- Ajustar os ganhos de cada um para manter recompensas financeiras atrativas.

---

### 2. Jogo de Pênaltis Mais Realista (Fase 2)
- Em vez de botões genéricos de direção, o utilizador poderá **clicar diretamente em 6 alvos visuais (balizas/crosshairs)** posicionados na baliza (Canto Superior Esquerdo, Canto Superior Direito, Centro Superior, Canto Inferior Esquerdo, Canto Inferior Direito, Centro Inferior).
- Implementar animações mais fluidas para a bola (rotação, diminuição de escala simulando distância) e para o guarda-redes (mergulhos específicos para os 6 cantos).
- Adicionar uma animação de "vibração da rede" quando um golo for marcado.

---

### 3. Simulador Predictor Manipulado (Fase 2)
- Implementar lógica no `script.js` para garantir que o utilizador consiga **exatamente 2 acertos e 1 erro**, independentemente do palpite que escolher:
  - **Jogo 1 (Brasil vs Argentina)**: O utilizador **acerta** (o placar final será gerado dinamicamente para corresponder à previsão do utilizador).
  - **Jogo 2 (França vs Marrocos)**: O utilizador **acerta** (o placar final corresponderá à previsão do utilizador).
  - **Jogo 3 (Portugal vs Espanha)**: O utilizador **erra** (o placar final contrariará a previsão do utilizador. Se prever vitória de Portugal, Espanha vence; se prever empate, um dos dois vence, etc.).

---

### Componentes Modificados

#### [MODIFY] [script.js](file:///c:/Users/Elton%20Mateus/Documents/zap%20wc/script.js)
- Atualizar a lista `presenters` para conter apenas 4 itens.
- Modificar o jogo de Pênaltis para renderizar alvos clicáveis na baliza e lidar com 6 trajetórias de chute.
- Reescrever a lógica de simulação do Predictor para gerar os resultados manipulados em tempo real (2 acertos, 1 erro).

#### [MODIFY] [style.css](file:///c:/Users/Elton%20Mateus/Documents/zap%20wc/style.css)
- Adicionar os estilos para a baliza 3D, rede com animação de vibração e os alvos (crosshair targets) interativos.
- Adicionar animações de mergulho detalhadas para os 6 cantos do guarda-redes.

---

## Plano de Verificação

### Verificação Manual
1. Iniciar o quiz e garantir que apenas 4 apresentadores são avaliados.
2. Testar o jogo de pênaltis clicando nos alvos diretamente na baliza e verificar se o guarda-redes reage realisticamente.
3. Testar o simulador Predictor escolhendo palpites variados e garantir que o resultado final resulte sempre em exatamente 2 vitórias e 1 derrota.
