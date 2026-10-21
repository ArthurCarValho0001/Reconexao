# Reconexão — revisão demonstrativa V3 (21/10/2026)

Branch: feature/v3-acolhimento-3fm-pontos. Base: b4654b89d24f1690486c981d49901da3768fdcc9. Esta rodada não autoriza merge/publicação.

## O que mudou e como apresentar

1. Entrar como aluno: ler apresentação acolhedora literal do cliente e usar COMEÇAR MINHA JORNADA. A etapa seguinte mostra saudação e local futuro do formulário. Ao sair e voltar, retoma a etapa sem releitura. A fonte integral continua ausente: nenhuma resposta foi solicitada/salva.
2. Usar o controle separado Concluir questionário — demonstração: mesma fixture única de 10 pontos, sem resultado 3FM. Abre dashboard se financeiro/Day regulares.
3. Logo após saudação, conferir Seus pontos: saldo fictício próprio do ledger, barra/meta200 e pontos restantes; Como ganhar pontos abre regras completas em lista acessível.
4. Eventos fictícios de aula/live/gravação/Day/WhatsApp atualizam saldo/barra sem duplicar. Vídeos agora indicam condição de 40% de trechos únicos válidos, sem medição real. Clique live não comprova permanência externa. Exercícios e 3FM integral continuam sem formulário oficial.
5. Nos controles técnicos, simular carga/erro de consulta de pontos e voltar à visão geral. Erro não exibe saldo zero ou liberação; Tentar novamente restaura consulta ao ledger em memória, sem API.
6. Ranking comparativo permanece apenas em Painel administrativo → Ranking de engajamento; aluno só vê o próprio saldo.

Só a etapa visual iniciada é retomada no 3FM. Rascunho de respostas, correção individual e falha de salvamento do instrumento aguardam a fonte oficial; não foram anunciados como implementados. Reload reinicia todos os dados. Edição após conclusão permanece pendente.

42 testes automatizados aprovados; revisão visual desktop/mobile/teclado não executada (Chromium ausente). Ver docs/TESTES_PROTOTIPO.md. Logo/paleta/favicon e Day oficial preservados.

[Requisitos V3](docs/REQUISITOS.md) · [Regras vigentes](docs/REGRAS_NEGOCIO.md) · [Aceite V3](docs/CRITERIOS_ACEITE.md) · [Modelo conceitual](docs/MODELO_DADOS.md)

Os registros anteriores seguem abaixo como histórico; esta seção prevalece sobre regras de apresentação, vídeo e estado da rodada.

## Ajuste posterior ao PR #2

O ranking aparece exclusivamente em **Painel administrativo → Ranking de engajamento**. Menu, roteamento e função de apresentação do aluno não exibem os dados. Isso é restrição demonstrativa de frontend, não autorização real de servidor.

Para testar sem o original 3FM: **Área do aluno → Somente demonstração → Concluir questionário — demonstração**. O botão marca somente a fixture técnica, concede 10 pontos fictícios uma vez e abre a visão geral (ou exige Day se já estiver atrasado). Não preenche nem calcula 40 respostas. Os controles técnicos anteriores continuam disponíveis e compartilham o mesmo evento idempotente.

Esta nova rodada usa `fix/ranking-admin-conclusao-demonstrativa`, com PR draft, sem autorização automática de novo merge/publicação. Os trechos V2 abaixo são o registro da entrega anterior; este ajuste prevalece sobre a visibilidade indefinida do ranking e a exigência de acessar a fixture somente pela tela de cenários.

# Reconexão — protótipo navegável V2

Demonstração estática em HTML/CSS/JavaScript, com dados fictícios e logo/paleta fornecidas pelo cliente. Branch de revisão: feature/revisao-requisitos-acesso-day-ranking. O PR #1 foi mesclado na versão anterior; esta rodada exige outro PR draft e nova aprovação.

## Regras demonstradas

- Aluno e Administrador.
- Pagamento único. Acesso enquanto o programa estiver disponível, com seis meses mínimos garantidos desde a contratação. Sem expiração automática aos seis meses, renovação compulsória ou cobrança do II.
- Depois de liberar o acesso, 3FM é a primeira atividade obrigatória. Enquanto pendente, as demais telas educacionais não abrem.
- Day12 é o questionário inicial e o acompanhamento recorrente. Pode ser respondido diariamente. Primeiro limite: liberação do acesso +30 dias; próximos: última conclusão válida Day +30.
- No relógio fictício, o dia limite é permitido e o dia seguinte está atrasado. Atraso mostra comunicado e exige concluir Day para navegar. Rascunho não regulariza, não pontua e não renova prazo.
- Cada conclusão Day concede 10 uma vez por dia. Doze respostas zero são válidas. Não há créditos extras por rótulos Inicial ou 30 dias.
- Reconexão II é liberado automaticamente com 200 pontos, sem condições extras de aulas/Mediação/questionários ou pagamento. Pendência pedagógica bloqueia navegação, sem apagar saldo/elegibilidade.
- Ranking ilustrativo usa somente pontos de engajamento, refletindo o mesmo saldo do extrato. Empates explícitos, sem posições competitivas inventadas ou divulgação de métricas educativas.

## Como demonstrar

Entrar na Área do aluno abre a tela obrigatória 3FM. A demonstração começa com acesso fictício confirmado/liberado no dia 0, contratação no dia 0 e 3FM pendente.

O banner permite Sair, consultar Ajuda e privacidade e abrir Controles técnicos do apresentador, mesmo durante bloqueios. Esses controles estão separados do fluxo normal do aluno e não são uma funcionalidade de produção.

Nos controles técnicos, selecionar “3FM concluído — estado fictício de demonstração” permite revisar as telas seguintes. Essa fixture registra 10 pontos uma única vez, sem simular 40 respostas validadas. Não há resultado 3FM calculado. É possível mudar o estado financeiro e avançar o relógio em um ou 30 dias; retornar à entrada ou alternar o cenário não apaga histórico ou reinicia o prazo.

Exemplo: concluir Day no dia 8 produz limite 38; concluir novamente no dia 15 muda para 45. Dia 46 exige Day; salvar só 11 respostas mantém o atraso. Concluir as 12 no dia 46 libera navegação e produz limite 76.

As respostas parciais ficam somente na memória da visita e retornam ao navegar entre telas permitidas. Recarregar reinicia toda a demonstração. Não informe dados pessoais ou reflexões reais.

## Preservado

Logo, favicon e paleta azul profundo/verde-petróleo/verde-folha; Home Aluno/Admin sem Conhecer; módulos e aulas publicadas sem sequência; referência de oito aulas alterável; lives/gravações e Mediação; pontos por evento; histórico; materiais/avisos; turmas exclusivamente on-line e capacidade local; WhatsApp como única comunidade externa; correções QA-P01/P02/P03 (publicação, agenda/aviso, URL do vídeo).

Painéis e registros administrativos continuam fictícios. Inatividade e pendência Day não significam expiração contratual. Atraso ou seis meses não removem automaticamente alunos do WhatsApp. Restrições de publicação são da demonstração, não autorização segura de servidor.

## Limitações

Fonte integral do 3FM ainda ausente: sem perguntas, rascunho real, mapeamentos, fórmulas ou devolutivas desse instrumento. Somente gate e fixture técnica. Motor Day oficial foi preservado; classificação de valores entre intervalos e desempate de devolutivas permanecem pendentes. Exemplos do ranking não definem visibilidade, identidade pública, período ou elegíveis.

Encerramento do programa/garantia, descontos, preços/parcelamento, reservas/cancelamento, fonte de presença, calendário da produção, dados e operação permanecem pendentes. Exercícios, resumos/editor Day e demais funcionalidades reais não foram implementados nesta rodada.

Sem backend, autenticação, checkout, banco, telemetria real de vídeo, autorização segura ou concorrência testada. Nenhum serviço contratado ou infraestrutura criada.

## Verificação e apresentação local

~~~sh
node --check app.js
node --test tests/prototype.test.cjs
python -m http.server 8000 --bind 127.0.0.1
~~~

Abrir http://127.0.0.1:8000. Não trocar a origem do Pages oficial, nem publicar esta branch. Revisão técnica/QA, apresentação e aceite expresso do cliente por SHA precedem nova autorização de merge/publicação. A autorização anterior do PR #1 não vale para esta rodada.

[Decisões](docs/DECISOES.md) · [Comparação V2](docs/REVISAO_PROTOTIPO.md) · [Evidências e roteiro](docs/TESTES_PROTOTIPO.md).
