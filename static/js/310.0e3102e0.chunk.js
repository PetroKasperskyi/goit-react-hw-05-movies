"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{687:function(n,t,e){e.d(t,{$:function(){return o},_:function(){return r}});var o="f869371a40a3de8a0444f13917eeabbd",r="https://api.themoviedb.org/3/"},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var o,r,i,a=e(439),u=e(243),c=e(791),s=e(87),d=e(689),l=e(687),p=e(168),x=e(867),f=x.ZP.button(o||(o=(0,p.Z)(["\n  background: #020250;\n  border: 1px solid #020250;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #fce803;\n  display: inline-block;\n  outline: 0;\n  padding: 10px 25px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  text-align: center;\n\n  &:hover,\n  &:active {\n    background-color: initial;\n    color: #020250;\n  }\n\n  &:active {\n    opacity: 0.5;\n  }\n"]))),h=x.ZP.input(r||(r=(0,p.Z)(["\n  border: 0;\n  outline: 1px solid #020250;\n  border-radius: 3px;\n  min-width: 130px;\n  height: 24px;\n  margin: 8px;\n  padding-left: 5px;\n"]))),b=x.ZP.ul(i||(i=(0,p.Z)(["\n  font-size: 18px;\n"]))),g=e(184),v=function(){var n,t=(0,s.lr)(),e=(0,a.Z)(t,2),o=e[0],r=e[1],i=null!==(n=o.get("query"))&&void 0!==n?n:"",p=(0,c.useState)(""),x=(0,a.Z)(p,2),v=x[0],m=x[1],_=(0,c.useState)([]),Z=(0,a.Z)(_,2),k=Z[0],y=Z[1],j=(0,d.TH)();(0,c.useEffect)((function(){i&&u.Z.get("".concat(l._,"search/movie?query=").concat(i,"&api_key=").concat(l.$)).then((function(n){var t=n.data;return y(t.results)})).catch((function(n){return console.log(n)}))}),[i]);return(0,g.jsxs)("div",{children:[(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),v&&r({query:v})},children:[(0,g.jsx)(h,{type:"text",value:v,autoComplete:"off",autoFocus:!0,onChange:function(n){return m(n.target.value.toLowerCase())}}),(0,g.jsx)(f,{type:"submit",children:"Search"})]}),(0,g.jsx)(b,{children:k.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsx)(s.rU,{to:"".concat(n.id),state:{from:j},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=310.0e3102e0.chunk.js.map