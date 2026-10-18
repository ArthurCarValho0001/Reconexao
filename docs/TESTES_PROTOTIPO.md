# Evidências de teste — revisão Day12 e QA

Data: 18/10/2026. Runtime: Node.js v24.19.0. Branch `feature/atualizacao-prototipo`, PR #1 em rascunho. A versão remota exata desta entrega é o head do PR; obter `git rev-parse HEAD` ao retestar e associar esse SHA ao parecer. Nenhum teste autoriza publicação.

## Execuções realizadas

1. Antes de editar, os 11 testes existentes no head `1593d88ba13329e0d522b728f1e70e294f2b0a5f` passaram. Não comprovavam ausência dos defeitos relatados pelo QA.
2. Nesta revisão, `node --check app.js`: PASSOU.
3. `node --test tests/prototype.test.cjs`: PASSOU, **19 testes**, zero falhas. Os dois cenários antigos que usavam o evento Day de cinco respostas foram adaptados para submissão das 12 entradas.
4. `git diff --check`: PASSOU.
5. Tentativa de iniciar Chromium com Playwright: BLOQUEADA por executável ausente. Não foi feita revisão visual nem inspeção real em desktop/mobile/teclado. O download do navegador já havia falhado na revisão anterior; não há evidência visual para esta versão.

Os testes usam `node:vm` e DOM/FormData mínimos para executar as funções e o handler de clique reais do protótipo. Não simulam um navegador completo. O script histórico do QA espera reproduzir os defeitos; seus resultados antigos não foram sobrescritos. As regressões desta entrega verificam o comportamento corrigido com asserções próprias.

## Cobertura executada

| Grupo | Entrada/ação e esperado | Resultado |
|---|---|---|
| Day oficial | 12 enunciados no catálogo, seis dimensões, escala oficial; extremos 0 e 4 | PASSOU: NG=0/4, pares correspondentes, +10 uma vez |
| Parcial | 11 respostas zero, falta Q12; salvar/navegar/retomar | PASSOU: zero preservado, Q12 pendente, NG/D6 ausentes e sem pontos até concluir |
| Validação | -1, 5, 1,5, NaN, undefined, booleano, espaço, valor malformado; atalho Day antigo | PASSOU: rejeitados; não convertidos em zero nem concedidos pontos |
| Edição/reenvio | Concluir, limpar resposta, preencher e reenviar no mesmo dia; avançar sem responder | PASSOU: NG atual ocultada durante edição; sem segunda concessão ou zero em dia sem registro |
| Médias e limites | Q1=2/Q2=4; soma=43; empate de dimensões | PASSOU: D1=3; NG exata 43/12 e classificação pendente; empate sem desempate inventado |
| QA-P01 | Despublicar aula e módulo; usar Home/handler watch/renderização já selecionada | PASSOU: não apresenta vídeo; preserva conclusão e pontos; sem atalho quando não há aulas disponíveis |
| QA-P02 | Salvar reunião com título/data/hora novos; consultar Home, Reuniões, admin, gravação e avisos; repetir save igual | PASSOU: dados consistentes, aviso com antes/depois; sem aviso duplicado quando nada muda |
| QA-P03 | Criar/editar/reabrir aula com URL própria; tentar javascript: | PASSOU: URL recuperada corretamente e escapada no formulário; inválida não apaga aula anterior |
| Eventos anteriores | Aula, live, gravação, WhatsApp e Mediação | PASSOU: +10 por evento sem duplicação; Mediação não concede 90% automaticamente |
| Questionários/II | Prazo inicial/30 dias, 199/200, pré-requisitos cumulativos, pagamento separado e 3FM não obrigatório | PASSOU na simulação |
| Fluxo completo | Eventos visíveis permitem 200 pontos com cinco conclusões Day12 e demais atividades; pagamento II | PASSOU: liberação fictícia alcançável sem alterar saldo manualmente |
| Rotas aluno/admin | Gerar HTML das rotas, incluindo Day; escape de texto e ausência de Conhecer | PASSOU em VM; não equivale a teste visual ou acessibilidade |

## Pendências de validação

- CA-080: desktop/mobile, seleção real, foco, teclado, contraste, rolagem e layout: NÃO EXECUTADOS, navegador indisponível. Nenhuma captura visual entregue.
- PEN-01/02: classificação nas lacunas dos intervalos, arredondamento, desempate/semelhança, links de conteúdo, períodos dos resumos: BLOQUEADOS pelas decisões correspondentes. Não há resultado esperado inventado.
- Fuso/virada diária real, edição retroativa e concorrência Day: NÃO VALIDADOS. Relógio relativo e memória local são ferramentas de demonstração, não autoridade de produção.
- Sem backend: autorização/IDOR, privacidade real, sessões, pagamento, expiração, concorrência de vagas, telemetria 90% e persistência NÃO VALIDADOS.
- 3FM continua BLOQUEADO por fonte integral. Inicial/30 dias ainda são submissões fictícias, não formulários homologados. Exercícios e administração de descontos/vigências continuam pendentes de implementação/definição.

## Roteiro manual para QA e cliente

Executar primeiro com revisor técnico/QA, em 1440px e 390px e com teclado. Registrar navegador, largura, SHA, entradas e resultado esperado/obtido.

1. Home: conferir logo fornecida, azul profundo/verde-petróleo/verde-folha e entradas Aluno/Admin, sem Conhecer. Em mobile, verificar menu horizontal e aviso de demonstração visível.
2. Admin → Conteúdos: despublicar aula selecionada na Home e depois seu módulo. Como aluno, tentar Continuar aula e navegação normal. Reabrir o módulo após republicar; os pontos já concedidos devem permanecer, sem duplicação.
3. Admin → Reuniões: mudar título, data e hora. Conferir agenda e Home do aluno e novo aviso. Salvar novamente sem mudança: nenhum aviso adicional. Confirmar que nenhum e-mail real foi enviado.
4. Admin → aula: informar `https://video.example.test/revisao`, salvar e reabrir. Conferir o mesmo valor; nenhum vídeo externo deve ser requisitado pelo protótipo.
5. Day: responder somente Q1–Q11 com zeros; salvar parcial; ir a Meus módulos e voltar. Q12 continua pendente, zero não vira vazio, sem NG/pontos. Completar Q12 e concluir: +10. Editar/reconcluir no mesmo dia: não duplica.
6. Day: preencher todas com 4, exceto Q1=0 e Q2=3. NG deve mostrar 43/12 e classificação geral pendente. Todas iguais a 2 produzem empate e aviso de devolutiva pendente. Sem diagnóstico, ranking ou punição.
7. Avançar dois dias em Questionários sem responder: não criar registro zero no dia pulado. Voltar ao Day e concluir outro registro: novo evento de +10. Recarregar apaga todos os dados demonstrativos.
8. Conferir inicial, 30 dias e 3FM separados. Concluir aulas sem sequência, live, gravações e Mediação; verificar ledger e checklist II. Reserva respeita capacidade local; cancelamento permanece pendente.
9. Teclado: navegar por Tab/Shift+Tab, alterar escala, acionar salvar/concluir, conferir foco visível e texto de pendências anunciado. Revisar também os modais administrativos existentes. Qualquer falha deve ser registrada, sem presumir aceite.

## Apresentação sem alterar Pages

Depois do reteste técnico/QA, obtenha uma cópia limpa da branch no computador do apresentador:

```sh
git clone --branch feature/atualizacao-prototipo --single-branch https://github.com/ArthurCarValho0001/Reconexao.git reconexao-revisao
cd reconexao-revisao
git rev-parse HEAD
node --test tests/prototype.test.cjs
python -m http.server 8000 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8000` e compartilhar a tela. Alternativa: baixar o ZIP da branch e servir sua pasta localmente. Isso não modifica o Pages oficial nem cria serviço externo. Use somente dados fictícios, informe limitações e associe o aceite do cliente ao SHA apresentado.

O responsável autoriza merge/publicação somente após revisão técnica/QA e aceite expresso do cliente. Manter PR #1 em rascunho; não trocar a origem do Pages ou criar prévia externa sem autorização específica.

## Reteste da atualização de marca

Após aplicar logo/paleta/favicon: `node --check app.js`, `node --test tests/prototype.test.cjs` (19/19) e `git diff --check` passaram. O símbolo reutiliza o bitmap original; identidade não foi redesenhada. A configuração do favicon aponta para o asset local. Favicon em navegadores, corte do símbolo, alinhamento, responsividade e foco ainda requerem revisão visual real; não foram aprovados por estes testes.
