function tF(t) {
    const res = (1.8 * t + 32).toFixed(1);
    return res;
}

const tC = Number.parseInt(prompt('Введите температуру в градусах Цельсия: '));
alert(`Цельсий: ${tC}, Фаренгейт:${tF(tC)}`)