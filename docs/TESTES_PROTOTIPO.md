# Evidências V3 — 21/10/2026

Base b4654b89d24f1690486c981d49901da3768fdcc9; branch feature/v3-acolhimento-3fm-pontos. Versão testada: conteúdo dos arquivos enviado no head do PR desta rodada; conferir SHA no PR. Não herdar resultados de versão posterior.

- Antes da mudança: 33/33 da base passaram.
- node --check app.js: PASSOU.
- node --test tests/prototype.test.cjs: PASSOU, 42/42 (33 regressões +9 novos testes).
- git diff --check dos arquivos desta rodada: PASSOU.
- Catálogo/cálculos Day e logo/index/assets preservados.
- Tentativa Playwright chromium.launch: BLOQUEADA por executável ausente em chromium_headless_shell-1234. Desktop/mobile/teclado NÃO EXECUTADOS; sem screenshots. CSS responsivo, summary nativo e ARIA conferidos só por código.

| Critério | Esperado/observado | Resultado |
|---|---|---|
| REV3-CA01/02 | Apresentação acolhedora, 40 perguntas/cinco dimensões/quatro pilares, convite sem remover gate | PASSOU em VM/inspeção literal |
| REV3-CA03/05 | Começar mostra saudação, retorno preserva etapa; nenhum input/formulário fabricado; fixture separada | PASSOU na prévia; formulário bloqueado |
| REV3-CA04 | Rascunho de respostas/correção e falha de salvamento | NÃO IMPLEMENTADO/TESTADO: fonte integral ausente |
| REV3-CA06/07/10 | Bloco antes de conteúdo; 0/10/100/199/200/230 geram0/5/50/99,5/100/100%;199 falta1,230 mantém saldo | PASSOU |
| REV3-CA08/09 | Mesmo ledger no bloco/extrato/II; evento repetido não duplica | PASSOU |
| REV3-CA11 | Sete eventos, vídeo40%únicos/liveclique; sem bônusInicial/30dias, explicação nativa expansível | PASSOU |
| REV3-CA12 | Bloco próprio sem nomes/saldos de outros alunos; ranking Admin preservado | PASSOU em VM; segurança/isolamento reais NÃO TESTADOS |
| REV3-CA13 | Erro/carga sem bar/zero/liberação falsa; retentar mantém230 | PASSOU, consulta local fictícia |
| REV3-CA14 | 3FM e Day impedem dashboard;230/pontos e elegibilidade preservados | PASSOU |
| REV3-CA15 | Mobile/desktop/teclado em navegador | NÃO EXECUTADO (Chromium ausente) |
| REV3-CA16 | Branch/PRdraft sem merge/publicação | Conferir PR desta rodada; aguardar cliente/responsável |

Roteiro manual pendente: em1440px e390px, conferir saudação, leitura/scroll do texto, botão de começo/retomada e fixture; no dashboard conferir ordem do bloco, expansão/fecho por Tab/Enter/Espaço, foco visível, progressbar/texto e estados de consulta. Confirmar gate Day, nenhuma exposição de ranking ao aluno e regressões Admin.

Os registros anteriores seguem históricos abaixo; não representam revisão visual ou segurança real desta V3.

## Reteste da correção após PR #2

Branch `fix/ranking-admin-conclusao-demonstrativa`, base `31db5f0ae34beee0b15d72a0e0dc5e00e34e9dad`; identificar a versão testada pelo head do PR desta correção. Arquivos enviados devem coincidir com os executados localmente.

- `node --check app.js`: PASSOU.
- `node --test tests/prototype.test.cjs`: PASSOU, 33/33 (30 regressões e três novos casos).
- Ranking: menu/rota Admin disponíveis; aluno não recebe tabela/dados por menu, rota ou função; saldo e empates preservados.
- Botão técnico 3FM: seção explícita, conclusão fictícia abre visão geral, crédito de 10 idempotente inclusive com fixture anterior; não altera prazo Day.
- Negativos: pagamento pendente/perfil incorreto não concluem; Day vencido continua obrigatório após fixture 3FM.
- Revisão visual/mobile/teclado: NÃO EXECUTADA nesta correção; sem evidência nova de navegador.

Roteiro atualizado: entrar como aluno, clicar “Concluir questionário — demonstração” e conferir a visão geral; entrar como Admin e abrir “Ranking de engajamento”. Não há ranking na área do aluno. Não publicar sem nova autorização.

As evidências e instruções V2 abaixo são históricas; este ajuste prevalece nos pontos modificados.

# Testes V2 — evidências e roteiro

Escopo: HTML/CSS/JavaScript com memória local, dados e respostas fictícios. Base 1bd7f0050c55abfb49d8d318f9c0236b430f31b5. A versão da entrega é o head do novo PR draft; registrar git rev-parse HEAD ao retestar, sem presumir que testes aprovam mudanças posteriores.

## Execuções

- Antes da edição: 19/19 testes da main passaram. Cobriam regras anteriores, algumas agora substituídas.
- node --check app.js: PASSOU.
- node --test tests/prototype.test.cjs: PASSOU, 30/30.
- A suíte usa node:vm, funções/handlers reais e DOM/FormData mínimos. Não é navegador, segurança de servidor, pagamento ou teste de concorrência.
- Tentativa de iniciar Chromium/Playwright: BLOQUEADA por executável ausente. Não há navegador instalado, captura visual ou revisão desktop/mobile/teclado executada.
- index.html e asset da marca não são modificados nesta revisão; referência de favicon é verificada na suíte. Estilos anteriores preservados, acrescidos apenas controles/prazo/comunicado.

## Aceite por cenário

| Critério | Esperado e observado na simulação | Resultado |
|---|---|---|
| RV2-CA01 | Tratamento Aluno; nenhuma função nova usa membro como público; variáveis members não foram renomeadas sem motivo | Conferido por inspeção e teste textual |
| RV2-CA02/03 | 3FM pendente força tela obrigatória em aulas, Day, II, ranking e atalhos; não há perguntas/resultados inventados; ajuda/saída funcionam | PASSOU em VM |
| RV2-CA04/05 | Fixture completa deixa navegar dentro do prazo; crédito de 10 único; completar 3FM no dia 22 mantém limite Day 30 | PASSOU |
| Financeiro | Pagamento pendente/liberação nula precedem gate 3FM; liberar no dia 8 preserva contratação dia 0 e produz limite 38 | PASSOU |
| RV2-CA06/07 | Day dia 8 →38; nova conclusão dia 15 →45; rascunho dia 20 não altera | PASSOU |
| RV2-CA08/09 | 11/12 não conclui/pontua/renova; 12 zeros concluem e concedem 10 uma vez | PASSOU |
| RV2-CA10/11 | Dia limite 45 permitido; dia 46 comunicado/gate; conclusão nesse dia libera e muda limite para 76 | PASSOU |
| RV2-CA12 | Salvar parcial/abrir aviso/atalho não libera nem renova; crédito de WhatsApp não é concedido durante bloqueio | PASSOU |
| RV2-CA13/14 | Reenvio/edição da mesma conclusão não duplica; troca de cenário/retorno à entrada preservam prazo; envio futuro sem novo registro não fabrica conclusão | PASSOU |
| RV2-CA15/16 | 199 bloqueia II; 200 libera sem extras mesmo com atividades incompletas; atraso posterior conserva saldo/elegibilidade, bloqueando apenas navegação | PASSOU |
| RV2-CA17 | Dia 240 não revoga contrato; Day regularizado permite acesso sem renovar/pagar II | PASSOU |
| RV2-CA18/19 | Ranking usa saldo do extrato, repetição não infla, empate explícito e nenhuma resposta/NG/dimensão/resultado individual | PASSOU |
| RV2-CA20 | Dois instrumentos; flags/eventos Inicial/30 dias/pagamento II removidos; catálogo Day permanece distinto do 3FM | PASSOU |
| RV2-CA21 | Aula/módulo despublicado bloqueado; agenda e aviso refletem edição; URL preservada/reaberta; esquema inválido não apaga aula | PASSOU |
| RV2-CA22 | Logo/favicon/paleta preservados; Home sem Conhecer ou ranking público; sem presencial/III/chat | Código/referências conferidos; visual pendente |
| RV2-CA23 | Novo gate, prazo, Day e ranking em desktop/mobile/teclado | NÃO EXECUTADO, navegador indisponível |
| RV2-CA24 | Branch separada e PR draft; sem mudança main/Pages, integração ou dado real | Conferir versão/estado do PR na entrega |

Os extremos Day 0/4, par 2+4=3, NG exata 43/12, empate sem decisão inventada, campos inválidos, rascunho retomável, idempotência dos eventos e jornada alcançável de 200 também permanecem na suíte. A jornada usa fixture explícita 3FM e eventos elegíveis; não há concessão manual de saldo no produto. Fixtures de 199/200 nos testes isolam somente o limite.

## Limitações

3FM integral, respostas parciais desse instrumento e seus resultados continuam BLOQUEADOS. A fixture não aprova aplicação/correção de 40 respostas. Calendário e data do servidor continuam ausentes; o relógio relativo não valida virada diária real.

Fronteiras/classificação e desempate Day, ranking público/período, encerramento/garantia, reservas/operação/dados continuam pendentes. Backend, autenticação, IDOR, sessão única, pagamento real, acesso por estorno, telemetria, persistência e concorrência não foram implementados ou testados.

## Roteiro de apresentação após reteste técnico/QA

Em cópia local limpa da branch, registrar o SHA, executar a suíte e servir somente localmente:

~~~sh
git clone --branch feature/revisao-requisitos-acesso-day-ranking --single-branch https://github.com/ArthurCarValho0001/Reconexao.git reconexao-v2
cd reconexao-v2
git rev-parse HEAD
node --test tests/prototype.test.cjs
python -m http.server 8000 --bind 127.0.0.1
~~~

Abrir http://127.0.0.1:8000 e compartilhar a tela; não trocar origem do Pages.

1. Entrar como aluno: conferir gate 3FM sem botão normal de pular; testar menu, atalhos, ajuda e saída.
2. Abrir controles técnicos, mostrar que é fixture de apresentador e selecionar conclusão fictícia 3FM. Conferir 10 pontos uma única vez, sem resultados inventados.
3. Concluir Day antecipadamente, avançar relógio, salvar rascunho, sair/reentrar e verificar que somente conclusão válida renova prazo.
4. Ultrapassar o limite: conferir comunicado e bloqueio inclusive em II/ranking; concluir 12 zeros e verificar liberação, histórico, pontos e novo prazo.
5. Alcançar 200 por eventos; verificar II sem segunda cobrança e ranking coerente com extrato/empates. Não exibir reflexões.
6. Retestar Admin → despublicação de aula/módulo, edição de reunião/aviso e URL. Administração deve continuar acessível mesmo com aluno pendente.
7. Em 1440px e 390px, revisar rolagem, recortes, modais, foco Tab/Shift+Tab, seleção Day, comunicado anunciado e acesso aos controles/saída. Registrar resultado real; não herdar PASSOU da VM.
8. Recarregar: todos os dados locais voltam ao cenário inicial anunciado.

Aguardar reteste técnico/QA e aceite expresso do cliente sobre o SHA. Nova autorização é obrigatória para merge/publicação. Não reabrir PR #1, criar preview externo ou contratar serviços nesta etapa.
