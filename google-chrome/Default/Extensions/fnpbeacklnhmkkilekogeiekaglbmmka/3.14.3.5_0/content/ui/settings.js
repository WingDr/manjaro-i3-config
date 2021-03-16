(function(){function d(k,f,h){function g(c,b){if(!f[c]){if(!k[c]){var a="function"==typeof require&&require;if(!b&&a)return a(c,!0);if(e)return e(c,!0);b=Error("Cannot find module '"+c+"'");throw b.code="MODULE_NOT_FOUND",b;}b=f[c]={exports:{}};k[c][0].call(b.exports,function(a){return g(k[c][1][a]||a)},b,b.exports,d,k,f,h)}return f[c].exports}for(var e="function"==typeof require&&require,b=0;b<h.length;b++)g(h[b]);return g}return d})()({1:[function(d,k,f){function h(b,a){if("function"!==typeof a&&
null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});var g=function(){function b(b,c){for(var a=0;a<c.length;a++){var m=c[a];m.enumerable=m.enumerable||!1;m.configurable=!0;"value"in m&&(m.writable=!0);Object.defineProperty(b,m.key,
m)}}return function(a,c,e){c&&b(a.prototype,c);e&&b(a,e);return a}}(),e=(d=d("./checkbox.jsx"))&&d.__esModule?d:{default:d},b=SymBfw.extensionAdapter,c=NSSS.uiConstants.MESSAGES;d=function(l){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");b=!b||"object"!==typeof b&&"function"!==typeof b?this:b;b.state=
{onlineBankingEnabled:b.props.isOnlineBankingEnabled};b._toggleOnlineBankingEnable=b._toggleOnlineBankingEnable.bind(b);return b}h(a,l);g(a,[{key:"_toggleOnlineBankingEnable",value:function(){this.setState({onlineBankingEnabled:!this.state.onlineBankingEnabled});b.sendMessage({name:c.UPDATE_FG_VALUES,message:!this.state.onlineBankingEnabled})}},{key:"_onLearnMoreLinkClicked",value:function(){b.sendMessage({name:c.FG_LEARN_MORE_LINK})}},{key:"render",value:function(){return React.createElement("div",
{className:"online-banking-protection"},React.createElement("div",{className:"banking-protection-title share-data-title"},this.props.strings["Banking Protection"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox online-banking",onClick:this._toggleOnlineBankingEnable},React.createElement(e.default,{isChecked:this.state.onlineBankingEnabled})),React.createElement("div",{className:"share-data-text share-data-content"},
this.props.strings["Banking Protection can help protect your sensitive online transactions."],"\u00a0",React.createElement("div",{className:"learn-more-banking-protection",onClick:this._onLearnMoreLinkClicked},this.props.strings["Learn More"]))))}}]);return a}(React.Component);f.default=d},{"./checkbox.jsx":2}],2:[function(d,k,f){function h(e,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);e.prototype=Object.create(b&&
b.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(e,b):e.__proto__=b)}Object.defineProperty(f,"__esModule",{value:!0});var g=function(){function e(b,c){for(var e=0;e<c.length;e++){var a=c[e];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(b,a.key,a)}}return function(b,c,l){c&&e(b.prototype,c);l&&e(b,l);return b}}();d=function(e){function b(c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");
c=(b.__proto__||Object.getPrototypeOf(b)).call(this,c);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!==typeof c&&"function"!==typeof c?this:c}h(b,e);g(b,[{key:"render",value:function(){var b=null;this.props.isChecked&&(b="../images/btn-global-checked.svg");this.props.isChecked||(b="../images/btn-global-unchecked.svg");return React.createElement("div",{className:"checkbox-container"},React.createElement("img",{src:b}))}}]);return b}(React.Component);
f.default=d},{}],3:[function(d,k,f){function h(e,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);e.prototype=Object.create(b&&b.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(e,b):e.__proto__=b)}Object.defineProperty(f,"__esModule",{value:!0});var g=function(){function e(b,c){for(var e=0;e<c.length;e++){var a=c[e];a.enumerable=a.enumerable||!1;
a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(b,a.key,a)}}return function(b,c,d){c&&e(b.prototype,c);d&&e(b,d);return b}}();d=function(e){function b(c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");c=(b.__proto__||Object.getPrototypeOf(b)).call(this,c);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");c=!c||"object"!==typeof c&&"function"!==typeof c?this:c;c.state={isPopupShown:!1};c._togglePopupDisplay=
c._togglePopupDisplay.bind(c);c._hidePopup=c._hidePopup.bind(c);return c}h(b,e);g(b,[{key:"componentDidMount",value:function(){window.addEventListener("click",this._hidePopup)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this._hidePopup)}},{key:"_hidePopup",value:function(){!0===this.state.isPopupShown&&this.setState({isPopupShown:!1})}},{key:"_togglePopupDisplay",value:function(b){b.stopPropagation();this.setState({isPopupShown:!this.state.isPopupShown})}},{key:"render",
value:function(){return React.createElement("div",{className:"product-header"},React.createElement("div",{className:"norton-image"}),React.createElement("div",{className:"header-divider"}),React.createElement("div",{className:"product-header-title"},this.props.strings[this.props.productName]),this.props.isLoggedIn?React.createElement("div",{className:"header-email",onClick:this._togglePopupDisplay},this.props.email):null,this.props.isLoggedIn&&this.state.isPopupShown?React.createElement("div",{className:"popup"},
React.createElement("img",{src:"../images/bg-popup.svg"}),React.createElement("span",{className:"sign-out-popup",onClick:this.props.signOutClicked},this.props.strings["Sign out"])):null)}}]);return b}(React.Component);f.default=d},{}],4:[function(d,k,f){function h(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});
a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});var g=function(){function b(b,c){for(var a=0;a<c.length;a++){var e=c[a];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(b,e.key,e)}}return function(a,c,e){c&&b(a.prototype,c);e&&b(a,e);return a}}(),e=(d=d("./checkbox.jsx"))&&d.__esModule?d:{default:d},b=SymBfw.extensionAdapter,c=NSSS.uiConstants.MESSAGES;d=function(d){function a(b){if(!(this instanceof
a))throw new TypeError("Cannot call a class as a function");b=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");b=!b||"object"!==typeof b&&"function"!==typeof b?this:b;b.state={linkGuardEnabled:b.props.isLinkGuardEnabled};b._toggleLinkGuardEnable=b._toggleLinkGuardEnable.bind(b);b._addEventListener=b._addEventListener.bind(b);return b}h(a,d);g(a,[{key:"componentDidMount",value:function(){b.addMessageListener(this._addEventListener)}},
{key:"_addEventListener",value:function(b){switch(b.id){case c.SET_LINK_GUARD_ENABLED_NOTIFICATION:this.setState({linkGuardEnabled:!0})}}},{key:"_toggleLinkGuardEnable",value:function(){this.setState({linkGuardEnabled:!this.state.linkGuardEnabled});b.sendMessage({name:c.UPDATE_FG_LINK_GUARD,message:!this.state.linkGuardEnabled})}},{key:"render",value:function(){return React.createElement("div",{className:"link-guard"},React.createElement("div",{className:"link-guard-title share-data-title"},this.props.strings["Link Guard"]),
React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox link-guard",onClick:this._toggleLinkGuardEnable},React.createElement(e.default,{isChecked:this.state.linkGuardEnabled})),React.createElement("div",{className:"share-data-text"},this.props.strings["Identify unsafe links in Webmail, Facebook, and Twitter"])))}}]);return a}(React.Component);f.default=d},{"./checkbox.jsx":2}],5:[function(d,
k,f){(function(h){(function(){function g(b){return b&&b.__esModule?b:{default:b}}function e(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");}function b(b,a){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?b:a}function c(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&
a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});f.PrivacyContainer=f.StartTour=f.GDPRContainer=f.UserLogInContainer=f.SettingsHeading=void 0;var l=function(){function b(b,a){for(var c=0;c<a.length;c++){var e=a[c];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(b,e.key,e)}}return function(a,c,e){c&&b(a.prototype,
c);e&&b(a,e);return a}}(),a=d("./header.jsx"),k=g(a);a=d("./checkbox.jsx");var r=g(a);a=d("./utils.jsx");var t=g(a);a=d("./linkGuard.jsx");var u=g(a);a=d("./bankingProtection.jsx");var v=g(a),n=NSSS.uiConstants.MESSAGES,p=SymBfw.extensionAdapter,w=SymBfw.utils.isntNil,x=NSSS.constants,y=f.SettingsHeading=function(a){function d(a){e(this,d);return b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a))}c(d,a);l(d,[{key:"render",value:function(){return React.createElement("div",{className:"settings-text"},
this.props.strings.Settings)}}]);return d}(React.Component),z=f.UserLogInContainer=function(a){function d(a){e(this,d);return b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a))}c(d,a);l(d,[{key:"render",value:function(){return React.createElement("div",{className:"signed-in-detail"},React.createElement("div",{className:"signed-in-as logged-in-email"},this.props.strings["Signed in as"],":\u00a0"),React.createElement("div",{className:"logged-in-email settings-email"},this.props.email),React.createElement("div",
{className:"logged-in-email vertical-divider"},"\u00a0|\u00a0"),React.createElement("div",{className:"logged-in-email sign-out",onClick:this.props.signOutClicked},this.props.strings["Sign out"]))}}]);return d}(React.Component),A=f.GDPRContainer=function(a){function d(a){e(this,d);a=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a));a.state={isSharingData:a.props.isTelemetryEnabled};a._toggleCheckbox=a._toggleCheckbox.bind(a);return a}c(d,a);l(d,[{key:"_toggleCheckbox",value:function(){this.setState({isSharingData:!this.state.isSharingData});
p.sendMessage({name:n.SET_TELEMETRY_ENABLED,message:!this.state.isSharingData})}},{key:"render",value:function(){return React.createElement("div",{className:"gdpr-container"},React.createElement("div",{className:"share-data-title"},this.props.strings["Share Data with Norton"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox",onClick:this._toggleCheckbox},React.createElement(r.default,
{isChecked:this.state.isSharingData})),React.createElement("div",{className:"share-data-text"},this.props.strings["Share usage and error data anonymously with Norton and help us make our products even better"])))}}]);return d}(React.Component),B=f.StartTour=function(b){return React.createElement("div",{className:"start-tour-button-container"},React.createElement("span",{className:"start-tour",onClick:b.onClick}," ",b.strings["Start Tour"]," "),React.createElement("span",{className:"new-flag"}," ",
b.strings.New," "))},C=f.PrivacyContainer=function(a){function d(a){e(this,d);a=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a));a._privacyPolicyClicked=a._privacyPolicyClicked.bind(a);return a}c(d,a);l(d,[{key:"_privacyPolicyClicked",value:function(){p.sendMessage({name:n.SETTINGS_PRIVACY_POLICY})}},{key:"render",value:function(){return React.createElement("div",{className:"privacy-container",onClick:this._privacyPolicyClicked},this.props.strings.Privacy)}}]);return d}(React.Component),
q=function(a){function d(a){e(this,d);a=b(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a));a.state={isLoggedIn:a.props.isLoggedIn,email:a.props.email};a.props.direction&&t.default.setDirection(a.props.direction);a.handleSignOutClicked=a.handleSignOutClicked.bind(a);a.handleStartTourButtonClicked=a.handleStartTourButtonClicked.bind(a);return a}c(d,a);l(d,[{key:"componentDidMount",value:function(){p.sendMessage({name:n.EXTN_SETTINGS_PAGE_LOADED_TELEMETRY})}},{key:"handleStartTourButtonClicked",
value:function(){p.sendMessage({name:n.START_HOME_PAGE_TOUR})}},{key:"handleSignOutClicked",value:function(){var b=this;p.sendMessage({name:n.SIGN_OUT},function(a){a.isLogoutSuccess&&b.setState({isLoggedIn:!1,email:null})})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement(k.default,{isLoggedIn:this.state.isLoggedIn,email:this.state.email,signOutClicked:this.handleSignOutClicked,strings:this.props.strings,productName:this.props.productName}),React.createElement("div",
{className:"settings-container"},React.createElement(y,{strings:this.props.strings}),this.state.isLoggedIn?React.createElement(z,{signOutClicked:this.handleSignOutClicked,email:this.state.email,strings:this.props.strings}):null,React.createElement(A,{strings:this.props.strings,isTelemetryEnabled:this.props.isTelemetryEnabled}),this.props.showHomepageTourButton?React.createElement(B,{strings:this.props.strings,onClick:this.handleStartTourButtonClicked}):null,this.props.isLayoutSupported?React.createElement(u.default,
{strings:this.props.strings,isLinkGuardEnabled:this.props.isLinkGuardEnabled}):null,this.props.isBankingProtectionFeatureAvailable?React.createElement(v.default,{strings:this.props.strings,isOnlineBankingEnabled:this.props.isOnlineBankingEnabled}):null,React.createElement(C,{strings:this.props.strings})))}}]);return d}(React.Component);f.default=q;(function(){var b={show:function(){var b=x.PRODUCT_NAME.substring(7);p.sendMessage({name:n.SETTINGS_PAGE_UI_INIT},function(a){w(a)&&ReactDOM.render(React.createElement(q,
{isLoggedIn:a.isLoggedIn,email:a.email,strings:a.strings,direction:a.direction,productName:b,isTelemetryEnabled:a.isTelemetryEnabled,isLayoutSupported:a.isLayoutSupported,isLinkGuardEnabled:a.isLinkGuardEnabled,isBankingProtectionFeatureAvailable:a.bankingProtectionFeatureAvailable,isOnlineBankingEnabled:a.isOnlineBankingEnabled,showHomepageTourButton:a.showHomepageTourButton}),document.getElementById("container"))})}};h.NSSS.showSettingsUI=b;b.show()})()}).call(this)}).call(this,"undefined"!==typeof global?
global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./bankingProtection.jsx":1,"./checkbox.jsx":2,"./header.jsx":3,"./linkGuard.jsx":4,"./utils.jsx":6}],6:[function(d,k,f){Object.defineProperty(f,"__esModule",{value:!0});var h=function(){function d(b,c){for(var d=0;d<c.length;d++){var a=c[d];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(b,a.key,a)}}return function(b,c,e){c&&d(b.prototype,c);e&&d(b,e);return b}}(),g=SymBfw.utils.isntNil;
d=function(){function d(){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");}h(d,null,[{key:"setDirection",value:function(b){var c=document.getElementsByTagName("body");g(c)&&g(c[0])&&c[0].setAttribute("dir",b)}},{key:"isTrustedEvent",value:function(b){if(SymBfw.utils.isNil(b))throw Error("event should not be null");return b.isTrusted}}]);return d}();f.default=d},{}]},{},[5]);