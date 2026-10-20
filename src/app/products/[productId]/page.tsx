export async function generateMetadata({ params }){
 const { productId } = await params;
 return {
    title : `Product ${productId} | My store`,
    description : `View details about the product ${productId}`
 }
}

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