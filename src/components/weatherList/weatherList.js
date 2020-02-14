import React from 'react';
import {Table,Image,Card, Icon} from 'semantic-ui-react'


class weatherList extends React.Component {


    render(){

        if (this.props.weatherList.length === 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }

        const weatherList = this.props.weatherList;
        const sources = this.props.sources;

        const weatherToday = (weatherListWeek) => weatherListWeek.map((item,index) => (
            <div>
            <Card>
              <Image src={'https://www.metaweather.com//static/img/weather/' +item.weather_state_abbr +'.svg'} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                    <a>
                    <Icon name='globe' />
                    Belfast
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
                
              </Card.Content>
            </Card>
            </div>
          ))

        return(
            <div className = 'page-content'>
                {weatherToday(weatherList)}
            </div>
        );
    }



}


export default weatherList;