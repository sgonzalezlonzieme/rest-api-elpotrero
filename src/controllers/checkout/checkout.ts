const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-6623451607855904-111502-83c610c2165674e9bba665cfb4aa6b0c-672708410",
});

function checkout(req: any, res: any) {
  let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: parseInt(req.body.quantity),
      },
    ],
    back_urls: {
      success: "https://deploy-potrero.vercel.app/success",
      failure: `https://deploy-potrero.vercel.app/failed`,
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket",
        },
      ],
      installments: 3,
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
      res.redirect(response.body.sandbox_init_point);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default checkout;
