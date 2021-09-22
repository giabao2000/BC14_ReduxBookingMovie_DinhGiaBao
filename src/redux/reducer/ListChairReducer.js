import * as ActionType from "../constants";

const initialState = {
    listChairSelected: [],
};

const listChairReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CLICK_CHAIR: {
            // copy arr listChairSelected của state
            let listChairSelected = [...state.listChairSelected];

            const index = listChairSelected.findIndex((chair) => {
                return chair.soGhe === action.payload.soGhe;
            });

            // Nếu ghế đó đã dc thêm vào listChairSelected
            // thì remove chair
            // vì lúc này người dùng đã click lần thứ 2
            if (index === -1) {
                // Add chair to listChairSelected
                listChairSelected.push(action.payload);
            } else {
                // Romove chair from listChairSelected
                listChairSelected.splice(index, index + 1);
            }

            state.listChairSelected = listChairSelected;

            return { ...state };
        }

        case ActionType.DELETE_CHAIR: {
            // copy arr listChairSelected của state
            let listChairSelected = [...state.listChairSelected];

            const index = listChairSelected.findIndex((chair) => {
                return chair.soGhe === action.payload;
            });

            if (index !== -1) {
                // Remove chair from listChairSelected
                listChairSelected.splice(index, index + 1);
            }

            state.listChairSelected = listChairSelected;

            return { ...state };
        }

        default:
            return { ...state };
    }
};

export default listChairReducer;
