import React, {Component} from 'react';
import AppBar from '../../packages/harryui/src/AppBar';
import Button from '../../packages/harryui/src/Button';

let appBarClasses = {
    blue: true,
};

let btnClasses = {
    blue: true,
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default" classes={appBarClasses}>
                    <Button classes='back' classes={btnClasses}>
                        返回
                    </Button>
                </AppBar>
            </div>
        )
    }
}

export default App;
