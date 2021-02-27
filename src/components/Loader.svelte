<div class="dots">
  <div />
  <div />
  <div />
</div>

<style>
  .dots {
    display: flex;
    gap: 2vmin;
  }
  .dots div {
    position: relative;
    height: 3vmin;
    width: 3vmin;
    background-color: hsl(217, 19%, 57%);
    color: hsl(217, 19%, 57%);
    border-radius: 50%;
  }
  .dots div::after {
    border-radius: 50%;
    position: absolute;
    content: '';
    background-color: currentColor;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dots div:nth-child(1)::after {
    animation: pulse 3s 0s linear infinite;
  }
  .dots div:nth-child(2)::after {
    animation: pulse 3s 0.33s linear infinite;
  }
  .dots div:nth-child(3)::after {
    animation: pulse 3s 0.66s linear infinite;
  }
  @keyframes pulse {
    from {
      height: 100%;
      width: 100%;
      opacity: 0.5;
    }
    50% {
      height: 200%;
      width: 200%;
      opacity: 0;
    }
    100% {
      height: 200%;
      width: 200%;
      opacity: 0;
    }
  }
</style>
