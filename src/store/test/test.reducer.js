import { TEST } from './test.types';

const INITIAL_STATE = {
    test: 'test',
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case TEST:
            return {

                ...state,
                count: "Test Updated!",

            };

        default:
            return state;

    }

};

export default reducer;