(function(e){function a(a){for(var t,n,r=a[0],l=a[1],c=a[2],g=0,d=[];g<r.length;g++)n=r[g],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);u&&u(a);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,a=0;a<o.length;a++){for(var i=o[a],t=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(t=!1)}t&&(o.splice(a--,1),e=n(n.s=i[0]))}return e}var t={},s={app:0},o=[];function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,a,i){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)n.d(i,t,function(a){return e[a]}.bind(null,t));return i},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/Quiz-Dark/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"034f":function(e,a,i){"use strict";i("85ec")},"3faa":function(e,a,i){"use strict";i("7d10")},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),s=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("v-app",[i("v-main",[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)],1)},o=[],n={name:"App",data:function(){return{}}},r=n,l=(i("034f"),i("2877")),c=i("6544"),u=i.n(c),g=i("7496"),d=i("f6c4"),v=Object(l["a"])(r,s,o,!1,null,null,null),p=v.exports;u()(v,{VApp:g["a"],VMain:d["a"]});var h=i("f309");t["a"].use(h["a"]);var m=new h["a"]({}),f=i("8c4f"),b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("span",{staticClass:"bg"}),t("v-container",[t("v-row",{staticClass:"text-center"},[t("v-col",{attrs:{cols:"12"}},[t("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"50"}})],1),t("v-col",{staticClass:"mb-4",staticStyle:{"z-index":"9999"}},[t("h1",{staticClass:"white--text display-2 font-weight-bold mb-3"},[e._v(" Sic mundus creatus est ")])])],1),t("v-row",{staticClass:"text-center"},[t("v-col",{staticClass:"mb-4",staticStyle:{"z-index":"9999"}},[t("transition",[t("h1",{staticClass:"subtitle-1  white--text"},[e._v("Scegli su quale stagione dovranno essere basate le domande")])])],1)],1),t("v-flex",{staticClass:"d-flex justify-space-around mx-0 flex-wrap "},[t("v-card",{staticClass:"my-12",attrs:{"max-width":"374",dark:""}},[t("v-img",{attrs:{id:"cursore",height:"250",src:i("c8d8")},on:{click:function(a){return e.$router.push("dark1")}}}),t("v-card-title",{staticClass:"justify-center"},[e._v("Prima stagione")]),t("v-card-text",[t("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[t("div",{staticClass:"grey--text mx-0"},[e._v(" Difficoltá ")]),t("v-spacer"),t("v-rating",{attrs:{value:2,color:"amber",dense:"",readonly:"",size:"17"}})],1),t("v-row",[t("v-col",[t("v-divider")],1)],1),t("div",{staticClass:"my-4 subtitle-1"},[e._v(" Ripercorri gli eventi narrati durante la prima stagione di Dark. Le domande, di bassa difficoltá, seguono le storie di tutti i personaggi della serie durante la stagione in senso cronologico, episodio per episodio, assicurandoti così delle domande senza alcun rischio di spoiler! ")])],1),t("v-divider",{staticClass:"mx-4"}),t("v-card-actions",[t("v-btn",{attrs:{color:"blue lighten-2",text:""},on:{click:function(a){return e.$router.push("dark1")}}},[e._v(" Inizia ")]),t("v-spacer"),t("v-icon",{attrs:{color:"blue lighten-2",large:""},on:{click:function(a){return e.$router.push("dark1")}}},[e._v("mdi-chevron-right")])],1)],1),t("v-card",{staticClass:"my-12",attrs:{"max-width":"374",dark:""}},[t("v-img",{attrs:{id:"cursore",height:"250",src:i("ddea")},on:{click:function(a){return e.$router.push("dark2")}}}),t("v-card-title",{staticClass:"justify-center"},[e._v("Seconda stagione")]),t("v-card-text",[t("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[t("div",{staticClass:"grey--text mx-0"},[e._v(" Difficoltá ")]),t("v-spacer"),t("v-rating",{attrs:{value:3,color:"amber",dense:"",readonly:"",size:"17"}})],1),t("v-row",[t("v-col",[t("v-divider")],1)],1),t("div",{staticClass:"my-4 subtitle-1"},[e._v(" Ripercorri gli eventi narrati durante la seconda stagione di Dark. Le domande, di media difficoltá, seguono le storie di tutti i personaggi della serie durante la stagione in senso cronologico, episodio per episodio, assicurandoti così delle domande senza alcun rischio di spoiler! ")])],1),t("v-divider",{staticClass:"mx-4"}),t("v-card-actions",[t("v-btn",{attrs:{color:"blue lighten-2",text:""},on:{click:function(a){return e.$router.push("dark2")}}},[e._v(" Inizia ")]),t("v-spacer"),t("v-icon",{attrs:{color:"blue lighten-2",large:""},on:{click:function(a){return e.$router.push("dark2")}}},[e._v("mdi-chevron-right")])],1)],1),t("v-card",{staticClass:"my-12",attrs:{disabled:"","max-width":"374",dark:""}},[t("v-img",{attrs:{id:"cursore",height:"250",src:i("d045")},on:{click:function(a){return e.$router.push("dark3")}}}),t("v-card-title",{staticClass:"justify-center"},[e._v("Terza stagione")]),t("v-card-text",[t("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[t("div",{staticClass:"grey--text mx-0"},[e._v(" Difficoltá ")]),t("v-spacer"),t("v-rating",{attrs:{value:5,color:"amber",dense:"",readonly:"",size:"17"}})],1),t("v-row",[t("v-col",[t("v-divider")],1)],1),t("div",{staticClass:"my-4 subtitle-1",attrs:{align:"center"}},[t("br"),t("br"),t("br"),t("h1",[e._v("In arrivo!")]),t("br"),t("br"),t("br")])],1),t("v-divider",{staticClass:"mx-4"}),t("v-card-actions",[t("v-btn",{attrs:{color:"blue lighten-2",text:""},on:{click:function(a){return e.$router.push("dark3")}}},[e._v(" Inizia ")]),t("v-spacer"),t("v-icon",{attrs:{color:"blue lighten-2",large:""},on:{click:function(a){return e.$router.push("dark3")}}},[e._v("mdi-chevron-right")])],1)],1)],1)],1)],1)},C=[],k={name:"Home",components:{},data:function(){return{}}},q=k,z=(i("cccb"),i("8336")),x=i("b0af"),_=i("99d9"),y=i("62ad"),N=i("a523"),w=i("ce7e"),S=i("0e8f"),M=i("132d"),T=i("adda"),V=i("1d4d"),D=i("0fd9"),J=i("2fa4"),I=Object(l["a"])(q,b,C,!1,null,null,null),j=I.exports;u()(I,{VBtn:z["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:y["a"],VContainer:N["a"],VDivider:w["a"],VFlex:S["a"],VIcon:M["a"],VImg:T["a"],VRating:V["a"],VRow:D["a"],VSpacer:J["a"]});var H=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"dark1"},[i("span",{staticClass:"bg"}),i("v-card",{staticClass:"mx-auto",attrs:{id:"container",dark:"","max-width":"600"}},[i("v-toolbar",{staticClass:"mt-1",attrs:{extended:"",color:"blue-grey",dark:""}},[i("v-toolbar-title",{staticClass:"flex text-center"},[i("h2",{staticClass:"text-center mt-10"},[e._v("Quiz Prima Stagione")])])],1),i("v-progress-linear",{attrs:{color:"lime lighten-1",value:e.progress}}),e._l(e.questions.slice(e.a,e.b),(function(a,t){return i("v-list",{directives:[{name:"show",rawName:"v-show",value:e.quiz,expression:"quiz"}],key:t,attrs:{flat:"",subheader:"","two-line":""}},[i("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(a){var t=a.on,s=a.attrs;return[i("v-layout",{attrs:{"align-end":"","justify-end":""}},[i("v-btn",e._g(e._b({attrs:{icon:"",text:"",color:"lime lighten-1",disabled:!e.next}},"v-btn",s,!1),t),[i("v-icon",[e._v("mdi-information")])],1)],1)]}}],null,!0),model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[i("v-card",{attrs:{dark:""}},[i("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(a.question)+" ")]),i("v-card-text",{staticClass:"my-5"},[e._v(" "+e._s(a.detail)+" ")]),i("v-divider"),i("v-card-actions",[i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){e.dialog=!1}}},[e._v(" Chiudi ")])],1)],1)],1)],1),i("h1",{staticClass:"text-center"},[e._v("Domanda "+e._s(e.b)+"/"+e._s(e.questions.length))]),i("v-list-item",{staticClass:"d-flex justify-center text-center"},[e._v(e._s(a.question))]),i("v-divider",{staticClass:"mt-10"}),i("v-list-item-group",{attrs:{color:"blue-grey--text"}},[e._l(a.suggestions,(function(t,s){return[i("v-list-item",{key:s,staticClass:"d-flex justify-center my-2",class:e.select?e.check(t):"",attrs:{id:"list",disabled:e.lockSelection},on:{click:function(a){return e.selectResponse(t)}}},[e._v(" "+e._s(t.suggestion)+" "),e.select&&t.correct?i("v-icon",{staticClass:"mx-5",attrs:{color:"white"}},[e._v("mdi-check")]):e._e(),e.select&&!t.correct?i("v-icon",{staticClass:"mx-5",attrs:{color:"white"}},[e._v("mdi-close")]):e._e()],1),s<a.suggestions.length-1?i("v-divider",{key:s+"-divider"}):e._e()]}))],2)],1)})),i("v-divider"),e.score_show?i("v-card",{staticClass:"mx-auto",attrs:{dark:"","max-width":"600"}},[i("h2",{staticClass:"text-center my-4"},[e._v("Il tuo punteggio ")]),i("h2",{staticClass:"text-center my-4"},[e._v(e._s(e.score)+"/"+e._s(e.questions.length))]),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{staticClass:"mx-10",on:{click:e.restartQuiz}},[e._v("Ricomincia "),i("v-icon",{attrs:{right:""}},[e._v("mdi-reload")])],1),i("v-btn",{staticClass:"mx-10",on:{click:function(a){return e.$router.push("/")}}},[e._v("Seleziona "),i("v-icon",{attrs:{right:""}},[e._v("mdi-home")])],1)],1),i("v-divider",{staticClass:"mt-5"})],1):e._e(),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{staticClass:"mx-10",attrs:{color:"blue-grey darken-1"},on:{click:e.skipQuestion}},[e._v(" Salta ")]),i("v-btn",{staticClass:"mx-10",attrs:{disabled:!e.next,color:"blue-grey darken-1"},on:{click:e.nextQuestion}},[e._v(" Avanti ")])],1)],2)],1)},A=[],L={data:function(){return{questions:[{detail:"Nella lettera che il padre lascia a Jonas, viene spiegato che Michael è in realtà Mikkel Nielsen, che è stato portato nel passato quando era piccolo (Jonas si rende conto di essere nipote di Martha).",question:"Cosa lascia Micheal kanhnwald a suo figlio Jonas prima di impiccarsi?",suggestions:[{suggestion:"Un libro"},{suggestion:"Una lettera",correct:!0},{suggestion:"Una torcia futuristica"},{suggestion:"Un contatore Geiger"}]},{detail:"Erik Obendorf è stato il primo ragazzo scomparso a Winden nel 2019 (al quale seguiranno Mikkel e Yasin), cosa che, successivamente, ha rivelato il lato Oscuro e misterioso della cittadina.",question:"Chi è giá scomparso a Winden, alcuni giorni prima dell'inizio delle vicende narrate nella serie?",suggestions:[{suggestion:"Yasin"},{suggestion:"Mikkel"},{suggestion:"Eirk",correct:!0},{suggestion:"Mads"}]},{detail:"Questo misterioso personaggio sa più di tutti gli altri; cerca di cambiare le cose, ma solo dopo qualche puntata scopriremo la sua vera identità: si tratta proprio di Jonas adulto, venuto dal futuro.",question:"Chi arriva all'hotel di Regina Tiedemann il giorno dopo la scomparsa di Mikkel Nielsen?",suggestions:[{suggestion:"Lo Straniero",correct:!0},{suggestion:"Ulrich Nielsen"},{suggestion:"Noah"},{suggestion:"Helge Doppler"}]},{detail:"Grazie al ritrovamento di questa mappa, Jonas deciderà di visitare le grotte della città, in questo modo avrà la conferma di ciò che diceva suo padre e dell'esistenza dei viaggi nel tempo.",question:"Cosa trova Jonas nella soffitta in cui il padre si è impiccato?",suggestions:[{suggestion:"Il suo testamento"},{suggestion:"Una lettera"},{suggestion:"Una mappa delle grotte",correct:!0},{suggestion:'Il libro "Viaggio nel tempo"'}]},{detail:"Claudia è uno dei personaggi più enigmatici, sappiamo che opera contro Adam e che aiuta Jonas,  ma non sappiamo quale sia il suo scopo. Inoltre si deduce che abbia viaggiato tra i mondi già da adulta.",question:"Che lavoro fa Claudia Tiedemann nel 1986?",suggestions:[{suggestion:"Preside"},{suggestion:"Giornalista"},{suggestion:"Dottoressa"},{suggestion:"Direttrice della centrale nucleare",correct:!0}]},{detail:"Mads Nielsen, fratello minore di Ulrich, è il primissimo bambino scomparso a Winden; il suo corpo verrà ritrovato nel 2019, il giorno successivo alla scomparsa di Mikkel.",question:"Nel 1986 Winden è scossa dalla scomparsa di un bambino. Di chi si tratta?",suggestions:[{suggestion:"Mikkel"},{suggestion:"Erik"},{suggestion:"Mads",correct:!0},{suggestion:"Yasin"}]},{detail:"Inizialmente Mikkel vive in ospedale, viene curato dall'infermiera Ines che si affeziona a lui e così successivamente decide di adottarlo (non si sa ancora per quale motivo lo imbottisse di farmaci).",question:"Chi si prende cura di Mikkel Nielsen quando arriva nel 1986?",suggestions:[{suggestion:"Jana Nielsen"},{suggestion:"Egon Tiedemann"},{suggestion:"Katharina Nielsen"},{suggestion:"Ines Kahnwald",correct:!0}]},{detail:"Elisabeth racconta alla madre di aver incontrato una persona di nome Noah, così da quel momento Charlotte inizierà a indagare su di lui come possibile sospettato per la scomparsa dei bambini.",question:"Chi incontra Elisabeth Doppler mentre torna a casa da scuola?",suggestions:[{suggestion:"Yasin"},{suggestion:"Hegel Doppler"},{suggestion:"Noah",correct:!0},{suggestion:"Peter Doppler"}]},{detail:"Durante un incontro inaspettato, Noah dà aElisabeth un orologio con inciso il nome di Charlotte. Non capiremo il motivo di questo gesto finché non ci verrà svelato che Charlotte è la figlia di Noah.",question:"Quale oggetto dá Elisabeth a Charlotte da parte di Noah?",suggestions:[{suggestion:"Una foto"},{suggestion:"Un ciondolo"},{suggestion:"Un bracciale d’oro"},{suggestion:"Un orologio da taschino",correct:!0}]},{detail:"Quando Yasin, l'amico di Elisabeth, incontra Helge, quest'ultimo si presenta dicendo si essere mandato da Noah; finisce così l'episodio, e in quello successivo scopriamo che anche Yasin è scomparso.",question:"Chi incontra Yasin mentre va a scuola da solo attraversando il bosco?",suggestions:[{suggestion:"Noah"},{suggestion:"Helge Doppler",correct:!0},{suggestion:"Claudia Tiedemann"},{suggestion:"Nessuno di questi"}]},{detail:"Nel 1986, Noah fa visita più volte a Mikkel in ospedale, in queste occasioni il bambino si rivela molto astuto. Da qui si può pensare che negli anni successivi agirà in qualche modo misteriosamente.",question:"“Dio ha un piano per ogni essere umano, anche per te”. Chi dice queste parole a Mikkel quando si trova in ospedale?",suggestions:[{suggestion:"Lo Straniero"},{suggestion:"Ines Kahnwald"},{suggestion:"Noah",correct:!0},{suggestion:"Helge Doppler"}]},{detail:"In questo modo, Jonas scopre della lettera lasciatagli da Michael, che Ines gli aveva nascosto, e comincia a indagare scoprendo cose che mai avrebbe potuto immaginare.",question:"Cosa contiene il pacco che Jonas Kahnwald riceve da Lo Straniero?",suggestions:[{suggestion:"Una lettera, un contatore Geiger e un libro"},{suggestion:"Una lettera, una torcia e un libro"},{suggestion:"Una torcia, una mappa e una lettera"},{suggestion:"Una torcia, una lettera e un contatore Geiger",correct:!0}]},{detail:"Durante la stagione vediamo Bartosz che viene manipolato da Noah, che lo porta a conoscenza di molti eventi che si sarebbero verificati successivamente, in modo da fargli compiere determinate azioni.",question:"Chi introduce Bartosz Tiedemann alla conoscenza dei viaggi nel tempo?",suggestions:[{suggestion:"Claudia Tiedemann"},{suggestion:"Lo Straniero"},{suggestion:"Noah",correct:!0},{suggestion:"Adam"}]},{detail:"Sappiamo che Tronte ha avuto più relazioni extraconiugali (infatti, per questo motivo, non si trovava in casa quando il figlio Mads è scomparso). Si teorizza che dalla loro relazione sia nata Regina.",question:"Con chi ha avuto una relazione extraconiugale Tronte Nielsen?",suggestions:[{suggestion:"Ines Kahnwald"},{suggestion:"Doris Tiedemann"},{suggestion:"Claudia Tiedemann",correct:!0},{suggestion:"Nessuna di queste"}]},{detail:"Grazie a questo ritrovamento, architettato da Claudia, Ulrich comincia a indagare sulle misteriose sparizioni nei pressi delle grotte, e si ritrova a viaggiare anch'egli nel tempo.",question:"Grazie a quale dettaglio Ulrich Nielsen capisce che il corpo trovato nel bosco è quello del fratello Mads?",suggestions:[{suggestion:"Una felpa"},{suggestion:"Le scarpe"},{suggestion:"Un taglio sul mento",correct:!0},{suggestion:"Un walkman"}]},{detail:"Quando scopre la vera identità del padre, Jonas decide di indagare e, arrivato alle grotte, attraversa il passaggi verso il 1986, dove rincontrerà Mikkel scomparso dal 2019 pochi giorni prima.",question:"Verso quale anno Jonas Kahnwald compie il suo primo viaggio nel tempo?",suggestions:[{suggestion:"1987"},{suggestion:"1986",correct:!0},{suggestion:"1921"},{suggestion:"2019"}]},{detail:"Ulrich, indagando sulle sparizioni, nota dei comportamenti sospetti nell'anziano Helge, questa ossessione lo porterà a voler uccidere Helge 1990) addirittura quando era ancora un bambino.",question:"Secondo Ulrich Nielsen, chi è il principale sospettato della scomparsa di Mikkel e degli altri ragazzi?",suggestions:[{suggestion:"Noah"},{suggestion:"Peter Doppler"},{suggestion:"Lo Straniero"},{suggestion:"Helge Doppler",correct:!0}]},{detail:"Quando Jonas tenta di portare Mikkel con sé, The Stranger lo ferma dicendogli che, se l'avesse fatto, la sua intera esistenza sarebbe stata compromessa.",question:"Da chi viene fermato Jonas nel tentativo di riportare Mikkel nella sua epoca?",suggestions:[{suggestion:"Da Noah"},{suggestion:"Dallo Straniero",correct:!0},{suggestion:"Da Ines Kahnwald"},{suggestion:"Da Egon Tiedemann"}]},{detail:"Ulrich, convinto della colpevolezza di Helge, decide di pedinarlo. Si dirigono quindi alle grotte, ma Helge attraversando il passaggio si recherà nel 1986, mentre Ulrich, sbagliando, finisce nel 1953.",question:"In che epoca arriva Ulrich Nielsen viaggiando attraverso le grotte?",suggestions:[{suggestion:"1953",correct:!0},{suggestion:"1987"},{suggestion:"1954"},{suggestion:"1986"}]},{detail:"Lo Straniero va da Tannhaus per farsi spiegare ciò che c'è scritto all'interno del suo libro; quando l'orologiaio chiede perché questo interesse, lo straniero rivela che ciò che ha scritto è vero.",question:"Chi rivela a H.G. Tanhaus(l’orologiaio) l’esistenza del varco nelle grotte e dei viaggi nel tempo?",suggestions:[{suggestion:"Ulrich Nielsen"},{suggestion:"Claudia Tiedemann"},{suggestion:"Lo Straniero",correct:!0},{suggestion:"Noah"}]},{detail:"Aleksander arriva a Winden nel 1986 come fuggitivo. Lo vediamo nascondere nel bosco una busta con una pistola e un passaporto dal quale scopriamo la sua vera identità: Boris Niewald (Nielsen+Kahnwald)",question:"Qual è il vero nome di Aleksander Tiedemann?",suggestions:[{suggestion:"Aleksander Köhler"},{suggestion:"Boris Köhler"},{suggestion:"Aleksander Niewald"},{suggestion:"Boris Niewald",correct:!0}]},{detail:"Nel 1953, Tannhaus riceve la visita di Claudia anziana che gli dà dei progetti per costruire la macchina del tempo portatile, che però porterà a termine 33 anni dopo vedendo quella di The Stranger.",question:"Chi commissiona e quando ad H.G. Tanhaus(l’orologiaio) la costruzione della macchina del tempo portatile?",suggestions:[{suggestion:"Claudia Tidemann nel 1953",correct:!0},{suggestion:"Noah nel 1953"},{suggestion:"Claudia Tidemann nel 1954"},{suggestion:"Lo Straniero nel 1986"}]},{detail:"Mentre Peter è nel bunker, appare uno squarcio a mezz'aria dal quale esce il corpo di un bambino che scopre, dal documento scolastico, essere Mads Nielsen. Peter chiamerà Tronte che rimarrà incredulo.",question:"Il corpo di quale ragazzo appare nel bunker, davanti a Peter Doppler, la sera del 4 novembre 2019?",suggestions:[{suggestion:"Mads",correct:!0},{suggestion:"Yasin"},{suggestion:"Erik"},{suggestion:"Mikkel"}]},{detail:"Quando Helge anziano giunge nel 1986, cerca di convincere il sé stesso adulto a non seguire Noah, ma, non riuscendoci, decide di provocare un incidente nel quale però rimarrà ucciso.",question:"Come muore Helge Doppler da anziano?",suggestions:[{suggestion:"Di vecchiaia"},{suggestion:"In un incidente stradale",correct:!0},{suggestion:"Per via di un malore"},{suggestion:"Ucciso da Noah"}]},{detail:"Quando The Stranger attiva la valigetta nelle grotte, nel bunker, in cui si trovano Helge e Jonas, si crea un wormhole; toccandolo, Helge (dal 1953) finisce nel 1986 e Jonas (dal 1986) va nel 2052.",question:"In quali epoche finiscono Helge e Jonas dopo essersi toccati attraverso il wormhole?",suggestions:[{suggestion:"Helge 2019 - Jonas 1986"},{suggestion:"Helge 1953 - Jonas 2052"},{suggestion:"Helge 1986 - Jonas 2052",correct:!0},{suggestion:"Helge 2052 - Jonas 2019"}]}],a:0,b:1,select:!1,score:0,quiz:!0,score_show:!1,next:!1,progress:0,lockSelection:!1,dialog:!1}},methods:{selectResponse:function(e){this.select=!0,this.next=!0,this.lockSelection=!0,e.correct&&this.score++},check:function(e){return e.correct?"correct":"incorrect"},nextQuestion:function(){this.lockSelection=!1,this.next&&(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++,this.select=!1,this.next=!1))},skipQuestion:function(){this.next||(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++))},restartQuiz:function(){Object.assign(this.$data,this.$options.data())}}},U=L,E=(i("99ae"),i("169a")),P=i("a722"),Q=i("8860"),$=i("da13"),O=i("1baa"),G=i("8e36"),K=i("71d9"),R=i("2a7f"),B=Object(l["a"])(U,H,A,!1,null,null,null),W=B.exports;u()(B,{VBtn:z["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:E["a"],VDivider:w["a"],VIcon:M["a"],VLayout:P["a"],VList:Q["a"],VListItem:$["a"],VListItemGroup:O["a"],VProgressLinear:G["a"],VToolbar:K["a"],VToolbarTitle:R["a"]});var Y=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"dark2"},[i("span",{staticClass:"bg2"}),i("v-card",{staticClass:"mx-auto",attrs:{id:"container",dark:"","max-width":"600"}},[i("v-toolbar",{staticClass:"mt-1",attrs:{extended:"",color:"blue-grey",dark:""}},[i("v-toolbar-title",{staticClass:"flex text-center"},[i("h2",{staticClass:"text-center mt-10"},[e._v("Quiz Seconda Stagione")])])],1),i("v-progress-linear",{attrs:{color:"lime lighten-1",value:e.progress}}),e._l(e.questions.slice(e.a,e.b),(function(a,t){return i("v-list",{directives:[{name:"show",rawName:"v-show",value:e.quiz,expression:"quiz"}],key:t,attrs:{subheader:"","two-line":""}},[i("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(a){var t=a.on,s=a.attrs;return[i("v-layout",{attrs:{"align-end":"","justify-end":""}},[i("v-btn",e._g(e._b({attrs:{icon:"",text:"",color:"lime lighten-1",disabled:!e.next}},"v-btn",s,!1),t),[i("v-icon",[e._v("mdi-information")])],1)],1)]}}],null,!0),model:{value:e.dialog,callback:function(a){e.dialog=a},expression:"dialog"}},[i("v-card",{attrs:{dark:""}},[i("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(a.question)+" ")]),i("v-card-text",{staticClass:"my-5"},[e._v(" "+e._s(a.detail)+" ")]),i("v-divider"),i("v-card-actions",[i("v-layout",{attrs:{flat:"","align-center":"","justify-center":""}},[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){e.dialog=!1}}},[e._v(" Chiudi ")])],1)],1)],1)],1),i("h1",{staticClass:"text-center"},[e._v("Domanda "+e._s(e.b)+"/"+e._s(e.questions.length))]),i("v-list-item",{staticClass:"d-flex justify-center text-center"},[e._v(e._s(a.question))]),i("v-divider",{staticClass:"mt-10"}),i("v-list-item-group",{attrs:{color:"blue-grey--text"}},[e._l(a.suggestions,(function(t,s){return[i("v-list-item",{key:s,staticClass:"d-flex justify-center my-2",class:e.select?e.check(t):"",attrs:{id:"list",disabled:e.lockSelection},on:{click:function(a){return e.selectResponse(t)}}},[e._v(" "+e._s(t.suggestion)+" "),e.select&&t.correct?i("v-icon",{staticClass:"mx-5",attrs:{color:"white"}},[e._v("mdi-check")]):e._e(),e.select&&!t.correct?i("v-icon",{staticClass:"mx-5",attrs:{color:"white"}},[e._v("mdi-close")]):e._e()],1),s<a.suggestions.length-1?i("v-divider",{key:s+"-divider"}):e._e()]}))],2)],1)})),i("v-divider"),e.score_show?i("v-card",{staticClass:"mx-auto",attrs:{dark:"","max-width":"600"}},[i("h2",{staticClass:"text-center my-4"},[e._v("Il tuo punteggio ")]),i("h2",{staticClass:"text-center my-4"},[e._v(e._s(e.score)+"/"+e._s(e.questions.length))]),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{staticClass:"mx-10",on:{click:e.restartQuiz}},[e._v("Ricomincia "),i("v-icon",{attrs:{right:""}},[e._v("mdi-reload")])],1),i("v-btn",{staticClass:"mx-10",on:{click:function(a){return e.$router.push("/")}}},[e._v("Seleziona "),i("v-icon",{attrs:{right:""}},[e._v("mdi-home")])],1)],1),i("v-divider",{staticClass:"mt-5"})],1):e._e(),i("v-card-actions",{staticClass:"justify-center"},[i("v-btn",{staticClass:"mx-10",attrs:{color:"blue-grey darken-1"},on:{click:e.skipQuestion}},[e._v(" Salta ")]),i("v-btn",{staticClass:"mx-10",attrs:{disabled:!e.next,color:"blue-grey darken-1"},on:{click:e.nextQuestion}},[e._v(" Avanti ")])],1)],2)],1)},F=[],X={data:function(){return{questions:[{detail:"Allľinizio della stagione, due persone lavorano al tunnel nel 1921: Noah ragazzo e quello che probabilmente è Bartosz adulto. Dopo un discorso tra i due, il primo ucciderà il secondo con un piccone.",question:"Quante persone stanno lavorando nelle grotte per scavare i tunnel, il 21 giugno 1921?",suggestions:[{suggestion:"1"},{suggestion:"3"},{suggestion:"2",correct:!0},{suggestion:"Nessuna"}]},{detail:"Ad affiancare Charlotte nelle indagini sulle persone scomparse, ci sarà il commissario Clausen, persona enigmatica e in cerca di risposte sulla scomparsa del fratello, avvenuta 34 anni prima.",question:"Come si chiama il detective che affiancherá la polizia di Winden per le indagini sulle persone scompare, fin dall'inizio della seconda stagione?",suggestions:[{suggestion:"Torben Wöller"},{suggestion:"Clausen",correct:!0},{suggestion:"Jankowski"},{suggestion:"Nielsen"}]},{detail:"Nel 2053, vediamo un gruppo di sopravvissuti all'apocalisse capitanati da Elisabeth adulta, che esorta tutti a stare lontani dalla 'zona morta', impiccando chi trasgredisce le regole.",question:"Chi è il leader dei sopravvissuti nella Winden del 2053?",suggestions:[{suggestion:"Claudia"},{suggestion:"Elisabeth",correct:!0},{suggestion:"Silja"},{suggestion:"Agnes"}]},{detail:"Claudia Tiedemann riceve una strana visita alla centrale nucleare da parte di una donna molto anziana. Questa non è altro che lei stessa più vecchia, che le spiega l'esistenza dei viaggi nel tempo.",question:"Chi rivela a Claudia adulta dell'esistenza dei viaggi nel tempo, nel 1987?",suggestions:[{suggestion:"Noah"},{suggestion:"Claudia anziana",correct:!0},{suggestion:"Jonas"},{suggestion:"Helge"}]},{detail:"Lo Straniero porta Hannah nel 1987 per dimostrarle dell'esistenza dei viaggi nel tempo. Qui Hannah vedrà Mikkel bambino e comprenderà I'incredibile paradosso di colui che diventerà suo marito.",question:"In quale epoca Lo Straniero porta Hannah nel futuro grazie al dispositivo di Tannhaus?",suggestions:[{suggestion:"Nel 1954"},{suggestion:"Nel 1986"},{suggestion:"Nel 1987",correct:!0},{suggestion:"Nel 1921"}]},{detail:"Dopo che Claudia anziana spiega tutto quello che sa a sé stessa adulta, torna nel 1954 dove sotterrerà la valigetta in modo che la sua versione più giovane la possa trovare nel 1987.",question:"Come ottiene Claudia il dispositivo di Tannhaus per viaggiare nel tempo?",suggestions:[{suggestion:"Glielo consegna Lo Straniero"},{suggestion:"Glielo consegna Noah"},{suggestion:"Lo trova seppellito nel giardino di casa",correct:!0},{suggestion:"Gielo consegna Claudia anziana"}]},{detail:"Helge bambino torna nel 1954 (dopo 7 mesi) grazie alla sedia nel bunker, adesso funzionante. Da questo momento inizierà quel rapporto tra Noah ed Helge che li porterà a collaborare nei rapimenti.",question:"Come fa Helge bambino a tornare nel 1954?",suggestions:[{suggestion:"Con la sedia nel bunker",correct:!0},{suggestion:"Viaggiando attraverso le grotte"},{suggestion:"Con il dispositivo di Tannhaus"},{suggestion:"Con la materia oscura"}]},{detail:"Agnes svela a Noah che le ultime pagine del diario sono nelle mani di Claudia anziana; ma, in cambio, Noah dovrà convincere Adam a riammettere Agnes nel Sic Mundus prima del'inizio dell'ultimo ciclo.",question:"Chi rivela a Noah dove si trovano le pagine mancanti del libro Sic Mundis?",suggestions:[{suggestion:"Noah giovane"},{suggestion:"Claudia"},{suggestion:"Agnes",correct:!0},{suggestion:"Adam"}]},{detail:"Claudia adulta va nel 2020, qui si informerà sui vari eventi che accadranno a Winden nel futuro. Scoprirà cosi quando sarebbe morto suo padre e vedrà di persona sua figlia Regina con il cancro.",question:"In quale epoca arriva Claudia Tiedemann nel suo primo viaggio nel tempo, grazie al dispositivo di Tannhaus?",suggestions:[{suggestion:"2019"},{suggestion:"2020",correct:!0},{suggestion:"1954"},{suggestion:"1986"}]},{detail:"Nel 2053, Jonas, entrando nella materia oscura stabilizzata, viaggia fino al 1921. Arrivato incontrerà Erna che lo ospiterà, inoltre, incontrerà un ragazzo che dimostrerà di sapere chi sia.",question:"In quale epoca arriva Jonas dopo aver viaggiato attravero la materia oscura del 2053?",suggestions:[{suggestion:"1920"},{suggestion:"1921",correct:!0},{suggestion:"1986"},{suggestion:"2020"}]},{detail:"Nel 2053, mentre Jonas cerca di stabilizzare la materia oscura, arriva Silja, che in seguito, dopo che Jonas attraversa la materia oscura stabilizzata, incontra Elisabeth e chiede spiegazioni su di essa.",question:"Chi è presente con Jonas nella centrale nucleare quando entra nella materia oscura, nel 2053?",suggestions:[{suggestion:"Silja",correct:!0},{suggestion:"Elisabeth adulta"},{suggestion:"Entrambe"},{suggestion:"Nessuno"}]},{detail:"Nel bunker, Charlotte, Peter, The Stranger e Hannah discutono di ciò che è successo. Charlotte si offre di rivelare a Katharina dove si trovano Mikkel e Ulrich, ma Katharina non crederà a una parola.",question:"Chi rivela a Katharina che Mikkel e Ulrich sono vivi ma in epoche diverse?",suggestions:[{suggestion:"Charlotte",correct:!0},{suggestion:"Peter"},{suggestion:"Hannah"},{suggestion:"Lo Straniero"}]},{detail:"Il ragazzo misterioso accompagna Jonas alla chiesa, dove incontra Noah che rivela che quel ragazzo è sé stesso giovane. Quindi lo accompagna da Adam, il quale gli rivelerà di essere lui ma anziano.",question:"Chi incontra Jonas dopo essere stato condotto nella sede di Sic Mundus?",suggestions:[{suggestion:"Adam",correct:!0},{suggestion:"Magnus"},{suggestion:"Agnes"},{suggestion:"Franziska"}]},{detail:"Ulrich, durante una visita di Egon, scopre che suo figlio Mikkel si trova nel suo stesso anno; attua quindi un piano per fuggire e cercarlo. Ma viene fermato dalla polizia che lo riporta in istituto.",question:"Perché Ulrich Nielsen fugge dall'ospedale psichiatrico nel quale è rinchiuso nel 1987?",suggestions:[{suggestion:"Per uccidere Egon"},{suggestion:"Per incontrare la madre"},{suggestion:"Per cercare Mikkel",correct:!0},{suggestion:"Nessuna di queste"}]},{detail:"Dopo aver convinto Bartosz a mostrare loro come usare la macchina del tempo, Martha e gli altri viaggiano fino al 1987 dove vedono Ulrich che, nella macchina della polizia, viene riportato in istituto.",question:"Dopo aver viaggiato nel tempo per la prima volta, in quale epoca si ritrovano Martha e gli altri ragazzi?",suggestions:[{suggestion:"1986"},{suggestion:"2019"},{suggestion:"1987",correct:!0},{suggestion:"1954"}]},{detail:"Mentre Charlotte cerca indizi nel negozio di nonno, riceve la visita di Noah, che sembra conoscerla molto bene. L'uomo le rivela parecchie cose, tra queste, il fatto di essere suo padre.",question:"Cosa scopre Charlotte parlando con Noah, all'interno del vecchio negozio di Tannhaus?",suggestions:[{suggestion:"L'identitá della madre"},{suggestion:"L'identitá del padre",correct:!0},{suggestion:"Entrambe le cose"},{suggestion:"Nessuna di queste"}]},{detail:"Dopo la conversazione con Adam, quest'ultimo convince Jonas di poter cambiare gli eventi tornando dove tutto è iniziato. Jonas, quindi, andrà al 20 giugno 2019, il giorno prima del suicidio del padre.",question:"In quale giorno e in che anno arriva Jonas dopo aver viaggiato con la materia oscura nella sede di Sic Mundus?",suggestions:[{suggestion:"20 Giugno 2020"},{suggestion:"21 Giugno 2019"},{suggestion:"20 Giugno 2019",correct:!0},{suggestion:"Nessuna di queste"}]},{detail:"I ragazzi trovano il medaglione di San Cristoforo, il protettore dei viaggiatori. Lo stesso medaglione che Lo Straniero lascerà in camera di Martha, facendole capire che lui è tornato nella sua epoca.",question:"Cosa trovano Martha e Jonas nella sabbia quando si trovano al lago?",suggestions:[{suggestion:"Il medaglione di Sant'Anna"},{suggestion:"Il medaglione di San Cristoforo",correct:!0},{suggestion:"Il medaglione di San Lorenzo"},{suggestion:"Il medaglione di San Claudio"}]},{detail:"Mentre Jonas cerca di impedire a Michael di suicidarsi, arriva Claudia che sembra conoscere entrambi. Ella convince Jonas a lasciare il padre al proprio destino, perché tutto vada come è sempre andato.",question:"Chi entra in casa Kahnwald mentre Jonas cerca di impedire al padre di impiccarsi?",suggestions:[{suggestion:"Adam"},{suggestion:"Noah"},{suggestion:"Claudia",correct:!0},{suggestion:"Hannah"}]},{detail:"Hannah usa la valigetta per andare nel 1954. Qui, dopo aver visto UIrich e averlo lasciato al suo destino, si presenta a Egon come 'Katharina Nielsen'; si presume che i due avranno una relazione.",question:"In quale epoca arriva Hannah nel suo secondo viaggio nel tempo?",suggestions:[{suggestion:"1954",correct:!0},{suggestion:"1953"},{suggestion:"1986"},{suggestion:"1987"}]},{detail:"Clausen scopre che Aleksander rubò l'identità del fratello scomparso 34 anni prima (Aleksander Köhler), cosi lo arresta; difatti Aleksander si troverà in prigione nel momento dell'apocalisse.",question:"Per quale motivo il detective Clausen arresta Aleksander Tiedemann?",suggestions:[{suggestion:"Per l'omicidio del fratello"},{suggestion:"Per una rapina"},{suggestion:"Per frode bancaria"},{suggestion:"Per furto d'identitá",correct:!0}]},{detail:"Dopo che Claudia uccide involontariamente il padre, torna a casa dove arriverà Jonas dicendo che la sé stessa anziana gli ha detto cosa ha appena fatto. Cosi la convincerà a seguirlo nel futuro.",question:"Chi entra in casa di Claudia Tiedemann nel 1987 per portarla nel 2020?",suggestions:[{suggestion:"Claudia anziana"},{suggestion:"Jonas",correct:!0},{suggestion:"Helge"},{suggestion:"Agnes"}]},{detail:"Poco prima che scoppi l'apocalisse, arrivano nel bunker Peter ed Elisabeth, arrivano poi Claudia adulta e Regina. Per ultimo, arriva Noah ragazzo (dal 1921) che incontrerà Elisabeth per la prima volta.",question:"Quante persone sono presenti nel bunker qualche istante prima che scoppi l'apocalisse?",suggestions:[{suggestion:"4"},{suggestion:"5",correct:!0},{suggestion:"3"},{suggestion:"6"}]},{detail:"Prima di andare nel bunker, Noah ragazzo dà a The Stranger una lettera da parte di Martha. contenuto sconvolgerà l'uomo, che si precipiterà a salvare i ragazzi, portandoli via con la valigetta.",question:"Quali personaggi sono stati salvati dallo Straniero poco prima dell'apocalisse?",suggestions:[{suggestion:"Magnus, Martha e Franziska"},{suggestion:"Elisabeth, Franziska e Bartosz"},{suggestion:"Martha, Magnus ed Elisabeth"},{suggestion:"Bartosz, Magnus e Franziska",correct:!0}]},{detail:"Adam uccide Martha, così che questo dolore porti Jonas a diventare lui. Lo stesso Jonas verrà poi salvato dall'apocalisse da una Martha proveniente da un altro mondo, che lo porterà con sé.",question:"Chi muore qualche istante prima che l'apocalisse colpisca Winden?",suggestions:[{suggestion:"Elisabeth adulta"},{suggestion:"Hannah"},{suggestion:"Martha",correct:!0},{suggestion:"Charlotte"}]}],a:0,b:1,select:!1,score:0,quiz:!0,score_show:!1,next:!1,progress:0,lockSelection:!1,dialog:!1}},methods:{selectResponse:function(e){this.select=!0,this.next=!0,this.lockSelection=!0,e.correct&&this.score++},check:function(e){return e.correct?"correct":"incorrect"},nextQuestion:function(){this.lockSelection=!1,this.next&&(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++,this.select=!1,this.next=!1))},skipQuestion:function(){this.next||(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++))},restartQuiz:function(){Object.assign(this.$data,this.$options.data())}}},Z=X,ee=(i("3faa"),Object(l["a"])(Z,Y,F,!1,null,null,null)),ae=ee.exports;u()(ee,{VBtn:z["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:E["a"],VDivider:w["a"],VIcon:M["a"],VLayout:P["a"],VList:Q["a"],VListItem:$["a"],VListItemGroup:O["a"],VProgressLinear:G["a"],VToolbar:K["a"],VToolbarTitle:R["a"]});var ie=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"dark3"},[i("h1",[e._v("dark3")])])}],se={},oe=Object(l["a"])(se,ie,te,!1,null,null,null),ne=oe.exports;t["a"].use(f["a"]);var re=[{path:"/",name:"home",component:j},{path:"/dark1",name:"dark1",component:W},{path:"/dark2",name:"dark2",component:ae},{path:"/dark3",name:"dark3",component:ne}],le=new f["a"]({mode:"hash",base:"/Quiz-Dark/",routes:re}),ce=le;t["a"].config.productionTip=!1,new t["a"]({vuetify:m,router:ce,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,a,i){},"7d10":function(e,a,i){},"85ec":function(e,a,i){},"96f0":function(e,a,i){},"99ae":function(e,a,i){"use strict";i("96f0")},"9b19":function(e,a,i){e.exports=i.p+"img/logo.5a1137e9.svg"},c8d8:function(e,a,i){e.exports=i.p+"img/dark-bg.799a2e9d.jpg"},cccb:function(e,a,i){"use strict";i("5ced")},d045:function(e,a,i){e.exports=i.p+"img/dark3.ac73216c.jpg"},ddea:function(e,a,i){e.exports=i.p+"img/dark2.46bedc8d.png"}});
//# sourceMappingURL=app.5281395c.js.map