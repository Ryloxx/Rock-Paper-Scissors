<script>
  import { createEventDispatcher } from 'svelte';

  import Hand from './Hand.svelte';

  const dispatch = createEventDispatcher();

  function pickEvent(type) {
    dispatch('pick', { pick: type });
  }
</script>

<div class="triangle">
  <div on:click={() => pickEvent('rock')} class="hand left">
    <Hand type={'rock'} />
  </div>
  <div on:click={() => pickEvent('scissors')} class="hand right">
    <Hand type={'scissors'} />
  </div>
  <div on:click={() => pickEvent('paper')} class="hand mid">
    <Hand type={'paper'} />
  </div>
</div>

<style>
  .triangle {
    position: relative;
    background-image: url('../images/bg-triangle.svg');
    background-size: contain;
    background-repeat: no-repeat;
    margin: 1rem auto;
    height: 100%;
    width: 100%;
    min-height: 150px;
    min-width: 150px;
  }
  .hand {
    position: absolute;
    transform: translate(-50%, -50%);
  }
  .left {
    top: 0;
    left: 0;
  }
  .right {
    left: 100%;
    top: 0;
  }
  .mid {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
</style>
