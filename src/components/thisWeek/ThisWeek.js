import React from 'react';


class ThisWeek extends React.Component {

    render(){

        if (this.props.weatherListWeek.length === 0){
            return null;
        } else {
            console.log('this.props in thisweek',this.props);
        }

        const weatherListWeek = this.props.weatherListWeek;
        const sourcesWeek = this.props.sourcesWeek;

        
        return(
            <div className = 'page-content'>
                {weatherListWeek[0].id}
            </div>
        );
    }


}


export default ThisWeek;