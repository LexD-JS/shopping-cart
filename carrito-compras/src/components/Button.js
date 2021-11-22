import {Component} from 'react'

const styles={
    button: {
        backgroundColor:'#4772B3',
        padding:'10px',
        border:'none',
        borderRadius:'8px',
        boxShadow: '0px 5px 5px rgb(0,0,0,0.5)',
        cursor:'pointer',
    },
}

class Button extends Component {
    render() {
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button