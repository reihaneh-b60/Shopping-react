import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const Home =() => {
    return (
        <>
            <h3>Home Page</h3>
            <Link to="product">
                <Button variant="success" className="m-4">Product</Button>
            </Link>
        </>
    )
}

export default Home;