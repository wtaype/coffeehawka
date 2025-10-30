(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Ad(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var po={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var bd=po.exports,uc;function Sd(){return uc||(uc=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:bd,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,v={},I=v.toString,P=v.hasOwnProperty,V=P.toString,G=V.call(Object),z={},Q=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},J=e.document,ve={type:!0,src:!0,nonce:!0,noModule:!0};function Ee(s,u,h){h=h||J;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in ve)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function De(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[I.call(s)]||"object":typeof s}var Ze="3.7.1",qe=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:Ze,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,E=arguments[0]||{},R=1,A=arguments.length,N=!1;for(typeof E=="boolean"&&(N=E,E=arguments[R]||{},R++),typeof E!="object"&&!Q(E)&&(E={}),R===A&&(E=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||E===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=E[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,E[u]=l.extend(N,y,d)):d!==void 0&&(E[u]=d));return E},l.extend({expando:"jQuery"+(Ze+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=P.call(u,"constructor")&&u.constructor,typeof h=="function"&&V.call(h)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){Ee(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!qe.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,E=s.length,R=!h;y<E;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,E=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&E.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&E.push(m);return c(E)},guid:1,support:z}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){v["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=De(s);return Q(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var x=r.pop,D=r.sort,M=r.splice,b="[\\x20\\t\\r\\n\\f]",Ge=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var un=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ma(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(un,ma)};var Nt=J,bn=p;(function(){var s,u,h,d,m,y=bn,E,R,A,N,q,B=l.expando,U=0,X=0,se=ro(),Te=ro(),me=ro(),Me=ro(),o=function(w,k){return w===k&&(m=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",g="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",T="\\["+b+"*("+g+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+g+"))|)"+b+"*\\]",L=":("+g+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+T+")*)|.*)\\)|)",O=new RegExp(b+"+","g"),K=new RegExp("^"+b+"*,"+b+"*"),fe=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Ue=new RegExp(b+"|>"),_e=new RegExp(L),Fe=new RegExp("^"+g+"$"),$e={ID:new RegExp("^#("+g+")"),CLASS:new RegExp("^\\.("+g+")"),TAG:new RegExp("^("+g+"|[*])"),ATTR:new RegExp("^"+T),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},lt=/^(?:input|select|textarea|button)$/i,st=/^h\d$/i,He=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,jn=/[+~]/,At=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),gn=function(w,k){var F="0x"+w.slice(1)-65536;return k||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},yd=function(){qn()},_d=so(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function vd(){try{return E.activeElement}catch{}}try{y.apply(r=a.call(Nt.childNodes),Nt.childNodes),r[Nt.childNodes.length].nodeType}catch{y={apply:function(k,F){bn.apply(k,a.call(F))},call:function(k){bn.apply(k,a.call(arguments,1))}}}function Pe(w,k,F,j){var $,Z,te,oe,ne,we,he,de=k&&k.ownerDocument,Ie=k?k.nodeType:9;if(F=F||[],typeof w!="string"||!w||Ie!==1&&Ie!==9&&Ie!==11)return F;if(!j&&(qn(k),k=k||E,A)){if(Ie!==11&&(ne=He.exec(w)))if($=ne[1]){if(Ie===9)if(te=k.getElementById($)){if(te.id===$)return y.call(F,te),F}else return F;else if(de&&(te=de.getElementById($))&&Pe.contains(k,te)&&te.id===$)return y.call(F,te),F}else{if(ne[2])return y.apply(F,k.getElementsByTagName(w)),F;if(($=ne[3])&&k.getElementsByClassName)return y.apply(F,k.getElementsByClassName($)),F}if(!Me[w+" "]&&(!N||!N.test(w))){if(he=w,de=k,Ie===1&&(Ue.test(w)||fe.test(w))){for(de=jn.test(w)&&ba(k.parentNode)||k,(de!=k||!z.scope)&&((oe=k.getAttribute("id"))?oe=l.escapeSelector(oe):k.setAttribute("id",oe=B)),we=ts(w),Z=we.length;Z--;)we[Z]=(oe?"#"+oe:":scope")+" "+io(we[Z]);he=we.join(",")}try{return y.apply(F,de.querySelectorAll(he)),F}catch{Me(w,!0)}finally{oe===B&&k.removeAttribute("id")}}}return ac(w.replace(Ge,"$1"),k,F,j)}function ro(){var w=[];function k(F,j){return w.push(F+" ")>u.cacheLength&&delete k[w.shift()],k[F+" "]=j}return k}function Ft(w){return w[B]=!0,w}function Qr(w){var k=E.createElement("fieldset");try{return!!w(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function Ed(w){return function(k){return S(k,"input")&&k.type===w}}function Td(w){return function(k){return(S(k,"input")||S(k,"button"))&&k.type===w}}function sc(w){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===w:k.disabled===w:k.isDisabled===w||k.isDisabled!==!w&&_d(k)===w:k.disabled===w:"label"in k?k.disabled===w:!1}}function br(w){return Ft(function(k){return k=+k,Ft(function(F,j){for(var $,Z=w([],F.length,k),te=Z.length;te--;)F[$=Z[te]]&&(F[$]=!(j[$]=F[$]))})})}function ba(w){return w&&typeof w.getElementsByTagName<"u"&&w}function qn(w){var k,F=w?w.ownerDocument||w:Nt;return F==E||F.nodeType!==9||!F.documentElement||(E=F,R=E.documentElement,A=!l.isXMLDoc(E),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&Nt!=E&&(k=E.defaultView)&&k.top!==k&&k.addEventListener("unload",yd),z.getById=Qr(function(j){return R.appendChild(j).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),z.disconnectedMatch=Qr(function(j){return q.call(j,"*")}),z.scope=Qr(function(){return E.querySelectorAll(":scope")}),z.cssHas=Qr(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),z.getById?(u.filter.ID=function(j){var $=j.replace(At,gn);return function(Z){return Z.getAttribute("id")===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z=$.getElementById(j);return Z?[Z]:[]}}):(u.filter.ID=function(j){var $=j.replace(At,gn);return function(Z){var te=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return te&&te.value===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z,te,oe,ne=$.getElementById(j);if(ne){if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne];for(oe=$.getElementsByName(j),te=0;ne=oe[te++];)if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne]}return[]}}),u.find.TAG=function(j,$){return typeof $.getElementsByTagName<"u"?$.getElementsByTagName(j):$.querySelectorAll(j)},u.find.CLASS=function(j,$){if(typeof $.getElementsByClassName<"u"&&A)return $.getElementsByClassName(j)},N=[],Qr(function(j){var $;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+f+")"),j.querySelectorAll("[id~="+B+"-]").length||N.push("~="),j.querySelectorAll("a#"+B+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),$=E.createElement("input"),$.setAttribute("type","hidden"),j.appendChild($).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),$=E.createElement("input"),$.setAttribute("name",""),j.appendChild($),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),z.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),o=function(j,$){if(j===$)return m=!0,0;var Z=!j.compareDocumentPosition-!$.compareDocumentPosition;return Z||(Z=(j.ownerDocument||j)==($.ownerDocument||$)?j.compareDocumentPosition($):1,Z&1||!z.sortDetached&&$.compareDocumentPosition(j)===Z?j===E||j.ownerDocument==Nt&&Pe.contains(Nt,j)?-1:$===E||$.ownerDocument==Nt&&Pe.contains(Nt,$)?1:d?_.call(d,j)-_.call(d,$):0:Z&4?-1:1)}),E}Pe.matches=function(w,k){return Pe(w,null,null,k)},Pe.matchesSelector=function(w,k){if(qn(w),A&&!Me[k+" "]&&(!N||!N.test(k)))try{var F=q.call(w,k);if(F||z.disconnectedMatch||w.document&&w.document.nodeType!==11)return F}catch{Me(k,!0)}return Pe(k,E,null,[w]).length>0},Pe.contains=function(w,k){return(w.ownerDocument||w)!=E&&qn(w),l.contains(w,k)},Pe.attr=function(w,k){(w.ownerDocument||w)!=E&&qn(w);var F=u.attrHandle[k.toLowerCase()],j=F&&P.call(u.attrHandle,k.toLowerCase())?F(w,k,!A):void 0;return j!==void 0?j:w.getAttribute(k)},Pe.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var k,F=[],j=0,$=0;if(m=!z.sortStable,d=!z.sortStable&&a.call(w,0),D.call(w,o),m){for(;k=w[$++];)k===w[$]&&(j=F.push($));for(;j--;)M.call(w,F[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Ft,match:$e,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(At,gn),w[3]=(w[3]||w[4]||w[5]||"").replace(At,gn),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Pe.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Pe.error(w[0]),w},PSEUDO:function(w){var k,F=!w[6]&&w[2];return $e.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":F&&_e.test(F)&&(k=ts(F,!0))&&(k=F.indexOf(")",F.length-k)-F.length)&&(w[0]=w[0].slice(0,k),w[2]=F.slice(0,k)),w.slice(0,3))}},filter:{TAG:function(w){var k=w.replace(At,gn).toLowerCase();return w==="*"?function(){return!0}:function(F){return S(F,k)}},CLASS:function(w){var k=se[w+" "];return k||(k=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&se(w,function(F){return k.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(w,k,F){return function(j){var $=Pe.attr(j,w);return $==null?k==="!=":k?($+="",k==="="?$===F:k==="!="?$!==F:k==="^="?F&&$.indexOf(F)===0:k==="*="?F&&$.indexOf(F)>-1:k==="$="?F&&$.slice(-F.length)===F:k==="~="?(" "+$.replace(O," ")+" ").indexOf(F)>-1:k==="|="?$===F||$.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(w,k,F,j,$){var Z=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",oe=k==="of-type";return j===1&&$===0?function(ne){return!!ne.parentNode}:function(ne,we,he){var de,Ie,ue,Ne,_t,ht=Z!==te?"nextSibling":"previousSibling",kt=ne.parentNode,Jt=oe&&ne.nodeName.toLowerCase(),Xr=!he&&!oe,yt=!1;if(kt){if(Z){for(;ht;){for(ue=ne;ue=ue[ht];)if(oe?S(ue,Jt):ue.nodeType===1)return!1;_t=ht=w==="only"&&!_t&&"nextSibling"}return!0}if(_t=[te?kt.firstChild:kt.lastChild],te&&Xr){for(Ie=kt[B]||(kt[B]={}),de=Ie[w]||[],Ne=de[0]===U&&de[1],yt=Ne&&de[2],ue=Ne&&kt.childNodes[Ne];ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop();)if(ue.nodeType===1&&++yt&&ue===ne){Ie[w]=[U,Ne,yt];break}}else if(Xr&&(Ie=ne[B]||(ne[B]={}),de=Ie[w]||[],Ne=de[0]===U&&de[1],yt=Ne),yt===!1)for(;(ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop())&&!((oe?S(ue,Jt):ue.nodeType===1)&&++yt&&(Xr&&(Ie=ue[B]||(ue[B]={}),Ie[w]=[U,yt]),ue===ne)););return yt-=$,yt===j||yt%j===0&&yt/j>=0}}},PSEUDO:function(w,k){var F,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Pe.error("unsupported pseudo: "+w);return j[B]?j(k):j.length>1?(F=[w,w,"",k],u.setFilters.hasOwnProperty(w.toLowerCase())?Ft(function($,Z){for(var te,oe=j($,k),ne=oe.length;ne--;)te=_.call($,oe[ne]),$[te]=!(Z[te]=oe[ne])}):function($){return j($,0,F)}):j}},pseudos:{not:Ft(function(w){var k=[],F=[],j=Pa(w.replace(Ge,"$1"));return j[B]?Ft(function($,Z,te,oe){for(var ne,we=j($,null,oe,[]),he=$.length;he--;)(ne=we[he])&&($[he]=!(Z[he]=ne))}):function($,Z,te){return k[0]=$,j(k,null,te,F),k[0]=null,!F.pop()}}),has:Ft(function(w){return function(k){return Pe(w,k).length>0}}),contains:Ft(function(w){return w=w.replace(At,gn),function(k){return(k.textContent||l.text(k)).indexOf(w)>-1}}),lang:Ft(function(w){return Fe.test(w||"")||Pe.error("unsupported lang: "+w),w=w.replace(At,gn).toLowerCase(),function(k){var F;do if(F=A?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return F=F.toLowerCase(),F===w||F.indexOf(w+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(w){var k=e.location&&e.location.hash;return k&&k.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===vd()&&E.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:sc(!1),disabled:sc(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return st.test(w.nodeName)},input:function(w){return lt.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var k;return S(w,"input")&&w.type==="text"&&((k=w.getAttribute("type"))==null||k.toLowerCase()==="text")},first:br(function(){return[0]}),last:br(function(w,k){return[k-1]}),eq:br(function(w,k,F){return[F<0?F+k:F]}),even:br(function(w,k){for(var F=0;F<k;F+=2)w.push(F);return w}),odd:br(function(w,k){for(var F=1;F<k;F+=2)w.push(F);return w}),lt:br(function(w,k,F){var j;for(F<0?j=F+k:F>k?j=k:j=F;--j>=0;)w.push(j);return w}),gt:br(function(w,k,F){for(var j=F<0?F+k:F;++j<k;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=Ed(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Td(s);function oc(){}oc.prototype=u.filters=u.pseudos,u.setFilters=new oc;function ts(w,k){var F,j,$,Z,te,oe,ne,we=Te[w+" "];if(we)return k?0:we.slice(0);for(te=w,oe=[],ne=u.preFilter;te;){(!F||(j=K.exec(te)))&&(j&&(te=te.slice(j[0].length)||te),oe.push($=[])),F=!1,(j=fe.exec(te))&&(F=j.shift(),$.push({value:F,type:j[0].replace(Ge," ")}),te=te.slice(F.length));for(Z in u.filter)(j=$e[Z].exec(te))&&(!ne[Z]||(j=ne[Z](j)))&&(F=j.shift(),$.push({value:F,type:Z,matches:j}),te=te.slice(F.length));if(!F)break}return k?te.length:te?Pe.error(w):Te(w,oe).slice(0)}function io(w){for(var k=0,F=w.length,j="";k<F;k++)j+=w[k].value;return j}function so(w,k,F){var j=k.dir,$=k.next,Z=$||j,te=F&&Z==="parentNode",oe=X++;return k.first?function(ne,we,he){for(;ne=ne[j];)if(ne.nodeType===1||te)return w(ne,we,he);return!1}:function(ne,we,he){var de,Ie,ue=[U,oe];if(he){for(;ne=ne[j];)if((ne.nodeType===1||te)&&w(ne,we,he))return!0}else for(;ne=ne[j];)if(ne.nodeType===1||te)if(Ie=ne[B]||(ne[B]={}),$&&S(ne,$))ne=ne[j]||ne;else{if((de=Ie[Z])&&de[0]===U&&de[1]===oe)return ue[2]=de[2];if(Ie[Z]=ue,ue[2]=w(ne,we,he))return!0}return!1}}function Sa(w){return w.length>1?function(k,F,j){for(var $=w.length;$--;)if(!w[$](k,F,j))return!1;return!0}:w[0]}function wd(w,k,F){for(var j=0,$=k.length;j<$;j++)Pe(w,k[j],F);return F}function oo(w,k,F,j,$){for(var Z,te=[],oe=0,ne=w.length,we=k!=null;oe<ne;oe++)(Z=w[oe])&&(!F||F(Z,j,$))&&(te.push(Z),we&&k.push(oe));return te}function Ca(w,k,F,j,$,Z){return j&&!j[B]&&(j=Ca(j)),$&&!$[B]&&($=Ca($,Z)),Ft(function(te,oe,ne,we){var he,de,Ie,ue,Ne=[],_t=[],ht=oe.length,kt=te||wd(k||"*",ne.nodeType?[ne]:ne,[]),Jt=w&&(te||!k)?oo(kt,Ne,w,ne,we):kt;if(F?(ue=$||(te?w:ht||j)?[]:oe,F(Jt,ue,ne,we)):ue=Jt,j)for(he=oo(ue,_t),j(he,[],ne,we),de=he.length;de--;)(Ie=he[de])&&(ue[_t[de]]=!(Jt[_t[de]]=Ie));if(te){if($||w){if($){for(he=[],de=ue.length;de--;)(Ie=ue[de])&&he.push(Jt[de]=Ie);$(null,ue=[],he,we)}for(de=ue.length;de--;)(Ie=ue[de])&&(he=$?_.call(te,Ie):Ne[de])>-1&&(te[he]=!(oe[he]=Ie))}}else ue=oo(ue===oe?ue.splice(ht,ue.length):ue),$?$(null,oe,ue,we):y.apply(oe,ue)})}function Ra(w){for(var k,F,j,$=w.length,Z=u.relative[w[0].type],te=Z||u.relative[" "],oe=Z?1:0,ne=so(function(de){return de===k},te,!0),we=so(function(de){return _.call(k,de)>-1},te,!0),he=[function(de,Ie,ue){var Ne=!Z&&(ue||Ie!=h)||((k=Ie).nodeType?ne(de,Ie,ue):we(de,Ie,ue));return k=null,Ne}];oe<$;oe++)if(F=u.relative[w[oe].type])he=[so(Sa(he),F)];else{if(F=u.filter[w[oe].type].apply(null,w[oe].matches),F[B]){for(j=++oe;j<$&&!u.relative[w[j].type];j++);return Ca(oe>1&&Sa(he),oe>1&&io(w.slice(0,oe-1).concat({value:w[oe-2].type===" "?"*":""})).replace(Ge,"$1"),F,oe<j&&Ra(w.slice(oe,j)),j<$&&Ra(w=w.slice(j)),j<$&&io(w))}he.push(F)}return Sa(he)}function Id(w,k){var F=k.length>0,j=w.length>0,$=function(Z,te,oe,ne,we){var he,de,Ie,ue=0,Ne="0",_t=Z&&[],ht=[],kt=h,Jt=Z||j&&u.find.TAG("*",we),Xr=U+=kt==null?1:Math.random()||.1,yt=Jt.length;for(we&&(h=te==E||te||we);Ne!==yt&&(he=Jt[Ne])!=null;Ne++){if(j&&he){for(de=0,!te&&he.ownerDocument!=E&&(qn(he),oe=!A);Ie=w[de++];)if(Ie(he,te||E,oe)){y.call(ne,he);break}we&&(U=Xr)}F&&((he=!Ie&&he)&&ue--,Z&&_t.push(he))}if(ue+=Ne,F&&Ne!==ue){for(de=0;Ie=k[de++];)Ie(_t,ht,te,oe);if(Z){if(ue>0)for(;Ne--;)_t[Ne]||ht[Ne]||(ht[Ne]=x.call(ne));ht=oo(ht)}y.apply(ne,ht),we&&!Z&&ht.length>0&&ue+k.length>1&&l.uniqueSort(ne)}return we&&(U=Xr,h=kt),_t};return F?Ft($):$}function Pa(w,k){var F,j=[],$=[],Z=me[w+" "];if(!Z){for(k||(k=ts(w)),F=k.length;F--;)Z=Ra(k[F]),Z[B]?j.push(Z):$.push(Z);Z=me(w,Id($,j)),Z.selector=w}return Z}function ac(w,k,F,j){var $,Z,te,oe,ne,we=typeof w=="function"&&w,he=!j&&ts(w=we.selector||w);if(F=F||[],he.length===1){if(Z=he[0]=he[0].slice(0),Z.length>2&&(te=Z[0]).type==="ID"&&k.nodeType===9&&A&&u.relative[Z[1].type]){if(k=(u.find.ID(te.matches[0].replace(At,gn),k)||[])[0],k)we&&(k=k.parentNode);else return F;w=w.slice(Z.shift().value.length)}for($=$e.needsContext.test(w)?0:Z.length;$--&&(te=Z[$],!u.relative[oe=te.type]);)if((ne=u.find[oe])&&(j=ne(te.matches[0].replace(At,gn),jn.test(Z[0].type)&&ba(k.parentNode)||k))){if(Z.splice($,1),w=j.length&&io(Z),!w)return y.apply(F,j),F;break}}return(we||Pa(w,he))(j,k,!A,F,!k||jn.test(w)&&ba(k.parentNode)||k),F}z.sortStable=B.split("").sort(o).join("")===B,qn(),z.sortDetached=Qr(function(w){return w.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Pe,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Pe.compile=Pa,Pe.select=ac,Pe.setDocument=qn,Pe.tokenize=ts,Pe.escape=l.escapeSelector,Pe.getText=l.text,Pe.isXML=l.isXMLDoc,Pe.selectors=l.expr,Pe.support=l.support,Pe.uniqueSort=l.uniqueSort})();var xt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Ms=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},wi=l.expr.match.needsContext,Ii=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ur(s,u,h){return Q(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Ur(this,s||[],!1))},not:function(s){return this.pushStack(Ur(this,s||[],!0))},is:function(s){return!!Ur(this,typeof s=="string"&&wi.test(s)?l(s):s||[],!1).length}});var cr,Ai=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,bi=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||cr,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Ai.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),Ii.test(d[1])&&l.isPlainObject(u))for(d in u)Q(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=J.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(Q(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};bi.prototype=l.fn,cr=l(J);var Si=/^(?:parents|prev(?:Until|All))/,Ci={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],E=typeof s!="string"&&l(s);if(!wi.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(E?E.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Ri(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return xt(s,"parentNode")},parentsUntil:function(s,u,h){return xt(s,"parentNode",h)},next:function(s){return Ri(s,"nextSibling")},prev:function(s){return Ri(s,"previousSibling")},nextAll:function(s){return xt(s,"nextSibling")},prevAll:function(s){return xt(s,"previousSibling")},nextUntil:function(s,u,h){return xt(s,"nextSibling",h)},prevUntil:function(s,u,h){return xt(s,"previousSibling",h)},siblings:function(s){return Ms((s.parentNode||{}).firstChild,s)},children:function(s){return Ms(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(Ci[s]||l.uniqueSort(m),Si.test(s)&&m.reverse()),this.pushStack(m)}});var St=/[^\x20\t\r\n\f]+/g;function ya(s){var u={};return l.each(s.match(St)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?ya(s):l.extend({},s);var u,h,d,m,y=[],E=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;E.length;R=-1)for(h=E.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},N={add:function(){return y&&(h&&!u&&(R=y.length-1,E.push(h)),(function q(B){l.each(B,function(U,X){Q(X)?(!s.unique||!N.has(X))&&y.push(X):X&&X.length&&De(X)!=="string"&&q(X)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,B){for(var U;(U=l.inArray(B,y,U))>-1;)y.splice(U,1),U<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=E=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=E=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],E.push(B),u||A()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function cn(s){return s}function Sn(s){throw s}function Pi(s,u,h,d){var m;try{s&&Q(m=s.promise)?m.call(s).done(u).fail(h):s&&Q(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(E){l.each(u,function(R,A){var N=Q(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=N&&N.apply(this,arguments);q&&Q(q.promise)?q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[A[0]+"With"](this,N?[q]:arguments)})}),y=null}).promise()},then:function(y,E,R){var A=0;function N(q,B,U,X){return function(){var se=this,Te=arguments,me=function(){var o,f;if(!(q<A)){if(o=U.apply(se,Te),o===B.promise())throw new TypeError("Thenable self-resolution");f=o&&(typeof o=="object"||typeof o=="function")&&o.then,Q(f)?X?f.call(o,N(A,B,cn,X),N(A,B,Sn,X)):(A++,f.call(o,N(A,B,cn,X),N(A,B,Sn,X),N(A,B,cn,B.notifyWith))):(U!==cn&&(se=void 0,Te=[o]),(X||B.resolveWith)(se,Te))}},Me=X?me:function(){try{me()}catch(o){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(o,Me.error),q+1>=A&&(U!==Sn&&(se=void 0,Te=[o]),B.rejectWith(se,Te))}};q?Me():(l.Deferred.getErrorHook?Me.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Me.error=l.Deferred.getStackHook()),e.setTimeout(Me))}}return l.Deferred(function(q){u[0][3].add(N(0,q,Q(R)?R:cn,q.notifyWith)),u[1][3].add(N(0,q,Q(y)?y:cn)),u[2][3].add(N(0,q,Q(E)?E:Sn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,E){var R=E[2],A=E[5];d[E[1]]=R.add,A&&R.add(function(){h=A},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(E[3].fire),m[E[0]]=function(){return m[E[0]+"With"](this===m?void 0:this,arguments),this},m[E[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),E=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||y.resolveWith(d,m)}};if(u<=1&&(Pi(s,y.done(E(h)).resolve,y.reject,!u),y.state()==="pending"||Q(m[h]&&m[h].then)))return y.then();for(;h--;)Pi(m[h],E(h),y.reject);return y.promise()}});var _a=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&_a.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var lr=l.Deferred();l.fn.ready=function(s){return lr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&lr.resolveWith(J,[l]))}}),l.ready.then=lr.then;function Cn(){J.removeEventListener("DOMContentLoaded",Cn),e.removeEventListener("load",Cn),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",Cn),e.addEventListener("load",Cn));var Ct=function(s,u,h,d,m,y,E){var R=0,A=s.length,N=h==null;if(De(h)==="object"){m=!0;for(R in h)Ct(s,u,R,h[R],!0,y,E)}else if(d!==void 0&&(m=!0,Q(d)||(E=!0),N&&(E?(u.call(s,d),u=null):(N=u,u=function(q,B,U){return N.call(l(q),U)})),u))for(;R<A;R++)u(s[R],h,E?d:d.call(s[R],R,u(s[R],h)));return m?s:N?u.call(s):A?u(s[0],h):y},et=/^-ms-/,rt=/-([a-z])/g;function jr(s,u){return u.toUpperCase()}function Rt(s){return s.replace(et,"ms-").replace(rt,jr)}var Rn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function hr(){this.expando=l.expando+hr.uid++}hr.uid=1,hr.prototype={cache:function(s){var u=s[this.expando];return u||(u={},Rn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Rt(u)]=h;else for(d in u)m[Rt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Rt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Rt):(u=Rt(u),u=u in d?[u]:u.match(St)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new hr,it=new hr,Fs=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ki=/[A-Z]/g;function va(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Fs.test(s)?JSON.parse(s):s}function Us(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(ki,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=va(h)}catch{}it.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return it.hasData(s)||ie.hasData(s)},data:function(s,u,h){return it.access(s,u,h)},removeData:function(s,u){it.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],E=y&&y.attributes;if(s===void 0){if(this.length&&(m=it.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=E.length;h--;)E[h]&&(d=E[h].name,d.indexOf("data-")===0&&(d=Rt(d.slice(5)),Us(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){it.set(this,s)}):Ct(this,function(R){var A;if(y&&R===void 0)return A=it.get(y,s),A!==void 0||(A=Us(y,s),A!==void 0)?A:void 0;this.each(function(){it.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){it.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),E=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,E,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,E=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";E--;)h=ie.get(y[E],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var Di=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pn=new RegExp("^(?:([+-])=|)("+Di+")([a-z%]*)$","i"),mt=["Top","Right","Bottom","Left"],Vt=J.documentElement,Ht=function(s){return l.contains(s.ownerDocument,s)},ln={composed:!0};Vt.getRootNode&&(Ht=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(ln)===s.ownerDocument});var fr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&Ht(s)&&l.css(s,"display")==="none"};function dr(s,u,h,d){var m,y,E=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),N=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||N!=="px"&&+A)&&Pn.exec(l.css(s,u));if(q&&q[3]!==N){for(A=A/2,N=N||q[3],q=+A||1;E--;)l.style(s,u,q+N),(1-y)*(1-(y=R()/A||.5))<=0&&(E=0),q=q/y;q=q*2,l.style(s,u,q+N),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var Ni={};function pr(s){var u,h=s.ownerDocument,d=s.nodeName,m=Ni[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Ni[d]=m,m)}function hn(s,u){for(var h,d,m=[],y=0,E=s.length;y<E;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&fr(d)&&(m[y]=pr(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<E;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return hn(this,!0)},hide:function(){return hn(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){fr(this)?l(this).show():l(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,xi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,kn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),z.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",z.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",z.option=!!u.lastChild})();var tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};tt.tbody=tt.tfoot=tt.colgroup=tt.caption=tt.thead,tt.th=tt.td,z.option||(tt.optgroup=tt.option=[1,"<select multiple='multiple'>","</select>"]);function ct(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Vi(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var Dn=/<|&#?\w+;/;function js(s,u,h,d,m){for(var y,E,R,A,N,q,B=u.createDocumentFragment(),U=[],X=0,se=s.length;X<se;X++)if(y=s[X],y||y===0)if(De(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!Dn.test(y))U.push(u.createTextNode(y));else{for(E=E||B.appendChild(u.createElement("div")),R=(xi.exec(y)||["",""])[1].toLowerCase(),A=tt[R]||tt._default,E.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)E=E.lastChild;l.merge(U,E.childNodes),E=B.firstChild,E.textContent=""}for(B.textContent="",X=0;y=U[X++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(N=Ht(y),E=ct(B.appendChild(y),"script"),N&&Vi(E),h)for(q=0;y=E[q++];)kn.test(y.type||"")&&h.push(y)}return B}var qs=/^([^.]*)(?:\.(.+)|)/;function Ot(){return!0}function fn(){return!1}function qr(s,u,h,d,m,y){var E,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)qr(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=fn;else if(!m)return s;return y===1&&(E=m,m=function(A){return l().off(A),E.apply(this,arguments)},m.guid=E.guid||(E.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,E,R,A,N,q,B,U,X,se,Te,me=ie.get(s);if(Rn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Vt,m),h.guid||(h.guid=l.guid++),(A=me.events)||(A=me.events=Object.create(null)),(E=me.handle)||(E=me.handle=function(Me){return typeof l<"u"&&l.event.triggered!==Me.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(St)||[""],N=u.length;N--;)R=qs.exec(u[N])||[],X=Te=R[1],se=(R[2]||"").split(".").sort(),X&&(B=l.event.special[X]||{},X=(m?B.delegateType:B.bindType)||X,B=l.event.special[X]||{},q=l.extend({type:X,origType:Te,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:se.join(".")},y),(U=A[X])||(U=A[X]=[],U.delegateCount=0,(!B.setup||B.setup.call(s,d,se,E)===!1)&&s.addEventListener&&s.addEventListener(X,E)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,q):U.push(q),l.event.global[X]=!0)},remove:function(s,u,h,d,m){var y,E,R,A,N,q,B,U,X,se,Te,me=ie.hasData(s)&&ie.get(s);if(!(!me||!(A=me.events))){for(u=(u||"").match(St)||[""],N=u.length;N--;){if(R=qs.exec(u[N])||[],X=Te=R[1],se=(R[2]||"").split(".").sort(),!X){for(X in A)l.event.remove(s,X+u[N],h,d,!0);continue}for(B=l.event.special[X]||{},X=(d?B.delegateType:B.bindType)||X,U=A[X]||[],R=R[2]&&new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=y=U.length;y--;)q=U[y],(m||Te===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(U.splice(y,1),q.selector&&U.delegateCount--,B.remove&&B.remove.call(s,q));E&&!U.length&&((!B.teardown||B.teardown.call(s,se,me.handle)===!1)&&l.removeEvent(s,X,me.handle),delete A[X])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,E,R=new Array(arguments.length),A=l.event.fix(s),N=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(E=l.event.handlers.call(this,A,N),u=0;(m=E[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,y,E,R=[],A=u.delegateCount,N=s.target;if(A&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(y=[],E={},h=0;h<A;h++)d=u[h],m=d.selector+" ",E[m]===void 0&&(E[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),E[m]&&y.push(d);y.length&&R.push({elem:N,handlers:y})}}return N=this,A<u.length&&R.push({elem:N,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:Q(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return Be.test(u.type)&&u.click&&S(u,"input")&&Nn(u,"click",!0),!1},trigger:function(s){var u=this||s;return Be.test(u.type)&&u.click&&S(u,"input")&&Nn(u,"click"),!0},_default:function(s){var u=s.target;return Be.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Nn(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,Ot);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Ot)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ot:fn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:fn,isPropagationStopped:fn,isImmediatePropagationStopped:fn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ot,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ot,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ot,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(J.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Nn(this,s,!0),J.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return Nn(this,s),!0},teardown:function(){var d;if(J.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u);y||(J.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(J.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,E=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=E.origType,d=E.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return qr(this,s,u,h,d)},one:function(s,u,h,d){return qr(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=fn),this.each(function(){l.event.remove(this,s,h,u)})}});var gr=/<script|<style|<link/i,Ea=/checked\s*(?:[^=]|=\s*.checked.)/i,zt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Oi(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Bs(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Li(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Br(s,u){var h,d,m,y,E,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),A=y.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}it.hasData(s)&&(E=it.access(s),R=l.extend({},E),it.set(u,R))}}function $s(s,u){var h=u.nodeName.toLowerCase();h==="input"&&Be.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function xn(s,u,h,d){u=c(u);var m,y,E,R,A,N,q=0,B=s.length,U=B-1,X=u[0],se=Q(X);if(se||B>1&&typeof X=="string"&&!z.checkClone&&Ea.test(X))return s.each(function(Te){var me=s.eq(Te);se&&(u[0]=X.call(this,Te,me.html())),xn(me,u,h,d)});if(B&&(m=js(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(E=l.map(ct(m,"script"),Bs),R=E.length;q<B;q++)A=m,q!==U&&(A=l.clone(A,!0,!0),R&&l.merge(E,ct(A,"script"))),h.call(s[q],A,q);if(R)for(N=E[E.length-1].ownerDocument,l.map(E,Li),q=0;q<R;q++)A=E[q],kn.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(N,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},N):Ee(A.textContent.replace(zt,""),A,N))}return s}function Mi(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(ct(d)),d.parentNode&&(h&&Ht(d)&&Vi(ct(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,E,R=s.cloneNode(!0),A=Ht(s);if(!z.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(E=ct(R),y=ct(s),d=0,m=y.length;d<m;d++)$s(y[d],E[d]);if(u)if(h)for(y=y||ct(s),E=E||ct(R),d=0,m=y.length;d<m;d++)Br(y[d],E[d]);else Br(s,R);return E=ct(R,"script"),E.length>0&&Vi(E,!A&&ct(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(Rn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[it.expando]&&(h[it.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Mi(this,s,!0)},remove:function(s){return Mi(this,s)},text:function(s){return Ct(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return xn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Oi(this,s);u.appendChild(s)}})},prepend:function(){return xn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Oi(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return xn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return xn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(ct(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return Ct(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!gr.test(u)&&!tt[(xi.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(ct(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return xn(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(ct(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),E=y.length-1,R=0;R<=E;R++)d=R===E?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var Fi=new RegExp("^("+Di+")(?!px)[a-z%]+$","i"),Vn=/^--/,mr=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},$r=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},yr=new RegExp(mt.join("|"),"i");(function(){function s(){if(N){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Vt.appendChild(A).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",R=u(q.marginLeft)===12,N.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,N.style.position="absolute",m=u(N.offsetWidth/3)===12,Vt.removeChild(A),N=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,E,R,A=J.createElement("div"),N=J.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",z.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(z,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,U,X;return E==null&&(q=J.createElement("table"),B=J.createElement("tr"),U=J.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",U.style.height="9px",U.style.display="block",Vt.appendChild(q).appendChild(B).appendChild(U),X=e.getComputedStyle(B),E=parseInt(X.height,10)+parseInt(X.borderTopWidth,10)+parseInt(X.borderBottomWidth,10)===B.offsetHeight,Vt.removeChild(q)),E}}))})();function wt(s,u,h){var d,m,y,E,R=Vn.test(u),A=s.style;return h=h||mr(s),h&&(E=h.getPropertyValue(u)||h[u],R&&E&&(E=E.replace(Ge,"$1")||void 0),E===""&&!Ht(s)&&(E=l.style(s,u)),!z.pixelBoxStyles()&&Fi.test(E)&&yr.test(u)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=E,E=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),E!==void 0?E+"":E}function Hr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Hs=["Webkit","Moz","ms"],Ui=J.createElement("div").style,ji={};function zs(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Hs.length;h--;)if(s=Hs[h]+u,s in Ui)return s}function _r(s){var u=l.cssProps[s]||ji[s];return u||(s in Ui?s:ji[s]=zs(s)||s)}var qi=/^(none|table(?!-c[ea]).+)/,Ws={position:"absolute",visibility:"hidden",display:"block"},Bi={letterSpacing:"0",fontWeight:"400"};function $i(s,u,h){var d=Pn.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function Hi(s,u,h,d,m,y){var E=u==="width"?1:0,R=0,A=0,N=0;if(h===(d?"border":"content"))return 0;for(;E<4;E+=2)h==="margin"&&(N+=l.css(s,h+mt[E],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+mt[E],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+mt[E]+"Width",!0,m))):(A+=l.css(s,"padding"+mt[E],!0,m),h!=="padding"?A+=l.css(s,"border"+mt[E]+"Width",!0,m):R+=l.css(s,"border"+mt[E]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-A-R-.5))||0),A+N}function Lt(s,u,h){var d=mr(s),m=!z.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",E=y,R=wt(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(Fi.test(R)){if(!h)return R;R="auto"}return(!z.boxSizingReliable()&&y||!z.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",E=A in s,E&&(R=s[A])),R=parseFloat(R)||0,R+Hi(s,u,h||(y?"border":"content"),E,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=wt(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,E,R=Rt(u),A=Vn.test(u),N=s.style;if(A||(u=_r(R)),E=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=Pn.exec(h))&&m[1]&&(h=dr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!z.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(N[u]="inherit"),(!E||!("set"in E)||(h=E.set(s,h,d))!==void 0)&&(A?N.setProperty(u,h):N[u]=h)}else return E&&"get"in E&&(m=E.get(s,!1,d))!==void 0?m:N[u]}},css:function(s,u,h,d){var m,y,E,R=Rt(u),A=Vn.test(u);return A||(u=_r(R)),E=l.cssHooks[u]||l.cssHooks[R],E&&"get"in E&&(m=E.get(s,!0,h)),m===void 0&&(m=wt(s,u,d)),m==="normal"&&u in Bi&&(m=Bi[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return qi.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?$r(h,Ws,function(){return Lt(h,u,m)}):Lt(h,u,m)},set:function(h,d,m){var y,E=mr(h),R=!z.scrollboxSize()&&E.position==="absolute",A=R||m,N=A&&l.css(h,"boxSizing",!1,E)==="border-box",q=m?Hi(h,u,m,N,E):0;return N&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(E[u])-Hi(h,u,"border",!1,E)-.5)),q&&(y=Pn.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),$i(h,d,q)}}}),l.cssHooks.marginLeft=Hr(z.reliableMarginLeft,function(s,u){if(u)return(parseFloat(wt(s,"marginLeft"))||s.getBoundingClientRect().left-$r(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+mt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=$i)}),l.fn.extend({css:function(s,u){return Ct(this,function(h,d,m){var y,E,R={},A=0;if(Array.isArray(d)){for(y=mr(h),E=d.length;A<E;A++)R[d[A]]=l.css(h,d[A],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function Ve(s,u,h,d,m){return new Ve.prototype.init(s,u,h,d,m)}l.Tween=Ve,Ve.prototype={constructor:Ve,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=Ve.propHooks[this.prop];return s&&s.get?s.get(this):Ve.propHooks._default.get(this)},run:function(s){var u,h=Ve.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Ve.propHooks._default.set(this),this}},Ve.prototype.init.prototype=Ve.prototype,Ve.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[_r(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ve.propHooks.scrollTop=Ve.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Ve.prototype.init,l.fx.step={};var Pt,Wt,zi=/^(?:toggle|show|hide)$/,ke=/queueHooks$/;function On(){Wt&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(On):e.setTimeout(On,l.fx.interval),l.fx.tick())}function Ln(){return e.setTimeout(function(){Pt=void 0}),Pt=Date.now()}function Gt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=mt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Gs(s,u,h){for(var d,m=(It.tweeners[u]||[]).concat(It.tweeners["*"]),y=0,E=m.length;y<E;y++)if(d=m[y].call(h,u,s))return d}function Ks(s,u,h){var d,m,y,E,R,A,N,q,B="width"in u||"height"in u,U=this,X={},se=s.style,Te=s.nodeType&&fr(s),me=ie.get(s,"fxshow");h.queue||(E=l._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,R=E.empty.fire,E.empty.fire=function(){E.unqueued||R()}),E.unqueued++,U.always(function(){U.always(function(){E.unqueued--,l.queue(s,"fx").length||E.empty.fire()})}));for(d in u)if(m=u[d],zi.test(m)){if(delete u[d],y=y||m==="toggle",m===(Te?"hide":"show"))if(m==="show"&&me&&me[d]!==void 0)Te=!0;else continue;X[d]=me&&me[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(X))){B&&s.nodeType===1&&(h.overflow=[se.overflow,se.overflowX,se.overflowY],N=me&&me.display,N==null&&(N=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(hn([s],!0),N=s.style.display||N,q=l.css(s,"display"),hn([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(A||(U.done(function(){se.display=N}),N==null&&(q=se.display,N=q==="none"?"":q)),se.display="inline-block")),h.overflow&&(se.overflow="hidden",U.always(function(){se.overflow=h.overflow[0],se.overflowX=h.overflow[1],se.overflowY=h.overflow[2]})),A=!1;for(d in X)A||(me?"hidden"in me&&(Te=me.hidden):me=ie.access(s,"fxshow",{display:N}),y&&(me.hidden=!Te),Te&&hn([s],!0),U.done(function(){Te||hn([s]),ie.remove(s,"fxshow");for(d in X)l.style(s,d,X[d])})),A=Gs(Te?me[d]:0,d,U),d in me||(me[d]=A.start,Te&&(A.end=A.start,A.start=0))}}function Ta(s,u){var h,d,m,y,E;for(h in s)if(d=Rt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),E=l.cssHooks[d],E&&"expand"in E){y=E.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function It(s,u,h){var d,m,y=0,E=It.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var B=Pt||Ln(),U=Math.max(0,N.startTime+N.duration-B),X=U/N.duration||0,se=1-X,Te=0,me=N.tweens.length;Te<me;Te++)N.tweens[Te].run(se);return R.notifyWith(s,[N,se,U]),se<1&&me?U:(me||R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N]),!1)},N=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:Pt||Ln(),duration:h.duration,tweens:[],createTween:function(B,U){var X=l.Tween(s,N.opts,B,U,N.opts.specialEasing[B]||N.opts.easing);return N.tweens.push(X),X},stop:function(B){var U=0,X=B?N.tweens.length:0;if(m)return this;for(m=!0;U<X;U++)N.tweens[U].run(1);return B?(R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N,B])):R.rejectWith(s,[N,B]),this}}),q=N.props;for(Ta(q,N.opts.specialEasing);y<E;y++)if(d=It.prefilters[y].call(N,s,q,N.opts),d)return Q(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Gs,N),Q(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(It,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return dr(h.elem,s,Pn.exec(u),h),h}]},tweener:function(s,u){Q(s)?(u=s,s=["*"]):s=s.match(St);for(var h,d=0,m=s.length;d<m;d++)h=s[d],It.tweeners[h]=It.tweeners[h]||[],It.tweeners[h].unshift(u)},prefilters:[Ks],prefilter:function(s,u){u?It.prefilters.unshift(s):It.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||Q(s)&&s,duration:s,easing:h&&u||u&&!Q(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){Q(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(fr).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),E=function(){var R=It(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return E.finish=E,m||y.queue===!1?this.each(E):this.queue(y.queue,E)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",E=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&ke.test(y)&&d(R[y]);for(y=E.length;y--;)E[y].elem===this&&(s==null||E[y].queue===s)&&(E[y].anim.stop(h),m=!1,E.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,E=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<E;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(Gt(u,!0),d,m,y)}}),l.each({slideDown:Gt("show"),slideUp:Gt("hide"),slideToggle:Gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(Pt=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),Pt=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Wt||(Wt=!0,On())},l.fx.stop=function(){Wt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",z.checkOn=s.value!=="",z.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",z.radioValue=s.value==="t"})();var Qs,vr=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return Ct(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Qs:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!z.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(St);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),Qs={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=vr[u]||l.find.attr;vr[u]=function(d,m,y){var E,R,A=m.toLowerCase();return y||(R=vr[A],vr[A]=E,E=h(d,m,y)!=null?A:null,vr[A]=R),E}});var Er=/^(?:input|select|textarea|button)$/i,dn=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return Ct(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):Er.test(s.nodeName)||dn.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),z.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Kt(s){var u=s.match(St)||[];return u.join(" ")}function Qt(s){return s.getAttribute&&s.getAttribute("class")||""}function zr(s){return Array.isArray(s)?s:typeof s=="string"?s.match(St)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,E;return Q(s)?this.each(function(R){l(this).addClass(s.call(this,R,Qt(this)))}):(u=zr(s),u.length?this.each(function(){if(d=Qt(this),h=this.nodeType===1&&" "+Kt(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");E=Kt(h),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var u,h,d,m,y,E;return Q(s)?this.each(function(R){l(this).removeClass(s.call(this,R,Qt(this)))}):arguments.length?(u=zr(s),u.length?this.each(function(){if(d=Qt(this),h=this.nodeType===1&&" "+Kt(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");E=Kt(h),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,E=typeof s,R=E==="string"||Array.isArray(s);return Q(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,Qt(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=zr(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||E==="boolean")&&(d=Qt(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Kt(Qt(h))+" ").indexOf(u)>-1)return!0;return!1}});var Xs=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=Q(s),this.each(function(y){var E;this.nodeType===1&&(d?E=s.call(this,y,l(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,E,"value")===void 0)&&(this.value=E))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(Xs,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??Kt(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,E=s.type==="select-one",R=E?null:[],A=E?y+1:m.length;for(y<0?d=A:d=E?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),E)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),E=m.length;E--;)d=m[E],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},z.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Mn=e.location,pn={guid:Date.now()},Wi=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Ys=/^(?:focusinfocus|focusoutblur)$/,Js=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,E,R,A,N,q,B,U=[h||J],X=P.call(s,"type")?s.type:s,se=P.call(s,"namespace")?s.namespace.split("."):[];if(y=B=E=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!Ys.test(X+l.event.triggered)&&(X.indexOf(".")>-1&&(se=X.split("."),X=se.shift(),se.sort()),A=X.indexOf(":")<0&&"on"+X,s=s[l.expando]?s:new l.Event(X,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=se.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[X]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||X,Ys.test(R+X)||(y=y.parentNode);y;y=y.parentNode)U.push(y),E=y;E===(h.ownerDocument||J)&&U.push(E.defaultView||E.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||X,N=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),N&&N.apply(y,u),N=A&&y[A],N&&N.apply&&Rn(y)&&(s.result=N.apply(y,u),s.result===!1&&s.preventDefault());return s.type=X,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(U.pop(),u)===!1)&&Rn(h)&&A&&Q(h[X])&&!Y(h)&&(E=h[A],E&&(h[A]=null),l.event.triggered=X,s.isPropagationStopped()&&B.addEventListener(X,Js),h[X](),s.isPropagationStopped()&&B.removeEventListener(X,Js),l.event.triggered=void 0,E&&(h[A]=E)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Xt=/\[\]$/,Zs=/\r?\n/g,Gi=/^(?:submit|button|image|reset|file)$/i,Wr=/^(?:input|select|textarea|keygen)/i;function Gr(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,E){h||Xt.test(s)?d(s,E):Gr(s+"["+(typeof E=="object"&&E!=null?y:"")+"]",E,h,d)});else if(!h&&De(u)==="object")for(m in u)Gr(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,E){var R=Q(E)?E():E;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Gr(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Wr.test(this.nodeName)&&!Gi.test(s)&&(this.checked||!Be.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(Zs,`\r
`)}}):{name:u.name,value:h.replace(Zs,`\r
`)}}).get()}});var Tr=/%20/g,wr=/#.*$/,eo=/([?&])_=[^&]*/,Ki=/^(.*?):[ \t]*([^\r\n]*)$/mg,Le=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,wa=/^(?:GET|HEAD)$/,Ia=/^\/\//,Qi={},Kr={},Xi="*/".concat("*"),Fn=J.createElement("a");Fn.href=Mn.href;function Mt(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(St)||[];if(Q(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Yi(s,u,h,d){var m={},y=s===Kr;function E(R){var A;return m[R]=!0,l.each(s[R]||[],function(N,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),E(B),!1;if(y)return!(A=B)}),A}return E(u.dataTypes[0])||!m["*"]&&E("*")}function Ji(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function Ir(s,u,h){for(var d,m,y,E,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}E||(E=m)}y=y||E}if(y)return y!==A[0]&&A.unshift(y),h[y]}function to(s,u,h,d){var m,y,E,R,A,N={},q=s.dataTypes.slice();if(q[1])for(E in s.converters)N[E.toLowerCase()]=s.converters[E];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(E=N[A+" "+y]||N["* "+y],!E){for(m in N)if(R=m.split(" "),R[1]===y&&(E=N[A+" "+R[0]]||N["* "+R[0]],E)){E===!0?E=N[m]:N[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(E!==!0)if(E&&s.throws)u=E(u);else try{u=E(u)}catch(B){return{state:"parsererror",error:E?B:"No conversion from "+A+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Mn.href,type:"GET",isLocal:Le.test(Mn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Ji(Ji(s,l.ajaxSettings),u):Ji(l.ajaxSettings,s)},ajaxPrefilter:Mt(Qi),ajaxTransport:Mt(Kr),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,E,R,A,N,q,B,U=l.ajaxSetup({},u),X=U.context||U,se=U.context&&(X.nodeType||X.jquery)?l(X):l.event,Te=l.Deferred(),me=l.Callbacks("once memory"),Me=U.statusCode||{},o={},f={},g="canceled",T={readyState:0,getResponseHeader:function(O){var K;if(A){if(!y)for(y={};K=Ki.exec(m);)y[K[1].toLowerCase()+" "]=(y[K[1].toLowerCase()+" "]||[]).concat(K[2]);K=y[O.toLowerCase()+" "]}return K==null?null:K.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(O,K){return A==null&&(O=f[O.toLowerCase()]=f[O.toLowerCase()]||O,o[O]=K),this},overrideMimeType:function(O){return A==null&&(U.mimeType=O),this},statusCode:function(O){var K;if(O)if(A)T.always(O[T.status]);else for(K in O)Me[K]=[Me[K],O[K]];return this},abort:function(O){var K=O||g;return h&&h.abort(K),L(0,K),this}};if(Te.promise(T),U.url=((s||U.url||Mn.href)+"").replace(Ia,Mn.protocol+"//"),U.type=u.method||u.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(St)||[""],U.crossDomain==null){R=J.createElement("a");try{R.href=U.url,R.href=R.href,U.crossDomain=Fn.protocol+"//"+Fn.host!=R.protocol+"//"+R.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),Yi(Qi,U,u,T),A)return T;N=l.event&&U.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!wa.test(U.type),d=U.url.replace(wr,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(Tr,"+")):(B=U.url.slice(d.length),U.data&&(U.processData||typeof U.data=="string")&&(d+=(Wi.test(d)?"&":"?")+U.data,delete U.data),U.cache===!1&&(d=d.replace(eo,"$1"),B=(Wi.test(d)?"&":"?")+"_="+pn.guid+++B),U.url=d+B),U.ifModified&&(l.lastModified[d]&&T.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&T.setRequestHeader("If-None-Match",l.etag[d])),(U.data&&U.hasContent&&U.contentType!==!1||u.contentType)&&T.setRequestHeader("Content-Type",U.contentType),T.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+Xi+"; q=0.01":""):U.accepts["*"]);for(q in U.headers)T.setRequestHeader(q,U.headers[q]);if(U.beforeSend&&(U.beforeSend.call(X,T,U)===!1||A))return T.abort();if(g="abort",me.add(U.complete),T.done(U.success),T.fail(U.error),h=Yi(Kr,U,u,T),!h)L(-1,"No Transport");else{if(T.readyState=1,N&&se.trigger("ajaxSend",[T,U]),A)return T;U.async&&U.timeout>0&&(E=e.setTimeout(function(){T.abort("timeout")},U.timeout));try{A=!1,h.send(o,L)}catch(O){if(A)throw O;L(-1,O)}}function L(O,K,fe,Ue){var _e,Fe,$e,lt,st,He=K;A||(A=!0,E&&e.clearTimeout(E),h=void 0,m=Ue||"",T.readyState=O>0?4:0,_e=O>=200&&O<300||O===304,fe&&(lt=Ir(U,T,fe)),!_e&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),lt=to(U,lt,T,_e),_e?(U.ifModified&&(st=T.getResponseHeader("Last-Modified"),st&&(l.lastModified[d]=st),st=T.getResponseHeader("etag"),st&&(l.etag[d]=st)),O===204||U.type==="HEAD"?He="nocontent":O===304?He="notmodified":(He=lt.state,Fe=lt.data,$e=lt.error,_e=!$e)):($e=He,(O||!He)&&(He="error",O<0&&(O=0))),T.status=O,T.statusText=(K||He)+"",_e?Te.resolveWith(X,[Fe,He,T]):Te.rejectWith(X,[T,He,$e]),T.statusCode(Me),Me=void 0,N&&se.trigger(_e?"ajaxSuccess":"ajaxError",[T,U,_e?Fe:$e]),me.fireWith(X,[T,He]),N&&(se.trigger("ajaxComplete",[T,U]),--l.active||l.event.trigger("ajaxStop")))}return T},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return Q(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(Q(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return Q(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=Q(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Zi={0:200,1223:204},Yt=l.ajaxSettings.xhr();z.cors=!!Yt&&"withCredentials"in Yt,z.ajax=Yt=!!Yt,l.ajaxTransport(function(s){var u,h;if(z.cors||Yt&&!s.crossDomain)return{send:function(d,m){var y,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)E[y]=s.xhrFields[y];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)E.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,R==="abort"?E.abort():R==="error"?typeof E.status!="number"?m(0,"error"):m(E.status,E.statusText):m(Zi[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=u(),h=E.onerror=E.ontimeout=u("error"),E.onabort!==void 0?E.onabort=h:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{E.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var es=[],Un=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=es.pop()||l.expando+"_"+pn.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,E=s.jsonp!==!1&&(Un.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Un.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=Q(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace(Un,"$1"+d):s.jsonp!==!1&&(s.url+=(Wi.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,es.push(d)),y&&Q(m)&&m(y[0]),y=m=void 0}),"script"}),z.createHTMLDocument=(function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||(z.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=J.location.href,u.head.appendChild(d)):u=J),m=Ii.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=js([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,E=this,R=s.indexOf(" ");return R>-1&&(d=Kt(s.slice(R)),s=s.slice(0,R)),Q(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),E.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){y=arguments,E.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,N){E.each(function(){h.apply(this,y||[A.responseText,N,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,E,R,A,N,q=l.css(s,"position"),B=l(s),U={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),A=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,N?(d=B.position(),E=d.top,m=d.left):(E=parseFloat(y)||0,m=parseFloat(A)||0),Q(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(U.top=u.top-R.top+E),u.left!=null&&(U.left=u.left-R.left+m),"using"in u?u.using.call(s,U):B.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Vt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return Ct(this,function(m,y,E){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),E===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:E,h?E:R.pageYOffset):m[y]=E},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=Hr(z.pixelPosition,function(h,d){if(d)return d=wt(h,u),Fi.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var E=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return Ct(this,function(A,N,q){var B;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(B=A.documentElement,Math.max(A.body["scroll"+s],B["scroll"+s],A.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(A,N,R):l.style(A,N,q,R)},u,E?m:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var Aa=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!Q(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=Q,l.isWindow=Y,l.camelCase=Rt,l.type=De,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Aa,"$1")};var no=e.jQuery,Ar=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Ar),s&&e.jQuery===l&&(e.jQuery=no),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(po)),po.exports}var Cd=Sd();const ye=Ad(Cd),Rd=()=>{};var cc={};/**
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
 */const Fl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Pd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,v=_?n[i+2]:0,I=a>>2,P=(a&3)<<4|p>>4;let V=(p&15)<<2|v>>6,G=v&63;_||(G=64,c||(V=64)),r.push(t[I],t[P],t[V],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||P==null)throw new kd;const V=a<<2|p>>4;if(r.push(V),v!==64){const G=p<<4&240|v>>2;if(r.push(G),P!==64){const z=v<<6&192|P;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dd=function(n){const e=Fl(n);return Ul.encodeByteArray(e,!0)},bo=function(n){return Dd(n).replace(/\./g,"")},jl=function(n){try{return Ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xd=()=>Nd().__FIREBASE_DEFAULTS__,Vd=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jl(n[1]);return e&&JSON.parse(e)},zo=()=>{try{return Rd()||xd()||Vd()||Od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>zo()?.emulatorHosts?.[n],Ld=n=>{const e=ql(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Bl=()=>zo()?.config,$l=n=>zo()?.[`_${n}`];/**
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
 */class Md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function gi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bo(JSON.stringify(t)),bo(JSON.stringify(c)),""].join(".")}const us={};function Ud(){const n={prod:[],emulator:[]};for(const e of Object.keys(us))us[e]?n.emulator.push(e):n.prod.push(e);return n}function jd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lc=!1;function zl(n,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||us[n]===e||us[n]||lc)return;us[n]=e;function t(V){return`__firebase__banner__${V}`}const r="__firebase__banner",a=Ud().prod.length>0;function c(){const V=document.getElementById(r);V&&V.remove()}function p(V){V.style.display="flex",V.style.background="#7faaf0",V.style.position="fixed",V.style.bottom="5px",V.style.left="5px",V.style.padding=".5em",V.style.borderRadius="5px",V.style.alignItems="center"}function _(V,G){V.setAttribute("width","24"),V.setAttribute("id",G),V.setAttribute("height","24"),V.setAttribute("viewBox","0 0 24 24"),V.setAttribute("fill","none"),V.style.marginLeft="-6px"}function v(){const V=document.createElement("span");return V.style.cursor="pointer",V.style.marginLeft="16px",V.style.fontSize="24px",V.innerHTML=" &times;",V.onclick=()=>{lc=!0,c()},V}function I(V,G){V.setAttribute("id",G),V.innerText="Learn more",V.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",V.setAttribute("target","__blank"),V.style.paddingLeft="5px",V.style.textDecoration="underline"}function P(){const V=jd(r),G=t("text"),z=document.getElementById(G)||document.createElement("span"),Q=t("learnmore"),Y=document.getElementById(Q)||document.createElement("a"),J=t("preprendIcon"),ve=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(V.created){const Ee=V.element;p(Ee),I(Y,Q);const De=v();_(ve,J),Ee.append(ve,z,Y,De),document.body.appendChild(Ee)}a?(z.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Bd(){const n=zo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wd(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gd(){return!Bd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kd(){try{return typeof indexedDB=="object"}catch{return!1}}function Qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Xd="FirebaseError";class In extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xd,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?Yd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new In(i,p,r)}}function Yd(n,e){return n.replace(Jd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Jd=/\{\$([^}]+)}/g;function Zd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(hc(a)&&hc(c)){if(!Pr(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function hc(n){return n!==null&&typeof n=="object"}/**
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
 */function bs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ns(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function rs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ep(n,e){const t=new tp(n,e);return t.subscribe.bind(t)}class tp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");np(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function np(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ka(){}/**
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
 */function Ye(n){return n&&n._delegate?n._delegate:n}class kr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sr="[DEFAULT]";/**
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
 */class rp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Md;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sp(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ip(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ip(n){return n===Sr?void 0:n}function sp(n){return n.instantiationMode==="EAGER"}/**
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
 */class op{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const ap={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},up=Ae.INFO,cp={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},lp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gu{constructor(e){this.name=e,this._logLevel=up,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ap[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const hp=(n,e)=>e.some(t=>n instanceof t);let fc,dc;function fp(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,$a=new WeakMap,Gl=new WeakMap,Da=new WeakMap,mu=new WeakMap;function pp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Kn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),mu.set(e,n),e}function gp(n){if($a.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});$a.set(n,e)}let Ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $a.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mp(n){Ha=n(Ha)}function yp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Na(this),e,...t);return Gl.set(r,e.sort?e.sort():[e]),Kn(r)}:dp().includes(n)?function(...e){return n.apply(Na(this),e),Kn(Wl.get(this))}:function(...e){return Kn(n.apply(Na(this),e))}}function _p(n){return typeof n=="function"?yp(n):(n instanceof IDBTransaction&&gp(n),hp(n,fp())?new Proxy(n,Ha):n)}function Kn(n){if(n instanceof IDBRequest)return pp(n);if(Da.has(n))return Da.get(n);const e=_p(n);return e!==n&&(Da.set(n,e),mu.set(e,n)),e}const Na=n=>mu.get(n);function vp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Kn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Kn(c.result),_.oldVersion,_.newVersion,Kn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const Ep=["get","getKey","getAll","getAllKeys","count"],Tp=["put","add","delete","clear"],xa=new Map;function pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xa.get(e))return xa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Tp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ep.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let v=_.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&_.done]))[0]};return xa.set(e,a),a}mp(n=>({...n,get:(e,t,r)=>pc(e,t)||n.get(e,t,r),has:(e,t)=>!!pc(e,t)||n.has(e,t)}));/**
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
 */class wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ip(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ip(n){return n.getComponent()?.type==="VERSION"}const za="@firebase/app",gc="0.14.3";/**
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
 */const vn=new gu("@firebase/app"),Ap="@firebase/app-compat",bp="@firebase/analytics-compat",Sp="@firebase/analytics",Cp="@firebase/app-check-compat",Rp="@firebase/app-check",Pp="@firebase/auth",kp="@firebase/auth-compat",Dp="@firebase/database",Np="@firebase/data-connect",xp="@firebase/database-compat",Vp="@firebase/functions",Op="@firebase/functions-compat",Lp="@firebase/installations",Mp="@firebase/installations-compat",Fp="@firebase/messaging",Up="@firebase/messaging-compat",jp="@firebase/performance",qp="@firebase/performance-compat",Bp="@firebase/remote-config",$p="@firebase/remote-config-compat",Hp="@firebase/storage",zp="@firebase/storage-compat",Wp="@firebase/firestore",Gp="@firebase/ai",Kp="@firebase/firestore-compat",Qp="firebase",Xp="12.3.0";/**
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
 */const Wa="[DEFAULT]",Yp={[za]:"fire-core",[Ap]:"fire-core-compat",[Sp]:"fire-analytics",[bp]:"fire-analytics-compat",[Rp]:"fire-app-check",[Cp]:"fire-app-check-compat",[Pp]:"fire-auth",[kp]:"fire-auth-compat",[Dp]:"fire-rtdb",[Np]:"fire-data-connect",[xp]:"fire-rtdb-compat",[Vp]:"fire-fn",[Op]:"fire-fn-compat",[Lp]:"fire-iid",[Mp]:"fire-iid-compat",[Fp]:"fire-fcm",[Up]:"fire-fcm-compat",[jp]:"fire-perf",[qp]:"fire-perf-compat",[Bp]:"fire-rc",[$p]:"fire-rc-compat",[Hp]:"fire-gcs",[zp]:"fire-gcs-compat",[Wp]:"fire-fst",[Kp]:"fire-fst-compat",[Gp]:"fire-vertex","fire-js":"fire-js",[Qp]:"fire-js-all"};/**
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
 */const So=new Map,Jp=new Map,Ga=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ai(n){const e=n.name;if(Ga.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Ga.set(e,n);for(const t of So.values())mc(t,n);for(const t of Jp.values())mc(t,n);return!0}function yu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ut(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new As("app","Firebase",Zp);/**
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
 */class eg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=Xp;function Kl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(t||(t=Bl()),!t)throw Qn.create("no-options");const a=So.get(i);if(a){if(Pr(t,a.options)&&Pr(r,a.config))return a;throw Qn.create("duplicate-app",{appName:i})}const c=new op(i);for(const _ of Ga.values())c.addComponent(_);const p=new eg(t,r,c);return So.set(i,p),p}function Ql(n=Wa){const e=So.get(n);if(!e&&n===Wa&&Bl())return Kl();if(!e)throw Qn.create("no-app",{appName:n});return e}function Xn(n,e,t){let r=Yp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(c.join(" "));return}ai(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tg="firebase-heartbeat-database",ng=1,ps="firebase-heartbeat-store";let Va=null;function Xl(){return Va||(Va=vp(tg,ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ps)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qn.create("idb-open",{originalErrorMessage:n.message})})),Va}async function rg(n){try{const t=(await Xl()).transaction(ps),r=await t.objectStore(ps).get(Yl(n));return await t.done,r}catch(e){if(e instanceof In)vn.warn(e.message);else{const t=Qn.create("idb-get",{originalErrorMessage:e?.message});vn.warn(t.message)}}}async function yc(n,e){try{const r=(await Xl()).transaction(ps,"readwrite");await r.objectStore(ps).put(e,Yl(n)),await r.done}catch(t){if(t instanceof In)vn.warn(t.message);else{const r=Qn.create("idb-set",{originalErrorMessage:t?.message});vn.warn(r.message)}}}function Yl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ig=1024,sg=30;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ug(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_c();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>sg){const i=cg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){vn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_c(),{heartbeatsToSend:t,unsentEntries:r}=ag(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return vn.warn(e),""}}}function _c(){return new Date().toISOString().substring(0,10)}function ag(n,e=ig){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),vc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ug{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kd()?Qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vc(n){return bo(JSON.stringify({version:2,heartbeats:n})).length}function cg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function lg(n){ai(new kr("platform-logger",e=>new wp(e),"PRIVATE")),ai(new kr("heartbeat",e=>new og(e),"PRIVATE")),Xn(za,gc,n),Xn(za,gc,"esm2020"),Xn("fire-js","")}lg("");var hg="firebase",fg="12.3.0";/**
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
 */Xn(hg,fg,"app");function Jl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dg=Jl,Zl=new As("auth","Firebase",Jl());/**
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
 */const Co=new gu("@firebase/auth");function pg(n,...e){Co.logLevel<=Ae.WARN&&Co.warn(`Auth (${mi}): ${n}`,...e)}function go(n,...e){Co.logLevel<=Ae.ERROR&&Co.error(`Auth (${mi}): ${n}`,...e)}/**
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
 */function qt(n,...e){throw _u(n,...e)}function en(n,...e){return _u(n,...e)}function eh(n,e,t){const r={...dg(),[e]:t};return new As("auth","Firebase",r).create(e,{appName:n.name})}function Yn(n){return eh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _u(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zl.create(n,...e)}function ce(n,e,...t){if(!n)throw _u(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw go(e),new Error(e)}function En(n,e){n||mn(e)}/**
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
 */function Ka(){return typeof self<"u"&&self.location?.href||""}function gg(){return Ec()==="http:"||Ec()==="https:"}function Ec(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gg()||Hd()||"connection"in navigator)?navigator.onLine:!0}function yg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,En(t>e,"Short delay should be less than long delay!"),this.isMobile=qd()||zd()}get(){return mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vu(n,e){En(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class th{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _g={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Eg=new Ss(3e4,6e4);function or(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function An(n,e,t,r,i={}){return nh(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=bs({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:_,...a};return $d()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&gi(n.emulatorConfig.host)&&(v.credentials="include"),th.fetch()(await rh(n,n.config.apiHost,t,p),v)})}async function nh(n,e,t){n._canInitEmulator=!1;const r={..._g,...e};try{const i=new wg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ao(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw ao(n,"user-disabled",c);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw eh(n,I,v);qt(n,I)}}catch(i){if(i instanceof In)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function Wo(n,e,t,r,i={}){const a=await An(n,e,t,r,i);return"mfaPendingCredential"in a&&qt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function rh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?vu(n.config,i):`${n.config.apiScheme}://${i}`;return vg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function Tg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Eg.get())})}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=en(n,e,r);return i.customData._tokenResponse=t,i}function Tc(n){return n!==void 0&&n.enterprise!==void 0}class Ig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Tg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ag(n,e){return An(n,"GET","/v2/recaptchaConfig",or(n,e))}/**
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
 */async function bg(n,e){return An(n,"POST","/v1/accounts:delete",e)}async function Ro(n,e){return An(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function cs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),i=Eu(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:cs(Oa(i.auth_time)),issuedAtTime:cs(Oa(i.iat)),expirationTime:cs(Oa(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Oa(n){return Number(n)*1e3}function Eu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=jl(t);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i?.toString()),null}}function wc(n){const e=Eu(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof In&&Cg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Cg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Po(n){const e=n.auth,t=await n.getIdToken(),r=await gs(n,Ro(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?ih(i.providerUserInfo):[],c=kg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,v=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Qa(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,I)}async function Pg(n){const e=Ye(n);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ih(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Dg(n,e){const t=await nh(n,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await rh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&gi(n.emulatorConfig.host)&&(_.credentials="include"),th.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ng(n,e){return An(n,"POST","/v2/accounts:revokeToken",or(n,e))}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=wc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Dg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new ni;return r&&(ce(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(ce(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Bn(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gs(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await gs(this,bg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:P,emailVerified:V,isAnonymous:G,providerData:z,stsTokenManager:Q}=t;ce(P&&Q,e,"internal-error");const Y=ni.fromJSON(this.name,Q);ce(typeof P=="string",e,"internal-error"),Bn(r,e.name),Bn(i,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof G=="boolean",e,"internal-error"),Bn(a,e.name),Bn(c,e.name),Bn(p,e.name),Bn(_,e.name),Bn(v,e.name),Bn(I,e.name);const J=new jt({uid:P,auth:e,email:i,emailVerified:V,displayName:r,isAnonymous:G,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:v,lastLoginAt:I});return z&&Array.isArray(z)&&(J.providerData=z.map(ve=>({...ve}))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new ni;i.updateFromServerResponse(t);const a=new jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Po(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?ih(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new ni;p.updateFromIdToken(r);const _=new jt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,v),_}}/**
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
 */const Ic=new Map;function yn(n){En(n instanceof Function,"Expected a class definition");let e=Ic.get(n);return e?(En(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ic.set(n,e),e)}/**
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
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class ri{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,a),this.fullPersistenceKey=mo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ro(this.auth,{idToken:e}).catch(()=>{});return t?jt._fromGetAccountInfoResponse(this.auth,t,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ri(yn(Ac),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||yn(Ac);const c=mo(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const I=await v._get(c);if(I){let P;if(typeof I=="string"){const V=await Ro(e,{idToken:I}).catch(()=>{});if(!V)break;P=await jt._fromGetAccountInfoResponse(e,V,I)}else P=jt._fromJSON(e,I);v!==a&&(p=P),a=v;break}}catch{}const _=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new ri(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(c)}catch{}})),new ri(a,e,r))}}/**
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
 */function bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ch(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hh(e))return"Blackberry";if(fh(e))return"Webos";if(ah(e))return"Safari";if((e.includes("chrome/")||uh(e))&&!e.includes("edge/"))return"Chrome";if(lh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function oh(n=gt()){return/firefox\//i.test(n)}function ah(n=gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uh(n=gt()){return/crios\//i.test(n)}function ch(n=gt()){return/iemobile/i.test(n)}function lh(n=gt()){return/android/i.test(n)}function hh(n=gt()){return/blackberry/i.test(n)}function fh(n=gt()){return/webos/i.test(n)}function Tu(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xg(n=gt()){return Tu(n)&&!!window.navigator?.standalone}function Vg(){return Wd()&&document.documentMode===10}function dh(n=gt()){return Tu(n)||lh(n)||fh(n)||hh(n)||/windows phone/i.test(n)||ch(n)}/**
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
 */function ph(n,e=[]){let t;switch(n){case"Browser":t=bc(gt());break;case"Worker":t=`${bc(gt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mi}/${r}`}/**
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
 */class Og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Lg(n,e={}){return An(n,"GET","/v2/passwordPolicy",or(n,e))}/**
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
 */const Mg=6;class Fg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Mg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Ug{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new Og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ro(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ut(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(Yn(this));const t=e?Ye(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lg(this),t=new Fg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ng(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[yn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ph(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&pg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Vr(n){return Ye(n)}class Sc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ep(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jg(n){Go=n}function gh(n){return Go.loadJS(n)}function qg(){return Go.recaptchaEnterpriseScript}function Bg(){return Go.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Hg{constructor(){this.enterprise=new zg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Wg="recaptcha-enterprise",mh="NO_RECAPTCHA";class Gg{constructor(e){this.type=Wg,this.auth=Vr(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,p)=>{Ag(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new Ig(_);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,c(v.siteKey)}}).catch(_=>{p(_)})})}function i(a,c,p){const _=window.grecaptcha;Tc(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(v=>{c(v)}).catch(()=>{c(mh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hg().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(p=>{if(!t&&Tc(window.grecaptcha))i(p,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=qg();_.length!==0&&(_+=p),gh(_).then(()=>{i(p,a,c)}).catch(v=>{c(v)})}}).catch(p=>{c(p)})})}}async function Cc(n,e,t,r=!1,i=!1){const a=new Gg(n);let c;if(i)c=mh;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Xa(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Cc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Cc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Kg(n,e){const t=yu(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Pr(a,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function Qg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(yn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Xg(n,e,t){const r=Vr(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=yh(e),{host:c,port:p}=Yg(e),_=p===null?"":`:${p}`,v={url:`${a}//${c}${_}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Pr(v,r.config.emulator)&&Pr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,gi(c)?(Hl(`${a}//${c}${_}`),zl("Auth",!0)):Jg()}function yh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yg(n){const e=yh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Rc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Rc(c)}}}function Rc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class wu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function Zg(n,e){return An(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function em(n,e){return Wo(n,"POST","/v1/accounts:signInWithPassword",or(n,e))}async function tm(n,e){return An(n,"POST","/v1/accounts:sendOobCode",or(n,e))}async function nm(n,e){return tm(n,e)}/**
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
 */async function rm(n,e){return Wo(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}async function im(n,e){return Wo(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}/**
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
 */class ms extends wu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,t,"signInWithPassword",em);case"emailLink":return rm(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,r,"signUpPassword",Zg);case"emailLink":return im(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ii(n,e){return Wo(n,"POST","/v1/accounts:signInWithIdp",or(n,e))}/**
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
 */const sm="http://localhost";class Dr extends wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Dr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return ii(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ii(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ii(e,t)}buildRequest(){const e={requestUri:sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bs(t)}return e}}/**
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
 */function om(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function am(n){const e=ns(rs(n)).link,t=e?ns(rs(e)).deep_link_id:null,r=ns(rs(n)).deep_link_id;return(r?ns(rs(r)).link:null)||r||t||e||n}class Iu{constructor(e){const t=ns(rs(e)),r=t.apiKey??null,i=t.oobCode??null,a=om(t.mode??null);ce(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=am(e);try{return new Iu(t)}catch{return null}}}/**
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
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,t){return ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Iu.parseLink(t);return ce(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends _h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends Cs{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class zn extends Cs{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Wn extends Cs{constructor(){super("twitter.com")}static credential(e,t){return Dr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
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
 */class ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await jt._fromIdTokenResponse(e,r,i),c=Pc(r);return new ui({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Pc(r);return new ui({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Pc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ko extends In{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ko(e,t,r,i)}}function vh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(n,a,e,r):a})}async function um(n,e,t=!1){const r=await gs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ui._forOperation(n,"link",r)}/**
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
 */async function cm(n,e,t=!1){const{auth:r}=n;if(Ut(r.app))return Promise.reject(Yn(r));const i="reauthenticate";try{const a=await gs(n,vh(r,i,e,n),t);ce(a.idToken,r,"internal-error");const c=Eu(a.idToken);ce(c,r,"internal-error");const{sub:p}=c;return ce(n.uid===p,r,"user-mismatch"),ui._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),a}}/**
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
 */async function Eh(n,e,t=!1){if(Ut(n.app))return Promise.reject(Yn(n));const r="signIn",i=await vh(n,r,e),a=await ui._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function lm(n,e){return Eh(Vr(n),e)}/**
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
 */async function hm(n){const e=Vr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jE(n,e,t){const r=Vr(n);await Xa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",nm)}function qE(n,e,t){return Ut(n.app)?Promise.reject(Yn(n)):lm(Ye(n),yi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hm(n),r})}function fm(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function dm(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function BE(n,e,t,r){return Ye(n).onAuthStateChanged(e,t,r)}function $E(n){return Ye(n).signOut()}const Do="__sak";/**
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
 */class Th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pm=1e3,gm=10;class wh extends Th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Vg()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wh.type="LOCAL";const mm=wh;/**
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
 */class Ih extends Th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ih.type="SESSION";const Ah=Ih;/**
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
 */function ym(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ko(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async v=>v(t.origin,a)),_=await ym(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ko.receivers=[];/**
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
 */class _m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const v=Au("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(P){const V=P;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(V.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function tn(){return window}function vm(n){tn().location.href=n}/**
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
 */function bh(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function Em(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tm(){return navigator?.serviceWorker?.controller||null}function wm(){return bh()?self:null}/**
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
 */const Sh="firebaseLocalStorageDb",Im=1,No="firebaseLocalStorage",Ch="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([No],e?"readwrite":"readonly").objectStore(No)}function Am(){const n=indexedDB.deleteDatabase(Sh);return new Rs(n).toPromise()}function Ya(){const n=indexedDB.open(Sh,Im);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(No,{keyPath:Ch})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(No)?e(r):(r.close(),await Am(),e(await Ya()))})})}async function kc(n,e,t){const r=Qo(n,!0).put({[Ch]:e,value:t});return new Rs(r).toPromise()}async function bm(n,e){const t=Qo(n,!1).get(e),r=await new Rs(t).toPromise();return r===void 0?null:r.value}function Dc(n,e){const t=Qo(n,!0).delete(e);return new Rs(t).toPromise()}const Sm=800,Cm=3;class Rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Cm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ko._getInstance(wm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Em(),!this.activeServiceWorker)return;this.sender=new _m(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await kc(e,Do,"1"),await Dc(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>kc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Qo(i,!1).getAll();return new Rs(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rh.type="LOCAL";const Rm=Rh;new Ss(3e4,6e4);/**
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
 */function Pm(n,e){return e?yn(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bu extends wu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ii(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function km(n){return Eh(n.auth,new bu(n),n.bypassAuthState)}function Dm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),cm(t,new bu(n),n.bypassAuthState)}async function Nm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),um(t,new bu(n),n.bypassAuthState)}/**
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
 */class Ph{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return km;case"linkViaPopup":case"linkViaRedirect":return Nm;case"reauthViaPopup":case"reauthViaRedirect":return Dm;default:qt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xm=new Ss(2e3,1e4);class ti extends Ph{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xm.get())};e()}}ti.currentPopupAction=null;/**
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
 */const Vm="pendingRedirect",yo=new Map;class Om extends Ph{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await Lm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lm(n,e){const t=Um(e),r=Fm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Mm(n,e){yo.set(n._key(),e)}function Fm(n){return yn(n._redirectPersistence)}function Um(n){return mo(Vm,n.config.apiKey,n.name)}async function jm(n,e,t=!1){if(Ut(n.app))return Promise.reject(Yn(n));const r=Vr(n),i=Pm(r,e),c=await new Om(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const qm=600*1e3;class Bm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$m(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(en(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nc(e))}saveEventToCache(e){this.cachedEventUids.add(Nc(e)),this.lastProcessedEventTime=Date.now()}}function Nc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function $m(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kh(n);default:return!1}}/**
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
 */async function Hm(n,e={}){return An(n,"GET","/v1/projects",e)}/**
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
 */const zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wm=/^https?/;async function Gm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Hm(n);for(const t of e)try{if(Km(t))return}catch{}qt(n,"unauthorized-domain")}function Km(n){const e=Ka(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Wm.test(t))return!1;if(zm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Qm=new Ss(3e4,6e4);function xc(){const n=tn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xm(n){return new Promise((e,t)=>{function r(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(en(n,"network-request-failed"))},timeout:Qm.get()})}if(tn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(tn().gapi?.load)r();else{const i=$g("iframefcb");return tn()[i]=()=>{gapi.load?r():t(en(n,"network-request-failed"))},gh(`${Bg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw _o=null,e})}let _o=null;function Ym(n){return _o=_o||Xm(n),_o}/**
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
 */const Jm=new Ss(5e3,15e3),Zm="__/auth/iframe",ey="emulator/auth/iframe",ty={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ry(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vu(e,ey):`https://${n.config.authDomain}/${Zm}`,r={apiKey:e.apiKey,appName:n.name,v:mi},i=ny.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${bs(r).slice(1)}`}async function iy(n){const e=await Ym(n),t=tn().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:ry(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ty,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=en(n,"network-request-failed"),p=tn().setTimeout(()=>{a(c)},Jm.get());function _(){tn().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
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
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oy=500,ay=600,uy="_blank",cy="http://localhost";class Vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ly(n,e,t,r=oy,i=ay){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...sy,width:r.toString(),height:i.toString(),top:a,left:c},v=gt().toLowerCase();t&&(p=uh(v)?uy:t),oh(v)&&(e=e||cy,_.scrollbars="yes");const I=Object.entries(_).reduce((V,[G,z])=>`${V}${G}=${z},`,"");if(xg(v)&&p!=="_self")return hy(e||"",p),new Vc(null);const P=window.open(e||"",p,I);ce(P,n,"popup-blocked");try{P.focus()}catch{}return new Vc(P)}function hy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fy="__/auth/handler",dy="emulator/auth/handler",py=encodeURIComponent("fac");async function Oc(n,e,t,r,i,a){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mi,eventId:i};if(e instanceof _h){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Zd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,P]of Object.entries({}))c[I]=P}if(e instanceof Cs){const I=e.getScopes().filter(P=>P!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),v=_?`#${py}=${encodeURIComponent(_)}`:"";return`${gy(n)}?${bs(p).slice(1)}${v}`}function gy({config:n}){return n.emulator?vu(n,dy):`https://${n.authDomain}/${fy}`}/**
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
 */const La="webStorageSupport";class my{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ah,this._completeRedirectFn=jm,this._overrideRedirectResult=Mm}async _openPopup(e,t,r,i){En(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Oc(e,t,r,Ka(),i);return ly(e,a,Au())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Oc(e,t,r,Ka(),i);return vm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(En(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iy(e),r=new Bm(e);return t.register("authEvent",i=>(ce(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(La,{type:La},i=>{const a=i?.[0]?.[La];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||ah()||Tu()}}const yy=my;var Lc="@firebase/auth",Mc="1.11.0";/**
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
 */class _y{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ey(n){ai(new kr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;ce(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ph(n)},v=new Ug(r,i,a,_);return Qg(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ai(new kr("auth-internal",e=>{const t=Vr(e.getProvider("auth").getImmediate());return(r=>new _y(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Lc,Mc,vy(n)),Xn(Lc,Mc,"esm2020")}/**
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
 */const Ty=300,wy=$l("authIdTokenMaxAge")||Ty;let Fc=null;const Iy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wy)return;const i=t?.token;Fc!==i&&(Fc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ay(n=Ql()){const e=yu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Kg(n,{popupRedirectResolver:yy,persistence:[Rm,mm,Ah]}),r=$l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Iy(a.toString());dm(t,c,()=>c(t.currentUser)),fm(t,p=>c(p))}}const i=ql("auth");return i&&Xg(t,`http://${i}`),t}function by(){return document.getElementsByTagName("head")?.[0]??document}jg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=en("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",by().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ey("Browser");var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Dh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.F=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.D=function(x,D,M){for(var b=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)b[Ge-2]=arguments[Ge];return C.prototype[D].apply(x,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);const x=Array(16);if(typeof C=="string")for(var D=0;D<16;++D)x[D]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(D=0;D<16;++D)x[D]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],D=l.g[2];let M=l.g[3],b;b=C+(M^S&(D^M))+x[0]+3614090360&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[1]+3905402710&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[2]+606105819&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[3]+3250441966&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[5]+1200080426&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[6]+2821735955&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[7]+4249261313&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[9]+2336552879&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[10]+4294925233&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[11]+2304563134&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[13]+4254626195&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[14]+2792965006&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[15]+1236535329&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(D^M&(S^D))+x[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[6]+3225465664&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[11]+643717713&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[0]+3921069994&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[10]+38016083&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[15]+3634488961&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[4]+3889429448&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[14]+3275163606&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[3]+4107603335&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[8]+1163531501&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[2]+4243563512&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[7]+1735328473&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[12]+2368359562&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(S^D^M)+x[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[8]+2272392833&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[11]+1839030562&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[14]+4259657740&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[4]+1272893353&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[7]+4139469664&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[10]+3200236656&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[0]+3936430074&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[3]+3572445317&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[6]+76029189&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[12]+3873151461&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[15]+530742520&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[2]+3299628645&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(D^(S|~M))+x[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[7]+1126891415&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[14]+2878612391&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[5]+4237533241&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[3]+2399980690&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[10]+4293915773&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[1]+2240044497&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[15]+4264355552&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[6]+2734768916&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[13]+1309151649&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[11]+3174756917&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[2]+718787259&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+D&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.v=function(l,C){C===void 0&&(C=l.length);const S=C-this.blockSize,x=this.C;let D=this.h,M=0;for(;M<C;){if(D==0)for(;M<=S;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<C;)if(x[D++]=l.charCodeAt(M++),D==this.blockSize){i(this,x),D=0;break}}else for(;M<C;)if(x[D++]=l[M++],D==this.blockSize){i(this,x),D=0;break}}this.h=D,this.o+=C},r.prototype.A=function(){var l=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;C=this.o*8;for(var S=l.length-8;S<l.length;++S)l[S]=C&255,C/=256;for(this.v(l),l=Array(16),C=0,S=0;S<4;++S)for(let x=0;x<32;x+=8)l[C++]=this.g[S]>>>x&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;const S=[];let x=!0;for(let D=l.length-1;D>=0;D--){const M=l[D]|0;x&&M==C||(S[D]=M,x=!1)}this.g=S}var p={};function _(l){return-128<=l&&l<128?a(l,function(C){return new c([C|0],C<0?-1:0)}):new c([l|0],l<0?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return P;if(l<0)return Y(v(-l));const C=[];let S=1;for(let x=0;l>=S;x++)C[x]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(l.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=v(Math.pow(C,8));let x=P;for(let M=0;M<l.length;M+=8){var D=Math.min(8,l.length-M);const b=parseInt(l.substring(M,M+D),C);D<8?(D=v(Math.pow(C,D)),x=x.j(D).add(v(b))):(x=x.j(S),x=x.add(v(b)))}return x}var P=_(0),V=_(1),G=_(16777216);n=c.prototype,n.m=function(){if(Q(this))return-Y(this).m();let l=0,C=1;for(let S=0;S<this.g.length;S++){const x=this.i(S);l+=(x>=0?x:4294967296+x)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(z(this))return"0";if(Q(this))return"-"+Y(this).toString(l);const C=v(Math.pow(l,6));var S=this;let x="";for(;;){const D=De(S,C).g;S=J(S,D.j(C));let M=((S.g.length>0?S.g[0]:S.h)>>>0).toString(l);if(S=D,z(S))return M+x;for(;M.length<6;)M="0"+M;x=M+x}},n.i=function(l){return l<0?0:l<this.g.length?this.g[l]:this.h};function z(l){if(l.h!=0)return!1;for(let C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function Q(l){return l.h==-1}n.l=function(l){return l=J(this,l),Q(l)?-1:z(l)?0:1};function Y(l){const C=l.g.length,S=[];for(let x=0;x<C;x++)S[x]=~l.g[x];return new c(S,~l.h).add(V)}n.abs=function(){return Q(this)?Y(this):this},n.add=function(l){const C=Math.max(this.g.length,l.g.length),S=[];let x=0;for(let D=0;D<=C;D++){let M=x+(this.i(D)&65535)+(l.i(D)&65535),b=(M>>>16)+(this.i(D)>>>16)+(l.i(D)>>>16);x=b>>>16,M&=65535,b&=65535,S[D]=b<<16|M}return new c(S,S[S.length-1]&-2147483648?-1:0)};function J(l,C){return l.add(Y(C))}n.j=function(l){if(z(this)||z(l))return P;if(Q(this))return Q(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(Q(l))return Y(this.j(Y(l)));if(this.l(G)<0&&l.l(G)<0)return v(this.m()*l.m());const C=this.g.length+l.g.length,S=[];for(var x=0;x<2*C;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(let D=0;D<l.g.length;D++){const M=this.i(x)>>>16,b=this.i(x)&65535,Ge=l.i(D)>>>16,un=l.i(D)&65535;S[2*x+2*D]+=b*un,ve(S,2*x+2*D),S[2*x+2*D+1]+=M*un,ve(S,2*x+2*D+1),S[2*x+2*D+1]+=b*Ge,ve(S,2*x+2*D+1),S[2*x+2*D+2]+=M*Ge,ve(S,2*x+2*D+2)}for(l=0;l<C;l++)S[l]=S[2*l+1]<<16|S[2*l];for(l=C;l<2*C;l++)S[l]=0;return new c(S,0)};function ve(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function Ee(l,C){this.g=l,this.h=C}function De(l,C){if(z(C))throw Error("division by zero");if(z(l))return new Ee(P,P);if(Q(l))return C=De(Y(l),C),new Ee(Y(C.g),Y(C.h));if(Q(C))return C=De(l,Y(C)),new Ee(Y(C.g),C.h);if(l.g.length>30){if(Q(l)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var S=V,x=C;x.l(l)<=0;)S=Ze(S),x=Ze(x);var D=qe(S,1),M=qe(x,1);for(x=qe(x,2),S=qe(S,2);!z(x);){var b=M.add(x);b.l(l)<=0&&(D=D.add(S),M=b),x=qe(x,1),S=qe(S,1)}return C=J(l,D.j(C)),new Ee(D,C)}for(D=P;l.l(C)>=0;){for(S=Math.max(1,Math.floor(l.m()/C.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),M=v(S),b=M.j(C);Q(b)||b.l(l)>0;)S-=x,M=v(S),b=M.j(C);z(M)&&(M=V),D=D.add(M),l=J(l,b)}return new Ee(D,l)}n.B=function(l){return De(this,l).h},n.and=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)&l.i(x);return new c(S,this.h&l.h)},n.or=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)|l.i(x);return new c(S,this.h|l.h)},n.xor=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)^l.i(x);return new c(S,this.h^l.h)};function Ze(l){const C=l.g.length+1,S=[];for(let x=0;x<C;x++)S[x]=l.i(x)<<1|l.i(x-1)>>>31;return new c(S,l.h)}function qe(l,C){const S=C>>5;C%=32;const x=l.g.length-S,D=[];for(let M=0;M<x;M++)D[M]=C>0?l.i(M+S)>>>C|l.i(M+S+1)<<32-C:l.i(M+S);return new c(D,l.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=I,Jn=c}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nh,is,xh,vo,Ja,Vh,Oh,Lh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var T=0;T<o.length-1;T++){var L=o[T];if(!(L in g))break e;g=g[L]}o=o[o.length-1],T=g[o],f=f(T),f!=T&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(f){var g=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&g.push([T,f[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function p(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function _(o,f,g){return o.call.apply(o.bind,arguments)}function v(o,f,g){return v=_,v.apply(null,arguments)}function I(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),o.apply(this,T)}}function P(o,f){function g(){}g.prototype=f.prototype,o.Z=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Ob=function(T,L,O){for(var K=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)K[fe-2]=arguments[fe];return f.prototype[L].apply(T,K)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function G(o){const f=o.length;if(f>0){const g=Array(f);for(let T=0;T<f;T++)g[T]=o[T];return g}return[]}function z(o,f){for(let T=1;T<arguments.length;T++){const L=arguments[T];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=o.length||0;const O=L.length||0;o.length=g+O;for(let K=0;K<O;K++)o[g+K]=L[K]}else o.push(L)}}class Q{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Y(o){c.setTimeout(()=>{throw o},0)}function J(){var o=l;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class ve{constructor(){this.h=this.g=null}add(f,g){const T=Ee.get();T.set(f,g),this.h?this.h.next=T:this.g=T,this.h=T}}var Ee=new Q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,qe=!1,l=new ve,C=()=>{const o=Promise.resolve(void 0);Ze=()=>{o.then(S)}};function S(){for(var o;o=J();){try{o.h.call(o.g)}catch(g){Y(g)}var f=Ee;f.j(o),f.h<100&&(f.h++,o.next=f.g,f.g=o)}qe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function Ge(o,f){D.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,f)}P(Ge,D),Ge.prototype.init=function(o,f){const g=this.type=o.type,T=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget,f||(g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var un="closure_listenable_"+(Math.random()*1e6|0),ma=0;function Nt(o,f,g,T,L){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!T,this.ha=L,this.key=++ma,this.da=this.fa=!1}function bn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xt(o,f,g){for(const T in o)f.call(g,o[T],T,o)}function Ms(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function wi(o){const f={};for(const g in o)f[g]=o[g];return f}const Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ur(o,f){let g,T;for(let L=1;L<arguments.length;L++){T=arguments[L];for(g in T)o[g]=T[g];for(let O=0;O<Ii.length;O++)g=Ii[O],Object.prototype.hasOwnProperty.call(T,g)&&(o[g]=T[g])}}function cr(o){this.src=o,this.g={},this.h=0}cr.prototype.add=function(o,f,g,T,L){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const K=bi(o,f,T,L);return K>-1?(f=o[K],g||(f.fa=!1)):(f=new Nt(f,this.src,O,!!T,L),f.fa=g,o.push(f)),f};function Ai(o,f){const g=f.type;if(g in o.g){var T=o.g[g],L=Array.prototype.indexOf.call(T,f,void 0),O;(O=L>=0)&&Array.prototype.splice.call(T,L,1),O&&(bn(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function bi(o,f,g,T){for(let L=0;L<o.length;++L){const O=o[L];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==T)return L}return-1}var Si="closure_lm_"+(Math.random()*1e6|0),Ci={};function Ri(o,f,g,T,L){if(Array.isArray(f)){for(let O=0;O<f.length;O++)Ri(o,f[O],g,T,L);return null}return g=Ct(g),o&&o[un]?o.J(f,g,p(T)?!!T.capture:!1,L):St(o,f,g,!1,T,L)}function St(o,f,g,T,L,O){if(!f)throw Error("Invalid event type");const K=p(L)?!!L.capture:!!L;let fe=lr(o);if(fe||(o[Si]=fe=new cr(o)),g=fe.add(f,g,T,K,O),g.proxy)return g;if(T=ya(),g.proxy=T,T.src=o,T.listener=g,o.addEventListener)M||(L=K),L===void 0&&(L=!1),o.addEventListener(f.toString(),T,L);else if(o.attachEvent)o.attachEvent(Pi(f.toString()),T);else if(o.addListener&&o.removeListener)o.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ya(){function o(g){return f.call(o.src,o.listener,g)}const f=_a;return o}function cn(o,f,g,T,L){if(Array.isArray(f))for(var O=0;O<f.length;O++)cn(o,f[O],g,T,L);else T=p(T)?!!T.capture:!!T,g=Ct(g),o&&o[un]?(o=o.i,O=String(f).toString(),O in o.g&&(f=o.g[O],g=bi(f,g,T,L),g>-1&&(bn(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete o.g[O],o.h--)))):o&&(o=lr(o))&&(f=o.g[f.toString()],o=-1,f&&(o=bi(f,g,T,L)),(g=o>-1?f[o]:null)&&Sn(g))}function Sn(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[un])Ai(f.i,o);else{var g=o.type,T=o.proxy;f.removeEventListener?f.removeEventListener(g,T,o.capture):f.detachEvent?f.detachEvent(Pi(g),T):f.addListener&&f.removeListener&&f.removeListener(T),(g=lr(f))?(Ai(g,o),g.h==0&&(g.src=null,f[Si]=null)):bn(o)}}}function Pi(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function _a(o,f){if(o.da)o=!0;else{f=new Ge(f,this);const g=o.listener,T=o.ha||o.src;o.fa&&Sn(o),o=g.call(T,f)}return o}function lr(o){return o=o[Si],o instanceof cr?o:null}var Cn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ct(o){return typeof o=="function"?o:(o[Cn]||(o[Cn]=function(f){return o.handleEvent(f)}),o[Cn])}function et(){x.call(this),this.i=new cr(this),this.M=this,this.G=null}P(et,x),et.prototype[un]=!0,et.prototype.removeEventListener=function(o,f,g,T){cn(this,o,f,g,T)};function rt(o,f){var g,T=o.G;if(T)for(g=[];T;T=T.G)g.push(T);if(o=o.M,T=f.type||f,typeof f=="string")f=new D(f,o);else if(f instanceof D)f.target=f.target||o;else{var L=f;f=new D(T,o),Ur(f,L)}L=!0;let O,K;if(g)for(K=g.length-1;K>=0;K--)O=f.g=g[K],L=jr(O,T,!0,f)&&L;if(O=f.g=o,L=jr(O,T,!0,f)&&L,L=jr(O,T,!1,f)&&L,g)for(K=0;K<g.length;K++)O=f.g=g[K],L=jr(O,T,!1,f)&&L}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(const f in o.g){const g=o.g[f];for(let T=0;T<g.length;T++)bn(g[T]);delete o.g[f],o.h--}}this.G=null},et.prototype.J=function(o,f,g,T){return this.i.add(String(o),f,!1,g,T)},et.prototype.K=function(o,f,g,T){return this.i.add(String(o),f,!0,g,T)};function jr(o,f,g,T){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();let L=!0;for(let O=0;O<f.length;++O){const K=f[O];if(K&&!K.da&&K.capture==g){const fe=K.listener,Ue=K.ha||K.src;K.fa&&Ai(o.i,K),L=fe.call(Ue,T)!==!1&&L}}return L&&!T.defaultPrevented}function Rt(o,f){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:c.setTimeout(o,f||0)}function Rn(o){o.g=Rt(()=>{o.g=null,o.i&&(o.i=!1,Rn(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class hr extends x{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Rn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(o){x.call(this),this.h=o,this.g={}}P(ie,x);var it=[];function Fs(o){xt(o.g,function(f,g){this.g.hasOwnProperty(g)&&Sn(f)},o),o.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Fs(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ki=c.JSON.stringify,va=c.JSON.parse,Us=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Di(){}function Pn(){}var mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vt(){D.call(this,"d")}P(Vt,D);function Ht(){D.call(this,"c")}P(Ht,D);var ln={},fr=null;function dr(){return fr=fr||new et}ln.Ia="serverreachability";function Ni(o){D.call(this,ln.Ia,o)}P(Ni,D);function pr(o){const f=dr();rt(f,new Ni(f))}ln.STAT_EVENT="statevent";function hn(o,f){D.call(this,ln.STAT_EVENT,o),this.stat=f}P(hn,D);function Be(o){const f=dr();rt(f,new hn(f,o))}ln.Ja="timingevent";function xi(o,f){D.call(this,ln.Ja,o),this.size=f}P(xi,D);function kn(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},f)}function tt(){this.g=!0}tt.prototype.ua=function(){this.g=!1};function ct(o,f,g,T,L,O){o.info(function(){if(o.g)if(O){var K="",fe=O.split("&");for(let _e=0;_e<fe.length;_e++){var Ue=fe[_e].split("=");if(Ue.length>1){const Fe=Ue[0];Ue=Ue[1];const $e=Fe.split("_");K=$e.length>=2&&$e[1]=="type"?K+(Fe+"="+Ue+"&"):K+(Fe+"=redacted&")}}}else K=null;else K=O;return"XMLHTTP REQ ("+T+") [attempt "+L+"]: "+f+`
`+g+`
`+K})}function Vi(o,f,g,T,L,O,K){o.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+L+"]: "+f+`
`+g+`
`+O+" "+K})}function Dn(o,f,g,T){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+qs(o,g)+(T?" "+T:"")})}function js(o,f){o.info(function(){return"TIMEOUT: "+f})}tt.prototype.info=function(){};function qs(o,f){if(!o.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var g=O[o];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var L=T[0];if(L!="noop"&&L!="stop"&&L!="close")for(let K=1;K<T.length;K++)T[K]=""}}}}return ki(O)}catch{return f}}var Ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qr;function Nn(){}P(Nn,Di),Nn.prototype.g=function(){return new XMLHttpRequest},qr=new Nn;function gr(o){return encodeURIComponent(String(o))}function Ea(o){var f=1;o=o.split(":");const g=[];for(;f>0&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function zt(o,f,g,T){this.j=o,this.i=f,this.l=g,this.S=T||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Oi}function Oi(){this.i=null,this.g="",this.h=!1}var Bs={},Li={};function Br(o,f,g){o.M=1,o.A=On(Ve(f)),o.u=g,o.R=!0,$s(o,null)}function $s(o,f){o.F=Date.now(),Vn(o),o.B=Ve(o.A);var g=o.B,T=o.S;Array.isArray(T)||(T=[String(T)]),Xs(g.i,"t",T),o.C=0,g=o.j.L,o.h=new Oi,o.g=B(o.j,g?f:null,!o.u),o.P>0&&(o.O=new hr(v(o.Y,o,o.g),o.P)),f=o.V,g=o.g,T=o.ba;var L="readystatechange";Array.isArray(L)||(L&&(it[0]=L.toString()),L=it);for(let O=0;O<L.length;O++){const K=Ri(g,L[O],T||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=o.J?wi(o.J):{},o.u?(o.v||(o.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,f)):(o.v="GET",o.g.ea(o.B,o.v,null,f)),pr(),ct(o.i,o.v,o.B,o.l,o.S,o.u)}zt.prototype.ba=function(o){o=o.target;const f=this.O;f&&Mt(o)==3?f.j():this.Y(o)},zt.prototype.Y=function(o){try{if(o==this.g)e:{const fe=Mt(this.g),Ue=this.g.ya(),_e=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Yi(this.g)))){this.K||fe!=4||Ue==7||(Ue==8||_e<=0?pr(3):pr(2)),$r(this);var f=this.g.ca();this.X=f;var g=xn(this);if(this.o=f==200,Vi(this.i,this.v,this.B,this.l,this.S,fe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var T,L=this.g;if((T=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var O=T;break t}}O=null}if(o=O)Dn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hr(this,o);else{this.o=!1,this.m=3,Be(12),wt(this),yr(this);break e}}if(this.R){o=!0;let Fe;for(;!this.K&&this.C<g.length;)if(Fe=Fi(this,g),Fe==Li){fe==4&&(this.m=4,Be(14),o=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Bs){this.m=4,Be(15),Dn(this.i,this.l,g,"[Invalid Chunk]"),o=!1;break}else Dn(this.i,this.l,Fe,null),Hr(this,Fe);if(Mi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||g.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)Dn(this.i,this.l,g,"[Invalid Chunked Response]"),wt(this),yr(this);else if(g.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),d(K),K.P=!0,Be(11))}}else Dn(this.i,this.l,g,null),Hr(this,g);fe==4&&wt(this),this.o&&!this.K&&(fe==4?E(this.j,this):(this.o=!1,Vn(this)))}else Ji(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),wt(this),yr(this)}}}catch{}finally{}};function xn(o){if(!Mi(o))return o.g.la();const f=Yi(o.g);if(f==="")return"";let g="";const T=f.length,L=Mt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return wt(o),yr(o),"";o.h.i=new c.TextDecoder}for(let O=0;O<T;O++)o.h.h=!0,g+=o.h.i.decode(f[O],{stream:!(L&&O==T-1)});return f.length=0,o.h.g+=g,o.C=0,o.h.g}function Mi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Fi(o,f){var g=o.C,T=f.indexOf(`
`,g);return T==-1?Li:(g=Number(f.substring(g,T)),isNaN(g)?Bs:(T+=1,T+g>f.length?Li:(f=f.slice(T,T+g),o.C=T+g,f)))}zt.prototype.cancel=function(){this.K=!0,wt(this)};function Vn(o){o.T=Date.now()+o.H,mr(o,o.H)}function mr(o,f){if(o.D!=null)throw Error("WatchDog timer not null");o.D=kn(v(o.aa,o),f)}function $r(o){o.D&&(c.clearTimeout(o.D),o.D=null)}zt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(js(this.i,this.B),this.M!=2&&(pr(),Be(17)),wt(this),this.m=2,yr(this)):mr(this,this.T-o)};function yr(o){o.j.I==0||o.K||E(o.j,o)}function wt(o){$r(o);var f=o.O;f&&typeof f.dispose=="function"&&f.dispose(),o.O=null,Fs(o.V),o.g&&(f=o.g,o.g=null,f.abort(),f.dispose())}function Hr(o,f){try{var g=o.j;if(g.I!=0&&(g.g==o||_r(g.h,o))){if(!o.L&&_r(g.h,o)&&g.I==3){try{var T=g.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var L=T;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<o.F)y(g),Yt(g);else break e;h(g),Be(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=kn(v(g.Va,g),6e3));zs(g.h)<=1&&g.ta&&(g.ta=void 0)}else A(g,11)}else if((o.L||g.g==o)&&y(g),!b(f))for(L=g.Ba.g.parse(f),f=0;f<L.length;f++){let _e=L[f];const Fe=_e[0];if(!(Fe<=g.K))if(g.K=Fe,_e=_e[1],g.I==2)if(_e[0]=="c"){g.M=_e[1],g.ba=_e[2];const $e=_e[3];$e!=null&&(g.ka=$e,g.j.info("VER="+g.ka));const lt=_e[4];lt!=null&&(g.za=lt,g.j.info("SVER="+g.za));const st=_e[5];st!=null&&typeof st=="number"&&st>0&&(T=1.5*st,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const He=o.g;if(He){const jn=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var O=T.h;O.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(qi(O,O.h),O.h=null))}if(T.G){const At=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;At&&(T.wa=At,ke(T.J,T.G,At))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-o.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var K=o;if(T.na=q(T,T.L?T.ba:null,T.W),K.L){Ws(T.h,K);var fe=K,Ue=T.O;Ue&&(fe.H=Ue),fe.D&&($r(fe),Vn(fe)),T.g=K}else u(T);g.i.length>0&&Un(g)}else _e[0]!="stop"&&_e[0]!="close"||A(g,7);else g.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?A(g,7):Zi(g):_e[0]!="noop"&&g.l&&g.l.qa(_e),g.A=0)}}pr(4)}catch{}}var Hs=class{constructor(o,f){this.g=o,this.map=f}};function Ui(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ji(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zs(o){return o.h?1:o.g?o.g.size:0}function _r(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function qi(o,f){o.g?o.g.add(f):o.h=f}function Ws(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Ui.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bi(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.G);return f}return G(o.i)}var $i=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hi(o,f){if(o){o=o.split("&");for(let g=0;g<o.length;g++){const T=o[g].indexOf("=");let L,O=null;T>=0?(L=o[g].substring(0,T),O=o[g].substring(T+1)):L=o[g],f(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Lt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;o instanceof Lt?(this.l=o.l,Pt(this,o.j),this.o=o.o,this.g=o.g,Wt(this,o.u),this.h=o.h,zi(this,Mn(o.i)),this.m=o.m):o&&(f=String(o).match($i))?(this.l=!1,Pt(this,f[1]||"",!0),this.o=Ln(f[2]||""),this.g=Ln(f[3]||"",!0),Wt(this,f[4]),this.h=Ln(f[5]||"",!0),zi(this,f[6]||"",!0),this.m=Ln(f[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}Lt.prototype.toString=function(){const o=[];var f=this.j;f&&o.push(Gt(f,Ks,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(Gt(f,Ks,!0),"@"),o.push(gr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&o.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Gt(g,g.charAt(0)=="/"?It:Ta,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Gt(g,vr)),o.join("")},Lt.prototype.resolve=function(o){const f=Ve(this);let g=!!o.j;g?Pt(f,o.j):g=!!o.o,g?f.o=o.o:g=!!o.g,g?f.g=o.g:g=o.u!=null;var T=o.h;if(g)Wt(f,o.u);else if(g=!!o.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var L=f.h.lastIndexOf("/");L!=-1&&(T=f.h.slice(0,L+1)+T)}if(L=T,L==".."||L==".")T="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){T=L.lastIndexOf("/",0)==0,L=L.split("/");const O=[];for(let K=0;K<L.length;){const fe=L[K++];fe=="."?T&&K==L.length&&O.push(""):fe==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&K==L.length&&O.push("")):(O.push(fe),T=!0)}T=O.join("/")}else T=L}return g?f.h=T:g=o.i.toString()!=="",g?zi(f,Mn(o.i)):g=!!o.m,g&&(f.m=o.m),f};function Ve(o){return new Lt(o)}function Pt(o,f,g){o.j=g?Ln(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Wt(o,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);o.u=f}else o.u=null}function zi(o,f,g){f instanceof Er?(o.i=f,Wi(o.i,o.l)):(g||(f=Gt(f,Qs)),o.i=new Er(f,o.l))}function ke(o,f,g){o.i.set(f,g)}function On(o){return ke(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ln(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gt(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,Gs),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gs(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ks=/[#\/\?@]/g,Ta=/[#\?:]/g,It=/[#\?]/g,Qs=/[#\?@]/g,vr=/#/g;function Er(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&Hi(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Er.prototype,n.add=function(o,f){dn(this),this.i=null,o=pn(this,o);let g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Kt(o,f){dn(o),f=pn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Qt(o,f){return dn(o),f=pn(o,f),o.g.has(f)}n.forEach=function(o,f){dn(this),this.g.forEach(function(g,T){g.forEach(function(L){o.call(f,L,T,this)},this)},this)};function zr(o,f){dn(o);let g=[];if(typeof f=="string")Qt(o,f)&&(g=g.concat(o.g.get(pn(o,f))));else for(o=Array.from(o.g.values()),f=0;f<o.length;f++)g=g.concat(o[f]);return g}n.set=function(o,f){return dn(this),this.i=null,o=pn(this,o),Qt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=zr(this,o),o.length>0?String(o[0]):f):f};function Xs(o,f,g){Kt(o,f),g.length>0&&(o.i=null,o.g.set(pn(o,f),G(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var g=f[T];const L=gr(g);g=zr(this,g);for(let O=0;O<g.length;O++){let K=L;g[O]!==""&&(K+="="+gr(g[O])),o.push(K)}}return this.i=o.join("&")};function Mn(o){const f=new Er;return f.i=o.i,o.g&&(f.g=new Map(o.g),f.h=o.h),f}function pn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Wi(o,f){f&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(g,T){const L=T.toLowerCase();T!=L&&(Kt(this,T),Xs(this,L,g))},o)),o.j=f}function Ys(o,f){const g=new tt;if(c.Image){const T=new Image;T.onload=I(Xt,g,"TestLoadImage: loaded",!0,f,T),T.onerror=I(Xt,g,"TestLoadImage: error",!1,f,T),T.onabort=I(Xt,g,"TestLoadImage: abort",!1,f,T),T.ontimeout=I(Xt,g,"TestLoadImage: timeout",!1,f,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=o}else f(!1)}function Js(o,f){const g=new tt,T=new AbortController,L=setTimeout(()=>{T.abort(),Xt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:T.signal}).then(O=>{clearTimeout(L),O.ok?Xt(g,"TestPingServer: ok",!0,f):Xt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Xt(g,"TestPingServer: error",!1,f)})}function Xt(o,f,g,T,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),T(g)}catch{}}function Zs(){this.g=new Us}function Gi(o){this.i=o.Sb||null,this.h=o.ab||!1}P(Gi,Di),Gi.prototype.g=function(){return new Wr(this.i,this.h)};function Wr(o,f){et.call(this),this.H=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}P(Wr,et),n=Wr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=f,this.readyState=1,wr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(f.body=o),(this.H||c).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wr(this)),this.g&&(this.readyState=3,wr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gr(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gr(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?Tr(this):wr(this),this.readyState==3&&Gr(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Tr(this))},n.Na=function(o){this.g&&(this.response=o,Tr(this))},n.ga=function(){this.g&&Tr(this)};function Tr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,wr(o)}n.setRequestHeader=function(o,f){this.A.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function wr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function eo(o){let f="";return xt(o,function(g,T){f+=T,f+=":",f+=g,f+=`\r
`}),f}function Ki(o,f,g){e:{for(T in g){var T=!1;break e}T=!0}T||(g=eo(g),typeof o=="string"?g!=null&&gr(g):ke(o,f,g))}function Le(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}P(Le,et);var wa=/^https?$/i,Ia=["POST","PUT"];n=Le.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,f,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qr.g(),this.g.onreadystatechange=V(v(this.Ca,this));try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(O){Qi(this,O);return}if(o=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var L in T)g.set(L,T[L]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())g.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),L=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(Ia,f,void 0)>=0)||T||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of g)this.g.setRequestHeader(O,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Qi(this,O)}};function Qi(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.o=5,Kr(o),Fn(o)}function Kr(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),Fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),Le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Xi(this):this.Xa())},n.Xa=function(){Xi(this)};function Xi(o){if(o.h&&typeof a<"u"){if(o.v&&Mt(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const O=o.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var T;if(T=O===0){let K=String(o.D).match($i)[1]||null;!K&&c.self&&c.self.location&&(K=c.self.location.protocol.slice(0,-1)),T=!wa.test(K?K.toLowerCase():"")}g=T}if(g)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var L=Mt(o)>2?o.g.statusText:""}catch{L=""}o.l=L+" ["+o.ca()+"]",Kr(o)}}finally{Fn(o)}}}}function Fn(o,f){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const g=o.g;o.g=null,f||rt(o,"ready");try{g.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),va(f)}};function Yi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ji(o){const f={};o=(o.g&&Mt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<o.length;T++){if(b(o[T]))continue;var g=Ea(o[T]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[L]||[];f[L]=O,O.push(g)}Ms(f,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ir(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function to(o){this.za=0,this.i=[],this.j=new tt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ir("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ir("baseRetryDelayMs",5e3,o),this.Za=Ir("retryDelaySeedMs",1e4,o),this.Ta=Ir("forwardChannelMaxRetries",2,o),this.va=Ir("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ui(o&&o.concurrentRequestLimit),this.Ba=new Zs,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=to.prototype,n.ka=8,n.I=1,n.connect=function(o,f,g,T){Be(0),this.W=o,this.H=f||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=q(this,null,this.W),Un(this)};function Zi(o){if(es(o),o.I==3){var f=o.V++,g=Ve(o.J);if(ke(g,"SID",o.M),ke(g,"RID",f),ke(g,"TYPE","terminate"),Ar(o,g),f=new zt(o,o.j,f),f.M=2,f.A=On(Ve(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.A,g=!0),g||(f.g=B(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Vn(f)}N(o)}function Yt(o){o.g&&(d(o),o.g.cancel(),o.g=null)}function es(o){Yt(o),o.v&&(c.clearTimeout(o.v),o.v=null),y(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function Un(o){if(!ji(o.h)&&!o.m){o.m=!0;var f=o.Ea;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.D=0}}function Aa(o,f){return zs(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=f.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=kn(v(o.Ea,o,f),R(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const L=new zt(this,this.j,o);let O=this.o;if(this.U&&(O?(O=wi(O),Ur(O,this.U)):O=this.U),this.u!==null||this.R||(L.J=O,O=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=s(this,L,f),g=Ve(this.J),ke(g,"RID",o),ke(g,"CVER",22),this.G&&ke(g,"X-HTTP-Session-Id",this.G),Ar(this,g),O&&(this.R?f="headers="+gr(eo(O))+"&"+f:this.u&&Ki(g,this.u,O)),qi(this.h,L),this.Ra&&ke(g,"TYPE","init"),this.S?(ke(g,"$req",f),ke(g,"SID","null"),L.U=!0,Br(L,g,null)):Br(L,g,f),this.I=2}}else this.I==3&&(o?no(this,o):this.i.length==0||ji(this.h)||no(this))};function no(o,f){var g;f?g=f.l:g=o.V++;const T=Ve(o.J);ke(T,"SID",o.M),ke(T,"RID",g),ke(T,"AID",o.K),Ar(o,T),o.u&&o.o&&Ki(T,o.u,o.o),g=new zt(o,o.j,g,o.D+1),o.u===null&&(g.J=o.o),f&&(o.i=f.G.concat(o.i)),f=s(o,g,1e3),g.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),qi(o.h,g),Br(g,T,f)}function Ar(o,f){o.H&&xt(o.H,function(g,T){ke(f,T,g)}),o.l&&xt({},function(g,T){ke(f,T,g)})}function s(o,f,g){g=Math.min(o.i.length,g);const T=o.l?v(o.l.Ka,o.l,o):null;e:{var L=o.i;let fe=-1;for(;;){const Ue=["count="+g];fe==-1?g>0?(fe=L[0].g,Ue.push("ofs="+fe)):fe=0:Ue.push("ofs="+fe);let _e=!0;for(let Fe=0;Fe<g;Fe++){var O=L[Fe].g;const $e=L[Fe].map;if(O-=fe,O<0)fe=Math.max(0,L[Fe].g-100),_e=!1;else try{O="req"+O+"_"||"";try{var K=$e instanceof Map?$e:Object.entries($e);for(const[lt,st]of K){let He=st;p(st)&&(He=ki(st)),Ue.push(O+lt+"="+encodeURIComponent(He))}}catch(lt){throw Ue.push(O+"type="+encodeURIComponent("_badmap")),lt}}catch{T&&T($e)}}if(_e){K=Ue.join("&");break e}}K=void 0}return o=o.i.splice(0,g),f.G=o,K}function u(o){if(!o.g&&!o.v){o.Y=1;var f=o.Da;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.A=0}}function h(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=kn(v(o.Da,o),R(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=kn(v(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),Yt(this),m(this))};function d(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function m(o){o.g=new zt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var f=Ve(o.na);ke(f,"RID","rpc"),ke(f,"SID",o.M),ke(f,"AID",o.K),ke(f,"CI",o.F?"0":"1"),!o.F&&o.ia&&ke(f,"TO",o.ia),ke(f,"TYPE","xmlhttp"),Ar(o,f),o.u&&o.o&&Ki(f,o.u,o.o),o.O&&(o.g.H=o.O);var g=o.g;o=o.ba,g.M=1,g.A=On(Ve(f)),g.u=null,g.R=!0,$s(g,o)}n.Va=function(){this.C!=null&&(this.C=null,Yt(this),h(this),Be(19))};function y(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function E(o,f){var g=null;if(o.g==f){y(o),d(o),o.g=null;var T=2}else if(_r(o.h,f))g=f.G,Ws(o.h,f),T=1;else return;if(o.I!=0){if(f.o)if(T==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var L=o.D;T=dr(),rt(T,new xi(T,g)),Un(o)}else u(o);else if(L=f.m,L==3||L==0&&f.X>0||!(T==1&&Aa(o,f)||T==2&&h(o)))switch(g&&g.length>0&&(f=o.h,f.i=f.i.concat(g)),L){case 1:A(o,5);break;case 4:A(o,10);break;case 3:A(o,6);break;default:A(o,2)}}}function R(o,f){let g=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(g*=2),g*f}function A(o,f){if(o.j.info("Error code "+f),f==2){var g=v(o.bb,o),T=o.Ua;const L=!T;T=new Lt(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Pt(T,"https"),On(T),L?Ys(T.toString(),g):Js(T.toString(),g)}else Be(2);o.I=0,o.l&&o.l.pa(f),N(o),es(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function N(o){if(o.I=0,o.ja=[],o.l){const f=Bi(o.h);(f.length!=0||o.i.length!=0)&&(z(o.ja,f),z(o.ja,o.i),o.h.i.length=0,G(o.i),o.i.length=0),o.l.oa()}}function q(o,f,g){var T=g instanceof Lt?Ve(g):new Lt(g);if(T.g!="")f&&(T.g=f+"."+T.g),Wt(T,T.u);else{var L=c.location;T=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;const O=new Lt(null);T&&Pt(O,T),f&&(O.g=f),L&&Wt(O,L),g&&(O.h=g),T=O}return g=o.G,f=o.wa,g&&f&&ke(T,g,f),ke(T,"VER",o.ka),Ar(o,T),T}function B(o,f,g){if(f&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Aa&&!o.ma?new Le(new Gi({ab:g})):new Le(o.ma),f.Fa(o.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function U(){}n=U.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function X(){}X.prototype.g=function(o,f){return new se(o,f)};function se(o,f){et.call(this),this.g=new to(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(o?o["X-WebChannel-Client-Profile"]=f.sa:o={"X-WebChannel-Client-Profile":f.sa}),this.g.U=o,(o=f&&f.Qb)&&!b(o)&&(this.g.u=o),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Me(this)}P(se,et),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){Zi(this.g)},se.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.v&&(g={},g.__data__=ki(o),o=g);f.i.push(new Hs(f.Ya++,o)),f.I==3&&Un(f)},se.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,se.Z.N.call(this)};function Te(o){Vt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}P(Te,Vt);function me(){Ht.call(this),this.status=1}P(me,Ht);function Me(o){this.g=o}P(Me,U),Me.prototype.ra=function(){rt(this.g,"a")},Me.prototype.qa=function(o){rt(this.g,new Te(o))},Me.prototype.pa=function(o){rt(this.g,new me)},Me.prototype.oa=function(){rt(this.g,"b")},X.prototype.createWebChannel=X.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Lh=function(){return new X},Oh=function(){return dr()},Vh=ln,Ja={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,vo=Ot,fn.COMPLETE="complete",xh=fn,Pn.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",et.prototype.listen=et.prototype.J,is=Pn,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,Nh=Le}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});const jc="@firebase/firestore",qc="4.9.2";/**
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
 */let _i="12.3.0";/**
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
 */const Nr=new gu("@firebase/firestore");function Yr(){return Nr.logLevel}function re(n,...e){if(Nr.logLevel<=Ae.DEBUG){const t=e.map(Su);Nr.debug(`Firestore (${_i}): ${n}`,...t)}}function Tn(n,...e){if(Nr.logLevel<=Ae.ERROR){const t=e.map(Su);Nr.error(`Firestore (${_i}): ${n}`,...t)}}function ci(n,...e){if(Nr.logLevel<=Ae.WARN){const t=e.map(Su);Nr.warn(`Firestore (${_i}): ${n}`,...t)}}function Su(n){if(typeof n=="string")return n;try{/**
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
 */function le(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mh(n,r,t)}function Mh(n,e,t){let r=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function Re(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Mh(e,i,r)}function ge(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends In{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Fh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dt.UNAUTHENTICATED)))}shutdown(){}}class Cy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ry{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new _n,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new _n)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Fh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class Py{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ky{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Py(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ny(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ny(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function Za(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Ma(i)===Ma(a)?be(i,a):Ma(i)?1:-1}return be(n.length,e.length)}const xy=55296,Vy=57343;function Ma(n){const e=n.charCodeAt(0);return e>=xy&&e<=Vy}function li(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const $c="__name__";class Zt{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&le(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Zt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return be(e.length,t.length)}static compareSegments(e,t){const r=Zt.isNumericId(e),i=Zt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(t)):Za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class xe extends Zt{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new xe(t)}static emptyPath(){return new xe([])}}const Oy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Zt{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return Oy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$c}static keyField(){return new at([$c])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
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
 */function Uh(n,e,t){if(!t)throw new ee(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ly(n,e,t,r){if(e===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hc(n){if(!ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zc(n){if(ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le(12329,{type:typeof n})}function Bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xo(n);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function My(n,e){if(e<=0)throw new ee(H.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ps(n,e){if(!jh(n))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wc=-62135596800,Gc=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Gc);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wc)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gc}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ps(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Xe("string",Oe._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
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
 */const ys=-1;function Fy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new er(i,ae.empty(),e)}function Uy(n){return new er(n.readTime,n.key,ys)}class er{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new er(pe.min(),ae.empty(),ys)}static max(){return new er(pe.max(),ae.empty(),ys)}}function jy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
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
 */const qy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class By{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function vi(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==qy)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,r)=>{t(e)}))}static reject(e){return new W(((t,r)=>{r(e)}))}static waitFor(e){return new W(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=W.resolve(!1);for(const r of e)t=t.next((i=>i?W.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new W(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const v=_;t(e[v]).next((I=>{c[v]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new W(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function $y(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ei(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Yo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yo.ce=-1;/**
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
 */const Ru=-1;function Jo(n){return n==null}function xo(n){return n===0&&1/n==-1/0}function Hy(n){return typeof n=="number"&&Number.isInteger(n)&&!xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const qh="";function zy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kc(e)),e=Wy(n.get(t),e);return Kc(e)}function Wy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case qh:t+="";break;default:t+=a}}return t}function Kc(n){return n+qh+""}/**
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
 */function Qc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ar(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class je{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=a??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new bt([])}unionWith(e){let t=new Je(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new bt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class $h extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new $h("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Gy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=Gy.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */const Hh="server_timestamp",zh="__type__",Wh="__previous_value__",Gh="__local_write_time__";function Pu(n){return(n?.mapValue?.fields||{})[zh]?.stringValue===Hh}function Zo(n){const e=n.mapValue.fields[Wh];return Pu(e)?Zo(e):e}function _s(n){const e=tr(n.mapValue.fields[Gh].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Ky{constructor(e,t,r,i,a,c,p,_,v,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=I}}const Vo="(default)";class vs{constructor(e,t){this.projectId=e,this.database=t||Vo}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Kh="__type__",Qy="__max__",lo={mapValue:{}},Qh="__vector__",Oo="value";function rr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pu(n)?4:Yy(n)?9007199254740991:Xy(n)?10:11:le(28295,{value:n})}function an(n,e){if(n===e)return!0;const t=rr(n);if(t!==rr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _s(n).isEqual(_s(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=tr(i.timestampValue),p=tr(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return nr(i.bytesValue).isEqual(nr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return ze(i.geoPointValue.latitude)===ze(a.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return ze(i.integerValue)===ze(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=ze(i.doubleValue),p=ze(a.doubleValue);return c===p?xo(c)===xo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return li(n.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Qc(c)!==Qc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!an(c[_],p[_])))return!1;return!0})(n,e);default:return le(52216,{left:n})}}function Es(n,e){return(n.values||[]).find((t=>an(t,e)))!==void 0}function hi(n,e){if(n===e)return 0;const t=rr(n),r=rr(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=ze(a.integerValue||a.doubleValue),_=ze(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return Yc(n.timestampValue,e.timestampValue);case 4:return Yc(_s(n),_s(e));case 5:return Za(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=nr(a),_=nr(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let v=0;v<p.length&&v<_.length;v++){const I=be(p[v],_[v]);if(I!==0)return I}return be(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=be(ze(a.latitude),ze(c.latitude));return p!==0?p:be(ze(a.longitude),ze(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Jc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},v=p[Oo]?.arrayValue,I=_[Oo]?.arrayValue,P=be(v?.values?.length||0,I?.values?.length||0);return P!==0?P:Jc(v,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===lo.mapValue&&c===lo.mapValue)return 0;if(a===lo.mapValue)return 1;if(c===lo.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),v=c.fields||{},I=Object.keys(v);_.sort(),I.sort();for(let P=0;P<_.length&&P<I.length;++P){const V=Za(_[P],I[P]);if(V!==0)return V;const G=hi(p[_[P]],v[I[P]]);if(G!==0)return G}return be(_.length,I.length)})(n.mapValue,e.mapValue);default:throw le(23264,{he:t})}}function Yc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=tr(n),r=tr(e),i=be(t.seconds,r.seconds);return i!==0?i:be(t.nanos,r.nanos)}function Jc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=hi(t[i],r[i]);if(a)return a}return be(t.length,r.length)}function fi(n){return eu(n)}function eu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=tr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return nr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=eu(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${eu(t.fields[c])}`;return i+"}"})(n.mapValue):le(61005,{value:n})}function Eo(n){switch(rr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zo(n);return e?16+Eo(e):16;case 5:return 2*n.stringValue.length;case 6:return nr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Eo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return ar(r.fields,((a,c)=>{i+=a.length+Eo(c)})),i})(n.mapValue);default:throw le(13486,{value:n})}}function Zc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tu(n){return!!n&&"integerValue"in n}function ku(n){return!!n&&"arrayValue"in n}function el(n){return!!n&&"nullValue"in n}function tl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function To(n){return!!n&&"mapValue"in n}function Xy(n){return(n?.mapValue?.fields||{})[Kh]?.stringValue===Qh}function ls(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ar(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ls(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ls(n.arrayValue.values[t]);return e}return{...n}}function Yy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qy}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!To(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ls(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=ls(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());To(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];To(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ar(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Et(ls(this.value))}}function Xh(n){const e=[];return ar(n.fields,((t,r)=>{const i=new at([t]);if(To(r)){const a=Xh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new bt(e)}/**
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
 */class pt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new pt(e,0,pe.min(),pe.min(),pe.min(),Et.empty(),0)}static newFoundDocument(e,t,r,i){return new pt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new pt(e,2,t,pe.min(),pe.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new pt(e,3,t,pe.min(),pe.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,t){this.position=e,this.inclusive=t}}function nl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(c.referenceValue),t.key):r=hi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function rl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!an(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yh{}class Qe extends Yh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new e_(e,t,r):t==="array-contains"?new r_(e,r):t==="in"?new i_(e,r):t==="not-in"?new s_(e,r):t==="array-contains-any"?new o_(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new t_(e,r):new n_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hi(t,this.value)):t!==null&&rr(this.value)===rr(t)&&this.matchesComparison(hi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Yh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new $t(e,t)}matches(e){return Jh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jh(n){return n.op==="and"}function Zh(n){return Zy(n)&&Jh(n)}function Zy(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function nu(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+fi(n.value);if(Zh(n))return n.filters.map((e=>nu(e))).join(",");{const e=n.filters.map((t=>nu(t))).join(",");return`${n.op}(${e})`}}function ef(n,e){return n instanceof Qe?(function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)})(n,e):n instanceof $t?(function(r,i){return i instanceof $t&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&ef(c,i.filters[p])),!0):!1})(n,e):void le(19439)}function tf(n){return n instanceof Qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${fi(t.value)}`})(n):n instanceof $t?(function(t){return t.op.toString()+" {"+t.getFilters().map(tf).join(" ,")+"}"})(n):"Filter"}class e_ extends Qe{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class t_ extends Qe{constructor(e,t){super(e,"in",t),this.keys=nf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class n_ extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=nf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nf(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class r_ extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ku(t)&&Es(t.arrayValue,this.value)}}class i_ extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Es(this.value.arrayValue,t)}}class s_ extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Es(this.value.arrayValue,t)}}class o_ extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ku(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Es(this.value.arrayValue,r)))}}/**
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
 */class a_{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function il(n,e=null,t=[],r=[],i=null,a=null,c=null){return new a_(n,e,t,r,i,a,c)}function Du(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>nu(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>fi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>fi(r))).join(",")),e.Te=t}return e.Te}function Nu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ef(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!rl(n.startAt,e.startAt)&&rl(n.endAt,e.endAt)}function ru(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ks{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function u_(n,e,t,r,i,a,c,p){return new ks(n,e,t,r,i,a,c,p)}function xu(n){return new ks(n)}function sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rf(n){return n.collectionGroup!==null}function hs(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Je(at.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Mo(a,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new Mo(at.keyField(),r))}return e.Ie}function nn(n){const e=ge(n);return e.Ee||(e.Ee=c_(e,hs(n))),e.Ee}function c_(n,e){if(n.limitType==="F")return il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Mo(i.field,a)}));const t=n.endAt?new Lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lo(n.startAt.position,n.startAt.inclusive):null;return il(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function iu(n,e){const t=n.filters.concat([e]);return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fo(n,e,t){return new ks(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Nu(nn(n),nn(e))&&n.limitType===e.limitType}function sf(n){return`${Du(nn(n))}|lt:${n.limitType}`}function Jr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>tf(i))).join(", ")}]`),Jo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>fi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>fi(i))).join(",")),`Target(${r})`})(nn(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of hs(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const v=nl(c,p,_);return c.inclusive?v<=0:v<0})(r.startAt,hs(r),i)||r.endAt&&!(function(c,p,_){const v=nl(c,p,_);return c.inclusive?v>=0:v>0})(r.endAt,hs(r),i))})(n,e)}function l_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function of(n){return(e,t)=>{let r=!1;for(const i of hs(n)){const a=h_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function h_(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),v=p.data.field(a);return _!==null&&v!==null?hi(_,v):le(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:n.dir})}}/**
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
 */class Or{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return Bh(this.inner)}size(){return this.innerSize}}/**
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
 */const f_=new je(ae.comparator);function wn(){return f_}const af=new je(ae.comparator);function ss(...n){let e=af;for(const t of n)e=e.insert(t.key,t);return e}function uf(n){let e=af;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Cr(){return fs()}function cf(){return fs()}function fs(){return new Or((n=>n.toString()),((n,e)=>n.isEqual(e)))}const d_=new je(ae.comparator),p_=new Je(ae.comparator);function Se(...n){let e=p_;for(const t of n)e=e.add(t);return e}const g_=new Je(be);function m_(){return g_}/**
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
 */function Vu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function lf(n){return{integerValue:""+n}}function y_(n,e){return Hy(e)?lf(e):Vu(n,e)}/**
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
 */class na{constructor(){this._=void 0}}function __(n,e,t){return n instanceof Ts?(function(i,a){const c={fields:{[zh]:{stringValue:Hh},[Gh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Pu(a)&&(a=Zo(a)),a&&(c.fields[Wh]=a),{mapValue:c}})(t,e):n instanceof ws?ff(n,e):n instanceof Is?df(n,e):(function(i,a){const c=hf(i,a),p=ol(c)+ol(i.Ae);return tu(c)&&tu(i.Ae)?lf(p):Vu(i.serializer,p)})(n,e)}function v_(n,e,t){return n instanceof ws?ff(n,e):n instanceof Is?df(n,e):t}function hf(n,e){return n instanceof Uo?(function(r){return tu(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Ts extends na{}class ws extends na{constructor(e){super(),this.elements=e}}function ff(n,e){const t=pf(e);for(const r of n.elements)t.some((i=>an(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Is extends na{constructor(e){super(),this.elements=e}}function df(n,e){let t=pf(e);for(const r of n.elements)t=t.filter((i=>!an(i,r)));return{arrayValue:{values:t}}}class Uo extends na{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ol(n){return ze(n.integerValue||n.doubleValue)}function pf(n){return ku(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class E_{constructor(e,t){this.field=e,this.transform=t}}function T_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof ws&&i instanceof ws||r instanceof Is&&i instanceof Is?li(r.elements,i.elements,an):r instanceof Uo&&i instanceof Uo?an(r.Ae,i.Ae):r instanceof Ts&&i instanceof Ts})(n.transform,e.transform)}class w_{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ra{}function gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ia(n.key,Tt.none()):new Ds(n.key,n.data,Tt.none());{const t=n.data,r=Et.empty();let i=new Je(at.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new ur(n.key,r,new bt(i.toArray()),Tt.none())}}function I_(n,e,t){n instanceof Ds?(function(i,a,c){const p=i.value.clone(),_=ul(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof ur?(function(i,a,c){if(!wo(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=ul(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(mf(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function ds(n,e,t,r){return n instanceof Ds?(function(a,c,p,_){if(!wo(a.precondition,c))return p;const v=a.value.clone(),I=cl(a.fieldTransforms,_,c);return v.setAll(I),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof ur?(function(a,c,p,_){if(!wo(a.precondition,c))return p;const v=cl(a.fieldTransforms,_,c),I=c.data;return I.setAll(mf(a)),I.setAll(v),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((P=>P.field)))})(n,e,t,r):(function(a,c,p){return wo(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function A_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=hf(r.transform,i||null);a!=null&&(t===null&&(t=Et.empty()),t.set(r.field,a))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&li(r,i,((a,c)=>T_(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ds extends ra{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ur extends ra{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function mf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ul(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,v_(c,p,t[i]))}return r}function cl(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,__(a,c,e))}return r}class ia extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b_ extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class S_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&I_(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ds(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ds(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cf();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=gf(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Se())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,((t,r)=>al(t,r)))&&li(this.baseMutations,e.baseMutations,((t,r)=>al(t,r)))}}class Ou{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return d_})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Ou(e,t,r,i)}}/**
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
 */class C_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class R_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,Ce;function P_(n){switch(n){case H.OK:return le(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return le(15467,{code:n})}}function yf(n){if(n===void 0)return Tn("GRPC error has no .code"),H.UNKNOWN;switch(n){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return le(39323,{code:n})}}(Ce=Ke||(Ke={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function k_(){return new TextEncoder}/**
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
 */const D_=new Jn([4294967295,4294967295],0);function ll(n){const e=k_().encode(n),t=new Dh;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Jn([t,r],0),new Jn([i,a],0)]}class Lu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new os(`Invalid padding: ${t}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new os(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Jn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Jn.fromNumber(r)));return i.compare(D_)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ll(e),[r,i]=hl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Lu(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=ll(e),[r,i]=hl(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sa{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sa(pe.min(),i,new je(be),wn(),Se())}}class Ns{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ns(r,t,Se(),Se(),Se())}}/**
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
 */class Io{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class _f{constructor(e,t){this.targetId=e,this.Ce=t}}class vf{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class fl{constructor(){this.ve=0,this.Fe=dl(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),t=Se(),r=Se();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:le(38017,{changeType:a})}})),new Ns(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=dl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class N_{constructor(e){this.Ge=e,this.ze=new Map,this.je=wn(),this.Je=ho(),this.He=ho(),this.Ye=new je(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(ru(a))if(r===0){const c=new ae(a.path);this.et(t,c,pt.newNoDocument(c,pe.min()))}else Re(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const v=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=nr(r).toUint8Array()}catch(_){if(_ instanceof $h)return ci("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new Lu(c,i,a)}catch(_){return ci(_ instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&ru(p.target)){const _=new ae(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,pt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Se();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const v=this.ot(_);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new sa(e,t,this.Ye,this.je,r);return this.je=wn(),this.Je=ho(),this.He=ho(),this.Ye=new je(be),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new fl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ho(){return new je(ae.comparator)}function dl(){return new je(ae.comparator)}const x_={asc:"ASCENDING",desc:"DESCENDING"},V_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},O_={and:"AND",or:"OR"};class L_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function su(n,e){return n.useProto3Json||Jo(e)?e:{value:e}}function jo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ef(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function M_(n,e){return jo(n,e.toTimestamp())}function rn(n){return Re(!!n,49232),pe.fromTimestamp((function(t){const r=tr(t);return new Oe(r.seconds,r.nanos)})(n))}function Mu(n,e){return ou(n,e).canonicalString()}function ou(n,e){const t=(function(i){return new xe(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Tf(n){const e=xe.fromString(n);return Re(Sf(e),10190,{key:e.toString()}),e}function au(n,e){return Mu(n.databaseId,e.path)}function Fa(n,e){const t=Tf(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(If(t))}function wf(n,e){return Mu(n.databaseId,e)}function F_(n){const e=Tf(n);return e.length===4?xe.emptyPath():If(e)}function uu(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function If(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pl(n,e,t){return{name:au(n,e),fields:t.value.mapValue.fields}}function U_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:le(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,I){return v.useProto3Json?(Re(I===void 0||typeof I=="string",58123),ut.fromBase64String(I||"")):(Re(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ut.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(v){const I=v.code===void 0?H.UNKNOWN:yf(v.code);return new ee(I,v.message||"")})(c);t=new vf(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fa(n,r.document.name),a=rn(r.document.updateTime),c=r.document.createTime?rn(r.document.createTime):pe.min(),p=new Et({mapValue:{fields:r.document.fields}}),_=pt.newFoundDocument(i,a,c,p),v=r.targetIds||[],I=r.removedTargetIds||[];t=new Io(v,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fa(n,r.document),a=r.readTime?rn(r.readTime):pe.min(),c=pt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Io([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fa(n,r.document),a=r.removedTargetIds||[];t=new Io([],a,i,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new R_(i,a),p=r.targetId;t=new _f(p,c)}}return t}function j_(n,e){let t;if(e instanceof Ds)t={update:pl(n,e.key,e.value)};else if(e instanceof ia)t={delete:au(n,e.key)};else if(e instanceof ur)t={update:pl(n,e.key,e.data),updateMask:Q_(e.fieldMask)};else{if(!(e instanceof b_))return le(16599,{Vt:e.type});t={verify:au(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof Ts)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ws)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Is)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Uo)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw le(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:M_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:le(27497)})(n,e.precondition)),t}function q_(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?rn(i.updateTime):rn(a);return c.isEqual(pe.min())&&(c=rn(a)),new w_(c,i.transformResults||[])})(t,e)))):[]}function B_(n,e){return{documents:[wf(n,e.path)]}}function $_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wf(n,i);const a=(function(v){if(v.length!==0)return bf($t.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(v){if(v.length!==0)return v.map((I=>(function(V){return{field:Zr(V.field),direction:W_(V.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=su(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function H_(n){let e=F_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Re(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(P){const V=Af(P);return V instanceof $t&&Zh(V)?V.getFilters():[V]})(t.where));let c=[];t.orderBy&&(c=(function(P){return P.map((V=>(function(z){return new Mo(ei(z.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(V)))})(t.orderBy));let p=null;t.limit&&(p=(function(P){let V;return V=typeof P=="object"?P.value:P,Jo(V)?null:V})(t.limit));let _=null;t.startAt&&(_=(function(P){const V=!!P.before,G=P.values||[];return new Lo(G,V)})(t.startAt));let v=null;return t.endAt&&(v=(function(P){const V=!P.before,G=P.values||[];return new Lo(G,V)})(t.endAt)),u_(e,i,c,a,p,"F",_,v)}function z_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Af(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ei(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(t.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ei(t.unaryFilter.field);return Qe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ei(t.unaryFilter.field);return Qe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Qe.create(ei(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return $t.create(t.compositeFilter.filters.map((r=>Af(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(t.compositeFilter.op))})(n):le(30097,{filter:n})}function W_(n){return x_[n]}function G_(n){return V_[n]}function K_(n){return O_[n]}function Zr(n){return{fieldPath:n.canonicalString()}}function ei(n){return at.fromServerFormat(n.fieldPath)}function bf(n){return n instanceof Qe?(function(t){if(t.op==="=="){if(tl(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NAN"}};if(el(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tl(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NAN"}};if(el(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(t.field),op:G_(t.op),value:t.value}}})(n):n instanceof $t?(function(t){const r=t.getFilters().map((i=>bf(i)));return r.length===1?r[0]:{compositeFilter:{op:K_(t.op),filters:r}}})(n):le(54877,{filter:n})}function Q_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class X_{constructor(e){this.yt=e}}function Y_(n){const e=H_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fo(e,e.limit,"L"):e}/**
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
 */class J_{constructor(){this.Cn=new Z_}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(er.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(er.min())}updateCollectionGroup(e,t,r){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class Z_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Je(xe.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(xe.comparator)).toArray()}}/**
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
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cf=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Cf,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class di{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new di(0)}static cr(){return new di(-1)}}/**
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
 */const ml="LruGarbageCollector",ev=1048576;function yl([n,e],[t,r]){const i=be(n,t);return i===0?be(e,r):i}class tv{constructor(e){this.Ir=e,this.buffer=new Je(yl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(ml,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ei(t)?re(ml,"Ignoring IndexedDB error during garbage collection: ",t):await vi(t)}await this.Vr(3e5)}))}}class rv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Yo.ce);const r=new tv(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(gl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((P=>(P>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),i=this.params.maximumSequenceNumbersToCollect):i=P,c=Date.now(),this.nthSequenceNumber(e,i)))).next((P=>(r=P,p=Date.now(),this.removeTargets(e,r,t)))).next((P=>(a=P,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((P=>(v=Date.now(),Yr()<=Ae.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${P} documents in `+(v-_)+`ms
Total Duration: ${v-I}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:P}))))}}function iv(n,e){return new rv(n,e)}/**
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
 */class sv{constructor(){this.changes=new Or((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?W.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ov{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class av{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&ds(r.mutation,i,bt.empty(),Oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Se()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Se()){const i=Cr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=ss();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=Cr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Se())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=wn();const c=fs(),p=(function(){return fs()})();return t.forEach(((_,v)=>{const I=r.get(v.key);i.has(v.key)&&(I===void 0||I.mutation instanceof ur)?a=a.insert(v.key,v):I!==void 0?(c.set(v.key,I.mutation.getFieldMask()),ds(I.mutation,v,I.mutation.getFieldMask(),Oe.now())):c.set(v.key,bt.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((v,I)=>c.set(v,I))),t.forEach(((v,I)=>p.set(v,new ov(I,c.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=fs();let i=new je(((c,p)=>c-p)),a=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const v=t.get(_);if(v===null)return;let I=r.get(_)||bt.empty();I=p.applyToLocalView(v,I),r.set(_,I);const P=(i.get(p.batchId)||Se()).add(_);i=i.insert(p.batchId,P)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,I=_.value,P=cf();I.forEach((V=>{if(!a.has(V)){const G=gf(t.get(V),r.get(V));G!==null&&P.set(V,G),a=a.add(V)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,P))}return W.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):W.resolve(Cr());let p=ys,_=a;return c.next((v=>W.forEach(v,((I,P)=>(p<P.largestBatchId&&(p=P.largestBatchId),a.get(I)?W.resolve():this.remoteDocumentCache.getEntry(e,I).next((V=>{_=_.insert(I,V)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,_,v,Se()))).next((I=>({batchId:p,changes:uf(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=ss();return this.indexManager.getCollectionParents(e,a).next((p=>W.forEach(p,(_=>{const v=(function(P,V){return new ks(V,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((I=>{I.forEach(((P,V)=>{c=c.insert(P,V)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,v)=>{const I=v.getKey();c.get(I)===null&&(c=c.insert(I,pt.newInvalidDocument(I)))}));let p=ss();return c.forEach(((_,v)=>{const I=a.get(_);I!==void 0&&ds(I.mutation,v,bt.empty(),Oe.now()),ta(t,v)&&(p=p.insert(_,v))})),p}))}}/**
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
 */class uv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Y_(i.bundledQuery),readTime:rn(i.readTime)}})(t)),W.resolve()}}/**
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
 */class cv{constructor(){this.overlays=new je(ae.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Cr();return W.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),W.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),W.resolve()}getOverlaysForCollection(e,t,r){const i=Cr(),a=t.length+1,c=new ae(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return W.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new je(((v,I)=>v-I));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let I=a.get(v.largestBatchId);I===null&&(I=Cr(),a=a.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const p=Cr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,I)=>p.set(v,I))),!(p.size()>=i)););return W.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new C_(t,r));let a=this.qr.get(t);a===void 0&&(a=Se(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
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
 */class lv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class hv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(nt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new S_(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new nt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return W.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Ru:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),i=new nt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),W.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(be);return t.forEach((i=>{const a=new nt(i,0),c=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),W.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const c=new nt(new ae(a),0);let p=new Je(be);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(_.Yr)),!0)}),c),W.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return W.forEach(t.mutations,(i=>{const a=new nt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),i=this.Zr.firstAfterOrEqual(r);return W.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fv{constructor(e){this.ri=e,this.docs=(function(){return new je(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return W.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(t))}getEntries(e,t){let r=wn();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():pt.newInvalidDocument(i))})),W.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=wn();const c=t.path,p=new ae(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:I}}=_.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||jy(Uy(I),r)<=0||(i.has(I.key)||ta(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return W.resolve(a)}getAllFromCollectionGroup(e,t,r,i){le(9500)}ii(e,t){return W.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new dv(this)}getSize(e){return W.resolve(this.size)}}class dv extends sv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class pv{constructor(e){this.persistence=e,this.si=new Or((t=>Du(t)),Nu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Fu,this.targetCount=0,this.ai=di.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new di(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),W.waitFor(a).next((()=>i))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return W.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),W.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),W.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return W.resolve(r)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
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
 */class Rf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Yo(0),this.li=!1,this.li=!0,this.hi=new lv,this.referenceDelegate=e(this),this.Pi=new pv(this),this.indexManager=new J_,this.remoteDocumentCache=(function(i){return new fv(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new X_(t),this.Ii=new uv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new hv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new gv(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return W.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class gv extends By{constructor(e){super(),this.currentSequenceNumber=e}}class Uu{constructor(e){this.persistence=e,this.Ri=new Fu,this.Vi=null}static mi(e){return new Uu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),W.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class qo{constructor(e,t){this.persistence=e,this.pi=new Or((r=>zy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=iv(this,t)}static mi(e,t){return new qo(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?W.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eo(e.data.value)),t}br(e,t,r){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return W.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Gd()?8:$y(gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new mv;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Yr()<=Ae.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Yr()<=Ae.DEBUG&&re("QueryEngine","Query:",Jr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Yr()<=Ae.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):W.resolve())}ys(e,t){if(sl(t))return W.resolve(null);let r=nn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Fo(t,null,"F"),r=nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Se(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const v=this.Ds(t,p);return this.Cs(t,v,c,_.readTime)?this.ys(e,Fo(t,null,"F")):this.vs(e,v,t,_)}))))})))))}ws(e,t,r,i){return sl(t)||i.isEqual(pe.min())?W.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?W.resolve(null):(Yr()<=Ae.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(t)),this.vs(e,c,t,Fy(i,ys)).next((p=>p)))}))}Ds(e,t){let r=new Je(of(e));return t.forEach(((i,a)=>{ta(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return Yr()<=Ae.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.ps.getDocumentsMatchingQuery(e,t,er.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
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
 */const qu="LocalStore",_v=3e8;class vv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new je(be),this.xs=new Or((a=>Du(a)),Nu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new av(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Ev(n,e,t,r){return new vv(n,e,t,r)}async function Pf(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Se();for(const v of i){c.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}for(const v of a){p.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((v=>({Ls:v,removedBatchIds:c,addedBatchIds:p})))}))}))}function Tv(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,I){const P=v.batch,V=P.keys();let G=W.resolve();return V.forEach((z=>{G=G.next((()=>I.getEntry(_,z))).next((Q=>{const Y=v.docVersions.get(z);Re(Y!==null,48541),Q.version.compareTo(Y)<0&&(P.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),I.addEntry(Q)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(_,P)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Se();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function kf(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function wv(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,P)=>{const V=i.get(P);if(!V)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,P).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,P))));let G=V.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(P)!==null?G=G.withResumeToken(ut.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(I.resumeToken,r)),i=i.insert(P,G),(function(Q,Y,J){return Q.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=_v?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(V,G,I)&&p.push(t.Pi.updateTargetData(a,G))}));let _=wn(),v=Se();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(Iv(a,c,e.documentUpdates).next((I=>{_=I.ks,v=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((P=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return W.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,v))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function Iv(n,e,t){let r=Se(),i=Se();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=wn();return t.forEach(((p,_)=>{const v=a.get(p);_.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!v.isValidDocument()||_.version.compareTo(v.version)>0||_.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(qu,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function Av(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ru),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function bv(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,W.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Gn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function cu(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Ei(c))throw c;re(qu,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function _l(n,e,t){const r=ge(n);let i=pe.min(),a=Se();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,v,I){const P=ge(_),V=P.xs.get(I);return V!==void 0?W.resolve(P.Ms.get(V)):P.Pi.getTargetData(v,I)})(r,c,nn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Se()))).next((p=>(Sv(r,l_(e),p),{documents:p,Qs:a})))))}function Sv(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class vl{constructor(){this.activeTargetIds=m_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cv{constructor(){this.Mo=new vl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new vl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rv{Oo(e){}shutdown(){}}/**
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
 */const El="ConnectivityMonitor";class Tl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(El,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(El,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function lu(){return fo===null?fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():fo++,"0x"+fo.toString(16)}/**
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
 */const Ua="RestConnection",Pv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Vo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=lu(),p=this.zo(e,t.toUriEncodedString());re(Ua,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:v}=new URL(p),I=gi(v);return this.Jo(e,p,_,r,I).then((P=>(re(Ua,`Received RPC '${e}' ${c}: `,P),P)),(P=>{throw ci(Ua,`RPC '${e}' ${c} failed with error: `,P,"url: ",p,"request:",r),P}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_i})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=Pv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Dv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ft="WebChannelConnection";class Nv extends kv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=lu();return new Promise(((p,_)=>{const v=new Nh;v.setWithCredentials(!0),v.listenOnce(xh.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case vo.NO_ERROR:const P=v.getResponseJson();re(ft,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(P)),p(P);break;case vo.TIMEOUT:re(ft,`RPC '${e}' ${c} timed out`),_(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const V=v.getStatus();if(re(ft,`RPC '${e}' ${c} failed with status:`,V,"response text:",v.getResponseText()),V>0){let G=v.getResponseJson();Array.isArray(G)&&(G=G[0]);const z=G?.error;if(z&&z.status&&z.message){const Q=(function(J){const ve=J.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(ve)>=0?ve:H.UNKNOWN})(z.status);_(new ee(Q,z.message))}else _(new ee(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new ee(H.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:c,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(ft,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ft,`RPC '${e}' ${c} sending request:`,i),v.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=lu(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Lh(),p=Oh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");re(ft,`Creating RPC '${e}' stream ${i}: ${I}`,_);const P=c.createWebChannel(I,_);this.I_(P);let V=!1,G=!1;const z=new Dv({Yo:Y=>{G?re(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(V||(re(ft,`Opening RPC '${e}' stream ${i} transport.`),P.open(),V=!0),re(ft,`RPC '${e}' stream ${i} sending:`,Y),P.send(Y))},Zo:()=>P.close()}),Q=(Y,J,ve)=>{Y.listen(J,(Ee=>{try{ve(Ee)}catch(De){setTimeout((()=>{throw De}),0)}}))};return Q(P,is.EventType.OPEN,(()=>{G||(re(ft,`RPC '${e}' stream ${i} transport opened.`),z.o_())})),Q(P,is.EventType.CLOSE,(()=>{G||(G=!0,re(ft,`RPC '${e}' stream ${i} transport closed`),z.a_(),this.E_(P))})),Q(P,is.EventType.ERROR,(Y=>{G||(G=!0,ci(ft,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),z.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))})),Q(P,is.EventType.MESSAGE,(Y=>{if(!G){const J=Y.data[0];Re(!!J,16349);const ve=J,Ee=ve?.error||ve[0]?.error;if(Ee){re(ft,`RPC '${e}' stream ${i} received error:`,Ee);const De=Ee.status;let Ze=(function(C){const S=Ke[C];if(S!==void 0)return yf(S)})(De),qe=Ee.message;Ze===void 0&&(Ze=H.INTERNAL,qe="Unknown error status: "+De+" with message "+Ee.message),G=!0,z.a_(new ee(Ze,qe)),P.close()}else re(ft,`RPC '${e}' stream ${i} received:`,J),z.u_(J)}})),Q(p,Vh.STAT_EVENT,(Y=>{Y.stat===Ja.PROXY?re(ft,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===Ja.NOPROXY&&re(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{z.__()}),0),z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ja(){return typeof document<"u"?document:null}/**
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
 */function oa(n){return new L_(n,!0)}/**
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
 */class Df{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const wl="PersistentStream";class Nf{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Df(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xv extends Nf{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=U_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?rn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=uu(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=ru(_)?{documents:B_(a,_)}:{query:$_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=Ef(a,c.resumeToken);const v=su(a,c.expectedCount);v!==null&&(p.expectedCount=v)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=jo(a,c.snapshotVersion.toTimestamp());const v=su(a,c.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=z_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=uu(this.serializer),t.removeTarget=e,this.q_(t)}}class Vv extends Nf{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=q_(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=uu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>j_(this.serializer,r)))};this.q_(t)}}/**
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
 */class Ov{}class Lv extends Ov{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,ou(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(H.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,ou(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Mv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tn(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xr="RemoteStore";class Fv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Lr(this)&&(re(xr,"Restarting streams for network reachability change."),await(async function(_){const v=ge(_);v.Ea.add(4),await xs(v),v.Ra.set("Unknown"),v.Ea.delete(4),await aa(v)})(this))}))})),this.Ra=new Mv(r,i)}}async function aa(n){if(Lr(n))for(const e of n.da)await e(!0)}async function xs(n){for(const e of n.da)await e(!1)}function xf(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),zu(t)?Hu(t):Ti(t).O_()&&$u(t,e))}function Bu(n,e){const t=ge(n),r=Ti(t);t.Ia.delete(e),r.O_()&&Vf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Lr(t)&&t.Ra.set("Unknown"))}function $u(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ti(n).Y_(e)}function Vf(n,e){n.Va.Ue(e),Ti(n).Z_(e)}function Hu(n){n.Va=new N_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ti(n).start(),n.Ra.ua()}function zu(n){return Lr(n)&&!Ti(n).x_()&&n.Ia.size>0}function Lr(n){return ge(n).Ea.size===0}function Of(n){n.Va=void 0}async function Uv(n){n.Ra.set("Online")}async function jv(n){n.Ia.forEach(((e,t)=>{$u(n,e)}))}async function qv(n,e){Of(n),zu(n)?(n.Ra.ha(e),Hu(n)):n.Ra.set("Unknown")}async function Bv(n,e,t){if(n.Ra.set("Online"),e instanceof vf&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(n,r)}else if(e instanceof Io?n.Va.Ze(e):e instanceof _f?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await kf(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,v)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(v);I&&a.Ia.set(v,I.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,v)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ut.EMPTY_BYTE_STRING,I.snapshotVersion)),Vf(a,_);const P=new Gn(I.target,_,v,I.sequenceNumber);$u(a,P)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(xr,"Failed to raise snapshot:",r),await Bo(n,r)}}async function Bo(n,e,t){if(!Ei(e))throw e;n.Ea.add(1),await xs(n),n.Ra.set("Offline"),t||(t=()=>kf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(xr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await aa(n)}))}function Lf(n,e){return e().catch((t=>Bo(n,t,e)))}async function ua(n){const e=ge(n),t=ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ru;for(;$v(e);)try{const i=await Av(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Hv(e,i)}catch(i){await Bo(e,i)}Mf(e)&&Ff(e)}function $v(n){return Lr(n)&&n.Ta.length<10}function Hv(n,e){n.Ta.push(e);const t=ir(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Mf(n){return Lr(n)&&!ir(n).x_()&&n.Ta.length>0}function Ff(n){ir(n).start()}async function zv(n){ir(n).ra()}async function Wv(n){const e=ir(n);for(const t of n.Ta)e.ea(t.mutations)}async function Gv(n,e,t){const r=n.Ta.shift(),i=Ou.from(r,e,t);await Lf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await ua(n)}async function Kv(n,e){e&&ir(n).X_&&await(async function(r,i){if((function(c){return P_(c)&&c!==H.ABORTED})(i.code)){const a=r.Ta.shift();ir(r).B_(),await Lf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await ua(r)}})(n,e),Mf(n)&&Ff(n)}async function Il(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(xr,"RemoteStore received new credentials");const r=Lr(t);t.Ea.add(3),await xs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await aa(t)}async function Qv(n,e){const t=ge(n);e?(t.Ea.delete(2),await aa(t)):e||(t.Ea.add(2),await xs(t),t.Ra.set("Unknown"))}function Ti(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new xv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Uv.bind(null,n),t_:jv.bind(null,n),r_:qv.bind(null,n),H_:Bv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),zu(n)?Hu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Of(n))}))),n.ma}function ir(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new Vv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:zv.bind(null,n),r_:Kv.bind(null,n),ta:Wv.bind(null,n),na:Gv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ua(n)):(await n.fa.stop(),n.Ta.length>0&&(re(xr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Wu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new Wu(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),Ei(n))return new ee(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=ss(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Al{constructor(){this.ga=new je(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class pi{constructor(e,t,r,i,a,c,p,_,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new pi(e,t,si.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Xv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Yv{constructor(){this.queries=bl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=bl(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function bl(){return new Or((n=>sf(n)),ea)}async function Uf(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new Xv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=Gu(c,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Ku(t)}async function jf(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jv(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&Ku(t)}function Zv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function Ku(n){n.Ca.forEach((e=>{e.next()}))}var hu,Sl;(Sl=hu||(hu={})).Ma="default",Sl.Cache="cache";class qf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hu.Cache}}/**
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
 */class Bf{constructor(e){this.key=e}}class $f{constructor(e){this.key=e}}class eE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=of(e),this.tu=new si(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Al,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,P)=>{const V=i.get(I),G=ta(this.query,P)?P:null,z=!!V&&this.mutatedKeys.has(V.key),Q=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Y=!1;V&&G?V.data.isEqual(G.data)?z!==Q&&(r.track({type:3,doc:G}),Y=!0):this.su(V,G)||(r.track({type:2,doc:G}),Y=!0,(_&&this.eu(G,_)>0||v&&this.eu(G,v)<0)&&(p=!0)):!V&&G?(r.track({type:0,doc:G}),Y=!0):V&&!G&&(r.track({type:1,doc:V}),Y=!0,(_||v)&&(p=!0)),Y&&(G?(c=c.add(G),a=Q?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,P)=>(function(G,z){const Q=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:Y})}};return Q(G)-Q(z)})(I.type,P.type)||this.eu(I.doc,P.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,v=_!==this.Za;return this.Za=_,c.length!==0||v?{snapshot:new pi(this.query,e.tu,a,c,e.mutatedKeys,_===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Al,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new $f(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Bf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qu="SyncEngine";class tE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nE{constructor(e){this.key=e,this.hu=!1}}class rE{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Or((p=>sf(p)),ea),this.Iu=new Map,this.Eu=new Set,this.du=new je(ae.comparator),this.Au=new Map,this.Ru=new Fu,this.Vu={},this.mu=new Map,this.fu=di.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function iE(n,e,t=!0){const r=Qf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Hf(r,e,t,!0),i}async function sE(n,e){const t=Qf(n);await Hf(t,e,!0,!1)}async function Hf(n,e,t,r){const i=await bv(n.localStore,nn(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await oE(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&xf(n.remoteStore,i),p}async function oE(n,e,t,r,i){n.pu=(P,V,G)=>(async function(Q,Y,J,ve){let Ee=Y.view.ru(J);Ee.Cs&&(Ee=await _l(Q.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,Ee))));const De=ve&&ve.targetChanges.get(Y.targetId),Ze=ve&&ve.targetMismatches.get(Y.targetId)!=null,qe=Y.view.applyChanges(Ee,Q.isPrimaryClient,De,Ze);return Rl(Q,Y.targetId,qe.au),qe.snapshot})(n,P,V,G);const a=await _l(n.localStore,e,!0),c=new eE(e,a.Qs),p=c.ru(a.documents),_=Ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=c.applyChanges(p,n.isPrimaryClient,_);Rl(n,t,v.au);const I=new tE(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function aE(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!ea(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await cu(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Bu(r.remoteStore,i.targetId),fu(r,i.targetId)})).catch(vi)):(fu(r,i.targetId),await cu(r.localStore,i.targetId,!0))}async function uE(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Bu(t.remoteStore,r.targetId))}async function cE(n,e,t){const r=mE(n);try{const i=await(function(c,p){const _=ge(c),v=Oe.now(),I=p.reduce(((G,z)=>G.add(z.key)),Se());let P,V;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let z=wn(),Q=Se();return _.Ns.getEntries(G,I).next((Y=>{z=Y,z.forEach(((J,ve)=>{ve.isValidDocument()||(Q=Q.add(J))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,z))).next((Y=>{P=Y;const J=[];for(const ve of p){const Ee=A_(ve,P.get(ve.key).overlayedDocument);Ee!=null&&J.push(new ur(ve.key,Ee,Xh(Ee.value.mapValue),Tt.exists(!0)))}return _.mutationQueue.addMutationBatch(G,v,J,p)})).next((Y=>{V=Y;const J=Y.applyToLocalDocumentSet(P,Q);return _.documentOverlayCache.saveOverlays(G,Y.batchId,J)}))})).then((()=>({batchId:V.batchId,changes:uf(P)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let v=c.Vu[c.currentUser.toKey()];v||(v=new je(be)),v=v.insert(p,_),c.Vu[c.currentUser.toKey()]=v})(r,i.batchId,t),await Vs(r,i.changes),await ua(r.remoteStore)}catch(i){const a=Gu(i,"Failed to persist write");t.reject(a)}}async function zf(n,e){const t=ge(n);try{const r=await wv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Re(c.hu,14607):i.removedDocuments.size>0&&(Re(c.hu,42227),c.hu=!1))})),await Vs(t,r,e)}catch(r){await vi(r)}}function Cl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let v=!1;_.queries.forEach(((I,P)=>{for(const V of P.Sa)V.va(p)&&(v=!0)})),v&&Ku(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lE(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new je(ae.comparator);c=c.insert(a,pt.newNoDocument(a,pe.min()));const p=Se().add(a),_=new sa(pe.min(),new Map,new je(be),c,p);await zf(r,_),r.du=r.du.remove(a),r.Au.delete(e),Xu(r)}else await cu(r.localStore,e,!1).then((()=>fu(r,e,t))).catch(vi)}async function hE(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await Tv(t.localStore,e);Gf(t,r,null),Wf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vs(t,i)}catch(i){await vi(i)}}async function fE(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let I;return _.mutationQueue.lookupMutationBatch(v,p).next((P=>(Re(P!==null,37113),I=P.keys(),_.mutationQueue.removeMutationBatch(v,P)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I))).next((()=>_.localDocuments.getDocuments(v,I)))}))})(r.localStore,e);Gf(r,e,t),Wf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vs(r,i)}catch(i){await vi(i)}}function Wf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Gf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function fu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Kf(n,r)}))}function Kf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Bu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Xu(n))}function Rl(n,e,t){for(const r of t)r instanceof Bf?(n.Ru.addReference(r.key,e),dE(n,r)):r instanceof $f?(re(Qu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Kf(n,r.key)):le(19791,{wu:r})}function dE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Qu,"New document in limbo: "+t),n.Eu.add(r),Xu(n))}function Xu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(xe.fromString(e)),r=n.fu.next();n.Au.set(r,new nE(t)),n.du=n.du.insert(t,r),xf(n.remoteStore,new Gn(nn(xu(t.path)),r,"TargetPurposeLimboResolution",Yo.ce))}}async function Vs(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const I=v?!v.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(v){i.push(v);const I=ju.As(_.targetId,v);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,v){const I=ge(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>W.forEach(v,(V=>W.forEach(V.Es,(G=>I.persistence.referenceDelegate.addReference(P,V.targetId,G))).next((()=>W.forEach(V.ds,(G=>I.persistence.referenceDelegate.removeReference(P,V.targetId,G)))))))))}catch(P){if(!Ei(P))throw P;re(qu,"Failed to update sequence numbers: "+P)}for(const P of v){const V=P.targetId;if(!P.fromCache){const G=I.Ms.get(V),z=G.snapshotVersion,Q=G.withLastLimboFreeSnapshotVersion(z);I.Ms=I.Ms.insert(V,Q)}}})(r.localStore,a))}async function pE(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re(Qu,"User change. New user:",e.toKey());const r=await Pf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ee(H.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vs(t,r.Ls)}}function gE(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let i=Se();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Qf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lE.bind(null,e),e.Pu.H_=Jv.bind(null,e.eventManager),e.Pu.yu=Zv.bind(null,e.eventManager),e}function mE(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fE.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ev(this.persistence,new yv,e.initialUser,this.serializer)}Cu(e){return new Rf(Uu.mi,this.serializer)}Du(e){return new Cv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class yE extends $o{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Re(this.persistence.referenceDelegate instanceof qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Rf((r=>qo.mi(r,t)),this.serializer)}}class du{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pE.bind(null,this.syncEngine),await Qv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Yv})()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=(function(a){return new Nv(a)})(e.databaseInfo);return(function(a,c,p,_){return new Lv(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new Fv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cl(this.syncEngine,t,0)),(function(){return Tl.v()?new Tl:new Rv})())}createSyncEngine(e,t){return(function(i,a,c,p,_,v,I){const P=new rE(i,a,c,p,_,v);return I&&(P.gu=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(xr,"RemoteStore shutting down."),r.Ea.add(5),await xs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}du.provider={build:()=>new du};/**
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
 */class Xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const sr="FirestoreClient";class _E{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(sr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(sr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function qa(n,e){n.asyncQueue.verifyOperationInProgress(),re(sr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Pf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Pl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vE(n);re(sr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Il(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Il(e.remoteStore,i))),n._onlineComponents=e}async function vE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(sr,"Using user provided OfflineComponentProvider");try{await qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ci("Error using user provided cache. Falling back to memory cache: "+t),await qa(n,new $o)}}else re(sr,"Using default OfflineComponentProvider"),await qa(n,new yE(void 0));return n._offlineComponents}async function Yf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(sr,"Using user provided OnlineComponentProvider"),await Pl(n,n._uninitializedComponentsProvider._online)):(re(sr,"Using default OnlineComponentProvider"),await Pl(n,new du))),n._onlineComponents}function EE(n){return Yf(n).then((e=>e.syncEngine))}async function Jf(n){const e=await Yf(n),t=e.eventManager;return t.onListen=iE.bind(null,e.syncEngine),t.onUnlisten=aE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uE.bind(null,e.syncEngine),t}function TE(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Xf({next:V=>{I.Nu(),c.enqueueAndForget((()=>jf(a,P)));const G=V.docs.has(p);!G&&V.fromCache?v.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&V.fromCache&&_&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new qf(xu(p.path),I,{includeMetadataChanges:!0,qa:!0});return Uf(a,P)})(await Jf(n),n.asyncQueue,e,t,r))),r.promise}function wE(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Xf({next:V=>{I.Nu(),c.enqueueAndForget((()=>jf(a,P))),V.fromCache&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new qf(p,I,{includeMetadataChanges:!0,qa:!0});return Uf(a,P)})(await Jf(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Zf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ed="firestore.googleapis.com",Dl=!0;class Nl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ed,this.ssl=Dl}else this.host=e.host,this.ssl=e.ssl??Dl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ev)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ly("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ca{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Sy;switch(r.type){case"firstParty":return new ky(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=kl.get(t);r&&(re("ComponentProvider","Removing Datastore"),kl.delete(t),r.terminate())})(this),Promise.resolve()}}function IE(n,e,t,r={}){n=Bt(n,ca);const i=gi(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(Hl(`https://${p}`),zl("Firestore",!0)),a.host!==ed&&a.host!==p&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!Pr(_,c)&&(n._setSettings(_),r.mockUserToken)){let v,I;if(typeof r.mockUserToken=="string")v=r.mockUserToken,I=dt.MOCK_USER;else{v=Fd(r.mockUserToken,n._app?.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new dt(P)}n._authCredentials=new Cy(new Fh(v,I))}}/**
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
 */class Mr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ps(t,We._jsonSchema))return new We(e,r||null,new ae(xe.fromString(t.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Xe("string",We._jsonSchemaVersion),referencePath:Xe("string")};class Zn extends Mr{constructor(e,t,r){super(e,t,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new ae(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function zE(n,e,...t){if(n=Ye(n),Uh("collection","path",e),n instanceof ca){const r=xe.fromString(e,...t);return zc(r),new Zn(n,null,r)}{if(!(n instanceof We||n instanceof Zn))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return zc(r),new Zn(n.firestore,null,r)}}function WE(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Cu.newId()),Uh("doc","path",e),n instanceof ca){const r=xe.fromString(e,...t);return Hc(r),new We(n,null,new ae(r))}{if(!(n instanceof We||n instanceof Zn))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Hc(r),new We(n.firestore,n instanceof Zn?n.converter:null,new ae(r))}}/**
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
 */const xl="AsyncQueue";class Vl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Df(this,"async_queue_retry"),this._c=()=>{const r=ja();r&&re(xl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _n;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ei(e))throw e;re(xl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Tn("INTERNAL UNHANDLED ERROR: ",Ol(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Wu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&le(47125,{Pc:Ol(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Fr extends ca{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Vl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vl(e),this._firestoreClient=void 0,await e}}}function AE(n,e){const t=typeof n=="object"?n:Ql(),r=typeof n=="string"?n:Vo,i=yu(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Ld("firestore");a&&IE(i,...a)}return i}function la(n){if(n._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bE(n),n._firestoreClient}function bE(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new Ky(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Zf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new _E(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
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
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(ut.fromBase64String(e))}catch(t){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ps(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Xe("string",Dt._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class Os{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ha{constructor(e){this._methodName=e}}/**
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
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Ps(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Xe("string",sn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
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
 */class on{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ps(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new on(e.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:Xe("string",on._jsonSchemaVersion),vectorValues:Xe("object")};/**
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
 */const SE=/^__.*__$/;class CE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ds(e,this.data,t,this.fieldTransforms)}}class td{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function nd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:n})}}class Yu{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ho(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(nd(this.Ac)&&SE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class RE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}Cc(e,t,r,i=!1){return new Yu({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fa(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new RE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rd(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Zu("Data must be an object, but it was:",c,r);const p=od(r,c);let _,v;if(a.merge)_=new bt(c.fieldMask),v=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const P of a.mergeFields){const V=pu(e,P,t);if(!c.contains(V))throw new ee(H.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);ud(I,V)||I.push(V)}_=new bt(I),v=c.fieldTransforms.filter((P=>_.covers(P.field)))}else _=null,v=c.fieldTransforms;return new CE(new Et(p),_,v)}class da extends ha{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof da}}class Ju extends ha{_toFieldTransform(e){return new E_(e.path,new Ts)}isEqual(e){return e instanceof Ju}}function id(n,e,t,r){const i=n.Cc(1,e,t);Zu("Data must be an object, but it was:",i,r);const a=[],c=Et.empty();ar(r,((_,v)=>{const I=ec(e,_,t);v=Ye(v);const P=i.yc(I);if(v instanceof da)a.push(I);else{const V=Ls(v,P);V!=null&&(a.push(I),c.set(I,V))}}));const p=new bt(a);return new td(c,p,i.fieldTransforms)}function sd(n,e,t,r,i,a){const c=n.Cc(1,e,t),p=[pu(e,r,t)],_=[i];if(a.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<a.length;V+=2)p.push(pu(e,a[V])),_.push(a[V+1]);const v=[],I=Et.empty();for(let V=p.length-1;V>=0;--V)if(!ud(v,p[V])){const G=p[V];let z=_[V];z=Ye(z);const Q=c.yc(G);if(z instanceof da)v.push(G);else{const Y=Ls(z,Q);Y!=null&&(v.push(G),I.set(G,Y))}}const P=new bt(v);return new td(I,P,c.fieldTransforms)}function PE(n,e,t,r=!1){return Ls(t,n.Cc(r?4:3,e))}function Ls(n,e){if(ad(n=Ye(n)))return Zu("Unsupported field value:",e,n),od(n,e);if(n instanceof ha)return(function(r,i){if(!nd(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Ls(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return y_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Oe.fromDate(r);return{timestampValue:jo(i.serializer,a)}}if(r instanceof Oe){const a=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(i.serializer,a)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:Ef(i.serializer,r._byteString)};if(r instanceof We){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Mu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof on)return(function(c,p){return{mapValue:{fields:{[Kh]:{stringValue:Qh},[Oo]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return Vu(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Xo(r)}`)})(n,e)}function od(n,e){const t={};return Bh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(n,((r,i)=>{const a=Ls(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function ad(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof sn||n instanceof Dt||n instanceof We||n instanceof ha||n instanceof on)}function Zu(n,e,t){if(!ad(t)||!jh(t)){const r=Xo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function pu(n,e,t){if((e=Ye(e))instanceof Os)return e._internalPath;if(typeof e=="string")return ec(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const kE=new RegExp("[~\\*/\\[\\]]");function ec(n,e,t){if(e.search(kE)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Os(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ee(H.INVALID_ARGUMENT,p+n+_)}function ud(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class cd{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DE extends cd{data(){return super.data()}}function tc(n,e){return typeof e=="string"?ec(n,e):e instanceof Os?e._internalPath:e._delegate._internalPath}/**
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
 */function NE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nc{}class ld extends nc{}function GE(n,e,...t){let r=[];e instanceof nc&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof rc)).length,p=a.filter((_=>_ instanceof pa)).length;if(c>1||c>0&&p>0)throw new ee(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class pa extends ld{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new pa(e,t,r)}_apply(e){const t=this._parse(e);return hd(e._query,t),new Mr(e.firestore,e.converter,iu(e._query,t))}_parse(e){const t=fa(e.firestore);return(function(a,c,p,_,v,I,P){let V;if(v.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ee(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Ml(P,I);const z=[];for(const Q of P)z.push(Ll(_,a,Q));V={arrayValue:{values:z}}}else V=Ll(_,a,P)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Ml(P,I),V=PE(p,c,P,I==="in"||I==="not-in");return Qe.create(v,I,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function KE(n,e,t){const r=e,i=tc("where",n);return pa._create(i,r,t)}class rc extends nc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:$t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)hd(c,_),c=iu(c,_)})(e._query,t),new Mr(e.firestore,e.converter,iu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ic extends ld{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ic(e,t,r)}_apply(e){return new Mr(e.firestore,e.converter,Fo(e._query,this._limit,this._limitType))}}function QE(n){return My("limit",n),ic._create("limit",n,"F")}function Ll(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new ee(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rf(e)&&t.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(xe.fromString(t));if(!ae.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zc(n,new ae(r))}if(t instanceof We)return Zc(n,t._key);throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xo(t)}.`)}function Ml(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hd(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xE{convertValue(e,t="none"){switch(rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ar(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Oo].arrayValue?.values?.map((r=>ze(r.doubleValue)));return new on(t)}convertGeoPoint(e){return new sn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const t=tr(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Re(Sf(r),9688,{name:e});const i=new vs(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||Tn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function fd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class as{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rr extends cd{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Rr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:Xe("string",Rr._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class Ao extends Rr{data(e={}){return super.data(e)}}class oi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ao(this._firestore,this._userDataWriter,r.key,r,new as(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new Ao(i._firestore,i._userDataWriter,p.doc.key,p.doc,new as(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new Ao(i._firestore,i._userDataWriter,p.doc.key,p.doc,new as(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,I=-1;return p.type!==0&&(v=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:VE(p.type),doc:_,oldIndex:v,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function VE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:n})}}/**
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
 */function XE(n){n=Bt(n,We);const e=Bt(n.firestore,Fr);return TE(la(e),n._key).then((t=>OE(e,n,t)))}oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Xe("string",oi._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class dd extends xE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function YE(n){n=Bt(n,Mr);const e=Bt(n.firestore,Fr),t=la(e),r=new dd(e);return NE(n._query),wE(t,n._query).then((i=>new oi(e,r,n,i)))}function JE(n,e,t){n=Bt(n,We);const r=Bt(n.firestore,Fr),i=fd(n.converter,e,t);return ga(r,[rd(fa(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Tt.none())])}function ZE(n,e,t,...r){n=Bt(n,We);const i=Bt(n.firestore,Fr),a=fa(i);let c;return c=typeof(e=Ye(e))=="string"||e instanceof Os?sd(a,"updateDoc",n._key,e,t,r):id(a,"updateDoc",n._key,e),ga(i,[c.toMutation(n._key,Tt.exists(!0))])}function eT(n){return ga(Bt(n.firestore,Fr),[new ia(n._key,Tt.none())])}function ga(n,e){return(function(r,i){const a=new _n;return r.asyncQueue.enqueueAndForget((async()=>cE(await EE(r),i,a))),a.promise})(la(n),e)}function OE(n,e,t){const r=t.docs.get(e._key),i=new dd(n);return new Rr(n,i,e._key,r,new as(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class LE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fa(e)}set(e,t,r){this._verifyNotCommitted();const i=Ba(e,this._firestore),a=fd(i.converter,t,r),c=rd(this._dataReader,"WriteBatch.set",i._key,a,i.converter!==null,r);return this._mutations.push(c.toMutation(i._key,Tt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const a=Ba(e,this._firestore);let c;return c=typeof(t=Ye(t))=="string"||t instanceof Os?sd(this._dataReader,"WriteBatch.update",a._key,t,r,i):id(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(c.toMutation(a._key,Tt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ba(e,this._firestore);return this._mutations=this._mutations.concat(new ia(t._key,Tt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ba(n,e){if((n=Ye(n)).firestore!==e)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function tT(){return new Ju("serverTimestamp")}/**
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
 */function nT(n){return la(n=Bt(n,Fr)),new LE(n,(e=>ga(n,e)))}(function(e,t=!0){(function(i){_i=i})(mi),ai(new kr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Fr(new Ry(r.getProvider("auth-internal")),new Dy(c,r.getProvider("app-check-internal")),(function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(v.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Xn(jc,qc,e),Xn(jc,qc,"esm2020")})();const ME={apiKey:"AIzaSyAvl97egeN85l_94HfsQFKlHJIfOuAz0u8",authDomain:"coffeehawka.firebaseapp.com",projectId:"coffeehawka",storageBucket:"coffeehawka.firebasestorage.app",messagingSenderId:"632813959707",appId:"1:632813959707:web:76412d4f87aa15ded496be"},pd=Kl(ME),rT=Ay(pd),iT=AE(pd);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=ye(r).data("tema").split("|");ye("html").attr("data-theme",i),ye('meta[name="theme-color"]').length?ye('meta[name="theme-color"]').attr("content",a):ye("<meta>",{name:"theme-color",content:a}).appendTo("head"),gd("wiTema",`${i}|${a}`,720),ye(".mtha").removeClass("mtha"),ye(r).addClass("mtha")},t=()=>{ye(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=md("wiTema"),i=ye(`[data-tema="${r}"]`)[0]||ye(".mtha")[0]||ye("[data-tema]").first()[0];i&&e(i),ye(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return ye(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const sT=(()=>{const n=()=>{const e=new Date;ye(".wty").text(e.getFullYear()),ye(".wtu").text(e.toLocaleString()),ye(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),ye(".abwc").toggleClass("dpn")})};return ye(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})(),oT=n=>{ye("#loading-style").length||ye("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#ffd105,#1e3a8a,#ffd105);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),ye(".loading").length||ye("body").append('<div class="loading" style="display:none"></div>'),ye(".loading").toggle(!!n)},aT=n=>{const e=n==="smiletop"?"smiletop.html":"smile.html";window.location.href=new URL(e,window.location.href).toString()};function uT(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};ye("#notificationsContainer").length||ye("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=ye(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);ye("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const cT=(n,e="success")=>{ye(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=ye(`
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
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function gd(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function md(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),FE(n),null}}function FE(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function lT(n,e,t){ye(window).on("beforeunload",function(){ye(n).each(function(){const r=ye(this),i=r.attr(e);i&&gd(i,t(r),168)})})}function hT(n,e,t){ye(n).each(function(){const r=ye(this),i=r.attr(e),a=md(i);i&&a!=null&&t(r,a)})}function UE(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,c=a?"top":t;if(ye("#witip-styles").length||ye('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return ye(n).each((Ze,qe)=>UE(qe,e,t,r)),ye(n);const p=ye(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),ye(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=ye("<div>",{class:`witip ${c} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),ye("body").append(v);const{left:I,top:P,right:V,bottom:G,width:z,height:Q}=p[0].getBoundingClientRect(),Y=v.outerWidth(),J=v.outerHeight(),ve={top:{x:I+z/2-Y/2,y:P-J-8},bottom:{x:I+z/2-Y/2,y:G+8},left:{x:I-Y-8,y:P+Q/2-J/2},right:{x:V+8,y:P+Q/2-J/2}};let{x:Ee,y:De}=ve[c];return Ee=Math.max(8,Math.min(Ee,window.innerWidth-Y-8)),De=Math.max(8,Math.min(De,window.innerHeight-J-8)),v.css({left:Ee,top:De}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}const fT=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),c=t.getMonth(),p=t.getDate();return(i<c||i===c&&a<p)&&r--,r};export{ye as $,hT as A,ZE as B,cT as M,uT as N,iT as a,YE as b,zE as c,WE as d,KE as e,rT as f,XE as g,gd as h,aT as i,jE as j,fT as k,md as l,QE as m,$E as n,BE as o,JE as p,GE as q,FE as r,qE as s,tT as t,sT as u,oT as v,UE as w,eT as x,nT as y,lT as z};
