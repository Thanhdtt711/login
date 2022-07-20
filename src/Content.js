import React, { Component } from 'react'
import Chat1 from "./Chat1";
import './App.css';
export default class content extends Component {
    constructor(props) {
        super(props)
        this.chatUrl = 'http://localhost:3000/chat'
        this.logindn = 'http://localhost:3000/login'
        this.state = {
            item1: [],
            login: [],
            check: {
                user: '',
                pass: ''
            }
        }
    }
    componentDidMount() {
        fetch(this.chatUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        item1: result,
                    });
                },
            )
    }
    componentDidMount() {
        fetch(this.logindn)
            .then(res => res.json())
            .then(
                (logins) => {
                    this.setState({
                        login: logins,
                    });
                },
            )
    }

    pushServer = (info) => {
        fetch(this.chatUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        })
    }

    addText = (info) => {
        this.state.item1.push(info);
        this.setState({
            data: this.state.item1
        })
    }
    checkInput = (e) => {
        const data = { ...this.state.check }
        data[e.target.name] = e.target.value
        this.setState({
            check: data
        })
    }
    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.check.user)
        
        var a = this.state.login.map(item => {
            return (
                item.pass
            )
        })
        var b = this.state.login.map(item => {
            return (
                item.user
            )
        })
        if (this.state.check.user === b[0] && this.state.check.pass == a[0]) {
            alert('đúng')
            document.querySelector('.sumale').classList.add('d-none')
            document.querySelector('.dn').classList.add('chat')
            document.querySelector('.dn2').classList.add('chat2')
        }else{
            alert('sai')
        }
    }
    checklogin = () => {
        this.state.login.map(user => {
            return (
                <div>
                    <p>{user.user}</p>
                    <p>{user.pass}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="App container">
                <div className="row justify-content-center">
                    <div className="col-12 pb-4 dn2">
                        <h3>Nội dung</h3>
                        <div className="border p-3">
                            {
                                this.state.item1.map((item, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <p className="mb-0">{item.id}</p>
                                            <p className="mb-0">{item.mess}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-12 pb-4">
                        <Chat1 add={this.addText} pushs={this.pushServer} />
                    </div>
                    <div className='col-6 sumale pb-4'>
                        <h3>Đăng nhập</h3>
                        <form onSubmit={this.submitForm}>
                            <input
                                onChange={this.checkInput}
                                name="user"
                                className='form-control mb-3'
                                placeholder='Tên đăng nhập'
                            />
                            <input
                                onChange={this.checkInput}
                                name="pass"
                                className='form-control'
                                placeholder='Pass'
                            />
                            <button type="submit" className="btn btn-success mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
