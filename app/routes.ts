import {
  type RouteConfig,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    ...prefix("products", [index("routes/products/index.tsx")]),
  ]),
] satisfies RouteConfig;
