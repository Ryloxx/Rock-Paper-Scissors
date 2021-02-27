<script>
  import { scale } from 'svelte/transition';

  import Loader from './Loader.svelte';

  export let type;
  export let glow = false;
  const type_map = {
    scissors: 'icon-scissors.svg',
    rock: 'icon-rock.svg',
    paper: 'icon-paper.svg',
  };
  const gradient_map = {
    scissors: `linear-gradient(
      to top,
      hsl(39, 89%, 49%),
      hsl(40, 84%, 53%)
    )`,
    rock: `linear-gradient(
      to top,
      hsl(349, 71%, 52%),
      hsl(349, 70%, 56%)
    )`,
    paper: `linear-gradient(
      to top,
      hsl(230, 89%, 62%),
      hsl(230, 89%, 65%)
    )`,
  };
  $: selected_type = type_map[type];
  $: gradient = gradient_map[type];
</script>

{#if type}
  <div
    class="hand"
    in:scale={{ start: 0.95 }}
    class:glow
    style={`background-image:${gradient};`}
  >
    <div class="img-wrapper">
      <img src={`../images/${selected_type}`} alt="" />
    </div>
  </div>
{:else}
  <div class="hand placehodler">
    <Loader />
  </div>
{/if}

<style>
  .hand {
    height: 20vmin;
    width: 20vmin;
    display: grid;
    place-content: center;
    place-items: center;
    border-radius: 50%;
    box-shadow: 0px 8px 20px 0px black;
  }
  .hand.placehodler {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .img-wrapper {
    height: 15vmin;
    width: 15vmin;
    position: relative;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 5px black inset;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    height: 55%;
    width: 55%;
  }
  .hand.glow {
    animation: glowEffect 3s linear infinite;
  }
</style>
