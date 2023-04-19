import React, { Component } from 'react'
import './Asset/SignupStyle.css';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fullname: '',
            mobileNumber: '',
            dateOfBirth: '',
            gender: '',
            password: '',
            confirmPassword: '',
            error: '',
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            const userData = {
                username: this.state.username,
                fullname: this.state.fullname,
                mobileNumber: this.state.mobileNumber,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender,
                password: this.state.password,
            };       
            sessionStorage.setItem("userData", JSON.stringify(userData));
            console.log(userData);
        } else {
            console.error("Password and Confirm Password do not match");
        }
    };
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h2 className='title-signup'>Sign Up</h2>
                    </div>
                    <div>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"

                        />
                    </div>
                    <div>
                        <input
                            placeholder="Full Name"
                            type="text"
                            name="fullname"
                            value={this.state.fullname}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                        />
                    </div>
                    <div>
                        <input
                        pattern="[7-9]{1}[0-9]{9}" 
                            placeholder="Mobile Number"
                            type="tel"
                            name="mobileNumber"
                            value={this.state.mobileNumber}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Date of Birth"
                            type="date"
                            name="dateOfBirth"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                        />
                    </div>
                    <div>
                        <select
                            placeholder="Gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                        >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <input
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <input
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            required
                            className="rounded-pill"
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="rounded-pill" >Sign Up</button>
                    <br />
                    <p className="text-center login-route">Already a User? <a href="">Login</a></p>
                </form>
            </>
        )
    }
}
