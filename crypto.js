//Require the https Module
const https = require('https');
const colors = require('colors');

try{
	// Get the input params and store in two vars . Second one (optional).
	var asset_id_base = process.argv.slice(2)[0].toUpperCase();
	var asset_id_quote = process.argv.slice(2)[1].toUpperCase();
	var ask_rate;

	let body = '';

	// Input your API Key (SECRET) here.
	const apikey = 'KEY HERE'; // API KEY HERE

	// Set the options for https request. Only if using https.request method!
	var options =  {
		'method': 'GET',
		'hostname': 'rest.coinapi.io',
		'path': `/v1/exchangerate/${asset_id_base}/${asset_id_quote}`,
		'headers': {'X-CoinAPI-Key': 'KEY HERE'} // API KEY HERE TOO IF USING OPTIONS
	};

	//url variable for https.get() method.
	var url = `https://rest.coinapi.io/v1/exchangerate/${asset_id_base}/${asset_id_quote}?apikey=${apikey}`

	var request = https.get(url, (response) => {
		response.on('data', (chunk) => {
			body += chunk;
		});
		
		response.on('end', ()=> {
			jsonData = JSON.parse(body);
            if(asset_id_quote == 'USD') {
                ask_rate = Math.round(jsonData.rate);
            }
            else {
                ask_rate = jsonData.rate;
            }
			var quote = `Crypto : ${colors.green(jsonData.asset_id_base)} \nTime : ${jsonData.time} \nPrice : ${colors.cyan(ask_rate)} ${jsonData.asset_id_quote}`;
			console.log(colors.bold(quote));
		});
	});
} catch (error) {
	if(error.message == "Cannot read property 'toUpperCase' of undefined"){
		console.log('Please Specify second parameter');
	} else {
		console.log(error.message);
	}
}