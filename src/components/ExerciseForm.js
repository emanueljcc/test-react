import React from 'react'

const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="img"
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="leftColor"
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="rightColor"
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />
                </div>
            </div>
            

            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>

        </form>
    </div>
)

/* class ExerciseForm extends React.Component {

    // buena practica cuando trabajamos con eventos que en nombre de la funcion inicie con handle
    // se crea con arrow function BUENA PRACTICA
    handleClick = () => {
        console.log(this)
    }   

    render(){

        // "parametros" que recibe
        const { onChange, onSubmit, form } = this.props

        return (
            
        )
    }
} */

export default ExerciseForm