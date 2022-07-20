import React, { Component } from 'react'

export default class Chat2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat2: '',
        }
    }

    checkInput2 = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }   
    submitForm2 = (e) => {
        e.preventDefault();
        e.target.reset()
        let item = {};
        item.chat2 = this.state.chat2;
        this.props.add(item)
        this.setState({
            chat2: ''
        })
    }
    render() {
        return (
            <>
                <h3>chat 2</h3>
                <form onSubmit={this.submitForm2}>
                    <textarea 
                    onChange={this.checkInput2} 
                    name="chat2" 
                    className='form-control' 
                    placeholder='Chat2'
                    >
                    </textarea>
                    <button type="submit" className="btn btn-success mt-3">Submit</button>
                </form>
            </>
        )
    }
}
