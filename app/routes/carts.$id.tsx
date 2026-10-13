import { cartsApi } from "~/lib/api/carts"
import type { Route } from "./+types/carts.$id"

export async function loader({params}: Route.LoaderArgs) {
    const carts = await cartsApi.getById(params.id )
    return carts
}

const CartsDetail = ({loaderData}: Route.ComponentProps) => {
    const carts = loaderData;
    return (
        <div className='pl-5'>
            <h1 className='text-3xl font-bold mb-6'>Carts</h1>
            {carts?.products?.map((product) => (
                <p key={product.productId}>Товар ID: {product.productId} - Кількість: {product.quantity}</p>
            ))}
            

        </div>
    );
}

export default CartsDetail;