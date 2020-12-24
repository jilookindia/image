//<![CDATA[
// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>42&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});
$("img.recent_thumb").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w65-h65-c/"))});
$(".item-thumbnail img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w72-h72-c/"))});
$(".avatar-image-container img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w70-h70-c/"))});
$(window).load(function(){$("#loader").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"})});
// Expires Header
jQuery.cookie=function(e,n,o){if(arguments.length>1&&"[object Object]"!==String(n)){if(o=jQuery.extend({},o),(null===n||void 0===n)&&(o.expires=-1),"number"==typeof o.expires){var t=o.expires,r=o.expires=new Date;r.setDate(r.getDate()+t)}return n=String(n),document.cookie=[encodeURIComponent(e),"=",o.raw?n:encodeURIComponent(n),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=n||{};var i,c=o.raw?function(e){return e}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(i[1]):null};
// Scroll Animation
jQuery(function(o){var n=function(){var a=o(window).scrollTop()+o(window).height(),i=o(".animatable");0==i.length&&o(window).off("scroll",n),i.each(function(n){var i=o(this);i.offset().top+i.height()-20<a&&i.removeClass("animatable").addClass("animated")})};o(window).on("scroll",n),o(window).trigger("scroll")});
$(function(){$(".separator:data:blog.postImageThumbnailUrl").remove(),$(".post-body > img:data:blog.postImageThumbnailUrl").remove()});
// Back to top
$(function(){ $(document).on( 'scroll', function(){ if ($(window).scrollTop() > 100) { $('.smoothscroll-top').addClass('show'); } else { $('.smoothscroll-top').removeClass('show'); } }); $('.smoothscroll-top').on('click', scrollToTop); }); function scrollToTop() { verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0; element = $('body'); offset = element.offset(); offsetTop = offset.top; $('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50); }
//]]>