<script lang="ts">
  import JS from './js.svelte';
  import { a, b } from './my-stores';
  export let title: string | undefined = undefined;

  const table = [
    { id: 1, show: true, title: 'bar' },
    { id: 2, show: false, title: 'foo' },
  ];
</script>

<h1>TypeScript Svelte File</h1>

<JS />

<h2>
  title: {title}
</h2>

<div>
  $a: {$a}, $b: {$b},
</div>

{#each table as row}
  <div>
    {#if row.show}
      {row.title}
    {:else}
      Unavailable.
    {/if}
  </div>
{/each}
