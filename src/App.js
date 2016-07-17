/**
 * Created by Administrator on 2016-07-10.
 */


import React from 'react';
import ReactDom from 'react-dom';

import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "react study",
		description: "react study",
		color : '#BD8D31',
		status: "in-progress",
		tasks: [
			{
				id: 1,
				name: "칸반 타이핑",
				done: false
			},
			{
				id: 2,
				name: "2장 자료 준비",
				done: true
			}
		]
	},
	{
		id: 2,
		title: "책 읽기",
		description: "**오베**를 읽자.",
		color : '#3A7E28',
		status: "todo",
		tasks: [],
	},
	{
		id: 3,
		title: "짐 싸놓기",
		description: "언넝. 후딱",
		color : '#3A7E28',
		status: "todo",
		tasks: []
	},
	{
		id: 4,
		title: "민방위 일자 알아보기",
		description: "정말 귀찮쿤!",
		color : '#3A7E28',
		status: "todo",
		tasks: []
	}

];

ReactDom.render(<KanbanBoard cards={cardsList}/>, document.getElementById('root'));