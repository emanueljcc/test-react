import React from 'react'
import Card from './Card'

// al colocar ({exercises}) se accede directo a la propiedad
const ExercisesList = ({exercises}) => (
    // no es necesario el console.log para ver los datos poque para eso es la extension
    <div>
        { exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.id}
                    {...exercise}
                />
            )
        })}
    </div>
)
/* function ExercisesList(props){
    return (
        <div>
            { props.exercises.map((exercise) => {
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })}
        </div>
    )
} */

export default ExercisesList