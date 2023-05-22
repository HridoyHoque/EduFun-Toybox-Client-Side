

const ToyCategoryCart = ({categoryToy}) => {
    const {picture, name, rating, price} = categoryToy;
    return (
        <div>
             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={picture}  />
            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600 text-sm mt-2">${price}</p>
                <div className="flex items-center mt-2">
                    <svg
                        className="w-4 h-4 fill-current text-gray-500 mr-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L15.09 8.14L22 9.27L17 13.36L18.18 20L12 16.73L5.82 20L7 13.36L2 9.27L8.91 8.14L12 2M12 4.54L9.24 9.31L4.68 10.03L8.24 13.13L7.5 17.65L12 15.56L16.5 17.65L15.76 13.13L19.32 10.03L14.76 9.31L12 4.54Z" />
                    </svg>
                    <p className="text-gray-500 text-sm">{rating}</p>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none">
                    View Details
                </button>
            </div>
        </div>
        </div>
    );
};

export default ToyCategoryCart;