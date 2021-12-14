
import React, { createContext, useState } from "react";
import NavBar from "../NavBar/NavBar";
// import { Line } from 'react-chartjs-2';e
import { ReactComponent as LogOut } from './Assets/logout.svg';
import { ReactComponent as Bank } from './Assets/bank.svg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Page A',

        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',

        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',

        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',

        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',

        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',

        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',

        pv: 4300,
        amt: 2100,
    },
];
class Dashboard extends React.Component {

    render() {




        return (
            <div >
                <NavBar greeting="Account setup"></NavBar>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Team Name</p>
                            <p>John Doe</p>
                            <p>Washington, DC, USA</p>
                            <p>Total Labor cost</p>
                        </div>


                        <div className="col-md-10 col-lg-10   text-center" >
                            <div className="d-flex justify-content-between">
                                <div>Total Labor cost</div>
                                <div>calendar</div>
                            </div>
                            <div style={{ height: '80vh', }}>
                                <ResponsiveContainer width="100%" height="80vh" className="col-lg-10">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />

                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="d-flex justify-content-end">

                                <div>Total Labor cost</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Payroll Information</div>
                                <div>$83685.41</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>Every two weeks</div>
                                <div>Due</div>
                                <div>Paydate</div>
                            </div>
                            <div className="d-flex justify-content-center">

                                <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Pay My Team</button>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 text-center" >
                            <button className="btn rounded-pill   text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Team</button>
                            <div className="py-2"></div>
                            <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Payroll Settings</button>
                            <div className="py-2"></div>
                            <button className="btn rounded-pill   text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Business info</button>
                            <div className="py-2"></div>
                            <button className="btn rounded-pill  text-light px-4 py-2" style={{ backgroundColor: "#B11226" }}>Bank Account</button>

                        </div>



                    </div >
                </div>


            </div >

        );
    }
};

export default Dashboard;