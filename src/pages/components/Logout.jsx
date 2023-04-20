import React, { Component } from 'react';
import google from '../images/google.png'
import facebook from '../images/facebook.png'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isSuccess: false,
            isFail: false,
        };


    }

    componentDidMount() {
        const mobileNumber = sessionStorage.getItem('mobileNumber');
        const password = sessionStorage.getItem('password');
        this.setState({ mobileNumber, password });
    }

    handleChange = (event) => {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { mobileNumber, password } = this.state;

        if (mobileNumber !== sessionStorage.getItem('mobileNumber')) {
            this.setState({ error: 'Invalid mobile number' });
            return;
        }

        if (password !== sessionStorage.getItem('password')) {
            this.setState({ error: 'Invalid password' });
            return;
        }

        this.setState({ error: '' });
    };

    render() {
        return (
            <>
               <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h3 className="header mt-2">Login</h3>
                    <div className='form-group'>
                        <input
                            name="username"
                            type="text"
                            className="rounded-pill"
                            id="inputUserName"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        ></input>
                    </div>
                    <div className="mt-3">
                        <input
                            name="password"
                            type="password"
                            className="rounded-pill"
                            id="inputPassword"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        ></input>
                    </div>
                    <div className="mt-1">
                        <div className="checkBox">
                            <input
                                type="checkbox"
                                className="cBox"
                                id="inputCheckBox"
                                required
                            />
                            <label className="remember">Remember me</label>
                        </div>
                        <div className="forget-password center-block d-block mx-auto">
                            <a href="#" className="frgt">
                                Forget Password ?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button
                            type="submit"
                            className="btn rounded-pill"
                            id="btnSubmit"
                        >
                            Submit
                        </button>
                    </div>
                    <div className="form-group mt-3 Register">
                        <label className="RegUser center-block d-block ms-auto">
                            Not a Register user? &nbsp;
                            <a href="#" className="signUp">
                                SignUp
                            </a>
                        </label>
                    </div>
                    <div className="Others">
                        <div className="dottedOr">
                            <label>-----------OR-----------</label>
                        </div>
                        <div className="OtherSignup">
                            <a href="#">
                                <img src={google} alt="Google" className="google" />
                            </a>
                            <a href="#">
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    className="facebook"
                                />
                            </a>
                        </div>
                    </div>
                </form>
                </div> 
            </>
        )
    }
}
