import React from 'react';


class SavedWeather extends React.Component {

    componentDidMount(){
        console.log("SavedWeather has mounted.")
    }

    render(){
        return(
            <div className = 'page-content'>
                Saved Weather
            </div>
        );
    }
}



export default SavedWeather;