<script context="module">
    export const prerender = true;
</script>

<script type="ts">
    import { onDestroy, onMount } from "svelte";

    let svg: SVGElement | null = null;
    let clientHeight: number, clientWidth: number;
    let positioner: SVGGElement | null = null;
    let weight:number=5;

    let i: ReturnType<typeof setTimeout> | null = null;

        
    let constructed: string[] = [];
    let paths: {x:number,y:number}[] = [];
    let offset: {x:number, y:number}[] = [];

    for(let i = 0; i <= 50; i++) {
        let progress = i / 50;
        let angle = progress * Math.PI / 2 + Math.PI / 2;
        paths.push({
            x: Math.sin(angle),
            y: Math.cos(angle)
        })
        offset.push({
            x: 0,
            y: 0
        })

        constructed.push("");
    }

    $: {
        for (let i = 0; i < offset.length; i++) {
            let command = i === 0 ? "M" : "L";
            let node = paths[i];
            let off = offset[i];
            constructed[i] = command + " " + (node.x + off.x) + " " + (node.y + off.y);
        }
    }

    $: {
        if (!import.meta.env.SSR && positioner !== null)
        positioner.setAttributeNS(null, "transform", `translate(${0}, ${clientHeight}) scale(${clientWidth / 1.5}, ${clientWidth / 1.5})`);
        weight = 1 / clientWidth * 200;
    }

    onMount(() => {
        i = setInterval(() => {
            if(Math.random() > 0.9) {
                let n = offset[Math.floor(Math.random() * offset.length)];
                n.x = Math.random() * 0.1 - 0.05;
                n.y = Math.random() * 0.1 - 0.05;
                offset = offset;
            }
        }, 1)
    })

    onDestroy(() => i !== null && clearInterval(i))
</script>

<div class="hero-root">
    <div style:position="relative" style:height="100vh">
        <svg width="100%" height="100%" bind:this={svg} style:mix-blend-mode="difference">
            <g bind:this={positioner}>
                <path fill="transparent" stroke="white" stroke-width={weight} d={constructed.join(" ")}></path>
            </g>
        </svg>
        <h1 class="hero-wrapper">Applejuice</h1>
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
        
        background-image: url("$lib/mainpage/background.svg");
        background-repeat: repeat;
        background-position: center center;
        background-size: calc(100px);

        height: 100vh;

        overflow: hidden;
        position: relative;
        font-size: min(20vh, 5vw);
        filter: grayscale(100%) brightness(0.7);

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

<svelte:window bind:innerHeight={clientHeight} bind:innerWidth={clientWidth}/>