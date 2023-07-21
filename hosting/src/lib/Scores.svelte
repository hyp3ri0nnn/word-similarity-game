<script lang="ts">
    let homeScore: number = 12;
    let awayScore: number = 44;
    let guessLeft: number = 2;
    const serverWord = "Climax";
    let inputWord = ""
    let wordSimilarity: Promise<number> ;

    function checkSimilarity(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(23)
            },2000)
        });
    }

    async function sendInput() {
        wordSimilarity = checkSimilarity();
    }

    let count = 0;


</script>


<div>

    <h1>
        {serverWord}
    </h1>


    {#await wordSimilarity}
        <p> waiting... </p>
    {:then number}
        {#if number}
            <h2>% {number}</h2>
        {/if}
    {/await}

    <h3> {inputWord} </h3>
    <form action="" on:submit|preventDefault={sendInput}>
        <input type="text" bind:value={inputWord}>
        <button type="submit"> Submit </button>
    </form>


<button on:click = {
    () => {
        count += 1;
        }
    }> 
    Do states saved even change ? {count}
</button>
</div>
