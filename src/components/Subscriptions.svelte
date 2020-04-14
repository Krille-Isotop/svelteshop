<script>
    import { tooltip } from 'actions/tooltip.js';
    import Tooltip from 'components/Tooltip';
    export let subscriptions;
    let activeSubscription = subscriptions[0];
</script>

<style>
    ul {
        margin-top: 20px;
        margin-left: 0;
        padding: 0;
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
	{#each subscriptions as subscription}
		<li>
            <button 
                class:active="{activeSubscription.title === subscription.title}" 
                on:click={() => activeSubscription = subscription}
                use:tooltip={{ component: Tooltip, text: subscription.title }}
            >
                {subscription.title}
            </button>
        </li>
	{/each}
</ul>