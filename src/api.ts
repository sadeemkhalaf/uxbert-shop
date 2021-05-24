const END_POINT = 'https://jsonplaceholder.typicode.com';

export function getProduct(id: number){
    return fetch(`${END_POINT}/photos/${id}`);
}


export function getProducts(){
    return fetch(`${END_POINT}/photos`);
}

export function getCategory(id: number){
    return fetch(`${END_POINT}/albums/${id}`);
}


export function getCategories(){
    return fetch(`${END_POINT}/albums`);
}
