# Aditivo conceitual V4 — RelatoAluno

Proposta mínima, não DDL ou stack aprovados. Manter relato separado de respostas3FM/Day e do ledger de pontos.

| Campo conceitual | Finalidade |
|---|---|
| Identificador | Identificar o registro sem autorizar consulta por conhecimento do ID |
| AlunoId | Referência ao cadastro, obtida da sessão no servidor, não do payload manipulável |
| Texto | Texto simples até 1.000 grafemas, preservando conteúdo/quebras |
| EnviadoEm | Instante confiável do servidor; fuso de apresentação definido em contrato |

Somente permissão administrativa específica permite ler autor/texto. Aluno envia, mas não tem GET de lista/detalhe nem próprios; não aceitar alunoId para decidir autoria. Não disparar evento de pontos. Retenção, exclusão, acesso operacional, índices e política técnica antirreplay/abuso devem ser definidos antes da produção. Não assumir retenção ilimitada. Não registrar corpo em logs comuns ou telemetria de falha.

Prévia: reportDemo.records guarda id,studentId,studentName,text,sentAt apenas na memória. Identidade vem de demoStudent (Major); não é sessão real. pending captura autor/texto no início para não trocar autoria ao navegar durante envio. Relógio local ISO apenas demonstrativo; exibição explícita America/Sao_Paulo. Não há storage/rede; reload elimina registros/rascunho. Restrição de tela não torna esses dados privados.

# Modelo de dados — recorte proposto V3

Proposta conceitual para discussão, não DDL, banco ou arquitetura aprovados. Protótipo usa memória de uma única visita; não persiste nem autentica.

## Vínculos futuros necessários

- Aluno autenticado: identidade da sessão, não parâmetro manipulável para escolher outro saldo.
- Instrumento e versão: catálogo oficial e histórico versionados. 3FM e Day são diferentes.
- Rascunho: aluno + instrumento/versão + respostas por item; ausente não é zero. Estado de confirmação/erro de salvamento deve refletir persistência do servidor. Retomada/correção somente antes da conclusão enquanto reabertura não for definida.
- Conclusão: evento validado, data de referência do servidor, histórico e auditoria. 3FM uma por aluno; Day registros sucessivos preservados, sem replay criando novas datas.
- Evento de pontos: aluno, tipo, recurso/contexto, chave idempotente, pontos aprovados, data de referência e auditoria; unicidade por aluno/evento. Day inclui data de negócio; live e gravação usam eventos distintos.
- Consumo de vídeo: proposta de agregação de intervalos únicos validados; seek não é consumo. Fonte/telemetria e integração ainda dependem de decisão.
- Acesso: contratação, confirmação e liberação separados; garantia comercial distinta do relógio Day. Não expirar automaticamente aos seis meses.
- Saldo: deriva do ledger. Barra/percentual/faltantes não criam novo tipo de ponto, nem convertem notas de questionário. Ranking somente Admin deriva do mesmo histórico; aluno recebe só seus dados.

## Estado da prévia

demo.ledger é a fonte de saldo e progression. ownPointsProgress apenas deriva meta, barra e faltantes. pointsView é estado de apresentação loading/error/ready, não altera eventos ou acesso. threeFMStarted/threeFMViewIntro guardam somente a etapa visual nesta visita; não são respostas ou rascunho do instrumento. Botão de conclusão é fixture explícita, não grava 40 respostas.

Persistência autenticada, isolamento entre alunos, idempotência concorrente, auditoria real e política temporal precisam ser implementados e testados no servidor. Não há endpoints, fornecedores ou nova stack definidos por este recorte.
