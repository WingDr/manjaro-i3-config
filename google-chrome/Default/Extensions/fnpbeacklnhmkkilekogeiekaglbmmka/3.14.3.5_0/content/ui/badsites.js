function goToSite(){var a=getURI();""!=a&&"Unavailable"!=a&&(a=-1!=a.indexOf("?")?a+"&override=1":a+"?override=1",document.location.replace(a))}function goToReportSite(){var a=getReportURI();""!=a&&"Unavailable"!=a&&(a=-1!=a.indexOf("?")?a+"&override=1":a+"?override=1",document.location.replace(a))}
function changeURI(){var a=document.getElementById("URILoc"),b=getURI();if(""!==b&&null!==a&&"Unavailable"!==b)64<b.length&&(b=b.substr(0,61),b+="..."),b=document.createTextNode(b),null!==b&&a.appendChild(b);else if(a=document.getElementById("View"))a.style.display="none"}function getURI(){var a=top.document.location.search.slice(1).split("&");a=a[0].slice(a[0].indexOf("=")+1);return decodeURI(a)}
function getReportURI(){var a=top.document.location.search.slice(1).split("&");a=a[1].slice(a[1].indexOf("=")+1);return unescape(a)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("URILoc").appendChild(document.createTextNode(getURI()));document.getElementById("DReport").addEventListener("click",function(){goToReportSite()});document.getElementById("ViewAnyway").addEventListener("click",function(){goToSite()})});