// SDK de Mercado Pago
const mercadopago = require('mercadopago');

// Agrega credenciales
mercadopago.configure({
	access_token:
		'TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410'
});

function checkout (req: any, res: any){
  // Crea un objeto de preferencia
	let preference = {
		items: [
			{
				title: req.body.title,
				unit_price: parseInt(req.body.price),
				quantity: parseInt(req.body.quantity),
			}
		],
		back_urls: {
			success: 'http://google.com', //cambiar
			//success: `http://localhost:3001/checkout/success/${req.body.userId}/${req.body.timeTableId}`,
			failure: 'http://google.com', //cambiar
			//failure: `http://localhost:3001/timetable/${req.body.timeTableId}`,
			//pending: 'http://google.com'
		},
		auto_return: 'approved',
		payment_methods: {
			excluded_payment_types: [
				{
					id: "ticket"
				}
			],
			installments: 3
		},
	};

	mercadopago.preferences
		.create(preference)
		.then(function (response: any) {
			// -> Respuesta de MercadoPago
			//console.log(response.body);
			//res.redirect(response.body.init_point);
			res.redirect(response.body.sandbox_init_point);
		})
		.catch(function (error: any) {
			console.log(error);
		});

}

export default checkout;