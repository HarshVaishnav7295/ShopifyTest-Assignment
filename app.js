const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
var arguments = process.argv;

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const STORE_FRONT_TOKEN = process.env.STORE_FRONT_TOKEN;
const STORE_DOMAIN = process.env.STORE_DOMAIN;

// console.log("arguments", arguments);

const args = arguments.slice(2);
const params = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith("-")) {
    params[args[i].slice(1)] = args[i + 1];
  }
}

// console.log("params", params);

async function main(productName) {
  try {
    // const testQuery = `

    // query { products(first: 10) { nodes { title } } }
    // `;
    const query = `
        query Products($query: String!) {
            products(first:10,query: $query) {
                edges {
                    node {
                        title
                        variants(first:10) {
                            edges {
                                node {
                                    title
                                    price
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    const response = await axios.post(
      `https://${STORE_DOMAIN}/admin/api/2024-07/graphql.json`,
      {
        query: query,
        variables: {
          query: `title:${productName.trim()}`,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": ADMIN_TOKEN,
        },
      }
    );

    // console.log("response", response.data);
    const products = response.data.data.products.edges;

    let results = await Promise.all(
      products.map((product) => {
        return product.node.variants.edges.map((variant) => {
          return {
            product_name: product.node.title,
            variant_name: variant.node.title,
            price: parseFloat(variant.node.price),
          };
        });
      })
    );
    // console.log("REsults : ", results);
    results = results.flat();
    results = results.filter((it) => it);
    results.sort((a, b) => a.price - b.price);

    results.map((item) => {
      console.log(
        `${item.product_name} - ${item.variant_name} - price $${item.price} `
      );
    });
  } catch (error) {
    console.log("Error fetching products:", error);
  }
}

let productName = "";
// console.log("args", args);
for (let i = 0; i < args.length; i++) {
  //   console.log("args[i] : ", args[i]);
  if (!args[i].startsWith("-")) {
    productName += args[i] + " ";
    // console.log("productName : ", productName);
  }
}

// console.log("Prod : ", productName);

main(productName);
