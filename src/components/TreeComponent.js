import React from 'react'
import Tree from 'react-tree-graph';

const TreeComponent = () => {

    const data = {
        name: 'Parent',
        children: [{
            name: 'Child One'
        }, 
        {
            name: 'Child Two'
        }]
    };

    return (
        <div>
            <Tree
	        data={data}
	height={200}
	width={200}
	svgProps={{
		transform: 'rotate(90)'
	}}/>
        </div>
    )
}

export default TreeComponent
