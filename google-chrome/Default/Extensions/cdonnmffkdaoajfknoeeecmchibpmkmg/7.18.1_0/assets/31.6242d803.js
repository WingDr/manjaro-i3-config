(window.saladictEntry=window.saladictEntry||[]).push([[31],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),o=r(30);function i(e,t){var r=Object(o.e)(o.a),i=Object(o.e)((function(){return e(r.current)}));return[Object(n.useRef)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.current.next(t?t(e):e[0])})).current,i.current]}},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return f}));var n=r(0),o=r.n(n),i=r(389),a=r(46);const c=o.a.createContext(async()=>{}),s=e=>{const[t,r]=Object(n.useState)(()=>"string"==typeof e.src?e.src:"#"),a=Object(n.useContext)(c);if(Object(i.a)(()=>{r("string"==typeof e.src?e.src:"#")},[e.src]),!e.src)return null;const s=e.width||e.height||"1.2em",u=e.height||s;return o.a.createElement("a",{className:"saladict-Speaker",href:t,target:"_blank",rel:"noopener noreferrer",style:{width:s,height:u},onClick:async n=>{if("#"===t&&"function"==typeof e.src){n.stopPropagation(),n.preventDefault();const t=await e.src();a(t),r(t)}}})};t.c=o.a.memo(s);const u=e=>{const{onPlayStart:t,...r}=e,i=Object(n.useCallback)(e=>{if(e.target&&"A"===e.target.tagName&&e.target.href&&"#"!==e.target.href&&e.target.classList&&e.target.classList.contains("saladict-Speaker")){e.preventDefault(),e.stopPropagation();const r=e.target;r.classList.add("isActive"),Object(a.b)([Object(a.d)(1e3),t(r.href)]).then(()=>{r.classList.remove("isActive")})}},[t]);return o.a.createElement(c.Provider,{value:t},o.a.createElement("div",{onClick:i,...r}))},l=e=>{if(!e)return"";const t=document.createElement("a");return t.target="_blank",t.href=e,t.className="saladict-Speaker",t},f=e=>e?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="saladict-Speaker"></a>`:""},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(30),o=r(0);function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object(o.useRef)(e);r.current=e;var i=Object(n.d)(),a=Object(o.useRef)(),c=Object(o.useRef)();if(Object(o.useEffect)((function(){c.current=null;var e=r.current[0],t=e.subscribe({next:function(t){if(e===r.current[0])return r.current[1]?r.current[1](t):void 0},error:function(t){if(e===r.current[0]){if(r.current[2])return c.current=null,r.current[2](t);c.current=t,i()}},complete:function(){if(e===r.current[0])return r.current[3]?r.current[3]():void 0}});return a.current=t,function(){t.unsubscribe()}}),[e[0]]),c.current)throw c.current;return a}},30:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return l}));var n=r(0),o=r(91),i=r(161);function a(e){return e}function c(e){return Object(i.a)(0)(e)}function s(){return new o.a}function u(e){var t=Object(n.useRef)(!0),r=Object(n.useRef)(null);return t.current&&(t.current=!1,r.current=e()),r}function l(){var e=Object(n.useState)(0)[1];return Object(n.useRef)((function(){return e(f)})).current}function f(e){return(e+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},389:function(e,t,r){"use strict";var n=r(0);t.a=function(e,t){var r=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(!r.current)return e();r.current=!1}),t)}},5:function(e,t,r){"use strict";r.d(t,"h",(function(){return i})),r.d(t,"g",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return d})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return y}));var n=r(507),o=r.n(n);r(0),r(116),r(182),r(10),r(371),r(634);function i(){return Promise.reject(new Error("NO_RESULT"))}function a(){return Promise.reject(new Error("NETWORK_ERROR"))}async function c(e){return null==e||/zh-TW|zh-HK/i.test(e)?(await r.e(109).then(r.bind(null,1321))).chsToChz:null}function s(e,...t){if(!e)return"";let r="",n=null;for(let e=t.length-1;e>=0;e--)"string"==typeof t[e]?r=t[e]:"function"==typeof t[e]&&(n=t[e]);const o=r?e.querySelector(r):e;if(!o)return"";const i=o.textContent||"";return n?n(i):i}const u={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function l(e,{mode:t="innerHTML",selector:r,transform:n,host:i,config:a=u}={}){const c=r?e.querySelector(r):e;if(!c)return"";if(i){const e=e=>{e.setAttribute("href",y(i,e,"href")),e.setAttribute("src",y(i,e,"src"))};"A"!==c.tagName&&"IMG"!==c.tagName||e(c),c.querySelectorAll("a").forEach(e),c.querySelectorAll("img").forEach(e)}const s=o.a.sanitize(c,{...a,RETURN_DOM_FRAGMENT:!0}),l=s.firstChild?s.firstChild[t]:"";return n?n(l):l}function f(e,t,r={}){return l(t,"string"==typeof r?{selector:r,host:e,mode:"innerHTML"}:{...r,host:e,mode:"innerHTML"})}function d(e,t,r={}){return l(t,"string"==typeof r?{selector:r,host:e,mode:"outerHTML"}:{...r,host:e,mode:"outerHTML"})}function p(e,t){const r=e.querySelector(t);r&&r.remove()}function m(e,t){e.querySelectorAll(t).forEach(e=>e.remove())}function h(e){e.setAttribute("target","_blank"),e.setAttribute("rel","nofollow noopener noreferrer")}function y(e,t,r){e.endsWith("/")&&(e=e.slice(0,-1));const n=e.startsWith("https")?"https:":"http:",o=t.getAttribute(r);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?n+o:/^.?\/+/.test(o)?e+"/"+o.replace(/^.?\/+/,""):e+"/"+o:""}},507:function(e,t,r){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),r=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),n=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),a=Object.freeze||function(e){return e},c=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),s=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),u=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),l=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),f=Object.hasOwnProperty,d=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){d&&d(e,null);for(var r=t.length;r--;){var n=t[r];if("string"==typeof n){var o=n.toLowerCase();o!==n&&(Object.isFrozen(t)||(t[r]=o),n=o)}e[n]=!0}return e}function h(e){var t={},r=void 0;for(r in e)p(f,e,[r])&&(t[r]=e[r]);return t}p||(p=function(e,t,r){return e.apply(t,r)});var y=Object.seal||function(e){return e},g=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),v=y(/<%[\s\S]*|[\s\S]*%>/gm),b=y(/^data-[\-\w.\u00B7-\uFFFF]/),T=y(/^aria-[\-\w]+$/),A=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=y(/^(?:\w+script|data):/i),x=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function _(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var E=("undefined"!=typeof Reflect&&Reflect).apply,S=Array.prototype.slice,k=Object.freeze,L=function(){return"undefined"==typeof window?null:window};E||(E=function(e,t,r){return e.apply(t,r)});var R=function(e,t){if("object"!==(void 0===e?"undefined":O(e))||"function"!=typeof e.createPolicy)return null;var r=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=t.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L(),f=function(t){return e(t)};if(f.version="2.0.7",f.removed=[],!a||!a.document||9!==a.document.nodeType)return f.isSupported=!1,f;var d=a.document,p=!1,y=!1,N=a.document,M=a.DocumentFragment,C=a.HTMLTemplateElement,D=a.Node,j=a.NodeFilter,H=a.NamedNodeMap,z=void 0===H?a.NamedNodeMap||a.MozNamedAttrMap:H,F=a.Text,I=a.Comment,P=a.DOMParser,q=a.TrustedTypes;if("function"==typeof C){var U=N.createElement("template");U.content&&U.content.ownerDocument&&(N=U.content.ownerDocument)}var W=R(q,d),B=W?W.createHTML(""):"",G=N,$=G.implementation,V=G.createNodeIterator,K=G.getElementsByTagName,Y=G.createDocumentFragment,X=d.importNode,Z={};f.isSupported=$&&void 0!==$.createHTMLDocument&&9!==N.documentMode;var J=g,Q=v,ee=b,te=T,re=w,ne=x,oe=A,ie=null,ae=m({},[].concat(_(t),_(r),_(n),_(o),_(i))),ce=null,se=m({},[].concat(_(c),_(s),_(u),_(l))),ue=null,le=null,fe=!0,de=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,ve=!1,be=!1,Te=!1,Ae=!1,we=!1,xe=!0,Oe=!0,_e=!1,Ee={},Se=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),ke=m({},["audio","video","img","source","image"]),Le=null,Re=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ne=null,Me=N.createElement("form"),Ce=function(e){Ne&&Ne===e||(e&&"object"===(void 0===e?"undefined":O(e))||(e={}),ie="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):ae,ce="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):se,Le="ADD_URI_SAFE_ATTR"in e?m(h(Re),e.ADD_URI_SAFE_ATTR):Re,ue="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},le="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},Ee="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,de=!1!==e.ALLOW_DATA_ATTR,pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,me=e.SAFE_FOR_JQUERY||!1,he=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,be=e.RETURN_DOM||!1,Te=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_DOM_IMPORT||!1,we=e.RETURN_TRUSTED_TYPE||!1,ve=e.FORCE_BODY||!1,xe=!1!==e.SANITIZE_DOM,Oe=!1!==e.KEEP_CONTENT,_e=e.IN_PLACE||!1,oe=e.ALLOWED_URI_REGEXP||oe,he&&(de=!1),Te&&(be=!0),Ee&&(ie=m({},[].concat(_(i))),ce=[],!0===Ee.html&&(m(ie,t),m(ce,c)),!0===Ee.svg&&(m(ie,r),m(ce,s),m(ce,l)),!0===Ee.svgFilters&&(m(ie,n),m(ce,s),m(ce,l)),!0===Ee.mathMl&&(m(ie,o),m(ce,u),m(ce,l))),e.ADD_TAGS&&(ie===ae&&(ie=h(ie)),m(ie,e.ADD_TAGS)),e.ADD_ATTR&&(ce===se&&(ce=h(ce)),m(ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Le,e.ADD_URI_SAFE_ATTR),Oe&&(ie["#text"]=!0),ye&&m(ie,["html","head","body"]),ie.table&&(m(ie,["tbody"]),delete ue.tbody),k&&k(e),Ne=e)},De=function(e){f.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=B}},je=function(e,t){try{f.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){f.removed.push({attribute:null,from:t})}t.removeAttribute(e)},He=function(e){var t=void 0,r=void 0;if(ve)e="<remove></remove>"+e;else{var n=e.match(/^[\s]+/);(r=n&&n[0])&&(e=e.slice(r.length))}if(p)try{t=(new P).parseFromString(e,"text/html")}catch(e){}if(y&&m(ue,["title"]),!t||!t.documentElement){var o=(t=$.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=W?W.createHTML(e):e}return e&&r&&t.body.insertBefore(N.createTextNode(r),t.body.childNodes[0]||null),K.call(t,ye?"html":"body")[0]};f.isSupported&&(function(){try{He('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{var e=He("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(e.querySelector("title").innerHTML)&&(y=!0)}catch(e){}}());var ze=function(e){return V.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,(function(){return j.FILTER_ACCEPT}),!1)},Fe=function(e){return!(e instanceof F||e instanceof I||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof z&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ie=function(e){return"object"===(void 0===D?"undefined":O(D))?e instanceof D:e&&"object"===(void 0===e?"undefined":O(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Pe=function(e,t,r){Z[e]&&Z[e].forEach((function(e){e.call(f,t,r,Ne)}))},qe=function(e){var t=void 0;if(Pe("beforeSanitizeElements",e,null),Fe(e))return De(e),!0;var r=e.nodeName.toLowerCase();if(Pe("uponSanitizeElement",e,{tagName:r,allowedTags:ie}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return De(e),!0;if(!ie[r]||ue[r]){if(Oe&&!Se[r]&&"function"==typeof e.insertAdjacentHTML)try{var n=e.innerHTML;e.insertAdjacentHTML("AfterEnd",W?W.createHTML(n):n)}catch(e){}return De(e),!0}return"noscript"===r&&/<\/noscript/i.test(e.innerHTML)||"noembed"===r&&/<\/noembed/i.test(e.innerHTML)?(De(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(f.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(J," ")).replace(Q," "),e.textContent!==t&&(f.removed.push({element:e.cloneNode()}),e.textContent=t)),Pe("afterSanitizeElements",e,null),!1)},Ue=function(e,t,r){if(xe&&("id"===t||"name"===t)&&(r in N||r in Me))return!1;if(de&&ee.test(t));else if(fe&&te.test(t));else{if(!ce[t]||le[t])return!1;if(Le[t]);else if(oe.test(r.replace(ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==r.indexOf("data:")||!ke[e])if(pe&&!re.test(r.replace(ne,"")));else if(r)return!1}return!0},We=function(e){var t=void 0,r=void 0,n=void 0,o=void 0,i=void 0;Pe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var s=t=a[i],u=s.name,l=s.namespaceURI;if(r=t.value.trim(),n=u.toLowerCase(),c.attrName=n,c.attrValue=r,c.keepAttr=!0,Pe("uponSanitizeAttribute",e,c),r=c.attrValue,"name"===n&&"IMG"===e.nodeName&&a.id)o=a.id,a=E(S,a,[]),je("id",e),je(u,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===n&&"file"===r&&c.keepAttr&&(ce[n]||!le[n]))continue;"id"===u&&e.setAttribute(u,""),je(u,e)}if(c.keepAttr)if(/svg|math/i.test(e.namespaceURI)&&new RegExp("</("+Object.keys(Se).join("|")+")","i").test(r))je(u,e);else{he&&(r=(r=r.replace(J," ")).replace(Q," "));var d=e.nodeName.toLowerCase();if(Ue(d,n,r))try{l?e.setAttributeNS(l,u,r):e.setAttribute(u,r),f.removed.pop()}catch(e){}}}Pe("afterSanitizeAttributes",e,null)}},Be=function e(t){var r=void 0,n=ze(t);for(Pe("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Pe("uponSanitizeShadowNode",r,null),qe(r)||(r.content instanceof M&&e(r.content),We(r));Pe("afterSanitizeShadowDOM",t,null)};return f.sanitize=function(e,t){var r=void 0,n=void 0,o=void 0,i=void 0,c=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!f.isSupported){if("object"===O(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(Ie(e))return a.toStaticHTML(e.outerHTML)}return e}if(ge||Ce(t),f.removed=[],_e);else if(e instanceof D)1===(n=(r=He("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?r=n:r.appendChild(n);else{if(!be&&!he&&!ye&&we&&-1===e.indexOf("<"))return W?W.createHTML(e):e;if(!(r=He(e)))return be?null:B}r&&ve&&De(r.firstChild);for(var s=ze(_e?e:r);o=s.nextNode();)3===o.nodeType&&o===i||qe(o)||(o.content instanceof M&&Be(o.content),We(o),i=o);if(i=null,_e)return e;if(be){if(Te)for(c=Y.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return Ae&&(c=X.call(d,c,!0)),c}var u=ye?r.outerHTML:r.innerHTML;return he&&(u=(u=u.replace(J," ")).replace(Q," ")),W&&we?W.createHTML(u):u},f.setConfig=function(e){Ce(e),ge=!0},f.clearConfig=function(){Ne=null,ge=!1},f.isValidAttribute=function(e,t,r){Ne||Ce({});var n=e.toLowerCase(),o=t.toLowerCase();return Ue(n,o,r)},f.addHook=function(e,t){"function"==typeof t&&(Z[e]=Z[e]||[],Z[e].push(t))},f.removeHook=function(e){Z[e]&&Z[e].pop()},f.removeHooks=function(e){Z[e]&&(Z[e]=[])},f.removeAllHooks=function(){Z={}},f}()}()},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));r(507);var n=r(131),o=r.n(n);function i(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"document"}).then(({data:e})=>e)}function a(e,t={}){return o()(e,{withCredentials:!1,...t,transformResponse:[e=>e],responseType:"text"}).then(({data:e})=>e)}},634:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),o=r(7);function i(){}var a=r(45);function c(e,t,r){return function(n){return n.lift(new s(e,t,r))}}var s=function(){function e(e,t,r){this.nextOrObserver=e,this.error=t,this.complete=r}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.nextOrObserver,this.error,this.complete))},e}(),u=function(e){function t(t,r,n,o){var c=e.call(this,t)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=n||i,c._tapComplete=o||i,Object(a.a)(r)?(c._context=c,c._tapNext=r):r&&(c._context=r,c._tapNext=r.next||i,c._tapError=r.error||i,c._tapComplete=r.complete||i),c}return n.__extends(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(o.a)},826:function(e,t,r){"use strict";r.r(t),r.d(t,"getSrcPage",(function(){return a})),r.d(t,"search",(function(){return c}));var n=r(61),o=r(5),i=r(119);const a=e=>"https://www.collinsdictionary.com/dictionary/english/"+encodeURIComponent(e.replace(/\s+/g,"-")),c=async(e,t,r,i)=>{e=encodeURIComponent(e.replace(/\s+/g,"-"));const{options:a}=r.dicts.all.cobuild,c=["https://www.collinsdictionary.com/dictionary/english/","https://www.collinsdictionary.com/zh/dictionary/english/"];a.cibaFirst&&c.reverse();try{return s(await Object(n.a)(c[0]+e),t)}catch(r){let i;try{i=await Object(n.a)(c[1]+e)}catch(e){return Object(o.g)()}return s(i,t)}};async function s(e,t){const r=await Object(o.b)(t.langCode),n={type:"collins",sections:[]},a={};return n.sections=[...e.querySelectorAll("[data-type-block]")].filter(e=>{const t=e.dataset.typeBlock||"";return t&&"Video"!==t&&"Trends"!==t&&"英语词汇表"!==t&&"趋势"!==t}).map(e=>{const n=e.dataset.typeBlock||"",c=e.dataset.titleBlock||"",s=e.dataset.numBlock||"",l=n+c+s,f=e.className||"";if("Learner"===n){if(!a.uk){const t=u(e);t&&(a.uk=t)}}else"English"===n?a.uk=u(e):"American"===n&&(a.us=u(e));const d=e.querySelector("#videos .video");if(d){const e=d.querySelector(".youtube-video");if(e&&e.dataset.embed){const r=t.panelWidth-25;return{id:l,className:f,type:n,title:c,num:s,content:`<iframe width="${r}" height="${r/560*315}" src="https://www.youtube-nocookie.com/embed/${e.dataset.embed}" frameborder="0" allow="accelerometer; encrypted-media"></iframe>`}}}return e.querySelectorAll(".audio_play_button").forEach(e=>{e.replaceWith(Object(i.d)(e.dataset.srcMp3))}),e.querySelectorAll("a.type-thesaurus").forEach(o.a),{id:l,className:f,type:n,title:c,num:s,content:Object(o.d)("https://www.collinsdictionary.com",e,{transform:r})}}),n.sections.length>0?{result:n,audio:a}:Object(o.h)()}function u(e){const t=e.querySelector(".pron .audio_play_button");if(t){const e=t.dataset.srcMp3;if(e)return e}}}}]);