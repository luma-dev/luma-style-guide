<script lang="ts">
  import { onMount } from 'svelte';
  import JS from './js.svelte';

  import { a, b } from './my-stores';
  export let title: string | undefined = undefined;

  onMount(() => {
    // eslint-disable-next-line no-console
    console.log('started!');
  });

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
  $a: {$a.slice(1)}, {`$b: ${$b}`},
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
