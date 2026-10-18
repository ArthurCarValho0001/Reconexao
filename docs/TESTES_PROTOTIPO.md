# Evidências e roteiro de revisão

Data: 18/10/2026. Ambiente: Node.js 24.19.0, aplicação estática sem dependências novas.

## Executado

- `node --check app.js`: PASSOU.
- `node --test tests/prototype.test.cjs`: PASSOU, 11 testes.

| Cenário | Resultado / alcance |
|---|---|
| Aulas não sequenciais; duplicação; rascunho | PASSOU: 302 pode concluir antes da 301; repetição não duplica; 401 em rascunho não pontua |
| Live / gravação / WhatsApp | PASSOU: chaves separadas e +10 uma vez; sem alterar presença |
| Mediação | PASSOU: início cumpre participação; saldo permanece zero |
| Inicial / 30 dias | PASSOU: não envia antes do inicial; dia 29 bloqueado; dia 30 e posterior liberados; sem duplicação |
| Reconexão Day | PASSOU: evento de cinco respostas fictícias pontua uma vez por dia |
| Progressão | PASSOU: 199 não basta; 200 não dispensa aulas, Mediação ou questionários; pagamento separado; 3FM ausente não bloqueia |
| Despublicação/republicação | PASSOU: pontos preservados e requisitos recalculados |
| Administrador | PASSOU: não concede pontos pelas ações da demonstração |
| Textos dinâmicos / 3FM | PASSOU: título escapado no HTML da jornada; 3FM identificado pendente, sem pontos |
| Jornada com eventos | PASSOU: 200 pontos alcançados por aulas, live, gravações, questionários, WhatsApp e cinco dias; Mediação e pagamento fictício liberam II |
| Rotas | PASSOU: funções de renderização executadas em VM com DOM mínimo para aluno/admin, sem exceção; aviso de simulação e ausência de Conhecer conferidos |

Os testes de rotas inspecionam geração de HTML em VM, sem navegador real. Não validam CSS, clique real, foco ou acessibilidade.

## Bloqueado / não comprovado

- Revisão visual e interações em navegador, desktop/mobile: BLOQUEADO neste ambiente. Chromium não estava instalado e o download do executável falhou (arquivo truncado/inválido). Nenhuma captura ou inspeção visual foi realizada. Responsividade existente foi preservada por inspeção do CSS, sem declarar aceite visual.
- 3FM (CA-022–027): BLOQUEADO pela ausência da especificação integral; rascunhos/resultados/formulário não implementados.
- Formulários e validação de todas as respostas do inicial, 30 dias e Day: NÃO IMPLEMENTADOS. Apenas eventos explicitamente fictícios; não equivalem ao aceite de formulário real.
- Telemetria real de 90%, salto de vídeo/antifraude (CA-011): NÃO IMPLEMENTADA. O botão simula o evento completo.
- Autorização, pagamentos reais, expiração, sessão única, persistência, concorrência de vagas e dados privados: NÃO IMPLEMENTADOS. Testes desta entrega não validam segurança de produção.

## Revisão manual pendente no navegador

1. Abrir Home em 1440px e 390px; conferir R, azul-marinho/preto, botões de aluno/admin e ausência de Conhecer.
2. Entrar como aluno; em Meus módulos abrir uma aula posterior antes da primeira. Simular 90% duas vezes. Conferir apenas +10 em Pontos e progressão e atualização do percentual.
3. Reuniões: simular clique na live, 90% da gravação e início de Mediação. Conferir eventos separados, sem presença externa alegada.
4. Questionários: simular inicial; avançar 30 dias; simular acompanhamento e cinco respostas Day; repetir Day; avançar um dia; repetir. Conferir idempotência, prazo e card bloqueado do 3FM.
5. Simular WhatsApp e conferir aviso de ingresso não comprovado. Não há navegação externa.
6. Obter 200 pontos com eventos, verificar critérios pendentes; completar aulas/Mediação/questionários e simular pagamento do II. Abrir Encontros, reservar vaga; verificar limite, ausência de cancelamento funcional e indicação on-line/II.
7. Como admin, criar/editar módulo e aula, inclusive marcação obrigatória; despublicar aula e conferir que pontos não desaparecem. Editar capacidade abaixo dos inscritos deve ser recusado; atualizar presença deve refletir no gráfico; testar avisos e e-mail fictício.
8. Verificar aviso demonstrativo em todas as telas, navegação por teclado, foco em formulários, rolagem do menu e ausência de corte dos botões.
9. Recarregar: saldo, submissões, reservas e edições devem voltar aos dados iniciais.

Este roteiro ainda precisa ser executado por um revisor em navegador antes do merge/publicação. Não constitui autorização para mesclar.
