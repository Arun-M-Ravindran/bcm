/* eslint-disable eqeqeq */


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
  

function getMapingData(data) {
    console.log("DATA GOT: ", data);
    let payloadData = [];
    if(data.value == "Type1") {
        payloadData =  sankeyData1;
    } else if(data.value == "Type2") {
        payloadData = sankeyData2;
    } else {
        payloadData = sankeyData;
    }
    return {
        type: "GET_MAPING_DATA",
        payload: payloadData
    }
}

export { getMapingData }