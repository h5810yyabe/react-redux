import { INCREMENT, DECREMENT } from "../actions";

//初期状態
const initialState = { value:0 }

//初期状態設定しておく
export default (state = initialState, action) => {
    //action.typeの内容に応じて値を返す
    switch (action.type){
        case INCREMENT:
            return {value: state.value+1};
        case DECREMENT:
            return {value: state.value-1};
        default:
            return state;
    }

}