import { Link } from "react-router-dom";

const MyToysCart = ({toy,handleDeleteToy}) => {

    const {_id, name, price,photo} = toy;
    return (
        <div
            
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
        >
            <div>
                <img
                    src={photo}
                    className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="text-gray-500">${price}</p>
            </div>
            <div>
                <Link to={`/myToys/${_id}`}>
                    <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700 mr-2"
                    // onClick={() => handleEditToy(toy.id)}
                    >
                        Update
                    </button>
                </Link>
                <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteToy(toy._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MyToysCart;