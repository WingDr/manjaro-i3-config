(function(){function g(k,f,l){function m(e,d){if(!f[e]){if(!k[e]){var h="function"==typeof require&&require;if(!d&&h)return h(e,!0);if(q)return q(e,!0);d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d;}d=f[e]={exports:{}};k[e][0].call(d.exports,function(d){return m(k[e][1][d]||d)},d,d.exports,g,k,f,l)}return f[e].exports}for(var q="function"==typeof require&&require,n=0;n<l.length;n++)m(l[n]);return m}return g})()({1:[function(g,k,f){(function(k){(function(){function m(a,c){if(!(a instanceof
c))throw new TypeError("Cannot call a class as a function");}function q(a,c){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!c||"object"!==typeof c&&"function"!==typeof c?a:c}function n(a,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(a,
c):a.__proto__=c)}Object.defineProperty(f,"__esModule",{value:!0});var e=function(){function a(c,r){for(var b=0;b<r.length;b++){var a=r[b];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(c,a.key,a)}}return function(c,r,b){r&&a(c.prototype,r);b&&a(c,b);return c}}(),d=SymBfw.extensionAdapter,h=SymBfw.utils.isNil,t=NSSS.uiConstants.MESSAGES,g=NSSS.constants,u=g.scamInsightAgeRating,v=g.scamInsightPrevalenceRating,p=g.scamInsightScore,l=SymBfw.utils.isntNil,
w=function(a){function c(a){m(this,c);var b=q(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));b._getAgeRating=b._getAgeRating.bind(b);b._getPrevalenceRating=b._getPrevalenceRating.bind(b);b._handleClick=b._handleClick.bind(b);b._continueToSite=b._continueToSite.bind(b);b._setDirection=b._setDirection.bind(b);b._reportIssue=b._reportIssue.bind(b);l(a.direction)&&b._setDirection(a.direction);return b}n(c,a);e(c,[{key:"_setDirection",value:function(a){var b=document.getElementsByTagName("body");
l(b)&&l(b[0])&&b[0].setAttribute("dir",a)}},{key:"_getAgeRating",value:function(a){if(h(a))return null;var b=null;a<p.LOWER_LIMIT?b=u.VERY_NEW:a>=p.LOWER_LIMIT&&a<=p.UPPER_LIMIT&&(b=u.NEW);return b}},{key:"_getPrevalenceRating",value:function(a){if(h(a))return null;var b=null;a<p.LOWER_LIMIT?b=v.NO_USERS:a>=p.LOWER_LIMIT&&a<=p.UPPER_LIMIT&&(b=v.FEW_USERS);return b}},{key:"_handleClick",value:function(){SymBfw.extensionAdapter.sendMessage({name:t.SCAM_EXIT_SITE})}},{key:"_continueToSite",value:function(){SymBfw.extensionAdapter.sendMessage({name:t.SCAM_CONTINUE_TO_SITE})}},
{key:"_reportIssue",value:function(){SymBfw.extensionAdapter.sendMessage({name:t.SCAM_REPORT_ISSUE})}},{key:"render",value:function(){var a="https://submit.symantec.com/antifraud/scam_false_positive.cgi?url="+this.props.scamSiteURL;return React.createElement("div",{className:"SI-block-page"},React.createElement("div",{className:"SI-block-page-header"},React.createElement("div",{className:"SI-header"},React.createElement("div",{className:"SI-block-page-norton-image"}),React.createElement("div",{className:"SI-block-page-header-line"}),
React.createElement("div",{className:"SI-block-page-header-title"},this.props.strings["Safe Web"]))),React.createElement("div",{className:"SI-block-page-header-description"},React.createElement("div",{className:"SI-block-page-center"},React.createElement("div",{className:"SI-block-page-alert-image"}),React.createElement("div",{className:"SI-block-page-header-description-content",title:this.props.strings["Scam Insight: Personal Information Risk"]},this.props.strings["Scam Insight: Personal Information Risk"]),
React.createElement("div",{className:"SI-block-page-header-description-page-url",title:this.props.scamSiteURL},this.props.scamSiteURL))),React.createElement("div",{className:"SI-block-page-desc"},React.createElement("div",{className:"SI-block-page-content-description"},React.createElement("div",{className:"SI-block-page-content-description1"},this.props.strings["This site is safe, but\u2026"]),React.createElement("div",{className:"SI-block-page-content-description2"},this.props.strings["It asks for personal information and is not well established with the Norton Community. Use caution when entering any of your information on this site. "],
React.createElement("div",{className:"description2_text1"},this.props.strings["Visit "]),React.createElement("div",{className:"description2_text2"},React.createElement("a",{className:"description2_text2-link",href:"https://norton.com/internetsecurity"},this.props.strings["Norton "])),React.createElement("div",{className:"description2_text3"},this.props.strings["to learn more about personal information risk on Websites."])),React.createElement(x,{strings:this.props.strings,ageRating:this._getAgeRating(this.props.ageScore),
prevalenceRating:this._getPrevalenceRating(this.props.prevalenceScore)})),React.createElement("div",{className:"SI-block-page-continue-to-site"},React.createElement("a",{className:"SI-block-page-continue-to-site-link",onClick:this._continueToSite},this.props.strings["Continue to Site"])),React.createElement("button",{className:"SI-block-page-exit-site",onClick:this._handleClick},this.props.strings["Exit Site"])),React.createElement("div",{className:"SI-block-page-footer-line"}),React.createElement("div",
{className:"SI-block-page-report-issue"},React.createElement("div",{className:"report-issue_text1"},this.props.strings["If you think this website is categorized incorrectly, "]),React.createElement("a",{className:"report-issue_text2",onClick:this._reportIssue,href:a},this.props.strings["Report Issue."])))}}]);return c}(React.Component);f.default=w;var x=f.SIBlockPagePageRating=function(a){function c(a){m(this,c);return q(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a))}n(c,a);e(c,[{key:"render",
value:function(){var a={},b=null,c=null,d={},e=null,f=null;switch(this.props.ageRating){case u.VERY_NEW:a.backgroundImage="url(../images/si_verynewpage-nousers.svg)";b=this.props.strings["Very New"];c=this.props.strings["This website was published very recently."];break;case u.NEW:a.backgroundImage="url(../images/si_newpage-fewusers.svg)",b=this.props.strings.New,c=this.props.strings["This website has been available for a short time."]}switch(this.props.prevalenceRating){case v.NO_USERS:d.backgroundImage=
"url(../images/si_verynewpage-nousers.svg";e=this.props.strings["No Users"];f=this.props.strings["No Norton community members have used this site."];break;case v.FEW_USERS:d.backgroundImage="url(../images/si_newpage-fewusers.svg)",e=this.props.strings["Few Users"],f=this.props.strings["Very few Norton community members have used this site."]}var g=h(this.props.ageRating)?"SI-block-page-prevalence-left-align":"SI-block-page-prevalence";return React.createElement("div",null,h(this.props.ageRating)?
null:React.createElement("div",{className:"SI-block-page-age"},React.createElement("div",{className:"SI-block-page-age-image",style:a}),React.createElement("div",{className:"SI-block-page-age-rating"},React.createElement("div",{className:"age-rating-text1"},this.props.strings["Age: "]),React.createElement("div",{className:"age-rating-text2"},b)),React.createElement("div",{className:"SI-block-page-age-description"},c)),h(this.props.prevalenceRating)?null:React.createElement("div",{className:g},React.createElement("div",
{className:"SI-block-page-prevalence-image",style:d}),React.createElement("div",{className:"SI-block-page-prevalence-rating"},React.createElement("div",{className:"prevalence-rating-text1"},this.props.strings["Prevalence: "]),React.createElement("div",{className:"prevalence-rating-text2"},e)),React.createElement("div",{className:"SI-block-page-prevalence-description"},f)))}}]);return c}(React.Component);(function(){k.NSSS.scamInsightBlockPageUI={show:function(){d.sendMessage({name:t.SCAM_INSIGHT_BLOCKPAGE_INIT},
function(a){h(a)||ReactDOM.render(React.createElement(w,{strings:a.strings,ageScore:a.ageScore,prevalenceScore:a.prevalenceScore,scamSiteURL:a.url,direction:a.direction}),document.getElementById("container"))})}};NSSS.scamInsightBlockPageUI.show()})()}).call(this)}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}]},{},[1]);