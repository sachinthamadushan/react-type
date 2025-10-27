export const ProductList = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mx-6 my-6">
            <h1 className="text-xl font-semibold mb-4">Product List</h1>

            <table className="w-full table-auto text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="P-2">Name</th>
                        <th className="P-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b hover:bg-gray-100">
                        <td className="p-2">1</td>
                        <td className="p-2">Apple</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}