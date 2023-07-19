<script lang="ts">
    let guessWord: string = "";

</script>


<input id="guess" name="guess" type="text" bind:value={guessWord}>
<div id="output">
    Last Guess = <i> {guessWord} </i>
</div>