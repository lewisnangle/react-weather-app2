import React from 'react';
import { Form } from 'semantic-ui-react'

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

        const SearchForm = () => (
            <Form>
              <Form.Field>
              <input onChange={this.updateWeatherQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder = 'Enter your location'
                 />
              </Form.Field>
            </Form>
          )


        return(
            <div>
                {SearchForm()}
            </div>
        );
    }

}


export default Search;