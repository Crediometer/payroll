
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/provider";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import "../../generic/main.css";
import { DateRangePicker } from 'react-date-range';

class PeriodSelect extends React.Component {

    // handleSelect = (date) => {
    //     console.log(date); // native Date object
    // }

    // constructor(props) {
    //     const [state, setState] = useState([
    //         {
    //             startDate: new Date(),
    //             endDate: null,
    //             key: 'selection'
    //         }
    //     ]);



    handleSelect(ranges) {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }
    render() {
        // const [dates, setDates] = useState()

        const theme = {
            // ... your system-ui theme
            config: {
                useSystemColorMode: false, // or true
                initialColorMode: "light", // or "dark"
                cssVarPrefix: "chakra", // any string
            }
        }

        const selectionRange = {
            startDate: new Date(),
            endDate: Date.parse("25-12-2021"),
            key: 'selection',
        }

        return (
            <div >
                <NavBar greeting="Payroll"></NavBar>
                <div className="container rounded pb-4 mt-5">

                    <div><h4>Pay Period</h4></div>
                    <div className="row">

                        <div className="col-md-6 p-3">
                            <div>How Often do you pay your employees?</div>
                            <div className="my-2"></div>
                            <div className="row">
                                <div className="col-md-4">Payroll Type </div>
                                <div className="col-md-8">
                                    <div className="form-group mx-5 my-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" for="gridCheck">
                                                Once per week
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group mx-5 my-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" for="gridCheck">
                                                Every two weeks
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group mx-5 my-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" for="gridCheck">
                                                Two days each month
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group mx-5 my-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" for="gridCheck">
                                                Monthly
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div>You’ll be able to change this before you send your firdt pay run</div>
                            <div className="my-2"></div>
                            <ChakraProvider theme={theme}>
                                <DateRangePicker
                                    editableDateInputs={true}
                                    // onChange={item => setState([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    // ranges={state}
                                    // months={1}
                                    ranges={[selectionRange]}
                                    onChange={this.handleSelect}
                                />
                            </ChakraProvider>
                        </div>
                        <div className="md-4 lg-4 p-4 m-4  " >
                            <div className="text-dark  fs-3">Automatic payroll. </div>
                            <div className="" style={{ fontSize: "16px", color: "#A8A8A8" }}>Timecards willbe automatically imported and payroll processed at 5am on your payroll due date. You’ll receive an email summarizing your payroll and have until 7pm that evening to cancel and make any changes, Automatic payroll can only be enabled once you have run 1 payroll with us mannully. Learn more  </div>
                            <div className="form-group mx-5 my-4 mobile-space">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Run Payroll Automatically.
                                    </label>
                                </div>
                            </div>


                            <div className="text-dark  fs-3">Tip Importing. </div>
                            <div className="" style={{ fontSize: "16px", color: "#A8A8A8" }}>Import and calculate credit card tips when running payroll.</div>
                            <div className="form-group mx-5 my-4 mobile-space">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" for="gridCheck">
                                        Enable Tip Importing
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md-4"></div>
                        <div className="d-flex justify-content-center my-5">
                            <button type="button" className="btn btn-danger my-5 px-5 rounded-pill">Submit</button>
                        </div>

                    </div >
                </div>


            </div >

        );
    }
};

export default PeriodSelect;