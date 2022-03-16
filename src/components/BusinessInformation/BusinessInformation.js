
import React, { createContext, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import '../../generic/main.css';
import NavBar from "../NavBar/NavBar";

class BusinessInformation extends React.Component {


    render() {
        // const [dates, setDates] = useState()


        return (
            <div >
                <NavBar greeting="Business Info"></NavBar>
                <div className="m-5">
                    <div className="my-4"><h3>Business Infromations</h3></div>
                    <form className="mx-5 mobile-space">

                        <div className="form-group ">
                            <label for="inputEmail4">Business Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Shop Name" />
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
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputPassword4">Authorized Signer</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Add Authorization" />
                        </div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputPassword4">EIN (Federal Employer Identification Number)</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="00-00000000" />
                        </div>

                        <div>
                            <p style={{ color: 'red' }}>This is located on any previous form 941. can't find it?</p>
                            <div>By Providing your EIN, You are agreeing to the <div style={{ color: 'red' }}>IRS Reporitng Agent Authorization Agreement.</div></div>
                        </div>

                    </form>
                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Business Address</h3></div>
                    <form className="mx-5 mobile-space">

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

                            <div className="form-group col-md-4 mobile-top">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Lagos</option>
                                    <option>...</option>
                                </select>
                            </div>


                            <div className="form-group col-md-4  mobile-top">
                                <label for="inputAddress">City</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Zip code" />
                            </div>
                        </div>


                    </form>

                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Tax Information ( required for paying W-2 employees)</h3></div>
                    <form className="mx-5 mobile-space">
                        <div style={{ fontSize: "14px", color: "#A8A8A8" }}>This Information will be used for your tax filling and payments. If you were notified of any changes to your tax rate or oter employer information, Please contact us to update them.</div>
                        <div className="my-4"></div>
                        <div>CA Employment Developent Department</div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputState">Account number</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="00-00000000" />
                        </div>



                        <div className="my-5">I haven’t registered with the EDD yet</div>




                    </form>
                    <div className="my-5"></div>
                    <div className="my-5"></div>
                    <div className="my-4"><h3>Tax Rates</h3></div>
                    <form className="mx-5 mobile-space">
                        <div style={{ fontSize: "14px", color: "#A8A8A8" }}>The unemployment insurance (UI) contribution Rate for most new employers is 3.4%. The Employment Training tax (ETT) Rate and State Disablility Insurance (SDI) Rates are fixed and apply to most employers. Look these up online or find them on the Notice of Contribution Rates mailed by the CA Employment Development Department.</div>
                        <div className="my-4"></div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputState">UI Contribution Rate </label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="3.4%" />
                        </div>



                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputState">SDI Rate</label>
                            <select id="inputState" className="form-control">
                                <option selected>1.0%</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="my-5"></div>
                        <div className="form-group ">
                            <label for="inputState">ETT Rate</label>
                            <select id="inputState" className="form-control">
                                <option selected>0.1%</option>
                                <option>...</option>
                            </select>
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

export default BusinessInformation;