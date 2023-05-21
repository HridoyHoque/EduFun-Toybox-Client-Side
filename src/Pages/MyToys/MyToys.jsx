import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyToys(data)
            })
    }, [url])

    const handleDeleteToy = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                              )
                              const remaining = myToys.filter(toy => toy._id !== _id)
                              setMyToys(remaining)
                        }
                    })
                console.log('deleted id', _id)
            }
        })
    }
    return (
        <div className="max-w-3xl mx-auto mt-8 mb-4">
            <h2 className="text-2xl font-bold text-center mb-6">My Toys</h2>
            {myToys.length === 0 ? (
                <p className="text-center">Add Toys to see details....</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {myToys.map((toy) => (
                        <div
                            key={toy._id}
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
                        >
                            <div>
                                <img
                                    src={toy.photo}
                                    alt={toy.name}
                                    className="w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-medium">{toy.name}</h3>
                                <p className="text-gray-500">${toy.price}</p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                // onClick={() => handleEditToy(toy.id)}
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteToy(toy._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyToys;