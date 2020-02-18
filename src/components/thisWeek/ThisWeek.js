import React from 'react';
import { Table, Image} from 'semantic-ui-react'

class ThisWeek extends React.Component {

    render(){

        if (this.props.weatherListWeek.length === 0){
            return null;
        } else {
            console.log('this.props in this week:.....',this.props);
        }

        const weatherListWeek = this.props.weatherListWeek;


        const TableRows = (weatherListWeek) => weatherListWeek.map((item,index) => (
            
            <Table.Body>
                <Table.Row>
                    <Table.Cell><Image src={'https://www.metaweather.com//static/img/weather/' +item.weather_state_abbr +'.svg'} rounded size='mini' /></Table.Cell>
                    <Table.Cell>{item.dayOfWeek}</Table.Cell>
                    <Table.Cell>{item.weather_state_name}</Table.Cell>
                    <Table.Cell>{item.wind_direction_compass}</Table.Cell>
                    <Table.Cell>{Math.round(item.the_temp)}</Table.Cell>
                    <Table.Cell>{Math.round(item.wind_speed)}</Table.Cell>
                </Table.Row>
            </Table.Body>
        ))

        const TableHeader = () => (
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Day</Table.HeaderCell>
                  <Table.HeaderCell>Weather</Table.HeaderCell>
                  <Table.HeaderCell>Wind Direction</Table.HeaderCell>
                  <Table.HeaderCell>Temperature (C)</Table.HeaderCell>
                  <Table.HeaderCell>Wind Speed (mph) </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          )

        return(
            <div className = 'page-content'>
                <h3>Displaying this weeks weather for {this.props.location}</h3>
                <Table>
                {TableHeader(weatherListWeek)}
                {TableRows(weatherListWeek)}
                </Table>
            </div>
        );
    }


}


export default ThisWeek;