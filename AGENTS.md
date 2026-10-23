## Rodada vigente V4 — relato opcional (23/10/2026)

Instrução V4 integral do responsável nesta conversa. Branch feature/v4-relato-aluno, base main 1fbc32698c45bd6ef669ff36a07b5da207269660. Autorizações anteriores não valem para merge/publicação desta rodada.

Relato apenas na Home do aluno com navegação liberada, opcional, até 1.000 grafemas visíveis (Intl.Segmenter, sem truncamento silencioso); identificado pela fixture Major, sem nome manual. Admin apenas lê; aluno não consulta enviados. Nada de resposta/chat, análise, exportação ou pontos. Manter saldo/barra, ranking Admin, Day e 3FM.

Somente dados fictícios e memória desta visita, sem storage, rede ou logs do relato. Ocultar tela não implementa privacidade. Estado sending bloqueia duplicidade acidental; falha preserva texto. Testar limites/Unicode/HTML e ausência de efeitos em pontos/Day. Documentar contagem como proposta de contrato, fuso demonstrativo explícito e requisitos de servidor ainda não implementados. Nova revisão draft; nunca publicar automaticamente.

## Rodada vigente V3 — 21/10/2026

A instrução V3 fornecida nesta conversa prevalece nos pontos modificados. Branch feature/v3-acolhimento-3fm-pontos, base main b4654b89d24f1690486c981d49901da3768fdcc9 (PR #3 mesclado). Não reaproveitar autorização anterior de merge/publicação.

Preservar textos literais 3FM em threeFMWelcome/threeFMIntroduction, botão COMEÇAR MINHA JORNADA e saudação. Sem fonte integral, início/retomada representam somente etapa visual; não inventar formulário, respostas ou confirmação de salvamento. Rascunho real segue bloqueado. Conclusão fictícia separada mantém 10 uma vez e gates.

Saldo próprio no início do dashboard; meta 200; barra min/max sem arredondar elegibilidade; regras dos sete eventos com vídeo40% de trechos únicos e liveclique. Carga/erro são cenários explícitos e não alteram ledger. Ranking somente Admin. Novos documentos REQUISITOS/REGRAS_NEGOCIO/CRITERIOS_ACEITE/MODELO_DADOS são recortes aditivos, não transcrição integral do ZIP nem aprovação de arquitetura.

## Ajuste vigente após PR #2

Ranking somente para Administrador, inclusive por roteamento e função de apresentação. A solicitação mais recente autoriza botão de conclusão fictícia na própria tela 3FM, separado como “Somente demonstração”, sem perguntas/resultados inventados. Compartilhar chave idempotente de 10 pontos com a fixture anterior; não contornar financeiro ou atraso Day. Branch desta rodada: `fix/ranking-admin-conclusao-demonstrativa`. Nova autorização necessária para merge/publicação.

# Reconexão — instruções do protótipo V2

Esta branch contém somente demonstração HTML/CSS/JavaScript. A instrução V2 fornecida pelo responsável nesta tarefa prevalece sobre trechos conflitantes dos pacotes anteriores. Requisitos de produção não estão integralmente fechados.

## Fontes e regras vigentes

Leia primeiro `docs/DECISOES.md`, `docs/REVISAO_PROTOTIPO.md` e `docs/TESTES_PROTOTIPO.md`. A fonte educativa Day é `Reconexao_Day_Especificacao_Funcional_V1.pdf`: os 12 enunciados, seis dimensões, escala 0–4 e catálogo literal estão preservados em `daySpec`, em `app.js`. A V2 modifica obrigatoriedade/periodicidade, não as fórmulas.

- Usar Aluno/Administrador. Preservar logo, favicon e paleta azul profundo, verde-petróleo e verde-folha enviados pelo cliente.
- Pagamento único. Acesso enquanto o programa existir, com seis meses mínimos garantidos desde a contratação; não expirar automaticamente aos seis meses nem criar renovação compulsória.
- Estado financeiro/liberação → 3FM obrigatório → Day atrasado → tela solicitada. Todos os atalhos devem respeitar o mesmo bloqueio demonstrativo.
- 3FM: 40 perguntas, cinco dimensões, quatro pilares, uma conclusão e 10 pontos uma vez. Fonte integral ausente: somente tela pendente e fixture técnica explicitamente identificada. Não inventar perguntas ou resultados.
- Day é o inicial e acompanhamento recorrente. Primeiro limite = liberação +30 dias; seguintes = última conclusão válida +30. Parcial não renova nem pontua. Uma concessão de 10 por conclusão diária, inclusive doze respostas zero.
- Dias relativos: dia limite permitido, seguinte atrasado, apenas como proposta de demonstração. Fuso/corte diário reais continuam pendentes.
- Reconexão II: somente saldo >=200, sem pagamento adicional ou critérios cumulativos antigos. Bloqueio pedagógico não apaga elegibilidade/pontos.
- Ranking: apenas pontos fictícios de engajamento, empates explícitos, sem notas/reflexões ou regra pública de exposição presumida.
- Preservar atividades, eventos idempotentes, histórico, aulas sem sequência, turmas exclusivamente on-line e correções QA-P01/P02/P03.
- Ajuda/privacidade, saída e controles técnicos devem permanecer acessíveis. Não aplicar bloqueio pedagógico ao Administrador.

## Execução e aprovação

Inspecionar estado remoto antes de escrever. O PR #1 está mesclado; não reabrir. Esta rodada usa `feature/revisao-requisitos-acesso-day-ranking`. Apresentar arquivos, dependências e critérios antes de editar. Sem novas bibliotecas, serviços pagos, backend, credenciais ou dados reais.

Executar `node --check app.js` e `node --test tests/prototype.test.cjs`; registrar também revisão visual/teclado executada ou indisponibilidade. Testes em VM não validam segurança ou navegador real.

Abrir/atualizar PR draft. Não mesclar, publicar, mudar Pages ou criar preview externo. Autorização de merge do PR #1 não se estende à V2. Revisão técnica/QA e aceite do cliente sobre SHA precedem nova autorização do responsável.
