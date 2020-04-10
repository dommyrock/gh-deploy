(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{4:function(e,t,n){e.exports={bodyexpenses:"expenses_bodyexpenses__30zKe",expensescontainer:"expenses_expensescontainer__STN0J",h1expenses:"expenses_h1expenses__2TA8R",h3expenses:"expenses_h3expenses__2tVaH",h4expenses:"expenses_h4expenses__13THH",inc_exp_container:"expenses_inc_exp_container__-YLNz",moneyexp:"expenses_moneyexp__2xSl8",plus:"expenses_plus__1icfo",minus:"expenses_minus__3rSWc",labelexpenses:"expenses_labelexpenses__m06gf",inputexpenses:"expenses_inputexpenses__3edzr",btnexpenses:"expenses_btnexpenses__3cJKK",deletebtnexpenses:"expenses_deletebtnexpenses__1Sn5Q",listexpenses:"expenses_listexpenses__r57Hg"}},40:function(e,t,n){e.exports=n(59)},45:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),s=n.n(l),c=(n(45),n(16)),o=n(9);function i(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var m=n(20),d=n(12);function u(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(d.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)({},e,{transactions:[t.payload].concat(Object(m.a)(e.transactions))});default:return e}}var p={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},h=Object(a.createContext)(p),g=function(e){var t=Object(a.useReducer)(u,p),n=Object(o.a)(t,2),l=n[0],s=n[1];return r.a.createElement(h.Provider,{value:{transactions:l.transactions,mockTasks:l.mockTasks,deleteTransaction:function(e){setTimeout((function(){s({type:"DELETE_TRANSACTION",payload:e})}),500)},addTransaction:function(e){s({type:"ADD_TRANSACTION",payload:e})}}},e.children)},f=n(4),x=n.n(f),b={textAlign:"center"},E=function(){var e=Object(a.useContext)(h).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:x.a.h4expenses,style:b},"Your Balance"),r.a.createElement("h1",{className:x.a.h1expenses,style:b},"$",e))},y=function(){var e=Object(a.useContext)(h).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:x.a.inc_exp_container},r.a.createElement("div",null,r.a.createElement("h4",{className:x.a.h4expenses},"Income"),r.a.createElement("p",{className:"".concat(x.a.moneyexp," ").concat(x.a.plus)},t)),r.a.createElement("div",null,r.a.createElement("h4",{className:x.a.h4expenses},"Expense"),r.a.createElement("p",{className:"".concat(x.a.moneyexp," ").concat(x.a.minus)},n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(h).deleteTransaction,l=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"".concat(x.a.minus):"".concat(x.a.plus)},t.text," ",r.a.createElement("span",null,l,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:x.a.deletebtnexpenses},"x"))},O=function(){var e=Object(a.useContext)(h).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:x.a.listexpenses},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(0),c=Object(o.a)(s,2),m=c[0],d=c[1],u=Object(a.useContext)(h).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:i(),text:n,amount:+m};console.log(t.id),u(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:x.a.labelexpenses,htmlFor:"text"},"Text"),r.a.createElement("input",{className:x.a.inputexpenses,type:"text",value:n,onChange:function(e){return l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{className:x.a.labelexpenses,htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{className:x.a.inputexpenses,type:"number",value:m,onChange:function(e){return d(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:x.a.btnexpenses},"Add transaction")))},w={textAlign:"center"},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.bodyexpenses},r.a.createElement("h2",{style:w},"Expense tracker"),r.a.createElement("hr",null),r.a.createElement("div",{className:x.a.expensescontainer},r.a.createElement(E,null),r.a.createElement(y,null),r.a.createElement(O,null),r.a.createElement(k,null))))},_=n(23),I=n.n(_),A=n(29),S=(n(47),n(60)),j=function(){return Object(a.useEffect)((function(){(function(){var e=Object(A.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){console.log("Client: ".concat(e," Subscribed! --\x3eStarting to read data produced by ").concat(e)),t.stream("GetSensorData",e).subscribe({next:function(t){console.log(t);var n=document.createElement("button");switch(e){case"pink":n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;case"blue":n.className="buttonBlue",n.textContent=t,document.getElementById("messagesList").appendChild(n);break;default:n.className="buttonDefault",n.textContent=t,document.getElementById("messagesList").appendChild(n)}window.scrollTo(0,document.getElementById("messagesList").scrollHeight)},complete:function(){console.log("".concat(e," Completed."));var t=document.createElement("btn");t.className="buttonBlue",t.textContent="".concat(e," Stream Completed."),document.getElementById("messagesList").appendChild(t)},error:function(t){console.log("".concat(e,' error: "').concat(t,'"'));var n=document.createElement("btn");n.className="buttonPink",n.textContent=t,document.getElementById("messagesList").appendChild(n)}})},(t=(new S.HubConnectionBuilder).withAutomaticReconnect().withUrl("/outputstream").configureLogging(S.LogLevel.Debug).build()).onreconnected(Object(A.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.invoke("GetSensorNames");case 2:e.sent.forEach(n);case 4:case"end":return e.stop()}}),e)})))),e.prev=3,e.next=6,t.start();case 6:return e.next=8,t.invoke("GetSensorNames").catch((function(e){return console.error(e.toString())}));case 8:e.sent.forEach(n),t.on("SensorAdded",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),alert(e.t0);case 16:t.on("StreamRemoved",(function(e){console.log("Stream removed(Client ended stream). Disconnecting client now..."),console.log(e)}));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.inc_exp_container},r.a.createElement("h1",null,"SignalR Stream component")),r.a.createElement("div",{id:"messagesList"}))},T="\nclass HashMap {\n  constructor(initialCapacity = 16, loadFactor = 0.75) {\n    this.buckets = new Array(initialCapacity);\n    this.loadFactor = loadFactor;\n    this.size = 0;\n    this.collisions = 0;\n    this.keys = [];\n  }\n\n  hash(key) {\n    let hashValue = 0;\n    const stringTypeKey = '".concat("${key}${typeof key}","' ;\n\n    for (let index = 0; index < stringTypeKey.length; index++) {\n      const charCode = stringTypeKey.charCodeAt(index);\n      hashValue += charCode << (index * 8);\n    }\n\n    return hashValue;\n  }\n\n\n  _getBucketIndex(key) {\n    const hashValue = this.hash(key);\n    const bucketIndex = hashValue % this.buckets.length;\n    return bucketIndex;\n  }\n\n  set(key, value) {\n    const {bucketIndex, entryIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      // initialize array and save key/value\n      const keyIndex = this.keys.push({content: key}) - 1; // keep track of the key index\n      this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];\n      this.buckets[bucketIndex].push({key, value, keyIndex});\n      this.size++;\n      // Optional: keep count of collisions\n      if(this.buckets[bucketIndex].length > 1) { this.collisions++; }\n    } else {\n      // override existing value\n      this.buckets[bucketIndex][entryIndex].value = value;\n    }\n\n    // check if a rehash is due\n    if(this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {\n      this.rehash(this.buckets.length * 2);\n    }\n\n    return this;\n  }\n\n  get(key) {\n    const {bucketIndex, entryIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      return;\n    }\n\n    return this.buckets[bucketIndex][entryIndex].value;\n  }\n\n  has(key) {\n    return !!this.get(key);\n  }\n\n  _getIndexes(key) {\n    const bucketIndex = this._getBucketIndex(key);\n    const values = this.buckets[bucketIndex] || [];\n\n    for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {\n      const entry = values[entryIndex];\n      if(entry.key === key) {\n        return {bucketIndex, entryIndex};\n      }\n    }\n\n    return {bucketIndex};\n  }\n\n  delete(key) {\n    const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);\n\n    if(entryIndex === undefined) {\n      return false;\n    }\n\n    this.buckets[bucketIndex].splice(entryIndex, 1);\n    delete this.keys[keyIndex];\n    this.size--;\n\n    return true;\n  }\n\n  rehash(newCapacity) {\n    const newMap = new HashMap(newCapacity);\n\n    this.keys.forEach(key => {\n      if(key) {\n        newMap.set(key.content, this.get(key.content));\n      }\n    });\n\n    // update bucket\n    this.buckets = newMap.buckets;\n    this.collisions = newMap.collisions;\n    // Optional: both \"keys\" has the same content except that the new one doesn't have empty spaces from deletions\n    this.keys = newMap.keys;\n  }\n\n  getLoadFactor() {\n    return this.size / this.buckets.length;\n  }\n}\n"),C=n(37),D=n.n(C),B=(n(51),n(52),function(e){return Object(a.useEffect)((function(){setTimeout((function(){D.a.highlightAll()}),50)}),[]),console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gatsby-highlight"},r.a.createElement("pre",null,r.a.createElement("code",{className:"language-"+e.language},e.code))))}),F={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},H=function(e){return r.a.createElement("div",{className:"two-columns-row right-div-highlight",style:F},r.a.createElement("h1",null,"title placeholders"),r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("iframe",{style:{margin:"10px"},width:e.width,height:e.height,src:e.src,frameBorder:"0",allowFullScreen:"true"})))},L=n(15),R=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],l=t[1],s=Object(a.useCallback)((function(){l(!n)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-buttons-flex-container",style:W},r.a.createElement(L.b,{to:"/table"},r.a.createElement("button",{className:"buttonBlue"},"Table example")),r.a.createElement(L.b,{to:"/featured"},r.a.createElement("button",{className:"buttonBlue"},"Animated data example")),r.a.createElement(L.b,{to:"/expenses"},r.a.createElement("button",{className:"buttonBlue"},"Expenses calculator example")),r.a.createElement(L.b,{to:"/drag"},r.a.createElement("button",{className:"buttonBlue"},"Draggable/droppable"))),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"js"),r.a.createElement(B,{code:"const dictionary = {the: 22038615, be: 12545825, and: 10741073, \n    of: 10343885, a: 10144200, in: 6996437, to: 6332195 /* ... */};\n  \n  function etWordFrequency(dictionary, word) {\n    return dictionary[word];\n  }\n  \n  console.log(getWordFrequency(dictionary, 'the'));\n  console.log(getWordFrequency(dictionary, 'in'));\n  ",language:"js"})),r.a.createElement(H,{width:"300",height:"150",src:"https://www.youtube.com/embed/0eJEUOk6eCU"})),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"css"),r.a.createElement(B,{code:"\n  .archive {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n    grid-gap: 32px;\n    grid-auto-flow: dense;\n  }\n  \n  /* Extra-wide grid-posts */\n  .article:nth-child(31n + 1) {\n    grid-column: 1 / -1;\n  }\n  .article:nth-child(16n + 2) {\n    grid-column: -3 / -1;\n  }\n  .article:nth-child(16n + 10) {\n    grid-column: 1 / -2;\n  }\n  \n  /* Single column display for phones */\n  @media (max-width: 459px) {\n    .archive {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n  ",language:"css"})),r.a.createElement("div",{className:"two-columns-row"})),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"jsx"),r.a.createElement(B,{code:"\n  export const GlobalProvider = props => {\n    const [state, dispatch] = useReducer(transactionReducer, initialState);\n  \n    //#region  Actions\n  \n    //delete after 500ms delay (like debounce...)\n    function deleteTransaction(transactionId) {\n      setTimeout(() => {\n        dispatch({ type: DELETE_TRANSACTION, payload: transactionId });\n      }, 500);\n    }\n  \n    function addTransaction(transaction) {\n      dispatch({ type: ADD_TRANSACTION, payload: transaction });\n    }\n    //#endregion\n  \n    return (\n      <GlobalContext.Provider\n        value={{\n          transactions: state.transactions,\n          mockTasks: state.mockTasks,\n          deleteTransaction,\n          addTransaction\n        }}\n      >\n        {props.children}\n      </GlobalContext.Provider>\n    );\n  };\n  ",language:"jsx"})),r.a.createElement("div",{className:"two-columns-row right-div-highlight",style:M},r.a.createElement("h2",null,"dont even need text"))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("button",{className:"buttonBlue",onClick:s},"Show Optimal Hash Map code")),n&&r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h1",null,"Optimal Hash Map implementation"),r.a.createElement(B,{code:T,language:"js"}))),r.a.createElement("div",{className:"display-flex",style:W},r.a.createElement("div",{className:"two-columns-row"},r.a.createElement("h2",null,"testing img linking(by default react knows they are in pub folder)"),r.a.createElement("img",{src:"/gh-deploy/big-o-running-time-complexity.png",className:"img-aspect-ratio-kept",alt:"image"})),r.a.createElement("div",{className:"two-columns-row"})))},W={justifyContent:"center"},M={marginTop:"45px",marginLeft:"10px",paddingLeft:"50px"},P=function(e){return r.a.createElement("a",{href:e.link,target:"_blank",className:"action","data-v-b770a5e2":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"action__icon","data-v-b770a5e2":!0},r.a.createElement("span",{"data-v-b770a5e2":!0})),r.a.createElement("div",{className:"action__content","data-v-b770a5e2":!0},r.a.createElement("h4",{className:"action__title","data-v-b770a5e2":!0},e.title),r.a.createElement("p",{"data-v-b770a5e2":!0},e.description)))},U=(n(57),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))))),r.a.createElement("div",{id:"hackathon-div",className:"featured-section","data-v-5aa19bde":!0,"data-v-19509d32":!0,"data-v-2974ba77":!0},r.a.createElement("div",{className:"featured","data-v-5aa19bde":!0},r.a.createElement("div",{className:"featured__list featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})}))),r.a.createElement("div",{className:"featured__list featured__list--alt featured__list--animated","data-v-5aa19bde":!0},$.map((function(e){return r.a.createElement(P,{link:e.link,title:e,description:e.description})})))),r.a.createElement("div",{className:"square","data-v-dfc99e4e":!0,"data-v-5aa19bde":!0},r.a.createElement("div",{className:"grid","data-v-dfc99e4e":!0}))))}),$=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],z=function(e){var t=e.cell,n=e.columns,a=t;return r.a.createElement("div",{className:"flex-row-".concat(n," first"),role:"cell"},a)},V=function(e){var t=e.row,n=e.columns;return r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},t.map((function(e,t){return r.a.createElement(z,Object.assign({cell:e,columns:n},{key:t}))})))},K=function(e){var t=e.firstHeader,n=e.restOfHeaders,a=e.rowsData,l=e.columns;return r.a.createElement("div",{className:"table-container-".concat(l),role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-".concat(l," first"),role:"columnheader"},t,r.a.createElement("br",null),r.a.createElement("a",{className:"a-wiki-custom",href:"https://en.wikipedia.org/wiki/Best,_worst_and_average_case"},"Wiki")),n.map((function(e,t){return r.a.createElement("div",{className:"flex-row-".concat(l),role:"columnheader",key:t},e)}))),a.map((function(e,t){return r.a.createElement(V,Object.assign({row:e,columns:l},{key:t}))})))},G=["Algorithm","Data structure","Time complexity:Best","Time complexity:Average","Time complexity:Worst","Space complexity:Worst"],J=[["Quick sort","Array","O(n log(n))","O(n log(n))","O(n2)","O(n)"],["Merge sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(n)"],["Heap sort","Array","O(n log(n))","O(n log(n))","O(n log(n))","O(1)"],["Smooth sort","Array","O(n)","O(n log(n))","O(n log(n))","O(1)"],["Buble sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Insertion sort","Array","O(n)","O(n2)","O(n2)","O(1)"],["Selection sort","Array","O(n2)","O(n2)","O(n2)","O(1)"],["Bogo sort","Array","O(n)","O(n n!)","O(\u221e)","O(1)"]],q=["Data structure","Avg: Indexing","Avg: Search","Avg: Insertion","Avg: Deletion","Worst: Indexing","Worst: Search","Worst: Insertion","Worst: Deletion","Space complexity:worst"],Q=[["Basic array","O(1)","O(n)","\u2014","\u2014","O(1)","O(n)","\u2014","\u2014","O(n)"],["Dynamic array","O(1)","O(n)","O(n)","\u2014","O(1)","O(n)","O(n)","\u2014","O(n)"],["Singly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Doubly linked","list\tO(n)","O(n)","O(1)","O(1)","O(n)","O(n)","O(1)","O(1)","O(n)"],["Hash table","\u2014","O(1)","O(1)","O(1)","\u2014","O(n)","O(n)","O(n)","O(n)"],["Binary search tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(n)","O(n)","O(n)","O(n)"],,["B-tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["Red-black tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,["AVL tree","\u2014","O(log (n))","O(log (n))","O(log (n))","\u2014","O(log (n))","O(log (n))","O(log (n))","O(n)"],,],Y=[["array.push","O(1)","Insert element to the end of the array"],["array.pop","O(1)","Remove element to the end of the array"],["array.shift","O(n)","Remove element to the beginning of the"],["array.unshift","O(n)","Insert element(s) to the beginning of the"],["array.slice","O(n)","Returns a copy of the array from beginning"],["array.splice","O(n)","Changes (add/remove) the array"]],X=["Function","Runtime","Description"],Z=["Operation","Worst"],ee=[["Access (Array.[])","O(1)"],["Insert head (Array.unshift)","O(n)"],["Insert tail (Array.push)","O(1)"],["Search (for value)","O(n)"],["Delete (Array.splice)","O(n)"]],te=function(){var e=G[0];G.shift();var t=G,n=q[0];q.shift();var a=q,l=X[0];X.shift();var s=X,c=Z[0];Z.shift();var o=Z;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"table-container-6",role:"table","aria-label":"Destinations"},r.a.createElement("div",{className:"flex-table header",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"columnheader"},"Country"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Events"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Time"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"Fees"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"tax"),r.a.createElement("div",{className:"flex-row-6",role:"columnheader"},"over paid tax")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"},"United Kingdom"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Stonehenge, Windsor and Bath with Pub Lunch"," "),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"19 Sep, 1p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$500"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$50")),r.a.createElement("div",{className:"flex-table row",role:"rowgroup"},r.a.createElement("div",{className:"flex-row-6 first",role:"cell"}," ","Australia"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"Blue Mountains Tours"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"9 Sep, 2p.m."),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$400"),r.a.createElement("div",{className:"flex-row-6",role:"cell"},"US$655"))),r.a.createElement(K,{firstHeader:e,restOfHeaders:t,rowsData:J,columns:6}),r.a.createElement("h3",{style:ne},"Data Structures Big-O"),r.a.createElement(K,{firstHeader:n,restOfHeaders:a,rowsData:Q,columns:10}),r.a.createElement("h3",{style:ne},"Common JS Array built-in functions"),r.a.createElement(K,{firstHeader:l,restOfHeaders:s,rowsData:Y,columns:3}),r.a.createElement("h3",{style:ne},"Array operations time complexity"),r.a.createElement(K,{firstHeader:c,restOfHeaders:o,rowsData:ee,columns:2}))},ne={textAlign:"center"},ae=n(13),re=n(27),le=function(e){console.log(e);var t=Object(a.useState)(e),n=Object(o.a)(t,2),l=n[0],s=n[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%"}},r.a.createElement(re.a,{onDragEnd:function(e){return function(e,t,n){if(e.destination){var a=e.source,r=e.destination;if(a.droppableId!==r.droppableId){var l,s=t[a.droppableId],c=t[r.droppableId],i=Object(m.a)(s.items),u=Object(m.a)(c.items),p=i.splice(a.index,1),h=Object(o.a)(p,1)[0];u.splice(r.index,0,h),n(Object(d.a)({},t,(l={},Object(ae.a)(l,a.droppableId,Object(d.a)({},s,{items:i})),Object(ae.a)(l,r.droppableId,Object(d.a)({},c,{items:u})),l)))}else{var g=t[a.droppableId],f=Object(m.a)(g.items),x=f.splice(a.index,1),b=Object(o.a)(x,1)[0];f.splice(r.index,0,b),n(Object(d.a)({},t,Object(ae.a)({},a.droppableId,Object(d.a)({},g,{items:f}))))}}}(e,l,s)}},Object.entries(l).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],l=n[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},key:a},r.a.createElement("h2",null,l.name),r.a.createElement("div",{style:{margin:8}},r.a.createElement(re.c,{droppableId:a,key:a},(function(e,t){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:{background:t.isDraggingOver?"lightblue":"lightgrey",padding:4,width:250,minHeight:500}}),l.items.map((function(e,t){return r.a.createElement(re.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return r.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(d.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:n.isDragging?"#263B4A":"#456C86",color:"white"},t.draggableProps.style)}),e.content)}))})),e.placeholder)}))))}))))},se={transactions:[],mockTasks:[{id:i(),content:"First task"},{id:i(),content:"Second task"},{id:i(),content:"Third task"},{id:i(),content:"Fourth task"}]},ce=function(){var e,t=r.a.useContext(h).tasksFromBackend;console.log(t);var n=(e={},Object(ae.a)(e,i(),{name:"Requested",items:se.mockTasks}),Object(ae.a)(e,i(),{name:"Done",items:[]}),e);return r.a.createElement("div",null,r.a.createElement(le,n))},oe=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:R}),r.a.createElement(c.a,{exact:!0,path:"/stream",component:j}),r.a.createElement(c.a,{exact:!0,path:"/expenses",component:N}),r.a.createElement(c.a,{exact:!0,path:"/featured",component:U}),r.a.createElement(c.a,{exact:!0,path:"/table",component:te}),r.a.createElement(c.a,{exact:!0,path:"/drag",component:ce}))};var ie=function(){return r.a.createElement(g,null,r.a.createElement(L.a,null,r.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6950af75.chunk.js.map