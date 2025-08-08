import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.items.find(t => t.id === id)
      if(todo){
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const id  = action.payload;
      state.items =  state.items.filter(t => t.id != id)

    },
    editTodo:(state,action)=>{
      const {id,text} = action.payload;
      const todo  = state.items.find(t=> t.id == id)
      if(todo){
        todo.text = text
      }

    }
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
