var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(b){var d=0;return function(){return d<b.length?{done:!1,value:b[d++]}:{done:!0}}};$jscomp.arrayIterator=function(b){return{next:$jscomp.arrayIteratorImpl(b)}};$jscomp.makeIterator=function(b){var d="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return d?d.call(b):$jscomp.arrayIterator(b)};
(function(b){(b.FG=b.FG||{}).popupControls=function(b,e){var h=b.utils.isNil,d=b.utils.isntNil,m=b.utils.isString,l=b.extensionAdapter,f=e.config,c={},g=null,k=e.config.add_dock_max_timeout;c.initDocument=function(){e.helpers.get_dock_timeout(e.config.add_dock_max_timeout,function(a,c){k=c});if(h(c.el_showhide)){var a=document.getElementById("showhide");a.addEventListener("click",function(a){e.helpers.isTrustedEvent(a)&&c._updateCtrlState(null)});c.el_showhide=a}d(c.sessionInfo)&&(a=c.sessionInfo,
a.hasOwnProperty("urlCategory")&&f.dockConfig.urlCategory.onlineBanking===a.urlCategory&&a.hasOwnProperty("sslStatus")&&f.dockConfig.sslStatus.secure===a.sslStatus?document.body.setAttribute("category","banking"):document.body.setAttribute("category","general"));h(c.state)&&(c.state="expanded");document.body.setAttribute("state",c.state);d(c.ctrl)&&document.body.setAttribute("ctrl",c.ctrl)};c.updateDocument=function(){d(c.state)&&document.body.setAttribute("state",c.state)};c._updateCtrlState=function(a){h(a)&&
(a=document.body.getAttribute("state"),a=h(a)||"expanded"===a?"collapsed":"expanded");var b={};"expanded"===a?b.remove=["collapsed"]:b.add=["collapsed"];document.body.setAttribute("state",a);a={attributes:{state:a},styles:b};c._sendMessage(f.docControls.EVENT_ID,"dock_showhide",{fgdock_iframe:a,fgdoccontrols_iframe:a,fgdock_iframe_top:a,fgdock_iframe_left:a,fgdock_iframe_right:a},null)};c._sendMessage=function(a,c,b,d){l.sendMessage({type:"fg_message_proxy",id:f.uiMessageProxy.EVENT_ID,realId:a,data:{ctrl_id:c,
elements:b,evt_type:d}})};c._onAttributeChange=function(a,b){a=$jscomp.makeIterator(a);for(b=a.next();!b.done;b=a.next())b=b.value,"attributes"===b.type&&"state"===b.attributeName&&("expanded"===b.target.getAttribute("state")?g=e.helpers.reset_timer(g,k,c._updateCtrlState):e.helpers.clear_timer(g))};c._attributeObserver=new MutationObserver(c._onAttributeChange);c._attributeObserver.observe(document.getElementById("fgdoc_controls_body"),{attributes:!0});var n=l.getExtensionURL("");c._msgEventProc=
function(a){a=a.data;if(!h(a)){var b=a.origin;if(0!=m(b)&&b===n)switch(a.msg_type){case "fg_doc_init":c.sessionInfo=a.session;c.state=a.state;c.ctrl=a.ctrl_type;c.initDocument();break;case "fg_dock_mouse_evt":a.evt_type===f.dockMouseEvent.eventType.mouseEnter?e.helpers.clear_timer(g):a.evt_type===f.dockMouseEvent.eventType.mouseLeave&&(a=document.getElementById("fgdoc_controls_body"),d(a)&&"expanded"===a.getAttribute("state")&&(g=e.helpers.reset_timer(g,k,c._updateCtrlState)))}}};window.addEventListener("message",
c._msgEventProc,!1);window.addEventListener("load",function(){setTimeout(function(){h(g)&&c._updateCtrlState("expanded")},f.add_dock_max_timeout)},!1);return c}(b.SymBfw,b.FG)})(this);
