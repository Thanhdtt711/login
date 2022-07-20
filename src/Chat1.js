import React, { Component } from 'react'

export default class Chat1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mess: ''
        }
    }


    checkInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm = (e) => {
        e.preventDefault();
        e.target.reset()
        let info = {};
        info.mess = this.state.mess;
        console.log(info)
        this.props.add(info)
        this.props.pushs(info)
        this.setState({
            mess: ''
        })
    }

    render() {
        return (
            <>
                <div className="dn">
                    <h3>chat 1</h3>
                    <form onSubmit={this.submitForm}>
                        <input
                            onChange={this.checkInput}
                            name="mess"
                            className='form-control'
                            placeholder='Chat1'
                        />
                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}
