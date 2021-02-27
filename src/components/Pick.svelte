<script>
  import Hand from './Hand.svelte';

  export let label;
  export let pick;
  export let glow;
</script>

<div class="pick" class:glow>
  <div>
    <Hand {glow} type={pick} />
  </div>
  <div>{label}</div>
</div>

<style>
  div {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 1rem auto;
  }
  .pick > * {
    margin: 1.5rem auto;
  }
  .pick {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1366px) {
    .pick {
      flex-direction: column-reverse;
    }
  }
</style>
