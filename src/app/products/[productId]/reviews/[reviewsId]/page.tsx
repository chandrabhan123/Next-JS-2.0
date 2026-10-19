import { notFound } from "next/navigation";

export default async function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) {
  const { productId, reviewsId } = await params;

  if (parseInt(reviewsId) > 1000) {
    notFound();
  }

  return <h1>Reviews {reviewsId} for product {productId}</h1>;
}
