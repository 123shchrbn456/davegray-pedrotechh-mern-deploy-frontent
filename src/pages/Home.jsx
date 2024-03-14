import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../features/products/productsSlice";

const Home = () => {
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/getUsers").then((response) => {
    //         console.log("Home Page", response.data);
    //     });
    // }, []);

    const { data = [], isLoading, isSuccess, isError } = useGetProductsQuery();

    console.log("Home Page---:", data);

    if (isError) return <h3>Error occured</h3>;

    if (isLoading) return <h3>Loading...</h3>;

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/nothing">Nothing here</Link>
            </nav>
            <h1>Home Page</h1>
            <section>
                <ol>
                    {!isLoading &&
                        data.map((item) => (
                            <li key={item.name}>
                                {item.name} {item.price}$
                            </li>
                        ))}
                </ol>
            </section>
        </div>
    );
};

export default Home;
