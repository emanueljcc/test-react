import React from 'react'
import ExercisesList from '../components/ExercisesList'
import AddButton from '../components/AddButton'
import Welcome from '../components/Welcome'

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome
            username="Emanuel"
        />   
        <ExercisesList
            exercises={data}
        /> 
        <AddButton/>          
    </React.Fragment>
)

export default Exercises