import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Start from '../pages/MunchStart.js';


class App extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={Start} />
                        </div>
                    </Router>
                </div>
            </div>
            
        )
    }
}
export default App;
