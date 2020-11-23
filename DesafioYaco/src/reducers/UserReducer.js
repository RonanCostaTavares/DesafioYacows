export const initialState = {
    name: '',
    car: [],
};


export const UserReducer = (state, action) => {

    switch (action.type) {
        case 'setNameAndCar': 
            return { ...state, name: action.payload.name, car: action.payload.car };
        break;
        default:
            return state;
    }

};