(this.webpackJsonptally=this.webpackJsonptally||[]).push([[5],{105:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(43),n=a.n(r),i=a(84),o=(a(105),a(75)),j=(a(106),function(e){e&&e instanceof Function&&a.e(24).then(a.bind(null,1196)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))}),l=a(150),d=a(35),x=a(9),h=a(1),b=c.a.createContext([]),O=function(e){var t=e.data;return Object(h.jsx)(b.Provider,{value:t,children:e.children})},m=function(){return c.a.useContext(b)},u=a(62),g=a(76),v=a(139),p=function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)(v.a,{variant:"h6",color:"white",children:"Sushi Governance"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/govover",children:Object(h.jsx)(v.a,{variant:"h6",color:"white",children:"Governance Overview"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/govlead",children:Object(h.jsx)(v.a,{variant:"h6",color:"white",children:"Governance Leaderboard"})})})]})}),Object(h.jsx)(x.a,{})]})},f=a(13),w=a(137),y=a(141),N=a(143),S=a(138),D=function(e){var t=e.variant,a=e.color;return Object(h.jsx)(v.a,{align:"left",variant:t,sx:{color:a},children:e.children})},A=a(81),F=a(140),E=function(e){return Object(h.jsxs)(w.a,{container:!0,spacing:5,style:{marginTop:"1px"},children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(v.a,{variant:"body2",color:"white",children:e.label})}),Object(h.jsx)(w.a,{item:!0,xs:8,children:Object(h.jsx)(F.a,Object(A.a)({variant:"determinate",color:e.color},e))}),Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(v.a,{variant:"body2",color:"white",children:"".concat(Math.round(e.value),"%")})})]})},T=function(e){var t=Object(s.useState)(),a=Object(f.a)(t,2),c=a[0],r=a[1],n=e.status;return Object(s.useEffect)((function(){if(n)switch(n){case"REVIEW":r("warning");break;case"PENDING":r("info");break;default:r("success")}}),[n]),Object(h.jsx)(S.a,{variant:"contained",color:c,size:"small",sx:{cursor:"none",pointerEvents:"none"},children:n})},k=function(e){return Object(h.jsx)(S.a,{color:"error",variant:"outlined",className:"no-hover",children:"6 Days Remaining"})},C=function(e){var t=e.address,a=e.marginTop;return Object(h.jsxs)(w.a,{container:!0,spacing:2,style:{marginTop:a},children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:"0xMasterCef"}),Object(h.jsx)(w.a,{item:!0,xs:12,children:t})]})},I=function(e){var t=e.headerText,a=e.showProposalPanel,c=e.proposals;return Object(h.jsx)(s.Fragment,{children:Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{variant:"h5",children:t}),c.map((function(e){return Object(h.jsx)(y.a,{className:"purple-card with-margin",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(w.a,{container:!0,spacing:5,style:{marginTop:"20px"},children:[Object(h.jsx)(w.a,{item:!0,xs:6,sx:{padding:"5px"},children:Object(h.jsxs)(w.a,{container:!0,spacing:2,children:[Object(h.jsxs)(w.a,{item:!0,xs:6,sx:{float:"left"},children:["#",e.id]}),Object(h.jsx)(w.a,{item:!0,xs:6,sx:{float:"right"},children:Object(h.jsx)(T,{status:e.status})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(D,{variant:"h4",children:e.title})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(D,{variant:"body1",children:e.description})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(k,{timeRemaining:e.timeRemaining})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(S.a,{color:"secondary",variant:"contained",fullWidth:!0,onClick:function(){a(e)},children:"Show Details"})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(C,{address:e.proposedBy,marginTop:"20px"})})]})}),Object(h.jsx)(w.a,{item:!0,xs:1,sx:{borderLeft:"1px solid grey"}}),Object(h.jsxs)(w.a,{item:!0,xs:5,children:[Object(h.jsx)(E,{color:"success",label:"For",value:e.votes.for}),Object(h.jsx)(E,{color:"error",label:"Against",value:e.votes.against}),Object(h.jsx)(E,{color:"warning",label:"Abstain",value:e.votes.abstain})]})]})})},e.id)}))]})})})},B=function(e){var t=e.header,a=e.details;return Object(h.jsx)(y.a,{className:"purple-card with-margin with-border",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{color:"#A8A8A8",variant:e.variantHeader,children:t}),Object(h.jsx)(D,{variant:e.variantDetails,children:a}),e.action&&Object(h.jsx)(S.a,{variant:"contained",color:"secondary",fullWidth:!0,sx:{marginTop:"10px"},children:e.action})]})})},P=function(e){var t=e.headerText;return Object(h.jsx)(y.a,{sx:{minWidth:"100%",backgroundColor:"#202230",color:"white",borderRadius:5},variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{variant:"h5",children:t}),Object(h.jsx)(B,{variantHeader:"h6",variantDetails:"h4",header:"xSUSHI / SUSHI-ETH balance",details:"0.000000000"}),Object(h.jsx)(B,{variantHeader:"h5",variantDetails:"body1",header:"Voting Set-up",details:"You can either vote on each proposal yourself or delegate your votes to a third party. Sushi Governance puts you in charge of the future of Sushi. Learn more.",action:"Get Started"})]})})},M=function(e){var t=e.votersFor,a=e.votersAgainst,c=Object(s.useState)(t),r=Object(f.a)(c,2),n=r[0],i=r[1];return Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:3,children:Object(h.jsx)(S.a,{variant:"outlined",className:"no-transform-button",onClick:function(){return i(t)},children:"For"})}),Object(h.jsx)(w.a,{item:!0,xs:3,children:Object(h.jsx)(S.a,{variant:"outlined",className:"no-transform-button",onClick:function(){return i(a)},children:"Against"})}),Object(h.jsx)(w.a,{item:!0,xs:6,sx:{textAlign:"right"},children:Object(h.jsx)(S.a,{variant:"outlined",className:"no-transform-button no-hover",children:"342,343"})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(y.a,{className:"purple-card with-margin with-border",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:7,children:Object(h.jsx)(S.a,{variant:"outlined",className:"no-transform-button no-hover",children:"ADDRESS"})}),Object(h.jsx)(w.a,{item:!0,xs:5,sx:{textAlign:"right"},children:Object(h.jsx)(S.a,{variant:"outlined",className:"no-transform-button no-hover",children:"VOTES"})}),n.slice(0,10).map((function(e){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(w.a,{item:!0,xs:7,sx:{fontSize:"small"},className:"with-margin-bottom",children:e.address}),Object(h.jsx)(w.a,{item:!0,xs:5,sx:{fontSize:"small",textAlign:"right"},className:"with-margin-bottom",children:e.votes})]},Math.random().toString())})),Object(h.jsx)(w.a,{item:!0,xs:4}),Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(S.a,{color:"success",variant:"outlined",className:"no-transform-button",sx:{textAlign:"center",marginTop:"20px"},children:"VIEW ALL"})}),Object(h.jsx)(w.a,{item:!0,xs:4})]})})})})]})})})},R=a(135),G=a(24),L=a.n(G),V=function(e){var t=e.data,a=function(){return new Date(t.startDate).toLocaleString()},s=function(){return new Date(t.endDate).toLocaleString()};return Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(D,{variant:"h5",children:"Proposal History"})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(y.a,{className:"purple-card with-margin with-border",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:1,className:"greyed-out",children:Object(h.jsx)(R.a,{sx:{margin:0,padding:0},icon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}}),checkedIcon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}})})}),Object(h.jsx)(w.a,{item:!0,xs:5,children:"Created"}),Object(h.jsx)(w.a,{item:!0,xs:5,className:"align-right",children:a()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:1,className:"greyed-out",children:Object(h.jsx)(R.a,{sx:{margin:0,padding:0},icon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}}),checkedIcon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}})})}),Object(h.jsx)(w.a,{item:!0,xs:5,children:"Active"}),Object(h.jsx)(w.a,{item:!0,xs:5,className:"align-right",children:a()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:1,className:"greyed-out",children:Object(h.jsx)(R.a,{sx:{margin:0,padding:0},icon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}}),checkedIcon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}})})}),Object(h.jsx)(w.a,{item:!0,xs:5,children:"Succeeded"}),Object(h.jsx)(w.a,{item:!0,xs:5,className:"align-right",children:s()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:1,className:"greyed-out",children:Object(h.jsx)(R.a,{sx:{margin:0,padding:0},icon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}}),checkedIcon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}})})}),Object(h.jsx)(w.a,{item:!0,xs:5,children:"Queued"}),Object(h.jsx)(w.a,{item:!0,xs:5,className:"align-right",children:a()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:1,className:"greyed-out",children:Object(h.jsx)(R.a,{sx:{margin:0,padding:0},icon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}}),checkedIcon:Object(h.jsx)(L.a,{color:"success",sx:{width:"0.75em"}})})}),Object(h.jsx)(w.a,{item:!0,xs:5,children:"Executed"}),Object(h.jsx)(w.a,{item:!0,xs:5,className:"align-right",children:s()})]})]})})})]})})})},W=function(e){var t=e.data;return Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(D,{variant:"h5",children:"Information"})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(y.a,{className:"purple-card with-margin with-border",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:4,className:"greyed-out",children:"Stage"}),Object(h.jsx)(w.a,{item:!0,xs:8,className:"align-right",children:t.stage})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:4,className:"greyed-out",children:"Start Date"}),Object(h.jsx)(w.a,{item:!0,xs:8,className:"align-right",children:new Date(t.startDate).toLocaleString()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:4,className:"greyed-out",children:"End Date"}),Object(h.jsx)(w.a,{item:!0,xs:8,className:"align-right",children:new Date(t.endDate).toLocaleString()})]}),Object(h.jsxs)(w.a,{container:!0,className:"with-margin-bottom",children:[Object(h.jsx)(w.a,{item:!0,xs:4,className:"greyed-out",children:"Proposal #"}),Object(h.jsx)(w.a,{item:!0,xs:8,className:"align-right",children:t.id})]})]})})})]})})})},H=a(83),q=a.n(H),z=function(e){var t=e.data,a=e.back;return Object(h.jsx)(s.Fragment,{children:t&&Object(h.jsxs)(s.Fragment,{children:[Object(h.jsxs)(w.a,{container:!0,spacing:5,style:{marginTop:"1px"},children:[Object(h.jsx)(w.a,{item:!0,xs:1,children:Object(h.jsx)(S.a,{onClick:a,children:Object(h.jsx)(q.a,{})})}),Object(h.jsx)(w.a,{item:!0,xs:11}),Object(h.jsxs)(w.a,{item:!0,xs:1,children:["#",t.id]}),Object(h.jsx)(w.a,{item:!0,xs:7,children:Object(h.jsx)(D,{variant:"h4",color:"white",children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:t.title}),Object(h.jsx)(w.a,{item:!0,xs:3,children:Object(h.jsx)(T,{status:t.status})}),Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(k,{timeRemaining:1e3})})]})})}),Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(C,{address:t.creator,marginTop:"0"})})]}),Object(h.jsxs)(w.a,{container:!0,spacing:5,style:{marginTop:"1px"},children:[Object(h.jsx)(w.a,{item:!0,xs:5,children:Object(h.jsxs)(w.a,{container:!0,children:[Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(M,{votersFor:t.voters.for,votersAgainst:t.voters.against})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(W,{data:t})}),Object(h.jsx)(w.a,{item:!0,xs:12,children:Object(h.jsx)(V,{data:t})})]})}),Object(h.jsx)(w.a,{item:!0,xs:7,children:Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{variant:"h5",children:"Proposal Details"}),Object(h.jsx)(y.a,{className:"purple-card with-border with-margin",variant:"outlined",children:Object(h.jsx)(N.a,{children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:t.details}})})})]})})})]})]})})},U=function(){var e=m(),t=Object(s.useState)(!1),a=Object(f.a)(t,2),c=a[0],r=a[1],n=Object(s.useState)(void 0),i=Object(f.a)(n,2),o=i[0],j=i[1];return Object(h.jsx)(s.Fragment,{children:c?Object(h.jsx)(z,{data:o,back:function(){r(!1),j(void 0)}}):Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(D,{variant:"h3",children:"Sushi Governance"}),Object(h.jsxs)(w.a,{container:!0,spacing:2,style:{marginTop:"20px"},children:[Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(P,{headerText:"Your Voting Wallet"})}),Object(h.jsx)(w.a,{item:!0,xs:8,children:Object(h.jsx)(I,{proposals:e,headerText:"Active Proposals",showProposalPanel:function(e){r(!0),j(e)}})})]})]})})},J=a(144),Y=a(142),Z=a(145),$=a(146),Q=a(147),_=a(148),X=a(149),K=function(){return Object(h.jsx)(y.a,{className:"grey-card",variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{variant:"h5",children:"Governance Stats"}),Object(h.jsx)(B,{variantHeader:"h6",variantDetails:"h4",header:"SUSHI REMAINING",details:"45,123,456"}),Object(h.jsx)(B,{variantHeader:"h6",variantDetails:"h4",header:"VOTES DELEGATED",details:"45,123"}),Object(h.jsx)(B,{variantHeader:"h6",variantDetails:"h4",header:"VOTING ADDRESSES",details:"456,123"})]})})},ee=function(){var e=[{rank:1,address:"0x1231231231123123213",voteWeight:"16%",proposalsVoted:5}].flatMap((function(e){return Array.from({length:10}).fill(e)}));return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(D,{variant:"h3",children:"Governance Overview"}),Object(h.jsxs)(w.a,{container:!0,spacing:2,style:{marginTop:"20px"},children:[Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(K,{})}),Object(h.jsx)(w.a,{item:!0,xs:8,children:Object(h.jsx)(y.a,{sx:{minWidth:"100%",backgroundColor:"#202230",color:"white",borderRadius:5},variant:"outlined",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(D,{variant:"h5",children:"Leaderboard"}),Object(h.jsx)(J.a,{component:Y.a,sx:{backgroundColor:"#15081D",marginTop:"10px",borderRadius:5},children:Object(h.jsxs)(Z.a,{children:[Object(h.jsx)($.a,{children:Object(h.jsx)(Q.a,{children:["Rank","Address","Vote Weight","Proposals Voted"].map((function(e){return Object(h.jsx)(_.a,{sx:{color:"white"},children:e})}))})}),Object(h.jsx)(X.a,{children:e.map((function(e,t){return Object(h.jsxs)(Q.a,{children:[Object(h.jsx)(_.a,{sx:{color:"white",borderBottom:"none"},children:e.rank}),Object(h.jsx)(_.a,{sx:{color:"white",borderBottom:"none"},children:e.address}),Object(h.jsx)(_.a,{sx:{color:"white",borderBottom:"none"},children:e.voteWeight}),Object(h.jsx)(_.a,{sx:{color:"white",borderBottom:"none"},children:e.proposalsVoted})]},t)}))})]})})]})})})]})]})},te=function(){var e=m(),t=Object(s.useState)(!1),a=Object(f.a)(t,2),c=a[0],r=a[1],n=Object(s.useState)(void 0),i=Object(f.a)(n,2),o=i[0],j=i[1];return Object(h.jsx)(s.Fragment,{children:c?Object(h.jsx)(z,{data:o,back:function(){r(!1),j(void 0)}}):Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(D,{variant:"h3",children:"Governance Overview"}),Object(h.jsxs)(w.a,{container:!0,spacing:2,style:{marginTop:"20px"},children:[Object(h.jsx)(w.a,{item:!0,xs:4,children:Object(h.jsx)(K,{})}),Object(h.jsx)(w.a,{item:!0,xs:8,children:Object(h.jsx)(I,{proposals:e,headerText:"Active Proposals",showProposalPanel:function(e){r(!0),j(e)}})})]})]})})},ae=function(){var e=function(){var e=["REVIEW","PENDING","LIVE"],t=["Review","Pending","Live"],a=g.proposals.flatMap((function(e){return Array.from({length:10}).fill(e)})),s=[];return a.forEach((function(a){var c=Object(u.cloneDeep)(a),r=Math.floor(3*Math.random()),n=Math.floor(100*Math.random()),i=Math.floor(100*Math.random()),o=Math.floor(100*Math.random());c.id=Math.floor(100*Math.random())+1,c.status=e[r],c.stage=t[r],c.votes.for=n,c.votes.against=i,c.votes.abstain=o,console.log(c),console.log(c),s.push(c)})),console.log(s),s}();return Object(h.jsx)(O,{data:e,children:Object(h.jsx)(d.a,{children:Object(h.jsx)(x.d,{children:Object(h.jsxs)(x.b,{path:"/",element:Object(h.jsx)(p,{}),children:[Object(h.jsx)(x.b,{index:!0,element:Object(h.jsx)(U,{})}),Object(h.jsx)(x.b,{path:"talley",element:Object(h.jsx)(te,{})}),Object(h.jsx)(x.b,{path:"govover",element:Object(h.jsx)(te,{})}),Object(h.jsx)(x.b,{path:"govlead",element:Object(h.jsx)(ee,{})})]})})})})};n.a.render(Object(h.jsx)(l.a,{sx:{backgroundColor:"#15081D",color:"white"},maxWidth:"lg",children:Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{}),Object(h.jsx)(ae,{})]})})}),document.getElementById("root")),j(console.log)},76:function(e){e.exports=JSON.parse('{"proposals":[{"creator":"0xe04AB39684A24D8D4124b114F3bd6FBEB779cacA","id":1,"status":"REVIEW","title":"Sushi Treasury Multisig Reflection","description":"This proposal is the bi-yearly reelection of the treasury multisigatory. The proposal outlines a selective candidates to oversee the treasury of Sushiswap","details":"This proposal\u2019s expectation is to produce a community signal on a grant. Full details and discussions thus far can be found at:<br/><br/>https://forum.sushi.com/t/updated-proposal-community-enabled-analytics-for-sushi/6127<br/><br/>A previous snapshot vote on this topic can be reviewed at: https://snapshot.org/#/sushigov.eth/proposal/QmcwEVRfidkg5U8n3Z9CWgZfb63Fdy9Gy3BPX9z6xZL7nr<br/><br/>Year 1 Program Expectations:<br/><br/>Given the pilot program data, the expected results from a year of bounties would be as follows:<br/><br/>~ Overhaul of Sushi website analytics page (multi-chain coverage)<br/><br/>~ Analytics on key Sushi product lines<br/><br/>~ 460 new active, engaged community members [acquisition]<br/><br/>~ 27,000 SUSHI retained in ecosystem [retention]<br/><br/>~ 350+ unique dashboards, queries, visualizations, & in-depth analyses, and premium interactive solutions.<br/><br/>Grant Request: $1M Annually<br/><br/>\u2192 50% of this will be delivered to ecosystem community members as bounties ($41,667 per month)<br/><br/>\u2192 The other 50% ($41,667 per month) is Flipside\u2019s Fee To Operate the Program<br/><br/>Oversight Committee: Purpose is to ensure that the grant proceeds are applied in a manner consistent with its design. The Committee will meet and take a vote annually to evaluate the continuation of the program.<br/>","votes":{"for":40,"against":35,"abstain":25},"stage":"Review","startDate":1649306798936,"endDate":1649306808936,"voters":{"for":[{"address":"0x729F19e4C405758C93F59E5f098190cB2382d883","votes":123321},{"address":"0x5F6D18DBB061fC103d8090c094aF3Fb45Da338c9","votes":324124},{"address":"0x2CC8B21D9FD583b211c5C3369A444D564FE8000a","votes":243123},{"address":"0xFfbE28b3093C9bFe05f2dB03f0dAc1356949D7e6","votes":432123}],"against":[{"address":"0x76B4aa9Fc4d351a0062c6af8d186DF959D564A84","votes":412341},{"address":"0xac706cE8A9BF27Afecf080fB298d0ee13cfb978A","votes":90890}],"abstain":[{"address":"0xe04AB39684A24D8D4124b114F3bd6FBEB779cacA","votes":99090}]},"history":{"created":1649306797936,"active":1649306797936,"succeeded":1649306797936,"queued":1649306797936,"executed":1649306797936}}]}')}},[[114,6,11]]]);