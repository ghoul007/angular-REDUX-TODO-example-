import { INCREMENT , DECREMENT } from './action';


export interface IAppStore {
    counter: number
    // person: {
    //     id: number,
    //     name: string
    // }
}

export const INIT_STATE: IAppStore = {
    counter: 5

    // person: {
    //     id: 0,
    //     name: "ahmed"
    // }
}








export const rootReducer = (state: IAppStore = INIT_STATE, action): IAppStore => {

    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };

        case  DECREMENT :
            return { counter: state.counter - 1 };

        default:
            return state;
    }

}
