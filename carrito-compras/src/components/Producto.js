import {Component} from 'react'
import Button from './Button'


const styles={
    producto:{
        border: '2px solid #C0C0C0',
        boxShadow: '0px 5px 5px rgb(0,0,0,0.5)',
        width:'30%',
        padding:'20px 15px',
        borderRadius: '15px',
    },
    img: {
        width: '100%',
    }
}


class Producto extends Component {
    render(){
        const {producto, agregarAlCarrito} = this.props
        console.log(this.props)
        return (
            <div style={styles.producto}>
                <img styles={styles.img} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=>agregarAlCarrito(producto)}>
                    Agregar al carrito
                </Button>
            </div>
        )
    }
}

export default Producto