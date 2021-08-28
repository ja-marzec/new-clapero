const stripe = require('stripe')(process.env.NEXT_STRIPE_PRIVATE);

export default async (req, res) => {
    res.statusCode = 200;
    const {items} = JSON.parse(req.body)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['p24'],
        line_items: items,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
        
       res.json({ id: session.id });
}