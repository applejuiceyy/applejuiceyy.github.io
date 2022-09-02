import{S as se,i as re,s as le,H as ae,k as h,a as M,q as W,l as b,m,h as f,c as j,r as C,n as c,p as o,b as U,F as r,I as ne,u as ie,A as te,J as fe,o as ce,K as de,L as pe,M as V}from"../../chunks/index-772f5e72.js";const oe=`<script context="module">
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

            if (current.length == src.length) {
                current = "";
            }
        }, 1)
    })

    onDestroy(() => i !== null && clearInterval(i))
<\/script>

<div class="hero-root">
    <div style:position="relative" style:height="100vh">
        <div class="hero" bind:this={els.hero}></div>
        <div class="hero-wrapper" bind:this={els.front}>Applejuice</div>
        <div class="hero-pattern" bind:this={els.pattern}></div>

        <div class="deco-box squared-box"  style:background-repeat="repeat" style:background-image="url({rects})" style:left="50px" style:bottom="50px" style:width="50%" style:height="200px" bind:this={els.box1}/>
        <div class="deco-box" style:font-family="monospace" style:white-space="pre" style:color="#00ffff" style:font-size="0.1em" style:right="50px" style:top="50px" style:width="50%" style:height="200px" bind:this={els.box2}>{current}</div>

        <div class="deco-box" style:left="50px" style:top="50px" style:width="100px" style:height="50px" bind:this={els.box3}/>
        
        <div class="deco-box" style:right="50px" style:bottom="50px" style:width="100px" style:height="50px" bind:this={els.box4}/>
    </div>
</div>

<div class="projects">
    What you expected an actual website? Naahh get a hero page and you're lucky
    <a class="project" href="/connected" rel="external">Connected (Logic gates game)</a>
    <a class="project" href="/figs" rel="external">Browser figura docs</a>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    .hero-root {
        height: 110vh;

        overflow: hidden;
        position: relative;
        font-size: min(40vh, 10vw);
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

    .squared-box {
        animation: switch 1s infinite;
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
        }
    }
</style>


<svelte:window bind:scrollY={scroll} on:mousemove={handleMouseMove}/>`,ue=""+new URL("../../assets/rects-f9c1389a.svg",import.meta.url).href;const{window:B}=pe;function he(t){let _=!1,a=()=>{_=!1},x,n,s,v,L,g,k,X,D,A,d,N=`url(${ue})`,q,i,Y,e,l,O,y,R,w,S,E,F,J,I,K,P,Z;return ae(t[6]),{c(){n=h("div"),s=h("div"),v=h("div"),L=M(),g=h("div"),k=W("Applejuice"),X=M(),D=h("div"),A=M(),d=h("div"),q=M(),i=h("div"),Y=W(t[2]),e=M(),l=h("div"),O=M(),y=h("div"),R=M(),w=h("div"),S=W(`What you expected an actual website? Naahh get a hero page and you're lucky
    `),E=h("a"),F=W("Connected (Logic gates game)"),J=M(),I=h("a"),K=W("Browser figura docs"),this.h()},l(p){n=b(p,"DIV",{class:!0});var z=m(n);s=b(z,"DIV",{});var u=m(s);v=b(u,"DIV",{class:!0}),m(v).forEach(f),L=j(u),g=b(u,"DIV",{class:!0});var G=m(g);k=C(G,"Applejuice"),G.forEach(f),X=j(u),D=b(u,"DIV",{class:!0}),m(D).forEach(f),A=j(u),d=b(u,"DIV",{class:!0}),m(d).forEach(f),q=j(u),i=b(u,"DIV",{class:!0});var Q=m(i);Y=C(Q,t[2]),Q.forEach(f),e=j(u),l=b(u,"DIV",{class:!0}),m(l).forEach(f),O=j(u),y=b(u,"DIV",{class:!0}),m(y).forEach(f),u.forEach(f),z.forEach(f),R=j(p),w=b(p,"DIV",{class:!0});var H=m(w);S=C(H,`What you expected an actual website? Naahh get a hero page and you're lucky
    `),E=b(H,"A",{class:!0,href:!0,rel:!0});var $=m(E);F=C($,"Connected (Logic gates game)"),$.forEach(f),J=j(H),I=b(H,"A",{class:!0,href:!0,rel:!0});var ee=m(I);K=C(ee,"Browser figura docs"),ee.forEach(f),H.forEach(f),this.h()},h(){c(v,"class","hero svelte-z6b9ad"),c(g,"class","hero-wrapper svelte-z6b9ad"),c(D,"class","hero-pattern svelte-z6b9ad"),c(d,"class","deco-box squared-box svelte-z6b9ad"),o(d,"background-repeat","repeat",!1),o(d,"background-image",N,!1),o(d,"left","50px",!1),o(d,"bottom","50px",!1),o(d,"width","50%",!1),o(d,"height","200px",!1),c(i,"class","deco-box svelte-z6b9ad"),o(i,"font-family","monospace",!1),o(i,"white-space","pre",!1),o(i,"color","#00ffff",!1),o(i,"font-size","0.1em",!1),o(i,"right","50px",!1),o(i,"top","50px",!1),o(i,"width","50%",!1),o(i,"height","200px",!1),c(l,"class","deco-box svelte-z6b9ad"),o(l,"left","50px",!1),o(l,"top","50px",!1),o(l,"width","100px",!1),o(l,"height","50px",!1),c(y,"class","deco-box svelte-z6b9ad"),o(y,"right","50px",!1),o(y,"bottom","50px",!1),o(y,"width","100px",!1),o(y,"height","50px",!1),o(s,"position","relative",!1),o(s,"height","100vh",!1),c(n,"class","hero-root svelte-z6b9ad"),c(E,"class","project svelte-z6b9ad"),c(E,"href","/connected"),c(E,"rel","external"),c(I,"class","project svelte-z6b9ad"),c(I,"href","/figs"),c(I,"rel","external"),c(w,"class","projects svelte-z6b9ad")},m(p,z){U(p,n,z),r(n,s),r(s,v),t[7](v),r(s,L),r(s,g),r(g,k),t[8](g),r(s,X),r(s,D),t[9](D),r(s,A),r(s,d),t[10](d),r(s,q),r(s,i),r(i,Y),t[11](i),r(s,e),r(s,l),t[12](l),r(s,O),r(s,y),t[13](y),U(p,R,z),U(p,w,z),r(w,S),r(w,E),r(E,F),r(w,J),r(w,I),r(I,K),P||(Z=[ne(B,"mousemove",t[3]),ne(B,"scroll",()=>{_=!0,clearTimeout(x),x=setTimeout(a,100),t[6]()})],P=!0)},p(p,[z]){z&2&&!_&&(_=!0,clearTimeout(x),scrollTo(B.pageXOffset,p[1]),x=setTimeout(a,100)),z&4&&ie(Y,p[2])},i:te,o:te,d(p){p&&f(n),t[7](null),t[8](null),t[9](null),t[10](null),t[11](null),t[12](null),t[13](null),p&&f(R),p&&f(w),P=!1,fe(Z)}}}const ge=!0;function T(t,_,a,x){t!==void 0&&(t.style.transform=`translate(${_*x}px, ${a*x}px)`)}function be(t,_,a){let x=0,n={},s,v=0;function L(e){a(4,s=e.clientX),a(5,v=e.clientY)}let g=null,k="";ce(()=>{g=setInterval(()=>{a(2,k+=oe.at(k.length)),k.length==oe.length&&a(2,k="")},1)}),de(()=>g!==null&&clearInterval(g));function X(){a(1,x=B.pageYOffset)}function D(e){V[e?"unshift":"push"](()=>{n.hero=e,a(0,n)})}function A(e){V[e?"unshift":"push"](()=>{n.front=e,a(0,n)})}function d(e){V[e?"unshift":"push"](()=>{n.pattern=e,a(0,n)})}function N(e){V[e?"unshift":"push"](()=>{n.box1=e,a(0,n)})}function q(e){V[e?"unshift":"push"](()=>{n.box2=e,a(0,n)})}function i(e){V[e?"unshift":"push"](()=>{n.box3=e,a(0,n)})}function Y(e){V[e?"unshift":"push"](()=>{n.box4=e,a(0,n)})}return t.$$.update=()=>{if(t.$$.dirty&49){let e=s/(window.innerWidth/2)-1,l=v/(window.innerHeight/2)-1;T(n.hero,e,l,40),T(n.front,e,l,100),T(n.pattern,e,l,90),T(n.box1,e,l,80),T(n.box2,e,l,60),T(n.box3,e,l,30),T(n.box4,e,l,50)}},[n,x,k,L,s,v,X,D,A,d,N,q,i,Y]}class xe extends se{constructor(_){super(),re(this,_,be,he,le,{})}}export{xe as default,ge as prerender};
