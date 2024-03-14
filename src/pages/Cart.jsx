import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../features/products/productsSlice";

const Cart = () => {
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/getProducts").then((response) => {
    //         console.log("Cart Page", response.data);
    //     });
    // }, []);

    const { data = [], isLoading, isSuccess, isError } = useGetUsersQuery();

    console.log("Cart Page---:", data);

    if (isError) return <h3>Error occured</h3>;

    if (isLoading) return <h3>Loading...</h3>;

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/nothing">Nothing here</Link>
            </nav>
            <h1>Cart Page</h1>
            <section>
                <ol>
                    {!isLoading &&
                        data.map((item) => (
                            <li key={item.name}>
                                {item.name} {item.username} {item.age} years
                            </li>
                        ))}
                </ol>
            </section>
        </div>
    );
};

export default Cart;
