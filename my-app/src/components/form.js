import { useState, useEffect } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Modal({ setOpenModal }) {
    const initialValues = { username: "", address: "", city: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.city) {
            errors.city = "city is required";
        }
        return errors;
    };
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="footer">
                    {/* <Button onClick={() => {
                       closeCart(false);
                    }}
                        id="cancelBtn">Cancel
                    </Button> */}
                    <div className="container">
                        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

                        <form onSubmit={handleSubmit}>

                            <div className="ui divider"></div>
                            <div className="ui form">
                                <div className="field">
                                    <label>Name </label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formValues.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.username}</p>
                                <div className="field">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="address"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.address}</p>
                                <div className="field">
                                    <label>City</label>
                                    <input
                                        type="city"
                                        name="city"
                                        placeholder="city"
                                        value={formValues.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p>{formErrors.city}</p>
                                <Button type="submit" className="fluid ui button blue">Submit</Button>
                                <Button onClick={() => {
                                    closeCart(false);
                                }}>Continue</Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Modal;