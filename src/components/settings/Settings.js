
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";

import { Link } from "react-router-dom";
import { ReactComponent as Group } from './Assets/group.svg';
import { ReactComponent as Bank } from './Assets/bank.svg';
import { ReactComponent as Tax } from './Assets/tax.svg';


class Settings extends React.Component {

    render() {



        return (
            <div >
                <NavBar greeting="Payroll Setting"></NavBar>
                <div className="container rounded pb-4">
                    <div classname="row">

                        <div className="md-4">

                        </div>
                        <div className="md-4 lg-4 p-4 m-4  text-center" >
                            <div className="text-dark text-center fs-3">Before you pay you team, be sure to complete your information</div>
                            <div className="text-dark text-center fs-4">To Pay your team we’ll need you to:</div>

                        </div>


                        <div className="md-4"></div>
                    </div >
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4 py-4 " style={{
                            textAlign: "center",
                        }}>  <Link to="/team/member" style={{ textDecoration: 'none' }}>
                                <div className="mx-4 py-4" style={{
                                    color: "black",
                                    border: "1px solid #B11226", borderRadius: "10px",
                                }}>
                                    < Group ></Group>

                                    <div className="py-2">Add Your<br /> Team</div>
                                </div></Link>
                        </div>
                        <div class="col-md-4 py-4" style={{
                            textAlign: "center",
                        }}>

                            <Link to="/accountSetUp" style={{ textDecoration: 'none' }}>               <div className="mx-4 py-4" style={{
                                border: "1px solid #B11226", borderRadius: "10px", color: "black"
                            }}>
                                < Bank ></Bank>

                                <div className="py-2">Link your Bank
                                    <br />Account</div>
                            </div></Link>
                        </div>
                        <div class="col-md-4 py-4" style={{
                            textAlign: "center",
                        }}>
                            <div className="mx-4 py-4" style={{
                                border: "1px solid #B11226", borderRadius: "10px",
                            }}>
                                < Tax ></Tax>

                                <div className="py-2">Add your tax
                                    <br />information</div>
                            </div>
                        </div>




                    </div>


                </div >
            </div >

        );
    }
};

export default Settings;