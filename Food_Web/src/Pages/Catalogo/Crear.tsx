import { useEffect, useState } from "react";

export default function CrearProducto(){
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        img: '',
        precio: '',
    });
    const [isLoading,setIsLoading] = useState(false);

    // Manejar el cambio en los campos del formulario
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Crear un nuevo producto
    const handleCreateProduct = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        setIsLoading(true);
        fetch('https://servidor-2-1.onrender.com/api/producto-create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((newProduct) => {
            resetForm();
            console.log("Producto creado: ",newProduct)
            setIsLoading(false);
        })
        .catch((error) => console.error('Error al crear el producto:', error));
    };

    // Restablecer el formulario
    const resetForm = () => {
        setFormData({ nombre: '', descripcion: '', img: '', precio: '' });
    };

    useEffect(()=>{
        console.log("Input cambiado");
    },[formData]);

    return(
        <main className="min-h-[80vh] bg-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-orange-600 mb-6">Crear Producto</h1>
            <div className="w-full max-w-md">
                <form className="flex flex-col gap-4" onSubmit={handleCreateProduct}>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre del producto"
                        className="p-3 border border-orange-300 rounded-lg focus:ring focus:ring-orange-200"
                    />
                    <input
                        type="text"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                        placeholder="Descripción del producto"
                        className="p-3 border border-orange-300 rounded-lg focus:ring focus:ring-orange-200"
                    />
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleInputChange}
                        placeholder="URL de la imagen"
                        className="p-3 border border-orange-300 rounded-lg focus:ring focus:ring-orange-200"
                    />
                    <input
                        type="number"
                        name="precio"
                        value={formData.precio}
                        onChange={handleInputChange}
                        placeholder="Precio del producto"
                        className="p-3 border border-orange-300 rounded-lg focus:ring focus:ring-orange-200"
                    />
                    <button
                        style={{
                            backgroundColor: !isLoading ? 'orange' : '#ccc'
                        }}
                        type="submit"
                        disabled={isLoading}
                        className="p-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Crear Producto
                    </button>
                </form>
            </div>
        </main>
    );
}
