import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const SingleToyCategoryCart = () => {
    const toy = useLoaderData()
    console.log(toy)
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full">
                    <img src={toy.picture} alt={toy.name} className="h-64 w-full object-cover" />
                </div>
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">{toy.name}</h2>
                    <p className="text-xl mb-4">Category: {toy.category}</p>
                    <p className="text-lg mb-4">Price: ${toy.price}</p>
                    <div className="flex"><p className="text-lg mr-2">Rating: {toy.rating}</p> <span className="mt-1"><AiFillStar /></span></div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyCategoryCart;