# Revisão V4 — relato opcional na Home

Base main 1fbc32698c45bd6ef669ff36a07b5da207269660; branch feature/v4-relato-aluno. PR #4 já mesclado; nenhum PR aberto encontrado. Fonte: instrução V4 integral desta conversa.

| Antes | Nesta revisão |
|---|---|
| Home do aluno com saldo/barra e conteúdos | Saldo/barra preservados, seguido de bloco opcional de relato |
| Sem envio/contador | Contagem por grafemas, limite de 1.000, sem corte silencioso; branco rejeitado |
| Sem estados de relato | Processing/readonly, sucesso limpa, falha preserva/retenta; cenário técnico provoca falha |
| Sem consulta Admin | Menu Relatos dos alunos: mesmo registro da sessão, Major/instante/fuso/texto integral, somente leitura |
| Aluno sem relatos | Continua sem histórico/consulta após enviar |
| Pontos/Day | Intactos; relato não chama award, não pontua nem renova |
| Marca/3FM/Day/módulos/QA | Preservados; nenhum index/asset modificado |

Arquivos: app.js,styles.css,tests/prototype.test.cjs,README,AGENTS e sete documentos em docs. Sem dependências novas, backend, integrações ou dados reais. Contagem/fuso são propostas de demonstração documentadas, não stack aprovada.

55 testes passaram (42 regressões +13 REL); um usa callback assíncrono real, demais isolam timers. Revisão visual desktop/mobile/teclado não executada: Chromium ausente. Fonte integral3FM continua pendente; autorização real, retenção/exclusão, logs seguros e contrato Unicode/servidor também. Entrega em PRdraft, sem merge/Pages/preview externo.

Histórico anterior abaixo; não equivale a aprovação V4.

# Revisão V3 — acolhimento 3FM e saldo próprio

Base main: b4654b89d24f1690486c981d49901da3768fdcc9; PRs anteriores mesclados, nenhum PR aberto encontrado. Branch feature/v3-acolhimento-3fm-pontos.

| Antes | Nesta revisão |
|---|---|
| Tela 3FM concentrava avisos técnicos | Texto acolhedor/apresentação literal, botão do cliente; avisos longos em detalhes do apresentador |
| Sem etapa começar/retomar | Saudação e retomada de etapa visual; sem perguntas ou rascunho inventados |
| Saldo só na jornada/extrato | Saldo próprio também após saudação do dashboard, antes dos conteúdos |
| Sem barra da meta no dashboard | Barra0..100%, meta200, faltantes e liberação textual, sem arredondar199 |
| Explicação de pontos incompleta e vídeo90% | Sete regras completas, 40% de trechos únicos e clique live; vídeo continua botão fictício |
| Sem estados de consulta no bloco | Carga/erro/retentar explicitamente demonstrativos, sem substituir falha por zero |
| Ranking Admin | Preservado; nenhum ranking/saldo de outros alunos no bloco próprio |

Documentos acrescentados como recortes V3: REQUISITOS, REGRAS_NEGOCIO, CRITERIOS_ACEITE, MODELO_DADOS. Regras V2 e QA anteriores preservadas; logo/index/assets não alterados, CSS apenas complementar.

Bloqueios: fonte integral 3FM impede formulário, rascunho de respostas/correção/salvamento; edição pós-conclusão pendente. Etapa visual não é rascunho. Sem integração real ou backend. Exercício sem conteúdo permanece regra informativa, não formulário inventado.

42 testes VM passaram, incluindo fronteiras e regressões. Tentativa de navegador falhou por Chromium ausente; desktop/mobile/teclado NÃO EXECUTADOS. Revisão por cliente, QA e nova autorização exigidas. Sem merge, Pages ou preview externo.

Registro histórico abaixo não aprova a V3.

## Correção posterior — ranking Admin e conclusão fictícia

Base: main após PR #2, `31db5f0ae34beee0b15d72a0e0dc5e00e34e9dad`. Branch: `fix/ranking-admin-conclusao-demonstrativa`.

| Antes | Agora |
|---|---|
| Ranking no menu/rota do aluno | Menu e rota do Administrador; chamada direta de apresentação pelo aluno não retorna tabela/dados |
| Fixture 3FM acessível somente em controles técnicos | Botão também na tela obrigatória, em seção “Somente demonstração”, abrindo a experiência após conclusão |

Pagamento, gate Day, prazo e histórico permanecem. O botão e a fixture anterior usam a mesma chave de crédito único. Não foram inventadas perguntas/resultados; logo, paleta e favicon intactos. Restrição de perfil é apenas demonstrativa no frontend.

Registro da entrega V2 original abaixo; não representa testes nem autorização desta nova rodada.

# Revisão V2 — acesso, Day e ranking

Base: main em 1bd7f0050c55abfb49d8d318f9c0236b430f31b5. PR #1 CLOSED/MERGED, sem reabertura. Nenhum PR V2 aberto foi encontrado; criada feature/revisao-requisitos-acesso-day-ranking a partir da main. Esta entrega não altera main/Pages.

## Fontes e autorização

Lidos o documento V2 integral enviado pelo responsável, AGENTS do ZIP anterior, código/README/testes atuais e PDF oficial Day. O ZIP fornecido ainda é anterior, com trechos superados; o catálogo literal de 12 perguntas, seis dimensões, escala e mensagens preservado na versão mesclada foi mantido.

A V2 aprova esta implementação demonstrativa, não arquitetura, infraestrutura ou produção. Não exige nova confirmação das regras já decididas. Fonte 3FM, precisão/empate Day e detalhes do ranking não foram inferidos. A proposta de dia limite permitido e seguinte atrasado é explicitamente de relógio relativo.

## Matriz antes/depois

| Referência | Antes na versão mesclada | V2 implementada na demonstração |
|---|---|---|
| REV2-01 | Alguns textos genéricos de participantes/usuários | Aluno/Alunos e Administrador; variável interna members preservada |
| REV2-02/03 | Seis meses como período de acesso, renovação pendente e pagamento II | Pagamento único, duração do programa e seis meses mínimos; sem revogação automática ou renovação compulsória |
| REV2-04 | 3FM não bloqueava aulas | Primeira atividade obrigatória; renderização e eventos do aluno verificam acesso e 3FM |
| REV2-05 | Inicial, 30 dias e Day com eventos separados | Somente Day e 3FM. Removidos initialDay, followup, paymentII e seus fluxos/créditos |
| REV2-06–09 | Day sem obrigação; acompanhamento liberado após inicial | Prazo móvel desde liberação ou última conclusão Day; comunicado e redirecionamento por atraso |
| REV2-10 | >=200 e aulas/Mediação/instrumentos/pagamento II | Apenas saldo >=200. Aulas e Mediação continuam atividades; gate geral não modifica elegibilidade |
| REV2-11 | Sem ranking | Ranking ilustrativo por saldo do ledger, sem notas, respostas, resultados ou desempate artificial |
| Dashboards | Expirados sem renovação | Pendência pedagógica Day separada de acesso financeiro; métricas continuam exemplos |
| QA-P01/P02/P03 | Correções existentes | Preservadas e retestadas: publicação, atualização de agenda/aviso e URL de vídeo |
| Marca | Logo/paleta/favicon atuais | Preservados, sem alteração de index/assets |

## Modelagem local e navegação

Estado financeiro/liberação, trêsFM concluído, registros Day e ledger ficam em memória. Contratação e liberação são marcos distintos. O prazo é calculado dos registros que receberam conclusão válida; não do login, aviso, rascunho ou 3FM.

Ordem do aluno: acesso → 3FM → atraso Day → tela solicitada. A função de renderização aplica o redirecionamento, inclusive em pedidos de rota/atalho; eventos de pontos e reservas também conferem pendência. Day pode ser respondido enquanto atrasado, desde que acesso/3FM estejam regulares. Ajuda, saída e cenários técnicos continuam acessíveis. Admin não recebe gate pedagógico.

A fixture técnica só funciona na tela separada de cenários; registra 10 pontos 3FM uma única vez. Não é um formulário real nem liberação segura de produção. Alterar o estado financeiro nos cenários preserva marcos/histórico; liberar um cenário ainda sem data registra a primeira liberação. Voltar à entrada não reinicia o prazo. Reload é a única reinicialização completa anunciada.

Day mantém rascunho e último envio no registro diário. A primeira conclusão válida desse registro fixa completionDay; reenvio/edição do mesmo dia não cria outro evento nem renova um futuro artificial. Dias posteriores têm registros próprios. Limpar uma resposta em edição não apaga uma conclusão histórica válida ou seus pontos, mas oculta o resultado da edição ainda não enviada.

Ranking ordena pontos decrescentes, sem numeração de posições. Igualdade recebe indicação de empate; a ordem estável das linhas empatadas é apenas desenho. O saldo de Major vem do mesmo ledger exibido no extrato. População e nomes dos demais alunos são fixtures, sem pretensão de política pública de exposição.

## Escopo preservado e pendências

Mantidos módulos/aulas sem sequência, referência de oito aulas alterável, lives, gravações, Mediação, eventos próprios, histórico, aviso de edição de reunião, materiais e turmas exclusivamente on-line com capacidade local. Remover pré-requisitos II não remove atividades. WhatsApp continua externo e único, sem presumir retirada automática.

Ainda pendentes: 3FM integral; classificação/arredondamento e desempate Day; exposição/identificação/período/empate do ranking; encerramento/garantia; preços/parcelamento/descontos; reservas/cancelamento; presença; dados, calendário e operação. Exercícios reais, editor/resumos Day e aplicação autenticada não foram implementados.

Nenhum dos dez documentos oficiais inexistentes na main foi falsamente declarado alterado. Acrescentados AGENTS e DECISOES como recorte vigente desta rodada; sincronização completa de RF/RN/modelo/arquitetura/integrações segue recomendação registrada em DECISOES.

## Verificação e aprovação

19 testes da base foram executados antes de editar; suas expectativas antigas não aprovam a V2. Casos obsoletos foram reescritos com assertivas novas e negativas, preservando regressões. A suíte V2 tem 30 testes. Detalhes em TESTES_PROTOTIPO.md.

Navegador não está disponível: revisão visual/teclado não executada. Esta versão requer reteste técnico/QA e aceite expresso do cliente por SHA antes de nova autorização. Sem merge, publicação, preview externo, backend ou serviço pago.
