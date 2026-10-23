"use strict";
// Demonstração exclusivamente no navegador. Nenhuma requisição, cobrança ou envio real.
const app=document.getElementById("app");
const data={
  modules:[
    {id:1,title:"Fundamentos da reconexão",description:"Introdução à jornada, acolhimento e primeiros exercícios.",status:"Publicado",lessons:[{id:101,title:"Boas-vindas e apresentação",duration:"18 min",status:"Publicado"},{id:102,title:"Por onde começar",duration:"26 min",status:"Publicado"},{id:103,title:"Exercício inicial",duration:"14 min",status:"Publicado"}]},
    {id:2,title:"Autoconhecimento na prática",description:"Ferramentas de percepção, reflexão e desenvolvimento pessoal.",status:"Publicado",lessons:[{id:201,title:"Reconhecendo padrões",duration:"32 min",status:"Publicado"},{id:202,title:"Escuta e presença",duration:"24 min",status:"Publicado"},{id:203,title:"Diário de reflexões",duration:"19 min",status:"Publicado"},{id:204,title:"Hábitos conscientes",duration:"28 min",status:"Publicado"}]},
    {id:3,title:"Relações e pertencimento",description:"Comunicação e participação ativa na comunidade.",status:"Publicado",lessons:[{id:301,title:"A importância do vínculo",duration:"29 min",status:"Publicado"},{id:302,title:"Conversas com propósito",duration:"21 min",status:"Publicado"}]},
    {id:4,title:"Novos caminhos",description:"Planejamento pessoal e continuidade depois do programa.",status:"Rascunho",lessons:[{id:401,title:"Projetando o próximo ciclo",duration:"34 min",status:"Rascunho"},{id:402,title:"Metas possíveis",duration:"27 min",status:"Rascunho"},{id:403,title:"Plano de continuidade",duration:"20 min",status:"Rascunho"}]}
  ],
  meetings:[
    {id:1,title:"Encontro semanal: prática e diálogo",date:"22/10/2026",time:"19:00",status:"Agendada",link:"https://meet.google.com/exemplo",recording:""},
    {id:2,title:"Construindo rotinas conscientes",date:"15/10/2026",time:"19:00",status:"Realizada",link:"",recording:"https://video.exemplo/gravação-02"},
    {id:3,title:"Acolhimento e primeiros passos",date:"08/10/2026",time:"19:00",status:"Realizada",link:"",recording:"https://video.exemplo/gravação-01"}
  ],
  groups:[
    {id:1,title:"Roda de conversa: autoconhecimento",date:"24/10/2026",time:"10:00",capacity:8,members:["Laura Reis","Bruna Costa","João Lima","Paula Souza","Marcos Dias"],joined:false},
    {id:2,title:"Práticas de escuta",date:"28/10/2026",time:"19:00",capacity:10,members:["Carla Oliveira","Diego Almeida","Elisa Ferreira","Fernanda Alves","Gustavo Rocha","Helena Nunes","Igor Martins"],joined:false},
    {id:3,title:"Vivências e pertencimento",date:"31/10/2026",time:"09:30",capacity:6,members:["Alice Barros","Beatriz Ferreira","Caio Dias","Dora Martins","Eduardo Costa","Flávia Gomes"],joined:false}
  ],
  notices:[
    {id:1,title:"Agenda de encontros de outubro",message:"Já estão abertas as inscrições para as rodas de conversa deste mês.",date:"16/10/2026"},
    {id:2,title:"Novo material no módulo 2",message:"O roteiro de reflexão para a aula Diário de reflexões está disponível.",date:"13/10/2026"},
    {id:3,title:"Gravação da última reunião",message:"A reunião Construindo rotinas conscientes já pode ser revista.",date:"12/10/2026"}
  ],
  emails:[
    {date:"14/10/2026",subject:"Encontro semanal — lembrete",audience:"Alunos ativos",recipients:184,status:"Simulado"},
    {date:"09/10/2026",subject:"Confira os conteúdos desta semana",audience:"Alunos ativos",recipients:184,status:"Simulado"}
  ],
  attendance:Array.from({length:72},(_,i)=>({name:i===0?"Ana Martins":i===1?"Bruna Costa":i===2?"João Lima":i===3?"Paula Souza":i===4?"Marcos Dias":i===5?"Carla Oliveira":"Aluno "+String(i+1).padStart(2,"0"),status:i<54?"Presente":i<66?"Ausente":"Não registrado"}))
};
const state={role:"home",page:"home",modal:null,filter:"Todos",studentModule:1,adminModule:1,lesson:101,attendanceFilter:"Todos",toastTimer:null};
const icons={
home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
chart:'<path d="M3 3v18h18M7 17v-6M12 17V7M17 17v-9"/>',
arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
play:'<path d="m8 5 11 7-11 7z"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
check:'<path d="m4 12 5 5L20 6"/>',
settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l-2.6 2.6a2 2 0 0 0-2.2-.4 2 2 0 0 0-1.5 1.6h-3a2 2 0 0 0-1.5-1.6 2 2 0 0 0-2.2.4l-2.6-2.6A2 2 0 0 0 4.6 15 2 2 0 0 0 3 13.5v-3A2 2 0 0 0 4.6 9a2 2 0 0 0-.4-2.2l2.6-2.6A2 2 0 0 0 9 4.6 2 2 0 0 0 10.5 3h3A2 2 0 0 0 15 4.6a2 2 0 0 0 2.2-.4l2.6 2.6a2 2 0 0 0-.4 2.2 2 2 0 0 0 1.6 1.5v3a2 2 0 0 0-1.6 1.5z"/>',
edit:'<path d="m15 5 4 4M4 20l4-.6L20 7a2 2 0 0 0-3-3L5 16z"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
back:'<path d="m15 18-6-6 6-6"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'
};
function icon(name,large=false){return '<svg class="icon'+(large?' icon-lg':'')+'" viewBox="0 0 24 24" aria-hidden="true">'+(icons[name]||icons.grid)+'</svg>'}
function esc(v){return String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]))}
function fmt(n){return new Intl.NumberFormat("pt-BR").format(n)}
function countLessons(){return data.modules.reduce((n,m)=>n+m.lessons.length,0)}
function publishedLessons(){return data.modules.reduce((n,m)=>n+(m.status==="Publicado"?m.lessons.filter(l=>l.status==="Publicado").length:0),0)}
function statsAttendance(){return ["Presente","Ausente","Não registrado"].map(status=>({label:status,value:data.attendance.filter(a=>a.status===status).length}))}
function badge(status){const color=({Publicado:"green",Agendada:"green",Realizada:"gray",Presente:"green",Ausente:"red","Não registrado":"amber",Rascunho:"amber",Simulado:"gray",Esgotado:"red"})[status]||"gray";return '<span class="tag '+color+'">'+esc(status)+'</span>'}
function btn(label,action,more="",kind="btn-light",size="btn-sm"){return '<button type="button" class="btn '+kind+' '+size+'" data-action="'+esc(action)+'" '+more+'>'+label+'</button>'}
function title(text,sub,button=""){return '<div class="page-head"><div><div class="eyebrow">'+(state.role==="admin"?"PAINEL ADMINISTRATIVO":"ÁREA DO ALUNO")+'</div><h1>'+text+'</h1><p>'+sub+'</p></div>'+button+'</div>'}
function section(text,button=""){return '<div class="section-title"><h2>'+text+'</h2>'+button+'</div>'}
function pie(titleText,sub,items,centerLabel,centerSub,colors){const total=items.reduce((n,x)=>n+x.value,0);let running=0;const grad=items.map((x,i)=>{const start=running/total*100;running+=x.value;return colors[i]+' '+start+'% '+running/total*100+'%'}).join(",");const legend=items.map((x,i)=>'<div class="legend-item"><span class="legend-label"><i class="legend-dot" style="background:'+colors[i]+'"></i>'+esc(x.label)+'</span><strong>'+fmt(x.value)+'</strong></div>').join("");return '<div class="panel"><div class="panel-head"><div><h2>'+titleText+'</h2><p>'+sub+'</p></div></div><div class="chart-row"><div role="img" aria-label="'+esc(items.map(x=>x.label+": "+x.value).join(", "))+'" class="pie" style="background:conic-gradient('+grad+')"><div class="pie-center"><strong>'+esc(centerLabel)+'</strong><span>'+esc(centerSub)+'</span></div></div><div class="legend">'+legend+'</div></div></div>'}
function metric(label,value,foot,iconName){return '<div class="panel metric"><div class="metric-label">'+label+'</div><div class="marker">'+icon(iconName)+'</div><div class="metric-number">'+fmt(value)+'</div><div class="metric-note">'+foot+'</div></div>'}
const adminMenu=[["home","Visão geral","grid"],["content","Conteúdos","book"],["meetings","Reuniões","calendar"],["groups","Encontros","users"],["attendance","Presenças","check"],["notices","Comunicados","bell"],["emails","E-mails","mail"],["journey","Jornada demonstrativa","chart"],["ranking","Ranking de engajamento","chart"],["reports","Relatos dos alunos","file"]];
const studentMenu=[["home","Visão geral","home"],["classes","Meus módulos","book"],["meetings","Reuniões","calendar"],["groups","Encontros","users"],["materials","Materiais","file"],["notices","Avisos","bell"],["journey","Pontos e progressão","chart"],["questionnaires","Questionários","file"],["day","Reconexão Day","check"],["help","Ajuda e privacidade","settings"],["account","Meu acesso","settings"]];
function brand(light=false){return '<div class="brand '+(light?'brand-light':'')+'"><img class="brand-logo" src="assets/reconexao-symbol.svg" alt="" width="44" height="46"><span class="brandname">Reconexão</span></div>'}
function home(){return '<div class="welcome"><div class="welcome-top">'+brand(true)+'<span class="eyebrow">PROTÓTIPO DE NAVEGAÇÃO</span></div><div class="welcome-main"><div class="welcome-content"><div class="welcome-emblem"><img class="welcome-logo" src="assets/reconexao-symbol.svg" alt="Símbolo Reconexão: acolhimento e crescimento" width="142" height="146"></div><div class="eyebrow" style="color:#b8d9cd">PLATAFORMA RECONEXÃO</div><h1>Reconexão</h1><p class="lead">Uma plataforma para acompanhar jornadas, organizar conteúdos e conectar pessoas. Escolha um ambiente para explorar a demonstração.</p><div class="welcome-choices"><button class="choice" data-action="goto" data-role="student" data-page="home"><span class="choice-icon">'+icon("book",true)+'</span><strong>Área do aluno</strong><span>Acesse aulas, reuniões, materiais e encontros da comunidade.</span><span class="choice-link">Entrar no ambiente '+icon("arrow")+'</span></button><button class="choice" data-action="goto" data-role="admin" data-page="home"><span class="choice-icon">'+icon("grid",true)+'</span><strong>Painel administrativo</strong><span>Consulte indicadores e simule a gestão da plataforma.</span><span class="choice-link">Abrir painel '+icon("arrow")+'</span></button></div></div></div><div class="welcome-foot">Ambiente demonstrativo • Sem autenticação ou dados reais</div></div>'}
function layout(inner){const menu=state.role==="admin"?adminMenu:studentMenu;const breadcrumb=(menu.find(m=>m[0]===state.page)||["","Detalhes"])[1];return '<div class="shell"><aside class="sidebar">'+brand(true)+'<div class="nav-label">'+(state.role==="admin"?"Administração":"Aprendizagem")+'</div><nav class="nav-items" aria-label="Navegação principal">'+menu.map(([page,label,ico])=>'<button class="nav-item '+(state.page===page?"active":"")+'" data-action="goto" data-role="'+state.role+'" data-page="'+page+'">'+icon(ico)+label+'</button>').join("")+'</nav><div class="sidebar-bottom"><div class="eyebrow" style="color:#91b5a7">RECONEXÃO I</div><p>Ambiente demonstrativo</p><button data-action="goto" data-role="home" data-page="home">'+icon("back")+' Voltar para a entrada</button></div></aside><section class="workspace"><header class="topbar"><span class="breadcrumb">Reconexão / '+esc(breadcrumb)+'</span><div class="topbar-right"><span class="demo-chip">DADOS FICTÍCIOS</span><span class="avatar">'+(state.role==="admin"?"AD":"AM")+'</span></div></header><main class="content" id="main-content">'+demoBanner()+inner+'</main></section></div>'}
function adminDashboard(){
const att=statsAttendance();return title("Visão geral","Panorama de alunos, engajamento e operação da comunidade.",btn("Gerenciar conteúdos","goto",'data-page="content" data-role="admin"',"btn"))+
'<div class="grid grid-4">'+metric("Alunos ativos",184,"Contas com acesso vigente","users")+metric("Alunos inativos por 30 dias ou mais",28,"Dentro do grupo de alunos ativos","clock")+metric("Alunos com Day em atraso",36,"Exemplo de pendência pedagógica, sem expiração contratual","calendar")+metric("Novas inscrições",17,"Nos últimos 30 dias","chart")+'</div>'+
section("Engajamento e acesso")+'<div class="grid">'+pie("Situação dos acessos","Distribuição dos 232 cadastros ilustrativos",[{label:"Acesso liberado",value:220},{label:"Pagamento pendente",value:12}],232,"cadastros",["#287b78","#adc8bc","#e1aa60"])+
pie("Presenças e ausências na última reunião","15/10/2026 • Construindo rotinas conscientes",att,72,"inscritos",["#287b78","#db8290","#d9e6df"])+'</div>'+
'<div class="grid"><div class="panel"><div class="panel-head"><div><h2>Presenças e ausências na última reunião</h2><p>Resultado demonstrativo, vinculado ao registro manual.</p></div>'+btn("Ver lista","goto",'data-role="admin" data-page="attendance"')+'</div><div class="stat-row"><div class="stat-cell"><strong>'+att[0].value+'</strong><span>Presentes</span></div><div class="stat-cell"><strong>'+att[1].value+'</strong><span>Ausentes</span></div><div class="stat-cell"><strong>'+att[2].value+'</strong><span>Não registrados</span></div></div></div>'+
'<div class="panel"><div class="panel-head"><div><h2>Gestão de conteúdos</h2><p>Indicadores calculados da biblioteca fictícia.</p></div>'+btn("Abrir biblioteca","goto",'data-role="admin" data-page="content"')+'</div><div class="stat-row"><div class="stat-cell"><strong>'+data.modules.length+'</strong><span>Módulos</span></div><div class="stat-cell"><strong>'+publishedLessons()+'</strong><span>Aulas publicadas</span></div><div class="stat-cell"><strong>'+data.modules.filter(m=>m.status==="Rascunho").length+'</strong><span>Módulos em rascunho</span></div></div><p class="caption" style="margin:16px 0 0">Última atualização demonstrativa: Módulo Novos caminhos em revisão.</p></div></div>'+
section("Operação da semana")+'<div class="grid">'+
'<div class="panel"><div class="panel-head"><div><h2>Próximas atividades</h2><p>Reuniões e encontros cadastrados.</p></div></div><div class="list">'+scheduledMeetings().slice(0,1).map(m=>'<div class="list-item"><div><strong>'+esc(m.title)+'</strong><p>'+esc(m.date)+' • '+esc(m.time)+' • On-line</p></div>'+badge(m.status)+'</div>').join("")+'<div class="list-item"><div><strong>Roda de conversa: autoconhecimento</strong><p>24 out, 10h • '+(data.groups[0].members.length+Number(data.groups[0].joined))+'/'+data.groups[0].capacity+' inscrições</p></div>'+btn("Ver vagas","goto",'data-role="admin" data-page="groups"')+'</div><div class="list-item"><div><strong>Práticas de escuta</strong><p>28 out, 19h • '+data.groups[1].members.length+'/'+data.groups[1].capacity+' inscrições</p></div>'+btn("Ver vagas","goto",'data-role="admin" data-page="groups"')+'</div></div></div>'+
'<div class="panel"><div class="panel-head"><div><h2>Atividades recentes</h2><p>Exemplos de movimentação da equipe.</p></div></div><div class="list">'+[['16 out','Comunicado de agenda publicado'],['15 out','Reunião semanal finalizada'],['14 out','E-mail de lembrete preparado'],['13 out','Material do módulo 2 atualizado']].map(x=>'<div class="list-item"><div><strong>'+x[1]+'</strong><p>'+x[0]+' 2026</p></div>'+icon("check")+'</div>').join("")+'</div></div></div>';
}
function adminContent(){
const mod=data.modules.filter(m=>state.filter==="Todos"||m.status===state.filter),rows=mod.map(m=>'<tr><td><strong>'+esc(m.title)+'</strong><div class="muted small">'+esc(m.description)+'</div></td><td>'+m.lessons.length+' aulas</td><td>'+badge(m.status)+'</td><td class="actions">'+btn("Ver aulas","module",'data-id="'+m.id+'"')+' '+btn("Editar","form",'data-type="module" data-id="'+m.id+'"')+'</td></tr>').join("");
return title("Gestão de conteúdos","Biblioteca de módulos e aulas, com publicação e edição simuladas.",btn(icon("plus")+" Novo módulo","form",'data-type="module"',"btn"))+
'<div class="grid grid-3">'+metric("Módulos cadastrados",data.modules.length,"Publicados e em elaboração","book")+metric("Videoaulas cadastradas",countLessons(),"Total registrado no acervo","play")+metric("Videoaulas publicadas",publishedLessons(),"Visíveis ao aluno","check")+'</div>'+
section("Biblioteca de módulos",btn(icon("plus")+" Adicionar aula","form",'data-type="lesson"',"btn-quiet"))+
'<div class="panel tight"><div style="padding:17px 18px 0"><div class="tabs">'+["Todos","Publicado","Rascunho"].map(t=>btn(t,"filter",'data-filter="'+t+'"',state.filter===t?"btn-dark":"btn-light")).join("")+'</div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Módulo</th><th>Conteúdo</th><th>Situação</th><th>Ações</th></tr></thead><tbody>'+rows+'</tbody></table></div></div><p class="hint" style="margin-top:14px">Referência inicial: oito aulas por módulo, com quantidade alterável pelo administrador. Este acervo usa exemplos reduzidos. Use “Ver aulas” para consultar, editar e publicar; os dados duram somente esta visita.</p>';
}
function adminModuleDetail(){const m=data.modules.find(x=>x.id===state.adminModule);if(!m)return adminContent();return '<div class="page-head"><div><button class="btn-link" data-action="goto" data-role="admin" data-page="content">'+icon("back")+' Voltar para biblioteca</button><h1>'+esc(m.title)+'</h1><p>'+esc(m.description)+'</p></div>'+btn("Editar módulo","form",'data-type="module" data-id="'+m.id+'"',"btn-light")+'</div>'+
'<div class="panel"><div class="split-info"><div><strong>Situação do módulo</strong><p class="small">O aluno só visualiza módulos e aulas publicados.</p></div><div class="inline">'+badge(m.status)+' '+btn(m.status==="Publicado"?"Retirar da publicação":"Publicar módulo","toggle-module",'data-id="'+m.id+'"',"btn-quiet")+'</div></div></div>'+
section("Videoaulas do módulo",btn(icon("plus")+" Adicionar aula","form",'data-type="lesson" data-module="'+m.id+'"',"btn"))+
'<div class="panel tight"><div class="table-wrap"><table class="data-table"><thead><tr><th>Aula</th><th>Duração</th><th>Situação</th><th>Ações</th></tr></thead><tbody>'+m.lessons.map(l=>'<tr><td><strong>'+esc(l.title)+'</strong></td><td>'+esc(l.duration)+'</td><td>'+badge(l.status)+'</td><td class="actions">'+btn("Editar","form",'data-type="lesson" data-id="'+l.id+'"')+' '+btn(l.status==="Publicado"?"Despublicar":"Publicar","toggle-lesson",'data-id="'+l.id+'"',"btn-quiet")+'</td></tr>').join("")+'</tbody></table></div></div>';
}
function adminMeetings(){return title("Reuniões","Organize encontros no Google Meet e publique gravações manualmente.",btn(icon("plus")+" Nova reunião","form",'data-type="meeting"',"btn"))+
section("Agenda e histórico")+'<div class="stack">'+data.meetings.map(m=>'<div class="panel"><div class="split-info"><div><div class="inline">'+badge(m.status)+'<span class="small muted">'+esc(m.date)+' às '+esc(m.time)+'</span></div><h3 style="margin:9px 0 4px">'+esc(m.title)+'</h3><p class="small" style="margin:0">'+(m.recording?"Gravação cadastrada":"Sem gravação cadastrada")+'</p></div><div class="inline">'+btn("Editar","form",'data-type="meeting" data-id="'+m.id+'"')+' '+btn(m.recording?"Atualizar gravação":"Cadastrar gravação","form",'data-type="recording" data-id="'+m.id+'"',"btn-quiet")+'</div></div></div>').join("")+'</div>';
}
function adminGroups(){return title("Encontros em pequenos grupos","Acompanhe inscrições e capacidade máxima.",btn(icon("plus")+" Novo encontro","form",'data-type="group"',"btn"))+
section("Inscrições por encontro")+'<div class="grid grid-3">'+data.groups.map(g=>'<div class="panel"><div class="panel-head"><div><h3>'+esc(g.title)+'</h3><p>'+esc(g.date)+' • '+esc(g.time)+'</p></div>'+badge(g.members.length+Number(g.joined)>=g.capacity?"Esgotado":"Inscrições abertas")+'</div><div class="split-info"><span class="small muted">Vagas preenchidas</span><strong>'+(g.members.length+Number(g.joined))+' de '+g.capacity+'</strong></div><div class="progress" style="margin:13px 0 21px"><span style="width:'+Math.min(100,(g.members.length+Number(g.joined))/g.capacity*100)+'%"></span></div><div class="inline">'+btn("Ver inscritos","group-members",'data-id="'+g.id+'"')+' '+btn("Editar","form",'data-type="group" data-id="'+g.id+'"',"btn-quiet")+'</div></div>').join("")+'</div>';
}
function adminAttendance(){
const values=statsAttendance();const filtered=data.attendance.map((a,i)=>({...a,index:i})).filter(a=>state.attendanceFilter==="Todos"||a.status===state.attendanceFilter);
return title("Registro de presença","Última reunião: Construindo rotinas conscientes • 15/10/2026.")+
'<div class="grid grid-3">'+metric("Presentes",values[0].value,"Confirmados manualmente","check")+metric("Ausentes",values[1].value,"Registrados pela equipe","users")+metric("Não registrados",values[2].value,"Aguardando conferência","clock")+'</div>'+
section("Lista de alunos")+'<div class="panel tight"><div style="padding:17px 18px 0"><div class="tabs">'+["Todos","Presente","Ausente","Não registrado"].map(t=>btn(t,"attendance-filter",'data-filter="'+t+'"',state.attendanceFilter===t?"btn-dark":"btn-light")).join("")+'</div></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Aluno</th><th>Situação</th><th>Registrar</th></tr></thead><tbody>'+filtered.map(a=>'<tr><td><strong>'+esc(a.name)+'</strong></td><td>'+badge(a.status)+'</td><td class="actions">'+btn("Presente","mark-attendance",'data-index="'+a.index+'" data-value="Presente"',"btn-quiet")+' '+btn("Ausente","mark-attendance",'data-index="'+a.index+'" data-value="Ausente"')+'</td></tr>').join("")+'</tbody></table></div></div><p class="hint">Alterações nesta lista atualizam automaticamente o gráfico e os indicadores do dashboard durante a sessão.</p>';
}
function adminNotices(){return title("Comunicados","Publique avisos para os alunos.",btn(icon("plus")+" Novo aviso","form",'data-type="notice"',"btn"))+
'<div class="stack">'+data.notices.map(n=>'<article class="panel"><div class="split-info"><div><h3>'+esc(n.title)+'</h3><span class="small muted">Publicado em '+esc(n.date)+'</span><p style="margin:10px 0 0">'+esc(n.message)+'</p></div>'+btn("Editar","form",'data-type="notice" data-id="'+n.id+'"')+'</div></article>').join("")+'</div>';
}
function adminEmails(){return title("Comunicação por e-mail","Simulação de campanhas e avisos. Nenhum e-mail é enviado.",btn(icon("plus")+" Preparar mensagem","form",'data-type="email"',"btn"))+
'<div class="alert"><strong>Integração futura:</strong> o envio real será realizado por um provedor externo. Nesta demonstração, a mensagem é registrada somente nesta página.</div>'+
section("Histórico de envios simulados")+'<div class="panel tight"><div class="table-wrap"><table class="data-table"><thead><tr><th>Assunto</th><th>Público</th><th>Destinatários</th><th>Data</th><th>Situação</th></tr></thead><tbody>'+data.emails.map(e=>'<tr><td><strong>'+esc(e.subject)+'</strong></td><td>'+esc(e.audience)+'</td><td>'+e.recipients+'</td><td>'+esc(e.date)+'</td><td>'+badge(e.status)+'</td></tr>').join("")+'</tbody></table></div></div>';
}
const engagementRules=[
["3FM com Propósito","Concluir as 40 respostas válidas","Uma vez por aluno"],
["Aula gravada","Assistir pelo menos 40% de trechos únicos válidos","Uma vez por aula"],
["Live ao vivo","Clicar no botão de acesso à live pela plataforma","Uma vez por live"],
["Gravação de live","Assistir pelo menos 40% de trechos únicos válidos","Uma vez por gravação, separadamente da live"],
["Exercício","Responder todos os itens e enviar; o acerto não altera os pontos","Uma vez por exercício"],
["Reconexão Day","Concluir as 12 perguntas oficiais","Uma pontuação por aluno por dia de referência"],
["Grupo WhatsApp","Clicar no botão de acesso ao grupo pela plataforma","Uma vez por aluno"]
];
function ownPointsProgress(){const balance=pointTotal();return {balance,target:200,percent:Math.min(100,Math.max(0,balance/200*100)),remaining:Math.max(200-balance,0),unlocked:progression().unlocked}}
function pointsRulesPanel(){return '<details class="points-rules"><summary>Como ganhar pontos</summary><p>Cada atividade elegível concede <strong>10 pontos</strong>. Nesta prévia os eventos são fictícios, não validados por um servidor.</p><ul class="points-rules-list">'+engagementRules.map(([name,condition,limit])=>'<li><h3>'+esc(name)+' — 10 pontos</h3><p>'+esc(condition)+'.</p><p><strong>Limite:</strong> '+esc(limit)+'.</p></li>').join("")+'</ul><ul><li>Repetir cliques ou rever os mesmos trechos não duplica pontos. Pular um vídeo até a marca de 40% não equivale a assistir 40%.</li><li>O clique da live registra acesso pela plataforma; não comprova ingresso ou permanência na reunião externa.</li><li>Respostas parciais não concedem pontos de conclusão.</li><li>O questionário inicial é o Day: sem bônus separado por “inicial” ou “30 dias”. Nova conclusão pode renovar o prazo, mas a pontuação continua limitada a uma concessão por dia de referência.</li><li>Notas, respostas e classificações do 3FM e Day não são convertidas em pontos extras.</li></ul><p class="small">3FM integral e exercícios aguardam conteúdo oficial. As regras acima não significam que seus formulários estejam implementados. Vídeos usam botão de simulação, sem medição real de trechos.</p></details>'}
function ownPointsPanel(){if(state.role!=="student")return "";let body;if(demo.pointsView==="loading")body='<div role="status" aria-live="polite"><p>Carregando seus pontos</p>'+btn("Atualizar saldo demonstrativo","points-retry")+'</div>';else if(demo.pointsView==="error")body='<div role="alert"><p>Não foi possível carregar seus pontos. Nenhum saldo ou liberação é informado enquanto a consulta demonstrativa falha.</p>'+btn("Tentar novamente","points-retry")+'</div>';else{const p=ownPointsProgress(),percent=String(p.percent).replace(".",",");body='<p class="points-balance"><strong>'+p.balance+'</strong> pontos <span class="small">— saldo fictício do seu extrato</span></p><p>Meta: 200 pontos para acessar o Reconexão II.</p><div class="progress points-progress" role="progressbar" aria-label="Avanço por pontos até o Reconexão II" aria-valuemin="0" aria-valuemax="200" aria-valuenow="'+Math.min(200,Math.max(0,p.balance))+'" aria-valuetext="'+p.balance+' pontos; '+percent+'% da meta"><span style="width:'+p.percent+'%"></span></div><p>'+percent+'% da meta • '+(p.unlocked?'<strong>Reconexão II liberado</strong>. Sem segundo pagamento.':(p.remaining===1?'Falta 1 ponto':'Faltam '+p.remaining+' pontos')+' para acessar o Reconexão II.')+'</p>'}return '<section class="panel own-points" aria-labelledby="own-points-title"><div class="split-info"><h2 id="own-points-title">Seus pontos</h2><span class="tag">ENGAJAMENTO • DEMONSTRAÇÃO</span></div>'+body+pointsRulesPanel()+'</section>'}
const demoStudent=Object.freeze({id:"major-demo",name:"Major"});
const reportDemo={records:[],draft:"",status:"idle",message:"",failNext:false,sequence:0,pending:null};
const reportSegmenter=typeof Intl.Segmenter==="function"?new Intl.Segmenter("pt-BR",{granularity:"grapheme"}):null;
function reportCharacterCount(text){return reportSegmenter?Array.from(reportSegmenter.segment(text)).length:null}
function reportValidation(text){const count=reportCharacterCount(text);if(count===null)return "Este navegador não oferece a contagem de caracteres desta prévia. Use um navegador compatível; nenhum texto foi enviado.";if(!text.trim())return "Escreva um texto antes de enviar o relato.";if(count>1000)return "O relato ultrapassa 1.000 caracteres. Revise o texto; nada foi cortado ou enviado.";return ""}
function canWriteReport(){return state.role==="student"&&state.page==="home"&&canLearn()}
function reportFeedback(){const count=reportCharacterCount(reportDemo.draft);return reportDemo.message||(count===null?reportValidation(reportDemo.draft):count>1000?reportValidation(reportDemo.draft):"")}
function reportForm(){if(!canWriteReport())return "";const count=reportCharacterCount(reportDemo.draft),busy=reportDemo.status==="sending",feedback=reportFeedback();return '<section class="panel report-panel" aria-labelledby="report-title"><h2 id="report-title">Como você está se sentindo?</h2><p id="report-guidance">Se quiser, compartilhe como você está se sentindo ou o que está vivendo neste momento. Seu relato será identificado e poderá ser lido pelos administradores autorizados do Reconexão. Este espaço não é acompanhado em tempo real.</p><p class="alert" id="report-simulation"><strong>Use somente textos fictícios.</strong> Envio e armazenamento simulados nesta visita. Nenhum relato é encaminhado à equipe. Aluno da simulação: '+esc(demoStudent.name)+'. As telas não oferecem privacidade real.</p><form id="report-form" novalidate aria-busy="'+busy+'"><div class="field"><label for="report-text">Seu relato (opcional)</label><textarea id="report-text" name="reportText" rows="6" placeholder="Escreva aqui o que você gostaria de compartilhar." aria-describedby="report-guidance report-help report-counter report-message report-simulation" aria-invalid="'+(count===null||count>1000||(reportDemo.status==="error"&&!reportDemo.draft.trim()))+'" '+(busy?"readonly":"")+'>'+esc(reportDemo.draft)+'</textarea></div><div class="split-info"><p id="report-help">Até 1.000 caracteres. O envio é opcional e não gera pontos.</p><p id="report-counter" role="status" aria-live="polite">'+(count===null?"Contagem indisponível":count+" / 1.000 caracteres")+'</p></div><p id="report-message" tabindex="-1" role="status" aria-live="polite">'+esc(feedback)+'</p><div class="inline"><button id="report-submit" type="submit" class="btn" '+(busy||count===null||count>1000?"disabled":"")+'>'+(busy?"Enviando relato — simulação…":"Enviar relato")+'</button>'+btn("Preencher exemplo fictício","report-example",busy?"disabled":"")+'</div></form></section>'}
function updateReportDraft(text){if(!canWriteReport()||reportDemo.status==="sending"||typeof text!=="string")return false;reportDemo.draft=text;reportDemo.status="idle";reportDemo.message="";return true}
function syncReportForm(){if(!canWriteReport())return;const count=reportCharacterCount(reportDemo.draft),counter=document.getElementById("report-counter"),message=document.getElementById("report-message"),field=document.getElementById("report-text"),button=document.getElementById("report-submit");if(counter)counter.textContent=count===null?"Contagem indisponível":count+" / 1.000 caracteres";if(message)message.textContent=reportFeedback();field?.setAttribute?.("aria-invalid",String(count===null||count>1000));if(button)button.disabled=reportDemo.status==="sending"||count===null||count>1000}
function finishReport(request){if(reportDemo.pending!==request||reportDemo.status!=="sending")return false;reportDemo.pending=null;if(request.fail){reportDemo.status="error";reportDemo.message="Não foi possível enviar o relato na simulação. Seu texto foi preservado. Tente novamente."}else{reportDemo.records.push({id:++reportDemo.sequence,studentId:request.author.id,studentName:request.author.name,text:request.text,sentAt:request.sentAt});reportDemo.draft="";reportDemo.status="success";reportDemo.message="Seu relato foi enviado. Ele ficará disponível para leitura pela administração do Reconexão. Envio apenas simulado; nada foi encaminhado à equipe."}render();if(canWriteReport())document.getElementById("report-message")?.focus?.();return !request.fail}
function submitReport(){if(!canWriteReport()||reportDemo.status==="sending")return false;const error=reportValidation(reportDemo.draft);if(error){reportDemo.status="error";reportDemo.message=error;render();document.getElementById("report-message")?.focus?.();return false}const request={text:reportDemo.draft,author:{...demoStudent},sentAt:new Date().toISOString(),fail:reportDemo.failNext};reportDemo.failNext=false;reportDemo.pending=request;reportDemo.status="sending";reportDemo.message="Enviando relato — simulação em andamento.";render();setTimeout(()=>finishReport(request),700);return true}
function reportDate(iso){return new Intl.DateTimeFormat("pt-BR",{timeZone:"America/Sao_Paulo",dateStyle:"short",timeStyle:"medium"}).format(new Date(iso))}
function adminReports(){if(state.role!=="admin")return '<div class="alert">Consulta disponível somente ao Administrador nesta demonstração.</div>';return title("Relatos dos alunos","Somente leitura. Registros fictícios enviados nesta sessão de demonstração.")+'<div class="alert"><strong>Não há envio real nem armazenamento privado.</strong> Os registros desaparecem ao recarregar. Horários em America/Sao_Paulo, obtidos do relógio local da demonstração; política de produção pendente.</div>'+(reportDemo.records.length?'<div class="stack reports-list">'+reportDemo.records.map(r=>'<article class="panel"><h2>'+esc(r.studentName)+'</h2><p>Aluno fictício • '+esc(r.studentId)+'</p><p><time datetime="'+esc(r.sentAt)+'">'+esc(reportDate(r.sentAt))+'</time> • America/Sao_Paulo</p><div class="report-body">'+esc(r.text)+'</div></article>').join("")+'</div>':'<div class="panel"><p>Nenhum relato demonstrativo enviado nesta visita.</p></div>')}
function studentHome(){
const continuation=continuingLesson();
const published=data.modules.filter(m=>m.status==="Publicado"),lessons=published.flatMap(m=>m.lessons.filter(l=>l.status==="Publicado"));
return title("Olá, "+demoStudent.name,"Continue de onde parou. Seus conteúdos e atividades estão organizados aqui.")+ownPointsPanel()+reportForm()+
'<div class="grid"><div class="panel"><span class="eyebrow">CONTINUAR APRENDENDO</span>'+(continuation?'<h2 style="margin:14px 0 6px">'+esc(continuation.l.title)+'</h2><p>'+esc(continuation.m.title)+'</p><div class="progress" style="margin:20px 0"><span style="width:'+moduleProgress(continuation.m.id)+'%"></span></div><div class="split-info"><span class="small muted">'+moduleProgress(continuation.m.id)+'% do módulo concluído (simulado)</span>'+btn("Continuar aula","watch",'data-id="'+continuation.l.id+'"',"btn")+'</div>':'<p>Nenhuma aula publicada disponível.</p>')+'</div>'+upcomingHomeCard()+'</div>'+
section("Seus módulos",btn("Ver todos","goto",'data-role="student" data-page="classes"'))+
'<div class="grid grid-3">'+published.map((m,i)=>'<article class="panel"><div class="course-cover"><em>MÓDULO '+String(i+1).padStart(2,"0")+'</em></div><h3>'+esc(m.title)+'</h3><p class="small">'+m.lessons.filter(l=>l.status==="Publicado").length+' aulas disponíveis</p>'+btn("Abrir módulo","student-module",'data-id="'+m.id+'"',"btn-quiet")+'</article>').join("")+'</div>'+
section("Comunicados recentes",btn("Todos os avisos","goto",'data-role="student" data-page="notices"'))+
'<div class="panel"><div class="list">'+data.notices.slice(0,2).map(n=>'<div class="list-item"><div><strong>'+esc(n.title)+'</strong><p>'+esc(n.message)+'</p></div><span class="small muted">'+esc(n.date)+'</span></div>').join("")+'</div></div>';
}
function studentClasses(){const modules=data.modules.filter(m=>m.status==="Publicado");
return title("Meus módulos","Videoaulas disponíveis na sua jornada.")+
'<div class="grid grid-3">'+modules.map((m,i)=>'<article class="panel"><div class="course-cover"><em>MÓDULO '+String(i+1).padStart(2,"0")+'</em></div><h3>'+esc(m.title)+'</h3><p class="small">'+esc(m.description)+'</p><div class="split-info"><span class="small muted">'+m.lessons.filter(l=>l.status==="Publicado").length+' aulas</span>'+btn("Ver aulas","student-module",'data-id="'+m.id+'"',"btn")+'</div></article>').join("")+'</div>';
}
function studentModule(){const m=data.modules.find(x=>x.id===state.studentModule);if(!m||m.status!=="Publicado")return studentClasses();
return '<div class="page-head"><div><button class="btn-link" data-action="goto" data-role="student" data-page="classes">'+icon("back")+' Todos os módulos</button><h1>'+esc(m.title)+'</h1><p>'+esc(m.description)+'</p></div></div>'+section("Aulas disponíveis")+
'<div class="panel"><div class="list">'+m.lessons.filter(l=>l.status==="Publicado").map((l,i)=>'<div class="list-item"><div class="inline"><span class="tag">'+String(i+1).padStart(2,"0")+'</span><div><strong>'+esc(l.title)+'</strong><p>'+esc(l.duration)+' • Videoaula</p></div></div>'+btn("Assistir","watch",'data-id="'+l.id+'"',"btn")+'</div>').join("")+'</div></div>';
}
function findLesson(id){for(const m of data.modules){const l=m.lessons.find(l=>l.id===id);if(l)return {m,l}}return null}
function studentVideo(){const f=availableLesson(state.lesson);if(!f)return title("Aula indisponível","A aula ou seu módulo não está publicado. Seu histórico e seus pontos foram preservados.")+studentClasses();
return '<div class="page-head"><div><button class="btn-link" data-action="student-module" data-id="'+f.m.id+'">'+icon("back")+' Voltar às aulas</button><h1>'+esc(f.l.title)+'</h1><p>'+esc(f.m.title)+' • '+esc(f.l.duration)+'</p></div></div>'+
'<div class="panel"><div class="video-screen"><button class="play-button" data-action="fake-video" aria-label="Simular reprodução">'+icon("play",true)+'</button></div><h2 style="margin:21px 0 8px">Sobre esta aula</h2><p>Conteúdo de demonstração. No produto final, o vídeo será reproduzido dentro da plataforma por meio de um player incorporado de serviço externo.</p><div class="inline">'+btn("Simular 40% de trechos únicos assistidos","demo-lesson",'data-id="'+f.l.id+'"',"btn")+' '+btn("Material de apoio","toast",'data-message="Material disponível apenas como exemplo."')+'</div></div>';
}
function studentMeetings(){return title("Reuniões","Agenda e gravações fictícias cadastradas pela administração.")+mediationPanel()+section("Aulas ao vivo")+
'<div class="stack">'+(scheduledMeetings().map(m=>'<div class="panel"><h2>'+esc(m.title)+'</h2><p>'+esc(m.date)+' • '+esc(m.time)+' • On-line</p>'+badge(m.status)+' '+btn("Acessar aula (simulação)","demo-live",'data-id="'+m.id+'"',"btn")+'</div>').join("")||'<div class="panel"><p>Nenhuma reunião agendada.</p></div>')+'</div>'+section("Gravações anteriores")+'<div class="grid">'+data.meetings.filter(m=>m.recording).map(m=>'<div class="panel"><span class="eyebrow">REUNIÃO GRAVADA</span><h3 style="margin-top:13px">'+esc(m.title)+'</h3><p>'+esc(m.date)+' • '+esc(m.time)+'</p>'+btn("Simular 40% de trechos únicos da gravação","demo-recording",'data-id="'+m.id+'"',"btn-quiet")+'</div>').join("")+'</div>';
}
function availableLesson(id){const f=findLesson(id);return f&&f.m.status==="Publicado"&&f.l.status==="Publicado"?f:null}
function continuingLesson(){return availableLesson(state.lesson)||availableLesson(201)||data.modules.filter(m=>m.status==="Publicado").flatMap(m=>m.lessons.map(l=>({m,l}))).find(f=>f.l.status==="Publicado")||null}
function scheduledMeetings(){const key=m=>m.date.split("/").reverse().join("")+m.time;return data.meetings.filter(m=>m.status==="Agendada").slice().sort((a,b)=>key(a).localeCompare(key(b)))}
function upcomingHomeCard(){const m=scheduledMeetings()[0];return '<div class="panel"><span class="eyebrow">PRÓXIMA REUNIÃO</span>'+(m?'<h2 style="margin:14px 0 6px">'+esc(m.title)+'</h2><p>'+esc(m.date)+' • '+esc(m.time)+' • On-line</p>'+badge(m.status)+' '+btn("Ver detalhes","goto",'data-role="student" data-page="meetings"',"btn"):'<p>Nenhuma reunião agendada.</p>')+'</div>'}
function meetingNotice(before,after){const keys=["title","date","time","link","status"];if(!keys.some(k=>before[k]!==after[k]))return;data.notices.unshift({id:"meeting-"+after.id+"-"+Date.now()+"-"+data.notices.length,title:"Reunião atualizada: "+after.title,message:"Alteração simulada. Antes: "+before.title+" — "+before.date+" às "+before.time+". Agora: "+after.title+" — "+after.date+" às "+after.time+". Situação: "+after.status+". Confira os dados na agenda. Nenhum e-mail enviado.",date:"Dia "+demo.day+" da demonstração"})}
function studentGroups(){if(!progression().unlocked)return title("Reconexão II ainda não liberado","Alcance 200 pontos de engajamento para acessar as turmas on-line, sem cobrança adicional.");return title("Encontros em pequenos grupos","Reconexão II • Encontros exclusivamente on-line. Reservas demonstrativas; cancelamento ainda depende de regra aprovada.")+
'<div class="grid grid-3">'+data.groups.map(g=>'<div class="panel"><div class="panel-head"><div><h3>'+esc(g.title)+'</h3><p>'+esc(g.date)+' • '+esc(g.time)+'</p></div></div><div class="split-info"><span class="small muted">Alunos</span><strong>'+(g.members.length+(g.joined?1:0))+' / '+g.capacity+'</strong></div><div class="progress" style="margin:13px 0 20px"><span style="width:'+Math.min(100,(g.members.length+(g.joined?1:0))/g.capacity*100)+'%"></span></div>'+(g.joined?btn("Cancelamento: regra pendente","toast",'data-message="Cancelamento e realocação aguardam definição. Nenhuma reserva real foi criada."',"btn-light",""):(g.members.length>=g.capacity?'<span class="tag red">Vagas esgotadas</span>':btn("Reservar minha vaga","enroll",'data-id="'+g.id+'"',"btn","")))+'</div>').join("")+'</div>';
}
function studentMaterials(){const materials=[["Roteiro de reflexão pessoal","PDF • Módulo 2"],["Exercício de observação","PDF • Módulo 1"],["Guia de conversas com propósito","PDF • Módulo 3"]];return title("Materiais de apoio","Arquivos e roteiros relacionados às videoaulas.")+
'<div class="panel"><div class="list">'+materials.map(a=>'<div class="list-item"><div class="inline">'+icon("file",true)+'<div><strong>'+a[0]+'</strong><p>'+a[1]+'</p></div></div>'+btn("Visualizar","toast",'data-message="Arquivo fictício para demonstração."')+'</div>').join("")+'</div></div>'}
function studentNotices(){return title("Avisos","Comunicados publicados pela administração.")+'<div class="stack">'+data.notices.map(n=>'<article class="panel"><div class="split-info"><h3>'+esc(n.title)+'</h3><span class="small muted">'+esc(n.date)+'</span></div><p style="margin:10px 0 0">'+esc(n.message)+'</p></article>').join("")+'</div>'}
function studentAccount(){return title("Meu acesso","Condição contratual e pendência pedagógica são estados distintos.")+'<div class="grid"><div class="panel"><h2>Programa Reconexão</h2><p>Pagamento único. Acesso enquanto o programa estiver disponível, com seis meses mínimos garantidos desde a contratação.</p><p>Contratação fictícia: dia '+demo.access.contractDay+'. Liberação fictícia do acesso: dia '+demo.access.releasedDay+'.</p><p>Não há renovação obrigatória aos seis meses nem cobrança adicional do Reconexão II. O tratamento do encerramento do programa ainda precisa ser definido.</p>'+dayDeadlinePanel()+'</div><div class="panel"><h2>Aluno de demonstração</h2><p>Major<br>major@reconexao.test</p><p>Somente dados fictícios. Estorno/chargeback e autorização real serão tratados pelo servidor da aplicação futura, preservando histórico.</p></div></div>'}
function field(name,label,value="",type="text",extra=""){return '<div class="field"><label for="f-'+esc(name)+'">'+esc(label)+'</label>'+(type==="textarea"?'<textarea id="f-'+esc(name)+'" name="'+esc(name)+'" '+extra+'>'+esc(value)+'</textarea>':'<input id="f-'+esc(name)+'" name="'+esc(name)+'" type="'+esc(type)+'" value="'+esc(value)+'" '+extra+' required>')+'</div>'}
function selectField(name,label,options,value){return '<div class="field"><label for="f-'+esc(name)+'">'+esc(label)+'</label><select id="f-'+esc(name)+'" name="'+esc(name)+'">'+options.map(o=>'<option value="'+esc(o.value??o)+'" '+((o.value??o)==value?"selected":"")+'>'+esc(o.label??o)+'</option>').join("")+'</select></div>'}
function openForm(type,id=null,moduleId=null){
let title="",fields="",entity=null;if(type==="module"){entity=data.modules.find(m=>m.id===id);title=entity?"Editar módulo":"Novo módulo";fields=field("title","Nome do módulo",entity?.title)+field("description","Descrição",entity?.description,"textarea")+selectField("status","Situação",["Publicado","Rascunho"],entity?.status||"Rascunho")}
if(type==="lesson"){const f=id?findLesson(id):null;entity=f?.l;title=entity?"Editar videoaula":"Adicionar videoaula";fields=selectField("module","Módulo",data.modules.map(m=>({value:String(m.id),label:m.title})),f?.m.id??moduleId??data.modules[0].id)+field("title","Título da aula",entity?.title)+field("duration","Duração estimada",entity?.duration||"20 min")+field("video","URL do vídeo (demonstrativa)",entity?.video??"https://videos.exemplo/aula","url")+selectField("status","Situação",["Publicado","Rascunho"],entity?.status||"Rascunho")}
if(type==="meeting"){entity=data.meetings.find(m=>m.id===id);title=entity?"Editar reunião":"Nova reunião";fields=field("title","Título",entity?.title)+field("date","Data (dd/mm/aaaa)",entity?.date)+field("time","Horário",entity?.time||"19:00")+field("link","Link Google Meet (simulado)",entity?.link||"https://meet.google.com/exemplo")+selectField("status","Situação",["Agendada","Realizada"],entity?.status||"Agendada")}
if(type==="recording"){entity=data.meetings.find(m=>m.id===id);title="Cadastrar gravação";fields='<p class="small muted">Reunião: '+esc(entity?.title)+'</p>'+field("recording","Link da gravação",entity?.recording||"https://videos.exemplo/gravação")}
if(type==="group"){entity=data.groups.find(g=>g.id===id);title=entity?"Editar encontro":"Novo encontro";fields=field("title","Nome do encontro",entity?.title)+field("date","Data (dd/mm/aaaa)",entity?.date)+field("time","Horário",entity?.time||"19:00")+field("capacity","Quantidade máxima de alunos",entity?.capacity||8,"number",'min="1" max="100"')}
if(type==="notice"){entity=data.notices.find(n=>n.id===id);title=entity?"Editar comunicado":"Novo comunicado";fields=field("title","Título",entity?.title)+field("message","Mensagem",entity?.message,"textarea")}
if(type==="email"){title="Preparar e-mail";fields=selectField("audience","Destinatários",["Alunos ativos","Alunos inativos por 30 dias ou mais","Alunos com Day em atraso"],"Alunos ativos")+field("title","Assunto")+field("message","Mensagem","", "textarea")}
state.modal={type,id,moduleId};renderModal(title,'<form id="demo-form">'+fields+'<div class="actions-row">'+btn("Cancelar","close-modal")+'<button class="btn" type="submit">'+(type==="email"?"Registrar envio simulado":"Salvar alterações")+'</button></div></form>');
}
function renderModal(title,body){const existing=document.querySelector(".modal-backdrop");if(existing)existing.remove();const wrap=document.createElement("div");wrap.className="modal-backdrop";wrap.innerHTML='<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">'+title+'</h2>'+btn("Fechar","close-modal")+'</div>'+body+'</div>';document.body.appendChild(wrap);wrap.addEventListener("click",e=>{if(e.target===wrap)closeModal()});wrap.querySelector("input,select,textarea,button")?.focus()}
function closeModal(){state.modal=null;document.querySelector(".modal-backdrop")?.remove()}
function saveForm(form){
const {type,id}=state.modal,fd=new FormData(form),v=k=>String(fd.get(k)||"").trim(),newId=()=>Date.now()+Math.floor(Math.random()*999);
if(type==="module"){let x=data.modules.find(m=>m.id===id);if(x){x.title=v("title");x.description=v("description");x.status=v("status")}else data.modules.push({id:newId(),title:v("title"),description:v("description"),status:v("status"),lessons:[]});}
if(type==="lesson"){const target=data.modules.find(m=>m.id===Number(v("module")));if(!target){toast("Selecione um módulo válido.");return}let video;try{video=new URL(v("video"));if(!["https:","http:"].includes(video.protocol))throw new Error()}catch{toast("Informe uma URL de vídeo HTTP ou HTTPS válida (apenas demonstrativa).");return}const original=id?findLesson(id):null;if(original)original.m.lessons=original.m.lessons.filter(l=>l.id!==id);target.lessons.push({id:id||newId(),title:v("title"),duration:v("duration"),video:v("video"),status:v("status")});state.adminModule=target.id;}
if(type==="meeting"){let x=data.meetings.find(m=>m.id===id);const before=x?{...x}:null;if(!x){x={id:newId(),recording:""};data.meetings.unshift(x)}Object.assign(x,{title:v("title"),date:v("date"),time:v("time"),link:v("link"),status:v("status")});if(before)meetingNotice(before,x)}
if(type==="recording"){const x=data.meetings.find(m=>m.id===id);if(x)x.recording=v("recording")}
if(type==="group"){let x=data.groups.find(g=>g.id===id);const cap=Number(v("capacity"));if(x&&cap<x.members.length+Number(x.joined)){toast("A capacidade não pode ser menor que o número de inscritos.");return}if(!x){x={id:newId(),members:[],joined:false};data.groups.push(x)}Object.assign(x,{title:v("title"),date:v("date"),time:v("time"),capacity:cap})}
if(type==="notice"){let x=data.notices.find(n=>n.id===id);if(!x){x={id:newId(),date:"17/10/2026"};data.notices.unshift(x)}Object.assign(x,{title:v("title"),message:v("message")})}
if(type==="email"){const audience=v("audience");data.emails.unshift({date:"17/10/2026",subject:v("title"),audience,recipients:audience==="Alunos ativos"?184:audience.startsWith("Alunos inativos")?28:36,status:"Simulado"})}
closeModal();render();toast(type==="email"?"Mensagem adicionada ao histórico de simulações. Nenhum e-mail foi enviado.":"Alteração aplicada aos dados demonstrativos desta sessão.");
}
function memberModal(id){const g=data.groups.find(g=>g.id===id);if(!g)return;renderModal("Inscritos — "+esc(g.title),'<p>'+(g.members.length+Number(g.joined))+' de '+g.capacity+' vagas ocupadas (dados fictícios).</p><div class="list">'+g.members.concat(g.joined?["Major"]:[]).map(n=>'<div class="list-item"><strong>'+esc(n)+'</strong>'+badge("Inscrito")+'</div>').join("")+'</div>')}
function toast(message){document.querySelector(".toast")?.remove();const div=document.createElement("div");div.className="toast";div.setAttribute("role","status");div.textContent=message;document.body.appendChild(div);clearTimeout(state.toastTimer);state.toastTimer=setTimeout(()=>div.remove(),4300)}
const demo={day:0,ledger:[],completed:new Set(),mediation:false,dayEntries:{},access:{payment:"confirmed",releasedDay:0,contractDay:0},threeFMCompleted:false,threeFMStarted:false,threeFMViewIntro:false,pointsView:"ready"};
function demoBanner(){return '<div class="alert demo-banner"><strong>Simulação local — sem autenticação, pagamentos ou respostas reais.</strong> Os dados são fictícios e desaparecem ao recarregar. Não informe dados pessoais.<div class="demo-tools">'+btn("Controles técnicos do apresentador","goto",'data-page="scenarios"')+' '+btn("Ajuda e privacidade","goto",'data-page="help"')+' '+btn("Sair da demonstração","goto",'data-role="home" data-page="home"')+'</div></div>'}
function award(key,label){if(demo.ledger.some(e=>e.key===key))return false;demo.ledger.push({key,label,points:10,day:demo.day});return true}
function pointTotal(){return demo.ledger.reduce((total,e)=>total+e.points,0)}
function moduleProgress(id){const m=data.modules.find(m=>m.id===id);const ls=m?m.lessons.filter(l=>l.status==="Publicado"):[];return ls.length?Math.round(ls.filter(l=>demo.completed.has(l.id)).length/ls.length*100):0}
function progression(){const eligible=pointTotal()>=200;return {eligible,unlocked:eligible,criteria:[{label:"Pelo menos 200 pontos de engajamento",ok:eligible}]}}
function demoAction(action,id){
  if(state.role!=="student"){toast("Explore as ações pela Área do aluno. O administrador não concede pontos.");return}
  if(!canLearn()){render();toast("Conclua a atividade obrigatória indicada antes de continuar.");return}
  let changed=false;
  if(action==="demo-lesson"){const f=findLesson(id);if(!f||f.m.status!=="Publicado"||f.l.status!=="Publicado")return;demo.completed.add(id);changed=award("lesson:"+id,"40% de trechos únicos simulados da aula: "+f.l.title)}
  if(action==="demo-live"){const m=data.meetings.find(m=>m.id===id);if(!m||m.status!=="Agendada")return;changed=award("live:"+id,"Clique simulado na live: "+m.title)}
  if(action==="demo-recording"){const m=data.meetings.find(m=>m.id===id);if(!m?.recording)return;changed=award("recording:"+id,"40% de trechos únicos simulados da gravação: "+m.title)}
  if(action==="demo-whatsapp")changed=award("whatsapp","Clique simulado no WhatsApp; ingresso não comprovado");
  if(action==="demo-day"){toast("Abra Reconexão Day e conclua as 12 respostas válidas.");return}
  if(action==="demo-mediation"){demo.mediation=true;toast("Início fictício da gravação de Mediação registrado. Não concede pontos de vídeo.");return}
  toast(changed?"Evento fictício registrado: +10 pontos nesta visita.":"Nenhum ponto adicional. Evento já registrado ou condição não atendida.");
}
function mediationPanel(){return '<div class="panel"><h2>Mediação de Conflito</h2><p>Cenário fictício: live indisponível e gravação dentro da janela de acesso. Iniciar a gravação cumpre a participação; pontos por 40% de trechos únicos válidos são separados.</p>'+btn("Simular início da gravação","demo-mediation")+'</div>'}
function journeyPage(){const p=progression();return title("Pontos e progressão","Engajamento demonstrativo. Reconexão II é liberado somente pelo saldo, sem cobrança adicional.")+
'<div class="grid grid-3">'+metric("Pontos simulados",pointTotal(),"10 por evento elegível, sem duplicação","chart")+metric("Aulas concluídas",demo.completed.size,"Histórico preservado","book")+metric("Dia da demonstração",demo.day,"Relógio fictício","clock")+'</div>'+section("Reconexão II")+'<div class="panel"><h2>'+(p.unlocked?"Nível II liberado por pontos":"Nível II: pontuação ainda insuficiente")+'</h2><p>'+pointTotal()+' de 200 pontos. Sem pagamento adicional ou exigência de concluir aulas, Mediação ou questionários específicos para o nível.</p><p>3FM e Day são obrigações gerais de navegação. Uma pendência Day não apaga a elegibilidade já conquistada.</p></div>'+section("Progresso por módulo")+'<div class="grid">'+data.modules.filter(m=>m.status==="Publicado").map(m=>'<div class="panel"><h3>'+esc(m.title)+'</h3><p>'+moduleProgress(m.id)+'% concluído • simulação</p><div class="progress"><span style="width:'+moduleProgress(m.id)+'%"></span></div></div>').join("")+'</div>'+section("Extrato de engajamento")+'<div class="panel">'+(demo.ledger.length?'<div class="list">'+demo.ledger.map(e=>'<div class="list-item"><div><strong>'+esc(e.label)+'</strong><p>Dia '+e.day+' • '+esc(e.key)+'</p></div><span>+10</span></div>').join("")+'</div>':'<p>Nenhum evento nesta visita.</p>')+'</div>'}
function questionnairesPage(){return title("Instrumentos","O Reconexão Day é o questionário inicial e o acompanhamento recorrente; o 3FM é distinto.")+'<div class="grid"><div class="panel"><h2>Reconexão Day</h2><p>12 perguntas oficiais, seis dimensões e escala 0–4. Pode ser respondido diariamente; concluir renova o prazo de 30 dias.</p>'+dayDeadlinePanel()+btn("Responder ao Day","goto",'data-role="student" data-page="day"')+'</div><div class="panel"><h2>3FM com Propósito</h2>'+badge(demo.threeFMCompleted?"Concluído — fixture técnica":"Especificação integral pendente")+'<p>Primeira atividade obrigatória após liberação. São 40 perguntas, cinco dimensões e quatro pilares. Fonte integral ainda necessária; nenhum formulário ou resultado foi inventado.</p></div></div>'+section("Comunidade externa")+'<div class="panel"><h2>WhatsApp</h2><p>Acesso enquanto o programa estiver disponível. Passar de seis meses ou ter Day pendente não remove automaticamente alunos do grupo externo.</p>'+btn("Simular clique no WhatsApp (+10)","demo-whatsapp")+'</div>'}
function hasDemoAccess(){return demo.access.payment==="confirmed"&&Number.isInteger(demo.access.releasedDay)}
function daySchedule(){const completed=Object.values(demo.dayEntries).filter(e=>Number.isInteger(e.completionDay)&&e.submitted);const last=completed.length?Math.max(...completed.map(e=>e.completionDay)):null;const reference=last??demo.access.releasedDay;const due=Number.isInteger(reference)?reference+30:null;return {last,reference,due,overdue:due!==null&&demo.day>due}}
function canUseDay(){return hasDemoAccess()&&demo.threeFMCompleted}
function canLearn(){return canUseDay()&&!daySchedule().overdue}
function studentGate(page){if(["scenarios","help"].includes(page))return null;if(!hasDemoAccess())return "access";if(!demo.threeFMCompleted)return "threefm";if(daySchedule().overdue&&page!=="day")return "day";return null}
function dayDeadlinePanel(){const d=daySchedule();return '<div class="deadline"><p>Dia atual: <strong>'+demo.day+'</strong> • Liberação do acesso: '+(demo.access.releasedDay??"pendente")+'</p><p>Última conclusão Day: <strong>'+(d.last===null?"nenhuma":"dia "+d.last)+'</strong> • Limite: <strong>'+(d.due===null?"aguardando liberação":"dia "+d.due)+'</strong></p><p>'+(d.due===null?"Prazo ainda não iniciado; acesso não liberado.":d.overdue?"Day em atraso. Conclua as 12 respostas para continuar navegando.":"Day dentro do prazo; uma conclusão antecipada também renova o limite.")+'</p><p class="small">Relógio relativo: dia limite permitido, dia seguinte atrasado. Fuso e horário da produção pendentes. Rascunho não renova prazo.</p></div>'}
function accessGatePage(){return title("Acesso ainda não liberado","O cenário atual não tem pagamento confirmado e acesso liberado.")+'<div class="panel"><p>Pagamento único para aquisição do programa. Nenhuma cobrança real é feita nesta demonstração.</p><p>O apresentador pode configurar o estado fictício nos controles técnicos.</p></div>'}
const threeFMWelcome="Para aproveitar plenamente sua experiência, convidamos você a concluir primeiro o 3FM com Propósito. Esse é o primeiro passo para se conhecer melhor e seguir sua jornada de transformação na Área do Aluno do Reconexão.";
const threeFMIntroduction=["Que bom ter você aqui! Este é um momento especial para olhar para si com carinho, reconhecer sua história e descobrir novas possibilidades para sua caminhada.","O 3FM com Propósito é um instrumento de reflexão e autoconhecimento desenvolvido a partir dos princípios do Método 3FM: Fé, Forma, Força e Mudança. Por meio de 40 perguntas, organizadas em cinco dimensões de reflexão, você será convidado(a) a observar diferentes aspectos da sua vida, reconhecer suas potencialidades e identificar oportunidades de crescimento pessoal.","Não existem respostas certas ou erradas. O mais importante é responder com sinceridade, respeitando sua história, seus sentimentos e o momento que você está vivendo. Suas respostas ajudarão a construir uma visão mais ampla da sua jornada, oferecendo orientações para que você possa avançar com mais consciência, equilíbrio e propósito.","Reserve alguns minutos para você. Responda com tranquilidade, sem pressa e sem se preocupar em agradar ninguém. Este espaço é um convite ao encontro consigo mesmo(a), à redescoberta de suas forças e à construção de novos caminhos.","Sua jornada começa com um primeiro passo. Vamos juntos?"];
function threeFMPage(){const filling=demo.threeFMStarted&&!demo.threeFMViewIntro;return title("3FM COM PROPÓSITO",threeFMWelcome)+(filling?'<section class="panel threefm-intro" aria-labelledby="threefm-greeting"><h2 id="threefm-greeting" tabindex="-1">SEJA BEM VINDO(a) AO RECONEXÃO</h2><p role="status">Você iniciou esta etapa. O preenchimento aguarda as perguntas oficiais; nenhuma resposta foi solicitada ou salva nesta prévia.</p><p>No instrumento real, você poderá retomar e corrigir cada resposta do rascunho antes de finalizar, sem precisar responder tudo em uma sessão.</p>'+btn("Ler a apresentação","threefm-intro")+'</section>':'<section class="panel threefm-intro" aria-labelledby="threefm-invitation"><h2 id="threefm-invitation">Um convite para se reconectar com o sentido da vida</h2>'+threeFMIntroduction.map(p=>'<p>'+esc(p)+'</p>').join("")+btn(demo.threeFMStarted?"RETOMAR MINHA JORNADA":"COMEÇAR MINHA JORNADA","threefm-start","","btn")+'</section>')+'<p class="small">Prévia demonstrativa: o formulário está pendente da especificação oficial. Não há perguntas ou resultados 3FM nesta versão.</p><details class="panel presenter-info"><summary>Informações do apresentador — 3FM</summary><p>Implementação integral pendente da especificação oficial: 40 perguntas, cinco dimensões, quatro pilares e escala 0–4. Rascunho de respostas e confirmação de salvamento estão bloqueados até a fonte integral. Não há reaplicação ou edição após conclusão.</p></details><section class="panel scenario-panel" aria-label="Somente demonstração"><h2>Somente demonstração</h2><p>Para avaliar as telas posteriores, simule a conclusão. São 10 pontos fictícios uma única vez, sem submissão de 40 respostas ou resultados calculados. Este botão não fará parte do instrumento real.</p>'+btn("Concluir questionário — demonstração","threefm-demo-complete")+'</section>'}
function helpPage(){return title("Ajuda e privacidade","Orientações da demonstração.")+'<div class="panel"><p>Use somente dados fictícios. Nada é salvo fora da memória desta visita; recarregar reinicia todo o cenário.</p><p>3FM pendente e Day atrasado impedem navegar nas telas educacionais, mas sair e consultar estas orientações continuam possíveis. Não há autenticação ou autorização de produção.</p></div>'}
function scenarioPage(){return title("Controles técnicos do apresentador","Fixtures de demonstração — não fazem parte do fluxo de produção do aluno.")+'<div class="panel scenario-panel"><h2>Somente estados fictícios</h2><p>Estado financeiro: '+esc(demo.access.payment)+' • 3FM: '+(demo.threeFMCompleted?"concluído por fixture":"pendente")+'</p><p>Alterar a confirmação ou retornar à entrada não apaga histórico nem reinicia o prazo. Reload reinicia a demonstração inteira.</p><div class="inline">'+btn("Pagamento pendente (cenário)","scenario-pending")+btn("Confirmar/liberar acesso (cenário)","scenario-release")+btn("3FM concluído — estado fictício de demonstração","scenario-threefm",demo.threeFMCompleted?"disabled":"")+'</div><p class="small">A fixture de conclusão 3FM registra somente os 10 pontos aprovados uma vez; não representa submissão validada ou resultado calculado.</p><div class="inline">'+btn("Avançar 1 dia fictício","scenario-day")+btn("Avançar 30 dias fictícios","scenario-30")+'</div><h3>Consulta de pontos — estados fictícios</h3><div class="inline">'+btn("Simular carregamento de pontos","scenario-points-loading")+btn("Simular erro de pontos","scenario-points-error")+btn("Restaurar consulta de pontos","scenario-points-ready")+'</div><h3>Envio de relato — cenário fictício</h3><p>Próximo envio: '+(reportDemo.failNext?'falha simulada':'sucesso simulado')+'. O texto fica na memória desta visita.</p>'+btn("Falhar próximo envio de relato","scenario-report-fail")+dayDeadlinePanel()+btn("Voltar à Área do aluno","goto",'data-role="student" data-page="home"')+'</div>'}
function scenarioAction(action){if(state.page!=="scenarios")return false;if(action==="scenario-pending")demo.access.payment="pending";else if(action==="scenario-release"){demo.access.payment="confirmed";if(demo.access.releasedDay===null)demo.access.releasedDay=demo.day}else if(action==="scenario-threefm"){if(!hasDemoAccess())return false;if(!demo.threeFMCompleted){demo.threeFMCompleted=true;award("threefm","3FM concluído — fixture técnica, sem submissão real")}}else if(action==="scenario-points-loading")demo.pointsView="loading";else if(action==="scenario-points-error")demo.pointsView="error";else if(action==="scenario-points-ready")demo.pointsView="ready";else if(action==="scenario-report-fail")reportDemo.failNext=true;else if(action==="scenario-day")demo.day++;else if(action==="scenario-30")demo.day+=30;else return false;return true}
function engagementRanking(){return [{id:"aluno-01",name:"Aluno ilustrativo 01",points:230},{id:"aluno-02",name:"Aluno ilustrativo 02",points:200},{id:"aluno-03",name:"Aluno ilustrativo 03",points:60},{id:"major",name:"Major (demonstração)",points:pointTotal()}].sort((a,b)=>b.points-a.points)}
function rankingPage(){if(state.role!=="admin")return '<div class="alert">Visualização disponível somente ao Administrador nesta demonstração.</div>';const rows=engagementRanking();return title("Ranking de engajamento","Dados ilustrativos; regras de exposição, população elegível e período pendentes.")+'<div class="alert">Somente pontos de participação. Notas e respostas Day/3FM são privadas e não entram neste ranking. Não é um ranking público real.</div><div class="panel"><p>Saldo do aluno Major na demonstração: <strong>'+pointTotal()+' pontos</strong>, o mesmo do extrato.</p><div class="table-wrap"><table class="data-table"><thead><tr><th>Aluno fictício</th><th>Pontos de engajamento</th><th>Empate</th></tr></thead><tbody>'+rows.map(row=>'<tr><td>'+esc(row.name)+'</td><td>'+row.points+'</td><td>'+(rows.filter(other=>other.points===row.points).length>1?"Empate — sem critério de desempate":"—")+'</td></tr>').join("")+'</tbody></table></div><p class="small">Sem prêmios, penalidades, bônus de sequência ou reinício mensal. Não há classificação por resultado educativo.</p></div>'}
const daySpec={
  "version": "Day V1.0 — PDF oficial, pp. 3–8",
  "dimensions": [
    "Consciência emocional",
    "Pensamento e percepção",
    "Limites e autonomia",
    "Hábitos e autocuidado",
    "Fé, valores e propósito",
    "Força e mudança"
  ],
  "questions": [
    "Hoje, consigo reconhecer o que estou sentindo sem me julgar por isso?",
    "Quando algo me incomoda, consigo perceber minhas emoções antes de decidir como agir?",
    "Consigo distinguir aquilo que realmente aconteceu daquilo que estou imaginando ou supondo?",
    "Hoje, consigo considerar outras maneiras de interpretar uma situação difícil?",
    "Consigo reconhecer o que depende de mim e o que não está sob meu controle?",
    "Consigo respeitar meus limites sem assumir responsabilidades que pertencem a outras pessoas?",
    "Hoje, consigo reservar algum tempo ou realizar alguma ação para cuidar de mim?",
    "Consigo identificar uma pequena atitude que pode contribuir para meu bem-estar neste dia?",
    "Consigo me conectar com os valores, as convicções ou os princípios que dão sentido à minha vida?",
    "Hoje, consigo encontrar algum motivo para manter a esperança, mesmo diante das dificuldades?",
    "Consigo reconhecer algum recurso pessoal que pode me ajudar a enfrentar os desafios de hoje?",
    "Estou disposto a experimentar uma pequena mudança de atitude, mesmo que não consiga resolver tudo agora?"
  ],
  "scale": [
    "Não consigo neste momento",
    "Consigo com muita dificuldade",
    "Consigo parcialmente",
    "Consigo na maior parte das situações",
    "Consigo com clareza ou consistência"
  ],
  "bands": [
    [
      0,
      9,
      "Recurso pouco percebido hoje"
    ],
    [
      10,
      19,
      "Recurso percebido com dificuldade"
    ],
    [
      20,
      29,
      "Recurso parcialmente percebido"
    ],
    [
      30,
      35,
      "Recurso percebido com frequência"
    ],
    [
      36,
      40,
      "Recurso percebido com consistência"
    ]
  ],
  "messages": [
    {
      "id": "D1-F1",
      "dimension": 0,
      "band": 0,
      "message": "Hoje pode estar difícil reconhecer ou acolher o que você sente. Não é preciso resolver tudo de uma vez; comece nomeando uma emoção, sem se condenar por senti-la.",
      "action": "Faça uma pausa breve e complete: “Neste momento, eu sinto…”. Se for difícil, escolha a palavra mais próxima."
    },
    {
      "id": "D1-F2",
      "dimension": 0,
      "band": 1,
      "message": "Você percebe alguma dificuldade para reconhecer suas emoções. Dar nome ao que sente pode ajudar a criar espaço entre a emoção e a próxima atitude.",
      "action": "Anote uma situação que mexeu com você e nomeie a emoção principal, sem julgar se ela é certa ou errada."
    },
    {
      "id": "D1-F3",
      "dimension": 0,
      "band": 2,
      "message": "Hoje você reconhece parte do que sente. Continue praticando essa observação com gentileza, especialmente antes de responder a uma situação difícil.",
      "action": "Antes de uma conversa ou decisão, pergunte a si: “O que estou sentindo e do que preciso agora?”."
    },
    {
      "id": "D1-F4",
      "dimension": 0,
      "band": 3,
      "message": "Você relata conseguir reconhecer suas emoções na maior parte das situações. Essa percepção pode apoiar escolhas mais conscientes.",
      "action": "Escolha uma situação do dia e observe como reconhecer sua emoção influenciou sua resposta."
    },
    {
      "id": "D1-F5",
      "dimension": 0,
      "band": 4,
      "message": "Neste registro, você percebe suas emoções com consistência. Preserve essa prática sem exigir de si controle perfeito em todos os momentos.",
      "action": "Mantenha um breve check-in emocional e, se necessário, procure alguém de confiança para conversar."
    },
    {
      "id": "D2-F1",
      "dimension": 1,
      "band": 0,
      "message": "Hoje pode ser difícil separar fatos de suposições. Quando a preocupação aumenta, tente voltar ao que é observável, sem precisar resolver todas as dúvidas agora.",
      "action": "Escreva um fato concreto e, separadamente, uma coisa que você está supondo. Pergunte: “Isto é um fato ou é um medo?”."
    },
    {
      "id": "D2-F2",
      "dimension": 1,
      "band": 1,
      "message": "Você identifica dificuldade para considerar outras interpretações. Isso pode ser praticado aos poucos, sem negar o que aconteceu.",
      "action": "Diante de uma preocupação, liste o que sabe com certeza e o que ainda não sabe."
    },
    {
      "id": "D2-F3",
      "dimension": 1,
      "band": 2,
      "message": "Você consegue fazer essa distinção parcialmente. Continue examinando os fatos e abrindo espaço para mais de uma interpretação.",
      "action": "Pergunte: “Que outra explicação também seria possível, sem ignorar os fatos?”."
    },
    {
      "id": "D2-F4",
      "dimension": 1,
      "band": 3,
      "message": "Você relata conseguir avaliar situações com flexibilidade na maior parte das vezes. Essa habilidade pode ajudar a evitar decisões tomadas apenas pelo medo.",
      "action": "Antes de concluir algo, confira se sua interpretação se baseia em fatos observáveis."
    },
    {
      "id": "D2-F5",
      "dimension": 1,
      "band": 4,
      "message": "Neste registro, você percebe consistência ao distinguir fatos de suposições. Mantenha essa prática sem exigir certeza sobre aquilo que ainda não pode saber.",
      "action": "Faça uma breve auditoria de preocupações: o que depende de mim e o que não depende?"
    },
    {
      "id": "D3-F1",
      "dimension": 2,
      "band": 0,
      "message": "Hoje pode estar difícil separar sua responsabilidade daquilo que pertence a outra pessoa. Você não precisa resolver tudo sozinho.",
      "action": "Escolha uma preocupação e divida em duas listas: “depende de mim” e “não está sob meu controle”."
    },
    {
      "id": "D3-F2",
      "dimension": 2,
      "band": 1,
      "message": "Você percebe dificuldade para sustentar seus limites. Um limite começa pela clareza sobre o que você fará, não por tentar controlar a decisão de outra pessoa.",
      "action": "Escreva um limite concreto: comportamento observado, impacto em você e atitude que está ao seu alcance."
    },
    {
      "id": "D3-F3",
      "dimension": 2,
      "band": 2,
      "message": "Você identifica alguns limites, mas talvez ainda seja difícil mantê-los em todas as situações. Prefira compromissos realistas a ameaças que não pretende cumprir.",
      "action": "Revise um limite e confirme se ele é claro, possível e depende de uma ação sua."
    },
    {
      "id": "D3-F4",
      "dimension": 2,
      "band": 3,
      "message": "Você relata conseguir reconhecer e respeitar seus limites na maior parte das situações. Continue sustentando-os com clareza e respeito.",
      "action": "Pratique uma frase breve que expresse seu limite sem acusação ou ameaça."
    },
    {
      "id": "D3-F5",
      "dimension": 2,
      "band": 4,
      "message": "Neste registro, você percebe consistência ao reconhecer sua autonomia e seus limites. Lembre-se de que firmeza e cuidado podem caminhar juntos.",
      "action": "Observe se o limite escolhido protege sua segurança e seu bem-estar, sem pretender controlar outra pessoa."
    },
    {
      "id": "D4-F1",
      "dimension": 3,
      "band": 0,
      "message": "Hoje o autocuidado pode parecer distante ou difícil. Comece por uma atitude pequena e viável, sem transformar o cuidado em mais uma cobrança.",
      "action": "Escolha uma ação mínima para hoje: beber água, descansar alguns minutos, alimentar-se ou falar com alguém de confiança."
    },
    {
      "id": "D4-F2",
      "dimension": 3,
      "band": 1,
      "message": "Você percebe dificuldade para reservar espaço para si. Seu cuidado também pertence a esta história e não precisa esperar que todos os problemas acabem.",
      "action": "Reserve alguns minutos para uma necessidade básica sua e escolha um horário realista."
    },
    {
      "id": "D4-F3",
      "dimension": 3,
      "band": 2,
      "message": "Você consegue identificar algumas ações de cuidado. Tente torná-las concretas e compatíveis com o que é possível hoje.",
      "action": "Defina uma ação pequena, quando fará e o que pode ajudar você a realizá-la."
    },
    {
      "id": "D4-F4",
      "dimension": 3,
      "band": 3,
      "message": "Você relata conseguir cuidar de si na maior parte das situações. Reconheça essas escolhas e procure mantê-las sem buscar perfeição.",
      "action": "Registre qual atitude de autocuidado foi possível e como deseja repeti-la."
    },
    {
      "id": "D4-F5",
      "dimension": 3,
      "band": 4,
      "message": "Neste registro, você percebe consistência em ações de cuidado. Preserve essa base e peça apoio quando suas necessidades excederem os recursos disponíveis.",
      "action": "Mantenha uma rotina de cuidado realista e identifique quem pode apoiar você quando necessário."
    },
    {
      "id": "D5-F1",
      "dimension": 4,
      "band": 0,
      "message": "Hoje pode estar difícil sentir esperança ou conexão com aquilo que dá sentido à sua vida. Não é necessário fingir que está tudo bem para buscar apoio e significado.",
      "action": "Escolha um valor importante para você e pergunte: “Qual pequena atitude de hoje pode expressar esse valor?”."
    },
    {
      "id": "D5-F2",
      "dimension": 4,
      "band": 1,
      "message": "Você percebe dificuldade para se conectar com seus valores ou com a esperança. Recomece com algo simples, sem exigir uma resposta pronta para tudo.",
      "action": "Reserve um momento para oração, reflexão, leitura significativa ou conversa com alguém de confiança, conforme suas convicções."
    },
    {
      "id": "D5-F3",
      "dimension": 4,
      "band": 2,
      "message": "Você encontra algum apoio em seus valores e convicções. Continue se aproximando deles por meio de escolhas concretas, respeitando seu momento.",
      "action": "Escreva uma razão pela qual vale a pena cuidar de si hoje e uma atitude que combine com ela."
    },
    {
      "id": "D5-F4",
      "dimension": 4,
      "band": 3,
      "message": "Você relata conseguir se conectar com seus valores e manter alguma esperança na maior parte das situações. Use essa referência para orientar um passo possível.",
      "action": "Escolha uma decisão do dia e confira se ela está alinhada aos seus valores."
    },
    {
      "id": "D5-F5",
      "dimension": 4,
      "band": 4,
      "message": "Neste registro, você percebe consistência na conexão com seus valores e propósito. Mantenha a esperança ligada à realidade e às ações possíveis, sem exigir garantias.",
      "action": "Registre uma atitude concreta que represente seus valores e reconheça o passo dado."
    },
    {
      "id": "D6-F1",
      "dimension": 5,
      "band": 0,
      "message": "Hoje pode ser difícil reconhecer recursos pessoais ou imaginar uma mudança possível. Você não precisa transformar tudo agora; um passo pequeno já pode ser um começo.",
      "action": "Complete: “Mesmo diante desta dificuldade, um recurso que posso buscar é…”. Pode ser uma pessoa, serviço, valor ou ação simples."
    },
    {
      "id": "D6-F2",
      "dimension": 5,
      "band": 1,
      "message": "Você percebe dificuldade para identificar recursos ou iniciar uma mudança. Pedir ajuda também pode ser uma forma de força.",
      "action": "Escolha uma pequena atitude e identifique quem ou o que pode ajudar você a realizá-la."
    },
    {
      "id": "D6-F3",
      "dimension": 5,
      "band": 2,
      "message": "Você reconhece alguns recursos e alguma disposição para mudar. Transforme essa intenção em uma ação específica, sem exigir que ela resolva tudo.",
      "action": "Defina um passo de hoje que seja pequeno, seguro e realizável."
    },
    {
      "id": "D6-F4",
      "dimension": 5,
      "band": 3,
      "message": "Você relata reconhecer recursos pessoais e experimentar mudanças na maior parte das situações. Continue valorizando o processo, não apenas o resultado final.",
      "action": "Registre uma ação que você pode realizar hoje e, depois, observe o que aprendeu com ela."
    },
    {
      "id": "D6-F5",
      "dimension": 5,
      "band": 4,
      "message": "Neste registro, você percebe recursos e disposição para mudar com consistência. Mantenha a flexibilidade: ajustar o caminho também faz parte da mudança.",
      "action": "Escolha uma mudança pequena para manter e reconheça o que já está funcionando."
    }
  ]
};
function validDayAnswer(value){return Number.isInteger(value)&&value>=0&&value<=4}
function currentDayAnswers(){return demo.dayEntries[demo.day]?.answers||Array(12).fill(null)}
function dayMetrics(answers){if(!Array.isArray(answers)||answers.length!==12)return {complete:false,dimensions:Array(6).fill(null),sum:null,overall:null};const complete=Array.from(answers).every(validDayAnswer);return {complete,dimensions:daySpec.dimensions.map((_,i)=>validDayAnswer(answers[i*2])&&validDayAnswer(answers[i*2+1])?(answers[i*2]+answers[i*2+1])/2:null),sum:complete?answers.reduce((a,b)=>a+b,0):null,overall:complete?answers.reduce((a,b)=>a+b,0)/12:null}}
function saveDayAnswer(index,value){if(state.role!=="student"||!canUseDay()||!Number.isInteger(index)||index<0||index>=12)return false;if(value!==null&&value!==""&&!(typeof value==="number"||typeof value==="string"&&/^[0-4]$/.test(value)))return false;const answer=value===""||value===null?null:Number(value);if(answer!==null&&!validDayAnswer(answer))return false;const entry=demo.dayEntries[demo.day]||(demo.dayEntries[demo.day]={answers:Array(12).fill(null),submitted:null,version:daySpec.version});entry.answers[index]=answer;return true}
function dayStatus(){const answers=currentDayAnswers();const entry=demo.dayEntries[demo.day];if(entry?.submitted&&answers.every((a,i)=>a===entry.submitted[i]))return "12/12 respondidas. Registro diário concluído nesta visita. Editar e reenviar não concede pontos adicionais.";const missing=answers.map((v,i)=>validDayAnswer(v)?null:"Q"+(i+1)).filter(Boolean);return (12-missing.length)+"/12 respondidas. "+(missing.length?"Pendentes: "+missing.join(", ")+". Sem nota geral ou pontos de conclusão.":"Todas respondidas. Use Concluir registro demonstrativo para confirmar.")+" Salvamento apenas na memória desta visita."}
function submitDay(){if(state.role!=="student"||!canUseDay())return false;const entry=demo.dayEntries[demo.day];if(!entry||!dayMetrics(entry.answers).complete){toast("Responda as 12 perguntas com valores inteiros de 0 a 4. Nenhum ponto concedido.");return false}entry.submitted=entry.answers.slice();if(entry.completionDay===undefined)entry.completionDay=demo.day;const granted=award("day:"+demo.day,"Reconexão Day — 12 respostas completas, dia "+demo.day);toast(granted?"Registro diário fictício concluído: +10 pontos.":"Registro do dia atualizado. Os 10 pontos já foram concedidos, sem duplicação.");return true}
function dayBand(sum,count){const index=daySpec.bands.findIndex(([min,max])=>sum*10>=min*count&&sum*10<=max*count);return index<0?null:index}
function exactAverage(sum,count){if(sum%count===0)return String(sum/count);if(sum*2%count===0)return String(sum/count).replace(".",",");return sum+"/"+count}
function dayResult(){const entry=demo.dayEntries[demo.day];if(!entry?.submitted||!entry.answers.every((a,i)=>a===entry.submitted[i]))return '<p>O registro atual ainda não foi concluído. Nenhuma nota geral é exibida.</p>';const r=dayMetrics(entry.submitted);const band=dayBand(r.sum,12);const min=Math.min(...r.dimensions),tied=r.dimensions.map((v,i)=>v===min?i:null).filter(i=>i!==null);const priority=tied.length===1?tied[0]:null;const message=priority===null?null:daySpec.messages.find(m=>m.dimension===priority&&m.band===dayBand(r.dimensions[priority]*2,2));return '<h2>Resultado educativo do dia '+demo.day+'</h2><p>Nota geral: <strong>'+exactAverage(r.sum,12)+'</strong> na escala de 0 a 4. Cálculo exato: '+r.sum+' ÷ 12.</p><p>'+ (band===null?'Classificação geral pendente: este valor cai entre os intervalos publicados. A precisão e o arredondamento aguardam decisão.':esc(daySpec.bands[band][2]))+'</p><div class="grid grid-3">'+r.dimensions.map((value,i)=>'<div class="day-dimension"><h3>D'+(i+1)+' — '+esc(daySpec.dimensions[i])+'</h3><p><strong>'+String(value).replace(".",",")+'</strong> / 4 • '+esc(daySpec.bands[dayBand(value*2,2)][2])+'</p></div>').join("")+'</div>'+ (message?'<div class="alert"><h3>'+esc(daySpec.dimensions[priority])+'</h3><p>'+esc(message.message)+'</p><p><strong>Ação prática sugerida:</strong> '+esc(message.action)+'</p><p>Texto literal da especificação V1 ('+esc(message.id)+'). Revisão editorial e vínculo ao conteúdo do curso pendentes.</p></div>':'<div class="alert">Dimensões com menor média: '+tied.map(i=>'D'+(i+1)).join(", ")+'. Devolutiva principal pendente de regra aprovada de desempate. Nenhuma dimensão foi escolhida automaticamente.</div>')+'<p>Este resultado é um retrato do que você percebe neste momento. Use-o como ponto de partida para escolher um pequeno passo, não como rótulo sobre quem você é.</p><p class="small">Reflexão educativa, sem diagnóstico. As médias de 0 a 4 são distintas dos 10 pontos de conclusão. Fonte: '+esc(daySpec.version)+'.</p>'}
function dayPage(){const answers=currentDayAnswers();return title("Reconexão Day","Uma pequena evolução por dia. Conhecer-se. Escolher. Agir. Evoluir.")+ '<div class="alert"><strong>Use somente respostas fictícias.</strong> Reflexão educativa, sem diagnóstico. Pode responder diariamente; ultrapassar 30 dias sem conclusão exige regularizar o Day para continuar. Os registros existem apenas nesta visita e desaparecem ao recarregar.</div>'+dayDeadlinePanel()+(daySchedule().overdue?'<div class="alert gate-notice" role="alert"><strong>Comunicado: Day em atraso.</strong> Conclua as 12 respostas para continuar. Seu saldo e acesso contratado foram preservados.</div>':'')+section("Registro demonstrativo — dia "+demo.day,btn("Preencher exemplo fictício (2)","day-example"))+'<p id="day-status" role="status" aria-live="polite">'+esc(dayStatus())+'</p><form id="day-form" class="stack">'+daySpec.dimensions.map((dimension,d)=>'<fieldset class="panel day-fieldset"><legend>D'+(d+1)+' — '+esc(dimension)+'</legend>'+[d*2,d*2+1].map(i=>'<div class="field"><label for="day-q'+i+'">Q'+(i+1)+'. '+esc(daySpec.questions[i])+'</label><select id="day-q'+i+'" data-day-question="'+i+'" name="q'+(i+1)+'"><option value="">Selecione uma resposta fictícia</option>'+daySpec.scale.map((label,value)=>'<option value="'+value+'" '+(answers[i]===value?'selected':'')+'>'+value+' — '+esc(label)+'</option>').join("")+'</select></div>').join("")+'</fieldset>').join("")+'<div class="actions-row">'+btn("Salvar parcial nesta visita","day-save")+'<button type="submit" class="btn">Concluir registro demonstrativo</button></div></form>'+section("Resultado do registro atual")+'<div class="panel" id="day-result">'+dayResult()+'</div>'+section("Histórico demonstrativo")+'<div class="panel"><p>Dias sem resposta não recebem zero. Fuso e virada do dia real aguardam definição; use os controles técnicos do apresentador.</p>'+ (Object.keys(demo.dayEntries).length?'<ul>'+Object.entries(demo.dayEntries).map(([day,entry])=>'<li>Dia '+day+': '+(entry.submitted?'conclusão registrada':'rascunho parcial')+' • '+entry.answers.filter(validDayAnswer).length+'/12 respostas atuais</li>').join("")+'</ul>':'<p>Sem registros nesta visita.</p>')+'</div>'}
function render(){if(state.role==="home"){app.innerHTML=home();return}let body="";if(state.role==="admin"){const map={home:adminDashboard,content:adminContent,module:adminModuleDetail,meetings:adminMeetings,groups:adminGroups,attendance:adminAttendance,notices:adminNotices,emails:adminEmails,ranking:rankingPage,reports:adminReports,journey:journeyPage,scenarios:scenarioPage,help:helpPage};body=(map[state.page]||adminDashboard)()}else{state.page=studentGate(state.page)||state.page;if(["ranking","reports"].includes(state.page))state.page="home";const map={home:studentHome,classes:studentClasses,module:studentModule,video:studentVideo,meetings:studentMeetings,groups:studentGroups,materials:studentMaterials,notices:studentNotices,journey:journeyPage,questionnaires:questionnairesPage,day:dayPage,account:studentAccount,access:accessGatePage,threefm:threeFMPage,help:helpPage,scenarios:scenarioPage};body=(map[state.page]||studentHome)()}app.innerHTML=layout(body)}
document.addEventListener("click",e=>{
const el=e.target.closest("[data-action]");if(!el)return;const a=el.dataset.action,id=Number(el.dataset.id);
if(state.role==="student"&&!canLearn()&&["watch","student-module","enroll","fake-video"].includes(a)){render();return}
if(a==="report-example"){if(updateReportDraft("Relato inteiramente fictício para testar a demonstração. Hoje reservei um momento para organizar minha rotina.\nEste texto não descreve uma pessoa real."))render()}
else if(a==="threefm-start"||a==="threefm-intro"){if(state.role==="student"&&state.page==="threefm"&&hasDemoAccess()&&!demo.threeFMCompleted){if(a==="threefm-start"){demo.threeFMStarted=true;demo.threeFMViewIntro=false}else demo.threeFMViewIntro=true;render();document.getElementById("threefm-greeting")?.focus?.()}}
else if(a==="points-retry"){if(state.role==="student"&&state.page==="home"&&canLearn()){demo.pointsView="ready";render()}}
else if(a==="threefm-demo-complete"){if(state.role==="student"&&state.page==="threefm"&&hasDemoAccess()){if(!demo.threeFMCompleted){demo.threeFMCompleted=true;award("threefm","3FM concluído — fixture técnica, sem submissão real")}state.page="home"}render()}
else if(a.startsWith("scenario-")){scenarioAction(a);render()}
else if(a==="goto"){state.role=el.dataset.role||state.role;state.page=el.dataset.page||"home";if(state.role==="home")state.page="home";render();window.scrollTo({top:0,behavior:"instant"})}
else if(a==="day-save"){render();toast("Rascunho guardado somente nesta visita. Nenhum ponto concedido.")}
else if(a==="day-example"&&canUseDay()){for(let i=0;i<12;i++)saveDayAnswer(i,2);render();toast("Doze valores fictícios preenchidos. Conclua para simular o envio.")}
else if(a.startsWith("demo-")){demoAction(a,id);render()}
else if(a==="module"){state.adminModule=id;state.page="module";render()}
else if(a==="student-module"){state.studentModule=id;state.page="module";render()}
else if(a==="watch"){if(!availableLesson(id)){toast("Aula ou módulo indisponível. Histórico preservado.");return}state.lesson=id;state.page="video";render()}
else if(a==="form")openForm(el.dataset.type,el.dataset.id?Number(el.dataset.id):null,el.dataset.module?Number(el.dataset.module):null);
else if(a==="close-modal")closeModal();
else if(a==="toggle-module"){const m=data.modules.find(m=>m.id===id);if(m)m.status=m.status==="Publicado"?"Rascunho":"Publicado";render();toast("Situação do módulo atualizada nesta sessão.")}
else if(a==="toggle-lesson"){const f=findLesson(id);if(f)f.l.status=f.l.status==="Publicado"?"Rascunho":"Publicado";render();toast("Situação da aula atualizada.")}
else if(a==="filter"){state.filter=el.dataset.filter;render()}
else if(a==="attendance-filter"){state.attendanceFilter=el.dataset.filter;render()}
else if(a==="mark-attendance"){const p=data.attendance[Number(el.dataset.index)];if(p)p.status=el.dataset.value;render();toast("Presença atualizada. O dashboard acompanha esta alteração.")}
else if(a==="group-members")memberModal(id);
else if(a==="enroll"){if(!progression().unlocked){toast("Turmas do Reconexão II: conclua a progressão simulada primeiro.");return}const g=data.groups.find(g=>g.id===id);if(!g)return;if(!g.joined&&g.members.length>=g.capacity){toast("Não há vagas disponíveis.");return}if(g.joined){toast("Cancelamento aguarda regra aprovada.");return}g.joined=true;render();toast("Inscrição simulada confirmada.")}
else if(a==="toast")toast(el.dataset.message||"Ação apenas demonstrativa.");
else if(a==="fake-video")toast("A reprodução depende da integração futura com hospedagem de vídeos.");
});
document.addEventListener("input",e=>{if(e.target.id==="report-text"&&updateReportDraft(e.target.value))syncReportForm()});
document.addEventListener("submit",e=>{if(e.target.id==="report-form"){e.preventDefault();submitReport();return}if(e.target.id==="day-form"){e.preventDefault();submitDay();render();return}if(e.target.id!=="demo-form")return;e.preventDefault();saveForm(e.target)});
document.addEventListener("change",e=>{if(e.target.dataset.dayQuestion===undefined)return;saveDayAnswer(Number(e.target.dataset.dayQuestion),e.target.value);const status=document.getElementById("day-status");if(status)status.textContent=dayStatus();const result=document.getElementById("day-result");if(result)result.innerHTML=dayResult()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
render();
