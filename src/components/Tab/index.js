import React, { Children } from 'react';
import TabTitle from './Title';
import TabContent from './Content';

const Tab = ({ children, onClick, selected }) => {
	let Title, Content;

	if (Children.count(children) !== 2) throw new Error('Please pass a <TabTitle /> and a <TabContent /> to <Tab />s!');

	Children.forEach(children, child => {
		if (child.type === TabTitle) return Title = child;
		if (child.type === TabContent) return Content = child;

		throw new Error('Please pass a <TabTitle /> and a <TabContent /> to <Tab />s!');
	});

	if (!Title || !Content) {
		throw new Error('Please pass a <TabTitle /> and a <TabContent /> to <Tab />s!');
	}

	return (
		<div>
			<button onClick={onClick}>
				{Title}
			</button>
			{selected && Content}
		</div>
	)
}

export default Tab;
