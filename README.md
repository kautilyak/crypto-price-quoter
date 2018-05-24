# crypto-price-quoter
A small program scripted in Node.js which quotes the current exchange rate of a specific crypto symbol at that time. Cause why not?

## Pre-Requisites

For this to work 

1. your machine should be capable of running node.js
2. You need to have a api secret key from http://coinapi.io


## Usage
The usage goes like this
```node.js
node crypto.js <SYMBOL WHOSE PRICE TO BE CHECKED> <SYMBOL IN WHICH THE PRICE SHOULD BE OUTPUT>
```

## Example

To find the Value of `BTC in USD`

```node.js
node crypto.js btc usd
```

To find the value of `XMR in BTC`

```node.js
node crypto.js xmr btc
```
