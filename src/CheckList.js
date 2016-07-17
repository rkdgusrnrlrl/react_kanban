/**
 * Created by Administrator on 2016-07-10.
 */
import React, {Component} from 'react';

class CheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((task) => {
			<li>
				<input type="checkbox" defaultChecked={task.done}/>
				{task.name}
				<a href="#" className="checklistt__task--remove"/>
			</li>
		})

		return (
			<div className="checklist">
				<ul>
					{tasks}
				</ul>
			</div>
		)
	}
}