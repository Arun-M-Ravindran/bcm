const initialState = {
    sankeyData: {
        testData: "Arun"
    }
};

const DataMapingReducer = (state = initialState, action) => {
    const data = action.payload;
    switch (action.type) {
        case "GET_MAPING_DATA":
            return {...state, data: data}
        default: return state
    }
}

export default DataMapingReducer;