import React, { Component } from 'react'
const {Provider, Consumer} = React.createContext()

class UglyThingsContext extends Component {

    state = {
        uglyThingsArr: [],
        title: "",
        description: "",
        imgURL: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
 

    handleSubmit = (e) => {
        e.preventDefault()
        const newThing = {
            title: this.state.title,
            description: this.state.description,
            imgURL: this.state.imgURL
        }
        this.setState(prevState => ({
            uglyThingsArr:  [newThing, ...prevState.uglyThingsArr]
        }))
        this.state.title = ""
        this.state.description = ""
        this.state.imgURL = ""
    }
    
    render(){
        return(
            <Provider value={{
                uglyThingsArr: this.state.uglyThingsArr,
                title: this.state.title,
                description: this.state.description,
                imgURL: this.state.imgURL,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsContext, Consumer as UglyThingsContextConsumer}
