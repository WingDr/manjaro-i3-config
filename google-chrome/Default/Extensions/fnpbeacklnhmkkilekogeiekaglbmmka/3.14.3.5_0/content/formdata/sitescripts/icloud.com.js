(function(c){c.shiftIcons=function(a){for(var b=0;b<a.length;b++)"norton-idsafe-field-styling-divId"===a[b].id&&(a[b].style.left=parseInt(a[b].style.left)-30+"px")};c.waxSiteScriptMain=function(){(new MutationObserver(function(a){for(var b=0;b<a.length;b++)shiftIcons(a[b].addedNodes);setTimeout(function(){SymWax.main.analyzePage()},3E3)})).observe(document.documentElement,{attributes:!0,childList:!0,characterData:!0,subtree:!0})};c.enableLoginButton=function(){var a=document.getElementById("pwd"),
b=new Event("input");a.dispatchEvent(b)};c.waxSiteScriptMain();document.addEventListener("readystatechange",function(a){switch(a.target.readyState){case "complete":setTimeout(function(){SymWax.main.analyzePage()},3E3)}})})(window);
