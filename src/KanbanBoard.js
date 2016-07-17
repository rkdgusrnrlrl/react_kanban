/**
 * Created by Administrator on 2016-07-10.
 */

import React, {Component} from 'react';
import List from './List'

class KanbanBoard extends Component {
	render () {
		return (
			<div className="app">
				<List id="todo" title="To do" cards={
				this.props.cards.filter((card) => card.status == "todo")
			}></List>
				<List id="in-progress" title="In Progress" cards={
				this.props.cards.filter((card) => card.status == "in-progress")
			} ></List>
			</div>
		)
	}
}

export default KanbanBoard;
