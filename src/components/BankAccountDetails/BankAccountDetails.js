
import React, { createContext, useState } from "react";

import { ChakraProvider } from "@chakra-ui/provider";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Search from '@mui/icons-material/Search';
import StickyNavBar from "../StickyNavBar/StickyNavBar";

class BankAccoutnDetails extends React.Component {


    render() {
        // const [dates, setDates] = useState()


        return (
            <div >
                <StickyNavBar greeting="Bank Account Details" withButton={true}></StickyNavBar>
                <div className="m-5">
                    <div className="m-5">
                        <div className="my-4"><h3>Enter the bank account you’d like to use for payroll withdrawals.</h3></div>
                        <div className="my-4"><h6>To Verify this account. we’ll send you two tiny deposits in 1-2 business days.</h6></div>
                        <form className="mx-5">
                            <div className="form-group  my-3">
                                <label for="inputAddress">Account Holder Name</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Account Holder Name" />
                            </div><div className="my-5"></div>
                            <div className="form row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Account Number</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Account Number" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Confirm Account Number</label>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Account Number" />
                                </div>
                            </div>
                            <div className="my-5"></div>
                            <div className="form-group  my-3">
                                <label for="inputAddress">Routing Number</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Routing Number" />
                            </div>
                            <div className="my-5"></div>
                            <div className="form-group">
                                <label for="inputState">Routing Number</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Checking</option>
                                    <option>...</option>
                                </select>
                            </div>




                        </form>
                    </div >
                </div >
            </div >


        );
    }
};

export default BankAccoutnDetails;