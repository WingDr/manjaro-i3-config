(function(b){var e=null,g=0;setTimeout(function(){e=b.getUserInputTop();b.addSetInterval()},1E3);b.getUserInputTop=function(){var a=[0,0],c=document.getElementById("onlineId1");if(null==c||0==c.getBoundingClientRect().top)c=document.getElementById("onlineIdSelect");if(null==c)return null;var b=document.getElementById("passcode1");a[0]=c.getBoundingClientRect().top;a[1]=b.getBoundingClientRect().top;return a};b.setDecorator=function(){var a=getUserInputTop();if(null!=a&&0!=a[0]&&0!=a[1]){var c=document.querySelectorAll("#norton-idsafe-field-styling-divId"),
b=document.getElementById("symc-in-page-popup");if(null!=c&&0!==c.length){var f=e[0]-a[0];if(0!=f){e=a;var d=window.scrollY;a=g-d;g=d;for(d=0;d<c.length;d++)c[d].style.top=parseFloat(c[d].style.top)-f-a+"px";null!=b&&(b.style.top=parseFloat(b.style.top)-f-a+"px")}}}};b.addSetInterval=function(){window.setInterval(setDecorator,250)}})(window);
