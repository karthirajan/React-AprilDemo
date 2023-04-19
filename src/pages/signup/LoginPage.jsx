import React, { Component } from 'react'
import HomeSlider from '../components/HomeSlider';
import Login from '../components/Login';


export default class LoginPage extends Component {
   
    render() {
        return (
            <>
                <section className="home">
                    <div className="container home-container">
                        <div className="row">
                            <div className="col-4 content-signup">
                                
                            </div>
                            <div className="col-6 sign-up">
                                <Login/>
                            </div>
                        </div>
                    </div>
                </section>          
            </>
        )
    }
}