import React from 'react';
import { Table } from 'semantic-ui-react'


class weatherList extends React.Component {


    render(){

        if (this.props.weatherList.length === 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }

        const weatherList = this.props.weatherList;
        const sources = this.props.sources;

        const TableRows = (weatherList,sources) => weatherList.map((item,index) => (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{sources[index].title}</Table.Cell>
                    <Table.Cell>{item.weather_state_name}</Table.Cell>
                    <Table.Cell>{item.wind_direction_compass}</Table.Cell>
                    <Table.Cell>{Math.round(item.the_temp)}</Table.Cell>
                    <Table.Cell>{Math.round(item.wind_speed)}</Table.Cell>
                </Table.Row>
            </Table.Body>
        ))

        const TableHeader = (weatherList,sources) => (
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                  <Table.HeaderCell>Weather</Table.HeaderCell>
                  <Table.HeaderCell>Wind Direction</Table.HeaderCell>
                  <Table.HeaderCell>Temperature</Table.HeaderCell>
                  <Table.HeaderCell>Wind Speed</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          )


        return(
            <div className = 'page-content'>
                <Table>
                {TableHeader(weatherList,sources)}
                {TableRows(weatherList,sources)}
                </Table>
            </div>
        );
    }



}


export default weatherList;