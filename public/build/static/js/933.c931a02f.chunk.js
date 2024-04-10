"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[933],{577:function(e,t,n){n.d(t,{Ix:function(){return A},Am:function(){return V}});var o=n(2791);function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o},s=n(4164);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(e){return"number"===typeof e&&!isNaN(e)}function l(e){return"boolean"===typeof e}function d(e){return"string"===typeof e}function f(e){return"function"===typeof e}function p(e){return d(e)||f(e)?e:null}function m(e){return 0===e||e}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(e){return(0,o.isValidElement)(e)||d(e)||f(e)||u(e)}var h={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},y={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,s=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=a?t+"--"+s:t,m=a?n+"--"+s:n,g=(0,o.useRef)(),v=(0,o.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===v.current&&(t.className=g.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,o.useLayoutEffect)((function(){!function(){var e=d.current;g.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,o.useEffect)((function(){f||(c?y():function(){v.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[f]),o.createElement(o.Fragment,null,r)}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},b=["delay","staleId"];function C(e){var t=(0,o.useReducer)((function(e){return e+1}),0)[1],n=(0,o.useState)([]),r=n[0],a=n[1],s=(0,o.useRef)(null),i=(0,o.useRef)(new Map).current,g=function(e){return-1!==r.indexOf(e)},h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:function(e){return i.get(e)}}).current;function y(e){var t=e.containerId;!h.props.limit||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function T(e){a((function(t){return m(e)?t.filter((function(t){return t!==e})):[]}))}function C(){var e=h.queue.shift();I(e.toastContent,e.toastProps,e.staleId)}function O(e,n){var r=n.delay,a=n.staleId,g=c(n,b);if(v(e)&&!function(e){return!s.current||h.props.enableMultiContainer&&e.containerId!==h.props.containerId||i.has(e.toastId)&&null==e.updateId}(g)){var y=g.toastId,E=g.updateId,O=g.data,_=h.props,L=function(){return T(y)},N=null==E;N&&h.count++;var R,w,k={toastId:y,updateId:E,isLoading:g.isLoading,theme:g.theme||_.theme,icon:null!=g.icon?g.icon:_.icon,isIn:!1,key:g.key||h.toastKey++,type:g.type,closeToast:L,closeButton:g.closeButton,rtl:_.rtl,position:g.position||_.position,transition:g.transition||_.transition,className:p(g.className||_.toastClassName),bodyClassName:p(g.bodyClassName||_.bodyClassName),style:g.style||_.toastStyle,bodyStyle:g.bodyStyle||_.bodyStyle,onClick:g.onClick||_.onClick,pauseOnHover:l(g.pauseOnHover)?g.pauseOnHover:_.pauseOnHover,pauseOnFocusLoss:l(g.pauseOnFocusLoss)?g.pauseOnFocusLoss:_.pauseOnFocusLoss,draggable:l(g.draggable)?g.draggable:_.draggable,draggablePercent:g.draggablePercent||_.draggablePercent,draggableDirection:g.draggableDirection||_.draggableDirection,closeOnClick:l(g.closeOnClick)?g.closeOnClick:_.closeOnClick,progressClassName:p(g.progressClassName||_.progressClassName),progressStyle:g.progressStyle||_.progressStyle,autoClose:!g.isLoading&&(R=g.autoClose,w=_.autoClose,!1===R||u(R)&&R>0?R:w),hideProgressBar:l(g.hideProgressBar)?g.hideProgressBar:_.hideProgressBar,progress:g.progress,role:g.role||_.role,deleteToast:function(){i.delete(y);var e=h.queue.length;if(h.count=m(y)?h.count-1:h.count-h.displayedToast,h.count<0&&(h.count=0),e>0){var n=m(y)?1:h.props.limit;if(1===e||1===n)h.displayedToast++,C();else{var o=n>e?e:n;h.displayedToast=o;for(var r=0;r<o;r++)C()}}else t()}};f(g.onOpen)&&(k.onOpen=g.onOpen),f(g.onClose)&&(k.onClose=g.onClose),k.closeButton=_.closeButton,!1===g.closeButton||v(g.closeButton)?k.closeButton=g.closeButton:!0===g.closeButton&&(k.closeButton=!v(_.closeButton)||_.closeButton);var P=e;(0,o.isValidElement)(e)&&!d(e.type)?P=(0,o.cloneElement)(e,{closeToast:L,toastProps:k,data:O}):f(e)&&(P=e({closeToast:L,toastProps:k,data:O})),_.limit&&_.limit>0&&h.count>_.limit&&N?h.queue.push({toastContent:P,toastProps:k,staleId:a}):u(r)&&r>0?setTimeout((function(){I(P,k,a)}),r):I(P,k,a)}}function I(e,t,n){var o=t.toastId;n&&i.delete(n),i.set(o,{content:e,props:t}),a((function(e){return[].concat(e,[o]).filter((function(e){return e!==n}))}))}return(0,o.useEffect)((function(){return h.containerId=e.containerId,E.cancelEmit(3).on(0,O).on(1,(function(e){return s.current&&T(e)})).on(5,y).emit(2,h),function(){return E.emit(3,h)}}),[]),(0,o.useEffect)((function(){h.isToastActive=g,h.displayedToast=r.length,E.emit(4,r.length,e.containerId)}),[r]),(0,o.useEffect)((function(){h.props=e})),{getToastToRender:function(t){var n=new Map,o=Array.from(i.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:g}}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function _(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useState)(!1),s=a[0],i=a[1],c=(0,o.useRef)(null),u=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,o.useRef)(e),d=e.autoClose,p=e.pauseOnHover,m=e.closeToast,g=e.onClick,v=e.closeOnClick;function h(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",C),document.addEventListener("touchmove",b),document.addEventListener("touchend",C);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=O(t.nativeEvent),u.y=I(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?E():T()}}function T(){r(!0)}function E(){r(!1)}function b(t){var o=c.current;u.canDrag&&o&&(u.didMove=!0,n&&E(),u.x=O(t),u.y=I(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function C(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",C);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){l.current=e})),(0,o.useEffect)((function(){return c.current&&c.current.addEventListener("d",T,{once:!0}),f(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;f(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||E();window.addEventListener("focus",T),window.addEventListener("blur",E)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",E))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:h,onTouchStart:h,onMouseUp:y,onTouchEnd:y};return d&&p&&(_.onMouseEnter=E,_.onMouseLeave=T),v&&(_.onClick=function(e){g&&g(e),u.canCloseOnClick&&m()}),{playToast:T,pauseToast:E,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:_}}function L(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return(0,o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},(0,o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(e){var t,n,r=e.delay,s=e.isRunning,c=e.closeToast,u=e.type,l=e.hide,d=e.className,p=e.style,m=e.controlledProgress,g=e.progress,v=e.rtl,h=e.isIn,y=e.theme,T=i({},p,{animationDuration:r+"ms",animationPlayState:s?"running":"paused",opacity:l?0:1});m&&(T.transform="scaleX("+g+")");var E=a("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),b=f(d)?d({rtl:v,type:u,defaultClassName:E}):a(E,d),C=((n={})[m&&g>=1?"onTransitionEnd":"onAnimationEnd"]=m&&g<1?null:function(){h&&c()},n);return(0,o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:b,style:T},C))}N.defaultProps={type:y.DEFAULT,hide:!1};var R=["theme","type"],w=function(e){var t=e.theme,n=e.type,r=c(e,R);return(0,o.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var k={info:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return(0,o.createElement)(w,Object.assign({},e),(0,o.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return(0,o.createElement)("div",{className:"Toastify__spinner"})}},P=function(e){var t,n,r=_(e),s=r.isRunning,i=r.preventExitTransition,c=r.toastRef,u=r.eventHandlers,l=e.closeButton,p=e.children,m=e.autoClose,g=e.onClick,v=e.type,h=e.hideProgressBar,y=e.closeToast,T=e.transition,E=e.position,b=e.className,C=e.style,O=e.bodyClassName,I=e.bodyStyle,L=e.progressClassName,R=e.progressStyle,w=e.updateId,P=e.role,B=e.progress,A=e.rtl,M=e.toastId,D=e.deleteToast,x=e.isIn,S=e.isLoading,F=e.icon,j=e.theme,z=a("Toastify__toast","Toastify__toast-theme--"+j,"Toastify__toast--"+v,((t={})["Toastify__toast--rtl"]=A,t)),H=f(b)?b({rtl:A,position:E,type:v,defaultClassName:z}):a(z,b),q=!!B,U=k[v],Q={theme:j,type:v},V=U&&U(Q);return!1===F?V=void 0:f(F)?V=F(Q):(0,o.isValidElement)(F)?V=(0,o.cloneElement)(F,Q):d(F)?V=F:S&&(V=k.spinner()),(0,o.createElement)(T,{isIn:x,done:D,position:E,preventExitTransition:i,nodeRef:c},(0,o.createElement)("div",Object.assign({id:M,onClick:g,className:H},u,{style:C,ref:c}),(0,o.createElement)("div",Object.assign({},x&&{role:P},{className:f(O)?O({type:v}):a("Toastify__toast-body",O),style:I}),V&&(0,o.createElement)("div",{className:a("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!S,n))},V),(0,o.createElement)("div",null,p)),function(e){if(e){var t={closeToast:y,type:v,theme:j};return f(e)?e(t):(0,o.isValidElement)(e)?(0,o.cloneElement)(e,t):void 0}}(l),(m||q)&&(0,o.createElement)(N,Object.assign({},w&&!q?{key:"pb-"+w}:{},{rtl:A,theme:j,delay:m,isRunning:s,isIn:x,closeToast:y,hide:h,type:v,style:R,className:L,controlledProgress:q,progress:B}))))},B=T({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),A=function(e){var t=C(e),n=t.getToastToRender,r=t.containerRef,s=t.isToastActive,c=e.className,u=e.style,l=e.rtl,d=e.containerId;function m(e){var t,n=a("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return f(c)?c({position:e,rtl:l,defaultClassName:n}):a(n,p(c))}return(0,o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(e,t){var n=t.length?i({},u):i({},u,{pointerEvents:"none"});return(0,o.createElement)("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,o.createElement)(P,Object.assign({},n,{isIn:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?L:n.closeButton}),t)})))})))};A.defaultProps={position:h.TOP_RIGHT,transition:B,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,D,x,S=new Map,F=[],j=!1;function z(){return Math.random().toString(36).substring(2,9)}function H(e){return e&&(d(e.toastId)||u(e.toastId))?e.toastId:z()}function q(e,t){return S.size>0?E.emit(0,e,t):(F.push({content:e,options:t}),j&&g&&(j=!1,D=document.createElement("div"),document.body.appendChild(D),(0,s.render)((0,o.createElement)(A,Object.assign({},x)),D))),t.toastId}function U(e,t){return i({},t,{type:t&&t.type||e,toastId:H(t)})}function Q(e){return function(t,n){return q(t,U(e,n))}}function V(e,t){return q(e,U(y.DEFAULT,t))}V.loading=function(e,t){return q(e,U(y.DEFAULT,i({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=d(r)?V.loading(r,n):V.loading(r.render,i({},n,r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=i({type:e},c,n,{data:r}),s=d(t)?{render:t}:t;return o?V.update(o,i({},a,s)):V(s.render,i({},a,s)),r}V.dismiss(o)},l=f(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},V.success=Q(y.SUCCESS),V.info=Q(y.INFO),V.error=Q(y.ERROR),V.warning=Q(y.WARNING),V.warn=V.warning,V.dark=function(e,t){return q(e,U(y.DEFAULT,i({theme:"dark"},t)))},V.dismiss=function(e){return E.emit(1,e)},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},V.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||M);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=i({},o,t,{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,q(s,a)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return f(e)&&E.on(4,e),function(){f(e)&&E.off(4,e)}},V.configure=function(e){void 0===e&&(e={}),j=!0,x=e},V.POSITION=h,V.TYPE=y,E.on(2,(function(e){M=e.containerId||e,S.set(M,e),F.forEach((function(e){E.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&E.off(0).off(1).off(5),g&&D&&document.body.removeChild(D)}))},5462:function(){}}]);
//# sourceMappingURL=933.c931a02f.chunk.js.map