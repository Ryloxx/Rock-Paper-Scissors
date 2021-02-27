<script>
  export let value;
</script>

<div class="scoredisplayer">
  <div class="label">Score</div>
  <span id="score-value">
    {value}
  </span>
</div>

<style>
  .scoredisplayer {
    background-color: white;
    border-radius: 10px;
    padding: 1rem 1.75rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 3rem;
    color: hsl(229, 25%, 31%);
    font-weight: 700;
  }
  .label {
    color: hsl(229, 64%, 46%);
    text-transform: uppercase;
    font-size: smaller;
  }
</style>
