(this.webpackJsonpcoinbook=this.webpackJsonpcoinbook||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(60),i=a.n(s),c=(a(68),a(2)),l=a(3),o=a(6),d=a(5),u=a(4),p=(a.p,a(69),a(31)),h=(a(70),a(33)),g=a(9),m=a(35),b=a(13),y=a.n(b),k=a(32),C=a.n(k),S=(a(185),a(63)),f=(a(186),r.a.Component,function(e){var t=Object(n.useState)({}),a=Object(g.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)({}),l=Object(g.a)(c,2),o=l[0],d=l[1],u=Object(n.useState)(e.id),p=Object(g.a)(u,1)[0],b=Object(n.useState)(e.coinsOnMoonPay),k=(Object(g.a)(b,1)[0],Object(n.useState)(e.currency)),S=(Object(g.a)(k,1)[0],Object(n.useState)(e.currencysymbols)),f=Object(g.a)(S,1)[0],v=Object(n.useState)(e.days),E=(Object(g.a)(v,1)[0],Object(n.useState)({})),w=Object(g.a)(E,2),_=w[0],N=w[1];return Object(n.useEffect)((function(){!function(e){var t=e.days,a=e.currency,n=(e.currencysymbols,[]),r=[],s=[],c=[],l=[],o=[],u=[],g=[],m=p;function b(e){return e>=1?(Math.floor(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2):e>=.001?Math.floor(e*Math.pow(10,6))/Math.pow(10,6).toFixed(4):Math.floor(e*Math.pow(10,9))/Math.pow(10,9)}y.a.get("https://api.coingecko.com/api/v3/coins/".concat(m,"/market_chart?vs_currency=").concat(a,"&days=").concat(t)).then((function(e){console.log(e);var t,a=Object(h.a)(e.data.prices);try{for(a.s();!(t=a.n()).done;){var p=t.value;n.push(p[0]),r.push(p[1])}}catch(f){a.e(f)}finally{a.f()}console.log(r);for(var m=0;m<r.length;m+=1)s.push(b(r[m]));for(m=0;m<n.length;m++)o.push(n[m]);for(m=0;m<o.length;m++)g.push(C()(o[m]).format("lll"));var y,k=Object(h.a)(e.data.total_volumes);try{for(k.s();!(y=k.n()).done;){var S=y.value;n.push(S[0]),c.push(S[1])}}catch(f){k.e(f)}finally{k.f()}for(console.log(c),m=0;m<c.length;m+=4)l.push(c[m]);for(m=0;m<g.length;m+=4)u.push(g[m]);i({labels:g,datasets:[{label:"Price",backgroundColor:"rgba(63, 43, 175, 0.8)",background:"\n    linear-gradient(180deg, rgba(74, 61, 140, 1), rgba(18, 9, 17, 1)),\n    linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)),\n    radial-gradient(circle at 77% 89%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 50%),\n    radial-gradient(circle at 15% 95%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 43%),\n    radial-gradient(circle at 65% 23%, rgba(137, 151, 119, 0.4), rgba(137, 151, 119, 0) 70%),\n    radial-gradient(circle at 10% 0%, rgba(187, 211, 204, 0.33), rgba(187,211,204,0) 35%),\n    radial-gradient(circle at 11% 100%, rgba(131, 165, 203, 0.3), rgba(131, 165, 203, 0) 30%)\n    ",borderWidth:"0px",data:s}]}),d({labels:u,datasets:[{label:"Volume",backgroundColor:"rgba(63, 43, 175, 0.8)",background:"\n    linear-gradient(180deg, rgba(74, 61, 140, 1), rgba(18, 9, 17, 1)),\n    linear-gradient(333deg, rgba(153, 207, 255, 0.2), rgba(180, 255, 217, 0.08)),\n    radial-gradient(circle at 77% 89%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 50%),\n    radial-gradient(circle at 15% 95%, rgba(125, 163, 169, 0.8), rgba(125, 163, 169, 0) 43%),\n    radial-gradient(circle at 65% 23%, rgba(137, 151, 119, 0.4), rgba(137, 151, 119, 0) 70%),\n    radial-gradient(circle at 10% 0%, rgba(187, 211, 204, 0.33), rgba(187,211,204,0) 35%),\n    radial-gradient(circle at 11% 100%, rgba(131, 165, 203, 0.3), rgba(131, 165, 203, 0) 30%)\n    ",borderColor:"rgba(135, 99, 225, 1)",data:l}]}),N(!0),N(!1)})).catch((function(e){console.log(e)}))}(e)}),[e]),r.a.createElement("div",{className:"charts-div"},r.a.createElement("td",{className:"charts"},r.a.createElement("p",{className:"chart-name"},"Price"),r.a.createElement(m.Line,{redraw:_,data:s,options:{legend:{display:!1},tooltips:{displayColors:!1,mode:"x-axis",backgroundColor:"#111111",bodyFontColor:"#F5F5F5",titleFontColor:"#F5F5F5",borderWidth:1,borderColor:"#111111",callbacks:{label:function(e){return e.yLabel>1?f+e.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):f+e.yLabel.toString()}}},responsive:!0,title:{text:"SCALE",display:!1},elements:{point:{radius:0},line:{tension:.05}},scales:{yAxes:[{ticks:{autoSkip:!1,maxTicksLimit:10,beginAtZero:!0,fontColor:"#F5F5F5",callback:function(t){return t>1?e.currencysymbols+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e.currencysymbols+t.toString()}},gridLines:{display:!1}}],xAxes:[{ticks:{maxTicksLimit:4,maxRotation:0,minRotation:0,fontColor:"#F5F5F5",callback:function(e){return e.split(",")[0]}},gridLines:{display:!1}}]}}})),window.innerWidth>768?r.a.createElement(r.a.Fragment,null):r.a.createElement("br",null),r.a.createElement("td",{className:"charts-vol"},r.a.createElement("p",{className:"chart-name"},"Volume"),r.a.createElement(m.Bar,{redraw:_,data:o,options:{legend:{display:!1},tooltips:{displayColors:!1,mode:"x-axis",backgroundColor:"#111111",bodyFontColor:"#F5F5F5",titleFontColor:"#F5F5F5",borderWidth:1,borderColor:"#111111",callbacks:{label:function(e){return f+e.yLabel.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},responsive:!0,title:{text:"SCALE",display:!1},elements:{point:{radius:0},line:{tension:.05}},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0,fontColor:"#F5F5F5",callback:function(t){return e.currencysymbols+((a=t)>1e6?(a/1e9).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"B":a);var a}},gridLines:{display:!1}}],xAxes:[{ticks:{maxTicksLimit:4,maxRotation:0,minRotation:0,fontColor:"#F5F5F5",callback:function(e){return e.split(",")[0]}},gridLines:{display:!1}}]}}})))}),v=(a(187),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentPage:n.props.pageNumber},n}return Object(l.a)(a,[{key:"handlePageHandsDown",value:function(){var e=this;if(""===this.props.searchValue)return this.props.pageNumber>1?r.a.createElement("a",{className:"page-button",onClick:function(){e.props.onClick("down")}},"\u2190"):r.a.createElement("a",null)}},{key:"handlePageHandsup",value:function(){var e=this;if(""===this.props.searchValue)return this.props.pageNumber<1?r.a.createElement("a",{className:"page-button",onClick:function(){e.props.onClick("up")}},"\u2192"):r.a.createElement("a",null)}},{key:"render",value:function(){this.props.pageNumber;return r.a.createElement("td",{colspan:"8"},r.a.createElement("div",{class:"container"},this.handlePageHandsDown(),r.a.createElement("br",null),r.a.createElement("p",null," Page ",this.props.pageNumber," "),r.a.createElement("br",null),this.handlePageHandsup()))}}]),a}(r.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={coinClicked:"",chartDays:1,redraw:!1,currency:n.props.currency,currency_symbols:n.props.currency_symbols,button_color:"white",orderSelection:n.props.orderSelection},n.dateClick=n.dateClick.bind(Object(o.a)(n)),n.buttonStyleForData=n.buttonStyleForData.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleUporDown",value:function(e){return e>0?"up":"down"}},{key:"roundDownPrice",value:function(e){if(e>=1){return(Math.floor(e*Math.pow(10,2))/Math.pow(10,2)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}if(e>=.001){return Math.floor(e*Math.pow(10,6))/Math.pow(10,6).toString()}return e.toFixed(8).toString()}},{key:"roundDown",value:function(e,t){return t=t||0,Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}},{key:"handleClick",value:function(e){if(this.state.coinClicked!==e.currentTarget.getAttribute("data-item")){var t=e.currentTarget.getAttribute("data-item"),a=e.currentTarget.getAttribute("data-item-symbol");this.setState({coinClicked:t,coinClickedSymbol:a}),console.log("We need to get the details for "+t)}else this.setState({coinClicked:"",coinClickedSymbol:""});this.chartRender(this.props.coins.id,this.state.chartDays)}},{key:"dateClick",value:function(e){var t=e.currentTarget.getAttribute("data-item");this.setState({chartDays:t})}},{key:"buttonStyleForData",value:function(e){return e.currentTarget.getAttribute("data-item")===this.state.chartDays?"btn-2":"btn-1"}},{key:"chartRender",value:function(e,t,a,n,s){var i=window.innerWidth,c=this.props.coins,l=(c.error,c.isLoaded,c.coins,this.state.currency_symbols[this.props.currency.toUpperCase()]);this.state.coinClickedSymbol;if(e===this.state.coinClicked)return i>768?r.a.createElement("tr",{className:"chartandpay"},r.a.createElement("td",{colspan:"8"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{className:"btn btn-1",key:"1-days","data-item":1,onClick:this.dateClick,id:e},"1 day"),r.a.createElement("a",{className:"btn btn-1",key:"7-days","data-item":7,onClick:this.dateClick,id:e},"1 week"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":30,onClick:this.dateClick,id:e},"1 month"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":90,onClick:this.dateClick,id:e},"3 months"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":365,onClick:this.dateClick,id:e},"1 year"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":730,onClick:this.dateClick,id:e},"2 years"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":4700,onClick:this.dateClick,id:e},"All time")),r.a.createElement(f,{id:e,days:t,redraw:this.state.redraw,currency:this.props.currency,currencysymbols:l}))):r.a.createElement("tr",{className:"chartandpay"},r.a.createElement("td",{colspan:"8"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{className:"btn btn-1",key:"1-days","data-item":1,onClick:this.dateClick,id:e},"1D"),r.a.createElement("a",{className:"btn btn-1",key:"7-days","data-item":7,onClick:this.dateClick,id:e},"1W"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":30,onClick:this.dateClick,id:e},"1M"),r.a.createElement("a",{className:"btn btn-1",key:"30-days","data-item":90,onClick:this.dateClick,id:e},"3M"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":365,onClick:this.dateClick,id:e},"1Y"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":730,onClick:this.dateClick,id:e},"2Y"),r.a.createElement("a",{className:"btn btn-1",key:"365-days","data-item":1825,onClick:this.dateClick,id:e},"ALL")),r.a.createElement(f,{id:e,days:t,redraw:this.state.redraw,currency:this.props.currency,currencysymbols:l})))}},{key:"result",value:function(){var e=this,t=window.innerWidth,a=this.props.coins,n=(a.error,a.isLoaded,a.coins);if(n.length>0){if(t>768){this.props.pageSettings;return n.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:t.id,"data-item":t.id,"data-item-symbol":t.symbol,onClick:e.handleClick.bind(e)},r.a.createElement("td",null,t.market_cap_rank),r.a.createElement("td",{className:"theCoinId"},r.a.createElement("p",{className:"theCoinIdSec"},r.a.createElement("img",{src:t.image,className:"Coin-Logo"}),t.name,r.a.createElement("span",{className:"symbol"},t.symbol.toUpperCase()))),r.a.createElement("td",null,e.props.currency_symbols[e.props.currency.toUpperCase()],e.roundDownPrice(t.current_price)),r.a.createElement("td",{className:e.handleUporDown(t.price_change_percentage_24h)},e.roundDown(t.price_change_percentage_24h,2),"%"),r.a.createElement("td",null,e.state.currency_symbols[e.props.currency.toUpperCase()],e.roundDown(t.total_volume).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",null,e.state.currency_symbols[e.props.currency.toUpperCase()],t.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",null,e.roundDown(t.circulating_supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),e.chartRender(t.id,e.state.chartDays))}))}this.props.pageSettings;return n.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"idcoin",key:t.id,"data-item":t.id,"data-item-symbol":t.symbol,onClick:e.handleClick.bind(e)},r.a.createElement("td",{className:"theCoinId"},r.a.createElement("p",{className:"theCoinIdSec"},r.a.createElement("img",{src:t.image,className:"Coin-Logo"}),t.name,r.a.createElement("span",{className:"symbol"},t.symbol.toUpperCase()))),r.a.createElement("td",null,e.props.currency_symbols[e.props.currency.toUpperCase()],e.roundDownPrice(t.current_price)),r.a.createElement("td",{className:e.handleUporDown(t.price_change_percentage_24h)},e.roundDown(t.price_change_percentage_24h,2),"%")),e.chartRender(t.id,e.state.chartDays,t.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e.roundDown(t.circulating_supply).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),e.state.currency_symbols[e.props.currency.toUpperCase()]))}))}return r.a.createElement("p",null,"No results \ud83d\ude15")}},{key:"render",value:function(){var e=window.innerWidth,t=this.props.coins,a=t.error,n=t.isLoaded;t.coins;return a?r.a.createElement("div",null,"Error: ",a.message):n?e>768?r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"table-header-button","data-item":"market_cap_rank",onClick:this.props.handleTableHeaderClick},"Rank"),r.a.createElement("th",null,"Coin"),r.a.createElement("th",{className:"table-header-button","data-item":"current_price",onClick:this.props.handleTableHeaderClick},"Price"),r.a.createElement("th",{className:"table-header-button","data-item":"price_change_percentage_24h",onClick:this.props.handleTableHeaderClick},"Change 24H"),r.a.createElement("th",{className:"table-header-button","data-item":"total_volume",onClick:this.props.handleTableHeaderClick},"Volume"),r.a.createElement("th",{className:"table-header-button","data-item":"market_cap",onClick:this.props.handleTableHeaderClick},"MarketCap"),r.a.createElement("th",null,"Supply")),this.result(),r.a.createElement("tr",null,r.a.createElement(v,{pageNumber:this.props.pageNumber,onClick:this.props.onClick,searchValue:this.props.searchValue}))):r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Coin"),r.a.createElement("th",{className:"table-header-button","data-item":"current_price",onClick:this.props.handleTableHeaderClick},"Price"),r.a.createElement("th",{className:"table-header-button","data-item":"price_change_percentage_24h",onClick:this.props.handleTableHeaderClick},"Change 24H")),this.result(),r.a.createElement("tr",null,r.a.createElement(v,{pageNumber:this.props.pageNumber,onClick:this.props.onClick,searchValue:this.props.searchValue}))):r.a.createElement("div",{class:"loader"},"\ud83e\ude99")}}]),a}(r.a.Component),w=(a(188),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){window.innerWidth;return r.a.createElement("div",{class:"wrapper"},r.a.createElement("input",{className:"search",placeholder:"\ud83d\udd0e Search Coin",type:"text",onChange:this.props.onChange,value:this.props.inputValue}))}}]),a}(r.a.Component)),_=(a(189),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currencies:n.props.currencies,settingsOptions:n.props.settingsOptions},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=window.innerWidth,a=this.state,n=a.currencies;a.settingsOptions;return t>768?r.a.createElement("span",{className:"settings"},r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn"},"\ud83d\udcb7"),r.a.createElement("div",{class:"dropdown-content"},n.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.onClick,value:e.props.inputValue},t.toUpperCase())}))))):r.a.createElement("div",{className:"settings"},r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"dropbtn1"},"\ud83d\udcb7"),r.a.createElement("div",{class:"dropdown-content",id:"dropdown-content-1"},n.map((function(t){return r.a.createElement("a",{"data-item":t,onClick:e.props.onClick,value:e.props.inputValue},t.toUpperCase())})))))}}]),a}(r.a.Component)),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,searchOn:!1,value:"",isLoaded:!1,coins:[],coinsForCard:[],rawCoins:[],coinsOnMoonPay:[],currencies:["gbp","eur","usd","btc","eth","aud","cad","rub","krw","cny"],settings:["Coming Soon"],settingsAPIParam:{All:"all"},currencySymbols:{GBP:"\xa3",EUR:"\u20ac",CRC:"\u20a1",USD:"$",ILS:"\u20aa",INR:"\u20b9",JPY:"\xa5",KRW:"\u20a9",NGN:"\u20a6",PHP:"\u20b1",PLN:"z\u0142",PYG:"\u20b2",THB:"\u0e3f",AUD:"$",CAD:"$",RUB:"\u20bd",IDR:"Rp",CNY:"\xa5",BTC:"\u20bf",ETH:"\u039e"},currency:"gbp",currencySymbol:"\xa3",dataSettings:"all",pageNumber:1,pageSettings:[0,250],orderSelection:""},n.onChange=n.onChange.bind(Object(o.a)(n)),n.handleCurrencyClick=n.handleCurrencyClick.bind(Object(o.a)(n)),n.handleSettingsClick=n.handleSettingsClick.bind(Object(o.a)(n)),n.handlePageChange=n.handlePageChange.bind(Object(o.a)(n)),n.handleTableHeaderClick=n.handleTableHeaderClick.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.localStorage();var t=this.state.currency;this.state.settingsAPIParam[this.state.dataSettings];fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(null!==localStorage.getItem("currency")?localStorage.getItem("currency"):t,"&order=market_cap_desc&per_page=350&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,coins:t.slice(e.state.pageSettings[0],e.state.pageSettings[1]),rawCoins:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),y.a.get("https://api.moonpay.io/v3/currencies?apiKey=pk_test_XYlfn9ISmwfjwReteBLpiN1TdSDV7Pw7").then((function(t){for(var a=[],n=0;t.data.length>n;n++)a.push(t.data[n].name.toLowerCase());console.log(a),e.setState({coinsOnMoonPay:a})})).catch((function(e){console.log(e)}))}},{key:"updateData",value:function(e,t){var a=this;this.state.settingsAPIParam[this.state.dataSettings];console.log(t),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(function(){return null!==localStorage.getItem("currency")?localStorage.getItem("currency"):this.state.currency}(),"&order=market_cap_desc&per_page=350&page=1&sparkline=false")).then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,coins:e.slice(a.state.pageSettings[0],a.state.pageSettings[1]),rawCoins:e})}),(function(e){a.setState({isLoaded:!0,error:e})}))}},{key:"localStorage",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){null!==localStorage.getItem("currency")&&this.setState({currency:localStorage.getItem("currency")}),null!==localStorage.getItem("dataSettings")&&this.setState({dataSettings:localStorage.getItem("dataSettings")})}))},{key:"onChange",value:function(e){var t=this.state.rawCoins;if(this.setState({value:e.target.value}),""==e.target.value)this.setState({coins:t.slice(this.state.pageSettings[0],this.state.pageSettings[1])});else if(e.target.value.length<this.state.value.length){var a=e.target.value.toLowerCase();t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a)}));this.setState({coins:t.slice(this.state.pageSettings[0],this.state.pageSettings[1])})}else if(e.target.value!==this.state.value){var n=e.target.value.toLowerCase(),r=t.filter((function(e){return-1!==e.name.toLowerCase().concat(e.symbol.toLowerCase()).indexOf(n)}));this.setState({coins:r})}}},{key:"handleTableHeaderClick",value:function(e){var t=e.currentTarget.getAttribute("data-item");if(console.log("coins being managed"+this.state.pageSettings),t===this.state.orderSelection){var a=this.state.rawCoins;this.setState({coins:a.slice(this.state.pageSettings[0],this.state.pageSettings[1]),orderSelection:""})}else if("price_change_percentage_24h"===t){var n=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.price_change_percentage_24h)-parseFloat(e.price_change_percentage_24h)}));console.log(n),this.setState({coins:n,orderSelection:t})}else if("total_volume"===t){var r=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.total_volume)-parseFloat(e.total_volume)}));this.setState({coins:r,orderSelection:t})}else if("current_price"===t){var s=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.current_price)-parseFloat(e.current_price)}));this.setState({coins:s,orderSelection:t})}else if("market_cap"===t){var i=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(t.market_cap)-parseFloat(e.market_cap)}));this.setState({coins:i,orderSelection:t})}else if("market_cap_rank"===t){var c=this.state.rawCoins.slice(this.state.pageSettings[0],this.state.pageSettings[1]).sort((function(e,t){return parseFloat(e.market_cap_rank)-parseFloat(t.market_cap_rank)}));this.setState({coins:c,orderSelection:t})}}},{key:"handleCurrencyClick",value:function(e){return this.setState({currency:e.currentTarget.getAttribute("data-item")}),localStorage.setItem("currency",e.currentTarget.getAttribute("data-item")),this.updateData(e.currentTarget.getAttribute("data-item"),this.state.dataSettings)}},{key:"handleSettingsClick",value:function(e){return this.setState({dataSettings:this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")],pageNumber:1,pageSettings:[0,250],orderSelection:""}),localStorage.setItem("dataSettings",this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")]),this.updateData(this.state.currency,this.state.settingsAPIParam[e.currentTarget.getAttribute("data-item")])}},{key:"handlePageChange",value:function(e){var t=this.state.rawCoins;if("up"===e){var a=this.state.pageSettings.map((function(e){return e+10}));this.setState({pageNumber:this.state.pageNumber+1,pageSettings:a,coins:t.slice(a[0],a[1])})}else if("down"===e){var n=this.state.pageSettings.map((function(e){return e-10}));this.setState({pageNumber:this.state.pageNumber-1,pageSettings:n,coins:t.slice(n[0],n[1])})}}},{key:"render",value:function(){return window.innerWidth>768?r.a.createElement("div",{className:"App"},r.a.createElement("body",{className:"App-body"},r.a.createElement("div",{style:{width:500}}),r.a.createElement("div",null,r.a.createElement(w,{inputValue:this.state.value,onChange:this.onChange}),r.a.createElement("span",null,r.a.createElement(_,{currencies:this.state.currencies,settings:this.handleSettingsClick,settingsOptions:this.state.settings,onClick:this.handleCurrencyClick,inputValue:this.state.currency}))),r.a.createElement("div",null,r.a.createElement(E,{coins:this.state,currency:this.state.currency,currency_symbols:this.state.currencySymbols,settings:this.state.settingsData,pageNumber:this.state.pageNumber,pageSettings:this.state.pageSettings,onClick:this.handlePageChange,searchValue:this.state.value,handleTableHeaderClick:this.handleTableHeaderClick,orderSelection:this.state.orderSelection,coinsOnMoonPay:this.state.coinsOnMoonPay})),r.a.createElement("div",null))):r.a.createElement("div",{className:"App"},r.a.createElement("body",{className:"App-body"},r.a.createElement("div",{style:{width:500}}),r.a.createElement(_,{currencies:this.state.currencies,settings:this.handleSettingsClick,settingsOptions:this.state.settings,onClick:this.handleCurrencyClick,inputValue:this.state.currency}),r.a.createElement(w,{inputValue:this.state.value,onChange:this.onChange}),r.a.createElement(E,{coins:this.state,currency:this.state.currency,currency_symbols:this.state.currencySymbols,settings:this.state.settingsData,pageNumber:this.state.pageNumber,pageSettings:this.state.pageSettings,onClick:this.handlePageChange,searchValue:this.state.value,handleTableHeaderClick:this.handleTableHeaderClick,orderSelection:this.state.orderSelection,coinsOnMoonPay:this.state.coinsOnMoonPay})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.92c8058f.chunk.js.map