<script>
  import { fade } from 'svelte/transition';

  import Button from './components/Button.svelte';
  import EndPoper from './components/EndPoper.svelte';
  import Modal from './components/Modal.svelte';
  import Pick from './components/Pick.svelte';
  import ScoreBoard from './components/ScoreBoard.svelte';
  import Triangle from './components/Triangle.svelte';
  import { game, housePick, pick, restart } from './game';
  let showRules = false;
  let showPoper = false;
  $: doneMmessage =
    $game.winner === 0 ? 'You win' : $game.winner === 1 ? 'You lose' : 'Draw';
  game.subscribe((state) => {
    if (state.done) {
      setTimeout(() => {
        showPoper = true;
      }, 500);
    }
  });
</script>

<main>
  <div class="top">
    <ScoreBoard score={$game.score} />
  </div>
  <div class="mid">
    {#if !$game.playerPick}
      <div class="mid-0">
        <Triangle
          on:pick={(e) => {
            const { pick: playerPick } = e.detail;
            pick(playerPick);
            setTimeout(() => {
              housePick();
            }, 500 + 2000 * Math.random());
          }}
        />
      </div>
    {:else}
      <div class="mid-1">
        <div class="mid-1-top">
          <Pick
            label="You picked"
            pick={$game.playerPick}
            glow={$game.winner === 0}
          />
          {#if showPoper}
            <div class="mid-poper" in:fade={{ duration: 500 }}>
              <EndPoper
                endMessage={doneMmessage}
                onRestart={() => {
                  showPoper = false;
                  restart();
                }}
              />
            </div>
          {/if}
          <Pick
            label="The house picked"
            pick={$game.housePick}
            glow={$game.winner === 1}
          />
        </div>
        {#if showPoper}
          <div class="bot-poper" in:fade={{ duration: 500 }}>
            <EndPoper
              endMessage={doneMmessage}
              onRestart={() => {
                showPoper = false;
                restart();
              }}
            />
          </div>
        {/if}
      </div>
    {/if}
  </div>
  <div class="bot">
    <Button on:click={() => (showRules = true)} label={'Rules'} />
  </div>
</main>
<Modal bind:show={showRules} title="Rules">
  <img src="images/image-rules.svg" alt="" />
</Modal>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 95%;
    margin: 0 auto;
  }
  .top,
  .mid {
    max-width: 766px;
  }
  main > * {
    width: 100%;
    padding-bottom: 1rem;
  }
  .mid > * {
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
  }
  .mid {
    margin: 8vmin auto 2rem auto;
  }

  .mid-0 {
    width: 50vmin;
    height: 50vmin;
  }
  .mid-1-top {
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
  }

  .mid-poper {
    flex: 1 1 auto;
    display: none;
    max-width: 375px;
    padding: 1rem;
  }
  .bot {
    text-align: center;
    max-width: 1366px;
    padding: 0 2rem;
  }
  @media (min-width: 1366px) {
    .bot {
      text-align: right;
    }
    .mid-1-top {
      justify-content: center;
    }
    .mid-poper {
      display: block;
    }
    .bot-poper {
      display: none;
    }
  }
</style>
