<script>
  import Hand from './Hand.svelte';

  export let label;
  export let pick;
  export let glow;
</script>

<article class:glow>
  <div>
    <Hand {glow} type={pick} />
  </div>
  <div>{label}</div>
</article>

<style>
  div {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 1rem auto;
  }
  article > * {
    margin: 1.5rem auto;
  }
  article {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1366px) {
    article {
      flex-direction: column-reverse;
    }
  }
</style>
