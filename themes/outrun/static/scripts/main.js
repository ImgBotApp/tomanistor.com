$(document).ready(function(){$("nav").addClass("nav-fixed"),$("nav > div.logo").css("visibility","visible").fadeIn(),$("nav > div.nav-toggle").css("visibility","visible").fadeIn(),$(".nav-icon").click(function(){$(".nav-full").toggleClass("active"),$(".page").toggleClass("active"),$(this).find("img").toggle()}),$(".nav-full").find("a").click(function(){$(".nav-full").toggleClass("active"),$(".page").toggleClass("active"),$(".nav-icon").find("img").toggle()}),$("pre code").each(function(i,l){hljs.highlightBlock(l)})});