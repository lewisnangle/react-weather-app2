import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Calender extends React.Component {
    state = {
      startDate: new Date()
    };
  
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
  
    render() {
      return (
        <div className = 'page-content'>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        </div>
      );
    }
  }

  export default Calender;