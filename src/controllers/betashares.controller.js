const betasharesFundsListApiLink =
    "https://www.betashares.com.au/api/funds-list.json";

// Example is: https://www.betashares.com.au/files/csv/ARMR_Portfolio_Holdings.csv
const csvURLBase = "https://www.betashares.com.au/files/csv/";
const PORTFOLIO_HOLDINGS = "_Portfolio_Holdings.csv"

exports.getTicker = (req, res) => {
    const ticker1 = req.body.etf1;
    const ticker2 = req.body.etf2;

    retrieveBetashareTickers(ticker1);
    retrieveBetashareTickers(ticker2);
    console.log(ticker1);
    console.log(ticker2);
};

async function retrieveBetashareTickers(ticker) {
    const jsonResponse = await fetch(betasharesFundsListApiLink);
    const tickers = await jsonResponse.json();

    for (i = 0; i < tickers.length; i++) {
        if (tickers[i].short_code == ticker) {
            ticker.toUpperCase();
            csvUrl = csvURLBase + ticker.toUpperCase() + PORTFOLIO_HOLDINGS;

            console.log(csvUrl)
            retrieveBetasharesHoldings(csvUrl);
            console.log(tickers[i].url)
            return tickers[i].url;
        } else {
        }
    }
}

async function retrieveBetasharesHoldings(url) {
    const csvResponse = await fetch(url);
    const csv = await csvResponse.text();
    //
    // console.log(csv)
}
