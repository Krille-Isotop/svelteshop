const products = [
    {
        id: 1,
        name: 'iPhone 11',
        imageUrl: 'https://www.3.dk/i/Apple/iPhone%2011/Global/Devices/Device%20pictures/Apple/iPhone%2011/iPhone11-black-front-ny.png?preset=productListingPage&format=webp',
        price: 8999,
        brand: 'Apple',
        colors: ['black', 'red', 'white'],
        subscriptions: [
            {
                title: '3Surfa',
                description: 'Obegränsat surf inom norden'
            },
            {
                title: '3Världen',
                description: 'Obegränsade samtal och SMS i hela Europa'
            }
        ]
    },
    {
        id: 2,
        name: 'iPhone 7',
        imageUrl: 'https://www.3.dk/i/Apple/iPhone%207/Global/Devices/Device%20pictures/Apple/iPhone%207/Nye%20billeder/iphone-7-mattblack.png?preset=productListingPage&format=webp',
        price: 6499,
        brand: 'Apple',
        colors: ['black', 'red'],
        subscriptions: [
            {
                title: '3Surfa',
                description: 'Obegränsat surf inom norden'
            }
        ]
    },
    {
        id: 3,
        name: 'Samsung Galaxy S10',
        imageUrl: 'https://www.3.dk/i/Samsung/Galaxy%20S10/Global/Devices/Device%20pictures/samsung/Galaxy%20S10/samsung--s10-sort.png?preset=productListingPage&format=webp',
        price: 7899,
        brand: 'Samsung',
        colors: ['grey'],
        subscriptions: [
            {
                title: '3Surfa',
                description: 'Obegränsat surf inom norden'
            }
        ]
    }
];

export default products;