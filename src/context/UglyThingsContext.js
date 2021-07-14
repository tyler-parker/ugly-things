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

    getUglyThings() {
        axios.get("https://api.vschool.io/tyler-parker/thing")
        .then(res => res)
        .then(res => {
            this.setState({uglyThingsArr: [...res.data],})
        })
    }

    componentDidMount() {
       return this.getUglyThings()

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

    handleEdit = (editThing, id) => {
        // const editThing = this.state?this.state.uglyThingsArr.find(thing => thing.data._id === id):null;
        axios.put(`https://api.vschool.io/tyler-parker/thing/${id}`, editThing)
            .then(res => console.log(id))
            .catch(res => console.log(res))
    }

    handleDelete(id) {
        return axios.delete("https://api.vschool.io/tyler-parker/thing/" + id)
            .then(res => this.getUglyThings())
            .catch(res => console.log(res))
    }
    
    render(){
        return(
            <Provider value={{
                uglyThingsArr: this.state.uglyThingsArr,
                title: this.state.title,
                description: this.state.description,
                imgUrl: this.state.imgUrl,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsContext, Consumer as UglyThingsContextConsumer}
