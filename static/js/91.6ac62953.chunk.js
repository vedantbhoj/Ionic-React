(this["webpackJsonpIonic-React"]=this["webpackJsonpIonic-React"]||[]).push([[91],{198:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return d})),o.d(t,"shadow",(function(){return l}));o(18);var a=o(15),r=function(e,t){return void 0===t&&(t="top"),"calc("+e+"px + var(--ion-safe-area-"+t+"))"},n=function(e){return document.querySelector(e+".ion-cloned-element")},l=function(e){return e.shadowRoot||e},i=function(e){return e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},s=function(e,t){for(var o=0,a=e.querySelectorAll("ion-buttons");o<a.length;o++){var r=a[o],n=r.closest("ion-header"),l=n&&!n.classList.contains("header-collapse-condense-inactive"),i=r.querySelector("ion-back-button"),s=r.classList.contains("buttons-collapse");if(null!==i&&(s&&l&&t||!s))return i}return null},c=function(e,t,o,l){var i=l.getBoundingClientRect(),s=t?"calc(100% - "+(i.right+4)+"px)":i.left-4+"px",c=t?"7px":"-7px",f=t?"-4px":"4px",d=t?"-4px":"4px",y=t?"right":"left",m=t?"left":"right",p=[{offset:0,opacity:0,transform:"translate("+c+", "+r(8)+") scale(2.1)"},{offset:1,opacity:1,transform:"translate("+f+", "+r(-40)+") scale(1)"}],u=[{offset:0,opacity:1,transform:"translate("+f+", "+r(-40)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+c+", "+r(8)+") scale(2.1)"}],b=o?u:p,S=[{offset:0,opacity:0,transform:"translate3d("+d+", "+r(-35)+", 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+r(-40)+", 0) scale(1)"}],v=[{offset:0,opacity:1,transform:"translate("+d+", "+r(-40)+") scale(1)"},{offset:.2,opacity:0,transform:"translate("+d+", "+r(-35)+") scale(0.6)"},{offset:1,opacity:0,transform:"translate("+d+", "+r(-35)+") scale(0.6)"}],T=o?v:S,h=Object(a.a)(),g=Object(a.a)(),E=n("ion-back-button"),q=E.querySelector(".button-text"),X=E.querySelector("ion-icon");E.text=l.text,E.mode=l.mode,E.icon=l.icon,E.color=l.color,E.disabled=l.disabled,E.style.setProperty("display","block"),E.style.setProperty("position","fixed"),g.addElement(X),h.addElement(q),h.beforeStyles({"transform-origin":y+" center"}).beforeAddWrite((function(){l.style.setProperty("display","none"),E.style.setProperty(y,s)})).afterAddWrite((function(){l.style.setProperty("display",""),E.style.setProperty("display","none"),E.style.removeProperty(y)})).keyframes(b),g.beforeStyles({"transform-origin":m+" center"}).keyframes(T),e.addAnimation([h,g])},f=function(e,t,o,l){var i,s=l.getBoundingClientRect(),c=t?"calc(100% - "+s.right+"px)":s.left+"px",f=t?"-18px":"18px",d=t?"right":"left",y=[{offset:0,opacity:0,transform:"translate("+f+", "+r(0)+") scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, "+r(49)+") scale(1)"}],m=[{offset:0,opacity:.99,transform:"translate(0, "+r(49)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+f+", "+r(0)+") scale(0.5)"}],p=o?y:m,u=n("ion-title"),b=Object(a.a)();u.innerText=l.innerText,u.size=l.size,u.color=l.color,b.addElement(u),b.beforeStyles((i={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},i[d]=c,i)).beforeAddWrite((function(){l.style.setProperty("display","none")})).afterAddWrite((function(){l.style.setProperty("display",""),u.style.setProperty("display","none")})).keyframes(p),e.addAnimation(b)},d=function(e,t){try{var o="rtl"===e.ownerDocument.dir,r=o?"-99.5%":"99.5%",n=o?"33%":"-33%",d=t.enteringEl,y=t.leavingEl,m="back"===t.direction,p=d.querySelector(":scope > ion-content"),u=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),b=d.querySelectorAll(":scope > ion-header > ion-toolbar"),S=Object(a.a)(),v=Object(a.a)();if(S.addElement(d).duration(t.duration||540).easing(t.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),y&&e){var T=Object(a.a)();T.addElement(e),S.addAnimation(T)}if(p||0!==b.length||0!==u.length?(v.addElement(p),v.addElement(u)):v.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),S.addAnimation(v),m?v.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+n+")","translateX(0%)").fromTo("opacity",.8,1):v.beforeClearStyles(["opacity"]).fromTo("transform","translateX("+r+")","translateX(0%)"),p){var h=l(p).querySelector(".transition-effect");if(h){var g=h.querySelector(".transition-cover"),E=h.querySelector(".transition-shadow"),q=Object(a.a)(),X=Object(a.a)(),A=Object(a.a)();q.addElement(h).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),X.addElement(g).beforeClearStyles(["opacity"]).fromTo("opacity",0,.1),A.addElement(E).beforeClearStyles(["opacity"]).fromTo("opacity",.03,.7),q.addAnimation([X,A]),v.addAnimation([q])}}var j=d.querySelector("ion-header.header-collapse-condense"),O=function(e,t,o,a,r){var n=s(a,o),l=i(r),d=i(a),y=s(r,o),m=null!==n&&null!==l&&!o,p=null!==d&&null!==y&&o;return m?(f(e,t,o,l),c(e,t,o,n)):p&&(f(e,t,o,d),c(e,t,o,y)),{forward:m,backward:p}}(S,o,m,d,y),x=O.forward,C=O.backward;if(b.forEach((function(e){var t=Object(a.a)();t.addElement(e),S.addAnimation(t);var i=Object(a.a)();i.addElement(e.querySelector("ion-title"));var s,c=Object(a.a)(),f=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),d=e.closest("ion-header"),y=d&&d.classList.contains("header-collapse-condense-inactive");s=m?f.filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!y||!t})):f.filter((function(e){return!e.classList.contains("buttons-collapse")})),c.addElement(s);var p=Object(a.a)();p.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=Object(a.a)();u.addElement(l(e).querySelector(".toolbar-background"));var b=Object(a.a)(),v=e.querySelector("ion-back-button");if(v&&b.addElement(v),t.addAnimation([i,c,p,u,b]),c.fromTo("opacity",.01,1),p.fromTo("opacity",.01,1),m)y||i.fromTo("transform","translateX("+n+")","translateX(0%)").fromTo("opacity",.01,1),p.fromTo("transform","translateX("+n+")","translateX(0%)"),b.fromTo("opacity",.01,1);else if(j||i.fromTo("transform","translateX("+r+")","translateX(0%)").fromTo("opacity",.01,1),p.fromTo("transform","translateX("+r+")","translateX(0%)"),u.beforeClearStyles(["opacity"]).fromTo("opacity",.01,1),x||b.fromTo("opacity",.01,1),v&&!x){var T=Object(a.a)();T.addElement(l(v).querySelector(".button-text")).fromTo("transform",o?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(T)}})),y){var k=Object(a.a)(),w=y.querySelector(":scope > ion-content");if(k.addElement(w),k.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),S.addAnimation(k),m?k.beforeClearStyles(["opacity"]).fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"):k.fromTo("transform","translateX(0%)","translateX("+n+")").fromTo("opacity",1,.8),w){var P=l(w).querySelector(".transition-effect");if(P){var L=P.querySelector(".transition-cover"),R=P.querySelector(".transition-shadow"),z=Object(a.a)(),W=Object(a.a)(),B=Object(a.a)();z.addElement(P).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),W.addElement(L).beforeClearStyles(["opacity"]).fromTo("opacity",.1,0),B.addElement(R).beforeClearStyles(["opacity"]).fromTo("opacity",.7,.03),z.addAnimation([W,B]),k.addAnimation([z])}}y.querySelectorAll(":scope > ion-header > ion-toolbar").forEach((function(e){var t=Object(a.a)();t.addElement(e);var r=Object(a.a)();r.addElement(e.querySelector("ion-title"));var i=Object(a.a)(),s=e.querySelectorAll("ion-buttons,[menuToggle]"),c=e.closest("ion-header"),f=c&&c.classList.contains("header-collapse-condense-inactive"),d=Array.from(s).filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!f||!t}));i.addElement(d);var y=Object(a.a)(),p=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&y.addElement(p);var u=Object(a.a)();u.addElement(l(e).querySelector(".toolbar-background"));var b=Object(a.a)(),v=e.querySelector("ion-back-button");if(v&&b.addElement(v),t.addAnimation([r,i,y,b,u]),S.addAnimation(t),b.fromTo("opacity",.99,0),i.fromTo("opacity",.99,0),y.fromTo("opacity",.99,0),m){if(f||r.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)").fromTo("opacity",.99,0),y.fromTo("transform","translateX(0%)",o?"translateX(-100%)":"translateX(100%)"),u.beforeClearStyles(["opacity"]).fromTo("opacity",1,.01),v&&!C){var T=Object(a.a)();T.addElement(l(v).querySelector(".button-text")).fromTo("transform","translateX(0%)","translateX("+(o?-124:124)+"px)"),t.addAnimation(T)}}else f||r.fromTo("transform","translateX(0%)","translateX("+n+")").fromTo("opacity",.99,0).afterClearStyles(["transform","opacity"]),y.fromTo("transform","translateX(0%)","translateX("+n+")").afterClearStyles(["transform","opacity"]),b.afterClearStyles(["opacity"]),r.afterClearStyles(["opacity"]),i.afterClearStyles(["opacity"])}))}return S}catch(I){throw I}}}}]);
//# sourceMappingURL=91.6ac62953.chunk.js.map