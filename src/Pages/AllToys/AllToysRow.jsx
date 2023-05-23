import { Link } from "react-router-dom";

const AllToysRow = ({ toys }) => {
    const { _id, name, sellerName, price, quantity, category } = toys;
    return (
        <>
            <tr>
                <td><Link to={`/allToys/${_id}`}><button className="btn btn-outline btn-primary">Details</button></Link></td>
                <td>{sellerName}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{price}</td>

            </tr>
        </>
    );
};

export default AllToysRow;