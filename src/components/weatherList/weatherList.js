import React from 'react';



class weatherList extends React.Component {


    render(){

        if (this.props.weatherList.length === 0){
            return null;
        } else {
            console.log('this.props',this.props);
        }

        const weatherList = this.props.weatherList;

        console.log("Weather List:" + weatherList);


        return(
            <div>
            {
            weatherList.map((item,index)=>{
                return(
                    <table key={item.id} className="ui striped table page-content">
                        {(index === 0) ? <thead>
                            <tr>
                            <th>Weather</th>
                            <th>Wind direction</th>
                            <th>Temperature</th>
                            <th>Wind Speed</th>

                            </tr>
                        </thead> : ''  }                        
                        {
                        <tbody>
                            <tr>
                            <td>{item.weather_state_name}</td>
                            <td>{item.wind_direction_compass}</td>
                            <td>{item.the_temp}</td>
                            <td>{item.wind_speed}</td>

                            </tr>
                        </tbody>
                        }
                        </table>
                );
            })
            }
            </div>
        );
    }



}


export default weatherList;