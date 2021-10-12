/* ----- MercadoPago -----

1- Botón "Alquilar / Reservar"
  -> Post a la ruta "timetable": Guarda en BD la cancha reservada
    {
      "id": 89,
      "day": "09/6/2021",
      "hour": "11:00",
      "duration": 1,
      "fieldId": 3,
      "gameId": null
    }
  -> Post a la ruta "http://localhost:3001/checkout": Proceso de pago
  {
    "title": "Nombre_de_cancha",
    "price": Precio_cancha, (20% del total)
    "quantity": Cantidad,
    "timeTableId": Id (*),
    "usuarioId": Id (?),
    "userEmail": mail (?)
  }

2- Finaliza el proceso de pago
  -> 3 estados posibles:
    a- success: 'http://localhost:3001/checkout/success'
      Redirigir al front "url de la página"
		b- failure: 'http://localhost:3001/checkout/failure/id' (*)
      -> Delete del registro timetable:id (idTimetable por params)
      -> Redirige al front "url de la página"
		c- pending: 'http://localhost:3001/checkout/pending' (NO)

*/
