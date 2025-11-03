import { useEffect, useState } from "react";
import type { Product } from "../types/products";
import { collection, query, onSnapshot , deleteDoc, doc} from "firebase/firestore";
import { db } from "../firebase";
import { FaEdit, FaTrash } from "react-icons/fa";
import { EditProductModal } from "./EditProductModal";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  useEffect(() => {
    const q = query(collection(db, "products"));
    onSnapshot(q, (querySnapshort) => {
      const productData: Product[] = [];
      querySnapshort.forEach((document) => {
        productData.push({
          id: document.id,
          ...document.data(),
        } as Product);
      });
      setProducts(productData);
      setLoading(false);
    });
  }, []);

  const openEditModal = (product:Product) => {
    setIsModalOpen(true);
    setEditProduct(product);
  }

  const closeEditModal = () => {
    setIsModalOpen(false);
  }

  const deleteProduct = async(id:string) => {
    if(window.confirm('Are you want to delete this product?')){
      try {
        await deleteDoc(doc(db,'products',id));
        alert('Product deleted !')
      } catch (error) {
        alert("Product delete faild!");
      }
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mx-6 my-6">
      <h1 className="text-xl font-semibold mb-4">Product List</h1>
      <table className="w-full table-auto text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="P-2">Name</th>
            <th className="P-2">Price</th>
            <th className="P-2"></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <p className="p-2 text-2xl">Product loading...</p>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">
                  <button
                    className="bg-yellow-500 
                px-2 py-2 text-white rounded hover:bg-amber-600 me-3"
                onClick={() => {openEditModal(product)}}>
                    <FaEdit />
                  </button>
                  <button
                    className="bg-red-500 
                px-2 py-2 text-white rounded hover:bg-red-600"
                  onClick={() => {deleteProduct(product.id)}} >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <EditProductModal isOpen={isModalOpen} onClose={closeEditModal}
       product={editProduct}/>
    </div>
  );
};
