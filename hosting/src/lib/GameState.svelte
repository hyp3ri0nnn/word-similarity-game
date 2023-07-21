<script lang="ts">

    import EndScreen from "./EndScreen.svelte";
    import StartScreen from "./StartScreen.svelte";
    
    export let gameState = "start";

    export let gameStates = [
        "start",
        "finish"
    ];

    function toggleGameState(event) {
        gameState = gameState === "start" ? "finish" : "start"
    } 

</script>
{#if gameState === "start"} 
    <StartScreen />
{:else if gameState === "finish"}
    <EndScreen />
{/if}

<button on:click={toggleGameState}>
    change game state from {gameState} to {gameStates[1]}
</button>