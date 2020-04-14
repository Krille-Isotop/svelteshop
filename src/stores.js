import { writable } from 'svelte/store';
import products from './_products';

const firstProduct = products[0];
export const activeBrand = writable(firstProduct.brand);