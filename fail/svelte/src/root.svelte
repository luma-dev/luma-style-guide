<script lang="ts">
  export let title: string | undefined = undefined;
  // FAIL-TEST: eslint
  console.log('');
  // FAIL-TEST: prettier
  const greeting = "hello";
  const table = [
    { id: 1, show: true, title: 'bar' },
    { id: 2, show: false, title: 'foo' },
  ];
  const w = () => new Promise(resolve => setTimeout(resolve, 1000))
  // FAIL-TEST: eslint
  w()
</script>

<h1>TypeScript Svelte File</h1>
<h2>
  title: {title}
</h2>

<!-- FAIL-TEST: prettier -->
{ greeting }

{#each table as row}
  <div>
    {#if row.show}
      {row.title}
    {:else}
      Unavailable.
    {/if}
  </div>
{/each}
