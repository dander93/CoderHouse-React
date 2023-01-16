import categorys from "../data/categorys";

const TIME_TO_RESOLVE_RESPONSE_IN_MS = 0;

export default function getCategorys() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorys);
        },
            TIME_TO_RESOLVE_RESPONSE_IN_MS);
    });
}