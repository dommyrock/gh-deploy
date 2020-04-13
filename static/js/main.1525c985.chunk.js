(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{25:function(e,t,n){e.exports={flex_container_main:"draggable_flex_container_main__2zexx",flex_body_child:"draggable_flex_body_child__31iNX",flex_container:"draggable_flex_container__2aCMJ",btn_gradient:"draggable_btn_gradient__ujqUE"}},4:function(e,t,n){e.exports={bodyexpenses:"expenses_bodyexpenses__30zKe",expensescontainer:"expenses_expensescontainer__STN0J",h1expenses:"expenses_h1expenses__2TA8R",h3expenses:"expenses_h3expenses__2tVaH",h4expenses:"expenses_h4expenses__13THH",inc_exp_container:"expenses_inc_exp_container__-YLNz",moneyexp:"expenses_moneyexp__2xSl8",plus:"expenses_plus__1icfo",minus:"expenses_minus__3rSWc",labelexpenses:"expenses_labelexpenses__m06gf",inputexpenses:"expenses_inputexpenses__3edzr",btnexpenses:"expenses_btnexpenses__3cJKK",deletebtnexpenses:"expenses_deletebtnexpenses__1Sn5Q",listexpenses:"expenses_listexpenses__r57Hg"}},42:function(e,t,n){e.exports=n(62)},47:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),s=(n(47),n(16)),o=n(9);function i(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var m=n(21),u=n(12);function d(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(u.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(u.a)({},e,{transactions:[t.payload].concat(Object(m.a)(e.transactions))});default:return e}}var p={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},g=Object(a.createContext)(p),h=function(e){var t=Object(a.useReducer)(d,p),n=Object(o.a)(t,2),l=n[0],c=n[1];return r.a.createElement(g.Provider,{value:{transactions:l.transactions,mockTasks:l.mockTasks,deleteTransaction:function(e){setTimeout((function(){c({type:"DELETE_TRANSACTION",payload:e})}),500)},addTransaction:function(e){c({type:"ADD_TRANSACTION",payload:e})}}},e.children)},f=n(4),b=n.n(f),x={textAlign:"center"},E=function(){var e=Object(a.useContext)(g).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:b.a.h4expenses,style:x},"Your Balance"),r.a.createElement("h1",{className:b.a.h1expenses,style:x},"$",e))},y=function(){var e=Object(a.useContext)(g).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:b.a.inc_exp_container},r.a.createElement("div",null,r.a.createElement("h4",{className:b.a.h4expenses},"Income"),r.a.createElement("p",{className:"".concat(b.a.moneyexp," ").concat(b.a.plus)},t)),r.a.createElement("div",null,r.a.createElement("h4",{className:b.a.h4expenses},"Expense"),r.a.createElement("p",{className:"".concat(b.a.moneyexp," ").concat(b.a.minus)},n)))},O=function(e){var t=e.transaction,n=Object(a.useContext)(g).deleteTransaction,l=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"".concat(b.a.minus):"".concat(b.a.plus)},t.text," ",r.a.createElement("span",null,l,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:b.a.deletebtnexpenses},"x"))},v=function(){var e=Object(a.useContext)(g).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:b.a.listexpenses},e.map((function(e){return r.a.createElement(O,{key:e.id,transaction:e})}))))},_=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(0),s=Object(o.a)(c,2),m=s[0],u=s[1],d=Object(a.useContext)(g).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:i(),text:n,amount:+m};console.log(t.id),d(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:b.a.labelexpenses,htmlFor:"text"},"Text"),r.a.createElement("input",{className:b.a.inputexpenses,type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:b.a.labelexpenses,htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{className:b.a.inputexpenses,type:"number",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:b.a.btnexpenses},"Add transaction")))},k={textAlign:"center"},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.bodyexpenses},r.a.createElement("h2",{style:k},"Expense tracker"),r.a.createElement("div",{className:b.a.expensescontainer},r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(v,null),r.a.createElement(_,null))))},w=n(24),I=n.n(w),C=n(30),A=(n(49),n(63)),j=function(){return Object(a.useEffect)((function(){(function(){var e=Object(C.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){console.log("Client: ".concat(e," Subscribed! --\x3eStarting to read data produced by ").concat(e)),t.stream("GetSensorData",e).subscribe({next:function(t){console.log(t);var n=document.createElement("button");switch(e){case"pink":n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;case"blue":n.className="buttonBlue",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;default:n.className="buttonDefault",n.textContent=t,document.getElementById("messagesList").appendChild(n)}window.scrollTo(0,document.getElementById("messagesList").scrollHeight)},complete:function(){console.log("".concat(e," Completed."));var t=document.createElement("btn");t.className="buttonBlue",t.textContent="".concat(e," Stream Completed."),document.getElementById("messagesList").appendChild(t)},error:function(t){console.log("".concat(e,' error: "').concat(t,'"'));var n=document.createElement("btn");n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n)}})},(t=(new A.HubConnectionBuilder).withAutomaticReconnect().withUrl("/outputstream").configureLogging(A.LogLevel.Debug).build()).onreconnected(Object(C.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.invoke("GetSensorNames");case 2:e.sent.forEach(n);case 4:case"end":return e.stop()}}),e)})))),e.prev=3,e.next=6,t.start();case 6:return e.next=8,t.invoke("GetSensorNames").catch((function(e){return console.error(e.toString())}));case 8:e.sent.forEach(n),t.on("SensorAdded",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),alert(e.t0);case 16:t.on("StreamRemoved",(function(e){console.log("Stream removed(Client ended stream). Disconnecting client now..."),console.log(e)}));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.inc_exp_container},r.a.createElement("h1",null,"SignalR Stream component")),r.a.createElement("div",{id:"messagesList"}))},T="\nclass HashMap {\n  constructor(initialCapacity = 16, loadFactor = 0.75) {\n    this.buckets = new Array(initialCapacity);\n    this.loadFactor = loadFactor;\n    this.size = 0;\n    this.collisions = 0;\n    this.keys = [];\n  }\n\n  hash(key) {\n    let hashValue = 0;\n    const stringTypeKey = '".concat("${key}${typeof key}","' ;\n\n    for (let index = 0; index < stringTypeKey.length; index++) {\n      const charCode = stringTypeKey.charCodeAt(index);\n      hashValue += charCode << (index * 8);\n    }\n\n    return hashValue;\n  }\n\n\n  _getBucketIndex(key) {\n    const hashValue = this.hash(key);\n    const bucketIndex = hashValue % this.buckets.length;\n    return bucketIndex;\n  }\n\n  set(key, value) {\n    const {bucketIndex, entryIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      // initialize array and save key/value\n      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index\n      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];\n      this.buckets[bucketIndex].push({key, value, keyIndex});\n      this.size++;\n      // Optional: keep count of collisions\n      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }\n    } else {\n      // override existing value\n      this.buckets[bucketIndex][entryIndex].value = value;\n    }\n\n    // check if a rehash is due\n    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {\n      this.rehash(this.buckets.length * 2);\n    }\n\n    return this;\n  }\n\n  get(key) {\n    const {bucketIndex, entryIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      return;\n    }\n\n    return this.buckets[bucketIndex][entryIndex].value;\n  }\n\n  has(key) {\n    return !!this.get(key);\n  }\n\n  _getIndexes(key) {\n    const bucketIndex = this._getBucketIndex(key);\n    const values = this.buckets[bucketIndex] || [];\n\n    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {\n      const entry = values[entryIndex];\n      if(entry.key === key) {\n        return {bucketIndex, entryIndex};\n      }\n    }\n\n    return {bucketIndex};\n  }\n\n  delete(key) {\n    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      return false;\n    }\n\n    this.buckets[bucketIndex].splice(entryIndex, 1);\n    delete this.keys[keyIndex];\n    this.size--;\n\n    return true;\n  }\n\n  rehash(newCapacity) {\n    const newMap = new HashMap(newCapacity);\n\n    this.keys.forEach(key => {\n      if(key) {\n        newMap.set(key.content, this.get(key.content));\n      }\n    });\n\n    // update bucket\n    this.buckets = newMap.buckets;\n    this.collisions = newMap.collisions;\n    // Optional: both \"keys\" has the same content except that the new one doesn't have empty spaces from deletions\n    this.keys = newMap.keys;\n  }\n\n  getLoadFactor() {\n    return this.size / this.buckets.length;\n  }\n}\n"),S=n(38),D=n.n(S),F=(n(53),n(54),function(e){return Object(a.useEffect)((function(){setTimeout((function(){D.a.highlightAll()}),50)}),[]),console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gatsby-highlight"},r.a.createElement("pre",null,r.a.createElement("code",{className:"language-"+e.language},e.code))))}),B={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},H=function(e){return r.a.createElement("div",{className:"two-columns-row right-div-highlight",style:B},r.a.createElement("h1",null,"title placeholders"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("iframe",{style:{margin:"10px"},width:e.width,height:e.height,src:e.src,frameBorder:"0",allowFullScreen:!0})))},L=n(15),R=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useCallback)((function(){l(!n)}),[n]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-buttons-flex-container",style:W},r.a.createElement(L.b,{to:"/table"},r.a.createElement("button",{className:"buttonBlue"},"Table example")),r.a.createElement(L.b,{to:"/featured"},r.a.createElement("button",{className:"buttonBlue"},"Animated data example")),r.a.createElement(L.b,{to:"/expenses"},r.a.createElement("button",{className:"buttonBlue"},"Expenses calculator example")),r.a.createElement(L.b,{to:"/drag"},r.a.createElement("button",{className:"buttonBlue"},"Draggable/droppable"))),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"js"),r.a.createElement(F,{code:"const dictionary = {the: 22038615, be: 12545825, and: 10741073, \n    of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};\n  \n  function etWordFrequency(dictionary, word) {\n    return dictionary[word];\n  }\n  \n  console.log(getWordFrequency(dictionary, 'the'));\n  console.log(getWordFrequency(dictionary, 'in'));\n  ",language:"js"})),r.a.createElement(H,{width:"300",height:"150",src:"https://www.youtube.com/embed/0eJEUOk6eCU"})),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"css"),r.a.createElement(F,{code:"\n  .archive {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n    grid-gap: 32px;\n    grid-auto-flow: dense;\n  }\n  \n  /* Extra-wide grid-posts */\n  .article:nth-child(31n + 1) {\n    grid-column: 1 / -1;\n  }\n  .article:nth-child(16n + 2) {\n    grid-column: -3 / -1;\n  }\n  .article:nth-child(16n + 10) {\n    grid-column: 1 / -2;\n  }\n  \n  /* Single column display for phones */\n  @media (max-width: 459px) {\n    .archive {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  ",language:"css"})),r.a.createElement("div",{className:"two-columns-row"})),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"jsx"),r.a.createElement(F,{code:"\n  export const GlobalProvider = props => {\n    const [state, dispatch] = useReducer(transactionReducer, initialState);\n  \n    //#region  Actions\n  \n    //delete after 500ms delay (like debounce...)\n    function deleteTransaction(transactionId) {\n      setTimeout(() => {\n        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });\n      }, 500);\n    }\n  \n    function addTransaction(transaction) {\n      dispatch({ type: ADD_TRANSACTION, payload: transaction });\n    }\n    //#endregion\n  \n    return (\n      <GlobalContext.Provider\n        value={{\n          transactions: state.transactions,\n          mockTasks: state.mockTasks,\n          deleteTransaction,\n          addTransaction\n        }}\n      >\n        {props.children}\n      </GlobalContext.Provider>\n    );\n  };\n  ",language:"jsx"})),r.a.createElement("div",{className:"two-columns-row right-div-highlight",style:M},r.a.createElement("h2",null,"dont even need text"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("button",{className:"buttonBlue",onClick:c},"Show Optimal Hash Map code")),n&&r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"Optimal Hash Map implementation"),r.a.createElement(F,{code:T,language:"js"}))),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h2",null,"testing img linking(by default react knows they are in pub folder)"),r.a.createElement("img",{src:"/gh-deploy/big-o-running-time-complexity.png",className:"img-aspect-ratio-kept",alt:"image"})),r.a.createElement("div",{className:"two-columns-row"})))},W={justifyContent:"center"},M={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},P=function(e){return r.a.createElement("a",{href:e.link,target:"_blank",className:"action","data-v-b770a5e2":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"action__icon","data-v-b770a5e2":!0},r.a.createElement("span",{"data-v-b770a5e2":!0})),r.a.createElement("div",{className:"action__content","data-v-b770a5e2":!0},r.a.createElement("h4",{className:"action__title","data-v-b770a5e2":!0},e.title),r.a.createElement("p",{"data-v-b770a5e2":!0},e.description)))},z=(n(59),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},q.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},q.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))))),r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},q.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},q.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})})))),r.a.createElement("div",{className:"square","data-v-dfc99e4e":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"grid","data-v-dfc99e4e":!0}))))}),q=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],J=n(40),V=function(e){var t=e.cell,n=e.columns,a=e.cellColor,l=e.rowIndex,c=t;return r.a.createElement("div",{className:"flex-row-".concat(n," first"),role:"cell",style:a?{backgroundColor:"".concat(G(a,l))}:null},a?r.a.createElement("a",null,c):c)};function G(e,t){return t<4?e.green:t>3&&t<6?e.yellow:e.red}var K=function(e){var t=e.row,n=e.columns,a=e.cellColor,l=e.rowIndex;return r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},t.map((function(e,t){return r.a.createElement(V,Object.assign({cell:e,columns:n,cellColor:a,rowIndex:l},{key:t}))})))},U=function(e){var t=e.firstHeader,n=e.restOfHeaders,a=e.rowsData,l=e.columns,c=e.cellColor;return r.a.createElement("div",{className:"table-container-".concat(l),role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-".concat(l," first"),role:"columnheader"},t,r.a.createElement("br",null),r.a.createElement("a",{className:"a-wiki-custom",href:"https://en.wikipedia.org/wiki/Best,_worst_and_average_case"},"Wiki")),n.map((function(e,t){return r.a.createElement("div",{className:"flex-row-".concat(l),role:"columnheader",key:t},e)}))),a.map((function(e,t){return r.a.createElement(K,Object.assign({row:e,columns:l,cellColor:c,rowIndex:t},{key:t}))})))},$=["Algorithm","Data structure","Time complexity:Best","Time complexity:Average","Time complexity:Worst","Space complexity:Worst"],Q=[["Quick sort","Array","O(n log(n))","O(n log(n))","O(n2)","O(n)"],["Merge sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(n)"],["Heap sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(1)"],["Smooth sort","Array","O(n)","O(n log(n))","O(n log(n))","O(1)"],["Buble sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Insertion sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Selection sort","Array","O(n2)","O(n2)","O(n2)","O(1)"],["Bogo sort","Array","O(n)","O(n n!)","O(\u221e)","O(1)"]],Y=["Data structure","Avg: Indexing","Avg: Search","Avg: Insertion","Avg: Deletion","Worst: Indexing","Worst: Search","Worst: Insertion","Worst: Deletion","Space complexity:worst"],X=[["Basic array","O(1)","O(n)","\u2014","\u2014","O(1)","O(n)","\u2014","\u2014","O(n)"],["Dynamic array","O(1)","O(n)","O(n)","\u2014","O(1)","O(n)","O(n)","\u2014","O(n)"],["Singly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Doubly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Hash table","\u2014","O(1)","O(1)","O(1)","\u2014","O(n)","O(n)","O(n)","O(n)"],["Binary search tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(n)","O(n)","O(n)","O(n)"],["B-tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],["Red-black tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],["AVL tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"]],Z=[["array.push","O(1)","Insert element to the end of the array"],["array.pop","O(1)","Remove element to the end of the array"],["array.shift","O(n)","Remove element to the beginning of the"],["array.unshift","O(n)","Insert element(s) to the beginning of the"],["array.slice","O(n)","Returns a copy of the array from beginning"],["array.splice","O(n)","Changes (add/remove) the array"]],ee=["Function","Runtime","Description"],te=["Operation","Worst"],ne=[["Access (Array.[])","O(1)"],["Insert head (Array.unshift)","O(n)"],["Insert tail (Array.push)","O(1)"],["Search (for value)","O(n)"],["Delete (Array.splice)","O(n)"]],ae=["Big O Notation","Name","Examples"],re=[["O(1)","Constant"," link data placeholder"],["O(log n)","Logarithmic"],["O(n)","Linear"],["O(n log n)","Linearithmic"],["O(n^2)","Quadratic"],["O(n^3)","Cubic"],["O(2^n)","Exponential"],["O(n!)","Factorial"]],le=(n(60),$[0]);$.shift();var ce=$,se=Y[0];Y.shift();var oe=Y,ie=ee[0];ee.shift();var me=ee,ue=te[0];te.shift();var de=te,pe=ae[0];ae.shift();var ge=ae,he=function(){return Object(a.useEffect)((function(){var e=new IntersectionObserver((function(t){var n,a=Object(J.a)(t);try{for(a.s();!(n=a.n()).done;){var r=n.value,l=r.target.getAttribute("id"),c=document.querySelector('nav li a[href="#'.concat(l,'"]'));if(r.intersectionRatio>0)c.classList.add("active_section");else{if(!c){e.disconnect();break}c.classList.remove("active_section")}}}catch(s){a.e(s)}finally{a.f()}}));document.querySelectorAll("section[id]").forEach((function(t){e.observe(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:fe},"Example of all custom tables I have "),r.a.createElement("main",{className:"main_scrollable"},r.a.createElement("div",null,r.a.createElement("section",{id:"algorithms_TC"},r.a.createElement("h3",{style:fe},"Algorithm time complexity"),r.a.createElement(U,{firstHeader:le,restOfHeaders:ce,rowsData:Q,columns:6})),r.a.createElement("section",{id:"data_structures_big-o"},r.a.createElement("h3",{style:fe},"Data Structures Big-O"),r.a.createElement(U,{firstHeader:se,restOfHeaders:oe,rowsData:X,columns:10})),r.a.createElement("section",{id:"common_js_built_in_func"},r.a.createElement("h3",{style:fe},"Common JS Array built-in functions"),r.a.createElement(U,{firstHeader:ie,restOfHeaders:me,rowsData:Z,columns:3})),r.a.createElement("section",{id:"array_operations_tc"},r.a.createElement("h3",{style:fe},"Array operations time complexity"),r.a.createElement(U,{firstHeader:ue,restOfHeaders:de,rowsData:ne,columns:2})),r.a.createElement("section",{id:"big_o_notation"},r.a.createElement("h3",{style:fe},"Big O Notation"),r.a.createElement(U,{firstHeader:pe,restOfHeaders:ge,rowsData:re,columns:3,cellColor:{green:"rgb(198, 239, 206)",yellow:"#FFF3E0",red:"#FFEBEE"}}))),r.a.createElement("nav",{className:"section_nav"},r.a.createElement("ol",{className:"ol"},r.a.createElement("li",null,r.a.createElement("a",{href:"#algorithms_TC"},"Algorithms time complexity")),r.a.createElement("li",null,r.a.createElement("a",{href:"#data_structures_big-o"},"Data structures Big-O")),r.a.createElement("li",null,r.a.createElement("a",{href:"#common_js_built_in_func"},"Common Js functions TC"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#test_1"},"Nested example 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#test_2"},"Nested example 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#test_3"},"Nested example 3")),r.a.createElement("li",null,r.a.createElement("a",{href:"#test_4"},"Nested example 4")),r.a.createElement("li",null,r.a.createElement("a",{href:"#test_5"},"Nested example 5"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#test_6"},"Double nested example 1")))))),r.a.createElement("li",null,r.a.createElement("a",{href:"#array_operations_tc"},"Array operations TC")),r.a.createElement("li",null,r.a.createElement("a",{href:"#big_o_notation"},"Big O notation"))))))},fe={textAlign:"center"},be=n(13),xe=n(28),Ee=n(25),ye=n.n(Ee),Oe=function(e){console.log(e);var t=Object(a.useState)(e),n=Object(o.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",{className:ye.a.flex_container_main},r.a.createElement(xe.a,{onDragEnd:function(e){return function(e,t,n){if(e.destination){var a=e.source,r=e.destination;if(a.droppableId!==r.droppableId){var l,c=t[a.droppableId],s=t[r.droppableId],i=Object(m.a)(c.items),d=Object(m.a)(s.items),p=i.splice(a.index,1),g=Object(o.a)(p,1)[0];d.splice(r.index,0,g),n(Object(u.a)({},t,(l={},Object(be.a)(l,a.droppableId,Object(u.a)({},c,{items:i})),Object(be.a)(l,r.droppableId,Object(u.a)({},s,{items:d})),l)))}else{var h=t[a.droppableId],f=Object(m.a)(h.items),b=f.splice(a.index,1),x=Object(o.a)(b,1)[0];f.splice(r.index,0,x),n(Object(u.a)({},t,Object(be.a)({},a.droppableId,Object(u.a)({},h,{items:f}))))}}}(e,l,c)}},Object.entries(l).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],l=n[1];return r.a.createElement("div",{className:ye.a.flex_body_child,key:a},r.a.createElement("h2",null,l.name),r.a.createElement("div",{style:{margin:8}},r.a.createElement(xe.c,{droppableId:a,key:a},(function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:{background:t.isDraggingOver?"lightblue":"lightgrey"},className:ye.a.flex_container}),l.items.map((function(e,t){return r.a.createElement(xe.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(u.a)({userSelect:"none",backgroundImage:n.isDragging?"linear-gradient(-35deg, rgb(248, 232, 92), rgb(219, 93, 125), rgb(95, 121, 191))":"linear-gradient(-35deg, rgb(248, 232, 92), rgb(219, 93, 125), rgb(139, 95, 191))",color:n.isDragging?"lightgrey":"white"},t.draggableProps.style),className:ye.a.btn_gradient}),e.content)}))})),e.placeholder)}))))}))))},ve={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},_e=function(){var e,t=r.a.useContext(g).tasksFromBackend;console.log(t);var n=(e={},Object(be.a)(e,i(),{name:"Requested",items:ve.mockTasks}),Object(be.a)(e,i(),{name:"Done",items:[]}),e);return r.a.createElement("div",null,r.a.createElement(Oe,n))};function ke(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R}),r.a.createElement(s.a,{exact:!0,path:"/stream",component:j}),r.a.createElement(s.a,{exact:!0,path:"/expenses",component:N}),r.a.createElement(s.a,{exact:!0,path:"/featured",component:z}),r.a.createElement(s.a,{exact:!0,path:"/table",component:he}),r.a.createElement(s.a,{exact:!0,path:"/drag",component:_e}))}var Ne=function(){return r.a.createElement(h,null,r.a.createElement(L.a,null,r.a.createElement(ke,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.1525c985.chunk.js.map