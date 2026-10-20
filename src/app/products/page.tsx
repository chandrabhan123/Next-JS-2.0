import Link from "next/link"
export default function Product() {
    let productId = 100;
    return(
        <>
        <Link href="/">Home</Link>
        <h2>Product List</h2>
        <ul>
            <li><Link href={"/products/1"}>product 1</Link></li>
            <li><Link href={"/products/2"}>product 2</Link></li>
            <li><Link href={"/products/3"}>product 3</Link></li>
        </ul>
        <h2><Link href={`/products/${productId}`}>product {productId}</Link></h2>
        </>
    )
}