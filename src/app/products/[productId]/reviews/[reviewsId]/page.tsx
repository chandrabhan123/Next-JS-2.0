export default async function ProductReviews({
params,
}: {
params : Promise <{productId: string; reviewsId: string}>;
}) {
    const {productId, reviewsId} = await params

    return <h1>Reviews {reviewsId} for product {productId}</h1>
}