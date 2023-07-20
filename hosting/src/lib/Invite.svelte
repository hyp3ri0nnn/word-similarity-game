<script lang="ts">
    let friends = ["john", "chris", "melly"]
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
        margin: 4px;
        font-size: x-large;
    }

    div {
        border: 2px whitesmoke solid;
        border-radius: 8px;
        position: absolute;
        margin: 4px;
        top: 0px;
        right: 0px;
        width: 275px;
    }
</style>