(function(b){b.waxFill_Hobbylobby_create_input=function(){if(null===document.querySelector("#waxDate")){var a=document.createElement("input");a.setAttribute("id","waxDate");a.setAttribute("type","hidden");var c=document.querySelector("#checkout-billing-form").lastChild;c.parentNode.insertBefore(a,c.nextSibling)}};b.waxFill_Hobbylobby=function(){var a=document.querySelector("#waxDate").value.split("/"),c=a[0],b=document.querySelectorAll(".year ul li")[0].querySelector("a").text;a=a[1]-b.substring(2,
4);document.querySelectorAll(".month ul li")[parseInt(c)].querySelector("a").click();document.querySelectorAll(".year ul li")[a].querySelector("a").click();return!1}})(window);
