interface EditProductModalProps{
    isOpen:boolean;
}

export const EditProductModal = ({isOpen}:EditProductModalProps) => {
    
    if(!isOpen) return null;

    return (
        <div className="p-3 bg-white shadow">
            <h2>Edit Product</h2>
        </div>
    );
}