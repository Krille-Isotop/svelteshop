<script>
    import { activeBrand } from 'stores';
    export let brands;
</script>

<style>
    ul {
        text-decoration: none;
    }

    li {
        display: inline-block;
    }

    button {
        border: 1px solid black;
        padding: 5px 10px;
        margin-right: 4px;
        text-transform: uppercase;
        background-color: none;
    }
    
    button.active {
        color: white;
        background-color: black;
    }
</style>

<ul>
	{#each brands as brand}
		<li>
            <button class:active="{$activeBrand === brand}" on:click={activeBrand.update(() => brand)}>
                {brand}
            </button>
        </li>
	{/each}
</ul>