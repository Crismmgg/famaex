(this.webpackJsonpfamaex=this.webpackJsonpfamaex||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(2),s=a.n(o),c=a(6),l=a(3),i=a(4),u=a(7),p=a(5),m=a(8);a(14);var f=function(e){return n.a.createElement("main",null,n.a.createElement("ul",{className:"reports__container"},e.reports.map((function(e,t){var a=e.id,r=e.name,o=e.Text;return n.a.createElement("li",{key:a,className:"reports__list__".concat(t)},n.a.createElement("h2",{className:"reports__title"},r),n.a.createElement("p",{className:"reports__text"},o))}))),n.a.createElement("div",{className:"reports__order"},n.a.createElement("select",{onChange:function(t){e.handleSort({inputSort:t.target.value})},value:e.sortValue},n.a.createElement("option",{value:"id"},"By id"),n.a.createElement("option",{value:"date"},"By date"))))};var h=function(){return n.a.createElement("div",{className:"header__container"},n.a.createElement("h1",null,"Informes"))};var d=function(){return n.a.createElement("footer",{className:"footer__container"},n.a.createElement("a",{href:"https://www.google.es/",title:"Google",target:"_blank",rel:"noopener noreferrer"},"Esto  |"),n.a.createElement("a",{href:"https://giphy.com/gifs/shia-labeouf-12NUbkX6p4xOO4",title:"Giphy",target:"_blank",rel:"noopener noreferrer"},"  son  |"),n.a.createElement("a",{href:"https://www.ascodevida.com/",target:"_blank",title:"Asco de vida",rel:"noopener noreferrer"},"  links"))},E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSort=function(e){a.setState(e)},a.state={reports:[],inputSort:"id"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://5dfb6cf80301690014b8fb0a.mockapi.io/api/v1/reports").then((function(e){return e.json()})).then((function(t){e.setState({reports:t})}))}},{key:"sortedReports",value:function(){var e=Object(c.a)(this.state.reports);return"id"===this.state.inputSort?e.sort((function(e,t){return e.id-t.id})):e.sort((function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(h,null),n.a.createElement(f,{reports:this.sortedReports(),handleSort:this.handleSort,sortValue:this.state.inputSort}),n.a.createElement(d,null))}}]),t}(n.a.Component);s.a.render(n.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0b997c19.chunk.js.map