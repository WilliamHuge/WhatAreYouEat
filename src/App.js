import React, {Component} from 'react';
import { Row, Col, DatePicker, Button } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css'
import './App.css';
import TextArea from 'antd/lib/input/TextArea';

// 得到格式为yy-mm-dd格式的今天的日期
const today = `${new Date().getFullYear()}-${new Date().getMonth()+1>=10?new Date().getMonth()+1:'0'+(new Date().getMonth()+1)}-${new Date().getDate()>=10?new Date().getDate():'0'+new Date().getDate()}`;
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			breakfast: '',
			lunch: '',
			dinner: '',
			date: today
		}
	}
	getDay(date,datestring){
		this.setState({
			date: datestring
		})
		return datestring;
	}
	setMeal(meal,e){
		const food = e.target.value;
		if(meal === 'breakfast'){
			this.setState({
				breakfast: food
			})
		}else if(meal === 'lunch'){
			this.setState({
				lunch: food
			})
		}else if(meal === 'dinner'){
			this.setState({
				dinner: food
			})
		}
	}
	record(){
		const { breakfast, lunch, dinner } = this.state;
		const msg = JSON.stringify({ breakfast, lunch, dinner });
		localStorage.setItem(this.state.date, msg);
	}
    render() {
        return (
            <div className="App">
				<h1>无标题</h1>
				<hr/><br/>
				<Row>
					<Col span={8}>
						<div className="input">
							<DatePicker className="date-picker" autoFocus defaultValue={moment()} onChange={this.getDay.bind(this)}/>
							<br/>
							<div className="item">
								<div>早上</div>
								<TextArea onChange={this.setMeal.bind(this,'breakfast')} value={this.state.breakfast} />
							</div>
							<div className="item">
								<div>中午</div>
								<TextArea onChange={this.setMeal.bind(this,'lunch')} value={this.state.lunch} />
							</div>
							<div className="item">
								<div>晚上</div>
								<TextArea onChange={this.setMeal.bind(this,'dinner')} value={this.state.dinner} />
							</div>

							<Button style={{marginTop: '15px'}} type="primary" block onClick={this.record.bind(this)}>记录</Button>
						</div>
					</Col>
					<Col span={16}>
						<div className="output">

						</div>
					</Col>
				</Row>
			</div>
        )
    }
}

export default App;