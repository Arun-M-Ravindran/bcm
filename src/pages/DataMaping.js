import React, { Component, useState } from 'react';
import Chart from 'react-google-charts';
import Select from 'react-select'
import '../css/datamaping.css';

const options = [
  { value: 'Type 1', label: 'Type 1' },
  { value: 'Type 2', label: 'Type 2' },
  { value: 'Type 3', label: 'Type 3' }
]

var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

// Set chart options
var sankeyOptions = {
  height: 400,
  sankey: {
    node: {
      label: {
        fontName: 'Times-Roman',
        fontSize: 11,
        color: '#000',
      },
    },
    tooltip: {textStyle: {color: '#FF0000'}, showColorCode: true},
    interactivity: true, // Allows you to select nodes.
    labelPadding: 6,     // Horizontal distance between the label and the node.
    nodePadding: 10,     // Vertical distance between nodes.
    width: 5,            // Thickness of the node.
    link: {
      colorMode: 'source',
      fillOpacity: 0.8,
      colors: colors
    }
  }
};

const sankeyData1 = [
  ['From', 'To', 'Weight'],
  ['Service 1', 'Function 1', 0.5],
  ['Service 1', 'Function 2', 0.5],
  ['Service 1', 'Function 3', 0.5],
  ['Service 2', 'function 4', 0.5],
  ['Service 2', 'function 5', 0.5],
  ['Service 2', 'function 6', 0.5],
  ['Service 3', 'function 7', 0.5],
  ['Service 3', 'function 8', 0.5],
  ['Service 3', 'function 9', 0.5],
  ['Service 3', 'function 10', 0.5],
  ['Service 4', 'function 11', 0.5],
  ['Service 4', 'function 12', 0.5],
  ['Service 4', 'function 13', 0.5],
  ['Service 4', 'function 14', 0.5],
]

const sankeyData2 = [
  ['From', 'To', 'Weight'],
  ['Function 1', 'system 2', 1],
  ['Function 1', 'system 6', 1],
  ['Function 2', 'system 2', 1],
  ['Function 2', 'system 10', 1],
  ['Function 3', 'system 2', 1],
  ['function 4', 'system 5', 1],
  ['function 5', 'system 5', 1],
  ['function 6', 'system 5', 1],
  ['function 7', 'system 1', 1],
  ['function 8', 'system 2', 1],
  ['function 9', 'system 3', 1],
  ['function 10', 'system 4', 1],
  ['function 11', 'system 5', 1],
  ['function 12', 'system 6', 1],
  ['function 13', 'system 7', 1],
  ['function 14', 'system 8', 1],
]

const sankeyData = [
  ['From', 'To', 'Weight'],
  ['Service 1', 'Function 1', 0.1],
  ['Service 1', 'Function 2', 0.1],
  ['Service 1', 'Function 3', 0.1],
  ['Service 2', 'function 4', 0.1],
  ['Service 2', 'function 5', 0.1],
  ['Service 2', 'function 6', 0.1],
  ['Service 3', 'function 7', 0.1],
  ['Service 3', 'function 8', 0.1],
  ['Service 3', 'function 9', 0.1],
  ['Service 3', 'function 10', 0.1],
  ['Service 4', 'function 11', 0.1],
  ['Service 4', 'function 12', 0.1],
  ['Service 4', 'function 13', 0.1],
  ['Service 4', 'function 14', 0.1],
  ['Function 1', 'system 2', 0.2],
  ['Function 1', 'system 6', 0.2],
  ['Function 2', 'system 2', 0.2],
  ['Function 2', 'system 10', 0.2],
  ['Function 3', 'system 2', 0.2],
  ['function 4', 'system 5', 0.2],
  ['function 5', 'system 5', 0.2],
  ['function 6', 'system 5', 0.2],
  ['function 7', 'system 1', 0.2],
  ['function 8', 'system 2', 0.2],
  ['function 9', 'system 3', 0.2],
  ['function 10', 'system 4', 0.4],
  ['function 11', 'system 5', 0.4],
  ['function 12', 'system 6', 0.4],
  ['function 13', 'system 7', 0.4],
  ['function 14', 'system 8', 0.4],
  ['system 2', 'system 10', 0.4],
  ['system 1', 'system owner 1', 0.1],
  ['system 2', 'system owner 2', 0.1],
  ['system 3', 'system owner 3', 0.1],
  ['system 4', 'system owner 1', 0.1],
  ['system 6', 'system owner 2', 0.1],
  ['system 7', 'system owner 1', 0.1],
  ['system 8', 'system owner 3', 0.1],
  ['system 10', 'system owner 3', 0.1],
  ['system 5', 'system owner 3', 0.1],
]

export default function DataMaping() {

  const [graphData, setGraphData] = useState(sankeyData);

  const handleChangeData = (value) => {
    console.log(value.value)
    if (value.value == "Type 1") {
      setGraphData(sankeyData1);
    } else if (value.value == "Type 2") {
      setGraphData(sankeyData2);
    } else {
      setGraphData(sankeyData);
    }
  }

  return (
    <div>
      <h2 className='dm-c-b'>Data map</h2>
      <div className='dm-c-b dm-pt-s dm-pb-s'>
        <Select options={options} className="select-box" onChange={handleChangeData} />
      </div>
      <div className='chart-container'>
        <Chart
          height={'350px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={graphData}
          rootProps={{ 'data-testid': '1' }}
          options={sankeyOptions}
        />
      </div>
    </div>
  )
}