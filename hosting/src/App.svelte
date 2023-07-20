<script lang="ts">
  import Game from './lib/Game.svelte'
  import Invite from './lib/Invite.svelte';
  import StartGame from './lib/StartGame.svelte';
  import Menu from './lib/Menu.svelte';
</script>

<main>

  <div>
    <Game />
    <Menu />
    <Invite />
    <StartGame />
  </div>


</main>

<style>

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
