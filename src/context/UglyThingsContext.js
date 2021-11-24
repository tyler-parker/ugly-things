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
            .then(res => {
                console.log(res.data)
                this.setState(prevState =>  ({uglyThingsArr: [...prevState.uglyThingsArr, res.data]}))
            })
            .catch(res => console.log(res.data))
    }

    handleEdit = (editThing, id) => {
        axios.put(`https://api.vschool.io/tyler-parker/thing/${id}`, editThing)
            .then(res => {
                console.log(id)
                this.setState(prevState => ({uglyThingsArr: [...prevState.uglyThingsArr, editThing]}))
            })
            .catch(res => console.log(res))
    }

    handleDelete = id => {
        return axios.delete("https://api.vschool.io/tyler-parker/thing/" + id)
            .then(res => this.setState(prevState => ({uglyThingsArr: prevState.uglyThingsArr.filter(thing => thing._id !== id)})))
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