var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var e=0;return function(){return e<a.length?{done:!1,value:a[e++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,f){a!=Array.prototype&&a!=Object.prototype&&(a[e]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(a,e){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:e})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(f){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(f||"")+"_"+e++,f)}var e=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,e){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var f=0,b={next:function(){if(f<a.length){var m=f++;return{value:e(m,a[m]),done:!1}}b.next=function(){return{done:!0,value:void 0}};return b.next()}};b[Symbol.iterator]=function(){return b};return b};
$jscomp.polyfill=function(a,e,f,b){if(e){f=$jscomp.global;a=a.split(".");for(b=0;b<a.length-1;b++){var m=a[b];m in f||(f[m]={});f=f[m]}a=a[a.length-1];b=f[a];e=e(b);e!=b&&null!=e&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:e})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");
(function(a){(a.NSSS=a.NSSS||{}).uiHelper=function(a,f){var b={},e=a.utils.isNil,h={untested:0,safe:1,caution:2,warn:3},k=f.constants,c=a.localizer,n=f.uiConstants.BLOCKPAGE.TYPE,l={};l.Safe=h.safe;l.Caution=h.caution;l.Untested=h.untested;l["Safe Web is off"]=h.untested;l.Warning=h.warn;l["Not Licensed"]=h.warn;l["Unsafe to Shop"]=h.warn;l.Monitoring=h.untested;l["Page not analyzed"]=h.untested;b.siteStatusRatingMap=l;b.rating=h;b.messageType={SEARCH:0,FULLREPORT:1,REPORTSITE:2,SETTINGS:3,ONLOAD:4};
b.ratingStyle=["untested","safe","caution","warn"];b.uiEvents="UI-Event";b.settingsEvent="Settings-Event";b.setupUI="Setup-UI";b.updateUI="Update-UI";b.updateUIComplete="Update-UI-Complete";b.setupSettingsUI="Setup-Settings-UI";b.FULL_REPORT_EVENTID="2786E625-7D87-4997-AB8B-DB46539A48F8";b.REPORTSITE_EVENTID="76DAED94-D538-4C07-909D-8C7C0442FA5C";b.SETTINGS_CLICKED_EVENTID="D33EEEAD-B101-4A69-8B71-564E69FD5880";b.SEARCH_EVENTID="5C57C303-1C69-4C07-850C-062563BE3C1D";b.DEFAULT_SEARCH_EVENTID="FD6141FE-3E11-40E1-88A9-ED2EECC2E052";
b.DEFAULT_HOMEPAGE_EVENTID="D266FC01-E845-4292-8890-30AE32FE48E2";b.setShowFullReportForSessionID=function(d,b){a.settings.loadSettingsContainer(d).setObject(k.SHOW_FULLREPORT,b)};b.showFullReportForSessionID=function(d){d=a.settings.loadSettingsContainer(d);if(0===Object.keys(d.collection).length)return!1;d=d.getObject(k.SHOW_FULLREPORT);e(d)&&(d=!0);return d};b.setShowReportSiteForSessionID=function(d,b){a.settings.loadSettingsContainer(d).setObject(k.SHOW_REPORTSITE,b)};b.showReportSiteForSessionID=
function(d){d=a.settings.loadSettingsContainer(d);if(0===Object.keys(d.collection).length)return!1;d=d.getObject(k.SHOW_REPORTSITE);e(d)&&(d=!0);return d};b.toolbarStatusForSessionID=function(d){var b=a.settings,c=f.nfmEvents;if(e(b))return logger.log("Settings API unavailable. Context incorrect."),null;if(e(d))return null;d=b.loadSettingsContainer(d);if(0===Object.keys(d.collection).length)return null;c=d.getObject(c.PAGE_ANALYZED);return e(c)?null:c.getRating()};b.uiStatusForSessionID=function(d,
a){var h=f.helperUtils.getFeatureFlavorization();if(f.helperUtils.isURLWhitelisted(a))return b.uiStatusForUntestedSite(a);var g=b.toolbarStatusForSessionID(d);if(e(g))return b.uiStatusForUntestedSite(a);a=g.siteStatus;var p=b.showFullReportForSessionID(d),k=b.showReportSiteForSessionID(d);b.setShowReportSiteForSessionID(d,k);d=c.getLocalizedString(g.siteStatus);return{uiStatus:{sitename:g.url,rating:l[a],ratingText:d,computerThreats:g.computerThreatAttributes,identityThreats:g.identityThreatAttributes,
annoyanceThreats:g.annoyanceFactorAttributes,totalThreats:g.computerThreatAttributes+g.identityThreatAttributes+g.annoyanceFactorAttributes,showSafeWebSearchbox:h.showSafeWebSearchbox},regularIcon:g.siteIcon+".png",retinaIcon:g.siteIcon+"@2x.png",showFullReport:p,showReportSite:k,siteRating:g.siteRating,fullReportURL:g.fullReportURL}};b.privateUIStatusForSafeOrUntestedOrMonitoringSite=function(d,b){var a=f.helperUtils.getFeatureFlavorization(),g=c.getLocalizedString(b);if(e(d)||""===d)d=k.ABOUT_BLANK;
d={sitename:d,rating:h.untested,ratingText:g,computerThreats:0,identityThreats:0,annoyanceThreats:0,totalThreats:0,showSafeWebSearchbox:a.showSafeWebSearchbox};a=k.UNTESTED_IMAGE+".png";g=k.RETINAL_UNTESTED_IMAGE+".png";"Safe"===b&&(a=k.SAFE_IMAGE+".png",g=k.RETINAL_SAFE_IMAGE+".png",d.rating=h.safe);return{uiStatus:d,regularIcon:a,retinaIcon:g,showFullReport:!1,showReportSite:!1}};b.uiStatusForSafeSite=function(d){return b.privateUIStatusForSafeOrUntestedOrMonitoringSite(d,"Safe")};b.uiStatusForUntestedSite=
function(d){return b.privateUIStatusForSafeOrUntestedOrMonitoringSite(d,"Untested")};b.uiStatusForMonitoringSite=function(d){return b.privateUIStatusForSafeOrUntestedOrMonitoringSite(d,"Monitoring")};b.getBlockPageString=function(d){var a=b.blockPageStrings();switch(d){case n.KNOWNBAD:var c=b.knownbadWindowStrings(a);break;case n.SUSPECTEDBAD:c=b.suspectedbadWindowStrings(a);break;case n.MALICIOUS:c=b.maliciousWindowStrings(a);break;case n.MALICIOUSSHOP:c=b.maliciousshopWindowStrings(a);break;case n.IPS:c=
b.ipsMaliciousWindowStrings(a)}return c};b.popoverWindowStrings=function(){return{search:c.getLocalizedString("Search the Web Safely"),rating:{nortonRating:c.getLocalizedString("Norton Rating"),computerThreats:c.getLocalizedString("Computer Threats"),identityThreats:c.getLocalizedString("Identity Threats"),annoyanceThreats:c.getLocalizedString("Annoyance Threats"),totalThreats:c.getLocalizedString("Total Threats"),fullReport:c.getLocalizedString("Full Safe Web report"),reportSite:c.getLocalizedString("Report this site"),
nortonSafeWeb:c.getLocalizedString("Norton Safe Web")}}};b.blockPageStrings=function(){return{blockedBy:c.getLocalizedString("BLOCKED BY"),line2:c.getLocalizedString("You attempted to access:"),description2:c.getLocalizedString("It is highly recommended that you do NOT visit this page."),visit_symc1:c.getLocalizedString("Visit"),symantec:c.getLocalizedString("Norton"),visit_symc2:c.getLocalizedString("to learn more about phishing and internet security."),linkToSite:c.getLocalizedString("Continue to the site"),
reportSite:c.getLocalizedString("View Full Report"),searchBoxText:c.getLocalizedString("Search for a safer site")}};b.knownbadWindowStrings=function(a){a.title=c.getLocalizedString("Fraudulent Webpage Blocked");a.description1=c.getLocalizedString("This webpage is a known fraudulent webpage.");return a};b.maliciousWindowStrings=function(a){a.title=c.getLocalizedString("Dangerous Webpage Blocked");a.description1=c.getLocalizedString("This is a known dangerous webpage.");return a};b.maliciousshopWindowStrings=
function(a){a.title=c.getLocalizedString("Dangerous Webpage Blocked");a.description1=c.getLocalizedString("This is a known dangerous webpage.");return a};b.suspectedbadWindowStrings=function(a){a.title=c.getLocalizedString("Suspicious Website Blocked");a.description1=c.getLocalizedString("For your protection, this webpage has been blocked and submitted for review.");return a};b.ipsMaliciousWindowStrings=function(a){a.title=c.getLocalizedString("Malicious Site Blocked!");a.description1=c.getLocalizedString("This webpage is a known malicious webpage.");
return a};b.keepAssistWindowStrings=function(a){var b=!0===a?c.getLocalizedString("Norton Safe Search"):c.getLocalizedString("Norton Home Page");a=!0===a?c.getLocalizedString("Safe Search"):c.getLocalizedString("Home Page");return{title1:c.getLocalizedString("Welcome to"),title2:c.getLocalizedString("Norton"),title3:a,desc1:c.getLocalizedString("Thank you for choosing Norton. When a Chrome message appears at the top right of the screen, click"),desc2:c.getLocalizedString("Keep changes"),desc3:c.getLocalizedStringWithFormat("to maintain your {0} protection in Chrome.",
[b]),btnContinue:c.getLocalizedString("Continue")}};return b}(a.SymBfw,a.NSSS)})(executionContext);
