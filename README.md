# Reconexão I — Protótipo navegável

Protótipo estático da plataforma Reconexão, publicado pelo GitHub Pages, com identidade visual em azul-marinho e preto.

## Como navegar

A tela inicial permite escolher **Área do aluno** ou **Painel administrativo**. Não há página comercial ou checkout nesta versão do protótipo.

### Área do aluno
- Resumo de estudos e próximo encontro
- Módulos com videoaulas publicadas
- Reuniões semanais e gravações simuladas
- Inscrição e cancelamento em encontros de capacidade limitada
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

Em **Settings → Pages**, escolha **Deploy from a branch**, **main**, **/(root)**. O endereço esperado é:

https://arthurcarvalho0001.github.io/Reconexao/
