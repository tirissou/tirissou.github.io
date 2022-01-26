<script context="module" lang="ts">
    import "../app.css";
</script>

<script lang="ts">
    import { prefetch } from "$app/navigation";
</script>

<nav class="p-6 bg-neutral-500 justify-between flex-wrap items-center m-4 rounded-md">
    <div on:mouseover={() => prefetch("/blog")} class="flex mt-4 justify-end">
	<a sveltekit:prefetch class="text-lg mr-4 text-neutral-200 hover:text-white" href="/">Home</a>
	<a sveltekit:prefetch class="text-lg mr-4 text-neutral-200 hover:text-white" href="/blog">Blog</a>
    </div>
</nav>

<main class="p-4">
    <slot />
</main>
