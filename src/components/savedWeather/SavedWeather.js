import React from 'react';
import {Image,Card,Icon,Button} from 'semantic-ui-react'


class SavedWeather extends React.Component {

    state = {SavedWeather:[]};

    removeFromListOfObjects(id,list){
        //Remove given entity from list
        for(var i = 0; i < list.length; i++){
            if(list[i].id === id){
                list.splice(i,1)
            }
        }
        this.setState({SavedWeather:list})
        }

    getAllSavedWeather(){
        fetch('http://localhost:8080/weatherEntity')
        .then(response => 
            response.json())
        .then((myJson) => {
            this.setState({SavedWeather:myJson})
            console.log("Saved weather!" + JSON.stringify(myJson))
        });
    }

    componentDidMount(){
        console.log("SavedWeather has mounted.")
        this.getAllSavedWeather();
    }

    deleteWeather(id){
        fetch("http://localhost:8080/weatherEntities/"+id, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'DELETE', // 'GET', 'PUT', 'DELETE', etc.
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
          })
          .then(()=>{
              this.removeFromListOfObjects(id,this.state.SavedWeather)
            })
    
        
          
    }

    render(){

        const savedWeather = (SavedWeather) => SavedWeather.map((item,index) => (
            <div className='inside_weather_item'>
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
              <Button onClick={()=>{this.deleteWeather(item.id)}}>Delete</Button>
              </Card.Content>
            </Card>
            </div>
          ))
        return(
            <div className='page-content'>
                    <h3>Displaying your saved weather</h3>
                <div className = 'weather_item'>
                    {savedWeather(this.state.SavedWeather)}
                </div>
            </div>
        );
    }
}



export default SavedWeather;