/**
 * Created by freddyrondon on 4/8/16.
 */

import React from 'react'
import ReactDOM from 'react-dom';

import SmartRow from './SmartRow'

import './../css/bootstrap.css';
import './../css/font-awesome.css';
import './../css/base.css';

const app = document.getElementById("app");


export class App extends React.Component {
    render() {
        var jumbotronStyle = {
            background: '#ffffff',
            padding: '14px'
        };

        return (
            <div className="col-lg-12">
                <h2>Smart Row example</h2>
                <br />
                <SmartRow firstChildTabName="Jumbotron" secondChildTabName="Panel"
                          firstChildVisible={true}
                          secondChildVisible={true}>
                    <div className="jumbotron" style={jumbotronStyle}>
                        <h1>Hello, world!</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
                            attention to featured content or information.</p>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Panel heading</div>
                        <div className="panel-body">
                            <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean
                                lacinia
                                bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia
                                quam
                                venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </div>

                        <ul className="list-group">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </SmartRow>
            </div>

        );
    }
}

ReactDOM.render(<App/>, app);