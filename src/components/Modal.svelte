<script>
  export let show = false;
  export let title = '';
</script>

{#if show}
  <div class="modal">
    <div class="inner">
      <div class="img-wrapper">
        <div class="img" on:click={() => (show = false)} />
      </div>
      <div class="title">{title}</div>
      <div class="body">
        <slot />
        <div />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: hsl(229, 25%, 31%);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    place-content: center;
    place-items: center;
  }
  .inner {
    height: 100%;
    width: 100%;
    background-color: white;
    text-align: center;
  }
  .title {
    margin: 5rem auto;
    text-align: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
  }

  .img-wrapper {
    position: absolute;
    top: 90%;
    left: 50%;
    height: 30px;
    width: 30px;
    z-index: 10;
    transform: translate(-50%, -50%);
  }
  .img {
    height: 100%;
    width: 100%;
    background-color: black;
    -webkit-mask-image: url('../images/icon-close.svg');
    mask-image: url('../images/icon-close.svg');
    -webkit-mask-size: contain;
    mask-size: contain;
    cursor: pointer;
    transition: all 150ms ease-out;
  }
  .img:hover {
    background-color: red;
    transform: rotate(90deg);
  }

  @media (min-width: 1366px) {
    .img-wrapper {
      top: 9%;
      left: 90%;
      height: 15px;
      width: 15px;
    }
    .inner {
      width: fit-content;
      height: fit-content;
      max-width: 375px;
      max-height: 70vh;
      position: relative;
      border-radius: 10px;
    }
    .body {
      padding: 1rem;
    }
    .title {
      border-radius: 10px;
      text-align: left;
      padding: 1rem;

      margin: 0 0 1rem 0;
    }
  }
</style>
