import React from 'react';
import {Image,Card,Icon,Button} from 'semantic-ui-react'


class weatherList extends React.Component {

    saveWeather(weatherList){

        console.log("weatherList in saveWeather " + JSON.stringify(weatherList));

        const payload = {
            location:this.props.location,
            weatherType:weatherList[0].weather_state_name,
            date:weatherList[0].applicable_date,
            temperature: weatherList[0].the_temp,
            weather_state_abbr: weatherList[0].weather_state_abbr}

        fetch("http://localhost:8080/weatherEntities", {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(payload), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
          })
          .then(response =>response.json()).then(()=>alert("Saved"))
    }

    render(){

        if (this.props.weatherList.length === 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }

        const weatherList = this.props.weatherList;
        
        
        const weatherToday = (weatherList) => weatherList.map((item,index) => (
            <div>
            <Card>
              <Image src={'https://www.metaweather.com//static/img/weather/' +item.weather_state_abbr +'.svg'} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                    <a>
                    <Icon name='globe' />
                    {this.props.location}
                    </a>
                </Card.Header>
                
                <Card.Description>
                    {item.dayOfWeek}
                    {item.weather_state_name} -
                    Wind Direction: {item.wind_direction_compass} -
                    Temperature: {Math.round(item.the_temp)} Celcius - 
                    Wind Speed: {Math.round(item.wind_speed)} mph 
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button onClick={()=>{this.saveWeather(weatherList)}}>Save</Button>
              </Card.Content>
            </Card>
            </div>
          ))

        

        return(
            <div className = 'page-content'>

                <h3>Displaying today's weather for {this.props.location}</h3>

                {weatherToday(weatherList)}
            </div>
        );
    }

}


export default weatherList;