<script context="module">
    import products from 'products';
    import Subscriptions from 'components/subscriptions'

    export async function preload(page, session) {
        const { productid } = page.params;
		return { product: products.find(p => p.id == productid) };
	}
</script>

<script>
    import Button from "../../components/Button.svelte";
    export let product;
    let activeColor = product.colors[0];
</script>

<style>
    .product {
        display: flex;
    }

    .product__color-picker {
        display: flex;
    }

    div {
        cursor: pointer;
        width: 30px;
        margin: 5px;
        height: 30px;
        border: 1px solid grey;
        border-radius: 100%;
    }

    .active {
        box-shadow: inset rgba(0,0,0,.4) 0 0 0 1px, #fff 0 0 0 3px, rgba(0,0,0,.7) 0 0 0 4px;
    }
</style>

<section class="product">
    <img src={product.imageUrl} alt={product.name} />
    <section>
        <section class="product__color-picker">
            {#each product.colors as color}
                <div 
                    style="background-color:{color}" 
                    class:active={color === activeColor} 
                    on:click={() => activeColor = color}
                />
            {/each}
        </section>
        <Subscriptions subscriptions={product.subscriptions} />
        <Button />
    </section>
</section>