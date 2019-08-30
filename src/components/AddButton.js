import React from 'react'
import imgAddButton from '../images/add.png'
import './styles/AddButton.css'
import { Link } from 'react-router-dom'

const AddButton = () => (
    <div className="text-center margin-top-100">
        <Link to="/exercise/new">
            <img alt="description" src={imgAddButton}/>
        </Link>
    </div>
)

/* function AddButton(props) {
    return (
        <div className="text-center margin-top-100">
            <Link to="/exercise/new">
                <img src={imgAddButton}/>
            </Link>
        </div>
    )
} */

export default AddButton