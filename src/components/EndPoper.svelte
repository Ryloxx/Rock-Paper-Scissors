<script>
  import Button from './Button.svelte';

  export let onRestart = () => {};
  export let endMessage = '';
</script>

<section>
  <div
    style={`font-size: 70px;
				text-transform: uppercase;
                margin:1rem auto;
				font-weight: 700;`}
  >
    {endMessage}
  </div>
  <Button on:click={onRestart} label="Play again" full fullWidth />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }
</style>
