import React, { createContext, useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import '../../generic/main.css';
import StickyNavBar from "../StickyNavBar/StickyNavBar";

class NewTeamMember extends React.Component {


    render() {
        // const [dates, setDates] = useState()


        return (
            <div >
                <StickyNavBar greeting="New Team Member"></StickyNavBar>

                <div className="m-5">
                    <div className="my-4"><h3>Tell us about your Team</h3></div>
                    <form className="mx-5 mobile-space">
                        <div className="form row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">First Name</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6 mobile-top">
                                <label for="inputPassword4">Last Name</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group mx-5 mobile-space my-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Invite this member to create account where they can input their<br />personal information and access paytubs.
                                </label>
                            </div>
                        </div>
                        <div className="form-group  my-3">
                            <label for="inputAddress">Email</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="user@crediometer.com" />
                        </div>
                        <div className="form-group row my-5">
                            <div className="col-md-1  me-">Overtime <br />Exception</div>
                            <div className="form-check col-md-8 my-2" >
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    This employee is exempt from overtime pay per FLSA rules.<br /><h6>personal information and access paytubs.</h6>
                                </label>

                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputState">Payment method</label>
                            <select id="inputState" className="form-control">
                                <option selected>Direct deposit</option>
                                <option>...</option>
                            </select>
                        </div>


                    </form>
                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Employee information</h3></div>
                    <form className="mx-5 mobile-space">
                        <div className="form row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Hire date</label>
                                <input type="date" className="form-control" id="inputEmail4" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6 mobile-top" >
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    File a new hire report on my behalf.
                                </label>
                            </div>
                        </div>

                        <div className="form-group  my-3">
                            <label for="inputAddress">2020 Year to Date pay</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="₦0.00" />
                        </div>

                        <div className="form-group">
                            <label for="inputState">Work Address</label>
                            <select id="inputState" className="form-control">
                                <option selected>Select/Create Address</option>
                                <option>...</option>
                            </select>
                        </div>


                    </form>

                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Compensation</h3></div>
                    <form className="mx-5 mobile-space">
                        <div className="form-group">
                            <label for="inputState">Job Title</label>
                            <select id="inputState" className="form-control">
                                <option selected>Select/Create Job title</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="my-5"></div>
                        <div className="form row">
                            <div className="form-group col-md-6">
                                <label for="inputState">pay Type</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Hourly</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6 mobile-top">
                                <label for="inputAddress">Hourly Rate</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="₦0.00" />
                            </div>
                        </div>


                        <div className="d-flex justify-content-center my-5">
                            <button type="button" className="btn btn-danger my-5 px-5 rounded-pill">Submit</button>
                        </div>

                    </form>
                </div >
            </div >


        );
    }
};

export default NewTeamMember;