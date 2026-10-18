# Comparação e revisão do protótipo

Data: 18/10/2026. Repositório: ArthurCarValho0001/Reconexao. Branch: `feature/atualizacao-prototipo`. Sem merge ou publicação solicitada nesta entrega.

## Fontes e limites

Inspecionados integralmente `index.html`, `styles.css`, `app.js` e `README.md` de main antes das alterações. A consulta de `AGENTS.md` no repositório retornou 404. Foram lidos o AGENTS e todos os documentos do pacote `Reconexao_Documentacao_Atualizada.zip`, inclusive requisitos, regras, escopo, arquitetura e critérios de aceite. A arquitetura é proposta, sem aprovação de stack/provedores; este trabalho mantém HTML/CSS/JS sem dependências novas.

Os requisitos consolidados prevalecem sobre descrições antigas do protótipo. Não há documento integral do 3FM no pacote. Nenhuma afirmação de implementação em outras conversas foi utilizada como evidência.

## Diferenças encontradas e tratamento

| Tema / referência | Antes | Nesta branch / pendência |
|---|---|---|
| Identidade, Home, CA-051 | Azul-marinho/preto, R, entrada aluno/admin; sem Conhecer | Preservados; index.html inalterado |
| Demonstração, RF-072 / CA-050 | Aviso na Home e selo oculto em telas pequenas | Aviso permanente também no conteúdo, em qualquer largura; estados somente em memória |
| Acesso, RF-001–006 | Sem login; perfil Major; acesso ativo fixo | Continua demonstrativo. Sem sessão única, autenticação, autorização real, estorno ou bloqueio por expiração |
| Oferta, RN-001–003 | Afirmava pagamento único e nova compra como renovação | Mantidos seis meses iniciais; condições comerciais e renovação marcadas pendentes |
| Aulas e pontos, RF-011–015 / RN-010 | Aulas publicadas sem sequência; conclusão apenas toast; progresso fixo em 35% | Evento explícito de 90% fictícios, +10 uma vez por aula; progresso calculado; histórico preservado ao despublicar |
| Telemetria, CA-011 | Player ilustrativo | Continua sem vídeo/segmentos reais e sem antifraude; botão não representa assistir efetivamente 90% |
| Obrigatoriedade, RF-061 | Não modelada | Exemplos iniciais marcados obrigatórios somente como dados de demonstração; seletor na edição/criação da aula. Não define currículo real |
| Live e gravação, RN-012–014 | Botões exibiam toast | Pontos distintos por clique fictício e por 90% fictícios da gravação; sem alterar registro de presença |
| Mediação, RF-035–036 | Ausente | Cenário declarado de gravação disponível: iniciar cumpre participação sem pontos automáticos. Janela administrativa/reabertura continuam pendentes de implementação |
| Pontos e progressão, RF-060–064 | Ausentes | Saldo, histórico por chave de evento, todos os pré-requisitos juntos, pagamento II separado e liberação automática simulada. 3FM não obrigatório |
| Inicial e 30 dias, RF-040–041 | Ausentes | Instrumentos separados; submissões fictícias completas; relógio relativo; espera de 30 dias desde inicial, sem expiração após liberação; sem formulários ou resultados inventados |
| Reconexão Day, RF-042 | Ausente | Evento de cinco respostas fictícias no mesmo dia; repetir não pontua novamente; próximo dia permite novo evento; sem coletar reflexões |
| 3FM, RF-043–051 | Ausente | Card separado com características aprovadas e bloqueio pela falta da fonte integral. Sem perguntas, rascunho, pontuação, classificações ou cálculo fictícios |
| WhatsApp, RF-038 / RN-052 | Sem acesso dedicado | Simulação do clique uma vez, sem abrir grupo ou comprovar ingresso; retirada de membros não automatizada |
| Turmas II, RF-037 / RN-051 | Reserva e cancelamento disponíveis no I | Identificadas como II/on-line; reserva condicionada à progressão simulada; cancelamento sinalizado pendente. Capacidade local preservada; não testa concorrência real |
| Exercícios, RF-020–024 | Ausentes | Permanecem pendentes: três tipos, submissão, consulta e restrições de edição/exclusão |
| Administração, RF-070–071 | Dashboard, conteúdo, reuniões, capacidade, presença, avisos e e-mails fictícios | Preservados; acrescentada consulta à jornada fictícia sem concessão administrativa de pontos. Gestão real de alunos, ofertas, materiais, respostas e relatórios continua pendente |
| Conteúdo e exclusões, RN-031–036 | Publicação/despublicação e edição; sem exclusão | Preservadas sem criar exclusão. Histórico local de pontos independe da publicação. Ordenação, cancelamento/reativação de lives com avisos e políticas de exclusão ainda não implementados |
| Materiais / e-book, RF-014 | Exemplos com toast | Preservados; sem leitor real ou arquivos reais |
| Integrações e operação | Sem backend ou serviços reais | Sem novas integrações, segredos ou contratação; Pages continua protótipo |

## Decisões técnicas desta demonstração

- Eventos de pontos ficam em memória, com chave por tipo e objeto; Day utiliza dia relativo do relógio demonstrativo. Recarregar reinicia tudo. Não há localStorage, cookies nem coleta de respostas.
- A entrada de 90% é um cenário completo simulado; não há controle manual de saldo. O administrador só consulta a jornada do único aluno fictício.
- Botões de submissão representam dados fictícios já completos. Textos das perguntas do inicial/30 dias/Day precisam de fonte; nenhum foi criado nesta entrega.
- O contexto de Mediação declara live indisponível e janela de gravação aberta; não simula datas ou política administrativa desconhecida.
- O verificador é recalculado com o conjunto de aulas obrigatórias publicadas. Não modela a vigência do II ou histórico temporal de elegibilidade após novas publicações, que depende da aplicação real.

## Revisão e próximos passos

1. Revisar a branch e as simulações; validar a representação dos dados fictícios, inclusive a marcação de obrigatoriedade dos exemplos.
2. Fornecer o documento integral do 3FM e os textos dos demais questionários/Day para implementar formulários fiéis. Fórmulas, faixas e devolutivas não podem ser inferidas.
3. Confirmar regras comerciais, cancelamento/realocação de reservas e operação externa do WhatsApp.
4. Revisar o PR antes de merge em main. A publicação Pages existente só deve receber essas mudanças após aprovação.

## Validação

Resultados e limitações em [TESTES_PROTOTIPO.md](TESTES_PROTOTIPO.md). Os testes de simulação não constituem evidência de autenticação, pagamento, autorização, telemetria, privacidade ou persistência em produção.
