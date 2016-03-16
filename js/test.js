/* Author: D. Pollard */
/*'use-restrict';
var a, b, c, f, k, m, z = false, g;
(function(d,t,s,e,i){
	a = d.getElementsByClassName(s), f = d.getElementsByTagName(e)[0];var nm = t;
	if (d.getElementById(i)){ return; }
	c = d.createElement(e);	c.id = i;	k = function(w){ if(w.type.length===5){ adblockCallback(true); }else{adblockCallback(false);}};
	if(c.addEventListener){
		c.addEventListener("load",	k, false);
		c.addEventListener("error", k, false);
	} else if(c.readyState) {
		c.onreadystatechange = k;
	}
	c.src = '//d-pollard.github.io/adblock-detect/' + nm + '.js';
	f.parentNode.insertBefore(c, f);	
}(document, "googleads.g.doubleclick.net", "adBlockTest","script","testBlockMe", adblockCallback));*/
"use-restrict";var a,b,c,f,k,m,z=!1,g;!function(e,t,d,l,n){a=e.getElementsByClassName(d),f=e.getElementsByTagName(l)[0];var r=t;e.getElementById(n)||(c=e.createElement(l),c.id=n,k=function(e){adblockCallback(5===e.type.length?!0:!1)},c.addEventListener?(c.addEventListener("load",k,!1),c.addEventListener("error",k,!1)):c.readyState&&(c.onreadystatechange=k),c.src="//d-pollard.github.io/adblock-detect/"+r+".js",f.parentNode.insertBefore(c,f))}(document,"googleads.g.doubleclick.net","adBlockTest","script","testBlockMe",adblockCallback);