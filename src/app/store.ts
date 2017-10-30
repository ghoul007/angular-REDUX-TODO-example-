import { FETCH_TODOS } from './todo/actions/todo.action';
import { ITodo } from './shared/models/todo.interface';
import { INCREMENT, DECREMENT, DELETE_TODOS, ADD_TODOS } from "./action";

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






export const rootReducer = (
    state: IAppStore = INIT_STATE,
    action
  ): IAppStore => {
    switch (action.type) {
      case INCREMENT:
        return Object.assign({}, state, { counter: state.counter + 1 });
      //   return { counter: state.counter + 1 };
  
      case DECREMENT:
        return Object.assign({}, state, { counter: state.counter - 1 });
      //   return { counter: state.counter - 1 };
  
      case FETCH_TODOS:
        let toodoArr: ITodo[] = [
          { _id: "1", title: "test1", isCompleted: false },
          { _id: "2", title: "test2", isCompleted: false },
          { _id: "3", title: "test3", isCompleted: false }
        ];
        return Object.assign({}, state, { todos: toodoArr });
      //   return tassign(state,  {todos: toodoArr})
      //   return { todos: toodoArr };
  
  
      case DELETE_TODOS:
        let t = state.todos.filter(a => a._id !== action.idItem);
        return Object.assign({}, state, { todos: t });
  
      case ADD_TODOS:
        let item = {
          _id: "4",
          title: action.newItem,
          isCompleted: false
        };
        return Object.assign({}, state, { todos: [...state.todos, item] });
      // return {todos: [...state.todos, item]};
  
      default:
        return state;
    }
  };
  