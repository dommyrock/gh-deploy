(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(59)},4:function(e,t,n){e.exports={bodyexpenses:"expenses_bodyexpenses__30zKe",expensescontainer:"expenses_expensescontainer__STN0J",h1expenses:"expenses_h1expenses__2TA8R",h3expenses:"expenses_h3expenses__2tVaH",h4expenses:"expenses_h4expenses__13THH",inc_exp_container:"expenses_inc_exp_container__-YLNz",moneyexp:"expenses_moneyexp__2xSl8",plus:"expenses_plus__1icfo",minus:"expenses_minus__3rSWc",labelexpenses:"expenses_labelexpenses__m06gf",inputexpenses:"expenses_inputexpenses__3edzr",btnexpenses:"expenses_btnexpenses__3cJKK",deletebtnexpenses:"expenses_deletebtnexpenses__1Sn5Q",listexpenses:"expenses_listexpenses__r57Hg"}},44:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),o=(n(44),n(16)),s=n(11);function i(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var m=n(20),u=n(12);function d(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(u.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(u.a)({},e,{transactions:[t.payload].concat(Object(m.a)(e.transactions))});default:return e}}var p={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},g=Object(a.createContext)(p),E=function(e){var t=Object(a.useReducer)(d,p),n=Object(s.a)(t,2),l=n[0],c=n[1];return r.a.createElement(g.Provider,{value:{transactions:l.transactions,mockTasks:l.mockTasks,deleteTransaction:function(e){setTimeout((function(){c({type:"DELETE_TRANSACTION",payload:e})}),500)},addTransaction:function(e){c({type:"ADD_TRANSACTION",payload:e})}}},e.children)},f=n(4),x=n.n(f),b={textAlign:"center"},h=function(){var e=Object(a.useContext)(g).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:x.a.h4expenses,style:b},"Your Balance"),r.a.createElement("h1",{className:x.a.h1expenses,style:b},"$",e))},O=function(){var e=Object(a.useContext)(g).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:x.a.inc_exp_container},r.a.createElement("div",null,r.a.createElement("h4",{className:x.a.h4expenses},"Income"),r.a.createElement("p",{className:"".concat(x.a.moneyexp," ").concat(x.a.plus)},t)),r.a.createElement("div",null,r.a.createElement("h4",{className:x.a.h4expenses},"Expense"),r.a.createElement("p",{className:"".concat(x.a.moneyexp," ").concat(x.a.minus)},n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(g).deleteTransaction,l=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"".concat(x.a.minus):"".concat(x.a.plus)},t.text," ",r.a.createElement("span",null,l,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:x.a.deletebtnexpenses},"x"))},y=function(){var e=Object(a.useContext)(g).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:x.a.listexpenses},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},w=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(0),o=Object(s.a)(c,2),m=o[0],u=o[1],d=Object(a.useContext)(g).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:i(),text:n,amount:+m};console.log(t.id),d(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:x.a.labelexpenses,htmlFor:"text"},"Text"),r.a.createElement("input",{className:x.a.inputexpenses,type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:x.a.labelexpenses,htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{className:x.a.inputexpenses,type:"number",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:x.a.btnexpenses},"Add transaction")))},N={textAlign:"center"},_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.bodyexpenses},r.a.createElement("h2",{style:N},"Expense tracker"),r.a.createElement("hr",null),r.a.createElement("div",{className:x.a.expensescontainer},r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(y,null),r.a.createElement(w,null))))},k=n(23),S=n.n(k),j=n(29),T=(n(46),n(60)),A=function(){return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){console.log("Client: ".concat(e," Subscribed! --\x3eStarting to read data produced by ").concat(e)),t.stream("GetSensorData",e).subscribe({next:function(t){console.log(t);var n=document.createElement("button");switch(e){case"pink":n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;case"blue":n.className="buttonBlue",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;default:n.className="buttonDefault",n.textContent=t,document.getElementById("messagesList").appendChild(n)}window.scrollTo(0,document.getElementById("messagesList").scrollHeight)},complete:function(){console.log("".concat(e," Completed."));var t=document.createElement("btn");t.className="buttonBlue",t.textContent="".concat(e," Stream Completed."),document.getElementById("messagesList").appendChild(t)},error:function(t){console.log("".concat(e,' error: "').concat(t,'"'));var n=document.createElement("btn");n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n)}})},(t=(new T.HubConnectionBuilder).withAutomaticReconnect().withUrl("/outputstream").configureLogging(T.LogLevel.Debug).build()).onreconnected(Object(j.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.invoke("GetSensorNames");case 2:e.sent.forEach(n);case 4:case"end":return e.stop()}}),e)})))),e.prev=3,e.next=6,t.start();case 6:return e.next=8,t.invoke("GetSensorNames").catch((function(e){return console.error(e.toString())}));case 8:e.sent.forEach(n),t.on("SensorAdded",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),alert(e.t0);case 16:t.on("StreamRemoved",(function(e){console.log("Stream removed(Client ended stream). Disconnecting client now..."),console.log(e)}));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.inc_exp_container},r.a.createElement("h1",null,"SignalR Stream component")),r.a.createElement("div",{id:"messagesList"}))},C=(n(50),n(51),n(52),function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gatsby-highlight"},r.a.createElement("pre",null,r.a.createElement("code",{className:"language-"+e.language},e.code))))}),I={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},D=function(e){return r.a.createElement("div",{className:"two-columns-column right-div-highlight",style:I},r.a.createElement("h1",null,"title placeholders"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("iframe",{style:{margin:"10px"},width:e.width,height:e.height,src:e.src,frameBorder:"0",allowFullScreen:""})))},B=n(15),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(B.b,{to:"/table"},r.a.createElement("h2",null,"-Table example")),r.a.createElement(B.b,{to:"/featured"},r.a.createElement("h2",null,"Animated data example")),r.a.createElement(B.b,{to:"/expenses"},r.a.createElement("h2",null,"Expenses calculator example")),r.a.createElement(B.b,{to:"/drag"},r.a.createElement("h2",null,"Draggable/droppable"))),r.a.createElement("div",{className:"two-columns-row",style:L},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"js"),r.a.createElement(C,{code:"const dictionary = {the: 22038615, be: 12545825, and: 10741073, \n    of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};\n  \n  function etWordFrequency(dictionary, word) {\n    return dictionary[word];\n  }\n  \n  console.log(getWordFrequency(dictionary, 'the'));\n  console.log(getWordFrequency(dictionary, 'in'));\n  ",language:"js"})),r.a.createElement(D,{width:"300",height:"150",src:"https://www.youtube.com/embed/0eJEUOk6eCU"})),r.a.createElement("div",{className:"two-columns-row",style:L},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"css"),r.a.createElement(C,{code:"\n  .archive {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n    grid-gap: 32px;\n    grid-auto-flow: dense;\n  }\n  \n  /* Extra-wide grid-posts */\n  .article:nth-child(31n + 1) {\n    grid-column: 1 / -1;\n  }\n  .article:nth-child(16n + 2) {\n    grid-column: -3 / -1;\n  }\n  .article:nth-child(16n + 10) {\n    grid-column: 1 / -2;\n  }\n  \n  /* Single column display for phones */\n  @media (max-width: 459px) {\n    .archive {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  ",language:"css"})),r.a.createElement("div",{className:"two-columns-column"})),r.a.createElement("div",{className:"two-columns-row",style:L},r.a.createElement("div",{className:"two-columns-column"},r.a.createElement("h1",null,"jsx"),r.a.createElement(C,{code:"\n  export const GlobalProvider = props => {\n    const [state, dispatch] = useReducer(transactionReducer, initialState);\n  \n    //#region  Actions\n  \n    //delete after 500ms delay (like debounce...)\n    function deleteTransaction(transactionId) {\n      setTimeout(() => {\n        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });\n      }, 500);\n    }\n  \n    function addTransaction(transaction) {\n      dispatch({ type: ADD_TRANSACTION, payload: transaction });\n    }\n    //#endregion\n  \n    return (\n      <GlobalContext.Provider\n        value={{\n          transactions: state.transactions,\n          mockTasks: state.mockTasks,\n          deleteTransaction,\n          addTransaction\n        }}\n      >\n        {props.children}\n      </GlobalContext.Provider>\n    );\n  };\n  ",language:"jsx"})),r.a.createElement("div",{className:"two-columns-column right-div-highlight",style:H},r.a.createElement("h2",null,"dont even need text"))),r.a.createElement("h2",null,"testing img linking(by default react knows they are in pub folder)"),r.a.createElement("img",{src:"/gh-deploy/big-o-running-time-complexity.png",alt:"image"}))},L={justifyContent:"center"},H={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},R=function(e){return r.a.createElement("a",{href:e.link,target:"_blank",className:"action","data-v-b770a5e2":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"action__icon","data-v-b770a5e2":!0},r.a.createElement("span",{"data-v-b770a5e2":!0})),r.a.createElement("div",{className:"action__content","data-v-b770a5e2":!0},r.a.createElement("h4",{className:"action__title","data-v-b770a5e2":!0},e.title),r.a.createElement("p",{"data-v-b770a5e2":!0},e.description)))},W=(n(57),function(){return r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},P.map((function(e){return r.a.createElement(R,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},P.map((function(e){return r.a.createElement(R,{link:e.link,title:e,description:e.description})})))))}),P=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],U=function(e){var t=e.cell,n=e.columns,a=t;return r.a.createElement("div",{className:"flex-row-".concat(n," first"),role:"cell"},a)},$=function(e){var t=e.row,n=e.columns;return r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},t.map((function(e,t){return r.a.createElement(U,Object.assign({cell:e,columns:n},{key:t}))})))},G=function(e){var t=e.firstHeader,n=e.restOfHeaders,a=e.rowsData,l=e.columns;return r.a.createElement("div",{className:"table-container-".concat(l),role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-".concat(l," first"),role:"columnheader"},t,r.a.createElement("br",null),r.a.createElement("a",{className:"a-wiki-custom",href:"https://en.wikipedia.org/wiki/Best,_worst_and_average_case"},"Wiki")),n.map((function(e,t){return r.a.createElement("div",{className:"flex-row-".concat(l),role:"columnheader",key:t},e)}))),a.map((function(e,t){return r.a.createElement($,Object.assign({row:e,columns:l},{key:t}))})))},J=["Algorithm","Data structure","Time complexity:Best","Time complexity:Average","Time complexity:Worst","Space complexity:Worst"],q=[["Quick sort","Array","O(n log(n))","O(n log(n))","O(n2)","O(n)"],["Merge sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(n)"],["Heap sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(1)"],["Smooth sort","Array","O(n)","O(n log(n))","O(n log(n))","O(1)"],["Buble sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Insertion sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Selection sort","Array","O(n2)","O(n2)","O(n2)","O(1)"],["Bogo sort","Array","O(n)","O(n n!)","O(\u221e)","O(1)"]],K=["Data structure","Avg: Indexing","Avg: Search","Avg: Insertion","Avg: Deletion","Worst: Indexing","Worst: Search","Worst: Insertion","Worst: Deletion","Space complexity:worst"],z=[["Basic array","O(1)","O(n)","\u2014","\u2014","O(1)","O(n)","\u2014","\u2014","O(n)"],["Dynamic array","O(1)","O(n)","O(n)","\u2014","O(1)","O(n)","O(n)","\u2014","O(n)"],["Singly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Doubly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Hash table","\u2014","O(1)","O(1)","O(1)","\u2014","O(n)","O(n)","O(n)","O(n)"],["Binary search tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(n)","O(n)","O(n)","O(n)"],,["B-tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["Red-black tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["AVL tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,],M=function(){var e=J[0];J.shift();var t=J,n=K[0];K.shift();var a=K;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-container-6",role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"columnheader"},"Country"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Events"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Time"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Fees"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"tax"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"over paid tax")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"},"United Kingdom"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Stonehenge, Windsor and Bath with Pub Lunch"," "),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"19 Sep, 1p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$50")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"}," ","Australia"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Blue Mountains Tours"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"9 Sep, 2p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$655"))),r.a.createElement(G,{firstHeader:e,restOfHeaders:t,rowsData:q,columns:6}),r.a.createElement(G,{firstHeader:n,restOfHeaders:a,rowsData:z,columns:10}))},V=n(13),Q=n(27),Y=function(e){console.log(e);var t=Object(a.useState)(e),n=Object(s.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%"}},r.a.createElement(Q.a,{onDragEnd:function(e){return function(e,t,n){if(e.destination){var a=e.source,r=e.destination;if(a.droppableId!==r.droppableId){var l,c=t[a.droppableId],o=t[r.droppableId],i=Object(m.a)(c.items),d=Object(m.a)(o.items),p=i.splice(a.index,1),g=Object(s.a)(p,1)[0];d.splice(r.index,0,g),n(Object(u.a)({},t,(l={},Object(V.a)(l,a.droppableId,Object(u.a)({},c,{items:i})),Object(V.a)(l,r.droppableId,Object(u.a)({},o,{items:d})),l)))}else{var E=t[a.droppableId],f=Object(m.a)(E.items),x=f.splice(a.index,1),b=Object(s.a)(x,1)[0];f.splice(r.index,0,b),n(Object(u.a)({},t,Object(V.a)({},a.droppableId,Object(u.a)({},E,{items:f}))))}}}(e,l,c)}},Object.entries(l).map((function(e,t){var n=Object(s.a)(e,2),a=n[0],l=n[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},key:a},r.a.createElement("h2",null,l.name),r.a.createElement("div",{style:{margin:8}},r.a.createElement(Q.c,{droppableId:a,key:a},(function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:{background:t.isDraggingOver?"lightblue":"lightgrey",padding:4,width:250,minHeight:500}}),l.items.map((function(e,t){return r.a.createElement(Q.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(u.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:n.isDragging?"#263B4A":"#456C86",color:"white"},t.draggableProps.style)}),e.content)}))})),e.placeholder)}))))}))))},X={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},Z=function(){var e,t=r.a.useContext(g).tasksFromBackend;console.log(t);var n=(e={},Object(V.a)(e,i(),{name:"Requested",items:X.mockTasks}),Object(V.a)(e,i(),{name:"Done",items:[]}),e);return r.a.createElement("div",null,r.a.createElement(Y,n))},ee=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:F}),r.a.createElement(o.a,{exact:!0,path:"/stream",component:A}),r.a.createElement(o.a,{exact:!0,path:"/expenses",component:_}),r.a.createElement(o.a,{exact:!0,path:"/featured",component:W}),r.a.createElement(o.a,{exact:!0,path:"/table",component:M}),r.a.createElement(o.a,{exact:!0,path:"/drag",component:Z}))};var te=function(){return r.a.createElement(E,null,r.a.createElement(B.a,null,r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3fb98c69.chunk.js.map