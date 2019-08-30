import React from 'react'
// import exercises from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (
    <div className="card mx-auto Fitness-Card"
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56ccf2'}, ${rightColor || '#2f80ed'})`
        }}
        >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img alt="description" src={img || emptyImg} className="float-right"/>
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

/* class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            image: 'https://laleyendadedarwan.files.wordpress.com/2018/10/bart.png'
        }
    }

    // se ejecuta despues de cargar el componente
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        }, 5000)
    }

    render(){
        //buena practica para resumir codigo
        const { title, description, img, leftColor, rightColor } = this.props
        return (
                        
        )
    }
} */

export default Card