import { INCREMENT, DECREMENT } from './action';
import { FETCH_TODOS } from './todo/actions/todo.action';
import { ITodo } from './shared/models/todo.interface';


export interface IAppStore {
    counter?: number,
    todos?: ITodo[]
    // person: {
    //     id: number,
    //     name: string
    // }
}

export const INIT_STATE: IAppStore = {
    counter: 5,
    todos: []

    // person: {
    //     id: 0,
    //     name: "ahmed"
    // }
}








export const rootReducer = (state: IAppStore = INIT_STATE, action): IAppStore => {

    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 };

        case DECREMENT:
            return { counter: state.counter - 1 };

        case FETCH_TODOS:
            let toodoArr: ITodo[] = [
                { _id: '1', title: 'test1', isCompleted: false },
                { _id: '2', title: 'test2', isCompleted: false },
                { _id: '3', title: 'test3', isCompleted: false }
            ];
            return { todos: toodoArr };

        default:
            return state;
    }

}
