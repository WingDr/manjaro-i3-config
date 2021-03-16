var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.polyfill=function(a,b,c,e){if(b){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in c||(c[d]={});c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function c(a){return a instanceof d?a:new d(function(b,g){b(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;b.prototype.asyncExecute=function(a){if(null==this.batch_){this.batch_=[];var b=this;this.asyncExecuteFunction(function(){b.executeBatch_()})}this.batch_.push(a)};var e=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(a){e(a,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=
this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(k){this.asyncThrow_(k)}}}this.batch_=null};b.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var d=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}};d.prototype.createResolveAndReject_=function(){function a(a){return function(e){c||(c=!0,a.call(b,e))}}var b=this,c=!1;
return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};d.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof d)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};d.prototype.resolveToNonPromiseObj_=function(a){var b=void 0;try{b=a.then}catch(m){this.reject_(m);return}"function"==typeof b?
this.settleSameAsThenable_(b,a):this.fulfill_(a)};d.prototype.reject_=function(a){this.settle_(2,a)};d.prototype.fulfill_=function(a){this.settle_(1,a)};d.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};d.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=0;a<this.onSettledCallbacks_.length;++a)f.asyncExecute(this.onSettledCallbacks_[a]);
this.onSettledCallbacks_=null}};var f=new b;d.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};d.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};d.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(q){g(q)}}:b}var e,g,f=new d(function(a,b){e=a;g=b});this.callWhenSettled_(c(a,e),c(b,g));return f};
d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.callWhenSettled_=function(a,b){function c(){switch(e.state_){case 1:a(e.result_);break;case 2:b(e.result_);break;default:throw Error("Unexpected state: "+e.state_);}}var e=this;null==this.onSettledCallbacks_?f.asyncExecute(c):this.onSettledCallbacks_.push(c)};d.resolve=c;d.reject=function(a){return new d(function(b,c){c(a)})};d.race=function(a){return new d(function(b,e){for(var d=$jscomp.makeIterator(a),f=d.next();!f.done;f=d.next())c(f.value).callWhenSettled_(b,
e)})};d.all=function(a){var b=$jscomp.makeIterator(a),e=b.next();return e.done?c([]):new d(function(a,d){function f(b){return function(e){g[b]=e;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,c(e.value).callWhenSettled_(f(g.length-1),d),e=b.next();while(!e.done)})};return d},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype.return=function(a){this.abruptCompletion_={return:a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){a=$jscomp.makeIterator(a);var c=a.next();$jscomp.generator.ensureIteratorResultIsObject_(c);if(c.done)this.yieldResult=c.value,this.nextAddress=b;else return this.yieldAllIterator_=a,this.yield(c.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){b=this.finallyContexts_.splice(b||0)[0];if(b=this.abruptCompletion_=this.abruptCompletion_||b){if(b.isException)return this.jumpToErrorHandler_();void 0!=b.jumpTo&&this.finallyAddress_<b.jumpTo?(this.nextAddress=b.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(a){return{value:a,done:!0}},a,this.context_.return);this.context_.return(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var e=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(e);if(!e.done)return this.context_.stop_(),e;var d=e.value}catch(f){return this.context_.yieldAllIterator_=null,this.context_.throw_(f),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,d);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a.return,done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this.throw=function(b){return a.throw_(b)};this.return=function(b){return a.return_(b)};$jscomp.initSymbolIterator();this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){b=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&$jscomp.setPrototypeOf(b,a.prototype);return b};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(b){return a.next(b)}function c(b){return a.throw(b)}return new Promise(function(e,d){function f(a){a.done?e(a.value):Promise.resolve(a.value).then(b,c).then(f,d)}f(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var d=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var g=0;g<f&&c<d;)if(b[c++]!=a[g++])return!1;return g>=f}},"es6","es3");
(function(a){(a.NSSS=a.NSSS||{}).annotatePage=function(a,c){var b={};b.isTop=window===window.top;var d=c.logger,f=c.utils.isNil,g=c.utils.isntNil,r=c.utils.getCompanyDomain,m=a.nfmEvents,k=a.constants,h=a.uiConstants,l=h.MESSAGES,n=c.extensionAdapter,t=a.NSSSHelper,u=c.utils.createNewGuid(),q=c.performanceReporterFactoryProxy,v="Annotation Time: "+Date.now();b._popupClosed=!0;b.COLLECT_URL_TIMEOUT=500;b._canAllowAnnotations=function(){if(h.EXTENSION_TYPE===h.SAFEWEB_EXTENSION&&"Chrome"===c.globals.BROWSER||
h.EXTENSION_TYPE===h.TWO_IN_ONE&&"Safari"===c.globals.BROWSER)if(c.utils.getOSType()===c.constants.os.WINDOWS){var b=r(window.location.href),d=r(document.referrer);b=f(b)?null:b.toLowerCase();d=f(d)?null:d.toLowerCase();if(f(b)||b===k.MYWAY||d===k.MYWAY)return!1}else return 0<=window.location.host.toLowerCase().search("ask")||0<=document.referrer.search("nortonsafe.search.ask.com")?!0:t.isYahooSERPPage(window.location.href);else{if(h.EXTENSION_TYPE===h.THREE_IN_ONE&&a.constants.VENDOR===a.constants.YAHOO)return t.isYahooSERPPage(window.location.href);
if(h.EXTENSION_TYPE===h.THREE_IN_ONE&&a.constants.VENDOR===a.constants.IAC)return 0<=window.location.host.toLowerCase().search(a.constants.IAC)||0<=document.referrer.search(a.constants.HOST_NAME[a.constants.IAC])?!0:!1}return!0};b.collectURLs=function(){q.reportStart(k.performanceReporter.NSSS,v);if(!1!==b._canAllowAnnotations()&&!f(Shasta)){var a=Shasta.collectURLs();(g(a.resultURLs)&&0<a.resultURLs.length||g(a.advtURLs)&&0<a.advtURLs.length)&&n.sendMessage({name:l.COLLECT_URL_RESPONSE,message:{eventID:m.SEARCH_URLS,
search_urls:a.resultURLs,advt_urls:a.advtURLs,frameId:u}})}};b.showAnnotationPopup=function(a){if(b.isTop){var c=document.getElementById("annotationPopup");c.style.display="block";var d=a.top,e=a.left,f=e+406,p=d+238;innerHeight<p&&(p-=innerHeight,d-=p);innerWidth<f&&(p=f-innerWidth,e-=p);0>d&&(d=2);c.style.top=d+"px";c.style.left=e+"px";c.style.border="none";c=document.getElementById("annotationPopup").contentWindow;d=a.annotationURLObject.annotationData;d.index=a.index;c.postMessage({name:"preparePopup",
message:d},"*")}};b.closeAnnotationPopup=function(){if(b.isTop){var a=document.getElementById("annotationPopup");g(a)&&(a.style.display="none")}};b.annotateURLs=function(a){var c=a.annotationResults;if(!f(Shasta)){if(b.isTop){var d=document.getElementById("annotationPopup");f(d)&&(d=document.createElement("iframe"),d.id="annotationPopup",d.style.cssText="position:fixed;top:0;left:0;display:none;width:408px;height:240px;z-index:1000;",d.src=n.getExtensionURL("content/ui/SiteRatingPane.html"),document.body.appendChild(d))}g(a.frameId)&&
a.frameId!==u||(Shasta.setResults(c),q.reportEnd(k.performanceReporter.NSSS,v),document.addEventListener("showAnnotationPopup",function(a){n.sendMessage({name:l.SHOW_ANNOTATION_POPUP,message:a.detail});b._popupClosed=!1}),document.addEventListener("closeAnnotationPopup",function(a){!1===b._popupClosed&&(n.sendMessage({name:l.CLOSE_ANNOATION_POPUP}),b._popupClosed=!0)}))}};b.canCloseAnnotationPopup=function(){b.isTop&&document.getElementById("annotationPopup").contentWindow.postMessage({name:"canCloseAnnotation"},
"*")};b.handleCustomMessages=function(a){switch(a.name){case "annotate-urls":b.annotateURLs(a);break;case l.SHOW_ANNOTATION_POPUP:b.showAnnotationPopup(a.data);break;case l.CLOSE_ANNOATION_POPUP:b.canCloseAnnotationPopup()}};b.handleOpenFullReport=function(a){f(a)||f(a.detail)?d.debug("Event is not valid"):(a=Shasta.getFullReportURL(a.detail),f(a)?d.debug("Full report url is null or invalid"):n.sendMessage({name:l.OPEN_FULLREPORT,message:{fullReportURL:a}}))};b.receiveMessage=function(a){if(f(a)||
!c.extensionAdapter.getExtensionURL("").startsWith(a.origin)||f(a.data))d.debug("Error in receive message function");else switch(a.data.name){case "closeAnnotationPopup":b.closeAnnotationPopup()}};b.handleBasicMessage=function(a,c,d){b.handleCustomMessages(a)};b.handleWindowLoad=function(){document.addEventListener("CollectUrlEvent",function(){setTimeout(a.annotatePage.collectURLs,a.annotatePage.COLLECT_URL_TIMEOUT)});setTimeout(a.annotatePage.collectURLs,a.annotatePage.COLLECT_URL_TIMEOUT)};return b}(a.NSSS,
a.SymBfw)})(executionContext);SymBfw.extensionAdapter.addMessageListener(NSSS.annotatePage.handleBasicMessage);window.addEventListener("load",function(){return $jscomp.asyncExecutePromiseGeneratorProgram(function(a){if(1==a.nextAddress)return a.yield(NSSS.vendorSetup.initVendor(),2);NSSS.annotatePage.handleWindowLoad();a.jumpToEnd()})});document.addEventListener("openFullReport",NSSS.annotatePage.handleOpenFullReport);window.addEventListener("message",NSSS.annotatePage.receiveMessage,!1);
