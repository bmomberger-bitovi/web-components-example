(function(j,M){typeof exports=="object"&&typeof module<"u"?M(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],M):(j=typeof globalThis<"u"?globalThis:j||self,M(j.React,j.ReactDOM))})(this,function(j,M){"use strict";var Qe=Object.defineProperty,et=(t,i,o)=>i in t?Qe(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,H=(t,i,o)=>(et(t,typeof i!="symbol"?i+"":i,o),o);const tt={stringify:t=>t,parse:t=>t},rt={stringify:t=>`${t}`,parse:t=>parseFloat(t)},nt={stringify:t=>t?"true":"false",parse:t=>/^[ty1-9]/i.test(t)},it={stringify:t=>t.name,parse:(t,i)=>{const o=(()=>{if(typeof window<"u"&&t in window)return window[t];if(typeof global<"u"&&t in global)return global[t]})();return typeof o=="function"?o.bind(i):void 0}},st={stringify:t=>JSON.stringify(t),parse:t=>JSON.parse(t)},oe={string:tt,number:rt,boolean:nt,function:it,json:st},ae=Symbol.for("r2wc.render"),X=Symbol.for("r2wc.connected"),L=Symbol.for("r2wc.context"),D=Symbol.for("r2wc.props");function ot(t,i,o){var r,s,l;i.props||(i.props=t.propTypes?Object.keys(t.propTypes):[]);const u=(Array.isArray(i.props)?i.props.slice():Object.keys(i.props)).filter(m=>m!=="container"),f={},v={},R={};for(const m of u){f[m]=Array.isArray(i.props)?"string":i.props[m];const S=at(m);v[m]=S,R[S]=m}class b extends HTMLElement{constructor(){super(),H(this,r,!0),H(this,s),H(this,l,{}),H(this,"container"),i.shadow?this.container=this.attachShadow({mode:i.shadow}):this.container=this,this[D].container=this.container;for(const S of u){const A=v[S],F=this.getAttribute(A),T=f[S],x=oe[T];F&&x!=null&&x.parse&&(this[D][S]=x.parse(F,this))}}static get observedAttributes(){return Object.keys(R)}connectedCallback(){this[X]=!0,this[ae]()}disconnectedCallback(){this[X]=!1,this[L]&&o.unmount(this[L])}attributeChangedCallback(S,A,F){const T=R[S],x=f[T],P=oe[x];T in f&&P!=null&&P.parse&&(this[D][T]=P.parse(F,this),this[ae]())}[(r=X,s=L,l=D,ae)](){this[X]&&(this[L]?o.update(this[L],this[D]):this[L]=o.mount(this.container,t,this[D]))}}for(const m of u){const S=v[m],A=f[m];Object.defineProperty(b.prototype,m,{enumerable:!0,configurable:!0,get(){return this[D][m]},set(F){this[D][m]=F;const T=oe[A];if(T!=null&&T.stringify){const x=T.stringify(F);this.getAttribute(S)!==x&&this.setAttribute(S,x)}}})}return b}function at(t=""){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}var ue,K=M;if(process.env.NODE_ENV==="production")ue=K.createRoot,K.hydrateRoot;else{var be=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ue=function(t,i){be.usingClientEntryPoint=!0;try{return K.createRoot(t,i)}finally{be.usingClientEntryPoint=!1}}}function ut(t,i,o){const r=ue(t),s=j.createElement(i,o);return r.render(s),{root:r,ReactComponent:i}}function lt({root:t,ReactComponent:i},o){const r=j.createElement(i,o);t.render(r)}function ct({root:t}){t.unmount()}function ft(t,i={}){return ot(t,i,{mount:ut,update:lt,unmount:ct})}function dt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var le={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function ht(){if(Re)return V;Re=1;var t=j,i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,v,R){var b,m={},S=null,A=null;R!==void 0&&(S=""+R),v.key!==void 0&&(S=""+v.key),v.ref!==void 0&&(A=v.ref);for(b in v)r.call(v,b)&&!l.hasOwnProperty(b)&&(m[b]=v[b]);if(f&&f.defaultProps)for(b in v=f.defaultProps,v)m[b]===void 0&&(m[b]=v[b]);return{$$typeof:i,type:f,key:S,ref:A,props:m,_owner:s.current}}return V.Fragment=o,V.jsx=u,V.jsxs=u,V}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function pt(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){var t=j,i=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),F=Symbol.iterator,T="@@iterator";function x(e){if(e===null||typeof e!="object")return null;var n=F&&e[F]||e[T];return typeof n=="function"?n:null}var P=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];xt("error",e,a)}}function xt(e,n,a){{var c=P.ReactDebugCurrentFrame,p=c.getStackAddendum();p!==""&&(n+="%s",a=a.concat([p]));var y=a.map(function(h){return String(h)});y.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,y)}}var Pt=!1,kt=!1,At=!1,Nt=!1,zt=!1,Fe;Fe=Symbol.for("react.module.reference");function Dt(e){return!!(typeof e=="string"||typeof e=="function"||e===r||e===l||zt||e===s||e===R||e===b||Nt||e===A||Pt||kt||At||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===Fe||e.getModuleId!==void 0))}function It(e,n,a){var c=e.displayName;if(c)return c;var p=n.displayName||n.name||"";return p!==""?a+"("+p+")":a}function xe(e){return e.displayName||"Context"}function N(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case r:return"Fragment";case o:return"Portal";case l:return"Profiler";case s:return"StrictMode";case R:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case f:var n=e;return xe(n)+".Consumer";case u:var a=e;return xe(a._context)+".Provider";case v:return It(e,e.render,"ForwardRef");case m:var c=e.displayName||null;return c!==null?c:N(e.type)||"Memo";case S:{var p=e,y=p._payload,h=p._init;try{return N(h(y))}catch{return null}}}return null}var I=Object.assign,J=0,Pe,ke,Ae,Ne,ze,De,Ie;function Le(){}Le.__reactDisabledLog=!0;function Lt(){{if(J===0){Pe=console.log,ke=console.info,Ae=console.warn,Ne=console.error,ze=console.group,De=console.groupCollapsed,Ie=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Le,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}J++}}function Wt(){{if(J--,J===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:Pe}),info:I({},e,{value:ke}),warn:I({},e,{value:Ae}),error:I({},e,{value:Ne}),group:I({},e,{value:ze}),groupCollapsed:I({},e,{value:De}),groupEnd:I({},e,{value:Ie})})}J<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var he=P.ReactCurrentDispatcher,pe;function te(e,n,a){{if(pe===void 0)try{throw Error()}catch(p){var c=p.stack.trim().match(/\n( *(at )?)/);pe=c&&c[1]||""}return`
`+pe+e}}var ve=!1,re;{var Yt=typeof WeakMap=="function"?WeakMap:Map;re=new Yt}function We(e,n){if(!e||ve)return"";{var a=re.get(e);if(a!==void 0)return a}var c;ve=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=he.current,he.current=null,Lt();try{if(n){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(z){c=z}Reflect.construct(e,[],h)}else{try{h.call()}catch(z){c=z}e.call(h.prototype)}}else{try{throw Error()}catch(z){c=z}e()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),w=c.stack.split(`
`),_=d.length-1,g=w.length-1;_>=1&&g>=0&&d[_]!==w[g];)g--;for(;_>=1&&g>=0;_--,g--)if(d[_]!==w[g]){if(_!==1||g!==1)do if(_--,g--,g<0||d[_]!==w[g]){var O=`
`+d[_].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&re.set(e,O),O}while(_>=1&&g>=0);break}}}finally{ve=!1,he.current=y,Wt(),Error.prepareStackTrace=p}var $=e?e.displayName||e.name:"",Ze=$?te($):"";return typeof e=="function"&&re.set(e,Ze),Ze}function $t(e,n,a){return We(e,!1)}function Mt(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function ne(e,n,a){if(e==null)return"";if(typeof e=="function")return We(e,Mt(e));if(typeof e=="string")return te(e);switch(e){case R:return te("Suspense");case b:return te("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return $t(e.render);case m:return ne(e.type,n,a);case S:{var c=e,p=c._payload,y=c._init;try{return ne(y(p),n,a)}catch{}}}return""}var ie=Object.prototype.hasOwnProperty,Ye={},$e=P.ReactDebugCurrentFrame;function se(e){if(e){var n=e._owner,a=ne(e.type,e._source,n?n.type:null);$e.setExtraStackFrame(a)}else $e.setExtraStackFrame(null)}function Vt(e,n,a,c,p){{var y=Function.call.bind(ie);for(var h in e)if(y(e,h)){var d=void 0;try{if(typeof e[h]!="function"){var w=Error((c||"React class")+": "+a+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw w.name="Invariant Violation",w}d=e[h](n,h,c,a,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(_){d=_}d&&!(d instanceof Error)&&(se(p),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",a,h,typeof d),se(null)),d instanceof Error&&!(d.message in Ye)&&(Ye[d.message]=!0,se(p),E("Failed %s type: %s",a,d.message),se(null))}}}var Ut=Array.isArray;function ye(e){return Ut(e)}function qt(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,a=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return a}}function Bt(e){try{return Me(e),!1}catch{return!0}}function Me(e){return""+e}function Ve(e){if(Bt(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",qt(e)),Me(e)}var G=P.ReactCurrentOwner,Jt={key:!0,ref:!0,__self:!0,__source:!0},Ue,qe,me;me={};function Gt(e){if(ie.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function Ht(e){if(ie.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function Xt(e,n){if(typeof e.ref=="string"&&G.current&&n&&G.current.stateNode!==n){var a=N(G.current.type);me[a]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',N(G.current.type),e.ref),me[a]=!0)}}function Kt(e,n){{var a=function(){Ue||(Ue=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};a.isReactWarning=!0,Object.defineProperty(e,"key",{get:a,configurable:!0})}}function Zt(e,n){{var a=function(){qe||(qe=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};a.isReactWarning=!0,Object.defineProperty(e,"ref",{get:a,configurable:!0})}}var Qt=function(e,n,a,c,p,y,h){var d={$$typeof:i,type:e,key:n,ref:a,props:h,_owner:y};return d._store={},Object.defineProperty(d._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(d,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(d,"_source",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.freeze&&(Object.freeze(d.props),Object.freeze(d)),d};function er(e,n,a,c,p){{var y,h={},d=null,w=null;a!==void 0&&(Ve(a),d=""+a),Ht(n)&&(Ve(n.key),d=""+n.key),Gt(n)&&(w=n.ref,Xt(n,p));for(y in n)ie.call(n,y)&&!Jt.hasOwnProperty(y)&&(h[y]=n[y]);if(e&&e.defaultProps){var _=e.defaultProps;for(y in _)h[y]===void 0&&(h[y]=_[y])}if(d||w){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;d&&Kt(h,g),w&&Zt(h,g)}return Qt(e,d,w,p,c,G.current,h)}}var _e=P.ReactCurrentOwner,Be=P.ReactDebugCurrentFrame;function Y(e){if(e){var n=e._owner,a=ne(e.type,e._source,n?n.type:null);Be.setExtraStackFrame(a)}else Be.setExtraStackFrame(null)}var ge;ge=!1;function Se(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function Je(){{if(_e.current){var e=N(_e.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function tr(e){{if(e!==void 0){var n=e.fileName.replace(/^.*[\\\/]/,""),a=e.lineNumber;return`

Check your code at `+n+":"+a+"."}return""}}var Ge={};function rr(e){{var n=Je();if(!n){var a=typeof e=="string"?e:e.displayName||e.name;a&&(n=`

Check the top-level render call using <`+a+">.")}return n}}function He(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var a=rr(n);if(Ge[a])return;Ge[a]=!0;var c="";e&&e._owner&&e._owner!==_e.current&&(c=" It was passed a child from "+N(e._owner.type)+"."),Y(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',a,c),Y(null)}}function Xe(e,n){{if(typeof e!="object")return;if(ye(e))for(var a=0;a<e.length;a++){var c=e[a];Se(c)&&He(c,n)}else if(Se(e))e._store&&(e._store.validated=!0);else if(e){var p=x(e);if(typeof p=="function"&&p!==e.entries)for(var y=p.call(e),h;!(h=y.next()).done;)Se(h.value)&&He(h.value,n)}}}function nr(e){{var n=e.type;if(n==null||typeof n=="string")return;var a;if(typeof n=="function")a=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===v||n.$$typeof===m))a=n.propTypes;else return;if(a){var c=N(n);Vt(a,e.props,"prop",c,e)}else if(n.PropTypes!==void 0&&!ge){ge=!0;var p=N(n);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",p||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ir(e){{for(var n=Object.keys(e.props),a=0;a<n.length;a++){var c=n[a];if(c!=="children"&&c!=="key"){Y(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),Y(null);break}}e.ref!==null&&(Y(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),Y(null))}}function Ke(e,n,a,c,p,y){{var h=Dt(e);if(!h){var d="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var w=tr(p);w?d+=w:d+=Je();var _;e===null?_="null":ye(e)?_="array":e!==void 0&&e.$$typeof===i?(_="<"+(N(e.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):_=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",_,d)}var g=er(e,n,a,p,y);if(g==null)return g;if(h){var O=n.children;if(O!==void 0)if(c)if(ye(O)){for(var $=0;$<O.length;$++)Xe(O[$],e);Object.freeze&&Object.freeze(O)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xe(O,e)}return e===r?ir(g):nr(g),g}}function sr(e,n,a){return Ke(e,n,a,!0)}function or(e,n,a){return Ke(e,n,a,!1)}var ar=or,ur=sr;U.Fragment=r,U.jsx=ar,U.jsxs=ur}()),U}process.env.NODE_ENV==="production"?le.exports=ht():le.exports=pt();var C=le.exports,q={},B=j;function vt(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Z=vt(B);function we(t,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yt(t,i,o){return i&&we(t.prototype,i),o&&we(t,o),t}var Q=typeof process<"u"&&process.env&&process.env.NODE_ENV==="production",ce=function(t){return Object.prototype.toString.call(t)==="[object String]"},mt=function(){function t(o){var r=o===void 0?{}:o,s=r.name,l=s===void 0?"stylesheet":s,u=r.optimizeForSpeed,f=u===void 0?Q:u;k(ce(l),"`name` must be a string"),this._name=l,this._deletedRulePlaceholder="#"+l+"-deleted-rule____{}",k(typeof f=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=f,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var v=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=v?v.getAttribute("content"):null}var i=t.prototype;return i.setOptimizeForSpeed=function(r){k(typeof r=="boolean","`setOptimizeForSpeed` accepts a boolean"),k(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=r,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var r=this;if(k(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(Q||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(s,l){return typeof l=="number"?r._serverSheet.cssRules[l]={cssText:s}:r._serverSheet.cssRules.push({cssText:s}),l},deleteRule:function(s){r._serverSheet.cssRules[s]=null}}},i.getSheetForTag=function(r){if(r.sheet)return r.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===r)return document.styleSheets[s]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(r,s){if(k(ce(r),"`insertRule` accepts only strings"),typeof window>"u")return typeof s!="number"&&(s=this._serverSheet.cssRules.length),this._serverSheet.insertRule(r,s),this._rulesCount++;if(this._optimizeForSpeed){var l=this.getSheet();typeof s!="number"&&(s=l.cssRules.length);try{l.insertRule(r,s)}catch{return Q||console.warn(`StyleSheet: illegal rule: 

`+r+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var u=this._tags[s];this._tags.push(this.makeStyleTag(this._name,r,u))}return this._rulesCount++},i.replaceRule=function(r,s){if(this._optimizeForSpeed||typeof window>"u"){var l=typeof window<"u"?this.getSheet():this._serverSheet;if(s.trim()||(s=this._deletedRulePlaceholder),!l.cssRules[r])return r;l.deleteRule(r);try{l.insertRule(s,r)}catch{Q||console.warn(`StyleSheet: illegal rule: 

`+s+`

See https://stackoverflow.com/q/20007992 for more info`),l.insertRule(this._deletedRulePlaceholder,r)}}else{var u=this._tags[r];k(u,"old rule at index `"+r+"` not found"),u.textContent=s}return r},i.deleteRule=function(r){if(typeof window>"u"){this._serverSheet.deleteRule(r);return}if(this._optimizeForSpeed)this.replaceRule(r,"");else{var s=this._tags[r];k(s,"rule at index `"+r+"` not found"),s.parentNode.removeChild(s),this._tags[r]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(r){return r&&r.parentNode.removeChild(r)}),this._tags=[]):this._serverSheet.cssRules=[]},i.cssRules=function(){var r=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(s,l){return l?s=s.concat(Array.prototype.map.call(r.getSheetForTag(l).cssRules,function(u){return u.cssText===r._deletedRulePlaceholder?null:u})):s.push(null),s},[])},i.makeStyleTag=function(r,s,l){s&&k(ce(s),"makeStyleTag accepts only strings as second parameter");var u=document.createElement("style");this._nonce&&u.setAttribute("nonce",this._nonce),u.type="text/css",u.setAttribute("data-"+r,""),s&&u.appendChild(document.createTextNode(s));var f=document.head||document.getElementsByTagName("head")[0];return l?f.insertBefore(u,l):f.appendChild(u),u},yt(t,[{key:"length",get:function(){return this._rulesCount}}]),t}();function k(t,i){if(!t)throw new Error("StyleSheet: "+i+".")}function _t(t){for(var i=5381,o=t.length;o;)i=i*33^t.charCodeAt(--o);return i>>>0}var gt=_t,St=function(t){return t.replace(/\/style/gi,"\\/style")},W={};function fe(t,i){if(!i)return"jsx-"+t;var o=String(i),r=t+o;return W[r]||(W[r]="jsx-"+gt(t+"-"+o)),W[r]}function je(t,i){var o=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(i=St(i));var r=t+i;return W[r]||(W[r]=i.replace(o,t)),W[r]}function bt(t,i){return i===void 0&&(i={}),t.map(function(o){var r=o[0],s=o[1];return Z.default.createElement("style",{id:"__"+r,key:"__"+r,nonce:i.nonce?i.nonce:void 0,dangerouslySetInnerHTML:{__html:s}})})}var Rt=function(){function t(o){var r=o===void 0?{}:o,s=r.styleSheet,l=s===void 0?null:s,u=r.optimizeForSpeed,f=u===void 0?!1:u;this._sheet=l||new mt({name:"styled-jsx",optimizeForSpeed:f}),this._sheet.inject(),l&&typeof f=="boolean"&&(this._sheet.setOptimizeForSpeed(f),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var i=t.prototype;return i.add=function(r){var s=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(r.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(R,b){return R[b]=0,R},{}));var l=this.getIdAndRules(r),u=l.styleId,f=l.rules;if(u in this._instancesCounts){this._instancesCounts[u]+=1;return}var v=f.map(function(R){return s._sheet.insertRule(R)}).filter(function(R){return R!==-1});this._indices[u]=v,this._instancesCounts[u]=1},i.remove=function(r){var s=this,l=this.getIdAndRules(r).styleId;if(Et(l in this._instancesCounts,"styleId: `"+l+"` not found"),this._instancesCounts[l]-=1,this._instancesCounts[l]<1){var u=this._fromServer&&this._fromServer[l];u?(u.parentNode.removeChild(u),delete this._fromServer[l]):(this._indices[l].forEach(function(f){return s._sheet.deleteRule(f)}),delete this._indices[l]),delete this._instancesCounts[l]}},i.update=function(r,s){this.add(s),this.remove(r)},i.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},i.cssRules=function(){var r=this,s=this._fromServer?Object.keys(this._fromServer).map(function(u){return[u,r._fromServer[u]]}):[],l=this._sheet.cssRules();return s.concat(Object.keys(this._indices).map(function(u){return[u,r._indices[u].map(function(f){return l[f].cssText}).join(r._optimizeForSpeed?"":`
`)]}).filter(function(u){return!!u[1]}))},i.styles=function(r){return bt(this.cssRules(),r)},i.getIdAndRules=function(r){var s=r.children,l=r.dynamic,u=r.id;if(l){var f=fe(u,l);return{styleId:f,rules:Array.isArray(s)?s.map(function(v){return je(f,v)}):[je(f,s)]}}return{styleId:fe(u),rules:Array.isArray(s)?s:[s]}},i.selectFromServer=function(){var r=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return r.reduce(function(s,l){var u=l.id.slice(2);return s[u]=l,s},{})},t}();function Et(t,i){if(!t)throw new Error("StyleSheetRegistry: "+i+".")}var ee=B.createContext(null);ee.displayName="StyleSheetContext";function de(){return new Rt}function wt(t){var i=t.registry,o=t.children,r=B.useContext(ee),s=B.useState(function(){return r||i||de()}),l=s[0];return Z.default.createElement(ee.Provider,{value:l},o)}function Ce(){return B.useContext(ee)}var jt=Z.default.useInsertionEffect||Z.default.useLayoutEffect,Oe=typeof window<"u"?de():void 0;function Te(t){var i=Oe||Ce();return i?typeof window>"u"?(i.add(t),null):(jt(function(){return i.add(t),function(){i.remove(t)}},[t.id,String(t.dynamic)]),null):null}Te.dynamic=function(t){return t.map(function(i){var o=i[0],r=i[1];return fe(o,r)}).join(" ")},q.StyleRegistry=wt,q.createStyleRegistry=de,q.style=Te,q.useStyleRegistry=Ce;var Ct=q.style;const Ot=dt(Ct);function Tt({routeRoot:t="/",initialRoute:i}){const[o,r]=j.useState(i.startsWith(t)?i.replace(t,""):"");j.useEffect(()=>{const u=f=>{f.detail.url.startsWith(t)?r(f.detail.url.replace(t,"")):r("")};return document.addEventListener("routechange",u),()=>{document.removeEventListener("routechange",u)}},[]);const s=u=>{const f=u.target.getAttribute("href");u.preventDefault();const v=Object.assign(new CustomEvent("routerequest",{bubbles:!0,detail:{href:f}}),{originalEvent:u});u.target.dispatchEvent(v)},l=u=>{const f=u.target.getAttribute("href"),v=Object.assign(new CustomEvent("prefetchrequest",{bubbles:!0,detail:{href:f}}),{originalEvent:u});u.target.dispatchEvent(v)};return C.jsxs(C.Fragment,{children:[C.jsx(Ot,{id:"1370157471",children:["li.selected.jsx-1370157471{background-color:blue;}","li.selected.jsx-1370157471 *.jsx-1370157471{color:white;}"]}),C.jsxs("ul",{className:"jsx-1370157471",children:[C.jsx("li",{className:"jsx-1370157471 "+((o==="foo/bar"?"selected":"")||""),children:C.jsx("a",{href:"/foo/bar",onClick:s,className:"jsx-1370157471",children:"Nav to /foo/bar"})}),C.jsx("li",{className:"jsx-1370157471 "+((o==="baz"?"selected":"")||""),children:C.jsx("a",{href:"/baz",onClick:s,className:"jsx-1370157471",children:"Nav to /baz"})}),C.jsx("li",{className:"jsx-1370157471 "+((o==="content"?"selected":"")||""),children:C.jsx("a",{href:"/content",onMouseOver:l,onClick:s,className:"jsx-1370157471",children:"Nav to /content with dynamic content"})}),C.jsx("li",{className:"jsx-1370157471 "+((o==="invalid-route"?"selected":"")||""),children:C.jsx("a",{href:"/invalid-route",onClick:s,className:"jsx-1370157471",children:"This nav is invalid"})})]})]})}const Ft=ft(Tt,{props:{routeRoot:"string",initialRoute:"string"}});customElements.define("nav-links",Ft)});
