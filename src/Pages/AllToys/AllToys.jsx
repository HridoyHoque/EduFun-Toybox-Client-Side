import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const allToys = useLoaderData()

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>seller</th>
                        <th>Toy</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    allToys.map(toys => <AllToysRow
                    key={toys._id}
                    toys={toys}
                    ></AllToysRow>)
                   }
       
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;