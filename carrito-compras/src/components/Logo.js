import {Component} from 'react'

const styles={
    logo:{
        fontWeight: '700',
        fontSize:'2rem',
        fontStyle:'italic',
    }
}

class Logo extends Component {
    render(){
        return (
            <div style={styles.logo}>
                SHOPPI
            </div>
        )
    }
}

export default Logo