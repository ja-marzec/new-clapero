const stripe = require('stripe')(process.env.NEXT_STRIPE_PRIVATE);

export default async (req :any, res: any) => {
    res.statusCode = 200;
    const {items} = JSON.parse(req.body)

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['p24'],
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.NEXT_SERVER}/success}`,
        cancel_url: `${process.env.NEXT_SERVER}/cancel`,
      });
        
       res.json({ id: session.id });
}