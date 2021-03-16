(function e$jscomp$0(l,m,k){function n(h,g){if(!m[h]){if(!l[h]){var p="function"==typeof require&&require;if(!g&&p)return p(h,!0);if(d)return d(h,!0);g=Error("Cannot find module '"+h+"'");throw g.code="MODULE_NOT_FOUND",g;}g=m[h]={exports:{}};l[h][0].call(g.exports,function(d){var a=l[h][1][d];return n(a?a:d)},g,g.exports,e$jscomp$0,l,m,k)}return m[h].exports}for(var d="function"==typeof require&&require,f=0;f<k.length;f++)n(k[f]);return n})({1:[function(l,m,k){function q(d,b){if("function"!==typeof b&&
null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);d.prototype=Object.create(b&&b.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(d,b):d.__proto__=b)}Object.defineProperty(k,"__esModule",{value:!0});var n=function(){function d(d,a){for(var c=0;c<a.length;c++){var b=a[c];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,b.key,
b)}}return function(b,a,c){a&&d(b.prototype,a);c&&d(b,c);return b}}(),d=SymBfw.constants.uiConstants.NOTIFICATION,f=SymBfw.utils.isntNil,h=SymBfw.extensionAdapter,g=function(g){function b(a){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var c=(b.__proto__||Object.getPrototypeOf(b)).call(this,a);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");c=!c||"object"!==typeof c&&"function"!==typeof c?this:c;c.state={notifications:a.notifications,
isExpanded:!1};a.direction&&c.setDirection(a.direction);c.onLearnMoreClick=c.onLearnMoreClick.bind(c);return c}q(b,g);n(b,[{key:"setDirection",value:function(a){var c=document.getElementsByTagName("body");f(c)&&f(c[0])&&c[0].setAttribute("dir",a)}},{key:"sendMessage",value:function(a,c){h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:c,notificationID:a}})}},{key:"onCloseClicked",value:function(a,c,b){SymBfw.utils.isTrustedEvent(b)&&this.sendMessage(a,d.MESSAGES.NOTIFICATION_CLOSED)}},
{key:"onDefaultButtonClicked",value:function(a,c,b){SymBfw.utils.isTrustedEvent(b)&&this.sendMessage(a,d.MESSAGES.DEFAULT_BUTTON_PRESSED)}},{key:"onSecondaryLinkClicked",value:function(a,c,b){SymBfw.utils.isTrustedEvent(b)&&this.sendMessage(a,d.MESSAGES.SECONDARY_LINK_PRESSED)}},{key:"onLearnMoreClick",value:function(a,c,b){var g=this;SymBfw.utils.isTrustedEvent(b)&&this.setState({isExpanded:!this.state.isExpanded},function(){g.state.isExpanded?h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:d.MESSAGES.RESIZE_IFRAME_HEIGHT,
iframeHeight:g.refs.messageBody.offsetHeight,notificationID:a}}):h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:d.MESSAGES.FIXED_IFRAME_HEIGHT,iframeHeight:d.WARNING_HEIGHT}})})}},{key:"onThirdButtonClicked",value:function(a,c,b){SymBfw.utils.isTrustedEvent(b)&&this.sendMessage(a,d.MESSAGES.THIRD_BUTTON_PRESSED)}},{key:"closeNotification",value:function(a){var c=this.state.notifications;c.splice(a,1);this.setState({notifications:c})}},{key:"getIconStyle",value:function(a){var c={};
c.backgroundImage="url(../../"+a+")";return c}},{key:"getNotifications",value:function(){for(var a=this,c=[],b=d.STACK_COUNT,g=[],k=function(b){var e=a.state.notifications[b];if(!1===e.isAllowed)return"continue";var f=e.notificationID;g.push(f);var k="notify";switch(e.type){case d.TYPE.QUESTION:k+=" actionable";break;case d.TYPE.WARNING_QUESTION:k+=" actionable-warning",h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:d.MESSAGES.FIXED_IFRAME_HEIGHT,iframeHeight:d.WARNING_HEIGHT}})}var l=
null;a.state.isExpanded&&(l=React.createElement("div",{className:"learn-more-content"},e.learnMoreDescriptionFirstParagraph,React.createElement("div",{className:"learn-more-second-paragraph"},e.learnMoreDescriptionSecondParagraph,e.secondaryLink?React.createElement("span",{className:"learn-more-redirect-link",onClick:a.onSecondaryLinkClicked.bind(a,f,b)},e.secondaryLink):null)));var m=React.createElement("div",{key:f},React.createElement("div",{className:k},React.createElement("div",{className:"icon-close",
onClick:a.onCloseClicked.bind(a,f,b)}),React.createElement("div",{className:"notification-message-content"},React.createElement("div",{className:"icon good-image",style:a.getIconStyle(e.imageUrl)}),React.createElement("div",{className:"message-container"},e.title?React.createElement("div",{className:"title"},e.title):null,React.createElement("div",{className:"message"},e.description),React.createElement("div",{className:"extra-message"},React.createElement("div",{className:"line1"},e.line1),React.createElement("div",
{className:"line2"},e.line2)))),React.createElement("div",{className:"actions"},e.secondaryLink?React.createElement("div",{className:"dont-ask",onClick:a.onSecondaryLinkClicked.bind(a,f,b)},e.secondaryLink):null,e.defaultButton?React.createElement("div",{className:"action-button",onClick:a.onDefaultButtonClicked.bind(a,f,b)},e.defaultButton):null,e.thirdButton?React.createElement("div",{className:"third-action-button",onClick:a.onThirdButtonClicked.bind(a,f,b)},e.thirdButton):null)),React.createElement("div",
{className:"divider"}));k=React.createElement("div",{key:f,className:"antialiased"},React.createElement("div",{className:"notification-header"},React.createElement("div",{className:"icon-close-white",onClick:a.onCloseClicked.bind(a,f,b)}),React.createElement("div",{className:"notification-header-title-icon"}),React.createElement("div",{className:"notification-header-title"},React.createElement("span",{className:"header-title-primary"},React.createElement("b",null,e.primaryHeaderTitle)),React.createElement("span",
null,e.secondaryHeaderTitle))),React.createElement("div",{className:"notification-body"},React.createElement("div",{className:k},React.createElement("div",{className:"icon-danger good-image",style:a.getIconStyle(e.imageUrl)}),e.title?React.createElement("div",{className:"title-danger"},e.title):null),React.createElement("div",{className:"message-body-danger"},React.createElement("div",{className:"message-danger"},e.description),React.createElement("div",{className:"focused-title"},e.focusedTitle),
React.createElement("div",{ref:"messageBody"},l),React.createElement("div",{id:"learn-more-link",className:"learn-more-link",onClick:a.onLearnMoreClick.bind(a,f,b)},a.state.isExpanded?e.expandableLinkTextAfterExpand:e.expandableLinkTextBeforeExpand),React.createElement("div",{className:"actions"},e.defaultButton?React.createElement("div",{className:"danger-action-button",onClick:function(c){return a.onDefaultButtonClicked(f,b,c)}},e.defaultButton):null)),React.createElement("div",{className:"divider"})));
e.type===d.TYPE.WARNING_QUESTION?c.push(k):c.push(m)},f=0;(f<b||0===c.length)&&f<this.state.notifications.length;f++)k(f);h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:d.MESSAGES.NOTIFICATIONS_SHOWN,notificationArray:g}});return c}},{key:"render",value:function(){var a=this.getNotifications();return 0===a.length?(h.sendMessage({id:d.MESSAGES.DEFAULT_MESSAGE,payload:{eventID:d.MESSAGES.HIDE_NOTIFICATIONS}}),null):React.createElement("div",{className:"notify-center"},a)}}]);return b}(React.Component);
k.default=g;h.sendMessage({id:d.MESSAGES.UI_INIT},function(d){ReactDOM.render(React.createElement(g,{notifications:d.notifications,direction:d.direction}),document.getElementById("container"))})},{}]},{},[1]);
