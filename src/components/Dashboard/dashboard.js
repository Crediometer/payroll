
import React, { createContext, useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import NavBar from "../NavBar/NavBar";
// import { Line } from 'react-chartjs-2';e

import Stack from '@mui/material/Stack';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { ReactComponent as Edit } from './Assets/edit.svg';
import { ReactComponent as Notifications } from './Assets/notifications.svg';
import { ReactComponent as Payday } from './Assets/payday.svg';
import { ReactComponent as Team } from './Assets/team.svg';
import "../../generic/main.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, PointElement as Point, LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale, Point, LineElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    // responsive: true,

    maintainAspectRatio: false,

    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: !true,
            text: 'Crediometer',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const dataSet = {
    labels,
    datasets: [
        {
            label: 'Cash flow',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            // fillColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: "rgba(0, 30, 0, 0.1)",
            // borderColor: 'rgb(99, 132, 0.5)',

            tension: 0.5,
            fill: true,

        },

    ],
};


function Dashboard() {
    const [value, setValue] = React.useState([null, null]);


    return (
        <div >
            <NavBar greeting="Account setup"></NavBar>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-12">
                        <p>Team Name</p>
                        <p>John Doe</p>
                        <p style={{ fontSize: "14px", color: "#A8A8A8" }}>Washington, DC, USA</p>

                    </div>


                    <div className="col-md-10 col-sm-12 col-lg-10   text-center" >
                        <div className="d-flex justify-content-between">
                            <div>Total Labor cost</div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <MobileDateRangePicker
                                            startText="Mobile start"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> to </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                        {/* <DesktopDateRangePicker
                                            startText="Desktop start"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{ mx: 2 }}> to </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )} */}
                                        {/* /> */}
                                    </Stack>
                                </LocalizationProvider>
                            </LocalizationProvider>
                        </div>
                        <div className="graph" >
                            <Line options={options} data={dataSet} />
                        </div>
                        <div className="d-flex justify-content-end">

                            <div style={{ fontSize: "14px", color: "#A8A8A8" }}>Total Labor cost</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div style={{ fontSize: "14px", color: "#A8A8A8" }}>Payroll Information</div>
                            <div className="fs-4">$83685.41</div>
                        </div>
                        <div className="d-flex d-flex justify-content-between">
                            <div className="col-sm-12  col-md-5">
                                {/* 
                                    <div>
                                        <div></div>
                                        <div></div>
                                    </div> */}
                                {/* <img src="..." alt="Card image cap" ></img> */}
                                <ListItem>
                                    <ListItemAvatar>
                                        <Edit ></Edit>
                                    </ListItemAvatar>
                                    <ListItemText primary="Every two weeks" secondary="Oct 18 - Oct 31 " />
                                </ListItem>
                            </div>
                            <div className="col-sm-12  col-md-5">
                                <ListItem>
                                    <ListItemAvatar>
                                        {/* <Avatar> */}
                                        <Notifications ></Notifications>
                                        {/* </Avatar> */}
                                    </ListItemAvatar>
                                    <ListItemText primary="Due" secondary="Thursday, Oct 28 by 8pm" />
                                </ListItem>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <ListItem>
                                    <ListItemAvatar>
                                        <Payday ></Payday>
                                    </ListItemAvatar>
                                    <ListItemText primary="Pay Date" secondary="Thursday, Oct 28 by 5pm" />
                                </ListItem>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center py-3">

                            <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Pay My Team</button>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 col-lg-2 text-center mobile-top"  >
                        <div className="row">

                            <div className="col-md-12  px-1 pt-2 pb-4">
                                <Link to="/team/member">
                                    <button className="btn rounded-pill   col-md-12  text-light " style={{ backgroundColor: "#B11226" }}>
                                        <Team style={{
                                            height: "20px",
                                        }}></Team>
                                        Team
                                    </button>
                                </Link>
                            </div>

                            < div className="col-md-12  px-1 pt-2 pb-4" >
                                <Link to="/periodSelect"><button className="btn rounded-pill col-md-12  text-light " style={{ backgroundColor: "#B11226" }}>Payroll Settings</button>
                                </Link></div>

                            <div className="col-md-12  px-1 pt-2 pb-4">
                                <Link to="/business/info">
                                    <button className="btn rounded-pill col-md-12  text-light" style={{ backgroundColor: "#B11226" }}>
                                        Business info
                                    </button>
                                </Link>
                            </div>

                            <div className="col-md-12 px-1 pt-2 pb-4">
                                <Link to="/accountSetUp">
                                    <button className="btn rounded-pill col-md-12  text-light " style={{ backgroundColor: "#B11226" }}>
                                        Bank Account
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>



                </div >
            </div >


        </div >

    );
};

export default Dashboard;