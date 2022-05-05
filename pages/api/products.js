import Shopify, {context} from '@lib/shopify'

export default async (req, res) => {
  // Provide HOST_NAME here just in case it was not provided by env variable
  // This might occur during the first deploy to Vercel when you don't yet know
  // what domain your app is being hosted on
  Shopify.Context.update({ HOST_NAME: req.headers.host});
  const session = await Shopify.Utils.loadCurrentSession(req, res);
console.log("shopppp", session.shop, "  tokeonnnnn", session.accessToken);

  const client = new Shopify.Clients.Graphql(session.shop, session.accessToken);
  console.log('Client_productssss', client, "End_Client_productssss");
  // Use `client.get` to request the specified Shopify GraphQL API endpoint, in this case `products`.
  const products = await client.query({
    data: `{
      products (first: 10) {
        edges {
          node {
            id
            title
            bodyHtml
            onlineStoreUrl
            featuredImage {
              src          
              altText
            }
            vendor
          }
        }
      }
    }`
  });
  console.log("productsouBoxBuilder", products)
  res.status(200).json(products)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
