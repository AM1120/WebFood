export default function Inicio(){


    const perfil={
        id:1,
        name:"",
        auth:false
    }


    if(perfil.auth){
        return(
            <main style={{minHeight:'70vh'}}>
                <div>
                    <h1 style={{margin:0}}>AUTHENTICADO</h1>
                </div>
            </main>
        )
    }

    return(
        <main style={{minHeight:'50vh'}}>
          
      <div style={{ display: 'flex', alignItems: 'center', margin: "10px 0 25px 0" }}>
        
      <img 
        src="https://plus.unsplash.com/premium_photo-1683657860307-38a7ec985f38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29taWRhJTIwcmFwaWRhfDB8fDB8fHww" 
        className="px-6" 
        style={{ margin: "0 0 0 0", minHeight: '75vh' }} 
        alt="Comida Rápida"
      />
      <section style={{ margin: "0 10px", textAlign: "left" }}>
      <h1>Bienvenidos a Food</h1>
     <br />
      <p>Disfruta de la mejor comida rápida de la ciudad, ¡siempre fresca y deliciosa!</p>
      <br />
      <br />
        <p>En Restaurante Rápido, nuestra misión es ofrecerte comida deliciosa, fresca y rápida, sin comprometer la calidad ni el sabor. Desde su fundación, Restaurante Rápido se ha convertido en el destino preferido de aquellos que buscan una experiencia culinaria excepcional en un entorno dinámico y acogedor.</p>
        <img 
          src="https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29taWRhJTIwcmFwaWRhfGVufDB8fDB8fHww" 
          alt="Imagen Adicional" 
          style={{ margin: "10px 0 10px 0", width: '70%' }}
        />
      </section>
      
    </div>  
        </main>
    )
}
