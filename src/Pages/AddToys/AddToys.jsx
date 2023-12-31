import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import PageTitle from '../../PageTitle';

const AddToys = () => {
    const { user } = useContext(AuthContext)

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

        const newToy = { name, photo, category, price, rating, quantity, details, sellerName, email }

        // send data to the server
        fetch("https://edu-fun-toybox-server.vercel.app/toys", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <form onSubmit={handleAddToys}>
            <PageTitle title="EduFun | Add Toys" />
            <h2 className="text-2xl font-bold text-center mb-6">Add Toys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" required defaultValue={user?.displayName} name="sellerName" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photo URL</span>
                    </label>
                    <input type="text" required name="photo" placeholder='Toy Photo' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" name='name' required placeholder='Toy Name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input type="number" name='price' required placeholder='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>
                    <input type="text" name='category' required placeholder='Toy Category' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type="number" name='rating' required placeholder='Ratings' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='quantity' required placeholder='Available Quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <input type="text" name='details' required placeholder='Toy Details' className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add Toy" />
            </div>
        </form>
    );
};

export default AddToys;