import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../ultilities/formatCurrency";
import { CartItem } from "./Cartitem";
import storeItems from "../data/items.json"
import Modal from "./form";

export function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
    const [modalOpen, setModalOpen] = useState(false);
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title> Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Tortal {formatCurrency(cartItems.reduce((total, CartItem) => {
                        const item = storeItems.find(i => i.id === CartItem.id)
                        return total + (item?.price || 0) * CartItem.quantity
                    }, 0)
                    )}
                </div>
                <Button className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }} >  order</Button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}