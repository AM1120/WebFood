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
        
    <div style={{ display: 'flex', alignItems: 'center', margin: "10px 0 20px 0" }}>
      
    <img 
      src="https://i.pinimg.com/236x/a1/8e/16/a18e1653db8a8a07d3c5332378091b5f.jpg" 
      className="px-6" 
      style={{ margin: "0 0 0 0", minHeight: '75vh' }} 
      alt="Comida Rápida"
    />
    
    <section style={{ margin: "0 0 50hv 0", textAlign: "left" }}>
    <h1>Bienvenidos a Food</h1>
     <br />
      <p>Un lugar donde puedes:</p>
      <p>Disfrutar tu tiempo a solas.</p>
      <p>Comer un buen dulces en paz.</p>
      <br />
      <br />
    </section>
    
  </div>  
      </main>
  )
}