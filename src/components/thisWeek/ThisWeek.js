import React from 'react';
import { Table,Card, Icon, Image} from 'semantic-ui-react'

class ThisWeek extends React.Component {

    render(){

        if (this.props.weatherListWeek.length === 0){
            return null;
        } else {
            console.log('this.props in this week:.....',this.props);
        }

        const weatherListWeek = this.props.weatherListWeek;


        const CardExampleCard = (weatherListWeek) => weatherListWeek.map((item,index) => (
            <Card>
              <Image src={'https://www.metaweather.com//static/img/weather/' +item.weather_state_abbr +'.svg'} wrapped ui={false} />
              <Card.Content>
                <Card.Header></Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {item.dayOfWeek}
                    {item.weather_state_name}
                    {item.wind_direction_compass}
                    {Math.round(item.the_temp)}
                    {Math.round(item.wind_speed)}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          ))


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
                  <Table.HeaderCell>Temperature</Table.HeaderCell>
                  <Table.HeaderCell>Wind Speed</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
          )

          

        
        return(
            <div className = 'page-content'>
                <Table>
                {TableHeader(weatherListWeek)}
                {TableRows(weatherListWeek)}
                </Table>
            </div>
        );
    }


}


export default ThisWeek;