import React, { Component, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMapingData } from '../../redux/actions/DataMapingAction';
import Chart from 'react-google-charts';
import Select from 'react-select'
import '../../css/datamaping.css';

import { useSelector } from 'react-redux'

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
    tooltip: { textStyle: { color: '#FF0000' }, showColorCode: true },
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

const options = [
  { value: 'Type1', label: 'Type 1' },
  { value: 'Type2', label: 'Type 2' },
  { value: 'Type3', label: 'Type 3' }
]

export default function DataMaping() {

  const mapingData = useSelector((state) => state.maping.data)
  const dispatch = useDispatch()
  const [option, setOption] = useState(options[0]);

  useEffect(() => {
    dispatch(getMapingData(option));
  }, [option]);

  const handleChangeData = (value) => {
    setOption(value);
  }

  return (
    <div>
      <h2 className='dm-c-b'>Data map</h2>
      <div className='dm-c-b dm-pt-s dm-pb-s'>
        <Select options={options}
          defaultValue={options[0]}
          className="select-box"
          onChange={handleChangeData} 
        />
      </div>
      <div className='chart-container'>
        <Chart
          height={'350px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={mapingData}
          rootProps={{ 'data-testid': '1' }}
          options={sankeyOptions}
        />
      </div>
    </div>
  )
}