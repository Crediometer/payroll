
import React, { createContext, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";


import { ReactComponent as House } from './Assets/house.svg';
import { ReactComponent as List } from './Assets/list.svg';
import { ReactComponent as Time } from './Assets/time.svg';
import { ReactComponent as Group } from './Assets/group.svg';

class Landing extends React.Component {

    render() {
        return (

            < div >
                <NavBar greeting="Payroll Setting"></NavBar>
                <div className="container rounded pb-4">
                    <div classname="row">

                        <div className="md-4">

                        </div>
                        <div className="md-4 lg-4 p-4 m-4  text-center" style={{ backgroundColor: '#B11226', borderRadius: "15px" }} ><div className="p-3"><House></House></div>
                            <div className="text-light text-center fs-1">Payroll priced for great Businesses</div>
                            <div className="text-center p-3">
                                <button className="btn rounded-pill  text-dark px-4 py-2" style={{ backgroundColor: "white" }}>Setup Payroll</button>
                            </div>
                        </div>


                        <div className="md-4"></div>
                    </div >
                </div>

                <div class="container pt-4">
                    <div class="row">
                        <div class="col-md-3" style={{
                            textAlign: "center"
                        }}>
                            < List ></List><div>Payroll compliance</div><div>Our experianced team helps you make sure your payroll is compliant</div>
                        </div>


                        <div class="col-md-3" style={{
                            textAlign: "center"
                        }}>
                            <Time></Time><div>Timecards in a click</div><div>Let employees and independent contractors clock in and out from the Crediometer of sale app, and then import their hours with a click.</div>
                        </div>

                        <div class="col-md-3 justify-center" style={{
                            textAlign: "center"
                        }}>
                            <Group></Group><div>Online account for your team</div><div>Your team member can setup online accounts where they can update their personal details and setup direct deposit.</div>
                        </div>

                        <div class="col-md-3" style={{
                            textAlign: "center"
                        }}>
                            <List></List><div>flexible pricing</div><div>Never pay more than you have to-if you pay fewer employees or contrators in a given month, the price you pay goes down.</div>
                        </div>


                    </div>


                </div >
            </div >
        );

    }
};

export default Landing;