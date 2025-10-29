import React, { useState } from "react"
import { collection,addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const AddProductForm = () => {
    const [name, setName] =  useState<string>('');
    const [price,setPrice] = useState<number>(0);

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
            await addDoc(collection(db,'products'),{
                name:name,
                price:price
            });
            setName('');
            setPrice(0);
            alert('Product added successfully!');
        }catch(error){
            console.error("Error product adding", error);
            alert('Product adding failed!');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mx-6 my-6">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <div className="flex gap-2">
                <input type="text" placeholder="Product Name"
                className="p-2 border rounded w-2/3" 
                onChange={(e) => setName(e.target.value)}
                value={name} />
                <input type="number" placeholder="Price"
                className="p-2 border rounded w-1/3"
                onChange={(e) => setPrice(Number(e.target.value))} 
                value={price}/>
                <button className="bg-green-500 px-4 py-2 rounded
                text-white font-semibold hover:bg-green-700">Add</button>
            </div>
        </form>
    )
}