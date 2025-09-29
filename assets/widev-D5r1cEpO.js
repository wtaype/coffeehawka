(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Sd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var go={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Cd=go.exports,uc;function Rd(){return uc||(uc=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Cd,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,v={},I=v.toString,P=v.hasOwnProperty,V=P.toString,G=V.call(Object),W={},Q=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},J=e.document,ve={type:!0,src:!0,nonce:!0,noModule:!0};function Te(s,u,h){h=h||J;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in ve)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function De(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[I.call(s)]||"object":typeof s}var Ze="3.7.1",qe=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:Ze,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,T=arguments[0]||{},R=1,A=arguments.length,N=!1;for(typeof T=="boolean"&&(N=T,T=arguments[R]||{},R++),typeof T!="object"&&!Q(T)&&(T={}),R===A&&(T=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||T===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=T[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,T[u]=l.extend(N,y,d)):d!==void 0&&(T[u]=d));return T},l.extend({expando:"jQuery"+(Ze+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=P.call(u,"constructor")&&u.constructor,typeof h=="function"&&V.call(h)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){Te(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!qe.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,T=s.length,R=!h;y<T;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,T=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&T.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&T.push(m);return c(T)},guid:1,support:W}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){v["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=De(s);return Q(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var x=r.pop,D=r.sort,M=r.splice,b="[\\x20\\t\\r\\n\\f]",Ke=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var cn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ya(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(cn,ya)};var xt=J,Cn=p;(function(){var s,u,h,d,m,y=Cn,T,R,A,N,q,B=l.expando,U=0,X=0,se=io(),Ee=io(),me=io(),Me=io(),o=function(w,k){return w===k&&(m=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",g="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",E="\\["+b+"*("+g+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+g+"))|)"+b+"*\\]",L=":("+g+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+E+")*)|.*)\\)|)",O=new RegExp(b+"+","g"),K=new RegExp("^"+b+"*,"+b+"*"),fe=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Ue=new RegExp(b+"|>"),_e=new RegExp(L),Fe=new RegExp("^"+g+"$"),He={ID:new RegExp("^#("+g+")"),CLASS:new RegExp("^\\.("+g+")"),TAG:new RegExp("^("+g+"|[*])"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},lt=/^(?:input|select|textarea|button)$/i,st=/^h\d$/i,We=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Bn=/[+~]/,At=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),mn=function(w,k){var F="0x"+w.slice(1)-65536;return k||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},vd=function(){$n()},Td=oo(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function Ed(){try{return T.activeElement}catch{}}try{y.apply(r=a.call(xt.childNodes),xt.childNodes),r[xt.childNodes.length].nodeType}catch{y={apply:function(k,F){Cn.apply(k,a.call(F))},call:function(k){Cn.apply(k,a.call(arguments,1))}}}function Pe(w,k,F,j){var $,Z,te,oe,ne,we,he,de=k&&k.ownerDocument,Ie=k?k.nodeType:9;if(F=F||[],typeof w!="string"||!w||Ie!==1&&Ie!==9&&Ie!==11)return F;if(!j&&($n(k),k=k||T,A)){if(Ie!==11&&(ne=We.exec(w)))if($=ne[1]){if(Ie===9)if(te=k.getElementById($)){if(te.id===$)return y.call(F,te),F}else return F;else if(de&&(te=de.getElementById($))&&Pe.contains(k,te)&&te.id===$)return y.call(F,te),F}else{if(ne[2])return y.apply(F,k.getElementsByTagName(w)),F;if(($=ne[3])&&k.getElementsByClassName)return y.apply(F,k.getElementsByClassName($)),F}if(!Me[w+" "]&&(!N||!N.test(w))){if(he=w,de=k,Ie===1&&(Ue.test(w)||fe.test(w))){for(de=Bn.test(w)&&Sa(k.parentNode)||k,(de!=k||!W.scope)&&((oe=k.getAttribute("id"))?oe=l.escapeSelector(oe):k.setAttribute("id",oe=B)),we=ns(w),Z=we.length;Z--;)we[Z]=(oe?"#"+oe:":scope")+" "+so(we[Z]);he=we.join(",")}try{return y.apply(F,de.querySelectorAll(he)),F}catch{Me(w,!0)}finally{oe===B&&k.removeAttribute("id")}}}return ac(w.replace(Ke,"$1"),k,F,j)}function io(){var w=[];function k(F,j){return w.push(F+" ")>u.cacheLength&&delete k[w.shift()],k[F+" "]=j}return k}function Ut(w){return w[B]=!0,w}function Xr(w){var k=T.createElement("fieldset");try{return!!w(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function wd(w){return function(k){return S(k,"input")&&k.type===w}}function Id(w){return function(k){return(S(k,"input")||S(k,"button"))&&k.type===w}}function sc(w){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===w:k.disabled===w:k.isDisabled===w||k.isDisabled!==!w&&Td(k)===w:k.disabled===w:"label"in k?k.disabled===w:!1}}function Sr(w){return Ut(function(k){return k=+k,Ut(function(F,j){for(var $,Z=w([],F.length,k),te=Z.length;te--;)F[$=Z[te]]&&(F[$]=!(j[$]=F[$]))})})}function Sa(w){return w&&typeof w.getElementsByTagName<"u"&&w}function $n(w){var k,F=w?w.ownerDocument||w:xt;return F==T||F.nodeType!==9||!F.documentElement||(T=F,R=T.documentElement,A=!l.isXMLDoc(T),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&xt!=T&&(k=T.defaultView)&&k.top!==k&&k.addEventListener("unload",vd),W.getById=Xr(function(j){return R.appendChild(j).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),W.disconnectedMatch=Xr(function(j){return q.call(j,"*")}),W.scope=Xr(function(){return T.querySelectorAll(":scope")}),W.cssHas=Xr(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),W.getById?(u.filter.ID=function(j){var $=j.replace(At,mn);return function(Z){return Z.getAttribute("id")===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z=$.getElementById(j);return Z?[Z]:[]}}):(u.filter.ID=function(j){var $=j.replace(At,mn);return function(Z){var te=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return te&&te.value===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z,te,oe,ne=$.getElementById(j);if(ne){if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne];for(oe=$.getElementsByName(j),te=0;ne=oe[te++];)if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne]}return[]}}),u.find.TAG=function(j,$){return typeof $.getElementsByTagName<"u"?$.getElementsByTagName(j):$.querySelectorAll(j)},u.find.CLASS=function(j,$){if(typeof $.getElementsByClassName<"u"&&A)return $.getElementsByClassName(j)},N=[],Xr(function(j){var $;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+f+")"),j.querySelectorAll("[id~="+B+"-]").length||N.push("~="),j.querySelectorAll("a#"+B+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),$=T.createElement("input"),$.setAttribute("type","hidden"),j.appendChild($).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),$=T.createElement("input"),$.setAttribute("name",""),j.appendChild($),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),W.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),o=function(j,$){if(j===$)return m=!0,0;var Z=!j.compareDocumentPosition-!$.compareDocumentPosition;return Z||(Z=(j.ownerDocument||j)==($.ownerDocument||$)?j.compareDocumentPosition($):1,Z&1||!W.sortDetached&&$.compareDocumentPosition(j)===Z?j===T||j.ownerDocument==xt&&Pe.contains(xt,j)?-1:$===T||$.ownerDocument==xt&&Pe.contains(xt,$)?1:d?_.call(d,j)-_.call(d,$):0:Z&4?-1:1)}),T}Pe.matches=function(w,k){return Pe(w,null,null,k)},Pe.matchesSelector=function(w,k){if($n(w),A&&!Me[k+" "]&&(!N||!N.test(k)))try{var F=q.call(w,k);if(F||W.disconnectedMatch||w.document&&w.document.nodeType!==11)return F}catch{Me(k,!0)}return Pe(k,T,null,[w]).length>0},Pe.contains=function(w,k){return(w.ownerDocument||w)!=T&&$n(w),l.contains(w,k)},Pe.attr=function(w,k){(w.ownerDocument||w)!=T&&$n(w);var F=u.attrHandle[k.toLowerCase()],j=F&&P.call(u.attrHandle,k.toLowerCase())?F(w,k,!A):void 0;return j!==void 0?j:w.getAttribute(k)},Pe.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var k,F=[],j=0,$=0;if(m=!W.sortStable,d=!W.sortStable&&a.call(w,0),D.call(w,o),m){for(;k=w[$++];)k===w[$]&&(j=F.push($));for(;j--;)M.call(w,F[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Ut,match:He,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(At,mn),w[3]=(w[3]||w[4]||w[5]||"").replace(At,mn),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Pe.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Pe.error(w[0]),w},PSEUDO:function(w){var k,F=!w[6]&&w[2];return He.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":F&&_e.test(F)&&(k=ns(F,!0))&&(k=F.indexOf(")",F.length-k)-F.length)&&(w[0]=w[0].slice(0,k),w[2]=F.slice(0,k)),w.slice(0,3))}},filter:{TAG:function(w){var k=w.replace(At,mn).toLowerCase();return w==="*"?function(){return!0}:function(F){return S(F,k)}},CLASS:function(w){var k=se[w+" "];return k||(k=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&se(w,function(F){return k.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(w,k,F){return function(j){var $=Pe.attr(j,w);return $==null?k==="!=":k?($+="",k==="="?$===F:k==="!="?$!==F:k==="^="?F&&$.indexOf(F)===0:k==="*="?F&&$.indexOf(F)>-1:k==="$="?F&&$.slice(-F.length)===F:k==="~="?(" "+$.replace(O," ")+" ").indexOf(F)>-1:k==="|="?$===F||$.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(w,k,F,j,$){var Z=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",oe=k==="of-type";return j===1&&$===0?function(ne){return!!ne.parentNode}:function(ne,we,he){var de,Ie,ue,Ne,_t,ht=Z!==te?"nextSibling":"previousSibling",kt=ne.parentNode,Jt=oe&&ne.nodeName.toLowerCase(),Yr=!he&&!oe,yt=!1;if(kt){if(Z){for(;ht;){for(ue=ne;ue=ue[ht];)if(oe?S(ue,Jt):ue.nodeType===1)return!1;_t=ht=w==="only"&&!_t&&"nextSibling"}return!0}if(_t=[te?kt.firstChild:kt.lastChild],te&&Yr){for(Ie=kt[B]||(kt[B]={}),de=Ie[w]||[],Ne=de[0]===U&&de[1],yt=Ne&&de[2],ue=Ne&&kt.childNodes[Ne];ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop();)if(ue.nodeType===1&&++yt&&ue===ne){Ie[w]=[U,Ne,yt];break}}else if(Yr&&(Ie=ne[B]||(ne[B]={}),de=Ie[w]||[],Ne=de[0]===U&&de[1],yt=Ne),yt===!1)for(;(ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop())&&!((oe?S(ue,Jt):ue.nodeType===1)&&++yt&&(Yr&&(Ie=ue[B]||(ue[B]={}),Ie[w]=[U,yt]),ue===ne)););return yt-=$,yt===j||yt%j===0&&yt/j>=0}}},PSEUDO:function(w,k){var F,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Pe.error("unsupported pseudo: "+w);return j[B]?j(k):j.length>1?(F=[w,w,"",k],u.setFilters.hasOwnProperty(w.toLowerCase())?Ut(function($,Z){for(var te,oe=j($,k),ne=oe.length;ne--;)te=_.call($,oe[ne]),$[te]=!(Z[te]=oe[ne])}):function($){return j($,0,F)}):j}},pseudos:{not:Ut(function(w){var k=[],F=[],j=ka(w.replace(Ke,"$1"));return j[B]?Ut(function($,Z,te,oe){for(var ne,we=j($,null,oe,[]),he=$.length;he--;)(ne=we[he])&&($[he]=!(Z[he]=ne))}):function($,Z,te){return k[0]=$,j(k,null,te,F),k[0]=null,!F.pop()}}),has:Ut(function(w){return function(k){return Pe(w,k).length>0}}),contains:Ut(function(w){return w=w.replace(At,mn),function(k){return(k.textContent||l.text(k)).indexOf(w)>-1}}),lang:Ut(function(w){return Fe.test(w||"")||Pe.error("unsupported lang: "+w),w=w.replace(At,mn).toLowerCase(),function(k){var F;do if(F=A?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return F=F.toLowerCase(),F===w||F.indexOf(w+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(w){var k=e.location&&e.location.hash;return k&&k.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===Ed()&&T.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:sc(!1),disabled:sc(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return st.test(w.nodeName)},input:function(w){return lt.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var k;return S(w,"input")&&w.type==="text"&&((k=w.getAttribute("type"))==null||k.toLowerCase()==="text")},first:Sr(function(){return[0]}),last:Sr(function(w,k){return[k-1]}),eq:Sr(function(w,k,F){return[F<0?F+k:F]}),even:Sr(function(w,k){for(var F=0;F<k;F+=2)w.push(F);return w}),odd:Sr(function(w,k){for(var F=1;F<k;F+=2)w.push(F);return w}),lt:Sr(function(w,k,F){var j;for(F<0?j=F+k:F>k?j=k:j=F;--j>=0;)w.push(j);return w}),gt:Sr(function(w,k,F){for(var j=F<0?F+k:F;++j<k;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=wd(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Id(s);function oc(){}oc.prototype=u.filters=u.pseudos,u.setFilters=new oc;function ns(w,k){var F,j,$,Z,te,oe,ne,we=Ee[w+" "];if(we)return k?0:we.slice(0);for(te=w,oe=[],ne=u.preFilter;te;){(!F||(j=K.exec(te)))&&(j&&(te=te.slice(j[0].length)||te),oe.push($=[])),F=!1,(j=fe.exec(te))&&(F=j.shift(),$.push({value:F,type:j[0].replace(Ke," ")}),te=te.slice(F.length));for(Z in u.filter)(j=He[Z].exec(te))&&(!ne[Z]||(j=ne[Z](j)))&&(F=j.shift(),$.push({value:F,type:Z,matches:j}),te=te.slice(F.length));if(!F)break}return k?te.length:te?Pe.error(w):Ee(w,oe).slice(0)}function so(w){for(var k=0,F=w.length,j="";k<F;k++)j+=w[k].value;return j}function oo(w,k,F){var j=k.dir,$=k.next,Z=$||j,te=F&&Z==="parentNode",oe=X++;return k.first?function(ne,we,he){for(;ne=ne[j];)if(ne.nodeType===1||te)return w(ne,we,he);return!1}:function(ne,we,he){var de,Ie,ue=[U,oe];if(he){for(;ne=ne[j];)if((ne.nodeType===1||te)&&w(ne,we,he))return!0}else for(;ne=ne[j];)if(ne.nodeType===1||te)if(Ie=ne[B]||(ne[B]={}),$&&S(ne,$))ne=ne[j]||ne;else{if((de=Ie[Z])&&de[0]===U&&de[1]===oe)return ue[2]=de[2];if(Ie[Z]=ue,ue[2]=w(ne,we,he))return!0}return!1}}function Ca(w){return w.length>1?function(k,F,j){for(var $=w.length;$--;)if(!w[$](k,F,j))return!1;return!0}:w[0]}function Ad(w,k,F){for(var j=0,$=k.length;j<$;j++)Pe(w,k[j],F);return F}function ao(w,k,F,j,$){for(var Z,te=[],oe=0,ne=w.length,we=k!=null;oe<ne;oe++)(Z=w[oe])&&(!F||F(Z,j,$))&&(te.push(Z),we&&k.push(oe));return te}function Ra(w,k,F,j,$,Z){return j&&!j[B]&&(j=Ra(j)),$&&!$[B]&&($=Ra($,Z)),Ut(function(te,oe,ne,we){var he,de,Ie,ue,Ne=[],_t=[],ht=oe.length,kt=te||Ad(k||"*",ne.nodeType?[ne]:ne,[]),Jt=w&&(te||!k)?ao(kt,Ne,w,ne,we):kt;if(F?(ue=$||(te?w:ht||j)?[]:oe,F(Jt,ue,ne,we)):ue=Jt,j)for(he=ao(ue,_t),j(he,[],ne,we),de=he.length;de--;)(Ie=he[de])&&(ue[_t[de]]=!(Jt[_t[de]]=Ie));if(te){if($||w){if($){for(he=[],de=ue.length;de--;)(Ie=ue[de])&&he.push(Jt[de]=Ie);$(null,ue=[],he,we)}for(de=ue.length;de--;)(Ie=ue[de])&&(he=$?_.call(te,Ie):Ne[de])>-1&&(te[he]=!(oe[he]=Ie))}}else ue=ao(ue===oe?ue.splice(ht,ue.length):ue),$?$(null,oe,ue,we):y.apply(oe,ue)})}function Pa(w){for(var k,F,j,$=w.length,Z=u.relative[w[0].type],te=Z||u.relative[" "],oe=Z?1:0,ne=oo(function(de){return de===k},te,!0),we=oo(function(de){return _.call(k,de)>-1},te,!0),he=[function(de,Ie,ue){var Ne=!Z&&(ue||Ie!=h)||((k=Ie).nodeType?ne(de,Ie,ue):we(de,Ie,ue));return k=null,Ne}];oe<$;oe++)if(F=u.relative[w[oe].type])he=[oo(Ca(he),F)];else{if(F=u.filter[w[oe].type].apply(null,w[oe].matches),F[B]){for(j=++oe;j<$&&!u.relative[w[j].type];j++);return Ra(oe>1&&Ca(he),oe>1&&so(w.slice(0,oe-1).concat({value:w[oe-2].type===" "?"*":""})).replace(Ke,"$1"),F,oe<j&&Pa(w.slice(oe,j)),j<$&&Pa(w=w.slice(j)),j<$&&so(w))}he.push(F)}return Ca(he)}function bd(w,k){var F=k.length>0,j=w.length>0,$=function(Z,te,oe,ne,we){var he,de,Ie,ue=0,Ne="0",_t=Z&&[],ht=[],kt=h,Jt=Z||j&&u.find.TAG("*",we),Yr=U+=kt==null?1:Math.random()||.1,yt=Jt.length;for(we&&(h=te==T||te||we);Ne!==yt&&(he=Jt[Ne])!=null;Ne++){if(j&&he){for(de=0,!te&&he.ownerDocument!=T&&($n(he),oe=!A);Ie=w[de++];)if(Ie(he,te||T,oe)){y.call(ne,he);break}we&&(U=Yr)}F&&((he=!Ie&&he)&&ue--,Z&&_t.push(he))}if(ue+=Ne,F&&Ne!==ue){for(de=0;Ie=k[de++];)Ie(_t,ht,te,oe);if(Z){if(ue>0)for(;Ne--;)_t[Ne]||ht[Ne]||(ht[Ne]=x.call(ne));ht=ao(ht)}y.apply(ne,ht),we&&!Z&&ht.length>0&&ue+k.length>1&&l.uniqueSort(ne)}return we&&(U=Yr,h=kt),_t};return F?Ut($):$}function ka(w,k){var F,j=[],$=[],Z=me[w+" "];if(!Z){for(k||(k=ns(w)),F=k.length;F--;)Z=Pa(k[F]),Z[B]?j.push(Z):$.push(Z);Z=me(w,bd($,j)),Z.selector=w}return Z}function ac(w,k,F,j){var $,Z,te,oe,ne,we=typeof w=="function"&&w,he=!j&&ns(w=we.selector||w);if(F=F||[],he.length===1){if(Z=he[0]=he[0].slice(0),Z.length>2&&(te=Z[0]).type==="ID"&&k.nodeType===9&&A&&u.relative[Z[1].type]){if(k=(u.find.ID(te.matches[0].replace(At,mn),k)||[])[0],k)we&&(k=k.parentNode);else return F;w=w.slice(Z.shift().value.length)}for($=He.needsContext.test(w)?0:Z.length;$--&&(te=Z[$],!u.relative[oe=te.type]);)if((ne=u.find[oe])&&(j=ne(te.matches[0].replace(At,mn),Bn.test(Z[0].type)&&Sa(k.parentNode)||k))){if(Z.splice($,1),w=j.length&&so(Z),!w)return y.apply(F,j),F;break}}return(we||ka(w,he))(j,k,!A,F,!k||Bn.test(w)&&Sa(k.parentNode)||k),F}W.sortStable=B.split("").sort(o).join("")===B,$n(),W.sortDetached=Xr(function(w){return w.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Pe,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Pe.compile=ka,Pe.select=ac,Pe.setDocument=$n,Pe.tokenize=ns,Pe.escape=l.escapeSelector,Pe.getText=l.text,Pe.isXML=l.isXMLDoc,Pe.selectors=l.expr,Pe.support=l.support,Pe.uniqueSort=l.uniqueSort})();var Vt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Fs=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Ii=l.expr.match.needsContext,Ai=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function jr(s,u,h){return Q(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(jr(this,s||[],!1))},not:function(s){return this.pushStack(jr(this,s||[],!0))},is:function(s){return!!jr(this,typeof s=="string"&&Ii.test(s)?l(s):s||[],!1).length}});var lr,bi=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Si=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||lr,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=bi.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),Ai.test(d[1])&&l.isPlainObject(u))for(d in u)Q(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=J.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(Q(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Si.prototype=l.fn,lr=l(J);var Ci=/^(?:parents|prev(?:Until|All))/,Ri={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],T=typeof s!="string"&&l(s);if(!Ii.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(T?T.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Pi(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Vt(s,"parentNode")},parentsUntil:function(s,u,h){return Vt(s,"parentNode",h)},next:function(s){return Pi(s,"nextSibling")},prev:function(s){return Pi(s,"previousSibling")},nextAll:function(s){return Vt(s,"nextSibling")},prevAll:function(s){return Vt(s,"previousSibling")},nextUntil:function(s,u,h){return Vt(s,"nextSibling",h)},prevUntil:function(s,u,h){return Vt(s,"previousSibling",h)},siblings:function(s){return Fs((s.parentNode||{}).firstChild,s)},children:function(s){return Fs(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(Ri[s]||l.uniqueSort(m),Ci.test(s)&&m.reverse()),this.pushStack(m)}});var St=/[^\x20\t\r\n\f]+/g;function _a(s){var u={};return l.each(s.match(St)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?_a(s):l.extend({},s);var u,h,d,m,y=[],T=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;T.length;R=-1)for(h=T.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},N={add:function(){return y&&(h&&!u&&(R=y.length-1,T.push(h)),(function q(B){l.each(B,function(U,X){Q(X)?(!s.unique||!N.has(X))&&y.push(X):X&&X.length&&De(X)!=="string"&&q(X)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,B){for(var U;(U=l.inArray(B,y,U))>-1;)y.splice(U,1),U<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=T=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=T=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],T.push(B),u||A()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function ln(s){return s}function Rn(s){throw s}function ki(s,u,h,d){var m;try{s&&Q(m=s.promise)?m.call(s).done(u).fail(h):s&&Q(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(T){l.each(u,function(R,A){var N=Q(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=N&&N.apply(this,arguments);q&&Q(q.promise)?q.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[A[0]+"With"](this,N?[q]:arguments)})}),y=null}).promise()},then:function(y,T,R){var A=0;function N(q,B,U,X){return function(){var se=this,Ee=arguments,me=function(){var o,f;if(!(q<A)){if(o=U.apply(se,Ee),o===B.promise())throw new TypeError("Thenable self-resolution");f=o&&(typeof o=="object"||typeof o=="function")&&o.then,Q(f)?X?f.call(o,N(A,B,ln,X),N(A,B,Rn,X)):(A++,f.call(o,N(A,B,ln,X),N(A,B,Rn,X),N(A,B,ln,B.notifyWith))):(U!==ln&&(se=void 0,Ee=[o]),(X||B.resolveWith)(se,Ee))}},Me=X?me:function(){try{me()}catch(o){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(o,Me.error),q+1>=A&&(U!==Rn&&(se=void 0,Ee=[o]),B.rejectWith(se,Ee))}};q?Me():(l.Deferred.getErrorHook?Me.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Me.error=l.Deferred.getStackHook()),e.setTimeout(Me))}}return l.Deferred(function(q){u[0][3].add(N(0,q,Q(R)?R:ln,q.notifyWith)),u[1][3].add(N(0,q,Q(y)?y:ln)),u[2][3].add(N(0,q,Q(T)?T:Rn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,T){var R=T[2],A=T[5];d[T[1]]=R.add,A&&R.add(function(){h=A},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(T[3].fire),m[T[0]]=function(){return m[T[0]+"With"](this===m?void 0:this,arguments),this},m[T[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),T=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||y.resolveWith(d,m)}};if(u<=1&&(ki(s,y.done(T(h)).resolve,y.reject,!u),y.state()==="pending"||Q(m[h]&&m[h].then)))return y.then();for(;h--;)ki(m[h],T(h),y.reject);return y.promise()}});var va=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&va.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var hr=l.Deferred();l.fn.ready=function(s){return hr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&hr.resolveWith(J,[l]))}}),l.ready.then=hr.then;function Pn(){J.removeEventListener("DOMContentLoaded",Pn),e.removeEventListener("load",Pn),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",Pn),e.addEventListener("load",Pn));var Ct=function(s,u,h,d,m,y,T){var R=0,A=s.length,N=h==null;if(De(h)==="object"){m=!0;for(R in h)Ct(s,u,R,h[R],!0,y,T)}else if(d!==void 0&&(m=!0,Q(d)||(T=!0),N&&(T?(u.call(s,d),u=null):(N=u,u=function(q,B,U){return N.call(l(q),U)})),u))for(;R<A;R++)u(s[R],h,T?d:d.call(s[R],R,u(s[R],h)));return m?s:N?u.call(s):A?u(s[0],h):y},et=/^-ms-/,rt=/-([a-z])/g;function qr(s,u){return u.toUpperCase()}function Rt(s){return s.replace(et,"ms-").replace(rt,qr)}var kn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function fr(){this.expando=l.expando+fr.uid++}fr.uid=1,fr.prototype={cache:function(s){var u=s[this.expando];return u||(u={},kn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Rt(u)]=h;else for(d in u)m[Rt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Rt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Rt):(u=Rt(u),u=u in d?[u]:u.match(St)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new fr,it=new fr,Us=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Di=/[A-Z]/g;function Ta(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Us.test(s)?JSON.parse(s):s}function js(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Di,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=Ta(h)}catch{}it.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return it.hasData(s)||ie.hasData(s)},data:function(s,u,h){return it.access(s,u,h)},removeData:function(s,u){it.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],T=y&&y.attributes;if(s===void 0){if(this.length&&(m=it.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=T.length;h--;)T[h]&&(d=T[h].name,d.indexOf("data-")===0&&(d=Rt(d.slice(5)),js(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){it.set(this,s)}):Ct(this,function(R){var A;if(y&&R===void 0)return A=it.get(y,s),A!==void 0||(A=js(y,s),A!==void 0)?A:void 0;this.each(function(){it.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){it.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),T=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,T,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,T=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";T--;)h=ie.get(y[T],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var Ni=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Dn=new RegExp("^(?:([+-])=|)("+Ni+")([a-z%]*)$","i"),mt=["Top","Right","Bottom","Left"],Ot=J.documentElement,Ht=function(s){return l.contains(s.ownerDocument,s)},hn={composed:!0};Ot.getRootNode&&(Ht=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(hn)===s.ownerDocument});var dr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Ht(s)&&l.css(s,"display")==="none"};function pr(s,u,h,d){var m,y,T=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),N=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||N!=="px"&&+A)&&Dn.exec(l.css(s,u));if(q&&q[3]!==N){for(A=A/2,N=N||q[3],q=+A||1;T--;)l.style(s,u,q+N),(1-y)*(1-(y=R()/A||.5))<=0&&(T=0),q=q/y;q=q*2,l.style(s,u,q+N),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var xi={};function gr(s){var u,h=s.ownerDocument,d=s.nodeName,m=xi[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),xi[d]=m,m)}function fn(s,u){for(var h,d,m=[],y=0,T=s.length;y<T;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&dr(d)&&(m[y]=gr(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<T;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return fn(this,!0)},hide:function(){return fn(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){dr(this)?l(this).show():l(this).hide()})}});var $e=/^(?:checkbox|radio)$/i,Vi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Nn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),W.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",W.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",W.option=!!u.lastChild})();var tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};tt.tbody=tt.tfoot=tt.colgroup=tt.caption=tt.thead,tt.th=tt.td,W.option||(tt.optgroup=tt.option=[1,"<select multiple='multiple'>","</select>"]);function ct(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Oi(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var xn=/<|&#?\w+;/;function qs(s,u,h,d,m){for(var y,T,R,A,N,q,B=u.createDocumentFragment(),U=[],X=0,se=s.length;X<se;X++)if(y=s[X],y||y===0)if(De(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!xn.test(y))U.push(u.createTextNode(y));else{for(T=T||B.appendChild(u.createElement("div")),R=(Vi.exec(y)||["",""])[1].toLowerCase(),A=tt[R]||tt._default,T.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)T=T.lastChild;l.merge(U,T.childNodes),T=B.firstChild,T.textContent=""}for(B.textContent="",X=0;y=U[X++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(N=Ht(y),T=ct(B.appendChild(y),"script"),N&&Oi(T),h)for(q=0;y=T[q++];)Nn.test(y.type||"")&&h.push(y)}return B}var Bs=/^([^.]*)(?:\.(.+)|)/;function Lt(){return!0}function dn(){return!1}function Br(s,u,h,d,m,y){var T,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)Br(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=dn;else if(!m)return s;return y===1&&(T=m,m=function(A){return l().off(A),T.apply(this,arguments)},m.guid=T.guid||(T.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,T,R,A,N,q,B,U,X,se,Ee,me=ie.get(s);if(kn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Ot,m),h.guid||(h.guid=l.guid++),(A=me.events)||(A=me.events=Object.create(null)),(T=me.handle)||(T=me.handle=function(Me){return typeof l<"u"&&l.event.triggered!==Me.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(St)||[""],N=u.length;N--;)R=Bs.exec(u[N])||[],X=Ee=R[1],se=(R[2]||"").split(".").sort(),X&&(B=l.event.special[X]||{},X=(m?B.delegateType:B.bindType)||X,B=l.event.special[X]||{},q=l.extend({type:X,origType:Ee,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:se.join(".")},y),(U=A[X])||(U=A[X]=[],U.delegateCount=0,(!B.setup||B.setup.call(s,d,se,T)===!1)&&s.addEventListener&&s.addEventListener(X,T)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,q):U.push(q),l.event.global[X]=!0)},remove:function(s,u,h,d,m){var y,T,R,A,N,q,B,U,X,se,Ee,me=ie.hasData(s)&&ie.get(s);if(!(!me||!(A=me.events))){for(u=(u||"").match(St)||[""],N=u.length;N--;){if(R=Bs.exec(u[N])||[],X=Ee=R[1],se=(R[2]||"").split(".").sort(),!X){for(X in A)l.event.remove(s,X+u[N],h,d,!0);continue}for(B=l.event.special[X]||{},X=(d?B.delegateType:B.bindType)||X,U=A[X]||[],R=R[2]&&new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=y=U.length;y--;)q=U[y],(m||Ee===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(U.splice(y,1),q.selector&&U.delegateCount--,B.remove&&B.remove.call(s,q));T&&!U.length&&((!B.teardown||B.teardown.call(s,se,me.handle)===!1)&&l.removeEvent(s,X,me.handle),delete A[X])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,T,R=new Array(arguments.length),A=l.event.fix(s),N=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(T=l.event.handlers.call(this,A,N),u=0;(m=T[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,y,T,R=[],A=u.delegateCount,N=s.target;if(A&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(y=[],T={},h=0;h<A;h++)d=u[h],m=d.selector+" ",T[m]===void 0&&(T[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),T[m]&&y.push(d);y.length&&R.push({elem:N,handlers:y})}}return N=this,A<u.length&&R.push({elem:N,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:Q(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return $e.test(u.type)&&u.click&&S(u,"input")&&Vn(u,"click",!0),!1},trigger:function(s){var u=this||s;return $e.test(u.type)&&u.click&&S(u,"input")&&Vn(u,"click"),!0},_default:function(s){var u=s.target;return $e.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Vn(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,Lt);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Lt)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Lt:dn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:dn,isPropagationStopped:dn,isImmediatePropagationStopped:dn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Lt,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Lt,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Lt,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(J.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Vn(this,s,!0),J.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return Vn(this,s),!0},teardown:function(){var d;if(J.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u);y||(J.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(J.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,T=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=T.origType,d=T.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return Br(this,s,u,h,d)},one:function(s,u,h,d){return Br(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=dn),this.each(function(){l.event.remove(this,s,h,u)})}});var mr=/<script|<style|<link/i,Ea=/checked\s*(?:[^=]|=\s*.checked.)/i,Wt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Li(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function $s(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Mi(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function $r(s,u){var h,d,m,y,T,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),A=y.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}it.hasData(s)&&(T=it.access(s),R=l.extend({},T),it.set(u,R))}}function Hs(s,u){var h=u.nodeName.toLowerCase();h==="input"&&$e.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function On(s,u,h,d){u=c(u);var m,y,T,R,A,N,q=0,B=s.length,U=B-1,X=u[0],se=Q(X);if(se||B>1&&typeof X=="string"&&!W.checkClone&&Ea.test(X))return s.each(function(Ee){var me=s.eq(Ee);se&&(u[0]=X.call(this,Ee,me.html())),On(me,u,h,d)});if(B&&(m=qs(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(T=l.map(ct(m,"script"),$s),R=T.length;q<B;q++)A=m,q!==U&&(A=l.clone(A,!0,!0),R&&l.merge(T,ct(A,"script"))),h.call(s[q],A,q);if(R)for(N=T[T.length-1].ownerDocument,l.map(T,Mi),q=0;q<R;q++)A=T[q],Nn.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(N,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},N):Te(A.textContent.replace(Wt,""),A,N))}return s}function Fi(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(ct(d)),d.parentNode&&(h&&Ht(d)&&Oi(ct(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,T,R=s.cloneNode(!0),A=Ht(s);if(!W.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(T=ct(R),y=ct(s),d=0,m=y.length;d<m;d++)Hs(y[d],T[d]);if(u)if(h)for(y=y||ct(s),T=T||ct(R),d=0,m=y.length;d<m;d++)$r(y[d],T[d]);else $r(s,R);return T=ct(R,"script"),T.length>0&&Oi(T,!A&&ct(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(kn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[it.expando]&&(h[it.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Fi(this,s,!0)},remove:function(s){return Fi(this,s)},text:function(s){return Ct(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return On(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Li(this,s);u.appendChild(s)}})},prepend:function(){return On(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Li(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return On(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return On(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(ct(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return Ct(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!mr.test(u)&&!tt[(Vi.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(ct(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return On(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(ct(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),T=y.length-1,R=0;R<=T;R++)d=R===T?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var Ui=new RegExp("^("+Ni+")(?!px)[a-z%]+$","i"),Ln=/^--/,yr=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Hr=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},_r=new RegExp(mt.join("|"),"i");(function(){function s(){if(N){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ot.appendChild(A).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",R=u(q.marginLeft)===12,N.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,N.style.position="absolute",m=u(N.offsetWidth/3)===12,Ot.removeChild(A),N=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,T,R,A=J.createElement("div"),N=J.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",W.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(W,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,U,X;return T==null&&(q=J.createElement("table"),B=J.createElement("tr"),U=J.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",U.style.height="9px",U.style.display="block",Ot.appendChild(q).appendChild(B).appendChild(U),X=e.getComputedStyle(B),T=parseInt(X.height,10)+parseInt(X.borderTopWidth,10)+parseInt(X.borderBottomWidth,10)===B.offsetHeight,Ot.removeChild(q)),T}}))})();function wt(s,u,h){var d,m,y,T,R=Ln.test(u),A=s.style;return h=h||yr(s),h&&(T=h.getPropertyValue(u)||h[u],R&&T&&(T=T.replace(Ke,"$1")||void 0),T===""&&!Ht(s)&&(T=l.style(s,u)),!W.pixelBoxStyles()&&Ui.test(T)&&_r.test(u)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=T,T=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),T!==void 0?T+"":T}function Wr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Ws=["Webkit","Moz","ms"],ji=J.createElement("div").style,qi={};function zs(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Ws.length;h--;)if(s=Ws[h]+u,s in ji)return s}function vr(s){var u=l.cssProps[s]||qi[s];return u||(s in ji?s:qi[s]=zs(s)||s)}var Bi=/^(none|table(?!-c[ea]).+)/,Gs={position:"absolute",visibility:"hidden",display:"block"},$i={letterSpacing:"0",fontWeight:"400"};function Hi(s,u,h){var d=Dn.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function Wi(s,u,h,d,m,y){var T=u==="width"?1:0,R=0,A=0,N=0;if(h===(d?"border":"content"))return 0;for(;T<4;T+=2)h==="margin"&&(N+=l.css(s,h+mt[T],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+mt[T],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+mt[T]+"Width",!0,m))):(A+=l.css(s,"padding"+mt[T],!0,m),h!=="padding"?A+=l.css(s,"border"+mt[T]+"Width",!0,m):R+=l.css(s,"border"+mt[T]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-A-R-.5))||0),A+N}function Mt(s,u,h){var d=yr(s),m=!W.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",T=y,R=wt(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(Ui.test(R)){if(!h)return R;R="auto"}return(!W.boxSizingReliable()&&y||!W.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",T=A in s,T&&(R=s[A])),R=parseFloat(R)||0,R+Wi(s,u,h||(y?"border":"content"),T,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=wt(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,T,R=Rt(u),A=Ln.test(u),N=s.style;if(A||(u=vr(R)),T=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=Dn.exec(h))&&m[1]&&(h=pr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!W.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(N[u]="inherit"),(!T||!("set"in T)||(h=T.set(s,h,d))!==void 0)&&(A?N.setProperty(u,h):N[u]=h)}else return T&&"get"in T&&(m=T.get(s,!1,d))!==void 0?m:N[u]}},css:function(s,u,h,d){var m,y,T,R=Rt(u),A=Ln.test(u);return A||(u=vr(R)),T=l.cssHooks[u]||l.cssHooks[R],T&&"get"in T&&(m=T.get(s,!0,h)),m===void 0&&(m=wt(s,u,d)),m==="normal"&&u in $i&&(m=$i[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return Bi.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Hr(h,Gs,function(){return Mt(h,u,m)}):Mt(h,u,m)},set:function(h,d,m){var y,T=yr(h),R=!W.scrollboxSize()&&T.position==="absolute",A=R||m,N=A&&l.css(h,"boxSizing",!1,T)==="border-box",q=m?Wi(h,u,m,N,T):0;return N&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(T[u])-Wi(h,u,"border",!1,T)-.5)),q&&(y=Dn.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),Hi(h,d,q)}}}),l.cssHooks.marginLeft=Wr(W.reliableMarginLeft,function(s,u){if(u)return(parseFloat(wt(s,"marginLeft"))||s.getBoundingClientRect().left-Hr(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+mt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=Hi)}),l.fn.extend({css:function(s,u){return Ct(this,function(h,d,m){var y,T,R={},A=0;if(Array.isArray(d)){for(y=yr(h),T=d.length;A<T;A++)R[d[A]]=l.css(h,d[A],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function Ve(s,u,h,d,m){return new Ve.prototype.init(s,u,h,d,m)}l.Tween=Ve,Ve.prototype={constructor:Ve,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=Ve.propHooks[this.prop];return s&&s.get?s.get(this):Ve.propHooks._default.get(this)},run:function(s){var u,h=Ve.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Ve.propHooks._default.set(this),this}},Ve.prototype.init.prototype=Ve.prototype,Ve.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[vr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ve.propHooks.scrollTop=Ve.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Ve.prototype.init,l.fx.step={};var Pt,zt,zi=/^(?:toggle|show|hide)$/,ke=/queueHooks$/;function Mn(){zt&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Mn):e.setTimeout(Mn,l.fx.interval),l.fx.tick())}function Fn(){return e.setTimeout(function(){Pt=void 0}),Pt=Date.now()}function Gt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=mt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Ks(s,u,h){for(var d,m=(It.tweeners[u]||[]).concat(It.tweeners["*"]),y=0,T=m.length;y<T;y++)if(d=m[y].call(h,u,s))return d}function Qs(s,u,h){var d,m,y,T,R,A,N,q,B="width"in u||"height"in u,U=this,X={},se=s.style,Ee=s.nodeType&&dr(s),me=ie.get(s,"fxshow");h.queue||(T=l._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,R=T.empty.fire,T.empty.fire=function(){T.unqueued||R()}),T.unqueued++,U.always(function(){U.always(function(){T.unqueued--,l.queue(s,"fx").length||T.empty.fire()})}));for(d in u)if(m=u[d],zi.test(m)){if(delete u[d],y=y||m==="toggle",m===(Ee?"hide":"show"))if(m==="show"&&me&&me[d]!==void 0)Ee=!0;else continue;X[d]=me&&me[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(X))){B&&s.nodeType===1&&(h.overflow=[se.overflow,se.overflowX,se.overflowY],N=me&&me.display,N==null&&(N=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(fn([s],!0),N=s.style.display||N,q=l.css(s,"display"),fn([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(A||(U.done(function(){se.display=N}),N==null&&(q=se.display,N=q==="none"?"":q)),se.display="inline-block")),h.overflow&&(se.overflow="hidden",U.always(function(){se.overflow=h.overflow[0],se.overflowX=h.overflow[1],se.overflowY=h.overflow[2]})),A=!1;for(d in X)A||(me?"hidden"in me&&(Ee=me.hidden):me=ie.access(s,"fxshow",{display:N}),y&&(me.hidden=!Ee),Ee&&fn([s],!0),U.done(function(){Ee||fn([s]),ie.remove(s,"fxshow");for(d in X)l.style(s,d,X[d])})),A=Ks(Ee?me[d]:0,d,U),d in me||(me[d]=A.start,Ee&&(A.end=A.start,A.start=0))}}function wa(s,u){var h,d,m,y,T;for(h in s)if(d=Rt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),T=l.cssHooks[d],T&&"expand"in T){y=T.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function It(s,u,h){var d,m,y=0,T=It.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var B=Pt||Fn(),U=Math.max(0,N.startTime+N.duration-B),X=U/N.duration||0,se=1-X,Ee=0,me=N.tweens.length;Ee<me;Ee++)N.tweens[Ee].run(se);return R.notifyWith(s,[N,se,U]),se<1&&me?U:(me||R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N]),!1)},N=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:Pt||Fn(),duration:h.duration,tweens:[],createTween:function(B,U){var X=l.Tween(s,N.opts,B,U,N.opts.specialEasing[B]||N.opts.easing);return N.tweens.push(X),X},stop:function(B){var U=0,X=B?N.tweens.length:0;if(m)return this;for(m=!0;U<X;U++)N.tweens[U].run(1);return B?(R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N,B])):R.rejectWith(s,[N,B]),this}}),q=N.props;for(wa(q,N.opts.specialEasing);y<T;y++)if(d=It.prefilters[y].call(N,s,q,N.opts),d)return Q(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Ks,N),Q(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(It,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return pr(h.elem,s,Dn.exec(u),h),h}]},tweener:function(s,u){Q(s)?(u=s,s=["*"]):s=s.match(St);for(var h,d=0,m=s.length;d<m;d++)h=s[d],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(u)},prefilters:[Qs],prefilter:function(s,u){u?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||Q(s)&&s,duration:s,easing:h&&u||u&&!Q(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){Q(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(dr).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),T=function(){var R=It(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return T.finish=T,m||y.queue===!1?this.each(T):this.queue(y.queue,T)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",T=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&ke.test(y)&&d(R[y]);for(y=T.length;y--;)T[y].elem===this&&(s==null||T[y].queue===s)&&(T[y].anim.stop(h),m=!1,T.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,T=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<T;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(Gt(u,!0),d,m,y)}}),l.each({slideDown:Gt("show"),slideUp:Gt("hide"),slideToggle:Gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(Pt=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),Pt=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){zt||(zt=!0,Mn())},l.fx.stop=function(){zt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",W.checkOn=s.value!=="",W.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",W.radioValue=s.value==="t"})();var Xs,Tr=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return Ct(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Xs:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!W.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(St);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),Xs={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=Tr[u]||l.find.attr;Tr[u]=function(d,m,y){var T,R,A=m.toLowerCase();return y||(R=Tr[A],Tr[A]=T,T=h(d,m,y)!=null?A:null,Tr[A]=R),T}});var Er=/^(?:input|select|textarea|button)$/i,pn=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return Ct(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):Er.test(s.nodeName)||pn.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),W.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Kt(s){var u=s.match(St)||[];return u.join(" ")}function Qt(s){return s.getAttribute&&s.getAttribute("class")||""}function zr(s){return Array.isArray(s)?s:typeof s=="string"?s.match(St)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,T;return Q(s)?this.each(function(R){l(this).addClass(s.call(this,R,Qt(this)))}):(u=zr(s),u.length?this.each(function(){if(d=Qt(this),h=this.nodeType===1&&" "+Kt(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");T=Kt(h),d!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var u,h,d,m,y,T;return Q(s)?this.each(function(R){l(this).removeClass(s.call(this,R,Qt(this)))}):arguments.length?(u=zr(s),u.length?this.each(function(){if(d=Qt(this),h=this.nodeType===1&&" "+Kt(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");T=Kt(h),d!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,T=typeof s,R=T==="string"||Array.isArray(s);return Q(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,Qt(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=zr(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||T==="boolean")&&(d=Qt(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Kt(Qt(h))+" ").indexOf(u)>-1)return!0;return!1}});var Ys=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=Q(s),this.each(function(y){var T;this.nodeType===1&&(d?T=s.call(this,y,l(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,T,"value")===void 0)&&(this.value=T))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(Ys,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??Kt(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,T=s.type==="select-one",R=T?null:[],A=T?y+1:m.length;for(y<0?d=A:d=T?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),T)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),T=m.length;T--;)d=m[T],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},W.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Un=e.location,gn={guid:Date.now()},Gi=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Js=/^(?:focusinfocus|focusoutblur)$/,Zs=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,T,R,A,N,q,B,U=[h||J],X=P.call(s,"type")?s.type:s,se=P.call(s,"namespace")?s.namespace.split("."):[];if(y=B=T=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!Js.test(X+l.event.triggered)&&(X.indexOf(".")>-1&&(se=X.split("."),X=se.shift(),se.sort()),A=X.indexOf(":")<0&&"on"+X,s=s[l.expando]?s:new l.Event(X,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=se.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[X]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||X,Js.test(R+X)||(y=y.parentNode);y;y=y.parentNode)U.push(y),T=y;T===(h.ownerDocument||J)&&U.push(T.defaultView||T.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||X,N=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),N&&N.apply(y,u),N=A&&y[A],N&&N.apply&&kn(y)&&(s.result=N.apply(y,u),s.result===!1&&s.preventDefault());return s.type=X,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(U.pop(),u)===!1)&&kn(h)&&A&&Q(h[X])&&!Y(h)&&(T=h[A],T&&(h[A]=null),l.event.triggered=X,s.isPropagationStopped()&&B.addEventListener(X,Zs),h[X](),s.isPropagationStopped()&&B.removeEventListener(X,Zs),l.event.triggered=void 0,T&&(h[A]=T)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Xt=/\[\]$/,eo=/\r?\n/g,Ki=/^(?:submit|button|image|reset|file)$/i,Gr=/^(?:input|select|textarea|keygen)/i;function Kr(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,T){h||Xt.test(s)?d(s,T):Kr(s+"["+(typeof T=="object"&&T!=null?y:"")+"]",T,h,d)});else if(!h&&De(u)==="object")for(m in u)Kr(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,T){var R=Q(T)?T():T;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Kr(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Gr.test(this.nodeName)&&!Ki.test(s)&&(this.checked||!$e.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(eo,`\r
`)}}):{name:u.name,value:h.replace(eo,`\r
`)}}).get()}});var wr=/%20/g,Ir=/#.*$/,to=/([?&])_=[^&]*/,Qi=/^(.*?):[ \t]*([^\r\n]*)$/mg,Le=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ia=/^(?:GET|HEAD)$/,Aa=/^\/\//,Xi={},Qr={},Yi="*/".concat("*"),jn=J.createElement("a");jn.href=Un.href;function Ft(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(St)||[];if(Q(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Ji(s,u,h,d){var m={},y=s===Qr;function T(R){var A;return m[R]=!0,l.each(s[R]||[],function(N,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),T(B),!1;if(y)return!(A=B)}),A}return T(u.dataTypes[0])||!m["*"]&&T("*")}function Zi(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function Ar(s,u,h){for(var d,m,y,T,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}T||(T=m)}y=y||T}if(y)return y!==A[0]&&A.unshift(y),h[y]}function no(s,u,h,d){var m,y,T,R,A,N={},q=s.dataTypes.slice();if(q[1])for(T in s.converters)N[T.toLowerCase()]=s.converters[T];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(T=N[A+" "+y]||N["* "+y],!T){for(m in N)if(R=m.split(" "),R[1]===y&&(T=N[A+" "+R[0]]||N["* "+R[0]],T)){T===!0?T=N[m]:N[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(T!==!0)if(T&&s.throws)u=T(u);else try{u=T(u)}catch(B){return{state:"parsererror",error:T?B:"No conversion from "+A+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Un.href,type:"GET",isLocal:Le.test(Un.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Zi(Zi(s,l.ajaxSettings),u):Zi(l.ajaxSettings,s)},ajaxPrefilter:Ft(Xi),ajaxTransport:Ft(Qr),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,T,R,A,N,q,B,U=l.ajaxSetup({},u),X=U.context||U,se=U.context&&(X.nodeType||X.jquery)?l(X):l.event,Ee=l.Deferred(),me=l.Callbacks("once memory"),Me=U.statusCode||{},o={},f={},g="canceled",E={readyState:0,getResponseHeader:function(O){var K;if(A){if(!y)for(y={};K=Qi.exec(m);)y[K[1].toLowerCase()+" "]=(y[K[1].toLowerCase()+" "]||[]).concat(K[2]);K=y[O.toLowerCase()+" "]}return K==null?null:K.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(O,K){return A==null&&(O=f[O.toLowerCase()]=f[O.toLowerCase()]||O,o[O]=K),this},overrideMimeType:function(O){return A==null&&(U.mimeType=O),this},statusCode:function(O){var K;if(O)if(A)E.always(O[E.status]);else for(K in O)Me[K]=[Me[K],O[K]];return this},abort:function(O){var K=O||g;return h&&h.abort(K),L(0,K),this}};if(Ee.promise(E),U.url=((s||U.url||Un.href)+"").replace(Aa,Un.protocol+"//"),U.type=u.method||u.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(St)||[""],U.crossDomain==null){R=J.createElement("a");try{R.href=U.url,R.href=R.href,U.crossDomain=jn.protocol+"//"+jn.host!=R.protocol+"//"+R.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),Ji(Xi,U,u,E),A)return E;N=l.event&&U.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!Ia.test(U.type),d=U.url.replace(Ir,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(wr,"+")):(B=U.url.slice(d.length),U.data&&(U.processData||typeof U.data=="string")&&(d+=(Gi.test(d)?"&":"?")+U.data,delete U.data),U.cache===!1&&(d=d.replace(to,"$1"),B=(Gi.test(d)?"&":"?")+"_="+gn.guid+++B),U.url=d+B),U.ifModified&&(l.lastModified[d]&&E.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&E.setRequestHeader("If-None-Match",l.etag[d])),(U.data&&U.hasContent&&U.contentType!==!1||u.contentType)&&E.setRequestHeader("Content-Type",U.contentType),E.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+Yi+"; q=0.01":""):U.accepts["*"]);for(q in U.headers)E.setRequestHeader(q,U.headers[q]);if(U.beforeSend&&(U.beforeSend.call(X,E,U)===!1||A))return E.abort();if(g="abort",me.add(U.complete),E.done(U.success),E.fail(U.error),h=Ji(Qr,U,u,E),!h)L(-1,"No Transport");else{if(E.readyState=1,N&&se.trigger("ajaxSend",[E,U]),A)return E;U.async&&U.timeout>0&&(T=e.setTimeout(function(){E.abort("timeout")},U.timeout));try{A=!1,h.send(o,L)}catch(O){if(A)throw O;L(-1,O)}}function L(O,K,fe,Ue){var _e,Fe,He,lt,st,We=K;A||(A=!0,T&&e.clearTimeout(T),h=void 0,m=Ue||"",E.readyState=O>0?4:0,_e=O>=200&&O<300||O===304,fe&&(lt=Ar(U,E,fe)),!_e&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),lt=no(U,lt,E,_e),_e?(U.ifModified&&(st=E.getResponseHeader("Last-Modified"),st&&(l.lastModified[d]=st),st=E.getResponseHeader("etag"),st&&(l.etag[d]=st)),O===204||U.type==="HEAD"?We="nocontent":O===304?We="notmodified":(We=lt.state,Fe=lt.data,He=lt.error,_e=!He)):(He=We,(O||!We)&&(We="error",O<0&&(O=0))),E.status=O,E.statusText=(K||We)+"",_e?Ee.resolveWith(X,[Fe,We,E]):Ee.rejectWith(X,[E,We,He]),E.statusCode(Me),Me=void 0,N&&se.trigger(_e?"ajaxSuccess":"ajaxError",[E,U,_e?Fe:He]),me.fireWith(X,[E,We]),N&&(se.trigger("ajaxComplete",[E,U]),--l.active||l.event.trigger("ajaxStop")))}return E},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return Q(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(Q(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return Q(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=Q(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var es={0:200,1223:204},Yt=l.ajaxSettings.xhr();W.cors=!!Yt&&"withCredentials"in Yt,W.ajax=Yt=!!Yt,l.ajaxTransport(function(s){var u,h;if(W.cors||Yt&&!s.crossDomain)return{send:function(d,m){var y,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)T[y]=s.xhrFields[y];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)T.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,R==="abort"?T.abort():R==="error"?typeof T.status!="number"?m(0,"error"):m(T.status,T.statusText):m(es[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=u(),h=T.onerror=T.ontimeout=u("error"),T.onabort!==void 0?T.onabort=h:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{T.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var ts=[],qn=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ts.pop()||l.expando+"_"+gn.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,T=s.jsonp!==!1&&(qn.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&qn.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=Q(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(qn,"$1"+d):s.jsonp!==!1&&(s.url+=(Gi.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,ts.push(d)),y&&Q(m)&&m(y[0]),y=m=void 0}),"script"}),W.createHTMLDocument=(function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||(W.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=J.location.href,u.head.appendChild(d)):u=J),m=Ai.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=qs([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,T=this,R=s.indexOf(" ");return R>-1&&(d=Kt(s.slice(R)),s=s.slice(0,R)),Q(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),T.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){y=arguments,T.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,N){T.each(function(){h.apply(this,y||[A.responseText,N,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,T,R,A,N,q=l.css(s,"position"),B=l(s),U={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),A=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,N?(d=B.position(),T=d.top,m=d.left):(T=parseFloat(y)||0,m=parseFloat(A)||0),Q(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(U.top=u.top-R.top+T),u.left!=null&&(U.left=u.left-R.left+m),"using"in u?u.using.call(s,U):B.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Ot})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return Ct(this,function(m,y,T){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),T===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:T,h?T:R.pageYOffset):m[y]=T},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=Wr(W.pixelPosition,function(h,d){if(d)return d=wt(h,u),Ui.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var T=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return Ct(this,function(A,N,q){var B;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(B=A.documentElement,Math.max(A.body["scroll"+s],B["scroll"+s],A.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(A,N,R):l.style(A,N,q,R)},u,T?m:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var ba=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!Q(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=Q,l.isWindow=Y,l.camelCase=Rt,l.type=De,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(ba,"$1")};var ro=e.jQuery,br=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=br),s&&e.jQuery===l&&(e.jQuery=ro),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(go)),go.exports}var Pd=Rd();const ye=Sd(Pd),kd=()=>{};var cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Dd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,v=_?n[i+2]:0,I=a>>2,P=(a&3)<<4|p>>4;let V=(p&15)<<2|v>>6,G=v&63;_||(G=64,c||(V=64)),r.push(t[I],t[P],t[V],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||P==null)throw new Nd;const V=a<<2|p>>4;if(r.push(V),v!==64){const G=p<<4&240|v>>2;if(r.push(G),P!==64){const W=v<<6&192|P;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xd=function(n){const e=Fl(n);return Ul.encodeByteArray(e,!0)},So=function(n){return xd(n).replace(/\./g,"")},jl=function(n){try{return Ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=()=>Vd().__FIREBASE_DEFAULTS__,Ld=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Md=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jl(n[1]);return e&&JSON.parse(e)},Go=()=>{try{return kd()||Od()||Ld()||Md()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>Go()?.emulatorHosts?.[n],Fd=n=>{const e=ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bl=()=>Go()?.config,$l=n=>Go()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[So(JSON.stringify(t)),So(JSON.stringify(c)),""].join(".")}const cs={};function qd(){const n={prod:[],emulator:[]};for(const e of Object.keys(cs))cs[e]?n.emulator.push(e):n.prod.push(e);return n}function Bd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lc=!1;function Wl(n,e){if(typeof window>"u"||typeof document>"u"||!mi(window.location.host)||cs[n]===e||cs[n]||lc)return;cs[n]=e;function t(V){return`__firebase__banner__${V}`}const r="__firebase__banner",a=qd().prod.length>0;function c(){const V=document.getElementById(r);V&&V.remove()}function p(V){V.style.display="flex",V.style.background="#7faaf0",V.style.position="fixed",V.style.bottom="5px",V.style.left="5px",V.style.padding=".5em",V.style.borderRadius="5px",V.style.alignItems="center"}function _(V,G){V.setAttribute("width","24"),V.setAttribute("id",G),V.setAttribute("height","24"),V.setAttribute("viewBox","0 0 24 24"),V.setAttribute("fill","none"),V.style.marginLeft="-6px"}function v(){const V=document.createElement("span");return V.style.cursor="pointer",V.style.marginLeft="16px",V.style.fontSize="24px",V.innerHTML=" &times;",V.onclick=()=>{lc=!0,c()},V}function I(V,G){V.setAttribute("id",G),V.innerText="Learn more",V.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",V.setAttribute("target","__blank"),V.style.paddingLeft="5px",V.style.textDecoration="underline"}function P(){const V=Bd(r),G=t("text"),W=document.getElementById(G)||document.createElement("span"),Q=t("learnmore"),Y=document.getElementById(Q)||document.createElement("a"),J=t("preprendIcon"),ve=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(V.created){const Te=V.element;p(Te),I(Y,Q);const De=v();_(ve,J),Te.append(ve,W,Y,De),document.body.appendChild(Te)}a?(W.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ve.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Hd(){const n=Go()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kd(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qd(){return!Hd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jd,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?Zd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new bn(i,p,r)}}function Zd(n,e){return n.replace(ep,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ep=/\{\$([^}]+)}/g;function tp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(hc(a)&&hc(c)){if(!kr(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function hc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function is(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function np(n,e){const t=new rp(n,e);return t.subscribe.bind(t)}class rp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ip(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ip(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ud;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ap(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:op(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function op(n){return n===Cr?void 0:n}function ap(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const cp={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},lp=Ae.INFO,hp={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},fp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=hp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=lp,this._logHandler=fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const dp=(n,e)=>e.some(t=>n instanceof t);let fc,dc;function pp(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gp(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,Ha=new WeakMap,Gl=new WeakMap,Na=new WeakMap,mu=new WeakMap;function mp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Xn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&zl.set(t,n)}).catch(()=>{}),mu.set(e,n),e}function yp(n){if(Ha.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ha.set(n,e)}let Wa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ha.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _p(n){Wa=n(Wa)}function vp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xa(this),e,...t);return Gl.set(r,e.sort?e.sort():[e]),Xn(r)}:gp().includes(n)?function(...e){return n.apply(xa(this),e),Xn(zl.get(this))}:function(...e){return Xn(n.apply(xa(this),e))}}function Tp(n){return typeof n=="function"?vp(n):(n instanceof IDBTransaction&&yp(n),dp(n,pp())?new Proxy(n,Wa):n)}function Xn(n){if(n instanceof IDBRequest)return mp(n);if(Na.has(n))return Na.get(n);const e=Tp(n);return e!==n&&(Na.set(n,e),mu.set(e,n)),e}const xa=n=>mu.get(n);function Ep(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Xn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Xn(c.result),_.oldVersion,_.newVersion,Xn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const wp=["get","getKey","getAll","getAllKeys","count"],Ip=["put","add","delete","clear"],Va=new Map;function pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ip.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wp.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let v=_.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&_.done]))[0]};return Va.set(e,a),a}_p(n=>({...n,get:(e,t,r)=>pc(e,t)||n.get(e,t,r),has:(e,t)=>!!pc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bp(n){return n.getComponent()?.type==="VERSION"}const za="@firebase/app",gc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new gu("@firebase/app"),Sp="@firebase/app-compat",Cp="@firebase/analytics-compat",Rp="@firebase/analytics",Pp="@firebase/app-check-compat",kp="@firebase/app-check",Dp="@firebase/auth",Np="@firebase/auth-compat",xp="@firebase/database",Vp="@firebase/data-connect",Op="@firebase/database-compat",Lp="@firebase/functions",Mp="@firebase/functions-compat",Fp="@firebase/installations",Up="@firebase/installations-compat",jp="@firebase/messaging",qp="@firebase/messaging-compat",Bp="@firebase/performance",$p="@firebase/performance-compat",Hp="@firebase/remote-config",Wp="@firebase/remote-config-compat",zp="@firebase/storage",Gp="@firebase/storage-compat",Kp="@firebase/firestore",Qp="@firebase/ai",Xp="@firebase/firestore-compat",Yp="firebase",Jp="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="[DEFAULT]",Zp={[za]:"fire-core",[Sp]:"fire-core-compat",[Rp]:"fire-analytics",[Cp]:"fire-analytics-compat",[kp]:"fire-app-check",[Pp]:"fire-app-check-compat",[Dp]:"fire-auth",[Np]:"fire-auth-compat",[xp]:"fire-rtdb",[Vp]:"fire-data-connect",[Op]:"fire-rtdb-compat",[Lp]:"fire-fn",[Mp]:"fire-fn-compat",[Fp]:"fire-iid",[Up]:"fire-iid-compat",[jp]:"fire-fcm",[qp]:"fire-fcm-compat",[Bp]:"fire-perf",[$p]:"fire-perf-compat",[Hp]:"fire-rc",[Wp]:"fire-rc-compat",[zp]:"fire-gcs",[Gp]:"fire-gcs-compat",[Kp]:"fire-fst",[Xp]:"fire-fst-compat",[Qp]:"fire-vertex","fire-js":"fire-js",[Yp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,eg=new Map,Ka=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ui(n){const e=n.name;if(Ka.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,n);for(const t of Co.values())mc(t,n);for(const t of eg.values())mc(t,n);return!0}function yu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new As("app","Firebase",tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=Jp;function Kl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ga,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(t||(t=Bl()),!t)throw Yn.create("no-options");const a=Co.get(i);if(a){if(kr(t,a.options)&&kr(r,a.config))return a;throw Yn.create("duplicate-app",{appName:i})}const c=new up(i);for(const _ of Ka.values())c.addComponent(_);const p=new ng(t,r,c);return Co.set(i,p),p}function Ql(n=Ga){const e=Co.get(n);if(!e&&n===Ga&&Bl())return Kl();if(!e)throw Yn.create("no-app",{appName:n});return e}function Jn(n,e,t){let r=Zp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}ui(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="firebase-heartbeat-database",ig=1,gs="firebase-heartbeat-store";let Oa=null;function Xl(){return Oa||(Oa=Ep(rg,ig,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yn.create("idb-open",{originalErrorMessage:n.message})})),Oa}async function sg(n){try{const t=(await Xl()).transaction(gs),r=await t.objectStore(gs).get(Yl(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e?.message});En.warn(t.message)}}}async function yc(n,e){try{const r=(await Xl()).transaction(gs,"readwrite");await r.objectStore(gs).put(e,Yl(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Yn.create("idb-set",{originalErrorMessage:t?.message});En.warn(r.message)}}}function Yl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=1024,ag=30;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_c();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>ag){const i=hg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){En.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_c(),{heartbeatsToSend:t,unsentEntries:r}=cg(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return En.warn(e),""}}}function _c(){return new Date().toISOString().substring(0,10)}function cg(n,e=og){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),vc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vc(n){return So(JSON.stringify({version:2,heartbeats:n})).length}function hg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){ui(new Dr("platform-logger",e=>new Ap(e),"PRIVATE")),ui(new Dr("heartbeat",e=>new ug(e),"PRIVATE")),Jn(za,gc,n),Jn(za,gc,"esm2020"),Jn("fire-js","")}fg("");var dg="firebase",pg="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(dg,pg,"app");function Jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gg=Jl,Zl=new As("auth","Firebase",Jl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new gu("@firebase/auth");function mg(n,...e){Ro.logLevel<=Ae.WARN&&Ro.warn(`Auth (${yi}): ${n}`,...e)}function mo(n,...e){Ro.logLevel<=Ae.ERROR&&Ro.error(`Auth (${yi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...e){throw _u(n,...e)}function en(n,...e){return _u(n,...e)}function eh(n,e,t){const r={...gg(),[e]:t};return new As("auth","Firebase",r).create(e,{appName:n.name})}function vn(n){return eh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _u(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zl.create(n,...e)}function ce(n,e,...t){if(!n)throw _u(e,...t)}function yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mo(e),new Error(e)}function wn(n,e){n||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){return typeof self<"u"&&self.location?.href||""}function yg(){return Tc()==="http:"||Tc()==="https:"}function Tc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yg()||zd()||"connection"in navigator)?navigator.onLine:!0}function vg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Gd()}get(){return _g()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wg=new Ss(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function un(n,e,t,r,i={}){return nh(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=bs({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:_,...a};return Wd()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&mi(n.emulatorConfig.host)&&(v.credentials="include"),th.fetch()(await rh(n,n.config.apiHost,t,p),v)})}async function nh(n,e,t){n._canInitEmulator=!1;const r={...Tg,...e};try{const i=new Ag(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw uo(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw uo(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw uo(n,"user-disabled",c);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw eh(n,I,v);qt(n,I)}}catch(i){if(i instanceof bn)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function Cs(n,e,t,r,i={}){const a=await un(n,e,t,r,i);return"mfaPendingCredential"in a&&qt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function rh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?vu(n.config,i):`${n.config.apiScheme}://${i}`;return Eg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function Ig(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ag{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),wg.get())})}}function uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=en(n,e,r);return i.customData._tokenResponse=t,i}function Ec(n){return n!==void 0&&n.enterprise!==void 0}class bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ig(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sg(n,e){return un(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e){return un(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return un(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rg(n,e=!1){const t=Be(n),r=await t.getIdToken(e),i=Tu(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:ls(La(i.auth_time)),issuedAtTime:ls(La(i.iat)),expirationTime:ls(La(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function La(n){return Number(n)*1e3}function Tu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=jl(t);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function wc(n){const e=Tu(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&Pg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Pg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){const e=n.auth,t=await n.getIdToken(),r=await ci(n,Po(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?ih(i.providerUserInfo):[],c=Ng(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,v=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,I)}async function Dg(n){const e=Be(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ng(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ih(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(n,e){const t=await nh(n,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await rh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&mi(n.emulatorConfig.host)&&(_.credentials="include"),th.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vg(n,e){return un(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await xg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new ri;return r&&(ce(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(ce(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ci(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rg(this,e)}reload(){return Dg(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await ci(this,Cg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:P,emailVerified:V,isAnonymous:G,providerData:W,stsTokenManager:Q}=t;ce(P&&Q,e,"internal-error");const Y=ri.fromJSON(this.name,Q);ce(typeof P=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof G=="boolean",e,"internal-error"),Hn(a,e.name),Hn(c,e.name),Hn(p,e.name),Hn(_,e.name),Hn(v,e.name),Hn(I,e.name);const J=new jt({uid:P,auth:e,email:i,emailVerified:V,displayName:r,isAnonymous:G,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:v,lastLoginAt:I});return W&&Array.isArray(W)&&(J.providerData=W.map(ve=>({...ve}))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new ri;i.updateFromServerResponse(t);const a=new jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ko(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ih(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new ri;p.updateFromIdToken(r);const _=new jt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;function _n(n){wn(n instanceof Function,"Expected a class definition");let e=Ic.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ic.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sh.type="NONE";const Ac=sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n,e,t){return`firebase:${n}:${e}:${t}`}class ii{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,a),this.fullPersistenceKey=yo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?jt._fromGetAccountInfoResponse(this.auth,t,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ii(_n(Ac),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||_n(Ac);const c=yo(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const I=await v._get(c);if(I){let P;if(typeof I=="string"){const V=await Po(e,{idToken:I}).catch(()=>{});if(!V)break;P=await jt._fromGetAccountInfoResponse(e,V,I)}else P=jt._fromJSON(e,I);v!==a&&(p=P),a=v;break}}catch{}const _=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new ii(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(c)}catch{}})),new ii(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hh(e))return"Blackberry";if(fh(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||uh(e))&&!e.includes("edge/"))return"Chrome";if(lh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function oh(n=gt()){return/firefox\//i.test(n)}function ah(n=gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uh(n=gt()){return/crios\//i.test(n)}function ch(n=gt()){return/iemobile/i.test(n)}function lh(n=gt()){return/android/i.test(n)}function hh(n=gt()){return/blackberry/i.test(n)}function fh(n=gt()){return/webos/i.test(n)}function Eu(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Og(n=gt()){return Eu(n)&&!!window.navigator?.standalone}function Lg(){return Kd()&&document.documentMode===10}function dh(n=gt()){return Eu(n)||lh(n)||fh(n)||hh(n)||/windows phone/i.test(n)||ch(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e=[]){let t;switch(n){case"Browser":t=bc(gt());break;case"Worker":t=`${bc(gt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(n,e={}){return un(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=6;class jg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ug,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new Mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(vn(this));const t=e?Be(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fg(this),t=new jg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&mg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ar(n){return Be(n)}class Sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=np(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bg(n){Ko=n}function gh(n){return Ko.loadJS(n)}function $g(){return Ko.recaptchaEnterpriseScript}function Hg(){return Ko.gapiScript}function Wg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class zg{constructor(){this.enterprise=new Gg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Gg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Kg="recaptcha-enterprise",mh="NO_RECAPTCHA";class Qg{constructor(e){this.type=Kg,this.auth=ar(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,p)=>{Sg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new bg(_);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,c(v.siteKey)}}).catch(_=>{p(_)})})}function i(a,c,p){const _=window.grecaptcha;Ec(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(v=>{c(v)}).catch(()=>{c(mh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zg().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(p=>{if(!t&&Ec(window.grecaptcha))i(p,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=$g();_.length!==0&&(_+=p),gh(_).then(()=>{i(p,a,c)}).catch(v=>{c(v)})}}).catch(p=>{c(p)})})}}async function Cc(n,e,t,r=!1,i=!1){const a=new Qg(n);let c;if(i)c=mh;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Do(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Cc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Cc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e){const t=yu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(kr(a,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function Yg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_n);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Jg(n,e,t){const r=ar(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=yh(e),{host:c,port:p}=Zg(e),_=p===null?"":`:${p}`,v={url:`${a}//${c}${_}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(kr(v,r.config.emulator)&&kr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,mi(c)?(Hl(`${a}//${c}${_}`),Wl("Auth",!0)):em()}function yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zg(n){const e=yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Rc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Rc(c)}}}function Rc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function em(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function tm(n,e){return un(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(n,e){return Cs(n,"POST","/v1/accounts:signInWithPassword",Sn(n,e))}async function _h(n,e){return un(n,"POST","/v1/accounts:sendOobCode",Sn(n,e))}async function rm(n,e){return _h(n,e)}async function im(n,e){return _h(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}async function om(n,e){return Cs(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends wu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",nm);case"emailLink":return sm(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",tm);case"emailLink":return om(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n,e){return Cs(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="http://localhost";class Nr extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Nr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return si(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,si(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,si(e,t)}buildRequest(){const e={requestUri:am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cm(n){const e=rs(is(n)).link,t=e?rs(is(e)).deep_link_id:null,r=rs(is(n)).deep_link_id;return(r?rs(is(r)).link:null)||r||t||e||n}class Iu{constructor(e){const t=rs(is(e)),r=t.apiKey??null,i=t.oobCode??null,a=um(t.mode??null);ce(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=cm(e);try{return new Iu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.providerId=_i.PROVIDER_ID}static credential(e,t){return ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Iu.parseLink(t);return ce(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}_i.PROVIDER_ID="password";_i.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_i.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends vh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Rs{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Rs{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Rs{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kn.credential(t,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(n,e){return Cs(n,"POST","/v1/accounts:signUp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await jt._fromIdTokenResponse(e,r,i),c=Pc(r);return new xr({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Pc(r);return new xr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Pc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends bn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new No(e,t,r,i)}}function Th(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(n,a,e,r):a})}async function hm(n,e,t=!1){const r=await ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(n,e,t=!1){const{auth:r}=n;if(Dt(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const a=await ci(n,Th(r,i,e,n),t);ce(a.idToken,r,"internal-error");const c=Tu(a.idToken);ce(c,r,"internal-error");const{sub:p}=c;return ce(n.uid===p,r,"user-mismatch"),xr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(n,e,t=!1){if(Dt(n.app))return Promise.reject(vn(n));const r="signIn",i=await Th(n,r,e),a=await xr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function dm(n,e){return Eh(ar(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(n){const e=ar(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $T(n,e,t){const r=ar(n);await Do(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",im)}async function HT(n,e,t){if(Dt(n.app))return Promise.reject(vn(n));const r=ar(n),c=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lm).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&wh(n),_}),p=await xr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(p.user),p}function WT(n,e,t){return Dt(n.app)?Promise.reject(vn(n)):dm(Be(n),_i.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wh(n),r})}async function zT(n,e){const t=Be(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await rm(t.auth,i);a!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(n,e){return un(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Be(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await ci(r,pm(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function gm(n,e,t,r){return Be(n).onIdTokenChanged(e,t,r)}function mm(n,e,t){return Be(n).beforeAuthStateChanged(e,t)}function KT(n,e,t,r){return Be(n).onAuthStateChanged(e,t,r)}function QT(n){return Be(n).signOut()}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=1e3,_m=10;class Ah extends Ih{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Lg()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_m):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ah.type="LOCAL";const vm=Ah;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends Ih{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bh.type="SESSION";const Sh=bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async v=>v(t.origin,a)),_=await Tm(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const v=Au("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(P){const V=P;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(V.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function wm(n){tn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function Im(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){return navigator?.serviceWorker?.controller||null}function bm(){return Ch()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebaseLocalStorageDb",Sm=1,Vo="firebaseLocalStorage",Ph="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xo(n,e){return n.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function Cm(){const n=indexedDB.deleteDatabase(Rh);return new Ps(n).toPromise()}function Ya(){const n=indexedDB.open(Rh,Sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vo,{keyPath:Ph})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await Cm(),e(await Ya()))})})}async function kc(n,e,t){const r=Xo(n,!0).put({[Ph]:e,value:t});return new Ps(r).toPromise()}async function Rm(n,e){const t=Xo(n,!1).get(e),r=await new Ps(t).toPromise();return r===void 0?null:r.value}function Dc(n,e){const t=Xo(n,!0).delete(e);return new Ps(t).toPromise()}const Pm=800,km=3;class kh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ch()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(bm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Im(),!this.activeServiceWorker)return;this.sender=new Em(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await kc(e,xo,"1"),await Dc(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Rm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Xo(i,!1).getAll();return new Ps(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kh.type="LOCAL";const Dm=kh;new Ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n,e){return e?_n(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,t){return si(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xm(n){return Eh(n.auth,new bu(n),n.bypassAuthState)}function Vm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),fm(t,new bu(n),n.bypassAuthState)}async function Om(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),hm(t,new bu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Vm;default:qt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=new Ss(2e3,1e4);class ni extends Dh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lm.get())};e()}}ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="pendingRedirect",_o=new Map;class Fm extends Dh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await Um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Um(n,e){const t=Bm(e),r=qm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function jm(n,e){_o.set(n._key(),e)}function qm(n){return _n(n._redirectPersistence)}function Bm(n){return yo(Mm,n.config.apiKey,n.name)}async function $m(n,e,t=!1){if(Dt(n.app))return Promise.reject(vn(n));const r=ar(n),i=Nm(r,e),c=await new Fm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=600*1e3;class Wm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Nh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(en(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nc(e))}saveEventToCache(e){this.cachedEventUids.add(Nc(e)),this.lastProcessedEventTime=Date.now()}}function Nc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Nh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function zm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e={}){return un(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qm=/^https?/;async function Xm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gm(n);for(const t of e)try{if(Ym(t))return}catch{}qt(n,"unauthorized-domain")}function Ym(n){const e=Qa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Qm.test(t))return!1;if(Km.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Ss(3e4,6e4);function xc(){const n=tn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zm(n){return new Promise((e,t)=>{function r(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(en(n,"network-request-failed"))},timeout:Jm.get()})}if(tn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(tn().gapi?.load)r();else{const i=Wg("iframefcb");return tn()[i]=()=>{gapi.load?r():t(en(n,"network-request-failed"))},gh(`${Hg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw vo=null,e})}let vo=null;function ey(n){return vo=vo||Zm(n),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Ss(5e3,15e3),ny="__/auth/iframe",ry="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oy(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vu(e,ry):`https://${n.config.authDomain}/${ny}`,r={apiKey:e.apiKey,appName:n.name,v:yi},i=sy.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${bs(r).slice(1)}`}async function ay(n){const e=await ey(n),t=tn().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:oy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=en(n,"network-request-failed"),p=tn().setTimeout(()=>{a(c)},ty.get());function _(){tn().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cy=500,ly=600,hy="_blank",fy="http://localhost";class Vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dy(n,e,t,r=cy,i=ly){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...uy,width:r.toString(),height:i.toString(),top:a,left:c},v=gt().toLowerCase();t&&(p=uh(v)?hy:t),oh(v)&&(e=e||fy,_.scrollbars="yes");const I=Object.entries(_).reduce((V,[G,W])=>`${V}${G}=${W},`,"");if(Og(v)&&p!=="_self")return py(e||"",p),new Vc(null);const P=window.open(e||"",p,I);ce(P,n,"popup-blocked");try{P.focus()}catch{}return new Vc(P)}function py(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="__/auth/handler",my="emulator/auth/handler",yy=encodeURIComponent("fac");async function Oc(n,e,t,r,i,a){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yi,eventId:i};if(e instanceof vh){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",tp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,P]of Object.entries({}))c[I]=P}if(e instanceof Rs){const I=e.getScopes().filter(P=>P!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),v=_?`#${yy}=${encodeURIComponent(_)}`:"";return`${_y(n)}?${bs(p).slice(1)}${v}`}function _y({config:n}){return n.emulator?vu(n,my):`https://${n.authDomain}/${gy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="webStorageSupport";class vy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sh,this._completeRedirectFn=$m,this._overrideRedirectResult=jm}async _openPopup(e,t,r,i){wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Oc(e,t,r,Qa(),i);return dy(e,a,Au())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Oc(e,t,r,Qa(),i);return wm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(wn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ay(e),r=new Wm(e);return t.register("authEvent",i=>(ce(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ma,{type:Ma},i=>{const a=i?.[0]?.[Ma];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||ah()||Eu()}}const Ty=vy;var Lc="@firebase/auth",Mc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Iy(n){ui(new Dr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;ce(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ph(n)},v=new qg(r,i,a,_);return Yg(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Dr("auth-internal",e=>{const t=ar(e.getProvider("auth").getImmediate());return(r=>new Ey(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Lc,Mc,wy(n)),Jn(Lc,Mc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=300,by=$l("authIdTokenMaxAge")||Ay;let Fc=null;const Sy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>by)return;const i=t?.token;Fc!==i&&(Fc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cy(n=Ql()){const e=yu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xg(n,{popupRedirectResolver:Ty,persistence:[Dm,vm,Sh]}),r=$l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Sy(a.toString());mm(t,c,()=>c(t.currentUser)),gm(t,p=>c(p))}}const i=ql("auth");return i&&Jg(t,`http://${i}`),t}function Ry(){return document.getElementsByTagName("head")?.[0]??document}Bg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=en("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Ry().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Iy("Browser");var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,xh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.F=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.D=function(x,D,M){for(var b=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)b[Ke-2]=arguments[Ke];return C.prototype[D].apply(x,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);const x=Array(16);if(typeof C=="string")for(var D=0;D<16;++D)x[D]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(D=0;D<16;++D)x[D]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],D=l.g[2];let M=l.g[3],b;b=C+(M^S&(D^M))+x[0]+3614090360&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[1]+3905402710&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[2]+606105819&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[3]+3250441966&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[5]+1200080426&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[6]+2821735955&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[7]+4249261313&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[9]+2336552879&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[10]+4294925233&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[11]+2304563134&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[13]+4254626195&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[14]+2792965006&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[15]+1236535329&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(D^M&(S^D))+x[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[6]+3225465664&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[11]+643717713&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[0]+3921069994&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[10]+38016083&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[15]+3634488961&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[4]+3889429448&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[14]+3275163606&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[3]+4107603335&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[8]+1163531501&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[2]+4243563512&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[7]+1735328473&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[12]+2368359562&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(S^D^M)+x[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[8]+2272392833&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[11]+1839030562&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[14]+4259657740&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[4]+1272893353&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[7]+4139469664&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[10]+3200236656&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[0]+3936430074&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[3]+3572445317&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[6]+76029189&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[12]+3873151461&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[15]+530742520&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[2]+3299628645&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(D^(S|~M))+x[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[7]+1126891415&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[14]+2878612391&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[5]+4237533241&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[3]+2399980690&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[10]+4293915773&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[1]+2240044497&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[15]+4264355552&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[6]+2734768916&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[13]+1309151649&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[11]+3174756917&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[2]+718787259&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+D&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.v=function(l,C){C===void 0&&(C=l.length);const S=C-this.blockSize,x=this.C;let D=this.h,M=0;for(;M<C;){if(D==0)for(;M<=S;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<C;)if(x[D++]=l.charCodeAt(M++),D==this.blockSize){i(this,x),D=0;break}}else for(;M<C;)if(x[D++]=l[M++],D==this.blockSize){i(this,x),D=0;break}}this.h=D,this.o+=C},r.prototype.A=function(){var l=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;C=this.o*8;for(var S=l.length-8;S<l.length;++S)l[S]=C&255,C/=256;for(this.v(l),l=Array(16),C=0,S=0;S<4;++S)for(let x=0;x<32;x+=8)l[C++]=this.g[S]>>>x&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;const S=[];let x=!0;for(let D=l.length-1;D>=0;D--){const M=l[D]|0;x&&M==C||(S[D]=M,x=!1)}this.g=S}var p={};function _(l){return-128<=l&&l<128?a(l,function(C){return new c([C|0],C<0?-1:0)}):new c([l|0],l<0?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return P;if(l<0)return Y(v(-l));const C=[];let S=1;for(let x=0;l>=S;x++)C[x]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(l.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=v(Math.pow(C,8));let x=P;for(let M=0;M<l.length;M+=8){var D=Math.min(8,l.length-M);const b=parseInt(l.substring(M,M+D),C);D<8?(D=v(Math.pow(C,D)),x=x.j(D).add(v(b))):(x=x.j(S),x=x.add(v(b)))}return x}var P=_(0),V=_(1),G=_(16777216);n=c.prototype,n.m=function(){if(Q(this))return-Y(this).m();let l=0,C=1;for(let S=0;S<this.g.length;S++){const x=this.i(S);l+=(x>=0?x:4294967296+x)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(W(this))return"0";if(Q(this))return"-"+Y(this).toString(l);const C=v(Math.pow(l,6));var S=this;let x="";for(;;){const D=De(S,C).g;S=J(S,D.j(C));let M=((S.g.length>0?S.g[0]:S.h)>>>0).toString(l);if(S=D,W(S))return M+x;for(;M.length<6;)M="0"+M;x=M+x}},n.i=function(l){return l<0?0:l<this.g.length?this.g[l]:this.h};function W(l){if(l.h!=0)return!1;for(let C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function Q(l){return l.h==-1}n.l=function(l){return l=J(this,l),Q(l)?-1:W(l)?0:1};function Y(l){const C=l.g.length,S=[];for(let x=0;x<C;x++)S[x]=~l.g[x];return new c(S,~l.h).add(V)}n.abs=function(){return Q(this)?Y(this):this},n.add=function(l){const C=Math.max(this.g.length,l.g.length),S=[];let x=0;for(let D=0;D<=C;D++){let M=x+(this.i(D)&65535)+(l.i(D)&65535),b=(M>>>16)+(this.i(D)>>>16)+(l.i(D)>>>16);x=b>>>16,M&=65535,b&=65535,S[D]=b<<16|M}return new c(S,S[S.length-1]&-2147483648?-1:0)};function J(l,C){return l.add(Y(C))}n.j=function(l){if(W(this)||W(l))return P;if(Q(this))return Q(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(Q(l))return Y(this.j(Y(l)));if(this.l(G)<0&&l.l(G)<0)return v(this.m()*l.m());const C=this.g.length+l.g.length,S=[];for(var x=0;x<2*C;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(let D=0;D<l.g.length;D++){const M=this.i(x)>>>16,b=this.i(x)&65535,Ke=l.i(D)>>>16,cn=l.i(D)&65535;S[2*x+2*D]+=b*cn,ve(S,2*x+2*D),S[2*x+2*D+1]+=M*cn,ve(S,2*x+2*D+1),S[2*x+2*D+1]+=b*Ke,ve(S,2*x+2*D+1),S[2*x+2*D+2]+=M*Ke,ve(S,2*x+2*D+2)}for(l=0;l<C;l++)S[l]=S[2*l+1]<<16|S[2*l];for(l=C;l<2*C;l++)S[l]=0;return new c(S,0)};function ve(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function Te(l,C){this.g=l,this.h=C}function De(l,C){if(W(C))throw Error("division by zero");if(W(l))return new Te(P,P);if(Q(l))return C=De(Y(l),C),new Te(Y(C.g),Y(C.h));if(Q(C))return C=De(l,Y(C)),new Te(Y(C.g),C.h);if(l.g.length>30){if(Q(l)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var S=V,x=C;x.l(l)<=0;)S=Ze(S),x=Ze(x);var D=qe(S,1),M=qe(x,1);for(x=qe(x,2),S=qe(S,2);!W(x);){var b=M.add(x);b.l(l)<=0&&(D=D.add(S),M=b),x=qe(x,1),S=qe(S,1)}return C=J(l,D.j(C)),new Te(D,C)}for(D=P;l.l(C)>=0;){for(S=Math.max(1,Math.floor(l.m()/C.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),M=v(S),b=M.j(C);Q(b)||b.l(l)>0;)S-=x,M=v(S),b=M.j(C);W(M)&&(M=V),D=D.add(M),l=J(l,b)}return new Te(D,l)}n.B=function(l){return De(this,l).h},n.and=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)&l.i(x);return new c(S,this.h&l.h)},n.or=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)|l.i(x);return new c(S,this.h|l.h)},n.xor=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)^l.i(x);return new c(S,this.h^l.h)};function Ze(l){const C=l.g.length+1,S=[];for(let x=0;x<C;x++)S[x]=l.i(x)<<1|l.i(x-1)>>>31;return new c(S,l.h)}function qe(l,C){const S=C>>5;C%=32;const x=l.g.length-S,D=[];for(let M=0;M<x;M++)D[M]=C>0?l.i(M+S)>>>C|l.i(M+S+1)<<32-C:l.i(M+S);return new c(D,l.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,xh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=I,Zn=c}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vh,ss,Oh,To,Ja,Lh,Mh,Fh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var E=0;E<o.length-1;E++){var L=o[E];if(!(L in g))break e;g=g[L]}o=o[o.length-1],E=g[o],f=f(E),f!=E&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(f){var g=[],E;for(E in f)Object.prototype.hasOwnProperty.call(f,E)&&g.push([E,f[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function p(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function _(o,f,g){return o.call.apply(o.bind,arguments)}function v(o,f,g){return v=_,v.apply(null,arguments)}function I(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),o.apply(this,E)}}function P(o,f){function g(){}g.prototype=f.prototype,o.Z=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Ob=function(E,L,O){for(var K=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)K[fe-2]=arguments[fe];return f.prototype[L].apply(E,K)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function G(o){const f=o.length;if(f>0){const g=Array(f);for(let E=0;E<f;E++)g[E]=o[E];return g}return[]}function W(o,f){for(let E=1;E<arguments.length;E++){const L=arguments[E];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=o.length||0;const O=L.length||0;o.length=g+O;for(let K=0;K<O;K++)o[g+K]=L[K]}else o.push(L)}}class Q{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Y(o){c.setTimeout(()=>{throw o},0)}function J(){var o=l;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class ve{constructor(){this.h=this.g=null}add(f,g){const E=Te.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Te=new Q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,qe=!1,l=new ve,C=()=>{const o=Promise.resolve(void 0);Ze=()=>{o.then(S)}};function S(){for(var o;o=J();){try{o.h.call(o.g)}catch(g){Y(g)}var f=Te;f.j(o),f.h<100&&(f.h++,o.next=f.g,f.g=o)}qe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function Ke(o,f){D.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,f)}P(Ke,D),Ke.prototype.init=function(o,f){const g=this.type=o.type,E=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget,f||(g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement)),this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),ya=0;function xt(o,f,g,E,L){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++ya,this.da=this.fa=!1}function Cn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Vt(o,f,g){for(const E in o)f.call(g,o[E],E,o)}function Fs(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function Ii(o){const f={};for(const g in o)f[g]=o[g];return f}const Ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jr(o,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)o[g]=E[g];for(let O=0;O<Ai.length;O++)g=Ai[O],Object.prototype.hasOwnProperty.call(E,g)&&(o[g]=E[g])}}function lr(o){this.src=o,this.g={},this.h=0}lr.prototype.add=function(o,f,g,E,L){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const K=Si(o,f,E,L);return K>-1?(f=o[K],g||(f.fa=!1)):(f=new xt(f,this.src,O,!!E,L),f.fa=g,o.push(f)),f};function bi(o,f){const g=f.type;if(g in o.g){var E=o.g[g],L=Array.prototype.indexOf.call(E,f,void 0),O;(O=L>=0)&&Array.prototype.splice.call(E,L,1),O&&(Cn(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Si(o,f,g,E){for(let L=0;L<o.length;++L){const O=o[L];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==E)return L}return-1}var Ci="closure_lm_"+(Math.random()*1e6|0),Ri={};function Pi(o,f,g,E,L){if(Array.isArray(f)){for(let O=0;O<f.length;O++)Pi(o,f[O],g,E,L);return null}return g=Ct(g),o&&o[cn]?o.J(f,g,p(E)?!!E.capture:!1,L):St(o,f,g,!1,E,L)}function St(o,f,g,E,L,O){if(!f)throw Error("Invalid event type");const K=p(L)?!!L.capture:!!L;let fe=hr(o);if(fe||(o[Ci]=fe=new lr(o)),g=fe.add(f,g,E,K,O),g.proxy)return g;if(E=_a(),g.proxy=E,E.src=o,E.listener=g,o.addEventListener)M||(L=K),L===void 0&&(L=!1),o.addEventListener(f.toString(),E,L);else if(o.attachEvent)o.attachEvent(ki(f.toString()),E);else if(o.addListener&&o.removeListener)o.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function _a(){function o(g){return f.call(o.src,o.listener,g)}const f=va;return o}function ln(o,f,g,E,L){if(Array.isArray(f))for(var O=0;O<f.length;O++)ln(o,f[O],g,E,L);else E=p(E)?!!E.capture:!!E,g=Ct(g),o&&o[cn]?(o=o.i,O=String(f).toString(),O in o.g&&(f=o.g[O],g=Si(f,g,E,L),g>-1&&(Cn(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete o.g[O],o.h--)))):o&&(o=hr(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Si(f,g,E,L)),(g=o>-1?f[o]:null)&&Rn(g))}function Rn(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[cn])bi(f.i,o);else{var g=o.type,E=o.proxy;f.removeEventListener?f.removeEventListener(g,E,o.capture):f.detachEvent?f.detachEvent(ki(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=hr(f))?(bi(g,o),g.h==0&&(g.src=null,f[Ci]=null)):Cn(o)}}}function ki(o){return o in Ri?Ri[o]:Ri[o]="on"+o}function va(o,f){if(o.da)o=!0;else{f=new Ke(f,this);const g=o.listener,E=o.ha||o.src;o.fa&&Rn(o),o=g.call(E,f)}return o}function hr(o){return o=o[Ci],o instanceof lr?o:null}var Pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ct(o){return typeof o=="function"?o:(o[Pn]||(o[Pn]=function(f){return o.handleEvent(f)}),o[Pn])}function et(){x.call(this),this.i=new lr(this),this.M=this,this.G=null}P(et,x),et.prototype[cn]=!0,et.prototype.removeEventListener=function(o,f,g,E){ln(this,o,f,g,E)};function rt(o,f){var g,E=o.G;if(E)for(g=[];E;E=E.G)g.push(E);if(o=o.M,E=f.type||f,typeof f=="string")f=new D(f,o);else if(f instanceof D)f.target=f.target||o;else{var L=f;f=new D(E,o),jr(f,L)}L=!0;let O,K;if(g)for(K=g.length-1;K>=0;K--)O=f.g=g[K],L=qr(O,E,!0,f)&&L;if(O=f.g=o,L=qr(O,E,!0,f)&&L,L=qr(O,E,!1,f)&&L,g)for(K=0;K<g.length;K++)O=f.g=g[K],L=qr(O,E,!1,f)&&L}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(const f in o.g){const g=o.g[f];for(let E=0;E<g.length;E++)Cn(g[E]);delete o.g[f],o.h--}}this.G=null},et.prototype.J=function(o,f,g,E){return this.i.add(String(o),f,!1,g,E)},et.prototype.K=function(o,f,g,E){return this.i.add(String(o),f,!0,g,E)};function qr(o,f,g,E){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();let L=!0;for(let O=0;O<f.length;++O){const K=f[O];if(K&&!K.da&&K.capture==g){const fe=K.listener,Ue=K.ha||K.src;K.fa&&bi(o.i,K),L=fe.call(Ue,E)!==!1&&L}}return L&&!E.defaultPrevented}function Rt(o,f){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:c.setTimeout(o,f||0)}function kn(o){o.g=Rt(()=>{o.g=null,o.i&&(o.i=!1,kn(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class fr extends x{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(o){x.call(this),this.h=o,this.g={}}P(ie,x);var it=[];function Us(o){Vt(o.g,function(f,g){this.g.hasOwnProperty(g)&&Rn(f)},o),o.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Us(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=c.JSON.stringify,Ta=c.JSON.parse,js=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ni(){}function Dn(){}var mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ot(){D.call(this,"d")}P(Ot,D);function Ht(){D.call(this,"c")}P(Ht,D);var hn={},dr=null;function pr(){return dr=dr||new et}hn.Ia="serverreachability";function xi(o){D.call(this,hn.Ia,o)}P(xi,D);function gr(o){const f=pr();rt(f,new xi(f))}hn.STAT_EVENT="statevent";function fn(o,f){D.call(this,hn.STAT_EVENT,o),this.stat=f}P(fn,D);function $e(o){const f=pr();rt(f,new fn(f,o))}hn.Ja="timingevent";function Vi(o,f){D.call(this,hn.Ja,o),this.size=f}P(Vi,D);function Nn(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},f)}function tt(){this.g=!0}tt.prototype.ua=function(){this.g=!1};function ct(o,f,g,E,L,O){o.info(function(){if(o.g)if(O){var K="",fe=O.split("&");for(let _e=0;_e<fe.length;_e++){var Ue=fe[_e].split("=");if(Ue.length>1){const Fe=Ue[0];Ue=Ue[1];const He=Fe.split("_");K=He.length>=2&&He[1]=="type"?K+(Fe+"="+Ue+"&"):K+(Fe+"=redacted&")}}}else K=null;else K=O;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+K})}function Oi(o,f,g,E,L,O,K){o.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+O+" "+K})}function xn(o,f,g,E){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Bs(o,g)+(E?" "+E:"")})}function qs(o,f){o.info(function(){return"TIMEOUT: "+f})}tt.prototype.info=function(){};function Bs(o,f){if(!o.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var g=O[o];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let K=1;K<E.length;K++)E[K]=""}}}}return Di(O)}catch{return f}}var Lt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},dn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Br;function Vn(){}P(Vn,Ni),Vn.prototype.g=function(){return new XMLHttpRequest},Br=new Vn;function mr(o){return encodeURIComponent(String(o))}function Ea(o){var f=1;o=o.split(":");const g=[];for(;f>0&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function Wt(o,f,g,E){this.j=o,this.i=f,this.l=g,this.S=E||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var $s={},Mi={};function $r(o,f,g){o.M=1,o.A=Mn(Ve(f)),o.u=g,o.R=!0,Hs(o,null)}function Hs(o,f){o.F=Date.now(),Ln(o),o.B=Ve(o.A);var g=o.B,E=o.S;Array.isArray(E)||(E=[String(E)]),Ys(g.i,"t",E),o.C=0,g=o.j.L,o.h=new Li,o.g=B(o.j,g?f:null,!o.u),o.P>0&&(o.O=new fr(v(o.Y,o,o.g),o.P)),f=o.V,g=o.g,E=o.ba;var L="readystatechange";Array.isArray(L)||(L&&(it[0]=L.toString()),L=it);for(let O=0;O<L.length;O++){const K=Pi(g,L[O],E||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=o.J?Ii(o.J):{},o.u?(o.v||(o.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,f)):(o.v="GET",o.g.ea(o.B,o.v,null,f)),gr(),ct(o.i,o.v,o.B,o.l,o.S,o.u)}Wt.prototype.ba=function(o){o=o.target;const f=this.O;f&&Ft(o)==3?f.j():this.Y(o)},Wt.prototype.Y=function(o){try{if(o==this.g)e:{const fe=Ft(this.g),Ue=this.g.ya(),_e=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Ji(this.g)))){this.K||fe!=4||Ue==7||(Ue==8||_e<=0?gr(3):gr(2)),Hr(this);var f=this.g.ca();this.X=f;var g=On(this);if(this.o=f==200,Oi(this.i,this.v,this.B,this.l,this.S,fe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(E)){var O=E;break t}}O=null}if(o=O)xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Wr(this,o);else{this.o=!1,this.m=3,$e(12),wt(this),_r(this);break e}}if(this.R){o=!0;let Fe;for(;!this.K&&this.C<g.length;)if(Fe=Ui(this,g),Fe==Mi){fe==4&&(this.m=4,$e(14),o=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==$s){this.m=4,$e(15),xn(this.i,this.l,g,"[Invalid Chunk]"),o=!1;break}else xn(this.i,this.l,Fe,null),Wr(this,Fe);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||g.length!=0||this.h.h||(this.m=1,$e(16),o=!1),this.o=this.o&&o,!o)xn(this.i,this.l,g,"[Invalid Chunked Response]"),wt(this),_r(this);else if(g.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),d(K),K.P=!0,$e(11))}}else xn(this.i,this.l,g,null),Wr(this,g);fe==4&&wt(this),this.o&&!this.K&&(fe==4?T(this.j,this):(this.o=!1,Ln(this)))}else Zi(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),wt(this),_r(this)}}}catch{}finally{}};function On(o){if(!Fi(o))return o.g.la();const f=Ji(o.g);if(f==="")return"";let g="";const E=f.length,L=Ft(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return wt(o),_r(o),"";o.h.i=new c.TextDecoder}for(let O=0;O<E;O++)o.h.h=!0,g+=o.h.i.decode(f[O],{stream:!(L&&O==E-1)});return f.length=0,o.h.g+=g,o.C=0,o.h.g}function Fi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ui(o,f){var g=o.C,E=f.indexOf(`
`,g);return E==-1?Mi:(g=Number(f.substring(g,E)),isNaN(g)?$s:(E+=1,E+g>f.length?Mi:(f=f.slice(E,E+g),o.C=E+g,f)))}Wt.prototype.cancel=function(){this.K=!0,wt(this)};function Ln(o){o.T=Date.now()+o.H,yr(o,o.H)}function yr(o,f){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Nn(v(o.aa,o),f)}function Hr(o){o.D&&(c.clearTimeout(o.D),o.D=null)}Wt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qs(this.i,this.B),this.M!=2&&(gr(),$e(17)),wt(this),this.m=2,_r(this)):yr(this,this.T-o)};function _r(o){o.j.I==0||o.K||T(o.j,o)}function wt(o){Hr(o);var f=o.O;f&&typeof f.dispose=="function"&&f.dispose(),o.O=null,Us(o.V),o.g&&(f=o.g,o.g=null,f.abort(),f.dispose())}function Wr(o,f){try{var g=o.j;if(g.I!=0&&(g.g==o||vr(g.h,o))){if(!o.L&&vr(g.h,o)&&g.I==3){try{var E=g.Ba.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<o.F)y(g),Yt(g);else break e;h(g),$e(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Nn(v(g.Va,g),6e3));zs(g.h)<=1&&g.ta&&(g.ta=void 0)}else A(g,11)}else if((o.L||g.g==o)&&y(g),!b(f))for(L=g.Ba.g.parse(f),f=0;f<L.length;f++){let _e=L[f];const Fe=_e[0];if(!(Fe<=g.K))if(g.K=Fe,_e=_e[1],g.I==2)if(_e[0]=="c"){g.M=_e[1],g.ba=_e[2];const He=_e[3];He!=null&&(g.ka=He,g.j.info("VER="+g.ka));const lt=_e[4];lt!=null&&(g.za=lt,g.j.info("SVER="+g.za));const st=_e[5];st!=null&&typeof st=="number"&&st>0&&(E=1.5*st,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const We=o.g;if(We){const Bn=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bn){var O=E.h;O.g||Bn.indexOf("spdy")==-1&&Bn.indexOf("quic")==-1&&Bn.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Bi(O,O.h),O.h=null))}if(E.G){const At=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;At&&(E.wa=At,ke(E.J,E.G,At))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-o.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var K=o;if(E.na=q(E,E.L?E.ba:null,E.W),K.L){Gs(E.h,K);var fe=K,Ue=E.O;Ue&&(fe.H=Ue),fe.D&&(Hr(fe),Ln(fe)),E.g=K}else u(E);g.i.length>0&&qn(g)}else _e[0]!="stop"&&_e[0]!="close"||A(g,7);else g.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?A(g,7):es(g):_e[0]!="noop"&&g.l&&g.l.qa(_e),g.A=0)}}gr(4)}catch{}}var Ws=class{constructor(o,f){this.g=o,this.map=f}};function ji(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function qi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zs(o){return o.h?1:o.g?o.g.size:0}function vr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Bi(o,f){o.g?o.g.add(f):o.h=f}function Gs(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}ji.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function $i(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.G);return f}return G(o.i)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wi(o,f){if(o){o=o.split("&");for(let g=0;g<o.length;g++){const E=o[g].indexOf("=");let L,O=null;E>=0?(L=o[g].substring(0,E),O=o[g].substring(E+1)):L=o[g],f(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;o instanceof Mt?(this.l=o.l,Pt(this,o.j),this.o=o.o,this.g=o.g,zt(this,o.u),this.h=o.h,zi(this,Un(o.i)),this.m=o.m):o&&(f=String(o).match(Hi))?(this.l=!1,Pt(this,f[1]||"",!0),this.o=Fn(f[2]||""),this.g=Fn(f[3]||"",!0),zt(this,f[4]),this.h=Fn(f[5]||"",!0),zi(this,f[6]||"",!0),this.m=Fn(f[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}Mt.prototype.toString=function(){const o=[];var f=this.j;f&&o.push(Gt(f,Qs,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(Gt(f,Qs,!0),"@"),o.push(mr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&o.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Gt(g,g.charAt(0)=="/"?It:wa,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Gt(g,Tr)),o.join("")},Mt.prototype.resolve=function(o){const f=Ve(this);let g=!!o.j;g?Pt(f,o.j):g=!!o.o,g?f.o=o.o:g=!!o.g,g?f.g=o.g:g=o.u!=null;var E=o.h;if(g)zt(f,o.u);else if(g=!!o.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=f.h.lastIndexOf("/");L!=-1&&(E=f.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const O=[];for(let K=0;K<L.length;){const fe=L[K++];fe=="."?E&&K==L.length&&O.push(""):fe==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),E&&K==L.length&&O.push("")):(O.push(fe),E=!0)}E=O.join("/")}else E=L}return g?f.h=E:g=o.i.toString()!=="",g?zi(f,Un(o.i)):g=!!o.m,g&&(f.m=o.m),f};function Ve(o){return new Mt(o)}function Pt(o,f,g){o.j=g?Fn(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function zt(o,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);o.u=f}else o.u=null}function zi(o,f,g){f instanceof Er?(o.i=f,Gi(o.i,o.l)):(g||(f=Gt(f,Xs)),o.i=new Er(f,o.l))}function ke(o,f,g){o.i.set(f,g)}function Mn(o){return ke(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Fn(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gt(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,Ks),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ks(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Qs=/[#\/\?@]/g,wa=/[#\?:]/g,It=/[#\?]/g,Xs=/[#\?@]/g,Tr=/#/g;function Er(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wi(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Er.prototype,n.add=function(o,f){pn(this),this.i=null,o=gn(this,o);let g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Kt(o,f){pn(o),f=gn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Qt(o,f){return pn(o),f=gn(o,f),o.g.has(f)}n.forEach=function(o,f){pn(this),this.g.forEach(function(g,E){g.forEach(function(L){o.call(f,L,E,this)},this)},this)};function zr(o,f){pn(o);let g=[];if(typeof f=="string")Qt(o,f)&&(g=g.concat(o.g.get(gn(o,f))));else for(o=Array.from(o.g.values()),f=0;f<o.length;f++)g=g.concat(o[f]);return g}n.set=function(o,f){return pn(this),this.i=null,o=gn(this,o),Qt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=zr(this,o),o.length>0?String(o[0]):f):f};function Ys(o,f,g){Kt(o,f),g.length>0&&(o.i=null,o.g.set(gn(o,f),G(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(let E=0;E<f.length;E++){var g=f[E];const L=mr(g);g=zr(this,g);for(let O=0;O<g.length;O++){let K=L;g[O]!==""&&(K+="="+mr(g[O])),o.push(K)}}return this.i=o.join("&")};function Un(o){const f=new Er;return f.i=o.i,o.g&&(f.g=new Map(o.g),f.h=o.h),f}function gn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Gi(o,f){f&&!o.j&&(pn(o),o.i=null,o.g.forEach(function(g,E){const L=E.toLowerCase();E!=L&&(Kt(this,E),Ys(this,L,g))},o)),o.j=f}function Js(o,f){const g=new tt;if(c.Image){const E=new Image;E.onload=I(Xt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=I(Xt,g,"TestLoadImage: error",!1,f,E),E.onabort=I(Xt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=I(Xt,g,"TestLoadImage: timeout",!1,f,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=o}else f(!1)}function Zs(o,f){const g=new tt,E=new AbortController,L=setTimeout(()=>{E.abort(),Xt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:E.signal}).then(O=>{clearTimeout(L),O.ok?Xt(g,"TestPingServer: ok",!0,f):Xt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Xt(g,"TestPingServer: error",!1,f)})}function Xt(o,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function eo(){this.g=new js}function Ki(o){this.i=o.Sb||null,this.h=o.ab||!1}P(Ki,Ni),Ki.prototype.g=function(){return new Gr(this.i,this.h)};function Gr(o,f){et.call(this),this.H=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}P(Gr,et),n=Gr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=f,this.readyState=1,Ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(f.body=o),(this.H||c).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kr(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kr(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?wr(this):Ir(this),this.readyState==3&&Kr(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Na=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ir(o)}n.setRequestHeader=function(o,f){this.A.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function Ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function to(o){let f="";return Vt(o,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Qi(o,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=to(g),typeof o=="string"?g!=null&&mr(g):ke(o,f,g))}function Le(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}P(Le,et);var Ia=/^https?$/i,Aa=["POST","PUT"];n=Le.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Br.g(),this.g.onreadystatechange=V(v(this.Ca,this));try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(O){Xi(this,O);return}if(o=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const O of E.keys())g.set(O,E.get(O));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),L=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(Aa,f,void 0)>=0)||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of g)this.g.setRequestHeader(O,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Xi(this,O)}};function Xi(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.o=5,Qr(o),jn(o)}function Qr(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),Le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Yi(this):this.Xa())},n.Xa=function(){Yi(this)};function Yi(o){if(o.h&&typeof a<"u"){if(o.v&&Ft(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const O=o.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=O===0){let K=String(o.D).match(Hi)[1]||null;!K&&c.self&&c.self.location&&(K=c.self.location.protocol.slice(0,-1)),E=!Ia.test(K?K.toLowerCase():"")}g=E}if(g)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var L=Ft(o)>2?o.g.statusText:""}catch{L=""}o.l=L+" ["+o.ca()+"]",Qr(o)}}finally{jn(o)}}}}function jn(o,f){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const g=o.g;o.g=null,f||rt(o,"ready");try{g.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),Ta(f)}};function Ji(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zi(o){const f={};o=(o.g&&Ft(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<o.length;E++){if(b(o[E]))continue;var g=Ea(o[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[L]||[];f[L]=O,O.push(g)}Fs(f,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function no(o){this.za=0,this.i=[],this.j=new tt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ji(o&&o.concurrentRequestLimit),this.Ba=new eo,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=no.prototype,n.ka=8,n.I=1,n.connect=function(o,f,g,E){$e(0),this.W=o,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=q(this,null,this.W),qn(this)};function es(o){if(ts(o),o.I==3){var f=o.V++,g=Ve(o.J);if(ke(g,"SID",o.M),ke(g,"RID",f),ke(g,"TYPE","terminate"),br(o,g),f=new Wt(o,o.j,f),f.M=2,f.A=Mn(Ve(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.A,g=!0),g||(f.g=B(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Ln(f)}N(o)}function Yt(o){o.g&&(d(o),o.g.cancel(),o.g=null)}function ts(o){Yt(o),o.v&&(c.clearTimeout(o.v),o.v=null),y(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function qn(o){if(!qi(o.h)&&!o.m){o.m=!0;var f=o.Ea;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.D=0}}function ba(o,f){return zs(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=f.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Nn(v(o.Ea,o,f),R(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const L=new Wt(this,this.j,o);let O=this.o;if(this.U&&(O?(O=Ii(O),jr(O,this.U)):O=this.U),this.u!==null||this.R||(L.J=O,O=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=s(this,L,f),g=Ve(this.J),ke(g,"RID",o),ke(g,"CVER",22),this.G&&ke(g,"X-HTTP-Session-Id",this.G),br(this,g),O&&(this.R?f="headers="+mr(to(O))+"&"+f:this.u&&Qi(g,this.u,O)),Bi(this.h,L),this.Ra&&ke(g,"TYPE","init"),this.S?(ke(g,"$req",f),ke(g,"SID","null"),L.U=!0,$r(L,g,null)):$r(L,g,f),this.I=2}}else this.I==3&&(o?ro(this,o):this.i.length==0||qi(this.h)||ro(this))};function ro(o,f){var g;f?g=f.l:g=o.V++;const E=Ve(o.J);ke(E,"SID",o.M),ke(E,"RID",g),ke(E,"AID",o.K),br(o,E),o.u&&o.o&&Qi(E,o.u,o.o),g=new Wt(o,o.j,g,o.D+1),o.u===null&&(g.J=o.o),f&&(o.i=f.G.concat(o.i)),f=s(o,g,1e3),g.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Bi(o.h,g),$r(g,E,f)}function br(o,f){o.H&&Vt(o.H,function(g,E){ke(f,E,g)}),o.l&&Vt({},function(g,E){ke(f,E,g)})}function s(o,f,g){g=Math.min(o.i.length,g);const E=o.l?v(o.l.Ka,o.l,o):null;e:{var L=o.i;let fe=-1;for(;;){const Ue=["count="+g];fe==-1?g>0?(fe=L[0].g,Ue.push("ofs="+fe)):fe=0:Ue.push("ofs="+fe);let _e=!0;for(let Fe=0;Fe<g;Fe++){var O=L[Fe].g;const He=L[Fe].map;if(O-=fe,O<0)fe=Math.max(0,L[Fe].g-100),_e=!1;else try{O="req"+O+"_"||"";try{var K=He instanceof Map?He:Object.entries(He);for(const[lt,st]of K){let We=st;p(st)&&(We=Di(st)),Ue.push(O+lt+"="+encodeURIComponent(We))}}catch(lt){throw Ue.push(O+"type="+encodeURIComponent("_badmap")),lt}}catch{E&&E(He)}}if(_e){K=Ue.join("&");break e}}K=void 0}return o=o.i.splice(0,g),f.G=o,K}function u(o){if(!o.g&&!o.v){o.Y=1;var f=o.Da;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.A=0}}function h(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Nn(v(o.Da,o),R(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Nn(v(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),Yt(this),m(this))};function d(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function m(o){o.g=new Wt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var f=Ve(o.na);ke(f,"RID","rpc"),ke(f,"SID",o.M),ke(f,"AID",o.K),ke(f,"CI",o.F?"0":"1"),!o.F&&o.ia&&ke(f,"TO",o.ia),ke(f,"TYPE","xmlhttp"),br(o,f),o.u&&o.o&&Qi(f,o.u,o.o),o.O&&(o.g.H=o.O);var g=o.g;o=o.ba,g.M=1,g.A=Mn(Ve(f)),g.u=null,g.R=!0,Hs(g,o)}n.Va=function(){this.C!=null&&(this.C=null,Yt(this),h(this),$e(19))};function y(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function T(o,f){var g=null;if(o.g==f){y(o),d(o),o.g=null;var E=2}else if(vr(o.h,f))g=f.G,Gs(o.h,f),E=1;else return;if(o.I!=0){if(f.o)if(E==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var L=o.D;E=pr(),rt(E,new Vi(E,g)),qn(o)}else u(o);else if(L=f.m,L==3||L==0&&f.X>0||!(E==1&&ba(o,f)||E==2&&h(o)))switch(g&&g.length>0&&(f=o.h,f.i=f.i.concat(g)),L){case 1:A(o,5);break;case 4:A(o,10);break;case 3:A(o,6);break;default:A(o,2)}}}function R(o,f){let g=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(g*=2),g*f}function A(o,f){if(o.j.info("Error code "+f),f==2){var g=v(o.bb,o),E=o.Ua;const L=!E;E=new Mt(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Pt(E,"https"),Mn(E),L?Js(E.toString(),g):Zs(E.toString(),g)}else $e(2);o.I=0,o.l&&o.l.pa(f),N(o),ts(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function N(o){if(o.I=0,o.ja=[],o.l){const f=$i(o.h);(f.length!=0||o.i.length!=0)&&(W(o.ja,f),W(o.ja,o.i),o.h.i.length=0,G(o.i),o.i.length=0),o.l.oa()}}function q(o,f,g){var E=g instanceof Mt?Ve(g):new Mt(g);if(E.g!="")f&&(E.g=f+"."+E.g),zt(E,E.u);else{var L=c.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;const O=new Mt(null);E&&Pt(O,E),f&&(O.g=f),L&&zt(O,L),g&&(O.h=g),E=O}return g=o.G,f=o.wa,g&&f&&ke(E,g,f),ke(E,"VER",o.ka),br(o,E),E}function B(o,f,g){if(f&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Aa&&!o.ma?new Le(new Ki({ab:g})):new Le(o.ma),f.Fa(o.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function U(){}n=U.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function X(){}X.prototype.g=function(o,f){return new se(o,f)};function se(o,f){et.call(this),this.g=new no(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(o?o["X-WebChannel-Client-Profile"]=f.sa:o={"X-WebChannel-Client-Profile":f.sa}),this.g.U=o,(o=f&&f.Qb)&&!b(o)&&(this.g.u=o),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Me(this)}P(se,et),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){es(this.g)},se.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.v&&(g={},g.__data__=Di(o),o=g);f.i.push(new Ws(f.Ya++,o)),f.I==3&&qn(f)},se.prototype.N=function(){this.g.l=null,delete this.j,es(this.g),delete this.g,se.Z.N.call(this)};function Ee(o){Ot.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}P(Ee,Ot);function me(){Ht.call(this),this.status=1}P(me,Ht);function Me(o){this.g=o}P(Me,U),Me.prototype.ra=function(){rt(this.g,"a")},Me.prototype.qa=function(o){rt(this.g,new Ee(o))},Me.prototype.pa=function(o){rt(this.g,new me)},Me.prototype.oa=function(){rt(this.g,"b")},X.prototype.createWebChannel=X.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Fh=function(){return new X},Mh=function(){return pr()},Lh=hn,Ja={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Lt.NO_ERROR=0,Lt.TIMEOUT=8,Lt.HTTP_ERROR=6,To=Lt,dn.COMPLETE="complete",Oh=dn,Dn.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",et.prototype.listen=et.prototype.J,ss=Dn,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,Vh=Le}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const jc="@firebase/firestore",qc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new gu("@firebase/firestore");function Jr(){return Vr.logLevel}function re(n,...e){if(Vr.logLevel<=Ae.DEBUG){const t=e.map(Su);Vr.debug(`Firestore (${vi}): ${n}`,...t)}}function In(n,...e){if(Vr.logLevel<=Ae.ERROR){const t=e.map(Su);Vr.error(`Firestore (${vi}): ${n}`,...t)}}function li(n,...e){if(Vr.logLevel<=Ae.WARN){const t=e.map(Su);Vr.warn(`Firestore (${vi}): ${n}`,...t)}}function Su(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Uh(n,r,t)}function Uh(n,e,t){let r=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function Re(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Uh(e,i,r)}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Py{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dt.UNAUTHENTICATED)))}shutdown(){}}class ky{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Dy{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Tn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Tn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new jh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class Ny{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ny(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Oy(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function Za(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Fa(i)===Fa(a)?be(i,a):Fa(i)?1:-1}return be(n.length,e.length)}const Ly=55296,My=57343;function Fa(n){const e=n.charCodeAt(0);return e>=Ly&&e<=My}function hi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="__name__";class Zt{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&le(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Zt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return be(e.length,t.length)}static compareSegments(e,t){const r=Zt.isNumericId(e),i=Zt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(t)):Za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zn.fromString(e.substring(4,e.length-2))}}class xe extends Zt{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new xe(t)}static emptyPath(){return new xe([])}}const Fy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Zt{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return Fy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$c}static keyField(){return new at([$c])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(xe.fromString(e))}static fromName(e){return new ae(xe.fromString(e).popFirst(5))}static empty(){return new ae(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e,t){if(!t)throw new ee(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Uy(n,e,t,r){if(e===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hc(n){if(!ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wc(n){if(ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le(12329,{type:typeof n})}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yo(n);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function jy(n,e){if(e<=0)throw new ee(H.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,e){const t={typeString:n};return e&&(t.value=e),t}function ks(n,e){if(!Bh(n))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=-62135596800,Gc=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Gc);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zc)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gc}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ks(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Ye("string",Oe._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Oe(0,0))}static max(){return new pe(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=-1;function qy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new tr(i,ae.empty(),e)}function By(n){return new tr(n.readTime,n.key,ys)}class tr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tr(pe.min(),ae.empty(),ys)}static max(){return new tr(pe.max(),ae.empty(),ys)}}function $y(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Hy)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,r)=>{t(e)}))}static reject(e){return new z(((t,r)=>{r(e)}))}static waitFor(e){return new z(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next((i=>i?z.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new z(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const v=_;t(e[v]).next((I=>{c[v]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new z(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function zy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ei(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Jo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=-1;function Zo(n){return n==null}function Oo(n){return n===0&&1/n==-1/0}function Gy(n){return typeof n=="number"&&Number.isInteger(n)&&!Oo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="";function Ky(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kc(e)),e=Qy(n.get(t),e);return Kc(e)}function Qy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case $h:t+="";break;default:t+=a}}return t}function Kc(n){return n+$h+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=a??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new bt([])}unionWith(e){let t=new Je(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Wh("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Xy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=Xy.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="server_timestamp",Gh="__type__",Kh="__previous_value__",Qh="__local_write_time__";function Pu(n){return(n?.mapValue?.fields||{})[Gh]?.stringValue===zh}function ea(n){const e=n.mapValue.fields[Kh];return Pu(e)?ea(e):e}function _s(n){const e=nr(n.mapValue.fields[Qh].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,r,i,a,c,p,_,v,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=I}}const Lo="(default)";class vs{constructor(e,t){this.projectId=e,this.database=t||Lo}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database===Lo}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="__type__",Jy="__max__",ho={mapValue:{}},Yh="__vector__",Mo="value";function ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pu(n)?4:e_(n)?9007199254740991:Zy(n)?10:11:le(28295,{value:n})}function an(n,e){if(n===e)return!0;const t=ir(n);if(t!==ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _s(n).isEqual(_s(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=nr(i.timestampValue),p=nr(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return rr(i.bytesValue).isEqual(rr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return ze(i.geoPointValue.latitude)===ze(a.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ze(i.integerValue)===ze(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=ze(i.doubleValue),p=ze(a.doubleValue);return c===p?Oo(c)===Oo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return hi(n.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Qc(c)!==Qc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!an(c[_],p[_])))return!1;return!0})(n,e);default:return le(52216,{left:n})}}function Ts(n,e){return(n.values||[]).find((t=>an(t,e)))!==void 0}function fi(n,e){if(n===e)return 0;const t=ir(n),r=ir(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=ze(a.integerValue||a.doubleValue),_=ze(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return Yc(n.timestampValue,e.timestampValue);case 4:return Yc(_s(n),_s(e));case 5:return Za(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=rr(a),_=rr(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let v=0;v<p.length&&v<_.length;v++){const I=be(p[v],_[v]);if(I!==0)return I}return be(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=be(ze(a.latitude),ze(c.latitude));return p!==0?p:be(ze(a.longitude),ze(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Jc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},v=p[Mo]?.arrayValue,I=_[Mo]?.arrayValue,P=be(v?.values?.length||0,I?.values?.length||0);return P!==0?P:Jc(v,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===ho.mapValue&&c===ho.mapValue)return 0;if(a===ho.mapValue)return 1;if(c===ho.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),v=c.fields||{},I=Object.keys(v);_.sort(),I.sort();for(let P=0;P<_.length&&P<I.length;++P){const V=Za(_[P],I[P]);if(V!==0)return V;const G=fi(p[_[P]],v[I[P]]);if(G!==0)return G}return be(_.length,I.length)})(n.mapValue,e.mapValue);default:throw le(23264,{he:t})}}function Yc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=nr(n),r=nr(e),i=be(t.seconds,r.seconds);return i!==0?i:be(t.nanos,r.nanos)}function Jc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=fi(t[i],r[i]);if(a)return a}return be(t.length,r.length)}function di(n){return eu(n)}function eu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=nr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return rr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=eu(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${eu(t.fields[c])}`;return i+"}"})(n.mapValue):le(61005,{value:n})}function Eo(n){switch(ir(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ea(n);return e?16+Eo(e):16;case 5:return 2*n.stringValue.length;case 6:return rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Eo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return ur(r.fields,((a,c)=>{i+=a.length+Eo(c)})),i})(n.mapValue);default:throw le(13486,{value:n})}}function Zc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tu(n){return!!n&&"integerValue"in n}function ku(n){return!!n&&"arrayValue"in n}function el(n){return!!n&&"nullValue"in n}function tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wo(n){return!!n&&"mapValue"in n}function Zy(n){return(n?.mapValue?.fields||{})[Xh]?.stringValue===Yh}function hs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=hs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(n.arrayValue.values[t]);return e}return{...n}}function e_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=hs(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());wo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];wo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ur(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Tt(hs(this.value))}}function Jh(n){const e=[];return ur(n.fields,((t,r)=>{const i=new at([t]);if(wo(r)){const a=Jh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new pt(e,0,pe.min(),pe.min(),pe.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,i){return new pt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new pt(e,2,t,pe.min(),pe.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new pt(e,3,t,pe.min(),pe.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.position=e,this.inclusive=t}}function nl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(c.referenceValue),t.key):r=fi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!an(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function t_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{}class Xe extends Zh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new r_(e,t,r):t==="array-contains"?new o_(e,r):t==="in"?new a_(e,r):t==="not-in"?new u_(e,r):t==="array-contains-any"?new c_(e,r):new Xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new i_(e,r):new s_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fi(t,this.value)):t!==null&&ir(this.value)===ir(t)&&this.matchesComparison(fi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Zh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $t(e,t)}matches(e){return ef(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ef(n){return n.op==="and"}function tf(n){return n_(n)&&ef(n)}function n_(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function nu(n){if(n instanceof Xe)return n.field.canonicalString()+n.op.toString()+di(n.value);if(tf(n))return n.filters.map((e=>nu(e))).join(",");{const e=n.filters.map((t=>nu(t))).join(",");return`${n.op}(${e})`}}function nf(n,e){return n instanceof Xe?(function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)})(n,e):n instanceof $t?(function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&nf(c,i.filters[p])),!0):!1})(n,e):void le(19439)}function rf(n){return n instanceof Xe?(function(t){return`${t.field.canonicalString()} ${t.op} ${di(t.value)}`})(n):n instanceof $t?(function(t){return t.op.toString()+" {"+t.getFilters().map(rf).join(" ,")+"}"})(n):"Filter"}class r_ extends Xe{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class i_ extends Xe{constructor(e,t){super(e,"in",t),this.keys=sf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class s_ extends Xe{constructor(e,t){super(e,"not-in",t),this.keys=sf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sf(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class o_ extends Xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ku(t)&&Ts(t.arrayValue,this.value)}}class a_ extends Xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ts(this.value.arrayValue,t)}}class u_ extends Xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ts(this.value.arrayValue,t)}}class c_ extends Xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ku(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ts(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function il(n,e=null,t=[],r=[],i=null,a=null,c=null){return new l_(n,e,t,r,i,a,c)}function Du(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>nu(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Zo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>di(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>di(r))).join(",")),e.Te=t}return e.Te}function Nu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!t_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function ru(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function h_(n,e,t,r,i,a,c,p){return new Ds(n,e,t,r,i,a,c,p)}function xu(n){return new Ds(n)}function sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function of(n){return n.collectionGroup!==null}function fs(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Je(at.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Uo(a,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new Uo(at.keyField(),r))}return e.Ie}function nn(n){const e=ge(n);return e.Ee||(e.Ee=f_(e,fs(n))),e.Ee}function f_(n,e){if(n.limitType==="F")return il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Uo(i.field,a)}));const t=n.endAt?new Fo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fo(n.startAt.position,n.startAt.inclusive):null;return il(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function iu(n,e){const t=n.filters.concat([e]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jo(n,e,t){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ta(n,e){return Nu(nn(n),nn(e))&&n.limitType===e.limitType}function af(n){return`${Du(nn(n))}|lt:${n.limitType}`}function Zr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>rf(i))).join(", ")}]`),Zo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>di(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>di(i))).join(",")),`Target(${r})`})(nn(n))}; limitType=${n.limitType})`}function na(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of fs(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const v=nl(c,p,_);return c.inclusive?v<=0:v<0})(r.startAt,fs(r),i)||r.endAt&&!(function(c,p,_){const v=nl(c,p,_);return c.inclusive?v>=0:v>0})(r.endAt,fs(r),i))})(n,e)}function d_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uf(n){return(e,t)=>{let r=!1;for(const i of fs(n)){const a=p_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function p_(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),v=p.data.field(a);return _!==null&&v!==null?fi(_,v):le(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return Hh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new je(ae.comparator);function An(){return g_}const cf=new je(ae.comparator);function os(...n){let e=cf;for(const t of n)e=e.insert(t.key,t);return e}function lf(n){let e=cf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Rr(){return ds()}function hf(){return ds()}function ds(){return new Lr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const m_=new je(ae.comparator),y_=new Je(ae.comparator);function Se(...n){let e=y_;for(const t of n)e=e.add(t);return e}const __=new Je(be);function v_(){return __}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function ff(n){return{integerValue:""+n}}function T_(n,e){return Gy(e)?ff(e):Vu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this._=void 0}}function E_(n,e,t){return n instanceof Es?(function(i,a){const c={fields:{[Gh]:{stringValue:zh},[Qh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Pu(a)&&(a=ea(a)),a&&(c.fields[Kh]=a),{mapValue:c}})(t,e):n instanceof ws?pf(n,e):n instanceof Is?gf(n,e):(function(i,a){const c=df(i,a),p=ol(c)+ol(i.Ae);return tu(c)&&tu(i.Ae)?ff(p):Vu(i.serializer,p)})(n,e)}function w_(n,e,t){return n instanceof ws?pf(n,e):n instanceof Is?gf(n,e):t}function df(n,e){return n instanceof qo?(function(r){return tu(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Es extends ra{}class ws extends ra{constructor(e){super(),this.elements=e}}function pf(n,e){const t=mf(e);for(const r of n.elements)t.some((i=>an(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Is extends ra{constructor(e){super(),this.elements=e}}function gf(n,e){let t=mf(e);for(const r of n.elements)t=t.filter((i=>!an(i,r)));return{arrayValue:{values:t}}}class qo extends ra{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ol(n){return ze(n.integerValue||n.doubleValue)}function mf(n){return ku(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.field=e,this.transform=t}}function A_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof ws&&i instanceof ws||r instanceof Is&&i instanceof Is?hi(r.elements,i.elements,an):r instanceof qo&&i instanceof qo?an(r.Ae,i.Ae):r instanceof Es&&i instanceof Es})(n.transform,e.transform)}class b_{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ia{}function yf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sa(n.key,Et.none()):new Ns(n.key,n.data,Et.none());{const t=n.data,r=Tt.empty();let i=new Je(at.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new cr(n.key,r,new bt(i.toArray()),Et.none())}}function S_(n,e,t){n instanceof Ns?(function(i,a,c){const p=i.value.clone(),_=ul(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof cr?(function(i,a,c){if(!Io(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=ul(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(_f(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ps(n,e,t,r){return n instanceof Ns?(function(a,c,p,_){if(!Io(a.precondition,c))return p;const v=a.value.clone(),I=cl(a.fieldTransforms,_,c);return v.setAll(I),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof cr?(function(a,c,p,_){if(!Io(a.precondition,c))return p;const v=cl(a.fieldTransforms,_,c),I=c.data;return I.setAll(_f(a)),I.setAll(v),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((P=>P.field)))})(n,e,t,r):(function(a,c,p){return Io(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function C_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=df(r.transform,i||null);a!=null&&(t===null&&(t=Tt.empty()),t.set(r.field,a))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hi(r,i,((a,c)=>A_(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ns extends ia{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends ia{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function _f(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ul(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,w_(c,p,t[i]))}return r}function cl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,E_(a,c,e))}return r}class sa extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class R_ extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&S_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ps(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hf();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=yf(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Se())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,((t,r)=>al(t,r)))&&hi(this.baseMutations,e.baseMutations,((t,r)=>al(t,r)))}}class Ou{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return m_})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Ou(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ce;function N_(n){switch(n){case H.OK:return le(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return le(15467,{code:n})}}function vf(n){if(n===void 0)return In("GRPC error has no .code"),H.UNKNOWN;switch(n){case Qe.OK:return H.OK;case Qe.CANCELLED:return H.CANCELLED;case Qe.UNKNOWN:return H.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return H.INTERNAL;case Qe.UNAVAILABLE:return H.UNAVAILABLE;case Qe.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Qe.NOT_FOUND:return H.NOT_FOUND;case Qe.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Qe.ABORTED:return H.ABORTED;case Qe.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Qe.DATA_LOSS:return H.DATA_LOSS;default:return le(39323,{code:n})}}(Ce=Qe||(Qe={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Zn([4294967295,4294967295],0);function ll(n){const e=x_().encode(n),t=new xh;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Zn([t,r],0),new Zn([i,a],0)]}class Lu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new as(`Invalid padding: ${t}`);if(r<0)throw new as(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new as(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Zn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Zn.fromNumber(r)));return i.compare(V_)===1&&(i=new Zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ll(e),[r,i]=hl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Lu(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=ll(e),[r,i]=hl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new oa(pe.min(),i,new je(be),An(),Se())}}class xs{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new xs(r,t,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Tf{constructor(e,t){this.targetId=e,this.Ce=t}}class Ef{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class fl{constructor(){this.ve=0,this.Fe=dl(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),t=Se(),r=Se();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:le(38017,{changeType:a})}})),new xs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=dl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class O_{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=fo(),this.He=fo(),this.Ye=new je(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(ru(a))if(r===0){const c=new ae(a.path);this.et(t,c,pt.newNoDocument(c,pe.min()))}else Re(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const v=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=rr(r).toUint8Array()}catch(_){if(_ instanceof Wh)return li("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new Lu(c,i,a)}catch(_){return li(_ instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&ru(p.target)){const _=new ae(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,pt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Se();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const v=this.ot(_);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new oa(e,t,this.Ye,this.je,r);return this.je=An(),this.Je=fo(),this.He=fo(),this.Ye=new je(be),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new fl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fo(){return new je(ae.comparator)}function dl(){return new je(ae.comparator)}const L_={asc:"ASCENDING",desc:"DESCENDING"},M_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},F_={and:"AND",or:"OR"};class U_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function su(n,e){return n.useProto3Json||Zo(e)?e:{value:e}}function Bo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function j_(n,e){return Bo(n,e.toTimestamp())}function rn(n){return Re(!!n,49232),pe.fromTimestamp((function(t){const r=nr(t);return new Oe(r.seconds,r.nanos)})(n))}function Mu(n,e){return ou(n,e).canonicalString()}function ou(n,e){const t=(function(i){return new xe(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function If(n){const e=xe.fromString(n);return Re(Rf(e),10190,{key:e.toString()}),e}function au(n,e){return Mu(n.databaseId,e.path)}function Ua(n,e){const t=If(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(bf(t))}function Af(n,e){return Mu(n.databaseId,e)}function q_(n){const e=If(n);return e.length===4?xe.emptyPath():bf(e)}function uu(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bf(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pl(n,e,t){return{name:au(n,e),fields:t.value.mapValue.fields}}function B_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:le(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,I){return v.useProto3Json?(Re(I===void 0||typeof I=="string",58123),ut.fromBase64String(I||"")):(Re(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ut.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(v){const I=v.code===void 0?H.UNKNOWN:vf(v.code);return new ee(I,v.message||"")})(c);t=new Ef(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ua(n,r.document.name),a=rn(r.document.updateTime),c=r.document.createTime?rn(r.document.createTime):pe.min(),p=new Tt({mapValue:{fields:r.document.fields}}),_=pt.newFoundDocument(i,a,c,p),v=r.targetIds||[],I=r.removedTargetIds||[];t=new Ao(v,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ua(n,r.document),a=r.readTime?rn(r.readTime):pe.min(),c=pt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Ao([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ua(n,r.document),a=r.removedTargetIds||[];t=new Ao([],a,i,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new D_(i,a),p=r.targetId;t=new Tf(p,c)}}return t}function $_(n,e){let t;if(e instanceof Ns)t={update:pl(n,e.key,e.value)};else if(e instanceof sa)t={delete:au(n,e.key)};else if(e instanceof cr)t={update:pl(n,e.key,e.data),updateMask:J_(e.fieldMask)};else{if(!(e instanceof R_))return le(16599,{Vt:e.type});t={verify:au(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof Es)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ws)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Is)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof qo)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw le(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:j_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:le(27497)})(n,e.precondition)),t}function H_(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?rn(i.updateTime):rn(a);return c.isEqual(pe.min())&&(c=rn(a)),new b_(c,i.transformResults||[])})(t,e)))):[]}function W_(n,e){return{documents:[Af(n,e.path)]}}function z_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Af(n,i);const a=(function(v){if(v.length!==0)return Cf($t.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(v){if(v.length!==0)return v.map((I=>(function(V){return{field:ei(V.field),direction:Q_(V.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=su(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function G_(n){let e=q_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Re(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(P){const V=Sf(P);return V instanceof $t&&tf(V)?V.getFilters():[V]})(t.where));let c=[];t.orderBy&&(c=(function(P){return P.map((V=>(function(W){return new Uo(ti(W.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(V)))})(t.orderBy));let p=null;t.limit&&(p=(function(P){let V;return V=typeof P=="object"?P.value:P,Zo(V)?null:V})(t.limit));let _=null;t.startAt&&(_=(function(P){const V=!!P.before,G=P.values||[];return new Fo(G,V)})(t.startAt));let v=null;return t.endAt&&(v=(function(P){const V=!P.before,G=P.values||[];return new Fo(G,V)})(t.endAt)),h_(e,i,c,a,p,"F",_,v)}function K_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ti(t.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ti(t.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ti(t.unaryFilter.field);return Xe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ti(t.unaryFilter.field);return Xe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Xe.create(ti(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $t.create(t.compositeFilter.filters.map((r=>Sf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(t.compositeFilter.op))})(n):le(30097,{filter:n})}function Q_(n){return L_[n]}function X_(n){return M_[n]}function Y_(n){return F_[n]}function ei(n){return{fieldPath:n.canonicalString()}}function ti(n){return at.fromServerFormat(n.fieldPath)}function Cf(n){return n instanceof Xe?(function(t){if(t.op==="=="){if(tl(t.value))return{unaryFilter:{field:ei(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:ei(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tl(t.value))return{unaryFilter:{field:ei(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:ei(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(t.field),op:X_(t.op),value:t.value}}})(n):n instanceof $t?(function(t){const r=t.getFilters().map((i=>Cf(i)));return r.length===1?r[0]:{compositeFilter:{op:Y_(t.op),filters:r}}})(n):le(54877,{filter:n})}function J_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.yt=e}}function ev(n){const e=G_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.Cn=new nv}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(tr.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class nv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Je(xe.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pf=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Pf,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new pi(0)}static cr(){return new pi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="LruGarbageCollector",rv=1048576;function yl([n,e],[t,r]){const i=be(n,t);return i===0?be(e,r):i}class iv{constructor(e){this.Ir=e,this.buffer=new Je(yl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(ml,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ei(t)?re(ml,"Ignoring IndexedDB error during garbage collection: ",t):await Ti(t)}await this.Vr(3e5)}))}}class ov{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Jo.ce);const r=new iv(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(gl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((P=>(P>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),i=this.params.maximumSequenceNumbersToCollect):i=P,c=Date.now(),this.nthSequenceNumber(e,i)))).next((P=>(r=P,p=Date.now(),this.removeTargets(e,r,t)))).next((P=>(a=P,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((P=>(v=Date.now(),Jr()<=Ae.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${P} documents in `+(v-_)+`ms
Total Duration: ${v-I}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:P}))))}}function av(n,e){return new ov(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.changes=new Lr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&ps(r.mutation,i,bt.empty(),Oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Se()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Se()){const i=Rr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=os();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=Rr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Se())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=An();const c=ds(),p=(function(){return ds()})();return t.forEach(((_,v)=>{const I=r.get(v.key);i.has(v.key)&&(I===void 0||I.mutation instanceof cr)?a=a.insert(v.key,v):I!==void 0?(c.set(v.key,I.mutation.getFieldMask()),ps(I.mutation,v,I.mutation.getFieldMask(),Oe.now())):c.set(v.key,bt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((v,I)=>c.set(v,I))),t.forEach(((v,I)=>p.set(v,new cv(I,c.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=ds();let i=new je(((c,p)=>c-p)),a=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const v=t.get(_);if(v===null)return;let I=r.get(_)||bt.empty();I=p.applyToLocalView(v,I),r.set(_,I);const P=(i.get(p.batchId)||Se()).add(_);i=i.insert(p.batchId,P)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,I=_.value,P=hf();I.forEach((V=>{if(!a.has(V)){const G=yf(t.get(V),r.get(V));G!==null&&P.set(V,G),a=a.add(V)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,P))}return z.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):z.resolve(Rr());let p=ys,_=a;return c.next((v=>z.forEach(v,((I,P)=>(p<P.largestBatchId&&(p=P.largestBatchId),a.get(I)?z.resolve():this.remoteDocumentCache.getEntry(e,I).next((V=>{_=_.insert(I,V)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,_,v,Se()))).next((I=>({batchId:p,changes:lf(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=os();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=os();return this.indexManager.getCollectionParents(e,a).next((p=>z.forEach(p,(_=>{const v=(function(P,V){return new Ds(V,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((I=>{I.forEach(((P,V)=>{c=c.insert(P,V)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,v)=>{const I=v.getKey();c.get(I)===null&&(c=c.insert(I,pt.newInvalidDocument(I)))}));let p=os();return c.forEach(((_,v)=>{const I=a.get(_);I!==void 0&&ps(I.mutation,v,bt.empty(),Oe.now()),na(t,v)&&(p=p.insert(_,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:ev(i.bundledQuery),readTime:rn(i.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.overlays=new je(ae.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rr();return z.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const i=Rr(),a=t.length+1,c=new ae(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new je(((v,I)=>v-I));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let I=a.get(v.largestBatchId);I===null&&(I=Rr(),a=a.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const p=Rr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,I)=>p.set(v,I))),!(p.size()>=i)););return z.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new k_(t,r));let a=this.qr.get(t);a===void 0&&(a=Se(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.Qr=new Je(nt.$r),this.Ur=new Je(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new nt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ae(new xe([])),r=new nt(t,e),i=new nt(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new xe([])),r=new nt(t,e),i=new nt(t,e+1);let a=Se();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new nt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||be(e.Yr,t.Yr)}static Kr(e,t){return be(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(nt.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new P_(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new nt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Ru:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),i=new nt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(be);return t.forEach((i=>{const a=new nt(i,0),c=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const c=new nt(new ae(a),0);let p=new Je(be);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(_.Yr)),!0)}),c),z.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(t.mutations,(i=>{const a=new nt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),i=this.Zr.firstAfterOrEqual(r);return z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.ri=e,this.docs=(function(){return new je(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():pt.newInvalidDocument(i))})),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=An();const c=t.path,p=new ae(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:I}}=_.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||$y(By(I),r)<=0||(i.has(I.key)||na(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(e,t,r,i){le(9500)}ii(e,t){return z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new mv(this)}getSize(e){return z.resolve(this.size)}}class mv extends uv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.persistence=e,this.si=new Lr((t=>Du(t)),Nu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Fu,this.targetCount=0,this.ai=pi.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new pi(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),z.waitFor(a).next((()=>i))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Jo(0),this.li=!1,this.li=!0,this.hi=new dv,this.referenceDelegate=e(this),this.Pi=new yv(this),this.indexManager=new tv,this.remoteDocumentCache=(function(i){return new gv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Z_(t),this.Ii=new hv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new pv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new _v(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return z.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class _v extends Wy{constructor(e){super(),this.currentSequenceNumber=e}}class Uu{constructor(e){this.persistence=e,this.Ri=new Fu,this.Vi=null}static mi(e){return new Uu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $o{constructor(e,t){this.persistence=e,this.pi=new Lr((r=>Ky(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=av(this,t)}static mi(e,t){return new $o(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?z.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eo(e.data.value)),t}br(e,t,r){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Se(),i=Se();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new ju(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Qd()?8:zy(gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new vv;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Jr()<=Ae.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Zr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Jr()<=Ae.DEBUG&&re("QueryEngine","Query:",Zr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Jr()<=Ae.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Zr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):z.resolve())}ys(e,t){if(sl(t))return z.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=jo(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Se(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const v=this.Ds(t,p);return this.Cs(t,v,c,_.readTime)?this.ys(e,jo(t,null,"F")):this.vs(e,v,t,_)}))))})))))}ws(e,t,r,i){return sl(t)||i.isEqual(pe.min())?z.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?z.resolve(null):(Jr()<=Ae.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zr(t)),this.vs(e,c,t,qy(i,ys)).next((p=>p)))}))}Ds(e,t){let r=new Je(uf(e));return t.forEach(((i,a)=>{na(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return Jr()<=Ae.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Zr(t)),this.ps.getDocumentsMatchingQuery(e,t,tr.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="LocalStore",Ev=3e8;class wv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new je(be),this.xs=new Lr((a=>Du(a)),Nu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Iv(n,e,t,r){return new wv(n,e,t,r)}async function Df(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Se();for(const v of i){c.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}for(const v of a){p.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((v=>({Ls:v,removedBatchIds:c,addedBatchIds:p})))}))}))}function Av(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,I){const P=v.batch,V=P.keys();let G=z.resolve();return V.forEach((W=>{G=G.next((()=>I.getEntry(_,W))).next((Q=>{const Y=v.docVersions.get(W);Re(Y!==null,48541),Q.version.compareTo(Y)<0&&(P.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),I.addEntry(Q)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(_,P)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Se();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Nf(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function bv(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,P)=>{const V=i.get(P);if(!V)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,P).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,P))));let G=V.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(P)!==null?G=G.withResumeToken(ut.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(I.resumeToken,r)),i=i.insert(P,G),(function(Q,Y,J){return Q.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=Ev?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(V,G,I)&&p.push(t.Pi.updateTargetData(a,G))}));let _=An(),v=Se();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(Sv(a,c,e.documentUpdates).next((I=>{_=I.ks,v=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((P=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return z.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,v))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function Sv(n,e,t){let r=Se(),i=Se();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=An();return t.forEach(((p,_)=>{const v=a.get(p);_.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!v.isValidDocument()||_.version.compareTo(v.version)>0||_.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(qu,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function Cv(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ru),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Rv(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,z.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Qn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function cu(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Ei(c))throw c;re(qu,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function _l(n,e,t){const r=ge(n);let i=pe.min(),a=Se();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,v,I){const P=ge(_),V=P.xs.get(I);return V!==void 0?z.resolve(P.Ms.get(V)):P.Pi.getTargetData(v,I)})(r,c,nn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Se()))).next((p=>(Pv(r,d_(e),p),{documents:p,Qs:a})))))}function Pv(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class vl{constructor(){this.activeTargetIds=v_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kv{constructor(){this.Mo=new vl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new vl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="ConnectivityMonitor";class El{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(Tl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(Tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=null;function lu(){return po===null?po=(function(){return 268435456+Math.round(2147483648*Math.random())})():po++,"0x"+po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="RestConnection",Nv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Lo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=lu(),p=this.zo(e,t.toUriEncodedString());re(ja,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:v}=new URL(p),I=mi(v);return this.Jo(e,p,_,r,I).then((P=>(re(ja,`Received RPC '${e}' ${c}: `,P),P)),(P=>{throw li(ja,`RPC '${e}' ${c} failed with error: `,P,"url: ",p,"request:",r),P}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=Nv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Ov extends xv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=lu();return new Promise(((p,_)=>{const v=new Vh;v.setWithCredentials(!0),v.listenOnce(Oh.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case To.NO_ERROR:const P=v.getResponseJson();re(ft,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(P)),p(P);break;case To.TIMEOUT:re(ft,`RPC '${e}' ${c} timed out`),_(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const V=v.getStatus();if(re(ft,`RPC '${e}' ${c} failed with status:`,V,"response text:",v.getResponseText()),V>0){let G=v.getResponseJson();Array.isArray(G)&&(G=G[0]);const W=G?.error;if(W&&W.status&&W.message){const Q=(function(J){const ve=J.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ve)>=0?ve:H.UNKNOWN})(W.status);_(new ee(Q,W.message))}else _(new ee(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new ee(H.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:c,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(ft,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ft,`RPC '${e}' ${c} sending request:`,i),v.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=lu(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Fh(),p=Mh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");re(ft,`Creating RPC '${e}' stream ${i}: ${I}`,_);const P=c.createWebChannel(I,_);this.I_(P);let V=!1,G=!1;const W=new Vv({Yo:Y=>{G?re(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(V||(re(ft,`Opening RPC '${e}' stream ${i} transport.`),P.open(),V=!0),re(ft,`RPC '${e}' stream ${i} sending:`,Y),P.send(Y))},Zo:()=>P.close()}),Q=(Y,J,ve)=>{Y.listen(J,(Te=>{try{ve(Te)}catch(De){setTimeout((()=>{throw De}),0)}}))};return Q(P,ss.EventType.OPEN,(()=>{G||(re(ft,`RPC '${e}' stream ${i} transport opened.`),W.o_())})),Q(P,ss.EventType.CLOSE,(()=>{G||(G=!0,re(ft,`RPC '${e}' stream ${i} transport closed`),W.a_(),this.E_(P))})),Q(P,ss.EventType.ERROR,(Y=>{G||(G=!0,li(ft,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),W.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))})),Q(P,ss.EventType.MESSAGE,(Y=>{if(!G){const J=Y.data[0];Re(!!J,16349);const ve=J,Te=ve?.error||ve[0]?.error;if(Te){re(ft,`RPC '${e}' stream ${i} received error:`,Te);const De=Te.status;let Ze=(function(C){const S=Qe[C];if(S!==void 0)return vf(S)})(De),qe=Te.message;Ze===void 0&&(Ze=H.INTERNAL,qe="Unknown error status: "+De+" with message "+Te.message),G=!0,W.a_(new ee(Ze,qe)),P.close()}else re(ft,`RPC '${e}' stream ${i} received:`,J),W.u_(J)}})),Q(p,Lh.STAT_EVENT,(Y=>{Y.stat===Ja.PROXY?re(ft,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===Ja.NOPROXY&&re(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{W.__()}),0),W}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function qa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n){return new U_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="PersistentStream";class Vf{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lv extends Vf{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=B_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?rn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=uu(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=ru(_)?{documents:W_(a,_)}:{query:z_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=wf(a,c.resumeToken);const v=su(a,c.expectedCount);v!==null&&(p.expectedCount=v)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=Bo(a,c.snapshotVersion.toTimestamp());const v=su(a,c.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=K_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=uu(this.serializer),t.removeTarget=e,this.q_(t)}}class Mv extends Vf{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=H_(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=uu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>$_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{}class Uv extends Fv{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,ou(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(H.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,ou(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class jv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(In(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="RemoteStore";class qv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Mr(this)&&(re(Or,"Restarting streams for network reachability change."),await(async function(_){const v=ge(_);v.Ea.add(4),await Vs(v),v.Ra.set("Unknown"),v.Ea.delete(4),await ua(v)})(this))}))})),this.Ra=new jv(r,i)}}async function ua(n){if(Mr(n))for(const e of n.da)await e(!0)}async function Vs(n){for(const e of n.da)await e(!1)}function Of(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Wu(t)?Hu(t):wi(t).O_()&&$u(t,e))}function Bu(n,e){const t=ge(n),r=wi(t);t.Ia.delete(e),r.O_()&&Lf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Mr(t)&&t.Ra.set("Unknown"))}function $u(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wi(n).Y_(e)}function Lf(n,e){n.Va.Ue(e),wi(n).Z_(e)}function Hu(n){n.Va=new O_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),wi(n).start(),n.Ra.ua()}function Wu(n){return Mr(n)&&!wi(n).x_()&&n.Ia.size>0}function Mr(n){return ge(n).Ea.size===0}function Mf(n){n.Va=void 0}async function Bv(n){n.Ra.set("Online")}async function $v(n){n.Ia.forEach(((e,t)=>{$u(n,e)}))}async function Hv(n,e){Mf(n),Wu(n)?(n.Ra.ha(e),Hu(n)):n.Ra.set("Unknown")}async function Wv(n,e,t){if(n.Ra.set("Online"),e instanceof Ef&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Or,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(n,r)}else if(e instanceof Ao?n.Va.Ze(e):e instanceof Tf?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await Nf(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,v)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(v);I&&a.Ia.set(v,I.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,v)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ut.EMPTY_BYTE_STRING,I.snapshotVersion)),Lf(a,_);const P=new Qn(I.target,_,v,I.sequenceNumber);$u(a,P)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Or,"Failed to raise snapshot:",r),await Ho(n,r)}}async function Ho(n,e,t){if(!Ei(e))throw e;n.Ea.add(1),await Vs(n),n.Ra.set("Offline"),t||(t=()=>Nf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Or,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ua(n)}))}function Ff(n,e){return e().catch((t=>Ho(n,t,e)))}async function ca(n){const e=ge(n),t=sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ru;for(;zv(e);)try{const i=await Cv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Gv(e,i)}catch(i){await Ho(e,i)}Uf(e)&&jf(e)}function zv(n){return Mr(n)&&n.Ta.length<10}function Gv(n,e){n.Ta.push(e);const t=sr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Uf(n){return Mr(n)&&!sr(n).x_()&&n.Ta.length>0}function jf(n){sr(n).start()}async function Kv(n){sr(n).ra()}async function Qv(n){const e=sr(n);for(const t of n.Ta)e.ea(t.mutations)}async function Xv(n,e,t){const r=n.Ta.shift(),i=Ou.from(r,e,t);await Ff(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ca(n)}async function Yv(n,e){e&&sr(n).X_&&await(async function(r,i){if((function(c){return N_(c)&&c!==H.ABORTED})(i.code)){const a=r.Ta.shift();sr(r).B_(),await Ff(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await ca(r)}})(n,e),Uf(n)&&jf(n)}async function Il(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(Or,"RemoteStore received new credentials");const r=Mr(t);t.Ea.add(3),await Vs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ua(t)}async function Jv(n,e){const t=ge(n);e?(t.Ea.delete(2),await ua(t)):e||(t.Ea.add(2),await Vs(t),t.Ra.set("Unknown"))}function wi(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new Lv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Bv.bind(null,n),t_:$v.bind(null,n),r_:Hv.bind(null,n),H_:Wv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Wu(n)?Hu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Mf(n))}))),n.ma}function sr(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new Mv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Kv.bind(null,n),r_:Yv.bind(null,n),ta:Qv.bind(null,n),na:Xv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ca(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Or,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new zu(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(n,e){if(In("AsyncQueue",`${e}: ${n}`),Ei(n))return new ee(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{static emptySet(e){return new oi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=os(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.ga=new je(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class gi{constructor(e,t,r,i,a,c,p,_,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new gi(e,t,oi.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class eT{constructor(){this.queries=bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=bl(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function bl(){return new Lr((n=>af(n)),ta)}async function qf(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new Zv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=Gu(c,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Ku(t)}async function Bf(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function tT(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&Ku(t)}function nT(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function Ku(n){n.Ca.forEach((e=>{e.next()}))}var hu,Sl;(Sl=hu||(hu={})).Ma="default",Sl.Cache="cache";class $f{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.key=e}}class Wf{constructor(e){this.key=e}}class rT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=uf(e),this.tu=new oi(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Al,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,P)=>{const V=i.get(I),G=na(this.query,P)?P:null,W=!!V&&this.mutatedKeys.has(V.key),Q=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Y=!1;V&&G?V.data.isEqual(G.data)?W!==Q&&(r.track({type:3,doc:G}),Y=!0):this.su(V,G)||(r.track({type:2,doc:G}),Y=!0,(_&&this.eu(G,_)>0||v&&this.eu(G,v)<0)&&(p=!0)):!V&&G?(r.track({type:0,doc:G}),Y=!0):V&&!G&&(r.track({type:1,doc:V}),Y=!0,(_||v)&&(p=!0)),Y&&(G?(c=c.add(G),a=Q?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,P)=>(function(G,W){const Q=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:Y})}};return Q(G)-Q(W)})(I.type,P.type)||this.eu(I.doc,P.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,v=_!==this.Za;return this.Za=_,c.length!==0||v?{snapshot:new gi(this.query,e.tu,a,c,e.mutatedKeys,_===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Al,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Wf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Hf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return gi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qu="SyncEngine";class iT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sT{constructor(e){this.key=e,this.hu=!1}}class oT{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Lr((p=>af(p)),ta),this.Iu=new Map,this.Eu=new Set,this.du=new je(ae.comparator),this.Au=new Map,this.Ru=new Fu,this.Vu={},this.mu=new Map,this.fu=pi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function aT(n,e,t=!0){const r=Yf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await zf(r,e,t,!0),i}async function uT(n,e){const t=Yf(n);await zf(t,e,!0,!1)}async function zf(n,e,t,r){const i=await Rv(n.localStore,nn(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await cT(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Of(n.remoteStore,i),p}async function cT(n,e,t,r,i){n.pu=(P,V,G)=>(async function(Q,Y,J,ve){let Te=Y.view.ru(J);Te.Cs&&(Te=await _l(Q.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,Te))));const De=ve&&ve.targetChanges.get(Y.targetId),Ze=ve&&ve.targetMismatches.get(Y.targetId)!=null,qe=Y.view.applyChanges(Te,Q.isPrimaryClient,De,Ze);return Rl(Q,Y.targetId,qe.au),qe.snapshot})(n,P,V,G);const a=await _l(n.localStore,e,!0),c=new rT(e,a.Qs),p=c.ru(a.documents),_=xs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=c.applyChanges(p,n.isPrimaryClient,_);Rl(n,t,v.au);const I=new iT(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function lT(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!ta(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cu(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Bu(r.remoteStore,i.targetId),fu(r,i.targetId)})).catch(Ti)):(fu(r,i.targetId),await cu(r.localStore,i.targetId,!0))}async function hT(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(t.remoteStore,r.targetId))}async function fT(n,e,t){const r=vT(n);try{const i=await(function(c,p){const _=ge(c),v=Oe.now(),I=p.reduce(((G,W)=>G.add(W.key)),Se());let P,V;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let W=An(),Q=Se();return _.Ns.getEntries(G,I).next((Y=>{W=Y,W.forEach(((J,ve)=>{ve.isValidDocument()||(Q=Q.add(J))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,W))).next((Y=>{P=Y;const J=[];for(const ve of p){const Te=C_(ve,P.get(ve.key).overlayedDocument);Te!=null&&J.push(new cr(ve.key,Te,Jh(Te.value.mapValue),Et.exists(!0)))}return _.mutationQueue.addMutationBatch(G,v,J,p)})).next((Y=>{V=Y;const J=Y.applyToLocalDocumentSet(P,Q);return _.documentOverlayCache.saveOverlays(G,Y.batchId,J)}))})).then((()=>({batchId:V.batchId,changes:lf(P)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let v=c.Vu[c.currentUser.toKey()];v||(v=new je(be)),v=v.insert(p,_),c.Vu[c.currentUser.toKey()]=v})(r,i.batchId,t),await Os(r,i.changes),await ca(r.remoteStore)}catch(i){const a=Gu(i,"Failed to persist write");t.reject(a)}}async function Gf(n,e){const t=ge(n);try{const r=await bv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Re(c.hu,14607):i.removedDocuments.size>0&&(Re(c.hu,42227),c.hu=!1))})),await Os(t,r,e)}catch(r){await Ti(r)}}function Cl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let v=!1;_.queries.forEach(((I,P)=>{for(const V of P.Sa)V.va(p)&&(v=!0)})),v&&Ku(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dT(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new je(ae.comparator);c=c.insert(a,pt.newNoDocument(a,pe.min()));const p=Se().add(a),_=new oa(pe.min(),new Map,new je(be),c,p);await Gf(r,_),r.du=r.du.remove(a),r.Au.delete(e),Xu(r)}else await cu(r.localStore,e,!1).then((()=>fu(r,e,t))).catch(Ti)}async function pT(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await Av(t.localStore,e);Qf(t,r,null),Kf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Os(t,i)}catch(i){await Ti(i)}}async function gT(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let I;return _.mutationQueue.lookupMutationBatch(v,p).next((P=>(Re(P!==null,37113),I=P.keys(),_.mutationQueue.removeMutationBatch(v,P)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I))).next((()=>_.localDocuments.getDocuments(v,I)))}))})(r.localStore,e);Qf(r,e,t),Kf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Os(r,i)}catch(i){await Ti(i)}}function Kf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Qf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function fu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Xf(n,r)}))}function Xf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Bu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Xu(n))}function Rl(n,e,t){for(const r of t)r instanceof Hf?(n.Ru.addReference(r.key,e),mT(n,r)):r instanceof Wf?(re(Qu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Xf(n,r.key)):le(19791,{wu:r})}function mT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Qu,"New document in limbo: "+t),n.Eu.add(r),Xu(n))}function Xu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(xe.fromString(e)),r=n.fu.next();n.Au.set(r,new sT(t)),n.du=n.du.insert(t,r),Of(n.remoteStore,new Qn(nn(xu(t.path)),r,"TargetPurposeLimboResolution",Jo.ce))}}async function Os(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const I=v?!v.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(v){i.push(v);const I=ju.As(_.targetId,v);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,v){const I=ge(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>z.forEach(v,(V=>z.forEach(V.Es,(G=>I.persistence.referenceDelegate.addReference(P,V.targetId,G))).next((()=>z.forEach(V.ds,(G=>I.persistence.referenceDelegate.removeReference(P,V.targetId,G)))))))))}catch(P){if(!Ei(P))throw P;re(qu,"Failed to update sequence numbers: "+P)}for(const P of v){const V=P.targetId;if(!P.fromCache){const G=I.Ms.get(V),W=G.snapshotVersion,Q=G.withLastLimboFreeSnapshotVersion(W);I.Ms=I.Ms.insert(V,Q)}}})(r.localStore,a))}async function yT(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re(Qu,"User change. New user:",e.toKey());const r=await Df(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ee(H.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Os(t,r.Ls)}}function _T(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let i=Se();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Yf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_T.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dT.bind(null,e),e.Pu.H_=tT.bind(null,e.eventManager),e.Pu.yu=nT.bind(null,e.eventManager),e}function vT(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gT.bind(null,e),e}class Wo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=aa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Iv(this.persistence,new Tv,e.initialUser,this.serializer)}Cu(e){return new kf(Uu.mi,this.serializer)}Du(e){return new kv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wo.provider={build:()=>new Wo};class TT extends Wo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Re(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new kf((r=>$o.mi(r,t)),this.serializer)}}class du{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yT.bind(null,this.syncEngine),await Jv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new eT})()}createDatastore(e){const t=aa(e.databaseInfo.databaseId),r=(function(a){return new Ov(a)})(e.databaseInfo);return(function(a,c,p,_){return new Uv(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new qv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cl(this.syncEngine,t,0)),(function(){return El.v()?new El:new Dv})())}createSyncEngine(e,t){return(function(i,a,c,p,_,v,I){const P=new oT(i,a,c,p,_,v);return I&&(P.gu=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(Or,"RemoteStore shutting down."),r.Ea.add(5),await Vs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}du.provider={build:()=>new du};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="FirestoreClient";class ET{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(or,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(or,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ba(n,e){n.asyncQueue.verifyOperationInProgress(),re(or,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Df(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wT(n);re(or,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Il(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Il(e.remoteStore,i))),n._onlineComponents=e}async function wT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(or,"Using user provided OfflineComponentProvider");try{await Ba(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;li("Error using user provided cache. Falling back to memory cache: "+t),await Ba(n,new Wo)}}else re(or,"Using default OfflineComponentProvider"),await Ba(n,new TT(void 0));return n._offlineComponents}async function Zf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(or,"Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):(re(or,"Using default OnlineComponentProvider"),await Pl(n,new du))),n._onlineComponents}function IT(n){return Zf(n).then((e=>e.syncEngine))}async function ed(n){const e=await Zf(n),t=e.eventManager;return t.onListen=aT.bind(null,e.syncEngine),t.onUnlisten=lT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hT.bind(null,e.syncEngine),t}function AT(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Jf({next:V=>{I.Nu(),c.enqueueAndForget((()=>Bf(a,P)));const G=V.docs.has(p);!G&&V.fromCache?v.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&V.fromCache&&_&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new $f(xu(p.path),I,{includeMetadataChanges:!0,qa:!0});return qf(a,P)})(await ed(n),n.asyncQueue,e,t,r))),r.promise}function bT(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Jf({next:V=>{I.Nu(),c.enqueueAndForget((()=>Bf(a,P))),V.fromCache&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new $f(p,I,{includeMetadataChanges:!0,qa:!0});return qf(a,P)})(await ed(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="firestore.googleapis.com",Dl=!0;class Nl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nd,this.ssl=Dl}else this.host=e.host,this.ssl=e.ssl??Dl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rv)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class la{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Py;switch(r.type){case"firstParty":return new xy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=kl.get(t);r&&(re("ComponentProvider","Removing Datastore"),kl.delete(t),r.terminate())})(this),Promise.resolve()}}function ST(n,e,t,r={}){n=Bt(n,la);const i=mi(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(Hl(`https://${p}`),Wl("Firestore",!0)),a.host!==nd&&a.host!==p&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!kr(_,c)&&(n._setSettings(_),r.mockUserToken)){let v,I;if(typeof r.mockUserToken=="string")v=r.mockUserToken,I=dt.MOCK_USER;else{v=jd(r.mockUserToken,n._app?.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new dt(P)}n._authCredentials=new ky(new jh(v,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class Ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ks(t,Ge._jsonSchema))return new Ge(e,r||null,new ae(xe.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Ye("string",Ge._jsonSchemaVersion),referencePath:Ye("string")};class er extends Fr{constructor(e,t,r){super(e,t,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new ae(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function YT(n,e,...t){if(n=Be(n),qh("collection","path",e),n instanceof la){const r=xe.fromString(e,...t);return Wc(r),new er(n,null,r)}{if(!(n instanceof Ge||n instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Wc(r),new er(n.firestore,null,r)}}function JT(n,e,...t){if(n=Be(n),arguments.length===1&&(e=Cu.newId()),qh("doc","path",e),n instanceof la){const r=xe.fromString(e,...t);return Hc(r),new Ge(n,null,new ae(r))}{if(!(n instanceof Ge||n instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Hc(r),new Ge(n.firestore,n instanceof er?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="AsyncQueue";class Vl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xf(this,"async_queue_retry"),this._c=()=>{const r=qa();r&&re(xl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=qa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Tn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ei(e))throw e;re(xl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,In("INTERNAL UNHANDLED ERROR: ",Ol(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=zu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&le(47125,{Pc:Ol(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ur extends la{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Vl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function CT(n,e){const t=typeof n=="object"?n:Ql(),r=typeof n=="string"?n:Lo,i=yu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Fd("firestore");a&&ST(i,...a)}return i}function ha(n){if(n._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RT(n),n._firestoreClient}function RT(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new Yy(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,td(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ET(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(ut.fromBase64String(e))}catch(t){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ks(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Ye("string",Nt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(ks(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ye("string",sn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ks(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new on(e.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:Ye("string",on._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=/^__.*__$/;class kT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ns(e,this.data,t,this.fieldTransforms)}}class rd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function id(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:n})}}class Yu{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return zo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(id(this.Ac)&&PT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||aa(e)}Cc(e,t,r,i=!1){return new Yu({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function da(n){const e=n._freezeSettings(),t=aa(n._databaseId);return new DT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sd(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Zu("Data must be an object, but it was:",c,r);const p=ud(r,c);let _,v;if(a.merge)_=new bt(c.fieldMask),v=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const P of a.mergeFields){const V=pu(e,P,t);if(!c.contains(V))throw new ee(H.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);ld(I,V)||I.push(V)}_=new bt(I),v=c.fieldTransforms.filter((P=>_.covers(P.field)))}else _=null,v=c.fieldTransforms;return new kT(new Tt(p),_,v)}class pa extends fa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pa}}class Ju extends fa{_toFieldTransform(e){return new I_(e.path,new Es)}isEqual(e){return e instanceof Ju}}function od(n,e,t,r){const i=n.Cc(1,e,t);Zu("Data must be an object, but it was:",i,r);const a=[],c=Tt.empty();ur(r,((_,v)=>{const I=ec(e,_,t);v=Be(v);const P=i.yc(I);if(v instanceof pa)a.push(I);else{const V=Ms(v,P);V!=null&&(a.push(I),c.set(I,V))}}));const p=new bt(a);return new rd(c,p,i.fieldTransforms)}function ad(n,e,t,r,i,a){const c=n.Cc(1,e,t),p=[pu(e,r,t)],_=[i];if(a.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<a.length;V+=2)p.push(pu(e,a[V])),_.push(a[V+1]);const v=[],I=Tt.empty();for(let V=p.length-1;V>=0;--V)if(!ld(v,p[V])){const G=p[V];let W=_[V];W=Be(W);const Q=c.yc(G);if(W instanceof pa)v.push(G);else{const Y=Ms(W,Q);Y!=null&&(v.push(G),I.set(G,Y))}}const P=new bt(v);return new rd(I,P,c.fieldTransforms)}function NT(n,e,t,r=!1){return Ms(t,n.Cc(r?4:3,e))}function Ms(n,e){if(cd(n=Be(n)))return Zu("Unsupported field value:",e,n),ud(n,e);if(n instanceof fa)return(function(r,i){if(!id(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Ms(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return T_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Oe.fromDate(r);return{timestampValue:Bo(i.serializer,a)}}if(r instanceof Oe){const a=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(i.serializer,a)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:wf(i.serializer,r._byteString)};if(r instanceof Ge){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Mu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof on)return(function(c,p){return{mapValue:{fields:{[Xh]:{stringValue:Yh},[Mo]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return Vu(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Yo(r)}`)})(n,e)}function ud(n,e){const t={};return Hh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,((r,i)=>{const a=Ms(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function cd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof sn||n instanceof Nt||n instanceof Ge||n instanceof fa||n instanceof on)}function Zu(n,e,t){if(!cd(t)||!Bh(t)){const r=Yo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function pu(n,e,t){if((e=Be(e))instanceof Ls)return e._internalPath;if(typeof e=="string")return ec(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}const xT=new RegExp("[~\\*/\\[\\]]");function ec(n,e,t){if(e.search(xT)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ls(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ee(H.INVALID_ARGUMENT,p+n+_)}function ld(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VT extends hd{data(){return super.data()}}function tc(n,e){return typeof e=="string"?ec(n,e):e instanceof Ls?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nc{}class fd extends nc{}function ZT(n,e,...t){let r=[];e instanceof nc&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof rc)).length,p=a.filter((_=>_ instanceof ga)).length;if(c>1||c>0&&p>0)throw new ee(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class ga extends fd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ga(e,t,r)}_apply(e){const t=this._parse(e);return dd(e._query,t),new Fr(e.firestore,e.converter,iu(e._query,t))}_parse(e){const t=da(e.firestore);return(function(a,c,p,_,v,I,P){let V;if(v.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ee(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Ml(P,I);const W=[];for(const Q of P)W.push(Ll(_,a,Q));V={arrayValue:{values:W}}}else V=Ll(_,a,P)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Ml(P,I),V=NT(p,c,P,I==="in"||I==="not-in");return Xe.create(v,I,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function eE(n,e,t){const r=e,i=tc("where",n);return ga._create(i,r,t)}class rc extends nc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:$t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)dd(c,_),c=iu(c,_)})(e._query,t),new Fr(e.firestore,e.converter,iu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ic extends fd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ic(e,t,r)}_apply(e){return new Fr(e.firestore,e.converter,jo(e._query,this._limit,this._limitType))}}function tE(n){return jy("limit",n),ic._create("limit",n,"F")}function Ll(n,e,t){if(typeof(t=Be(t))=="string"){if(t==="")throw new ee(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!of(e)&&t.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(xe.fromString(t));if(!ae.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zc(n,new ae(r))}if(t instanceof Ge)return Zc(n,t._key);throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yo(t)}.`)}function Ml(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dd(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LT{convertValue(e,t="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Mo].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new on(t)}convertGeoPoint(e){return new sn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const t=nr(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Re(Rf(r),9688,{name:e});const i=new vs(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||In(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends hd{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:Ye("string",Pr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class bo extends Pr{data(e={}){return super.data(e)}}class ai{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new us(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bo(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new bo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new us(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new bo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new us(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,I=-1;return p.type!==0&&(v=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:MT(p.type),doc:_,oldIndex:v,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n){n=Bt(n,Ge);const e=Bt(n.firestore,Ur);return AT(ha(e),n._key).then((t=>FT(e,n,t)))}ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:Ye("string",ai._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class gd extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}function rE(n){n=Bt(n,Fr);const e=Bt(n.firestore,Ur),t=ha(e),r=new gd(e);return OT(n._query),bT(t,n._query).then((i=>new ai(e,r,n,i)))}function iE(n,e,t){n=Bt(n,Ge);const r=Bt(n.firestore,Ur),i=pd(n.converter,e,t);return ma(r,[sd(da(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Et.none())])}function sE(n,e,t,...r){n=Bt(n,Ge);const i=Bt(n.firestore,Ur),a=da(i);let c;return c=typeof(e=Be(e))=="string"||e instanceof Ls?ad(a,"updateDoc",n._key,e,t,r):od(a,"updateDoc",n._key,e),ma(i,[c.toMutation(n._key,Et.exists(!0))])}function oE(n){return ma(Bt(n.firestore,Ur),[new sa(n._key,Et.none())])}function ma(n,e){return(function(r,i){const a=new Tn;return r.asyncQueue.enqueueAndForget((async()=>fT(await IT(r),i,a))),a.promise})(ha(n),e)}function FT(n,e,t){const r=t.docs.get(e._key),i=new gd(n);return new Pr(n,i,e._key,r,new us(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=da(e)}set(e,t,r){this._verifyNotCommitted();const i=$a(e,this._firestore),a=pd(i.converter,t,r),c=sd(this._dataReader,"WriteBatch.set",i._key,a,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,Et.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const a=$a(e,this._firestore);let c;return c=typeof(t=Be(t))=="string"||t instanceof Ls?ad(this._dataReader,"WriteBatch.update",a._key,t,r,i):od(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(c.toMutation(a._key,Et.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$a(e,this._firestore);return this._mutations=this._mutations.concat(new sa(t._key,Et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $a(n,e){if((n=Be(n)).firestore!==e)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function aE(){return new Ju("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){return ha(n=Bt(n,Ur)),new UT(n,(e=>ma(n,e)))}(function(e,t=!0){(function(i){vi=i})(yi),ui(new Dr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Ur(new Dy(r.getProvider("auth-internal")),new Vy(c,r.getProvider("app-check-internal")),(function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(v.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Jn(jc,qc,e),Jn(jc,qc,"esm2020")})();const jT={apiKey:"AIzaSyAvl97egeN85l_94HfsQFKlHJIfOuAz0u8",authDomain:"coffeehawka.firebaseapp.com",projectId:"coffeehawka",storageBucket:"coffeehawka.firebasestorage.app",messagingSenderId:"632813959707",appId:"1:632813959707:web:76412d4f87aa15ded496be"},md=Kl(jT),cE=Cy(md),lE=CT(md);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=ye(r).data("tema").split("|");ye("html").attr("data-theme",i),ye('meta[name="theme-color"]').length?ye('meta[name="theme-color"]').attr("content",a):ye("<meta>",{name:"theme-color",content:a}).appendTo("head"),yd("wiTema",`${i}|${a}`,720),ye(".mtha").removeClass("mtha"),ye(r).addClass("mtha")},t=()=>{ye(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=_d("wiTema"),i=ye(`[data-tema="${r}"]`)[0]||ye(".mtha")[0]||ye("[data-tema]").first()[0];i&&e(i),ye(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return ye(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const hE=(()=>{const n=()=>{const e=new Date;ye(".wty").text(e.getFullYear()),ye(".wtu").text(e.toLocaleString()),ye(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),ye(".abwc").toggleClass("dpn")})};return ye(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})(),fE=n=>{ye("#loading-style").length||ye("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#ffd105,#1e3a8a,#ffd105);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),ye(".loading").length||ye("body").append('<div class="loading" style="display:none"></div>'),ye(".loading").toggle(!!n)},dE=n=>{const e=n==="smiletop"?"smiletop.html":"smile.html";window.location.href=new URL(e,window.location.href).toString()};function pE(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};ye("#notificationsContainer").length||ye("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=ye(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);ye("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const gE=n=>{const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)},mE=(n,e="success")=>{ye(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=ye(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${c}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function yd(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function _d(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),qT(n),null}}function qT(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function yE(n,e,t){ye(window).on("beforeunload",function(){ye(n).each(function(){const r=ye(this),i=r.attr(e);i&&yd(i,t(r),168)})})}function _E(n,e,t){ye(n).each(function(){const r=ye(this),i=r.attr(e),a=_d(i);i&&a!=null&&t(r,a)})}function BT(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,c=a?"top":t;if(ye("#witip-styles").length||ye('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return ye(n).each((Ze,qe)=>BT(qe,e,t,r)),ye(n);const p=ye(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),ye(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=ye("<div>",{class:`witip ${c} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),ye("body").append(v);const{left:I,top:P,right:V,bottom:G,width:W,height:Q}=p[0].getBoundingClientRect(),Y=v.outerWidth(),J=v.outerHeight(),ve={top:{x:I+W/2-Y/2,y:P-J-8},bottom:{x:I+W/2-Y/2,y:G+8},left:{x:I-Y-8,y:P+Q/2-J/2},right:{x:V+8,y:P+Q/2-J/2}};let{x:Te,y:De}=ve[c];return Te=Math.max(8,Math.min(Te,window.innerWidth-Y-8)),De=Math.max(8,Math.min(De,window.innerHeight-J-8)),v.css({left:Te,top:De}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}const vE=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),c=t.getMonth(),p=t.getDate();return(i<c||i===c&&a<p)&&r--,r};export{ye as $,fE as A,oE as B,uE as C,yE as D,_E as E,sE as F,mE as M,pE as N,lE as a,rE as b,YT as c,JT as d,eE as e,HT as f,nE as g,cE as h,iE as i,aE as j,gE as k,yd as l,dE as m,WT as n,$T as o,vE as p,ZT as q,qT as r,zT as s,_d as t,GT as u,tE as v,BT as w,KT as x,QT as y,hE as z};
