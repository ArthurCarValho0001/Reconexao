# Aditivo V4 — relato opcional na Home

Fonte: instrução integral V4 do responsável,23/10/2026. Complemento aos recortes anteriores, sem importar regras obsoletas do ZIP.

- REL-RN01/02: formulário opcional na Home do aluno após gates gerais, depois do saldo/barra e antes dos conteúdos. Ausência de relato não bloqueia plataforma; página pública sem formulário.
- REL-RN03: textarea multilinha, contador coerente e limite de 1.000 caracteres visíveis. Rejeitar vazio/branco e excesso sem truncar colagem ou perder texto.
- REL-RN04/05: autoria da identidade da sessão na aplicação real; na prévia fixture Major. Consulta exclusivaAdmin com autor, data/hora e texto integral.
- REL-RN06/07: aluno não consulta enviados (nem próprios); Admin somente lê. Sem resposta, chat, edição, análise IA, e-mail/WhatsApp ou exportação.
- REL-RN08: envio não pontua e não altera barra, ranking, II ou prazo Day.
- Estados: digitando, enviando com proteção a clique repetido, sucesso confirmado limpando campo, erro preservando texto/nova tentativa, listaAdmin vazia.
- Texto simples escapado; preservar quebras e Unicode. Disclaimers de dados fictícios/envio simulado, não acompanhado em tempo real.
- Prévia: armazenamento só em memória desta visita, sem rede/storage/logs. Não comprova autorização/persistência reais. Fonte 3FM ausente e demais pendências preservadas.

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
