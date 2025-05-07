import type { Route } from "./+types";

export async function loader() {
  const { products } = await fetch("https://dummyjson.com/products").then<
    { products: Product[] }
  >((res) => res.json());

  return { products };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { products } = loaderData;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <div className="flex items-center gap-2">
              <div className="size-24">
                <img src={p.thumbnail} alt={p.title} loading="lazy" />
              </div>
              <div>
                <p>{p.title}</p>
                <p className="text-sm text-gray-500">{p.tags.join(", ")}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};
