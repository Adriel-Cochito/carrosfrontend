"use strict";(self.webpackChunkcarros_frontend=self.webpackChunkcarros_frontend||[]).push([[721],{3823:function(n,e,r){r.r(e),r.d(e,{default:function(){return Nn}});var o=r(6907),t=r(8418),a=r(1614),c=r(1889),i=r(6934),s=r(4554),l=r(890),d=r(3060),u=r(184),x=(0,i.ZP)(a.Z)((function(n){var e=n.theme;return"\n        margin-top: ".concat(e.spacing(4),";\n")}));var h,p,f,m,j,g,Z,b,v,C,w,k,y=function(){return(0,u.jsx)(x,{className:"footer-wrapper",children:(0,u.jsxs)(s.Z,{pb:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(l.Z,{variant:"subtitle1",children:"\xa9 2022 - ACME CO"})}),(0,u.jsxs)(l.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1",children:["Crafted by"," ",(0,u.jsx)(d.Z,{href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer",children:"BloomUI.com"})]})]})})},P=r(6151),S=r(4696),I=r(6871),N=r(4165),z=r(5861),A=r(214),E=function(){var n=function(){var n=(0,z.Z)((0,N.Z)().mark((function n(){var e,r,o;return(0,N.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.Z.get("http://localhost:8080/api/carros/export-cars",{responseType:"blob"});case 3:e=n.sent,r=window.URL.createObjectURL(new Blob([e.data])),(o=document.createElement("a")).href=r,o.setAttribute("download","carros.csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.error("Erro ao baixar o arquivo CSV:",n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(P.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",onClick:n,startIcon:(0,u.jsx)(S.Z,{fontSize:"small"}),children:"Exportar Carros Para CSV"})})},M=function(){var n=(0,I.s0)();return(0,u.jsxs)(c.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,u.jsx)(c.ZP,{item:!0,children:(0,u.jsx)(l.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Carros Cadastrados"})}),(0,u.jsx)(c.ZP,{item:!0,children:(0,u.jsx)(P.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",onClick:function(){return n("/management/new-carro-validacao",{state:{mode:"create"}})},startIcon:(0,u.jsx)(S.Z,{fontSize:"small"}),children:"Cadastrar Carros Com validacao"})}),(0,u.jsx)(c.ZP,{item:!0,children:(0,u.jsx)(E,{})})]})},L=r(9439),R=r(3967),U=r(7621),W=r(9585),D=r(4721),O=r(9281),B=r(9836),T=r(6890),V=r(5855),q=r(3994),F=r(3382),_=r(7708),G=r(3400),H=r(4515),J=r(2791),K=r(5218),Q=r(4942),X=r(1413),Y=r(168),$=r(9218),nn=r(7870),en=(0,i.ZP)("div")(h||(h=(0,Y.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 1px;\n    margin-bottom: 10px;\n    padding: 20px;\n    width: 100%;\n"]))),rn=(0,i.ZP)($.Z)(p||(p=(0,Y.Z)(["\n    width: 100%;\n    max-width: 200px;  /* Tamanho m\xe1ximo dos inputs */\n    margin: 0 10px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n\n    .MuiInputBase-root {\n        border-radius: 10px;\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    .MuiOutlinedInput-root.Mui-focused fieldset {\n        border-color: #3f51b5;\n    }\n\n    input {\n        font-size: 16px;\n        color: #333;\n    }\n"]))),on=(0,i.ZP)(P.Z)(f||(f=(0,Y.Z)(["\n    margin-left: 10px;\n    background-color: #f44336;\n    color: white;\n    &:hover {\n        background-color: #d32f2f;\n    }\n"]))),tn=(0,i.ZP)(P.Z)(m||(m=(0,Y.Z)(["\n    margin-left: 10px;\n    background-color: #3f51b5;\n    color: white;\n    &:hover {\n        background-color: #303f9f;\n    }\n"]))),an=function(n){var e=n.setCarros,r=n.setTotal,o=(0,J.useState)({modelo:"",fabricante:"",status:""}),t=(0,L.Z)(o,2),a=t[0],c=t[1],i=function(n){var e=n.target,r=e.name,o=e.value;c((function(n){return(0,X.Z)((0,X.Z)({},n),{},(0,Q.Z)({},r,o))}))};return(0,u.jsx)(en,{children:(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),(new nn.Z).search(a).then((function(n){e(n.data),r(n.data.length)}))},style:{display:"flex",alignItems:"center"},children:[(0,u.jsx)(rn,{label:"modelo",variant:"outlined",name:"modelo",onChange:i,value:a.modelo}),(0,u.jsx)(rn,{label:"fabricante",variant:"outlined",name:"fabricante",onChange:i,value:a.fabricante}),(0,u.jsx)(rn,{label:"Status",variant:"outlined",name:"status",onChange:i,value:a.status}),(0,u.jsx)(on,{variant:"contained",onClick:function(){c({modelo:"",fabricante:"",status:""})},children:"Limpar"}),(0,u.jsx)(tn,{variant:"contained",type:"submit",children:" Buscar"})]})})},cn=r(8036),sn=r(1675),ln=r(5641),dn=r(5289),un=r(5661),xn=r(9157),hn=r(7123),pn=function(n){var e=n.open,r=n.onClose,o=n.onConfirm;return(0,u.jsxs)(dn.Z,{open:e,onClose:r,children:[(0,u.jsx)(un.Z,{children:"Confirma\xe7\xe3o de Exclus\xe3o"}),(0,u.jsx)(xn.Z,{children:(0,u.jsx)("p",{children:" Voc\xea tem certeza que deseja deletar esse item? Esta a\xe7\xe3o n\xe3o poder\xe1 ser desfeita!!"})}),(0,u.jsxs)(hn.Z,{children:[(0,u.jsx)(P.Z,{onClick:r,color:"primary",children:"Cancelar"}),(0,u.jsx)(P.Z,{onClick:o,color:"secondary",children:"Confirmar"})]})]})},fn=(0,i.ZP)("div")(j||(j=(0,Y.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0,0,0,0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n"]))),mn=(0,i.ZP)("div")(g||(g=(0,Y.Z)(["\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    width: 80%;\n    max-width: 600px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),jn=(0,i.ZP)("div")(Z||(Z=(0,Y.Z)(["\n    font-size: 1.5rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n"]))),gn=(0,i.ZP)("img")(b||(b=(0,Y.Z)(["\n    width: 150px;\n    height: 150px;\n    border-radius: 10px;\n    margin-bottom: 20px;\n"]))),Zn=(0,i.ZP)("span")(v||(v=(0,Y.Z)(["\n    width: 100%;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: space-between;\n"]))),bn=(0,i.ZP)("span")(C||(C=(0,Y.Z)(["   \n    font-weight: bold;\n    color: #333;\n"]))),vn=(0,i.ZP)("span")(w||(w=(0,Y.Z)(["\n    color: #666\n"]))),Cn=(0,i.ZP)("button")(k||(k=(0,Y.Z)(["\n    background-color: #ff4d4d;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    cursor: pointer;\n    margin-top: 20px;\n    &:hover {\n        background-color: rgba(255, 79, 26, 0.49);\n    }\n"]))),wn=function(n){var e=n.carro,r=n.onClose;return(0,u.jsx)(fn,{children:(0,u.jsxs)(mn,{children:[(0,u.jsxs)(jn,{children:[e.modelo," | ID: ",e.id]}),(0,u.jsx)(gn,{src:e.image,alt:e.modelo}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"modelo:"}),(0,u.jsx)(vn,{children:e.modelo})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"fabricante:"}),(0,u.jsx)(vn,{children:e.fabricante})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"pais:"}),(0,u.jsx)(vn,{children:e.pais})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"cor:"}),(0,u.jsx)(vn,{children:e.cor})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"ano:"}),(0,u.jsx)(vn,{children:e.ano})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"cavalosDePotencia:"}),(0,u.jsx)(vn,{children:e.cavalosDePotencia})]}),(0,u.jsxs)(Zn,{children:[(0,u.jsx)(bn,{children:"status:"}),(0,u.jsx)(vn,{children:e.status})]}),(0,u.jsx)(Cn,{onClick:r,children:"Fechar"})]})})},kn=r(5987),yn=["className","color","children"],Pn=(0,i.ZP)("span")((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.alpha.black[5],";\n      padding: ").concat(e.spacing(.5,1),";\n      font-size: ").concat(e.typography.pxToRem(13),";\n      border-radius: ").concat(e.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(e.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(e.colors.primary.lighter,";\n          color: ").concat(e.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(e.colors.alpha.black[100],";\n          color: ").concat(e.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(e.colors.secondary.lighter,";\n          color: ").concat(e.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(e.colors.success.lighter,";\n          color: ").concat(e.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(e.colors.warning.lighter,";\n          color: ").concat(e.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(e.colors.error.lighter,";\n          color: ").concat(e.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(e.colors.info.lighter,";\n          color: ").concat(e.palette.info.main,"\n        }\n      }\n")})),Sn=function(n){n.className;var e=n.color,r=void 0===e?"secondary":e,o=n.children,t=(0,kn.Z)(n,yn);return(0,u.jsx)(Pn,(0,X.Z)((0,X.Z)({className:"MuiLabel-"+r},t),{},{children:o}))},In=function(){var n=(0,I.s0)(),e=(0,R.Z)(),r=(0,J.useState)(!1),o=(0,L.Z)(r,2),t=(o[0],o[1],(0,J.useState)(!1)),a=(0,L.Z)(t,2),c=a[0],i=a[1],d=(0,J.useState)(!1),x=(0,L.Z)(d,2),h=x[0],p=x[1],f=(0,J.useState)([]),m=(0,L.Z)(f,2),j=m[0],g=m[1],Z=(0,J.useState)(null),b=(0,L.Z)(Z,2),v=b[0],C=b[1],w=(0,J.useState)(0),k=(0,L.Z)(w,2),y=k[0],P=k[1],N=(0,J.useState)(10),z=(0,L.Z)(N,2),A=z[0],E=z[1],M=(0,J.useState)(0),Q=(0,L.Z)(M,2),X=Q[0],Y=Q[1],$=(0,J.useState)({}),en=(0,L.Z)($,2),rn=(en[0],en[1]),on=new nn.Z,tn=new ln.Z,dn=function(){return K.ZP.error("Ops, algo de errado aconteceu.",{position:"top-center"})},un=function(n){var e={Novo:{text:"Novo",color:"success"},Seminovo:{text:"Seminovo",color:"warning"},Usado:{text:"Usado",color:"error"}}[n],r=e.text,o=e.color;return(0,u.jsx)(Sn,{color:o,children:r})};return(0,J.useEffect)((function(){on.getAllPaginated(0,10).then((function(n){var e=parseInt(n.headers["x-total-count"]);Y(isNaN(e)?0:e),g(n.data)})).catch((function(){dn()})),tn.getAll().then((function(n){var e={};n.data.forEach((function(n){e[n.value]={text:n.name,color:"Novo"===n.value?"success":"Seminovo"===n.value?"warning":"error"}})),rn(e)}))}),[]),(0,u.jsxs)(U.Z,{children:[(0,u.jsx)(W.Z,{}),(0,u.jsx)(an,{setCarros:g,setTotal:Y}),(0,u.jsx)(D.Z,{}),(0,u.jsx)(O.Z,{children:(0,u.jsxs)(B.Z,{children:[(0,u.jsx)(T.Z,{children:(0,u.jsxs)(V.Z,{children:[(0,u.jsx)(q.Z,{children:"ID"}),(0,u.jsx)(q.Z,{children:"Modelo"}),(0,u.jsx)(q.Z,{children:"fabricante"}),(0,u.jsx)(q.Z,{children:"Status"}),(0,u.jsx)(q.Z,{align:"right",children:"A\xe7\xf5es"})]})}),(0,u.jsx)(F.Z,{children:j.map((function(r){return(0,u.jsxs)(V.Z,{hover:!0,children:[(0,u.jsx)(q.Z,{children:(0,u.jsx)(l.Z,{variant:"body1",fontWeight:"bold",noWrap:!0,children:r.id})}),(0,u.jsx)(q.Z,{children:(0,u.jsx)(l.Z,{variant:"body2",fontWeight:"bold",noWrap:!0,children:r.modelo})}),(0,u.jsx)(q.Z,{children:(0,u.jsx)(l.Z,{variant:"body1",fontWeight:"bold",noWrap:!0,children:r.fabricante})}),(0,u.jsx)(q.Z,{children:un(r.status)}),(0,u.jsxs)(q.Z,{align:"right",children:[(0,u.jsx)(_.Z,{title:"Ver Mais",arrow:!0,children:(0,u.jsx)(G.Z,{onClick:function(){return function(n){C(n),p(!0)}(r)},sx:{"&:hover":{background:e.colors.primary.lighter},color:e.palette.primary.main},color:"inherit",size:"small",children:(0,u.jsx)(S.Z,{fontSize:"small"})})}),(0,u.jsx)(_.Z,{title:"Editar Carro",arrow:!0,children:(0,u.jsx)(G.Z,{onClick:function(){return function(e){n("/management/edit-carro/".concat(e.id),{state:{mode:"update"}})}(r)},sx:{"&:hover":{background:e.colors.primary.lighter},color:e.palette.primary.main},color:"inherit",size:"small",children:(0,u.jsx)(sn.Z,{fontSize:"small"})})}),(0,u.jsx)(_.Z,{title:"Deletar Carro",arrow:!0,children:(0,u.jsx)(G.Z,{onClick:function(){return function(n){C(n),i(!0)}(r)},sx:{"&:hover":{background:e.colors.error.lighter},color:e.palette.error.main},color:"inherit",size:"small",children:(0,u.jsx)(cn.Z,{fontSize:"small"})})})]})]},r.id)}))})]})}),(0,u.jsx)(s.Z,{p:2,children:(0,u.jsx)(H.Z,{component:"div",count:X,page:y,rowsPerPage:A,onRowsPerPageChange:function(n){var e=parseInt(n.target.value);E(e),P(0),on.getAllPaginated(0,e).then((function(n){var e=parseInt(n.headers["x-total-count"]);Y(isNaN(e)?0:e),g(n.data)}))},onPageChange:function(n,e){on.getAllPaginated(e,A).then((function(n){var e=parseInt(n.headers["x-total-count"]);Y(isNaN(e)?0:e),g(n.data)})),P(e)},rowsPerPageOptions:[5,10,25,50,70]})}),(0,u.jsx)(pn,{open:c,onClose:function(){i(!1)},onConfirm:function(){v&&on.delete(v.id).then((function(){on.getAllPaginated(y,A).then((function(n){var e=parseInt(n.headers["x-total-count"]);Y(isNaN(e)?0:e),g(n.data),i(!1),K.ZP.success("Carro deletado com sucesso",{position:"top-center"})}))})).catch((function(){i(!1),dn()}))}}),h&&v&&(0,u.jsx)(wn,{carro:v,onClose:function(){p(!1)}})]})};var Nn=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.ql,{children:(0,u.jsx)("title",{children:"Carros"})}),(0,u.jsx)(t.Z,{children:(0,u.jsx)(M,{})}),(0,u.jsx)(a.Z,{maxWidth:"lg",children:(0,u.jsx)(c.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,u.jsx)(c.ZP,{item:!0,xs:12,children:(0,u.jsx)(In,{})})})}),(0,u.jsx)(y,{})]})}}}]);
//# sourceMappingURL=721.d7dc29ab.chunk.js.map