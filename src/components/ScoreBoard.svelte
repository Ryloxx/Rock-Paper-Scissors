<script>
  import ScoreDisplayer from './ScoreDisplayer.svelte';

  export let score;
</script>

<section>
  <div class="wrapper">
    <div class="item">Rock</div>
    <div class="item">Paper</div>
    <div class="item">Scissors</div>
  </div>
  <ScoreDisplayer value={score} />
</section>

<style>
  .item {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 18px;
  }
  .wrapper {
    padding: 1rem;
    flex: 1 1 auto;
  }
  section {
    border: 3px solid hsl(217, 16%, 45%);
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    margin: 1rem;
  }
</style>
