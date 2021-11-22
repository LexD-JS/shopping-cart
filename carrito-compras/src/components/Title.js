import {Component} from 'react'


const styles={
    title:{
        marginBottom: '30px'
    }
}

class Title extends Component {
    render() {
        return (
            <h2 style={styles.title}>Tienda Don Alex</h2>
        )
    }
}

export default Title