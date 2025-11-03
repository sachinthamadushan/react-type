import { useEffect, useState } from "react";
import type { Product } from "../../types/products";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshort) => {
      const productData: Product[] = [];
      querySnapshort.forEach((doc) => {
        productData.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(productData);
      
      
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex gap-8 h-[calc(100vh-4rem)]">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-4">Product</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
             <div key={product.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">Rs.{product.price}</p>
              <button
                className="bg-rose-500 text-white px-4 py-2 rounded
            hover:bg-rose-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold pb-4">Added products</h2>
          <div className="flex-1 overflow-auto">
            <ul>
              <li className="flex justify-between items-center py-2 border-b">
                <p>Cake</p>
                <p>Rs.4000</p>
              </li>
              <li className="flex justify-between items-center py-2 border-b">
                <p>Apple</p>
                <p>Rs.200</p>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-b mb-2">
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Total</span>
              <span>Rs.6000</span>
            </div>
          </div>
          <button className="bg-green-500 px-4 py-2 rounded w-full text-white 
          font-semibold hover:bg-green-600">Checkout</button>
      </div>
    </div>
  );
}
