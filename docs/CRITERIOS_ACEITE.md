# Critérios de aceite — recorte V3

Origem: instrução do responsável em 21/10/2026. Recorte aditivo; resultados abaixo referem-se à simulação local, não homologação de produção. Testes e limitações detalhados em TESTES_PROTOTIPO.

| ID | Esperado | Estado desta revisão |
|---|---|---|
| REV3-CA01/02 | Texto acolhedor integral, botão, conceitos e gate preservados | Conferido no código e VM |
| REV3-CA03 | Iniciar/retomar com saudação e sem releitura obrigatória | Prévia de etapa testada; formulário oficial ausente |
| REV3-CA04 | Retomar respostas e corrigir antes do envio; erro de salvamento informado | BLOQUEADO pela fonte integral 3FM; não existem respostas a salvar |
| REV3-CA05 | Sem instrumento/resultado fabricado; conclusão fictícia identificada | PASSOU em VM |
| REV3-CA06 | Próprio saldo e barra antes dos conteúdos do dashboard | PASSOU em VM; visual pendente |
| REV3-CA07 | 0→0%/200;10→5%/190;100→50%/100;199→99,5%/1;200→100%/0;230→100%/0 com saldo completo | PASSOU em VM |
| REV3-CA08/09 | Evento atualiza ledger/barra/II sem duplicação | PASSOU em VM |
| REV3-CA10 | II a partir de 200, sem checkout extra | PASSOU em VM |
| REV3-CA11 | Sete atividades; vídeo40%, liveclique; sem bônus duplicado | PASSOU em VM/inspeção |
| REV3-CA12 | Próprio saldo sem ranking; Admin mantém ranking | PASSOU na demonstração; autorização/isolamento reais NÃO TESTADOS |
| REV3-CA13 | Carga/erro não viram zero; retentar recupera saldo local | PASSOU em VM; não há API real |
| REV3-CA14 | Day atrasado preserva pontos/II mas impede dashboard | PASSOU em VM |
| REV3-CA15 | Responsividade e operação por teclado em navegador | NÃO EXECUTADO: Chromium ausente; ARIA/CSS/summary conferidos apenas por código |
| REV3-CA16 | Revisão e aceite expresso antes de merge/publicar | Nova branch e PR draft; aguardar aprovação |

Além da V3, preservar regressões Day12 e QA-P01/P02/P03. Não usar testes antigos como prova de novas regras.
