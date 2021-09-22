import * as ActionType from "../constants";

const handleOnClickAction = (soGhe, gia) => {
    return {
        type: ActionType.CLICK_CHAIR,
        payload: { soGhe, gia },
    };
};

const handleDeleteChairAction = (soGhe) => {
    return {
        type: ActionType.DELETE_CHAIR,
        payload: soGhe,
    };
};

export { handleOnClickAction, handleDeleteChairAction };
