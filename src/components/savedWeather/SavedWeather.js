import React from 'react';
import {Image,Card,Icon} from 'semantic-ui-react'


class SavedWeather extends React.Component {

    state = {SavedWeather:[]};

    getAllSavedWeather(){
        fetch('http://localhost:8080/weatherEntity')
        .then(response => 
            response.json())
        .then((myJson) => {
            this.setState({SavedWeather:myJson})
            console.log(myJson)
        });
    }

    componentDidMount(){
        console.log("SavedWeather has mounted.")
        this.getAllSavedWeather();
    }

    render(){

        const savedWeather = (SavedWeather) => SavedWeather.map((item,index) => (
            <div>
            <Card>
              <Image src={'https://www.metaweather.com//static/img/weather/' +item.weather_state_abbr +'.svg'} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                    <a>
                    <Icon name='globe' />
                    {item.location}
                    </a>
                </Card.Header>
                
                <Card.Description>
                    Date: {item.date} -
                    {item.weatherType} -
                    Temperature: {Math.round(item.temperature)} Celcius
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                
              </Card.Content>
            </Card>
            </div>
          ))
        return(
            <div className = 'page-content weather_item'>
                {savedWeather(this.state.SavedWeather)}
            </div>
        );
    }
}



export default SavedWeather;