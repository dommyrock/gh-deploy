(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(59)},4:function(e,t,n){e.exports={bodyexpenses:"expenses_bodyexpenses__30zKe",expensescontainer:"expenses_expensescontainer__STN0J",h1expenses:"expenses_h1expenses__2TA8R",h3expenses:"expenses_h3expenses__2tVaH",h4expenses:"expenses_h4expenses__13THH",inc_exp_container:"expenses_inc_exp_container__-YLNz",moneyexp:"expenses_moneyexp__2xSl8",plus:"expenses_plus__1icfo",minus:"expenses_minus__3rSWc",labelexpenses:"expenses_labelexpenses__m06gf",inputexpenses:"expenses_inputexpenses__3edzr",btnexpenses:"expenses_btnexpenses__3cJKK",deletebtnexpenses:"expenses_deletebtnexpenses__1Sn5Q",listexpenses:"expenses_listexpenses__r57Hg"}},44:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),o=(n(44),n(17)),s=n(11);function i(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var m=n(16),u=n(12);function d(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(u.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(u.a)({},e,{transactions:[t.payload].concat(Object(m.a)(e.transactions))});default:return e}}var p={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},E=Object(a.createContext)(p),f=function(e){var t=Object(a.useReducer)(d,p),n=Object(s.a)(t,2),l=n[0],c=n[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,mockTasks:l.mockTasks,deleteTransaction:function(e){setTimeout((function(){c({type:"DELETE_TRANSACTION",payload:e})}),500)},addTransaction:function(e){c({type:"ADD_TRANSACTION",payload:e})}}},e.children)},x=n(4),g=n.n(x),h={textAlign:"center"},v=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:g.a.h4expenses,style:h},"Your Balance"),r.a.createElement("h1",{className:g.a.h1expenses,style:h},"$",e))},O=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:g.a.inc_exp_container},r.a.createElement("div",null,r.a.createElement("h4",{className:g.a.h4expenses},"Income"),r.a.createElement("p",{className:"".concat(g.a.moneyexp," ").concat(g.a.plus)},t)),r.a.createElement("div",null,r.a.createElement("h4",{className:g.a.h4expenses},"Expense"),r.a.createElement("p",{className:"".concat(g.a.moneyexp," ").concat(g.a.minus)},n)))},b=n(13),w=function(e){var t=e.transaction,n=Object(a.useContext)(E).deleteTransaction,l=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"".concat(g.a.minus):"".concat(g.a.plus)},t.text," ",r.a.createElement("span",null,l,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:g.a.deletebtnexpenses},"x"))},N=(n(27),function(){var e,t=Object(a.useContext)(E),n=t.transactions,l=t.tasksFromBackend;Object(m.a)(n.map((function(e){console.log("new obj id: "+e.id);var t={};return t.id=e.id,t.content=e.text,t}))),e={},Object(b.a)(e,i(),{name:"Requested",items:l}),Object(b.a)(e,i(),{name:"Done",items:[]});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:g.a.listexpenses},n.map((function(e){return r.a.createElement(w,{key:e.id,transaction:e})}))))}),y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(0),o=Object(s.a)(c,2),m=o[0],u=o[1],d=Object(a.useContext)(E).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:i(),text:n,amount:+m};console.log(t.id),d(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:g.a.labelexpenses,htmlFor:"text"},"Text"),r.a.createElement("input",{className:g.a.inputexpenses,type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:g.a.labelexpenses,htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{className:g.a.inputexpenses,type:"number",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:g.a.btnexpenses},"Add transaction")))},_={textAlign:"center"},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.bodyexpenses},r.a.createElement("h2",{style:_},"Expense tracker"),r.a.createElement("hr",null),r.a.createElement("div",{className:g.a.expensescontainer},r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(N,null),r.a.createElement(y,null))))},S=n(23),T=n.n(S),A=n(30),C=(n(50),n(60)),j=function(){return Object(a.useEffect)((function(){(function(){var e=Object(A.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){console.log("Client: ".concat(e," Subscribed! --\x3eStarting to read data produced by ").concat(e)),t.stream("GetSensorData",e).subscribe({next:function(t){console.log(t);var n=document.createElement("button");switch(e){case"pink":n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;case"blue":n.className="buttonBlue",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;default:n.className="buttonDefault",n.textContent=t,document.getElementById("messagesList").appendChild(n)}window.scrollTo(0,document.getElementById("messagesList").scrollHeight)},complete:function(){console.log("".concat(e," Completed."));var t=document.createElement("btn");t.className="buttonBlue",t.textContent="".concat(e," Stream Completed."),document.getElementById("messagesList").appendChild(t)},error:function(t){console.log("".concat(e,' error: "').concat(t,'"'));var n=document.createElement("btn");n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n)}})},(t=(new C.HubConnectionBuilder).withAutomaticReconnect().withUrl("/outputstream").configureLogging(C.LogLevel.Debug).build()).onreconnected(Object(A.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.invoke("GetSensorNames");case 2:e.sent.forEach(n);case 4:case"end":return e.stop()}}),e)})))),e.prev=3,e.next=6,t.start();case 6:return e.next=8,t.invoke("GetSensorNames").catch((function(e){return console.error(e.toString())}));case 8:e.sent.forEach(n),t.on("SensorAdded",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),alert(e.t0);case 16:t.on("StreamRemoved",(function(e){console.log("Stream removed(Client ended stream). Disconnecting client now..."),console.log(e)}));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:g.a.inc_exp_container},r.a.createElement("h1",null,"SignalR Stream component")),r.a.createElement("div",{id:"messagesList"}))},D=(n(54),n(55),n(56),function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gatsby-highlight"},r.a.createElement("pre",null,r.a.createElement("code",{className:"language-"+e.language},e.code))))}),B={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},F=function(e){return r.a.createElement("div",{className:"two-columns-column right-div-highlight",style:B},r.a.createElement("h1",null,"title placeholders"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("iframe",{style:{margin:"10px"},width:e.width,height:e.height,src:e.src,frameBorder:"0",allowFullScreen:""})))},I=n(15),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.b,{to:"/table"},r.a.createElement("h2",null,"-Table example")),r.a.createElement(I.b,{to:"/featured"},r.a.createElement("h2",null,"-Animated data example")),r.a.createElement(I.b,{to:"/expenses"},r.a.createElement("h2",null,"-Expenses calculator example")),r.a.createElement(I.b,{to:"/stream"},r.a.createElement("h2",null,"-stream route")),r.a.createElement("div",{className:"two-columns-row",style:H},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"js"),r.a.createElement(D,{code:"const dictionary = {the: 22038615, be: 12545825, and: 10741073, \n    of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};\n  \n  function etWordFrequency(dictionary, word) {\n    return dictionary[word];\n  }\n  \n  console.log(getWordFrequency(dictionary, 'the'));\n  console.log(getWordFrequency(dictionary, 'in'));\n  ",language:"js"})),r.a.createElement(F,{width:"300",height:"150",src:"https://www.youtube.com/embed/0eJEUOk6eCU"})),r.a.createElement("div",{className:"two-columns-row",style:H},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"css"),r.a.createElement(D,{code:"\n  .archive {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n    grid-gap: 32px;\n    grid-auto-flow: dense;\n  }\n  \n  /* Extra-wide grid-posts */\n  .article:nth-child(31n + 1) {\n    grid-column: 1 / -1;\n  }\n  .article:nth-child(16n + 2) {\n    grid-column: -3 / -1;\n  }\n  .article:nth-child(16n + 10) {\n    grid-column: 1 / -2;\n  }\n  \n  /* Single column display for phones */\n  @media (max-width: 459px) {\n    .archive {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  ",language:"css"})),r.a.createElement("div",{className:"two-columns-column"})),r.a.createElement("div",{className:"two-columns-row",style:H},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"jsx"),r.a.createElement(D,{code:"\n  export const GlobalProvider = props => {\n    const [state, dispatch] = useReducer(transactionReducer, initialState);\n  \n    //#region  Actions\n  \n    //delete after 500ms delay (like debounce...)\n    function deleteTransaction(transactionId) {\n      setTimeout(() => {\n        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });\n      }, 500);\n    }\n  \n    function addTransaction(transaction) {\n      dispatch({ type: ADD_TRANSACTION, payload: transaction });\n    }\n    //#endregion\n  \n    return (\n      <GlobalContext.Provider\n        value={{\n          transactions: state.transactions,\n          mockTasks: state.mockTasks,\n          deleteTransaction,\n          addTransaction\n        }}\n      >\n        {props.children}\n      </GlobalContext.Provider>\n    );\n  };\n  ",language:"jsx"})),r.a.createElement("div",{className:"two-columns-column right-div-highlight",style:R},r.a.createElement("h2",null,"dont even need text"))))},H={justifyContent:"center"},R={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},W=function(e){return r.a.createElement("a",{href:e.link,target:"_blank",className:"action","data-v-b770a5e2":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"action__icon","data-v-b770a5e2":!0},r.a.createElement("span",{"data-v-b770a5e2":!0})),r.a.createElement("div",{className:"action__content","data-v-b770a5e2":!0},r.a.createElement("h4",{className:"action__title","data-v-b770a5e2":!0},e.title),r.a.createElement("p",{"data-v-b770a5e2":!0},e.description)))},U=(n(58),function(){return r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(W,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(W,{link:e.link,title:e,description:e.description})})))))}),$=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],P=function(e){var t=e.cell,n=e.columns,a=t;return r.a.createElement("div",{className:"flex-row-".concat(n," first"),role:"cell"},a)},G=function(e){var t=e.row,n=e.columns;return r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},t.map((function(e,t){return r.a.createElement(P,Object.assign({cell:e,columns:n},{key:t}))})))},J=function(e){var t=e.firstHeader,n=e.restOfHeaders,a=e.rowsData;return r.a.createElement("div",{className:"table-container",role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"columnheader"},t,r.a.createElement("br",null),r.a.createElement("a",{className:"a-wiki-custom",href:"https://en.wikipedia.org/wiki/Best,_worst_and_average_case"},"Wiki")),n.map((function(e,t){return r.a.createElement("div",{className:"flex-row-6",role:"columnheader",key:t},e)}))),a.map((function(e,t){return r.a.createElement(G,Object.assign({row:e,columns:6},{key:t}))})))},q=["Algorithm","Data structure","Time complexity:Best","Time complexity:Average","Time complexity:Worst","Space complexity:Worst"],K=[["Quick sort","Array","O(n log(n))","O(n log(n))","O(n2)","O(n)"],["Merge sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(n)"],["Heap sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(1)"],["Smooth sort","Array","O(n)","O(n log(n))","O(n log(n))","O(1)"],["Buble sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Insertion sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Selection sort","Array","O(n2)","O(n2)","O(n2)","O(1)"],["Bogo sort","Array","O(n)","O(n n!)","O(\u221e)","O(1)"]],z=["Data structure","Avg: Indexing","Avg: Search","Avg: Insertion","Avg: Deletion","Worst: Indexing","Worst: Search","Worst: Insertion","Worst: Deletion","Space complexity:worst"],M=[["Basic array","O(1)","O(n)","\u2014","\u2014","O(1)","O(n)","\u2014","\u2014","O(n)"],["Dynamic array","O(1)","O(n)","O(n)","\u2014","O(1)","O(n)","O(n)","\u2014","O(n)"],["Singly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Doubly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Hash table","\u2014","O(1)","O(1)","O(1)","\u2014","O(n)","O(n)","O(n)","O(n)"],["Binary search tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(n)","O(n)","O(n)","O(n)"],,["B-tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["Red-black tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["AVL tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,],V=function(e){var t=e.firstHeader,n=e.restOfHeaders,a=e.rowsData;return r.a.createElement("div",{className:"table-container-10",role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-10 first",role:"columnheader"},t,r.a.createElement("br",null),r.a.createElement("a",{className:"a-wiki-custom",href:"https://en.wikipedia.org/wiki/Best,_worst_and_average_case"},"Wiki")),n.map((function(e,t){return r.a.createElement("div",{className:"flex-row-10",role:"columnheader",key:t},e)}))),a.map((function(e,t){return r.a.createElement(G,Object.assign({row:e,columns:10},{key:t}))})))},Q=function(){var e=q[0];q.shift();var t=q,n=z[0];z.shift();var a=z;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-container",role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"columnheader"},"Country"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Events"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Time"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Fees"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"tax"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"over paid tax")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"},"United Kingdom"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Stonehenge, Windsor and Bath with Pub Lunch"," "),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"19 Sep, 1p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$50")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"}," ","Australia"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Blue Mountains Tours"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"9 Sep, 2p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$655"))),r.a.createElement(J,{firstHeader:e,restOfHeaders:t,rowsData:K}),r.a.createElement(V,{firstHeader:n,restOfHeaders:a,rowsData:M}))},Y=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:L}),r.a.createElement(o.a,{exact:!0,path:"/expenses",component:k}),r.a.createElement(o.a,{exact:!0,path:"/stream",component:j}),r.a.createElement(o.a,{exact:!0,path:"/featured",component:U}),r.a.createElement(o.a,{exact:!0,path:"/table",component:Q}))};var X=function(){return r.a.createElement(f,null,r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I.a,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.ae936f54.chunk.js.map