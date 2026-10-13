import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index
    ("routes/home.tsx"),
    route("carts", "routes/carts.tsx"),
    route("products", "routes/products.tsx"),
    route("products/:id", "routes/products.$id.tsx"),
    route("carts/:id", "routes/carts.$id.tsx"),
    route("apply", "routes/apply.tsx"),
    route("article", "routes/article.tsx"),

] satisfies RouteConfig;
