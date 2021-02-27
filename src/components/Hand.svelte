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
  <article
    in:scale={{ start: 0.9}}
    class:glow
    style={`background-image:${gradient};`}
  >
    <div>
      <img src={`../images/${selected_type}`} alt="" />
    </div>
  </article>
{:else}
  <article class="placehodler">
    <Loader />
  </article>
{/if}

<style>
  article {
    height: 20vmin;
    width: 20vmin;
    display: grid;
    place-content: center;
    place-items: center;
    border-radius: 50%;
    box-shadow: 0px 8px 20px 0px black;
  }
  article.placehodler {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
  }
  /* article.placehodler div:nth-child(0) {
    animation: fade 1.5s 0s linear infinite;
  }
  article.placehodler div:nth-child(1) {
    animation: fade 1.5s 0.5s linear infinite;
  }
  article.placehodler div:nth-child(2) {
    animation: fade 1.5s 1s linear infinite;
  } */
  @keyframes fade {
    0% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
  }
  div {
    height: 15vmin;
    width: 15vmin;
    position: relative;
    border-radius: 50%;
    background-color: white;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    height: 70%;
    width: 70%;
  }
  article.glow {
    animation: glowEffect 3s linear infinite;
  }
</style>
