<script context="module" lang="ts">
    const pages = ['tea', 'programming', 'TCM'];
</script>

<h1 class="font-bold text-3xl font-medium">Blog</h1>
<p class="">On programming, music, tea, and traditional Chinese medicine</p>
{#each pages as page}
    <li><a href="/blog/{page}">{page}</a></li>
{/each}
