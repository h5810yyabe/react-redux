//ActionのTypeはReducerでも使うため、定数化しておく
export const INCREMENT = "INCREMENT"

export const DECREMENT = "DECREMENT"

//Action Creator(Actionを返す関数)
export const increment = () => (
    //Action(JSのオブジェクト)
    {
       type: INCREMENT
    }
)


export const decrement = () => ({
    type: DECREMENT
})