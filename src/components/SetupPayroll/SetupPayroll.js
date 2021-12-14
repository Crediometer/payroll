
import React, { createContext, useState } from "react";

import { ChakraProvider } from "@chakra-ui/provider";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Search from '@mui/icons-material/Search';
import StickyNavBar from "../StickyNavBar/StickyNavBar";

class SetupPayroll extends React.Component {


    render() {
        // const [dates, setDates] = useState()


        return (
            <div >
                <StickyNavBar greeting="Setup Payroll"></StickyNavBar>
                <div className="m-5">
                    <div className="my-4"><h3>Tell us about your business</h3></div>
                    <form className="mx-5">

                        <div className="form-group ">
                            <label for="inputEmail4">Business Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
                        </div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputPassword4">Doing Bussiness As (optional)</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                        </div>

                        <div className="my-5"></div>
                        <div className="form-group my-4">

                            <label className="form-check-label" for="gridCheck">
                                Business Type
                            </label>
                            <select id="inputState" className="form-control">
                                <option selected>LLC</option>
                                <option>...</option>
                            </select>

                        </div>



                    </form>
                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Business Address</h3></div>
                    <form className="mx-5">

                        <div className="form-group ">
                            <label for="inputEmail4">Address Line 1</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Address Line 1" />
                        </div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label className="form-check-label" for="gridCheck">
                                Address Line 1
                            </label>

                            <input type="text" className="form-control" id="inputEmail4" placeholder="Address Line 2" />


                        </div>

                        <div className="my-5"></div>
                        <div className="form row">
                            <div className="form-group col-md-4">
                                <label for="inputState">City</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="City" />
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Lagos</option>
                                    <option>...</option>
                                </select>
                            </div>


                            <div className="form-group col-md-4 ">
                                <label for="inputAddress">City</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Zip code" />
                            </div>
                        </div>


                    </form>

                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Contact Information for pay run and tax filling</h3></div>
                    <form className="mx-5">
                        <div className="form row">
                            <div className="form-group col-md-6">
                                <label for="inputState">personal Mobile</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="City" />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputState">Official Email</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="user@crediometer.com" />
                            </div>


                        </div>
                        <div className="my-5"></div>
                        <div className="form row">

                            <div className="form-group col-md-6">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    <h5>Receive text message reminders so you never miss a pay run</h5>
                                    Crediometer will send reminder to your mobile number when its
                                    time to pay your team.
                                </label>

                            </div>

                            <div className="form-group col-md-6">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    <h5>Receive email reminders so you never miss a pay run</h5>
                                    Crediometer will send reminder to your email ID when its
                                    time to pay your team.
                                </label>

                            </div>


                        </div>

                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputState">Business Phone</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Business phone number" />
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

export default SetupPayroll;