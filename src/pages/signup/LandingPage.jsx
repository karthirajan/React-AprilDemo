import React, { Component } from 'react'
import HomeSlider from '../components/HomeSlider';
import Login from '../components/Login';
import Signup from '../components/Signup';
import '../components/Asset/LoginStyle.css';


export default class LandingPage extends Component {
   
    render() {
        return (
            <>
                <section className="home">
                    <div className="container home-container">
                        <div className="row">
                            <div className="col content-signup">
                                <HomeSlider/>
                            </div>
                            <div className="col sign-up">
                                <Signup/>
                            </div>
                        </div>
                    </div>
                </section>          
            </>
        )
    }
}

