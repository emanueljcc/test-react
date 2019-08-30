import React from 'react'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import URL from '../config'


class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        // guardar input en state
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })

        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(this.state.form)
            }

            // se envia config como segundo parametro para que fetch lo tome como post sin el parametro lo toma como get
            let res = await fetch(`${URL}/exercises`, config)
            let json = await res.json()
            console.log(json)

            // loader
            this.setState({
                loading: false
            })

            // redirect
            this.props.history.push('/exercise')

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

        console.log(this.state)
    }

    render(){
        if(this.state.error)
            return <FatalError />
            
        return <ExerciseNew 
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
    }
}

export default ExerciseNewContainer