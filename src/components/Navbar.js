import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
    const { openCart, cartQuantity, value } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    {/* <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link> */}
                </Nav>

                {/* Phần Phương thêm vào*/}
                {value.userLogin === undefined ?
                    <Nav className="me-auto">
                        <Nav.Link to="/register" as={NavLink}>
                            Register
                        </Nav.Link>
                        <Nav.Link to="/login" as={NavLink}>
                            Login
                        </Nav.Link>
                    </Nav> :
                    <Nav className="me-auto">
                        <Nav.Link to="/store" as={NavLink}>
                            {value.userLogin.name}
                            <Nav.Link to="/store" />
                        </Nav.Link>
                        {/* <Nav.Link to="/store" as={NavLink}>
                            Đơn hàng
                        </Nav.Link> */}
                    </Nav>}


                {cartQuantity > 0 && (
                    <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-primary">
                        <FaShoppingCart />

                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%" }}>
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    );
}

export default Navbar;