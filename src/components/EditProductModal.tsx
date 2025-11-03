import React, { useEffect, useState } from "react";
import type { Product } from "../types/products";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

interface EditProductModalProps{
    isOpen:boolean;
    onClose: () => void;
    product: Product | null
}

export const EditProductModal = ({isOpen, onClose,product}:EditProductModalProps) => {
    const [name,setName] = useState<string>('');
    const [price,setPrice] = useState('');

    useEffect(()=> {
        if(product){
            setName(product.name);
            setPrice(product.price.toString());
        }
    },[product]);

    if(!isOpen) return null;
    
    const handlUpdateProduct = async (e:React.FormEvent) => {
        e.preventDefault();
        if(name === '' || price === ''){
            alert('Fill in all fields');
        }
        const productRef =  doc(db,"products",product!.id);
        try {
            await updateDoc(productRef, {name:name,price:price})
            alert('Product updated!');
            onClose();
        } catch (error) {
            alert('Product update faild')
        }
    }

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center 
        items-center z-50" onClick={onClose}>
        <div className="p-3 bg-white shadow-lg rounded" 
        onClick={(e)=>e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-3">Edit Product</h2>
            <form onSubmit={handlUpdateProduct}>
                <div className="mb-4">
                <label>Product Name</label>
                <input value={name} type="text" className="w-full p-2 border rounded-md mt-2"
                onChange={(e) => {setName(e.target.value)}} />
                </div>
                <div className="mb-6">
                <label>Price</label>
                <input value={price} type="number" className="w-full p-2 border rounded-md mt-2"
                onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div className="flex gap-2">
                    <button className="bg-amber-500 px-4 py-2 text-white font-semibold
                     rounded hover:bg-amber-600
                    " type="submit">Update product</button>
                    <button className="bg-gray-400 px-4 py-2 text-white font-semibold
                     rounded hover:bg-gray-600
                    " onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
        </div>
    );
}