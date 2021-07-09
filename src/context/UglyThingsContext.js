import React, { Component } from 'react'
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

const randomNum = () => '_' + Math.random().toString(36).substr(2, 9)

class UglyThingsContext extends Component {

    state = {
        uglyThingsArr: [],
        title: "",
        description: "",
        imgUrl: "",
        id: randomNum
    }

    componentDidMount() {
        //Get Meme API
        axios.get("https://api.vschool.io/tyler-parker/thing")
        .then(res => res)
        .then(res => {
        
            this.setState(
                {
                    uglyThingsArr: [...res.data],
                }
            )
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
        // this.setState(prevState => ({
        //     uglyThingsArr:  [newThing, ...prevState.uglyThingsArr]
        // }))
        // this.state.title = ""
        // this.state.description = ""
        // this.state.imgUrl = ""
    }



    handleDelete(id) {
        //Deletes saved meme by Id
        const deletedThing = this.state.uglyThingsArr.filter(thing => thing.id !== id);
        console.log(deletedThing)
        this.setState(prevState => {
            return {
                uglyThingsArr: prevState.uglyThingsArr = [...deletedThing]
            }
        })
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
