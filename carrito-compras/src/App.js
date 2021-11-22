import {Component} from 'react'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'


class App extends Component {
  state={
    productos:[
      {name:'Tomate',price:150,img:'/productos/tomate.jpg'},
      {name:'Arbejas',price:90,img:'/productos/arbejas.jpg'},
      {name:'Lechuga',price:180,img:'/productos/lechuga.jpg'},
    ],
    carro:[],
    esCarroVisible:false,
  }


/*----------------------*/

/*Metodo para agregar al carrito*/
agregarAlCarrito=(producto)=>{
  /*Validando la existencia de un mismo producto*/
  const { carro } = this.state
  if(carro.find(x => x.name === producto.name)){
    const newCarro = carro.map(x => x.name === producto.name ? 
      ({
        ...x, cantidad 
          : x.cantidad + 1
      })
      : x )
      return this.setState({carro:newCarro})
  }
  return this.setState({
    carro:this.state.carro.concat({
      ...producto,
      cantidad:1,
    })
  })
}

/*----------------------*/
/*----Metodo para mostrar u ocultar el carro de compras----*/

mostrarCarro=()=>{
  if(!this.state.carro.length){
    return
  }

  this.setState({esCarroVisible: !this.state.esCarroVisible})
}

/*-----Metodo render-----*/

  render() {
    const {esCarroVisible}=this.state
    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
        <Title />
          <Productos 
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


/*----------------------*/

export default App;
