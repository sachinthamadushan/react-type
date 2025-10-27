export const AddProductForm = () => {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md mx-6 my-6">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <div className="flex gap-2">
                <input type="text" placeholder="Product Name"
                className="p-2 border rounded w-2/3" />
                <input type="number" placeholder="Price"
                className="p-2 border rounded w-1/3" />
                <button className="bg-green-500 px-4 py-2 rounded
                text-white font-semibold hover:bg-green-700">Add</button>
            </div>
        </form>
    )
}