var express = require('express')
var app = express()

app.get('/',(req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
	res.send({
		shipping: {
			name: 'Kenneth Thompson',
			address: '8114 Grow Drive #9, Cape Neddick, ME 03902'
		},
		bank: {
			type: 'BANK OF AMERICA CHECKING x-5567',
			card: 'Visa x-4512 (backup)'
		},
		price: '28.98'
	})
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})