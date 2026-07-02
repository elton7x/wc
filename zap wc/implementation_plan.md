# Plano de Implementação — Restruturação Completa e Jogos da Copa

Este plano detalha as alterações necessárias para separar a avaliação de influenciadores/apresentadores das perguntas da Copa do Mundo, adicionar jogos interativos (como o jogo de Pênaltis e Simulador de Resultados) na fase da Copa, e implementar transições dinâmicas entre as fases e jogos.

## Mudanças Propostas

### 1. Separação de Fluxos (Apresentadores vs. Copa)
- **Fase 1: Avaliação de Apresentadores ZAP**: O utilizador irá avaliar os 8 apresentadores consecutivamente. As perguntas serão restritas à imagem, simpatia, popularidade e talento dos apresentadores (removendo qualquer menção ou pergunta genérica sobre a Copa do Mundo nesta fase).
- **Fase 2: Desafios e Jogos da Copa**: Após avaliar todos os apresentadores, ocorrerá uma transição animada de "Entrada em Campo". O utilizador jogará mini-jogos interativos temáticos da Copa do Mundo 2026.

---

### 2. Jogos Interativos da Copa (Fase 2)
Implementaremos os seguintes jogos na fase da Copa:
1. **Jogo de Bater Pênaltis (Penalty Shootout)**:
   - Uma interface visual com baliza (golo), guarda-redes e bola.
   - O utilizador escolhe onde rematar: **Esquerda**, **Centro** ou **Direita**.
   - O guarda-redes mergulha para um lado aleatório.
   - Se golo, ativa comemoração visual ("GOLO! ⚽") com som de claque e ganha um prémio. Se defendido, o utilizador tenta novamente.
   - O utilizador precisa de marcar 3 golos para avançar.
2. **Simulador e Palpites de Jogos (Match Predictor)**:
   - Apresenta partidas clássicas (ex: Brasil vs Argentina, França vs Marrocos).
   - O utilizador escolhe o vencedor e clica em "Simular".
   - O placar corre em tempo real com micro-animações (ex: 0-0 -> 1-0 -> 2-1) até definir o resultado e premiar o utilizador pela previsão.

---

### 3. Sistema de Transição Suave (Wipe Transition)
- Implementaremos uma função JavaScript `triggerInlineTransition(callback)` que ativa a transição de faixas (Wipe Overlay) com som de apito de árbitro / golo em tempo de execução, executa a troca de conteúdo do cartão HTML (callback) e depois remove o overlay suavemente. Isso dará a sensação de um jogo de TV de alta qualidade.

---

### Componentes Modificados

#### [MODIFY] [script.js](file:///c:/Users/Elton%20Mateus/Documents/zap%20wc/script.js)
- Reformular a estrutura do questionário para focar estritamente na avaliação dos apresentadores (Fase 1).
- Adicionar o motor de jogo dos Pênaltis, com estados de chute, animação do guarda-redes, contagem de golos e cálculo de recompensas.
- Adicionar o motor do Simulador de Resultados de jogos da Copa.
- Implementar a função de transição de tela inline entre a transição dos apresentadores, jogo de pênaltis, simulador de jogos e saque.

#### [MODIFY] [style.css](file:///c:/Users/Elton%20Mateus/Documents/zap%20wc/style.css)
- Adicionar estilização para a baliza de futebol, o posicionamento do guarda-redes, a bola, e as animações de chute e defesa.
- Adicionar estilos para o placar dinâmico do simulador de resultados.
- Assegurar compatibilidade responsiva para smartphones e ecrãs pequenos.

---

## Plano de Verificação

### Verificação Manual
1. Abrir a página inicial no navegador (`127.0.0.1:5500`).
2. Concluir a avaliação de influenciadores e garantir que as perguntas sobre a Copa não aparecem misturadas.
3. Testar a transição animada e sonora para a fase de Pênaltis.
4. Jogar o jogo de Pênaltis, verificar as animações da bola e do guarda-redes, e o incremento do saldo financeiro.
5. Testar a simulação interativa de resultados de jogos da Copa.
6. Garantir que as transições mantêm o design premium e fluido.
