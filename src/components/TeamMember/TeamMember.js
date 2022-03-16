
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


// class TeamMember extends React.Component {


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function TeamMember() {
    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [state, setState] = React.useState({
        bottom: false,
    });
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, ["bottom"]: open });
    };
    // const [dates, setDates] = useState()
    const list = () => (
        <Box
            sx={{
                width: "94%",
            }}
            className="px-5"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >


            <div className="py-3"></div>
            <div className="d-flex justify-content-between ">
                <div>Add an Existing Team Member</div>
                <div className=" ">

                    <button onClick={toggleDrawer(!true)} type="button" className="btn mx-1 btn-outline-danger rounded-pill">Cancel</button>

                    <button onClick={toggleDrawer(true)} type="button" className="btn  mx-3 btn-danger rounded-pill">Add</button>

                </div>


            </div>
            <div className="row">
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Search ..." variant="standard" />
                </Box>

            </div>

            <div className="py-3"></div>

            <div style={{ height: 400, width: '100%' }} className="px-5">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Box >
    );


    return (
        <div >
            <NavBar greeting="Team Member"></NavBar>
            <div className="px-5">
                <SwipeableDrawer
                    disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    anchor="bottom"

                    open={state["bottom"]}
                    onClose={toggleDrawer(false)}
                >
                    {list("bottom")}
                </SwipeableDrawer>
            </div>
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-4 col-sm-12  my-2">

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Search ..." variant="standard" />
                        </Box>

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
                            <Link to="/new/team/memeber" className="d-flex flex-column justify-content-end" style={{
                                textDecoration: 'none',
                            }}>
                                <button type="button" className="btn btn-outline-danger rounded-pill">Create Team Member</button>
                            </Link>
                            <button onClick={toggleDrawer(true)} type="button" className="btn my-3 btn-outline-danger rounded-pill">Existing Team Member</button>
                        </div>

                    </div>
                </div>
            </div >
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
    // }
};

export default TeamMember;