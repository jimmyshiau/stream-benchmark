$(function(){if($.browser.safari){$("body").addClass("safari")}$.fn.bgPos=function(){var e=$(this).css("background-position");if(typeof(e)==="undefined"){return $(this).css("background-position-x")+" "+$(this).css("background-position-y")}else{return e}};$.fn.bgPosSplit=function(){return $(this).bgPos().split(" ")};var a=isTouchDevice();$("body").addClass("touch");if(a){$("body").addClass("touch")}else{}setTimeout(function(){var f=document.createElement("script");var e=document.getElementsByTagName("script")[0];f.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0011/4259.js?"+Math.floor(new Date().getTime()/3600000);f.async=true;f.type="text/javascript";e.parentNode.insertBefore(f,e)},1);var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://apis.google.com/js/plusone.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);!function(h,e,i){var g,f=h.getElementsByTagName(e)[0];if(!h.getElementById(i)){g=h.createElement(e);g.id=i;g.src="//platform.twitter.com/widgets.js";f.parentNode.insertBefore(g,f)}}(document,"script","twitter-wjs");var d;$.scrollbarWidth=function(){if(d==null){var e=document.createElement("div");e.style.cssText="top:-1000px;left:-1000px;position:absolute;visibility:hidden;border:none;width:50px;height:50px;overflow:scroll;";document.body.appendChild(e);d=e.offsetWidth-e.clientWidth;$(e).remove()}return d}});function isTouchDevice(){return("ontouchstart" in window)}var ADAPT_CONFIG={path:"http://rikulo.org/less/",dynamic:true,callback:function(a,b){$(window).trigger("onResponsiveCssChange",[a,b]);if(a==0){$(".responsive-image").each(function(){var c=$(this),d=c.attr("src");if(d!=c.attr("data-320src")){c.attr("src",c.attr("data-320src"))}})}else{$(".responsive-image").each(function(){var c=$(this),d=c.attr("src");if(d==c.attr("data-320src")){c.attr("src",c.attr("data-fullsrc"))}})}},range:["0px    to 479px  = responsive_320","479px  to 767px  = responsive_480","767px  to 959px  = responsive_768","959px            = responsive_960"]};(function(p,m,e,f){if(!e){return}var o=window.location.hostname;var a,i,c;var q=typeof e.callback==="function"?e.callback:f;var r=e.path?e.path:"";var j=e.range;var b=j.length;var k=$('link[href*="responsive"]')[0],h=isTouchDevice();k.rel="stylesheet";k.media="screen";function n(d,s){if(k.href!=a){k.href=a;i=a;q&&q(d,s)}}function l(){clearTimeout(c);var d=p.innerWidth||m.documentElement.clientWidth||m.body.clientWidth||0;var w,v,y,x,s,t;var u=b;var z=b-1;while(u--){a="";w=j[u].split("=");v=w[0];t=w[1]?w[1].replace(/\s/g,""):f;s=v.match("to");y=s?parseInt(v.split("to")[0],10):parseInt(v,10);x=s?parseInt(v.split("to")[1],10):f;if((!x&&u===z&&d>y)||(d>y&&d<=x)){t&&(a=r+t);break}}if(!i){n(u,d)}else{if(i!==a){n(u,d)}}}l();function g(){clearTimeout(c);c=setTimeout(l,16)}if(e.dynamic){if(p.addEventListener){p.addEventListener("resize",g,false)}else{if(p.attachEvent){p.attachEvent("onresize",g)}else{p.onresize=g}}}})(this,this.document,ADAPT_CONFIG);