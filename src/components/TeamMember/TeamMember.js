
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/provider";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Search from '@mui/icons-material/Search';

class TeamMember extends React.Component {


    render() {
        // const [dates, setDates] = useState()


        return (
            <div >
                <NavBar greeting="Team Member"></NavBar>

                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-4 col-sm-12  my-2">
                            <div class="input-group ">
                                <div id="navbar-search-autocomplete" class="form-outline">
                                    <input type="search" placeholder="Search..." id=" form1" class="form-control" />

                                </div>
                                <button type="button" className="btn btn-primary p" >
                                    <Search />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 my-2">
                            <div class="input-group ps-5 ">
                                <div className="dropdown show">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Type (All)
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <button type="button" className="btn btn-primary p" >
                            <Search />
                        </button> */}
                        </div>
                        <div className="col-md-2 col-sm-6 my-2">
                            <div class="input-group ps-5 ">
                                <div className="dropdown show">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Type (All)
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <button type="button" className="btn btn-primary p" >
                            <Search />
                        </button> */}
                        </div>


                        <div className=" col-md-3 col-sm-12 my-2">
                            <div className="d-flex flex-column justify-content-end">
                                <button type="button" className="btn btn-outline-danger rounded-pill">Create Team Member</button>
                                <button type="button" className="btn my-3 btn-outline-danger rounded-pill">Existing Team Member</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <table className="table ">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Type</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@crediomter.com</td>
                                <td>Employee</td>
                                <td>Active</td>
                                <td><button class="btn btn-danger btn-sm rounded-circle p-1" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><RemoveCircleIcon /></button></td>
                            </tr>
                            <tr>

                                <td>John</td>
                                <td>Doe</td>
                                <td>john.doe@crediomter.com</td>
                                <td>Employee</td>
                                <td>Active</td>
                                <td><button class="btn btn-danger btn-sm rounded-circle p-1" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><RemoveCircleIcon /></button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center my-5">
                        <button type="button" className="btn btn-danger my-5 px-5 rounded-pill">Submit</button>
                    </div>

                </div>

            </div >

        );
    }
};

export default TeamMember;