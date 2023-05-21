
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyToys = () => {
    const toy = useLoaderData()
    const {_id, name, price, photo, details, quantity} = toy;

    const handleUpdateToys = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updatedToy = { name, photo, price, quantity, details }

        // send data to the server
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <form onSubmit={handleUpdateToys}>
             <h2 className="text-2xl font-bold text-center mb-6">Add Toys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder='Toy Photo' defaultValue={photo} className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' placeholder='Toy Name' defaultValue={name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name='price' placeholder='Price' defaultValue={price} className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder='Available Quantity' defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' placeholder='Toy Details' defaultValue={details} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
    );
};

export default UpdateMyToys;