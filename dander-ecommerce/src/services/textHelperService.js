export function textToCurrency(price) {
    return new Intl.NumberFormat("es-AR",
        {
            style: 'currency',
            currency: 'ARS'
        })
        .format(price);
}