<script>
  import ScoreDisplayer from './ScoreDisplayer.svelte';

  export let score;
</script>

<div class="scoreboard">
  <div class="wrapper">
    <div class="item">Rock</div>
    <div class="item">Paper</div>
    <div class="item">Scissors</div>
  </div>
  <ScoreDisplayer value={score} />
</div>

<style>
  .item {
    text-transform: uppercase;
    font-size: 30px;
    line-height: 28px;
  }
  .wrapper {
    flex: 1 1 auto;
  }
  .scoreboard {
    border: 3px solid hsl(217, 16%, 45%);
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    margin: 1rem;
    align-items: center;
  }
</style>
