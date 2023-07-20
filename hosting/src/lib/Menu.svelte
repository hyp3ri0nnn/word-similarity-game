<script lang="ts">
    let options = [
        { 
            id : 1,
            option: "Profile"
        },
        { 
            id : 2,
            option: "Scores"
        },
        { 
            id : 3,
            option: "Settings"
        },
    ]
    
    let isMenuVisible = true;

    function toggleHamburger(event) {
        isMenuVisible = !isMenuVisible;
    }
</script>

<div >
    <button on:click={toggleHamburger}>
        Menu
    </button>
    <ul style:visibility={isMenuVisible ? 'visible' : 'hidden'}>
        {#each options as option }
            <button>
                {option.option}
            </button>
        {/each}
    </ul>
</div>

<style>
    div {
        position: absolute;
        top: 0;
        left: 0;
    }

    ul {
        width: 150px;
    }

    button {
        background-color: plum;
        color: black;
    }
</style>