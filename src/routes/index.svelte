<script context="module" lang="ts">
    export const prerender = false;
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({}) => {
        return {
            props: {
                age: 100
            },
            maxage: 100
        };
    };
</script>

<script lang="ts">
    export let age: number;
</script>

<h1 class="text">Thibault Irissou ({age})</h1>
<p><a sveltekit:prefetch href="/blog">Blog</a></p>
