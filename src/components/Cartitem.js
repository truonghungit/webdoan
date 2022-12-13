import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import formatCurrency from "../ultilities/formatCurrency"

export function CartItem({ id, quantity }) {
    const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.image} style={{ width: "125px", height: "75px", objectFit: "cover" }} />

            <div className="me-auto">
                <div>
                    {item.name}
                </div>
                <div className="text-muted" style={{ forntSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div className="me-auto">
                <div className="d-flex algin-items-center justify-content-cemter" style={{ gap: ".5rem" }}>
                    <Button size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-5">{quantity}</span>
                    </div>
                    <Button size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <div>
                    <div>
                        {formatCurrency(item.price * quantity)}
                    </div >
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}