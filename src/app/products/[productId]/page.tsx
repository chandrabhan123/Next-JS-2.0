export default async function PrdouctDetails({
    params,
}: {
    params: Promise<{productId: string }>;

}) {
    const productId = (await params).productId
    return(
        <>
        <h2>Details about the product {productId}</h2>
        </>
    )
}