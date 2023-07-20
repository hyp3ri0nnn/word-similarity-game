<script lang="ts">
    let friends = ["john", "chris", "melly", "cordelia", "nil", "mahnuser", "batman"]
</script>

<div>
    {#each friends as friend}
        <button>
            {friend}
        </button>
    {/each}
</div>

<style>
    button {
        width: 250px;
        height: 100px;
        color: white;
        background-color: gray;
        margin: 6px;
        font-size: x-large;
    }

    div {
        border: 2px whitesmoke solid;
        border-radius: 8px;
        position: absolute;
        margin: 6px;
        top: 0px;
        right: 0px;
        width: 300px;
        height: 450px;
        overflow: auto;
    }

    :global(div){
        scrollbar-color: #93CAED #909090;
        scrollbar-width: 2rem;
    }

    :global(.main::-webkit-scrollbar) {
        width: 0.25rem
    }

    :global(.main::-webkit-scrollbar-track) {
        background: #1e1e24;
    }

    :global(.main::-webkit-scrollbar-thumb) {
        color: #93CAED
    }
</style>