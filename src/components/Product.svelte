<script>
    export let name;
    export let imageUrl;
    export let price;
    export let id;
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    a {
        text-decoration: none;
    }
</style>

<a href={`/product/${id}`}>
    <div>
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} />
        <p>Pris: {price} kr.</p>
    </div>
</a>