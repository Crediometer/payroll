// import React from "react";
// import DateRangePicker from "react-daterange-picker";
// import "react-daterange-picker/dist/css/react-calendar.css";
// import originalMoment from "moment";
// import { extendMoment } from "moment-range";

// const moment = extendMoment(originalMoment);
// const today = moment();
// const stateDefinitions = {
//     unavailable: {
//         selectable: false,
//         color: "#78818b",
//         label: "Unavailable"
//     }
// };
// const dateRanges = [
//     {
//         state: "unavailable",
//         range: moment.range(today.clone().subtract(4, "days"), today.clone())
//     }
// ];
// class Example extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         const today = moment();

//         this.state = {
//             value: moment.range(today.clone().subtract(4, "days"), today.clone()),
//             dateRanges: [
//                 {
//                     state: "enquire",
//                     range: moment.range(
//                         moment()
//                             .add(2, "weeks")
//                             .subtract(5, "days"),
//                         moment()
//                             .add(2, "weeks")
//                             .add(6, "days")
//                     )
//                 },
//                 {
//                     state: "unavailable",
//                     range: moment.range(
//                         moment().add(3, "weeks"),
//                         moment()
//                             .add(3, "weeks")
//                             .add(5, "days")
//                     )
//                 }
//             ]
//         };
//     }

//     onSelect = (value, states) => {
//         this.setState({ value, states });
//     };

//     r

//     render() {
//         console.log(moment());
//         return (
//             <div>

//                 <DateRangePicker
//                     value={this.state.value}
//                     // stateDefinitions={stateDefinitions}
//                     // dateStates={dateRanges}
//                     onSelect={this.onSelect}
//                     maximumDate={moment()
//                         .add(1, "months")
//                         .calendar()}
//                     minimumDate={moment()
//                         .subtract(1, "months")
//                         .calendar()}
//                     singleDateRange={true}
//                     numberOfCalendars={1}
//                     showLegend={true}
//                 />
//             </div>
//         );
//     }
// }

// export default Example;
