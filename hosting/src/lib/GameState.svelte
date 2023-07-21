<script lang="ts">

    import EndScreen from "./EndScreen.svelte";
    import StartScreen from "./StartScreen.svelte";
    import Scores from "./Scores.svelte";
    
    
    let nextGameState = "start";
    
    let gameStates = [
        "start",
        "game",
        "finish"
    ];

    let gameState;

    function setNextGameState() {
        let indexOfCurrentGameState = gameStates.indexOf(gameState); 
        let indexOfnextGameState = indexOfCurrentGameState === gameStates.length - 1 ? 0 : indexOfCurrentGameState + 1;
        nextGameState = gameStates[indexOfnextGameState];
        console.log('set is called', indexOfCurrentGameState, indexOfnextGameState, nextGameState)
    }

    $: {
        gameState = nextGameState;
    }

   


</script>
{#if gameState === "start"} 
    <StartScreen />
{:else if gameState === "game"}
    <Scores />    
{:else if gameState === "finish"}
    <EndScreen />

{/if}

<button on:click={setNextGameState}>
    change game state from {gameState} to {nextGameState}
</button>