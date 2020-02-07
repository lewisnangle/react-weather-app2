import * as React from 'react';  
import PageHeader from '../page-header/PageHeader';  
import Navbar from '../navbar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

class App extends React.Component {  

    render() {  
        return (  
            <div>  
                <PageHeader/>
                <Router> 
                <Navbar/>
                <Switch>  
                    <Route path="/page2">  
                        <div className='page-content'>Page 2</div>  
                    </Route>  
                    <Route path="/page3">  
                        <div className='page-content'>Page 3</div>  
                    </Route>  
                    <Route path="/page4">  
                        <div className='page-content'>Page 4</div>  
                    </Route>  
                    <Route path="/">  
                        <div className='page-content'>Page 1</div>  
                    </Route>  
                </Switch>  
            </Router> 
            </div>  
        )  
    }  

} 

export default App;