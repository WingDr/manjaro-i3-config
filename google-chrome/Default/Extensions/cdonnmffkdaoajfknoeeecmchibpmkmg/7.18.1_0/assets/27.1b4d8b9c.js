(window.saladictEntry=window.saladictEntry||[]).push([[27],{540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3);n.__exportStar(r(966),t),n.__exportStar(r(968),t),n.__exportStar(r(969),t)},541:function(e,t,r){"use strict";var n=r(975),o=r(976),i=r(817);e.exports={formats:i,parse:o,stringify:n}},542:function(e,t,r){"use strict";r.r(t),r.d(t,"getTranslator",(function(){return a})),r.d(t,"getSrcPage",(function(){return s})),r.d(t,"search",(function(){return u}));var n=r(19),o=r(819),i=r(17);const a=Object(n.a)(()=>new o.Baidu({env:"ext",config:{DEBUG:!1,SDAPP_VETTED:"true",SDAPP_ANALYTICS:"UA-49163616-4",MOJI_ID:"E62VyFVLMiW7kvbtVq3p",PROXY_PROTOCAL:"socks5",PROXY_HOST:"127.0.0.1",PROXY_PORT:"1088"}.BAIDU_APPID&&{DEBUG:!1,SDAPP_VETTED:"true",SDAPP_ANALYTICS:"UA-49163616-4",MOJI_ID:"E62VyFVLMiW7kvbtVq3p",PROXY_PROTOCAL:"socks5",PROXY_HOST:"127.0.0.1",PROXY_PORT:"1088"}.BAIDU_KEY?{appid:{DEBUG:!1,SDAPP_VETTED:"true",SDAPP_ANALYTICS:"UA-49163616-4",MOJI_ID:"E62VyFVLMiW7kvbtVq3p",PROXY_PROTOCAL:"socks5",PROXY_HOST:"127.0.0.1",PROXY_PORT:"1088"}.BAIDU_APPID,key:{DEBUG:!1,SDAPP_VETTED:"true",SDAPP_ANALYTICS:"UA-49163616-4",MOJI_ID:"E62VyFVLMiW7kvbtVq3p",PROXY_PROTOCAL:"socks5",PROXY_HOST:"127.0.0.1",PROXY_PORT:"1088"}.BAIDU_KEY}:void 0})),s=(e,t,r)=>`https://fanyi.baidu.com/#auto/${"default"===r.dicts.all.baidu.options.tl?"zh-CN"===t.langCode?"zh":"zh-TW"===t.langCode?"cht":"en":r.dicts.all.baidu.options.tl}/${e}`,u=async(e,t,r,n)=>{const o=a(),{sl:s,tl:u,text:c}=await Object(i.a)(o,e,r.dicts.all.baidu,t,n),l=t.dictAuth.baidu.appid,f=t.dictAuth.baidu.key,p=l&&f?{appid:l,key:f}:void 0;try{const e=await o.translate(c,s,u,p);return Object(i.c)({result:{id:"baidu",slInitial:r.dicts.all.baidu.options.slInitial,sl:e.from,tl:e.to,searchText:e.origin,trans:e.trans},audio:{py:e.trans.tts,us:e.trans.tts}},o.getSupportLanguages())}catch(e){return Object(i.c)({result:{id:"baidu",slInitial:"hide",sl:s,tl:u,searchText:{paragraphs:[""]},trans:{paragraphs:[""]}}},o.getSupportLanguages())}}},762:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],s=Object.keys(a),u=0;u<s.length;++u){var c=s[u],l=a[c];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:c}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var s=n.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?o+=n.charAt(a):s<128?o+=i[s]:s<2048?o+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?o+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(a)),o+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,i){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var s=t;return o(t)&&!o(r)&&(s=a(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),s)}}},763:function(e,t,r){var n,o,i,a,s;n=r(977),o=r(818).utf8,i=r(978),a=r(818).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):o.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),u=8*e.length,c=1732584193,l=-271733879,f=-1732584194,p=271733878,d=0;d<r.length;d++)r[d]=16711935&(r[d]<<8|r[d]>>>24)|4278255360&(r[d]<<24|r[d]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var h=s._ff,y=s._gg,g=s._hh,m=s._ii;for(d=0;d<r.length;d+=16){var b=c,v=l,O=f,w=p;c=h(c,l,f,p,r[d+0],7,-680876936),p=h(p,c,l,f,r[d+1],12,-389564586),f=h(f,p,c,l,r[d+2],17,606105819),l=h(l,f,p,c,r[d+3],22,-1044525330),c=h(c,l,f,p,r[d+4],7,-176418897),p=h(p,c,l,f,r[d+5],12,1200080426),f=h(f,p,c,l,r[d+6],17,-1473231341),l=h(l,f,p,c,r[d+7],22,-45705983),c=h(c,l,f,p,r[d+8],7,1770035416),p=h(p,c,l,f,r[d+9],12,-1958414417),f=h(f,p,c,l,r[d+10],17,-42063),l=h(l,f,p,c,r[d+11],22,-1990404162),c=h(c,l,f,p,r[d+12],7,1804603682),p=h(p,c,l,f,r[d+13],12,-40341101),f=h(f,p,c,l,r[d+14],17,-1502002290),c=y(c,l=h(l,f,p,c,r[d+15],22,1236535329),f,p,r[d+1],5,-165796510),p=y(p,c,l,f,r[d+6],9,-1069501632),f=y(f,p,c,l,r[d+11],14,643717713),l=y(l,f,p,c,r[d+0],20,-373897302),c=y(c,l,f,p,r[d+5],5,-701558691),p=y(p,c,l,f,r[d+10],9,38016083),f=y(f,p,c,l,r[d+15],14,-660478335),l=y(l,f,p,c,r[d+4],20,-405537848),c=y(c,l,f,p,r[d+9],5,568446438),p=y(p,c,l,f,r[d+14],9,-1019803690),f=y(f,p,c,l,r[d+3],14,-187363961),l=y(l,f,p,c,r[d+8],20,1163531501),c=y(c,l,f,p,r[d+13],5,-1444681467),p=y(p,c,l,f,r[d+2],9,-51403784),f=y(f,p,c,l,r[d+7],14,1735328473),c=g(c,l=y(l,f,p,c,r[d+12],20,-1926607734),f,p,r[d+5],4,-378558),p=g(p,c,l,f,r[d+8],11,-2022574463),f=g(f,p,c,l,r[d+11],16,1839030562),l=g(l,f,p,c,r[d+14],23,-35309556),c=g(c,l,f,p,r[d+1],4,-1530992060),p=g(p,c,l,f,r[d+4],11,1272893353),f=g(f,p,c,l,r[d+7],16,-155497632),l=g(l,f,p,c,r[d+10],23,-1094730640),c=g(c,l,f,p,r[d+13],4,681279174),p=g(p,c,l,f,r[d+0],11,-358537222),f=g(f,p,c,l,r[d+3],16,-722521979),l=g(l,f,p,c,r[d+6],23,76029189),c=g(c,l,f,p,r[d+9],4,-640364487),p=g(p,c,l,f,r[d+12],11,-421815835),f=g(f,p,c,l,r[d+15],16,530742520),c=m(c,l=g(l,f,p,c,r[d+2],23,-995338651),f,p,r[d+0],6,-198630844),p=m(p,c,l,f,r[d+7],10,1126891415),f=m(f,p,c,l,r[d+14],15,-1416354905),l=m(l,f,p,c,r[d+5],21,-57434055),c=m(c,l,f,p,r[d+12],6,1700485571),p=m(p,c,l,f,r[d+3],10,-1894986606),f=m(f,p,c,l,r[d+10],15,-1051523),l=m(l,f,p,c,r[d+1],21,-2054922799),c=m(c,l,f,p,r[d+8],6,1873313359),p=m(p,c,l,f,r[d+15],10,-30611744),f=m(f,p,c,l,r[d+6],15,-1560198380),l=m(l,f,p,c,r[d+13],21,1309151649),c=m(c,l,f,p,r[d+4],6,-145523070),p=m(p,c,l,f,r[d+11],10,-1120210379),f=m(f,p,c,l,r[d+2],15,718787259),l=m(l,f,p,c,r[d+9],21,-343485551),c=c+b>>>0,l=l+v>>>0,f=f+O>>>0,p=p+w>>>0}return n.endian([c,l,f,p])})._ff=function(e,t,r,n,o,i,a){var s=e+(t&r|~t&n)+(o>>>0)+a;return(s<<i|s>>>32-i)+t},s._gg=function(e,t,r,n,o,i,a){var s=e+(t&n|r&~n)+(o>>>0)+a;return(s<<i|s>>>32-i)+t},s._hh=function(e,t,r,n,o,i,a){var s=e+(t^r^n)+(o>>>0)+a;return(s<<i|s>>>32-i)+t},s._ii=function(e,t,r,n,o,i,a){var s=e+(r^(t|~n))+(o>>>0)+a;return(s<<i|s>>>32-i)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(s(e,t));return t&&t.asBytes?r:t&&t.asString?a.bytesToString(r):n.bytesToHex(r)}},817:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r(762),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},818:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},819:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3),o=r(540),i=n.__importDefault(r(763)),a=n.__importDefault(r(541)),s=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]];class u extends o.Translator{constructor(){super(...arguments),this.name="baidu",this.endpoint="http://api.fanyi.baidu.com/api/trans/vip/translate",this.appid="20151211000007653",this.key="IFJB6jBORFuMmVGDRude"}async query(e,t,r,n){const s=Date.now(),c=n.appid||this.appid,l=n.key||this.key,f=await this.request(this.endpoint,{params:{from:u.langMap.get(t),to:u.langMap.get(r),q:e,salt:s,appid:c,sign:i.default(c+e+s+l)}}).then(this.checkData).catch(()=>this.request("http://openapi.baidu.com/public/2.0/bmt/translate?"+a.default.stringify({client_id:"AVhF9A0GExzkU5gCkZ0Gbht7",from:u.langMap.get(t),to:u.langMap.get(r),q:e})).then(this.checkData)).catch(()=>{throw new o.TranslateError("NETWORK_ERROR")}),{trans_result:p,from:d}=f,h=u.langMapReverse.get(d)||t;return{text:e,from:h,to:r,origin:{paragraphs:p.map(({src:e})=>e),tts:await this.textToSpeech(e,h)},trans:{paragraphs:p.map(({dst:e})=>e),tts:await this.textToSpeech(p[0].dst,r)}}}async textToSpeech(e,t){return"http://tts.baidu.com/text2audio?"+a.default.stringify({lan:u.langMap.get("auto"!==t?t:"zh-CN")||"zh",ie:"UTF-8",spd:5,text:e})}checkData({data:e}){if(e.error_code)throw new o.TranslateError("API_SERVER_ERROR");return e}getSupportLanguages(){return[...u.langMap.keys()]}}t.Baidu=u,u.langMap=new Map(s),u.langMapReverse=new Map(s.map(([e,t])=>[t,e])),t.default=u},966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(3).__exportStar(r(967),t)},967:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.languages=["af","am","ar","auto","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","en","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","ja","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zh-CN","zh-TW","zu"]},968:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends Error{constructor(e){super(e)}}t.TranslateError=n},969:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3).__importDefault(r(131)),o=r(970),i=r(971);t.Translator=class{constructor(e={}){this.env=e.env||"node",this.axios=e.axios||n.default,this.config=e.config||{}}async translate(e,t,r,n={}){return{...await this.query(e,t,r,{...this.config,...n}),engine:this.name}}request(e,t){return"ext"===this.env&&t&&t.headers?this.axios(e,o.modifyExtraHeaders(e,t)):this.axios(e,t)}async detect(e){return i.detectLang(e)}textToSpeech(e,t,r){return Promise.resolve(null)}}},970:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n="undefined"!=typeof browser?browser:"undefined"!=typeof chrome?chrome:null,o={},i=/^(Origin|Referer|Host|Cookie|User-Agent|DNT|Accept-Charset|Accept-Encoding)$/i,a=/^(Origin|Referer)$/i;t.modifyExtraHeaders=(e,t)=>{if(!t.headers)return t;const r=Object.keys(t.headers),s={};let u;for(let e=0;e<r.length;e++){const n=r[e];i.test(n)?a.test(n)&&(u=t.headers[n]):s[n]=t.headers[n]}return u&&function(e,t){if(!n)return void console.warn("Missing Browser Global");const r=new URL(e).origin+"/*";if(o[r])return;o[r]=!0;const i=["blocking","requestHeaders"];n.webRequest.OnBeforeSendHeadersOptions&&n.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS")&&i.push("extraHeaders"),n.webRequest.onBeforeSendHeaders.addListener(e=>{if(e&&e.requestHeaders){const r=e.requestHeaders.filter(e=>!a.test(e.name));return r.push({name:"Origin",value:t},{name:"Referer",value:t}),{requestHeaders:r}}return e},{urls:[r]},i)}(e,u),{...t,headers:s}}},971:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(3).__importDefault(r(979)),o=new Map([["eng","en"],["jpn","ja"],["kor","ko"],["cmn","zh-CN"]]),i={minLength:1,whitelist:[...o.keys()]};t.detectLang=function(e){return o.get(n.default(e,i))||"auto"}},972:function(e,t,r){"use strict";function n(e){if("number"!=typeof e||isNaN(e)||e<1||e===1/0)throw new Error("`"+e+"` is not a valid argument for n-gram");return function(t){var r,n=[];if(null==t)return n;if(t=t.slice?t:String(t),(r=t.length-e+1)<1)return n;for(;r--;)n[r]=t.slice(r,r+e);return n}}e.exports=n,n.bigram=n(2),n.trigram=n(3)},973:function(e,t,r){"use strict";e.exports=function(e){return String(e).replace(/\s+/g," ")}},974:function(e,t){(t=e.exports=function(e){return e.replace(/^\s*|\s*$/g,"")}).left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},975:function(e,t,r){"use strict";var n=r(762),o=r(817),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,s(t)?t:[t])},l=Date.prototype.toISOString,f=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,o,i,a,u,l,f,d,h,y,g,m){var b,v=t;if("function"==typeof l?v=l(r,v):v instanceof Date?v=h(v):"comma"===o&&s(v)&&(v=n.maybeMap(v,(function(e){return e instanceof Date?h(e):e})).join(",")),null===v){if(i)return u&&!g?u(r,p.encoder,m,"key"):r;v=""}if("string"==typeof(b=v)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||n.isBuffer(v))return u?[y(g?r:u(r,p.encoder,m,"key"))+"="+y(u(v,p.encoder,m,"value"))]:[y(r)+"="+y(String(v))];var O,w=[];if(void 0===v)return w;if(s(l))O=l;else{var _=Object.keys(v);O=f?_.sort(f):_}for(var P=0;P<O.length;++P){var j=O[P],S=v[j];if(!a||null!==S){var T=s(v)?"function"==typeof o?o(r,j):r:r+(d?"."+j:"["+j+"]");c(w,e(S,T,o,i,a,u,l,f,d,h,y,g,m))}}return w};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=p.filter;return("function"==typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):s(u.filter)&&(r=u.filter);var l,f=[];if("object"!=typeof n||null===n)return"";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=a[l];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var y=0;y<r.length;++y){var g=r[y];u.skipNulls&&null===n[g]||c(f,d(n[g],g,h,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var m=f.join(u.delimiter),b=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),m.length>0?b+m:""}},976:function(e,t,r){"use strict";var n=r(762),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},u=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(i),c=s?i.slice(0,s.index):i,l=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var f=0;r.depth>0&&null!==(s=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+i.slice(s.index)+"]"),function(e,t,r,n){for(var o=n?t:u(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var c="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,l=parseInt(c,10);r.parseArrays||""!==c?!isNaN(l)&&s!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=o:a[c]=o:a={0:o}}o=a}return o}(l,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,c={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=l.split(t.delimiter,f),d=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?h="utf-8":"utf8=%26%2310003%3B"===p[r]&&(h="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var y,g,m=p[r],b=m.indexOf("]="),v=-1===b?m.indexOf("="):b+1;-1===v?(y=t.decoder(m,a.decoder,h,"key"),g=t.strictNullHandling?null:""):(y=t.decoder(m.slice(0,v),a.decoder,h,"key"),g=n.maybeMap(u(m.slice(v+1),t),(function(e){return t.decoder(e,a.decoder,h,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===h&&(g=s(g)),m.indexOf("[]=")>-1&&(g=i(g)?[g]:g),o.call(c,y)?c[y]=n.combine(c[y],g):c[y]=g}return c}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(l),d=0;d<p.length;++d){var h=p[d],y=c(h,l[h],r,"string"==typeof e);f=n.merge(f,y,r)}return n.compact(f)}},977:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],i=0;i<4;i++)8*n+6*i<=8*e.length?t.push(r.charAt(o>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(e.charAt(n))>>>6-2*o);return t}},e.exports=n},978:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},980:function(e,t,r){"use strict";var n=r(972).trigram,o=r(973),i=r(974),a={}.hasOwnProperty;function s(e){return null==e?"":i(o(String(e).replace(/[\u0021-\u0040]+/g," "))).toLowerCase()}function u(e){return n(" "+s(e)+" ")}function c(e){for(var t,r=u(e),n=r.length,o={};n--;)t=r[n],a.call(o,t)?o[t]++:o[t]=1;return o}function l(e,t){return e[1]-t[1]}t.clean=s,t.trigrams=u,t.asDictionary=c,t.asTuples=function(e){var t,r=c(e),n=[];for(t in r)n.push([t,r[t]]);return n.sort(l),n},t.tuplesAsDictionary=function(e){var t,r=e.length,n={};for(;r--;)t=e[r],n[t[0]]=t[1];return n}}}]);