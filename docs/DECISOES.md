## Rodada V3 — 21/10/2026

Fonte direta: instrução V3 integral nesta conversa, que reproduz os textos do cliente e as regras do aditivo V1.1. O DOCX original não foi anexado nesta rodada; não foi alegada inspeção independente da imagem ou de seu conteúdo. ZIP antigo não prevalece sobre as decisões recentes.

- REV3-01/02: mensagem acolhedora e apresentação literal; COMEÇAR MINHA JORNADA.
- REV3-03: saudação literal ao iniciar/retomar, sem releitura obrigatória.
- REV3-04: correção/retomada de rascunho antes de finalizar é requisito; BLOQUEADO no instrumento enquanto faltar a fonte integral. A implementação retoma só a etapa visual, sem perguntas/respostas fabricadas.
- REV3-05/06: próprio saldo no dashboard, meta200, barra limitada e saldo completo, sem ranking de terceiros.
- REV3-07: regras dos sete eventos. Consumo de vídeo40% de trechos únicos válidos; live pontua clique. Textos90% antigos substituídos sem simular telemetria real.
- Edição 3FM após conclusão permanece pendente; fixture única, sem reaplicação ou cálculos. Ranking segue Admin.
- Nova branch a partir do merge PR #3; nenhuma autorização anterior vale para publicação desta rodada.

Recortes aditivos de negócio adicionados, sem afirmar consolidação integral do ZIP nem arquitetura/DDL aprovados. Registro anterior preservado abaixo.

## Decisões posteriores ao PR #2

- Origem: solicitação expressa do responsável nesta conversa. Ranking de engajamento visível **somente ao Administrador**. Substitui a pendência de perfil de visualização da V2; período, elegíveis, identidade e desempate permanecem pendentes.
- Autoriza-se botão “Concluir questionário — demonstração” na própria tela obrigatória 3FM, em seção técnica identificada. Não é recurso de produção, submissão real ou cálculo do instrumento. Registra a mesma fixture de 10 pontos uma vez; respeita pagamento e Day.
- PR #2 mesclado em `31db5f0ae34beee0b15d72a0e0dc5e00e34e9dad` após autorização. Esta correção é outra rodada e não herda autorização de merge/publicação.

O registro histórico V2 segue abaixo; decisões acima prevalecem nos pontos específicos.

# Decisões vigentes — protótipo V2

Origem: documento V2.0 fornecido integralmente pelo responsável na solicitação desta rodada, após reunião com o cliente. Regras funcionais aprovadas; implementação limitada a simulações. Base consultada: `main` em `1bd7f0050c55abfb49d8d318f9c0236b430f31b5`, merge do PR #1.

| ID | Regra vigente | Substituição pontual |
|---|---|---|
| REV2-01 | Aluno e Administrador | Membro como tratamento |
| REV2-02 | Pagamento único, sem cobrança adicional II | Renovação compulsória e novo pagamento II |
| REV2-03 | Acesso enquanto durar o programa, seis meses mínimos desde contratação | Expiração automática aos seis meses |
| REV2-04 | 3FM é a primeira atividade obrigatória após acesso liberado | 3FM incapaz de bloquear navegação |
| REV2-05 | Day é inicial e acompanhamento recorrente, separado do 3FM | Instrumentos Inicial/30 dias independentes |
| REV2-06 | Day12 diário permitido, intervalo máximo de 30 dias | Day inteiramente voluntário sem bloqueio |
| REV2-07 | Primeiro prazo desde a liberação de acesso | Contagem desde outro instrumento |
| REV2-08 | Última conclusão válida renova prazo móvel | Ciclos fixos 30/60/90 |
| REV2-09 | Atraso emite comunicado e exige Day para navegar | Acompanhamento sem obrigação |
| REV2-10 | II automático por >=200 pontos, sem segunda cobrança | Aulas/Mediação/questionários/pagamento como condições extras |
| REV2-11 | Ranking de engajamento por pontos | Ausência de ranking; não autoriza comparar notas educativas |

As atividades e seus eventos de pontos permanecem; aulas e Mediação deixam apenas de ser condições específicas do II. A aquisição continua dependente de pagamento confirmado. Estorno/chargeback, história, privacidade, sessão única, servidor como autoridade e regras específicas de exclusão continuam no escopo da futura aplicação.

## Proposta técnica da simulação

O estado inicial usa acesso confirmado/liberado no dia 0 e 3FM pendente. Controles técnicos ficam em tela separada. A fixture 3FM concede 10 uma única vez e não produz respostas/resultados. Troca de cenário e retorno à entrada não reiniciam datas; reload reinicia toda a memória, conforme aviso.

Prazo usa dias relativos: limite 30 permitido; dia 31 atrasado. É proposta para apresentar o comportamento, não definição de timestamp/fuso de produção. Contratação e liberação são marcos separados. A última conclusão é derivada de registros Day validados, não da abertura da tela ou do 3FM.

## Pendências preservadas

Fonte integral 3FM e vetores; precisão/classificação e desempate Day; exposição, identificação, população, período e empate do ranking; encerramento do programa/garantias; reservas/cancelamentos; fonte da presença; políticas de dados/retenção e operação WhatsApp; preços/parcelamento/descontos; arquitetura/fornecedores e calendário da produção. Não inferir novas regras.

## Documentação de negócio ainda a sincronizar

Os dez documentos oficiais do ZIP anterior não estavam versionados na main. Esta rodada inclui AGENTS e este registro focal das decisões, além de revisão e testes; não afirma ter alterado arquivos ausentes como MODELO_DADOS, ARQUITETURA ou INTEGRACOES.

Ao consolidar esses documentos, preservar IDs e registrar superação pontual: RF-005/040–045/061–065/070–074, RN-001/003/020–022/030–031/040–043/052–053, eventos Inicial/30 dias, CA-016/020–022/040–044/060–061. Modelagem e contratos deverão separar aquisição, bloqueio pedagógico e elegibilidade II; ranking deriva do ledger. O resto do escopo permanece, sem aprovação técnica implícita.

O PR #1 é histórico mesclado. A V2 requer novo PR draft, revisão técnica/QA, apresentação e aceite do cliente por SHA, seguidos de autorização do responsável. Nenhuma publicação é autorizada por este documento.
