import { useLoaderData } from "react-router-dom";
import PageTitle from "../../PageTitle";


const SingleToys = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center">
          <img src={toy.photo} alt={toy.name} className="w-64 h-64 object-cover" />
        </div>
        <h2 className="text-2xl font-bold mt-4">{toy.name}</h2>
        <p className="text-gray-600 mt-2">Category: {toy.category}</p>
        <p className="text-gray-600">Price: ${toy.price}</p>
        <p className="text-gray-600">Available Quantity: {toy.quantity}</p>
        <p className="text-gray-600 mt-4">{toy.details}</p>
        <PageTitle title="EduFun | Toy"/>
      </div>
    );
};

export default SingleToys;