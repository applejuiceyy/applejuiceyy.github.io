import{S as pe,i as ue,s as he,I as me,k as h,a as j,q as L,l as m,m as b,h as l,c as E,r as X,n as r,p as s,b as q,G as i,J as de,u as be,B as ce,K as ge,o as ve,L as xe,M as ye,N as A}from"../../chunks/index-9c985453.js";const te=`<script context="module">
    export const prerender = true;
<\/script>

<script type="ts">
    import src from "./+page.svelte?raw";
    import rects from "$lib/mainpage/rects.svg";
    import { onDestroy, onMount } from "svelte";

    let scroll: number = 0;
    let els: {[item: string]: HTMLDivElement} = {};

    let mouseX: number, mouseY: number = 0;

    function transform(who: HTMLDivElement, xoff: number, yoff: number, parallax: number) {
        if (who !== undefined)
        who.style.transform = \`translate(\${xoff * parallax}px, \${yoff * parallax}px)\`
    }

    $: {
        if (!false) {
            let xoff = mouseX / (window.innerWidth / 2) - 1;
            let yoff = mouseY / (window.innerHeight / 2) - 1;

            if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
                xoff = 0;
                yoff = 0;
            }
            
            transform(els.hero, xoff, yoff, 40);
            transform(els.front, xoff, yoff, 100);
            transform(els.pattern, xoff, yoff, 90);
            transform(els.box1, xoff, yoff, 80);
            transform(els.box2, xoff, yoff, 60);
            transform(els.box3, xoff, yoff, 30)
            transform(els.box4, xoff, yoff, 50)
        }
    }

    function handleMouseMove(ev: MouseEvent) {
        mouseX = ev.clientX;
        mouseY = ev.clientY;
    }

    let i: ReturnType<typeof setTimeout> | null = null;
    let current = "";

    onMount(() => {
        i = setInterval(() => {
            current += src.at(current.length);

            if (current.length >= src.length) {
                current = "";
            }

            if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
                current = src;
            }
        }, 1)
    })

    onDestroy(() => i !== null && clearInterval(i))
<\/script>

<div class="hero-root">
    <div style:position="relative" style:height="100vh">
        <div aria-hidden="true" class="hero" bind:this={els.hero}></div>
        <h1 class="hero-wrapper" bind:this={els.front}>Applejuice</h1>
        <div aria-hidden="true" class="hero-pattern" bind:this={els.pattern}></div>

        <div aria-hidden="true" class="deco-box squared-box"  style:background-repeat="repeat" style:background-image="url({rects})" style:left="50px" style:bottom="50px" style:width="50%" style:height="200px" bind:this={els.box1}/>
        <div aria-hidden="true" class="deco-box" style:font-family="monospace" style:white-space="pre" style:color="#00ffff" style:font-size="0.2em" style:right="50px" style:top="50px" style:width="50%" style:height="200px" bind:this={els.box2}>{current}</div>

        <div aria-hidden="true" class="deco-box" style:left="50px" style:top="50px" style:width="100px" style:height="50px" bind:this={els.box3}/>
        
        <div aria-hidden="true" class="deco-box" style:right="50px" style:bottom="50px" style:width="100px" style:height="50px" bind:this={els.box4}/>
    </div>
</div>

<div class="tape">To be done</div>
<div class="tape-reverse" aria-hidden="true">To be done</div>

<div class="projects">
    For now just look at 2 of my projects, some are coming soon
    <a class="project" href="/connected" rel="external">Connected (Logic gates game)</a>
    <a class="project" href="/figs" rel="external">Browser figura docs</a>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    .tape {
        border-bottom: 10px solid;
        border-image: url("$lib/mainpage/tbd.svg") round;
        border-image-slice: 80 0;
        margin-top: 10%;
        transform: rotate(10deg);
    }

    .tape-reverse {
        transform: rotate(190deg);
    }

    .tape::before, .tape-reverse::before {
        content: "";
        width: 20px;
        display: inline-block;
    }

    .hero-root {
        height: 110vh;

        overflow: hidden;
        position: relative;
        font-size: min(20vh, 5vw);
        filter: grayscale(100%) brightness(0.7);

        clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 93%, 60% 95%, 50% 93%, 30% 100%, 20% 93%, 0 100%);

        user-select: none;
    }

    .projects {
        margin: 50px;
        margin-top: 160px;
        padding: 20px;
        background-color: #555555;
        color: white;
    }

    .project {
        display: block;
        color: #bbbbff;
        padding: 4px;
        margin: 2px;
    }

    .hero {
        transform: translateZ(400px);
        --bar-rotation: 40deg;
        background-image: linear-gradient(var(--bar-rotation), #ff0000 50%, #ffffff 50.01%);

        position: absolute;
        inset: -100px;
    }

    .hero-root::after {
        content: "";
        height: 30vh;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        mix-blend-mode: difference;

        background-image: linear-gradient(#ffffff00 0%, #00ffff 50%, #00ffff 100%);
        animation: prompter 3s infinite;
    }

    @media (prefers-reduced-motion: no-preference) {
        .squared-box {
            animation: switch 1s infinite;
        }
    }

    @keyframes switch {
        0% {
            background-position: 5px 5px;
        }

        50% {
            background-position: 5px 5px;
        }

        60% {
            background-position: 0px 0px;
        }

        90% {
            background-position: 0px 0px;
        }

        100% {
            background-position: 5px 5px;
        }
    }

    @keyframes prompter {
        0% {
            transform: translate(0, 50%);
            opacity: 0;
        }

        20% {
            opacity: 0.8;
        }

        25% {
            transform: translate(0, 50%);
            opacity: 0.8;
        }

        100% {
            transform: translate(0, 0);
            opacity: 0;
        }
    }

    .hero-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00ffff;
        mix-blend-mode: difference;

        position: absolute;
        inset: -100px;
    }
    
    .hero-pattern {
        background-image: url("$lib/mainpage/background.svg");
        background-repeat: repeat;
        background-position: center center;
        background-size: calc(100px);

        mix-blend-mode: difference;

        position: absolute;
        inset: -100px;
    }

    .deco-box {
        position: absolute;
        mix-blend-mode: difference;
        outline: 2px #00ffff solid;
    }

    :global(body) {
        margin: 0;
        font-family: Roboto;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-color: black;
            color: white;
        }
    }
</style>


<svelte:window bind:scrollY={scroll} on:mousemove={handleMouseMove}/>`,we=""+new URL("../../assets/rects-f9c1389a.svg",import.meta.url).href;const{window:J}=ye;function _e(t){let M=!1,d=()=>{M=!1},w,n,a,v,B,x,_,C,D,R,p,K=`url(${we})`,F,c,z,e,f,N,y,S,Y,P,W,I,U,G,k,Z,T,Q,$,V,ee,ne,oe;return me(t[6]),{c(){n=h("div"),a=h("div"),v=h("div"),B=j(),x=h("h1"),_=L("Applejuice"),C=j(),D=h("div"),R=j(),p=h("div"),F=j(),c=h("div"),z=L(t[2]),e=j(),f=h("div"),N=j(),y=h("div"),S=j(),Y=h("div"),P=L("To be done"),W=j(),I=h("div"),U=L("To be done"),G=j(),k=h("div"),Z=L(`For now just look at 2 of my projects, some are coming soon
    `),T=h("a"),Q=L("Connected (Logic gates game)"),$=j(),V=h("a"),ee=L("Browser figura docs"),this.h()},l(o){n=m(o,"DIV",{class:!0});var g=b(n);a=m(g,"DIV",{});var u=b(a);v=m(u,"DIV",{"aria-hidden":!0,class:!0}),b(v).forEach(l),B=E(u),x=m(u,"H1",{class:!0});var re=b(x);_=X(re,"Applejuice"),re.forEach(l),C=E(u),D=m(u,"DIV",{"aria-hidden":!0,class:!0}),b(D).forEach(l),R=E(u),p=m(u,"DIV",{"aria-hidden":!0,class:!0}),b(p).forEach(l),F=E(u),c=m(u,"DIV",{"aria-hidden":!0,class:!0});var se=b(c);z=X(se,t[2]),se.forEach(l),e=E(u),f=m(u,"DIV",{"aria-hidden":!0,class:!0}),b(f).forEach(l),N=E(u),y=m(u,"DIV",{"aria-hidden":!0,class:!0}),b(y).forEach(l),u.forEach(l),g.forEach(l),S=E(o),Y=m(o,"DIV",{class:!0});var ie=b(Y);P=X(ie,"To be done"),ie.forEach(l),W=E(o),I=m(o,"DIV",{class:!0,"aria-hidden":!0});var ae=b(I);U=X(ae,"To be done"),ae.forEach(l),G=E(o),k=m(o,"DIV",{class:!0});var O=b(k);Z=X(O,`For now just look at 2 of my projects, some are coming soon
    `),T=m(O,"A",{class:!0,href:!0,rel:!0});var le=b(T);Q=X(le,"Connected (Logic gates game)"),le.forEach(l),$=E(O),V=m(O,"A",{class:!0,href:!0,rel:!0});var fe=b(V);ee=X(fe,"Browser figura docs"),fe.forEach(l),O.forEach(l),this.h()},h(){r(v,"aria-hidden","true"),r(v,"class","hero svelte-1823bp3"),r(x,"class","hero-wrapper svelte-1823bp3"),r(D,"aria-hidden","true"),r(D,"class","hero-pattern svelte-1823bp3"),r(p,"aria-hidden","true"),r(p,"class","deco-box squared-box svelte-1823bp3"),s(p,"background-repeat","repeat",!1),s(p,"background-image",K,!1),s(p,"left","50px",!1),s(p,"bottom","50px",!1),s(p,"width","50%",!1),s(p,"height","200px",!1),r(c,"aria-hidden","true"),r(c,"class","deco-box svelte-1823bp3"),s(c,"font-family","monospace",!1),s(c,"white-space","pre",!1),s(c,"color","#00ffff",!1),s(c,"font-size","0.2em",!1),s(c,"right","50px",!1),s(c,"top","50px",!1),s(c,"width","50%",!1),s(c,"height","200px",!1),r(f,"aria-hidden","true"),r(f,"class","deco-box svelte-1823bp3"),s(f,"left","50px",!1),s(f,"top","50px",!1),s(f,"width","100px",!1),s(f,"height","50px",!1),r(y,"aria-hidden","true"),r(y,"class","deco-box svelte-1823bp3"),s(y,"right","50px",!1),s(y,"bottom","50px",!1),s(y,"width","100px",!1),s(y,"height","50px",!1),s(a,"position","relative",!1),s(a,"height","100vh",!1),r(n,"class","hero-root svelte-1823bp3"),r(Y,"class","tape svelte-1823bp3"),r(I,"class","tape-reverse svelte-1823bp3"),r(I,"aria-hidden","true"),r(T,"class","project svelte-1823bp3"),r(T,"href","/connected"),r(T,"rel","external"),r(V,"class","project svelte-1823bp3"),r(V,"href","/figs"),r(V,"rel","external"),r(k,"class","projects svelte-1823bp3")},m(o,g){q(o,n,g),i(n,a),i(a,v),t[7](v),i(a,B),i(a,x),i(x,_),t[8](x),i(a,C),i(a,D),t[9](D),i(a,R),i(a,p),t[10](p),i(a,F),i(a,c),i(c,z),t[11](c),i(a,e),i(a,f),t[12](f),i(a,N),i(a,y),t[13](y),q(o,S,g),q(o,Y,g),i(Y,P),q(o,W,g),q(o,I,g),i(I,U),q(o,G,g),q(o,k,g),i(k,Z),i(k,T),i(T,Q),i(k,$),i(k,V),i(V,ee),ne||(oe=[de(J,"mousemove",t[3]),de(J,"scroll",()=>{M=!0,clearTimeout(w),w=setTimeout(d,100),t[6]()})],ne=!0)},p(o,[g]){g&2&&!M&&(M=!0,clearTimeout(w),scrollTo(J.pageXOffset,o[1]),w=setTimeout(d,100)),g&4&&be(z,o[2])},i:ce,o:ce,d(o){o&&l(n),t[7](null),t[8](null),t[9](null),t[10](null),t[11](null),t[12](null),t[13](null),o&&l(S),o&&l(Y),o&&l(W),o&&l(I),o&&l(G),o&&l(k),ne=!1,ge(oe)}}}const Ee=!0;function H(t,M,d,w){t!==void 0&&(t.style.transform=`translate(${M*w}px, ${d*w}px)`)}function ke(t,M,d){let w=0,n={},a,v=0;function B(e){d(4,a=e.clientX),d(5,v=e.clientY)}let x=null,_="";ve(()=>{x=setInterval(()=>{d(2,_+=te.at(_.length)),_.length>=te.length&&d(2,_=""),matchMedia("(prefers-reduced-motion: reduce)").matches&&d(2,_=te)},1)}),xe(()=>x!==null&&clearInterval(x));function C(){d(1,w=J.pageYOffset)}function D(e){A[e?"unshift":"push"](()=>{n.hero=e,d(0,n)})}function R(e){A[e?"unshift":"push"](()=>{n.front=e,d(0,n)})}function p(e){A[e?"unshift":"push"](()=>{n.pattern=e,d(0,n)})}function K(e){A[e?"unshift":"push"](()=>{n.box1=e,d(0,n)})}function F(e){A[e?"unshift":"push"](()=>{n.box2=e,d(0,n)})}function c(e){A[e?"unshift":"push"](()=>{n.box3=e,d(0,n)})}function z(e){A[e?"unshift":"push"](()=>{n.box4=e,d(0,n)})}return t.$$.update=()=>{if(t.$$.dirty&49){let e=a/(window.innerWidth/2)-1,f=v/(window.innerHeight/2)-1;matchMedia("(prefers-reduced-motion: reduce)").matches&&(e=0,f=0),H(n.hero,e,f,40),H(n.front,e,f,100),H(n.pattern,e,f,90),H(n.box1,e,f,80),H(n.box2,e,f,60),H(n.box3,e,f,30),H(n.box4,e,f,50)}},[n,w,_,B,a,v,C,D,R,p,K,F,c,z]}class Me extends pe{constructor(M){super(),ue(this,M,ke,_e,he,{})}}export{Me as default,Ee as prerender};
