<script>
  export let label;
  export let full = false;
  export let fullWidth = false;
</script>

<button class:full class:fullWidth on:click>
  {label}
</button>

<style>
  button {
    border: 1px solid white;
    color: white;
    background-color: transparent;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 10px;
    letter-spacing: 3px;
    font-size: 1rem;
  }
  .fullWidth {
    width: 100%;
  }
  .full {
    background-color: white;
    color: hsl(229, 25%, 31%);
  }
  button.full:hover {
    color: red;
  }
  button:hover {
    color: darkorange;
    cursor: pointer;
  }
</style>
