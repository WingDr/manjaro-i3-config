!function(e){function t(t){for(var n,r,s=t[0],u=t[1],l=t[2],p=0,f=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(c&&c(t);f.length;)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var u=o[s];0!==a[u]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={3:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([23,0,2]),o()}({23:function(e,t,o){"use strict";o.r(t),function(e){var t=o(0),n=o(1);o(4);var a=null,i=0;let r;chrome.runtime.onMessage.addListener((function(e,o,r){a&&"WCL.userCancel"==e.type?(a.postMessage({type:"WCL.userCancel"}),i&&(clearInterval(i),i=0)):"loadAppConfig"==e.type?r({type:"postAppConfig",info:t.a}):"getwebextmapping"==e.type&&n.a.toSyncEidMeetingMap()}));var s=function(e){for(var t=chrome.app.getDetails().content_scripts[0].js,o=0,n=t.length;o<n;o++)chrome.tabs.executeScript(e.id,{file:t[o]})};function u(e){return!!e&&"zoom.us"==function(e){var t=function(e){return(e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0].split("?")[0]}(e),o=t.split("."),n=o.length;return n>2&&(t=o[n-2]+"."+o[n-1],2==o[n-2].length&&2==o[n-1].length&&(t=o[n-3]+"."+t)),t}(e)}function l(e,t,o){r&&r.postMessage({error:!0,errorMsg:e,syncState:t,noReviveSchedule:!!o})}chrome.runtime.onInstalled.addListener((function(e){chrome.tabs.query({},(function(e){for(var t,o,n,a=e.length,i=0;i<a;i++)if(e[i].url){var r=(t=e[i].url,o=void 0,n=void 0,o=t.split("//"),-1==(n=o[1].indexOf("/"))?o[1]:o[1].substring(0,n));r&&u(r)&&s(e[i])}}))})),chrome.extension.onMessage.addListener((function(t,o,a){var i,r,s,u,l=n.a.getZoomData(),c=!1;if(l&&(l.assistants&&(i=l.assistants),l.forcelogin&&(r=l.forcelogin),l.trackfields&&(s=l.trackfields),l.recording&&(u=l.recording),l.scheduleDefaultLockOption&&(c="true"===l.scheduleDefaultLockOption.usePMISchedule_locked)),"getZoomToken"==t.type){let e=n.a.getZoomZakRequestToken();if(e){let{inputManualPwd:t,voidable:o}=n.a.checkNeedPasswordForPopup(),p=!!n.a.getValue("zoom_config_fixed_popup");if(!p){let{pwEnable:e,wrEnable:t,authEnable:o,updateAuthOptionItem:a}=n.a.getSecurityResult();!n.a.getSecurity().security3c1||e||t||o||(p=!0)}a({baseurl:n.a.getUserBaseUrl(),token:e,fte:n.a.getValue("zoom_config_fte"),showSetting:p,inputManualPwd:t,pwdVoidable:o,showDomainInput:r&&r.domain_login,hasAssistants:i&&i.length>0,requireTracking:s&&s.length>0,hasCloudRecord:u&&u.option_cloud_recording,hasLocalRecord:u&&u.option_local_recording,schedulePmiLock:c,trackfields:s,zoom_config_pmi_saved_pwd:n.a.getPmiSavedPwd(),zoom_config_pmi:Boolean(n.a.getValue("zoom_config_pmi")),meetingPwdSettingsMap:n.a.getMeetingPwdSettingsMap(),iSFreeAccount:l&&l.iSFreeAccount,embedPasscode:l&&l.embedPasscode})}else n.a.popupLogin()}else if("getMeetingTrashUrl"==t.type){n.a.checkSyncFoVersionOrTime();let t=n.a.getZoomData();if(t&&t.meetingTrashUrl){let o=t.meetingTrashUrl;"string"===e.type(o)&&"/"===o[0]&&(o=o.slice(1)),a({meetingTrashUrl:n.a.getUserBaseUrl()+o})}else a("")}})),chrome.extension.onMessage.addListener((function(e,t,o){var a,i=!1,r=!1,s=n.a.getZoomData();if(s&&s.audiopac&&(a=s.audiopac),a&&a.option_pac_enable&&(i=!0),s&&s.option_freeuser&&(r=!!s.option_freeuser&&n.a.hasZoomRqToken()),"supportPAC"==e.type)o({hasPac:i});else if("quickschedule"==e.type)if(n.a.hasZoomRqToken()){var u=!!n.a.getValue("zoom_config_pmi"),{pwEnable:c,wrEnable:p,authEnable:f,updateAuthOptionItem:d}=n.a.getSecurityResult();let t=n.a.getSecurity();if(t.security3c1&&!c&&!p&&!f)return void o({resetpwd:!0});if(c&&u){let a=n.a.getPmiSavedPwd();if(!a&&!p&&t.security3c1)return void o({resetpwd:!0});e.info.securityRes={pwd:a}}n.a._scheduleMeeting(!1,e.info,(function(e){o(e)}),(function(e){o(e),e.syncState&&l(e.errorMessage,e.syncState,e.noReviveSchedule)}))}else o({errorCode:201});else"newPerm"==e.type?chrome.tabs.create({url:chrome.extension.getURL("permission.html"),selected:!1},(function(e){chrome.tabs.update(e.id,{selected:!0})})):"validateAltHost"==e.type?n.a.validAlternateHost(e.althosts,(function(e){o(e)}),(function(e){o(e)})):"checkUserType"==e.type?o({freeUser:r}):"checkShowFree40MinsTip"==e.type&&o({showFree40MinsTip:s&&s.showFree40MinsTip})})),chrome.runtime.onConnect.addListener((function(e){r&&r.sender.tab.url.indexOf("calendar")>-1&&chrome.tabs.sendMessage(r.sender.tab.id,{type:"disConnect"}),console.assert("Zoom"==e.name),r=e;function o(o){n.a.scheduleMeeting(o,(function(t){n.a.saveValue("zoom_config_fte",!1),e.postMessage({type:"schedule",meeting:t.result})}),(function(e){l(e.errorMessage||t.a.errors[5],e.syncState,e.noReviveSchedule)}))}function s(e,t){if(!e||!e.length)return a.postMessage({type:"WCL.PermissionDeniedError"});a.postMessage({type:"WCL.sharing",sourceId:e,canRequestAudioTrack:!!t.canRequestAudioTrack})}function u(e,o){let a=parseInt(n.a.getValue("zoom_login_request_tabid"));isNaN(a)||(n.a.removeValue("zoom_login_request_tabid"),chrome.tabs.update(a,{active:!0},(function(n){let i={type:"authenticationSigninResult",state:e};2===e&&(i.msg=t.a.errors[6],i.errorCode=o),chrome.tabs.sendMessage(a,i)})))}function c(e){let o=parseInt(n.a.getValue("zoom_login_req_option_tabid"));if(!isNaN(o))if(1===e){n.a.removeValue("zoom_login_req_option_tabid");let e=parseInt(n.a.getValue("zoom_popup_tabpage_tabid"));n.a.removeValue("zoom_popup_tabpage_tabid"),chrome.tabs.remove(e,(function(){chrome.runtime.lastError}));let t=n.a.getValue("zoom_login_req_need_reload");chrome.tabs.update(o,{active:!0},(function(e){!chrome.runtime.lastError&&t&&chrome.tabs.reload(o)})),n.a.removeValue("zoom_login_req_need_reload")}else{let e=parseInt(n.a.getValue("zoom_popup_tabpage_tabid"));chrome.tabs.update(e,{active:!0},(function(e){chrome.runtime.lastError||alert(t.a.errors[6])}))}}e.onMessage.addListener((function(r){if("WCL.getSourceID"!=r.type){var p;if("schedule"==r.type)n.a.hasZoomRqToken()?o(r.info):n.a.popupLogin();else if("schedulepac"==r.type){n.a.hasZoomRqToken()?n.a.schedulePACMeeting(r.info,(function(t){e.postMessage({type:"schedule",meeting:t.result})}),(function(e){l(t.a.errors[5])})):n.a.popupLogin()}else if("update"==r.type){n.a.hasZoomRqToken()&&(p=r.info,n.a.editMeeting(p,(function(e){}),(function(t){let o=n.a.getZoomData();o&&o.hideError4SpecialUser||e.postMessage({type:"editFailed",errorMsg:t.errorMessage})})))}else if("delete"==r.type){n.a.hasZoomRqToken()&&n.a.deleteMeeting(r.info,(function(t){e.postMessage({type:"delSuccess",meeting:t.result})}),(function(e){}))}else if("icon_delete"==r.type){n.a.hasZoomRqToken()?n.a.deleteMeeting(r.info,(function(t){e.postMessage({type:"iconDeleteSuccess",meeting:t.result})}),(function(t){e.postMessage({type:"iconDeleteFailed",showMsg:t.showMsg})})):n.a.popupLogin()}else if("deleteonly"==r.type){n.a.hasZoomRqToken()&&n.a.deleteMeeting(r.info,(function(e){}),(function(e){}))}else if("passOAuthToken"==r.type)n.a.govLogin(r.info.term,r.info.first_name,r.info.last_name,r.info.url,r.info.token||"","",(function(){n.a.saveGoogleToken(r.info.token),n.a.saveValue("zoom_auth_type",3),chrome.tabs.query({},(function(e){e.length>1?chrome.tabs.remove(parseInt(n.a.getValue("zoom_oauth_tabid")),(function(){chrome.runtime.lastError})):chrome.tabs.update(parseInt(n.a.getValue("zoom_oauth_tabid")),{url:"about:blank"},(function(){chrome.runtime.lastError}))})),u(1),c(1)}),(function(e){chrome.tabs.query({},(function(e){e.length>1?chrome.tabs.remove(parseInt(n.a.getValue("zoom_oauth_tabid")),(function(){chrome.runtime.lastError})):chrome.tabs.update(parseInt(n.a.getValue("zoom_oauth_tabid")),{url:"about:blank"},(function(){chrome.runtime.lastError}))})),u(2,e),c(2)}));else if("passSsoSession"==r.type)n.a._ssologin(r.info.url,"","",(function(){chrome.tabs.query({},(function(e){e.length>1?chrome.tabs.remove(parseInt(n.a.getValue("zoom_oauth_tabid")),(function(){chrome.runtime.lastError})):chrome.tabs.update(parseInt(n.a.getValue("zoom_oauth_tabid")),{url:"about:blank"},(function(){chrome.runtime.lastError}))})),n.a.saveZoomSSOValidDate(new Date),n.a.saveValue("zoom_auth_type",2),u(1),c(1)}),(function(e){chrome.tabs.query({},(function(e){e.length>1?chrome.tabs.remove(parseInt(n.a.getValue("zoom_oauth_tabid")),(function(){chrome.runtime.lastError})):chrome.tabs.update(parseInt(n.a.getValue("zoom_oauth_tabid")),{url:"about:blank"},(function(){chrome.runtime.lastError}))})),u(2,e),c(2)}));else if("loadZoomOptions"==r.type)e.postMessage({type:"updateZmOptions",zmOpt:n.a.getZoomSetting()});else if("saveOptionsAndSchedule"==r.type)if(n.a.hasZoomRqToken()){let e=r.info.securityRes;delete r.info.securityRes;let t=r.info.allowDenyRes;delete r.info.allowDenyRes;let a=r.info.templateRes;delete r.info.templateRes,n.a.updateZoomSetting(r.info,(function(){n.a.updateSecurity(e),n.a.updateAllowDeny(t),r.info.securityRes=e,r.info.allowDenyRes=t,r.info.templateRes=a,o(r.info)}))}else n.a.popupLogin();else if("saveOptionsAndQuickSchedule"==r.type)if(n.a.hasZoomRqToken())if(r.info.changepwd){let e=n.a.getSecurity(),t=r.info.securityRes.pwd;t&&""!=t&&(e.pmi.passcode.value=t,n.a.setSecurity(e)),o(r.info)}else n.a.updateSettingForQucik(r.info,(function(){o(r.info)}));else n.a.popupLogin();else if("sendLog"==r.type)n.a.hasZoomRqToken()&&n.a.sendLog(r.info,(function(){}));else if("sync"==r.type)n.a.toSync();else if("saveNewCalendarEvent"==r.type)n.a.createMeetingMp(r.info,(function(){}),(function(){}));else if("removeCalendarEvent"==r.type)n.a.sendLog({msgType:3,msg:{info:"zm-observer trigger to delete.",baseid:r.info.event_baseid},operaType:1}),n.a.removeMeetingMp(r.info,(function(t){t.result&&0!=t.result&&e.postMessage({type:"deleteMeetingToast"})}),(function(){}));else if("updateTimeAndTimezone"==r.type)n.a.updateMeetingTimeAndTimezone(r.info,(function(){}),(function(){}));else if("getCalendarEvent"==r.type)n.a.getMeetingMp(r.info,(function(){}),(function(){}));else if("signWithGoogleEvent"==r.type)n.a.signWithGoogle();else if("workemailSigninEvent"==r.type)n.a.workemailSignin(r.info,(function(t){e.postMessage({type:"workemailSigninResult",info:t})}));else if("ssoSigninEvent"==r.type)n.a.ssoSignin(r.info,(function(t){e.postMessage({type:"ssoSigninResult",info:t})}));else if("saveStorageData"==r.type){let e=r.key,t=r.val;n.a.saveValue(e,t)}else if("loadAppConfig"==r.type)e.postMessage({type:"postAppConfig",info:t.a});else if("callPopupLogin"==r.type)n.a.popupLogin();else if("remoteCheckPwd"==r.type)r.info.pwd&&n.a.remoteCheckPassword(r.info.pwd).done((function(t){e.postMessage({type:"remoteCheckPwdResult",exception:!1,info:{res:t.status,msg:t.errorMessage,errortype:1,channel:r.info.channel}})})).fail((function(){e.postMessage({type:"remoteCheckPwdResult",exception:!0,info:{channel:r.info.channel}})}));else if("viewTemplateDetail"==r.type){let e=r.info.templateId;if(e){let t=n.a.getAdminTemplateDetailUrl(e);chrome.tabs.create({url:t})}}}else{a=e;var f=["screen","window"];chrome.desktopCapture?chrome.desktopCapture.chooseDesktopMedia(f,e.sender.tab,s):(chrome.windows.create({url:chrome.extension.getURL("sharing.html"),type:"popup",left:Math.abs(Number.parseInt((window.screen.width-800)/2)),top:Math.abs(Number.parseInt((window.screen.height-295)/2)),focused:!0,width:800,height:295}),i||(i=setInterval((function(){chrome.desktopCapture&&(chrome.desktopCapture.chooseDesktopMedia(f,e.sender.tab,s),clearInterval(i))}),1e3)))}}))})),chrome.runtime.onMessageExternal.addListener((function(e,t,o){return e&&e.message&&"version"==e.message&&o({version:1}),!0}))}.call(this,o(6))},8:function(e,t,o){}});