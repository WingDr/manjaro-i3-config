var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};
(function(a){a.waxFetchData=function(){var a={},f=document.getElementById("M_content_PCDZ_MF3KFEF_ctl00_Password"),e={},d=document.querySelectorAll("label");d=$jscomp.makeIterator(d);for(var b=d.next();!b.done;b=d.next())if(b=b.value,"User ID"===b.innerText&&(b=b.nextElementSibling||{},"DIV"===b.tagName)){e=b;break}a[SymWax.constants.loginType.USERNAME]=e.innerText;a[SymWax.constants.loginType.PASSWORD]=f.value;return a}})(window);
