import { Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const Product = () => {
    const urlParam = useParams()
    return (
        <>
            <h3>Product Page</h3>
            <Link to="/">
                <Button variant="danger">Home</Button>
            </Link>

            <p className="m-4">{urlParam.id}</p>
        
        </>

    )
}
 export default Product