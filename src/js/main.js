fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Cxrp%2Cusdc%2Csolana%2Ccardano%2Cdogecoin%2Cavalanche&vs_currencies=usd&include_24hr_change=true')
.then(data => data.json())
.then(dataJson => {
    const container = document.querySelector(".container")
    const coins = Object.getOwnPropertyNames(dataJson)

    for(let menu of coins) {
        const crypto = dataJson[menu]
        const cryptoStatic = crypto.usd_24h_change.toFixed(7)

        container.innerHTML += `
        <div class="crypto ${(cryptoStatic < 0) ? 'down' : 'up'}">
        <div class="crypto-logo">
            <img src="images/${menu}.webp">
        </div>
        <div class="crypto-name">
            <h2>${menu}</h2>
            <p>USD</p>
        </div>
        <div class="crypto-price">
            <p class="crypto-usd">$${crypto.usd}</p>
            <h4 class="crypto-static">${cryptoStatic}</h4>
        </div>
    </div>
        `
    }

});
