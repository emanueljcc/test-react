import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Exercises from './Exercises'
import useFetch from '../hooks/useFetch'
import URL from '../config'

const ExercisesContainer = () => {
    
    const {data, loading, error} = useFetch(`${URL}/exercises`)
    
    if(loading)
        return <Loading />

    if(error)
        return <FatalError/>

    return <Exercises 
                data={data}
            />
}

export default ExercisesContainer

/* class ExercisesContainer extends React.Component {
    
    // se puede quitar el constructor xq babel lo implpementa
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loading: true,
            error: null
        }
    }

    // de esta forma se llama los endpoint del API
    async componentDidMount(){
        await this.fetchExercises()
    }
    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            console.log(data)

            // aqui se pasa la info a data, pasandolo al state
            this.setState({
                data,
                loading: false
            })

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
            // clave y valor es el mismo nombre se coloca uno por ES6
        }
    }


    render(){

        if(this.state.loading)
            return <Loading />
        if(this.state.error)
            return <FatalError/>

        return (
            // data= es el parametro que se envia
            <Exercises 
                data={this.state.data}
            />
        )
    }
} 

export default ExercisesContainer */