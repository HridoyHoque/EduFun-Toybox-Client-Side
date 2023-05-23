import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import MyToysCart from "./MyToysCart";
import PageTitle from "../../PageTitle";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const [sortBy, setSortBy] = useState('ascending');

    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyToys(data)
            })
    }, [url])
    useEffect(() => {
        fetch(`http://localhost:5000/toys?sort=${sortBy}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            });
    }, [sortBy]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const renderSortSelect = () => (
        <div className="flex items-center">
            <span className="mr-2 text-2xl text-gray-600">Sort by price:</span>
            <select
                value={sortBy}
                onChange={handleSortChange}
                className="px-4 py-2 rounded bg-gray-200 text-gray-800"
            >
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
    );

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
                            // Swal.fire(
                            //     'Deleted!',
                            //     'Your Toy has been deleted.',
                            //     'success'
                            // )
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
            <PageTitle title="EduFun | My Toy" />
            <h2 className="text-2xl font-bold text-center mb-6">My Toys</h2>
            <div>
                {renderSortSelect()}
            </div>
            {myToys.length === 0 ? (
                <p className="text-center">Please Add Some Toys....</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {myToys.map((toy) => (
                        <MyToysCart
                            key={toy._id}
                            toy={toy}
                            handleDeleteToy={handleDeleteToy}
                        ></MyToysCart>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyToys;