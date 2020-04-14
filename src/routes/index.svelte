<script>
	import { activeBrand } from 'stores';
	import products from 'products';
	import Product from 'components/Product.svelte';
	import Brands from 'components/Brands.svelte';

	const brands = Array.from(new Set(products.map(p => p.brand)));
	let filteredProducts = products;
	
	activeBrand.subscribe(value => {
		filteredProducts = products.filter(({ brand }) => brand === value)
	});
</script>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}
</style>

<svelte:head>
	<title>Products</title>
</svelte:head>

<h1>Products</h1>

<Brands 
	brands={brands}
/>

<ul>
	{#each filteredProducts as product}
		<Product 
			name={product.name} 
			imageUrl={product.imageUrl}
			price={product.price}
			id={product.id}
		/>
	{/each}
</ul>
