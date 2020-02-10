import React from 'react';


class Search extends React.Component {

    state = {weatherQuery:''};

    updateWeatherQuery = event => {
        this.setState({weatherQuery : event.target.value});
        console.log(event.target.value);
    }

    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchWeather();
        }
    }

    searchWeather = () => {
        this.props.searchWeather(this.state.weatherQuery);
    }

    render(){
        return(
            <div>
                <input onChange={this.updateWeatherQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder = 'Enter your location'
                 />
        
                <button variant="outline-dark" onClick ={this.searchWeather}>Search</button>
            </div>
        );
    }

}


export default Search;