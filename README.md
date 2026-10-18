# Reconexão I — Protótipo navegável

Protótipo estático da plataforma Reconexão, publicado pelo GitHub Pages, com identidade visual em azul-marinho e preto.

## Como navegar

A tela inicial permite escolher **Área do aluno** ou **Painel administrativo**. Não há página comercial ou checkout nesta versão do protótipo.

### Área do aluno
- Resumo de estudos e próximo encontro
- Módulos com videoaulas publicadas
- Reuniões semanais e gravações simuladas
- Inscrição demonstrativa em turmas on-line do II com capacidade limitada; cancelamento pendente
- Materiais de apoio, avisos e dados demonstrativos do acesso

### Painel administrativo
- Indicadores de alunos ativos, inatividade por 30 dias ou mais, acessos expirados sem renovação e novas inscrições
- Gráficos de pizza/rosca sobre a distribuição de acessos e a última reunião
- Gestão de conteúdos com biblioteca de módulos, listagem de aulas, edição, rascunhos e publicação
- Reuniões e cadastro manual de gravações
- Encontros, inscritos e capacidade máxima
- Presenças, ausências e participantes ainda não registrados (edições refletem no dashboard)
- Comunicados e histórico de e-mails simulados

## Atenção: demonstração

Todos os dados são fictícios. As ações interativas atualizam apenas a memória do navegador durante a visita: **não persistem após recarregar**. Não há autenticação, banco de dados, Google Meet real, hospedagem de vídeo, pagamentos ou envio real de e-mail.

## Estrutura

- `index.html` — página principal
- `styles.css` — identidade visual, responsividade e animações
- `app.js` — telas e dados demonstrativos

## GitHub Pages

O GitHub Pages oficial atual usa a versão de `main`. Não altere essa configuração para revisar este PR. O endereço oficial existente é:

https://arthurcarvalho0001.github.io/Reconexao/


## Atualização demonstrativa — Reconexão I e II

Branch de revisão: `feature/atualizacao-prototipo`. Consulte a [comparação com os requisitos](docs/REVISAO_PROTOTIPO.md) e as [evidências de teste](docs/TESTES_PROTOTIPO.md).

Na Área do aluno, **Questionários** demonstra submissões fictícias do inicial e acompanhamento de 30 dias, sem coletar suas respostas. **Reconexão Day** é uma tela separada, com 12 perguntas oficiais, seis dimensões e escala 0–4. Use apenas valores fictícios; o rascunho fica na memória da visita, com indicação das perguntas pendentes. Somente concluir as 12 respostas válidas concede 10 pontos uma vez por dia demonstrativo, independentemente da média. Edição no mesmo dia não concede pontos adicionais. Use os botões para avançar o relógio da demonstração. O inicial inicia a contagem de 30 dias. O 3FM aparece separado e pendente da especificação integral; não calcula resultados nem concede pontos sem essa fonte.

Em **Meus módulos**, o botão “Simular 90% assistidos” registra uma conclusão fictícia e 10 pontos uma única vez. Reuniões, gravações e o clique fictício no WhatsApp têm eventos próprios. O botão de Mediação simula somente o início da gravação, cumprindo participação sem pontos automáticos. Nenhuma reunião ou grupo externo é aberto.

**Pontos e progressão** reúne o saldo, histórico e checklist do Reconexão II. São necessários 200 pontos, aulas obrigatórias publicadas, Mediação, inicial e 30 dias, além de novo pagamento. O botão de confirmação do pagamento é explicitamente fictício. 3FM não é requisito obrigatório. Turmas são demonstradas no II, exclusivamente on-line; cancelamento depende de regra aprovada.

Todos os exemplos iniciais de aulas foram marcados obrigatórios somente no conjunto fictício; o administrador pode alterar essa marcação no formulário da aula. A quantidade de exemplos não define o currículo aprovado. Aulas não exigem conclusão sequencial. O administrador consulta a jornada e não atribui pontos manualmente.

Não digite dados pessoais nos formulários administrativos de demonstração. Não há backend, checkout, confirmação bancária, sessão segura, teste de antifraude de vídeo ou autorização real. Recarregar apaga as alterações. Regras comerciais de pagamento/renovação permanecem pendentes; os seis meses de acesso inicial do I são o período consolidado.

Para testar as regras simuladas, sem instalar dependências:

```sh
node --check app.js
node --test tests/prototype.test.cjs
```

Para servir localmente, na raiz do repositório:

```sh
python3 -m http.server 8000
```

Abra http://localhost:8000. Não altere a configuração Pages nem faça merge antes da revisão. Nenhuma arquitetura de produção ou fornecedor é adotado por este protótipo.

## Revisão Day12 e QA-P01–03 — 18/10/2026

- Conteúdo despublicado é bloqueado na seleção, no atalho Continuar aula e na renderização de uma tela já selecionada. O histórico e os pontos permanecem.
- Home, Reuniões e próxima atividade administrativa consultam os mesmos registros. Editar título, data, horário, link ou situação gera aviso interno fictício; salvar sem alteração não duplica aviso. Nenhum e-mail é enviado.
- Cadastro/edição de aulas preserva `video` em memória e repõe esse valor ao reabrir o formulário. URL deve usar HTTP/HTTPS; nenhum endereço é carregado pelo player demonstrativo.
- Day apresenta médias exatas e textos literais da fonte V1. Sem regra de arredondamento, médias periódicas aparecem como fração (ex.: 43/12). Classificação entre intervalos e devolutiva principal em empate ficam sinalizadas como pendentes. O banco editorial e os vínculos de conteúdo não são administráveis nesta entrega.

Após revisão técnica/QA, apresente ao cliente pela execução local da branch, compartilhando a tela. Confira o SHA apresentado. Não troque a branch do Pages, não faça merge nem retire o PR #1 de rascunho. Aceite do cliente e autorização posterior de publicação são etapas distintas. Veja o roteiro e os limites em [TESTES_PROTOTIPO.md](docs/TESTES_PROTOTIPO.md).
