# Requisitos — recorte vigente V3

Fonte: instrução V3.0 do responsável, rodada de 21/10/2026, reproduzindo os textos do cliente. Este arquivo é um recorte aditivo para o protótipo; não é cópia integral do ZIP nem especificação de produção fechada. Prevalecem V3 e decisões V2 nos conflitos. Não restaurar 90% de vídeo, Day5, expiração aos seis meses ou pagamento II do ZIP.

## Apresentação 3FM

- REV3-01/02: usar integralmente a mensagem acolhedora e os cinco parágrafos editoriais fornecidos, título 3FM COM PROPÓSITO, subtítulo e botão COMEÇAR MINHA JORNADA. Fonte literal implementada em threeFMWelcome/threeFMIntroduction de app.js.
- REV3-03: ao iniciar/retomar, mostrar SEJA BEM VINDO(a) AO RECONEXÃO acima do local futuro do preenchimento. Retomada não exige reler a apresentação.
- REV3-04: instrumento real deve preservar respostas ausentes como ausentes, confirmar salvamento, informar falha, permitir retomada/correção individual antes da finalização, sem pontos por rascunho.
- A fonte integral não foi fornecida: na prévia só existe estado de etapa iniciada, não rascunho de respostas. Não criar campos genéricos nem 40 questões fictícias. Controle separado Concluir questionário — demonstração registra fixture única de 10 pontos, sem resultados.
- Uma conclusão por aluno continua vigente; edição após finalização/reabertura pendente.

## Saldo próprio

- REV3-05: dashboard do aluno, após saudação e antes dos conteúdos, exibe somente seu saldo fictício, derivado do mesmo ledger do extrato e elegibilidade.
- REV3-06: meta 200, percentual limitado 0..100, saldo completo preservado e restantes nunca negativos. Em 199 ainda não libera; em 200 libera II sem pagamento extra.
- REV3-07: Como ganhar pontos acessível por teclado com sete atividades e condições em REGRAS_NEGOCIO.
- Carga, erro e nova tentativa identificados como estados simulados. Erro não representa zero nem informa liberação.
- Ranking comparativo continua exclusivamente no Admin; não publicar saldo individual na Home pública.
- Estado financeiro, 3FM e Day atrasado precedem o dashboard. Atraso não apaga saldo/elegibilidade.

## Limites

Frontend estático não implementa autenticação, isolamento de dados ou autorização real. Fonte 3FM, classificação/desempates Day, fornecedores e edição pós-conclusão pendentes. Ver CRITERIOS_ACEITE e TESTES_PROTOTIPO. Sem autorização de merge/publicação.
