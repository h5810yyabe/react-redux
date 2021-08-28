//reducers/index.jsではアプリケーション内に存在する全てのReducerを結合する
import {combineReducers} from "redux";
import count from "./count"

export default combineReducers({ count })

//複数のreducerを結合する場合
//export default combineReducers({ foo, bar, baz })