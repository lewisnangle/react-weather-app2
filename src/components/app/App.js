import * as React from 'react';  
import './App.scss';
import PageHeader from '../page-header/PageHeader';  
import Navbar from '../navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import WeatherList from '../weatherList/weatherList';
import Calender from '../calender/Calender';
import ThisWeek from '../thisWeek/ThisWeek';

class App extends React.Component {  

    state = {weatherList:[],sources:[],weatherListWeek:[],sourcesWeek:[]};

    searchWeather = location => {
        fetch('http://localhost:8080/weather?name='+location)
        .then(response => 
            response.json())
        .then((myJson) => {
            console.log("JSON in weatherSearch: " + myJson.content)
            var json = JSON.parse(myJson.content);
            console.log("consolidated Weather" + json.consolidated_weather);
            var weatherList = []
            var sources = [];
            for(var i = 0; i < 1;i++){
                var id = json.consolidated_weather[i].id;
                var weather_state_name = json.consolidated_weather[i].weather_state_name;
                var wind_direction_compass = json.consolidated_weather[i].wind_direction_compass;
                var the_temp = json.consolidated_weather[i].the_temp;
                var wind_speed = json.consolidated_weather[i].wind_speed;
                var weather_state_abbr = json.consolidated_weather[i].weather_state_abbr;
                sources = json.sources;
                var weatherItem = {id,weather_state_name,wind_direction_compass,the_temp,wind_speed,weather_state_abbr}
                weatherList.push(weatherItem)
            }
            this.setState({weatherList,sources})
        });
    }

    searchWeatherWeek = location => {
        fetch('http://localhost:8080/weatherWeek?name='+location)
        .then(response => 
            response.json())
        .then((myJson) => {
            console.log(myJson)
            var json = JSON.parse(myJson.content);
            console.log("consolidated Weather" + JSON.stringify(json.consolidated_weather));
            var weatherListWeek = []
            var sourcesWeek = [];
            for(var i = 0; i < json.consolidated_weather.length;i++){
                var id = json.consolidated_weather[i].id;
                var weather_state_name = json.consolidated_weather[i].weather_state_name;
                var wind_direction_compass = json.consolidated_weather[i].wind_direction_compass;
                var the_temp = json.consolidated_weather[i].the_temp;
                var wind_speed = json.consolidated_weather[i].wind_speed;
                var weather_state_abbr = json.consolidated_weather[i].weather_state_abbr;
                sourcesWeek = json.sources;
                var dayOfWeek = json.consolidated_weather[i].dayOfWeek;
                var weatherItem = {id,weather_state_name,wind_direction_compass,the_temp,wind_speed,weather_state_abbr,dayOfWeek}
                weatherListWeek.push(weatherItem)
            }
            this.setState({weatherListWeek,sourcesWeek})
        });
    }

    render() {  
        return (  
            <div className='body'>  
                
                <PageHeader weatherQuery={this.weatherQuery} searchWeatherWeek={this.searchWeatherWeek} searchWeather={this.searchWeather}/>
                <Router> 
                <Navbar/>
                <Switch>  
                    <Route path="/page2">  
                        <ThisWeek weatherListWeek = {this.state.weatherListWeek} sourcesWeek = {this.state.sourcesWeek}/> 
                    </Route>  
                    <Route path="/page3">  
                        <div className='page-content'>Page 3</div>  
                    </Route>  
                    <Route path="/page4">  
                        <Calender/>
                    </Route>  
                    <Route path="/">  
                        <WeatherList weatherList = {this.state.weatherList} sources = {this.state.sources}/> 
                    </Route>  
                </Switch>  
            </Router> 
            </div>  
        )  
    }  

} 

export default App;