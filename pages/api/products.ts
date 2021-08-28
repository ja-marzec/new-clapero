const stripe = require("stripe")(process.env.NEXT_STRIPE_PRIVATE);

export default async (req:any, res:any) => {
  if( req.method === "GET") {
    const products = await stripe.products.list();
    res.status(200).send(products)
  }
}
