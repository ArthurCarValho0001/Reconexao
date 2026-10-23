## Exemplos de relatos para apresentação

Esta revisão acrescenta três relatos inteiramente fictícios, já disponíveis em **Painel administrativo → Relatos dos alunos**, sem precisar enviar pelo formulário. Cada cartão informa “Exemplo fictício pré-carregado”. Há textos de comprimentos diferentes, com quebras de linha e emoji.

Os exemplos não aparecem na área do aluno e não concedem pontos. Novos envios simulados são acrescentados à mesma lista, identificados como “Envio simulado nesta visita”. Recarregar descarta esses novos envios e restaura somente os três exemplos iniciais; não há persistência ou envio real.

58 testes aprovados. Revisão visual não executada nesta alteração. Branch feature/relatos-ficticios-admin, PR draft, sem autorização de merge/publicação. Os registros anteriores abaixo são históricos.

# Reconexão — revisão V4: relato opcional do aluno

Base: 1fbc32698c45bd6ef669ff36a07b5da207269660, branch feature/v4-relato-aluno. Preparada para revisão, sem merge, Pages ou preview externo.

## Como demonstrar (somente textos fictícios)

1. Abrir Área do aluno; usar a conclusão 3FM demonstrativa e manter Day em prazo. Os gates existentes continuam valendo.
2. Após Seus pontos, usar Como você está se sentindo? → Preencher exemplo fictício ou digitar exemplo próprio, nunca dados reais.
3. Contador inclui espaços/pontuação; até 1.000 caracteres visíveis. Emoji composto/acento combinado conta como um grafema. Colagem acima do limite não é cortada: aviso e envio bloqueado. Não há maxlength UTF-16 divergente do contador.
4. Enviar relato mostra processamento breve, campo somente leitura e botão desabilitado. Após confirmação fictícia, limpa o campo e permite novo relato, sem histórico para o aluno.
5. Sair para entrada → Painel administrativo → Relatos dos alunos. Ler o mesmo texto, Major como autor fictício e data/hora em America/Sao_Paulo, com quebras de linha. Admin somente lê, sem responder/editar/exportar.
6. Para demonstrar falha: Controles técnicos do apresentador → Falhar próximo envio de relato → voltar à Home. Falha conserva o texto; nova tentativa funciona. Nenhuma alteração de pontos/barra/II/ranking/prazo Day.
7. Recarregar reinicia todo o cenário, inclusive relatos e rascunho. Não há transmissão à equipe, persistência, autenticação ou privacidade real: os estados ficam acessíveis ao JavaScript desta visita. Não inserir relatos reais.

Antes do envio, o texto em edição é mantido ao navegar nesta mesma visita, não fora dela. O autor não é informado pelo campo: vem da fixture Major da Área do aluno. Horário usa relógio local apenas para demonstração; servidor/fuso de produção continuam pendentes.

## Verificação e limites

55 testes passaram (42 regressões + 13 novos); sintaxe aprovada. Inclui temporizador real e cenários determinísticos de erro/duplicidade. Tentativa de navegador falhou por Chromium ausente: visual desktop/mobile/teclado NÃO EXECUTADOS, sem capturas. ARIA/CSS conferidos só no código. Segurança de servidor, isolamento entre alunos, retenção/exclusão e logs seguros continuam requisitos futuros, não controles comprovados.

Executar localmente nesta branch:

~~~sh
node --check app.js
node --test tests/prototype.test.cjs
python -m http.server 8000 --bind 127.0.0.1
~~~

Abrir http://127.0.0.1:8000. Apresentar cópia local sem alterar Pages. Ver matriz em docs/TESTES_PROTOTIPO.md.

Registro anterior preservado abaixo; esta V4 não muda as regras V3, 3FM/Day ou identidade visual.

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
