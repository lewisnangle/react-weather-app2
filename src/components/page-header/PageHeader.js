import * as React from 'react'; 
import Search from '../search/Search';

export default class MyPageHeader extends React.Component { 

    render() { 
        return ( 
            <div className='page-header'> 
                <h1 className='title'>Weather App</h1> 
                <div className="search">
                    <Search searchWeatherWeek={this.props.searchWeatherWeek} searchWeather={this.props.searchWeather}/>
                </div>
                
            </div> 
        ) 
    } 

}