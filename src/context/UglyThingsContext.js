import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class UglyThingsContext extends Component {
  
    state = {
        uglyThingsArr: [],
        title: "",
        description: "",
        imgUrl: ""
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/tyler-parker/thing")
        .then(res => res)
        .then(res => {
            this.setState({uglyThingsArr: [...res.data],})
        })
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
            imgUrl: this.state.imgUrl
        }
        axios.post("https://api.vschool.io/tyler-parker/thing", newThing)
            .then(res => console.log(res.data))
            .catch(res => console.log(res.data))
    }

    handleEdit = (e) => {

    }

    handleDelete(id) {
        const deletedThing = this.state.uglyThingsArr.find(thing => thing.data._id === id);
        axios.delete("https://api.vschool.io/tyler-parker/thing", deletedThing)
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }
    
    render(){
        return(
            <Provider value={{
                uglyThingsArr: this.state.uglyThingsArr,
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                id: this.state.id,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsContext, Consumer as UglyThingsContextConsumer}
