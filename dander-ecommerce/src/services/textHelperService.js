const textToCurrency = (price) => {
    return new Intl.NumberFormat("es-AR",
        {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 2

        })
        .format(price);
}

const textToPercentual = (discount) => {
    return new Intl.NumberFormat("es-AR",
        {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        .format(discount)
}

export {
    textToCurrency,
    textToPercentual
}