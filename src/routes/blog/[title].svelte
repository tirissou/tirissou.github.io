<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ params, fetch }) => {
        setTimeout(() => {
            console.log(params);
        }, 1000);
        return {
            props: params
        };
    };
</script>

<script lang="ts">
    export let title: string;
</script>

<h1>{title}</h1>
