// pages/api/products.js

import { Constants } from "@/constants/constant";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export async function getProducts(req, res) {

  const WooCommerce = new WooCommerceRestApi({
    url: Constants.baseUrl,
    consumerKey: Constants.consumerKey ,
    consumerSecret:Constants.consumerSecret,
    version: Constants.version
  });

  try {
    const response = await WooCommerce.get("products");
    return response.data
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}

