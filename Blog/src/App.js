import React, {Component} from 'react';
import AppBar from '../../packages/harryui/src/AppBar';
import Button from '../../packages/harryui/src/Button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default">
                    <Button classes='back'/>
                </AppBar>
            </div>
        )
    }
}

export default App;
