import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyToys(data)
        })
    },[url]) 
    return (
        <div>
            <h2 className="text-center text-4xl">This is My Toys Page, {myToys.length}</h2>
        </div>
    );
};

export default MyToys;