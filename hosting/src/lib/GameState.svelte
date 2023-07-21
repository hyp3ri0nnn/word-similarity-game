<script lang="ts">

    import EndScreen from "./EndScreen.svelte";
    import StartScreen from "./StartScreen.svelte";
    import Scores from "./Scores.svelte";
    
    /* APPROACH 1 
    
    let nextGameState = "start";
    let indexOfCurrentGameState = 0;
    let indexOfnextGameState = 1;
    
    let gameStates = [
        "start",
        "game",
        "finish"
    ];

    $: gameState = nextGameState;

    function setNextGameState() {
        indexOfCurrentGameState = gameStates.indexOf(gameState); 
        indexOfnextGameState = indexOfCurrentGameState === gameStates.length - 1 ? 0 : indexOfCurrentGameState + 1;
        nextGameState = gameStates[indexOfnextGameState];
        console.log('set is called', indexOfCurrentGameState, indexOfnextGameState, nextGameState)
    }

    */

    let gameStates = ["start", "game", "finish"];
    // this gameState can be read from localStorage for better ui
    let gameState = "start";
    $: nextGameState = returnNextGameState(gameState)

    function returnNextGameState(gameState) {
        let indexOfCurrentGameState = gameStates.indexOf(gameState); 
        let indexOfnextGameState = indexOfCurrentGameState === gameStates.length - 1 ? 0 : indexOfCurrentGameState + 1;
        return gameStates[indexOfnextGameState]
    }



</script>
{#if gameState === "start"} 
    <StartScreen />
{:else if gameState === "game"}
    <Scores />    
{:else if gameState === "finish"}
    <EndScreen />

{/if}

<button on:click={
    () => {
        gameState = nextGameState;
    }
}>
    change game state from {gameState} to {nextGameState}
</button>


<div>
    {gameState} {nextGameState}
</div>