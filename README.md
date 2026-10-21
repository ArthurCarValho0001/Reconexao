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
