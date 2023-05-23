// import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import PageTitle from "../../PageTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
    
    // const LoadedToys = useLoaderData()
    const [searchText, setSearchText] = useState("")
    const [allToys, setAllToys] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => {
            setAllToys(data)
        })
    },[])
    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
        .then(res => res.json())
        .then(data => {
            setAllToys(data)
        })
    }
    console.log(allToys)

    return (
        <div>
            <div>
                <h1 className="text-2xl mr-10 text-center mb-3">All Toys List</h1>
                <div className="search-box p-2 text-center">
                  <input
                  onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Toys" 
                className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text" /> {" "}
               <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow">Search</button>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    allToys?.map(toys => <AllToysRow
                    key={toys._id}
                    toys={toys}
                    ></AllToysRow>)
                   }
       
                </tbody>
            </table>
            <PageTitle title="EduFun | All Toys"/>
        </div>
        </div>
    );
};

export default AllToys;