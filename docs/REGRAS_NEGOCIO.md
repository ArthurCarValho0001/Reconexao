# Aditivo V4 — regras REL-RN01 a REL-RN08

Origem: V4 integral do responsável,23/10/2026. Funcionalidade independente de 3FM/Day.

| ID | Regra implementada na demonstração |
|---|---|
| REL-RN01 | Campo só na Home do aluno, após gates gerais; nunca na Home pública |
| REL-RN02 | Envio opcional, sem exigir relato para navegar |
| REL-RN03 | Máximo1.000 caracteres visíveis, rejeitando vazio/branco e excesso |
| REL-RN04 | Identificado pela fixture Major, nunca nome digitado no formulário |
| REL-RN05 | Só tela Admin apresenta autor/conteúdo enviados |
| REL-RN06 | Sem histórico/consulta de enviados para aluno |
| REL-RN07 | Admin somente lê, sem resposta/conversa/edição/exportação |
| REL-RN08 | Sem pontos ou efeitos em saldo, barra, II, ranking ou prazo Day |

Proposta de contagem: grafemas estendidos Unicode (Intl.Segmenter pt-BR/grapheme). Espaços, pontuação e quebras contam; acento combinado, emoji com tom de pele ou família unidos contam como um. Texto armazenado sem trim/normalização/truncamento; trim só testa ausência de conteúdo. Colagem acima do limite permanece editável e não é enviada. Sem suporte ao segmentador, erro explícito e envio indisponível, sem fallback divergente.

Contrato futuro: cliente/servidor precisam adotar segmentação e versão Unicode compatíveis e os mesmos vetores de fronteira. Esta escolha é proposta demonstrativa, não biblioteca/stack de servidor aprovada.

Proteção a duplicidade apenas durante a tentativa em andamento e ao concluir o mesmo callback; novo envio posterior é permitido, sem quota diária inventada. Falha não cria registro, conserva rascunho e permite retentar. Não existe evento de pontuação para relato.

Prévia usa horário local ISO e apresenta America/Sao_Paulo explicitamente; não define política temporal da produção. Retenção/exclusão/abuso e acesso operacional seguem pendentes. Não prometer leitura em prazo ou resposta.

# Regras de negócio — recorte vigente V3

Origem: instrução V3 de 21/10/2026, decisões recentes V2 e regra de vídeo/live reproduzida na própria instrução V3. Recorte aditivo, sem revalidar regras antigas do ZIP.

## Participação

| Atividade | Pontos | Evento elegível | Unicidade |
|---|---:|---|---|
| 3FM com Propósito | 10 | 40 respostas válidas concluídas | Uma vez por aluno |
| Aula gravada | 10 | Pelo menos 40% de trechos únicos válidos assistidos | Uma vez por aula |
| Live ao vivo | 10 | Clique de acesso à live pela plataforma | Uma vez por live |
| Gravação de live | 10 | Pelo menos 40% de trechos únicos válidos assistidos | Uma vez por gravação, distinta da live |
| Exercício | 10 | Todos os itens respondidos e enviados; acerto não altera pontos | Uma vez por exercício |
| Reconexão Day | 10 | 12 respostas oficiais válidas | Uma concessão por aluno/dia de referência |
| Grupo WhatsApp | 10 | Clique de acesso ao grupo pela plataforma | Uma vez por aluno |

Repetir cliques/rever trechos não duplica; seek não conta como consumo de trechos; clique live não comprova ingresso/permanência externa. Parciais não pontuam. Day é inicial e recorrente: sem bônus independente Inicial/30 dias. Conclusão válida pode renovar prazo, com crédito limitado diariamente. Notas/reflexões não geram bônus.

Protótipo: sem telemetria real, formulário 3FM integral ou exercícios oficiais. Botões de vídeo apenas representam condição fictícia de 40%; não medem reprodução. Fixture 3FM e botão separado compartilham chave única; não simulam submissão real.

## Meta e acesso

Saldo = soma do ledger; meta 200; percentual = min(100,max(0,saldo/200*100)); faltantes = max(200-saldo,0). II liberado exatamente a partir de 200, sem cobrança ou condições cumulativas antigas. Saldo 230 continua 230, barra 100%. Fronteiras não são pontos concedidos manualmente na interface.

Pagamento único. Acesso enquanto programa existir, seis meses mínimos desde contratação; liberação de acesso é marco distinto. Navegação: financeiro/liberação → 3FM → Day atrasado → tela solicitada. Day: primeira referência liberação; depois última conclusão válida +30; parcial não renova. Dias relativos no protótipo, corte/fuso reais pendentes.

Ranking apenas Admin. Próprio saldo disponível ao aluno não autoriza expor outros alunos. Rascunho 3FM é corrigível antes do envio; uma conclusão por aluno, sem política de reabertura inventada.
