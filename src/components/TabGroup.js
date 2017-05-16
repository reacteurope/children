import React, { Children, cloneElement } from 'react';
import Tab from './Tab';

class TabGroup extends React.Component {
	state = {
		selected: null,
	};

	selectTab = (i) => {
		this.setState({
			selected: i,
		});
	}

	renderChildren = () => {
		const { children } = this.props;
		const { selected } = this.state;
		return Children.map(children, (child, i) => {
			if (child.type !== Tab) throw new Error('Please only pass <Tab />s to a <TabGroup />.')
			return cloneElement(child, {
				selected: i === selected,
				onClick: () => this.selectTab(i)
			});
		});
	}

	render() {
		return (
			<div>{this.renderChildren()}</div>
		)
	}
}

export default TabGroup;
