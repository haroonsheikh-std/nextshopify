import { Layout,
  Page,
  FooterHelp,
  MediaCard,
  Card,
  ResourceList,
  Thumbnail,
  ResourceItem,
  TextStyle,
  TextContainer,
  Heading,
} from "@shopify/polaris";

import Link from 'next/link'
import {} from '@shopify/polaris'
import { useEffect, useState } from "react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function Index() {
  const primaryAction = {content: 'Settings', url: '/embedded/settings'};
  const [products, setProducts] = useState([]);
  const app = useAppBridge();

  useEffect(async () => {
    const response = await authenticatedFetch(app)('/api/products');
    const {body} = await response.json();
    
    console.log("bodyddd", body.data.products.edges);
    setProducts(body.data.products.edges);
    console.log("productsssss", products, "end productsssss");
  }, [])

  return (
    <Page
      title="NextJS Shopify App"
      primaryAction={primaryAction}
    >
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
  {products.map(function(product, index){
    return (
     
    <div className="w-full px-4 lg:px-0">
    <div className="p-3 bg-white rounded shadow-md">
      <div className="">
        <div className="relative w-full mb-3 h-62 lg:mb-0">
          <Link href={`products/${product.node.title}/edit`} product={product}>
            <a>Edit</a>
          </Link>
          <img src={product.node.featuredImage.src}   alt={product.node.featuredImage.altText}
            className="object-fill w-full h-full rounded" />
            
        </div>
        <div className="flex-auto p-2 justify-evenly">
          <div className="flex flex-wrap ">
            <div className="flex items-center justify-between w-full min-w-0 ">
              <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                {product.node.title}
              </h2>
            </div>
          </div>
          <div className="mt-1 text-xl font-semibold">{product.node.bodyHtml}</div>

        </div>
      </div>
    </div>
  </div>
  
  )
  })}
  
</div>

    </Page>
  );
};
