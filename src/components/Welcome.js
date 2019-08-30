import React from 'react'

// esto se llama destructuring ({username})
/* const Welcome = ({username}) => (
    // console.log(props)
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}</h1>
            <p>Let's workout to get someone gains!</p>
        </div>
    </div>
) */
// componente funcional
function Welcome(props){
    console.log(props)
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
}

export default Welcome