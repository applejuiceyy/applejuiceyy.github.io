<script context="module">
    export const prerender = true;
</script>

<script type="ts">
    import src from "./+page.svelte?raw";
    import rects from "$lib/mainpage/rects.svg";
    import { onDestroy, onMount } from "svelte";

    let scroll: number = 0;
    let els: {[item: string]: HTMLDivElement} = {};

    let mouseX: number, mouseY: number = 0;

    function transform(who: HTMLDivElement, xoff: number, yoff: number, parallax: number) {
        if (who !== undefined)
        who.style.transform = `translate(${xoff * parallax}px, ${yoff * parallax}px)`
    }

    $: {
        if (!import.meta.env.SSR) {
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
</script>

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


<svelte:window bind:scrollY={scroll} on:mousemove={handleMouseMove}/>