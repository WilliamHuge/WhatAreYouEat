import React from 'react';
import { Row, Col } from 'antd';
import Ipt from './components/Ipt';
import Opt from './components/Opt';
import 'antd/dist/antd.css'
import './App.css';

class App extends React.Component {
	
    render() {
        return (
            <div className="App">
				<h1>无标题</h1>
				<hr/><br/>
				<Row>
					<Col span={8}>
						<Ipt />
					</Col>
					<Col span={16}>
						<Opt />
					</Col>
				</Row>
			</div>
        )
    }
}

export default App;