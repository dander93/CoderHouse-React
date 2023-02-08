import products from '../../data/products'

const TIME_TO_RESOLVE_RESPONSE_IN_MS = 0;

export function getAllItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        },
            TIME_TO_RESOLVE_RESPONSE_IN_MS);
    });
}

export function getItemByID(itemID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemFound = products.find(item => item.id === Number(itemID));

            if (itemFound) resolve(itemFound);

            reject("No se encontraron resultados");
        }, TIME_TO_RESOLVE_RESPONSE_IN_MS);
    });
}

export function getItemsByCategory(category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const items = products.filter(item => item.category === category);

            if (items) resolve(items)

            reject("No se encontraron resultados")
        }, TIME_TO_RESOLVE_RESPONSE_IN_MS);
    })
}

export function getItemByCategoryAndID(itemID, category) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemFound = products.find(item => item.id === Number(itemID) && item.category === category);

            if (itemFound) resolve(itemFound);

            reject("No se encontraron resultados");
        }, TIME_TO_RESOLVE_RESPONSE_IN_MS);
    });
}