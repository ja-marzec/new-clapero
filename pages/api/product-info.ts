const stripe = require("stripe")(process.env.NEXT_STRIPE_PRIVATE);
console.log(stripe);

export default async (req:any, res:any) => {
    const {id}  = req.query

    if( req.method === "GET") {
        const product = await stripe.products.retrieve(
            id
          );
        res.status(200).send(product)
    }
}