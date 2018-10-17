/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-19 16:03:23
 * @version $Id$
 */

var products = document.getElementsByClassName('products')[0],
	services = document.getElementsByClassName('services')[0],
	down_ul = document.getElementsByClassName('downlist')[0],
	down_li = down_ul.children,
	str1 = "down-active",str2="down-hidden";
products.onmouseover = function(){
	down_li[0].className =str1;
	down_li[1].className = str2;
}
down_li[0].onmouseover = function(){
	down_li[0].className =str1;
	down_li[1].className = str2;
}
products.onmouseout = function(){
	down_li[0].className = str2;
}
down_li[0].onmouseout = function(){
	down_li[0].className =str2;
}
services.onmouseover = function(){
	down_li[1].className = str1;
	down_li[0].className = str2;
}
down_li[1].onmouseover = function(){
	down_li[1].className = str1;
	down_li[0].className = str2;
}
services.onmouseout = function(){
	down_li[0].className = str2
}
down_li[1].onmouseout = function(){
	down_li[1].className =str2;
}