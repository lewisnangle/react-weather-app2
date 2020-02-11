import * as React from 'react';  
import './App.scss';
import PageHeader from '../page-header/PageHeader';  
import Navbar from '../navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import WeatherList from '../weatherList/weatherList';

class App extends React.Component {  

    state = {weatherList:[],sources:[]};

    searchWeather = location => {
        fetch('http://localhost:8080/weather?name='+location)
        .then(response => 
            response.json())
        .then((myJson) => {
            var json = JSON.parse(myJson.content);
            console.log(json.consolidated_weather);
            var weatherList = []
            var sources = [];
            for(var i = 0; i < json.consolidated_weather.length;i++){
                var id = json.consolidated_weather[i].id;
                var weather_state_name = json.consolidated_weather[i].weather_state_name;
                var wind_direction_compass = json.consolidated_weather[i].wind_direction_compass;
                var the_temp = json.consolidated_weather[i].the_temp;
                var wind_speed = json.consolidated_weather[i].wind_speed;
                sources = json.sources;
                var weatherItem = {id,weather_state_name,wind_direction_compass,the_temp,wind_speed,weatherItem}
                weatherList.push(weatherItem)
            }
            this.setState({weatherList,sources})
        });
    }

    render() {  
        return (  
            <div className='body'>  
                
                <PageHeader searchWeather={this.searchWeather}/>
                <Router> 
                <Navbar/>
                <Switch>  
                    <Route path="/page2">  
                        <div className='page-content'>Page 2</div>  
                    </Route>  
                    <Route path="/page3">  
                        <div className='page-content'>Page 3</div>  
                    </Route>  
                    <Route path="/page4">  
                        <div className='page-content'>Page 4</div>  
                    </Route>  
                    <Route path="/">  
                        <WeatherList searchWeather={this.searchWeather} weatherList = {this.state.weatherList} source = {this.state.sources}/>   
                    </Route>  
                </Switch>  
            </Router> 
            </div>  
        )  
    }  

} 

export default App;