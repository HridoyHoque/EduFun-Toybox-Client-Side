
const AddToys = () => {

    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const newToy = {name, photo, category, price, rating, quantity, details, sellerName, email}

        console.log(newToy)
       
    }
    return (
        <form onSubmit={handleAddToys} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Toy</h2>
            <div className="mb-4">
                <label htmlFor="pictureUrl" className="text-lg font-medium">
                    Picture URL:
                </label>
                <input
                    type="text"
                    id="pictureUrl"
                    name="photo"
                    placeholder="Toy photo"

                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="toyName" className="text-lg font-medium">
                    Toy Name:
                </label>
                <input
                    type="text"
                    id="toyName"
                    name="name"
                    placeholder="Toy Name"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subCategory" className="text-lg font-medium">
                    Sub-category:
                </label>
                <input
                    type="text"
                    id="subCategory"
                    name="category"
                    placeholder="Toy category"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="text-lg font-medium">
                    Price:
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Toy Price"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="text-lg font-medium">
                    Rating:
                </label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    placeholder="Toy rating"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="text-lg font-medium">
                    Seller Name:
                </label>
                <input
                    type="text"
                    id="quantity"
                    name="sellerName"
                    placeholder="Seller Name"

                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="text-lg font-medium">
                    Seller Email:
                </label>
                <input
                    type="email"
                    id="quantity"
                    name="email"
                    placeholder="Seller Email"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="text-lg font-medium">
                    Available Quantity:
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Available Quantity"


                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="text-lg font-medium">
                    Detail Description:
                </label>
                <input
                    id="description"
                    type="text"
                    name="details"
                    placeholder="Toy details"
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></input>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                Add Toy
            </button>
        </form>
    );
};

export default AddToys;