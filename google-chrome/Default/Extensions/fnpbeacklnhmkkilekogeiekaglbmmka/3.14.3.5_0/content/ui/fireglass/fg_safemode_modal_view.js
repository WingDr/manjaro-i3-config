var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(e){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(e||"")+"_"+b++,e)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var e=0,c={next:function(){if(e<a.length){var g=e++;return{value:b(g,a[g]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c};
$jscomp.polyfill=function(a,b,e,c){if(b){e=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var g=a[c];g in e||(e[g]={});e=e[g]}a=a[a.length-1];c=e[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");$jscomp.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
$jscomp.polyfill("Object.values",function(a){return a?a:function(a){var b=[],c;for(c in a)$jscomp.owns(a,c)&&b.push(a[c]);return b}},"es8","es3");
(function(a){(a.FG=a.FG||{}).safeModeModalDlgView=function(a,e){var c=a.utils.isNil,b=a.utils.isntNil,m=a.utils.isString,k=a.extensionAdapter,l=a.logger,f=e.config,d={init:function(){this.dialogProps={};var a=document.getElementById("help");b(a)&&(a.addEventListener("contextmenu",function(a){a.isTrusted&&a.preventDefault()}),a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("help","click",null)}));a=document.getElementById("help_2");b(a)&&(a.addEventListener("contextmenu",function(a){a.isTrusted&&
a.preventDefault()}),a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("help_2","click",null)}));a=document.getElementById("fg_leavefeedback_text");null!==a&&(a.addEventListener("contextmenu",function(a){a.isTrusted&&a.preventDefault()}),a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("leavefeedback","click",null)}));a=document.getElementById("footer_link");b(a)&&(a.addEventListener("contextmenu",function(a){a.isTrusted&&a.preventDefault()}),a.addEventListener("click",
function(a){a.isTrusted&&(d._sendMessage("footer_link","click",null),a.preventDefault())}));a=document.getElementById("default_ok");b(a)&&a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("default_ok","click",null)});a=document.getElementById("default_cancel");b(a)&&a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("default_cancel","click",null)});a=document.getElementById("fg_check_01");null!==a&&a.addEventListener("change",function(a){a.isTrusted&&d._sendMessage("fg_check_01",
"click",{value:this.checked})});a=document.getElementById("default_close");b(a)&&a.addEventListener("click",function(a){a.isTrusted&&d._sendMessage("default_close","click",null)});document.onkeyup=function(a){a.isTrusted&&("Esc"!==a.key&&"Escape"!==a.key||d._sendMessage("default_close","click",null))};d._sendMessage(null,"show",null)}},n=k.getExtensionURL("");d.initDocumentData=function(a){if(!c(a))for(var b in a){var h=a[b];if(c(h)||c(h.value))l.debug("No data configuration for "+b);else{var d=document.getElementById(b);
if(c(d))l.debug("Element "+b+"not found in document ");else switch(d.type){case "checkbox":case "radio":d.checked=!0===h.value;break;default:d.value=h.value}}}};d.setDefaultButton=function(){var a="default_ok";f.safeModeDialog.dialogType.onlineBanking===this.dialogProps.dialogType&&(a="default_cancel");a=document.getElementById(a);b(a)&&a.setAttribute("default_button","");a.focus()};d.initDialog=function(a){f.safeModeDialog.dialogType.onlineBanking===a.dialogType?document.body.setAttribute("category",
"banking"):document.body.setAttribute("category","general");f.safeModeDialog.dialogMode.interstitial===a.dialogMode?document.body.setAttribute("mode","interstitial"):document.body.setAttribute("mode","signin");this.dialogProps=a;this.initDocumentData(a.dialogData);this.setDefaultButton()};d._sendMessage=function(a,d,c){var e={};b(c)&&(e.element=c);e.dialog={};e.dialog.type=this.dialogProps.dialogType;k.sendMessage({type:"fg_message_proxy",id:f.uiMessageProxy.EVENT_ID,realId:f.dialogRenderer.EVENT_ID,
data:{id:a,type:d,evtData:e}})};d._msgEventProc=function(a){a=a.data;if(!c(a)){var b=a.origin;if(0!=m(b)&&b==n)switch(a.state){case f.safeModeDialog.displayState.show:d.initDialog(a.props);break;case f.safeModeDialog.displayState.hide:d._sendMessage(null,"close",null)}}};window.addEventListener("message",d._msgEventProc,!1);window.onload=function(){d.init();k.sendMessage({type:"fg_get_strings",ui_type:"safemode_dialog"},function(a){var d=Object.keys(a);a=Object.values(a);for(var c=0;c<d.length;c++){var e=
document.getElementById(d[c]);b(e)&&(e.innerHTML=a[c])}})};return d}(a.SymBfw,a.FG)})(this);