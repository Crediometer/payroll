
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";

import { ReactComponent as LogOut } from './Assets/logout.svg';
import { ReactComponent as Bank } from './Assets/bank.svg';



class AccountSetUp extends React.Component {

    render() {



        return (
            <div >
                <NavBar greeting="Account setup"></NavBar>
                <div className="container rounded pb-4">
                    <div classname="row">

                        <div className="md-4">

                        </div>
                        <div className="md-4 lg-4 p-4 m-4  text-center" >
                            <div className="text-dark text-center fs-2">Payroll Bank Account</div>
                            <div className="text-dark text-center fs-3">Link the bank account you’d like to use for payroll withdrawals.</div>
                            <div className="text-dark text-center fs-4">You won’t be charged for using Crediometer Payroll untill you send your first payments</div>

                        </div>


                        <div className="md-4"></div>
                    </div >
                </div>

                <div class="container pt-4">
                    <div class="row">
                        <div class="col-md-2 " style={{
                            textAlign: "center",
                        }}>

                        </div>
                        <div class="col-md-4 " style={{
                            textAlign: "center",
                        }}>
                            <div className="mx-4 py-4" >
                                <div style={{
                                    height: "110px"
                                }}>< LogOut ></LogOut></div>

                                <div className="pt-4">Link Instantly(Recommended)</div>
                                <div className="py-2">Log into your bank account and send a
                                    <br /> payment right away.</div>
                                <div className="text-center p-3">
                                    <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Link Instantly</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4" style={{
                            textAlign: "center",
                        }}>
                            <div className="mx-4 py-4">
                                <div style={{
                                    height: "110px"
                                }}  >< Bank ></Bank></div>

                                <div className="pt-4">Link in 1-2 days</div>
                                <div className="py-2">We’ll send two micro-deposits in the next
                                    <br />1-2 business days to verify your account.</div>
                                <div className="text-center p-3">
                                    <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Manually Enter</button>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-2 " style={{
                            textAlign: "center",
                        }}>
                        </div>



                    </div>


                </div >
            </div >

        );
    }
};

export default AccountSetUp;