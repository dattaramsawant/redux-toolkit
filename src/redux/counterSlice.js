import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    value: 0
}

export const incrementCall=createAsyncThunk(
    'counter/incrementCount',
    ((data)=>{
        const response = data * 10
        return response;
    })
)

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment:(state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value-=1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementCall.fulfilled,(state,action)=>{
                console.log(state,'state')
                console.log(action,'action')
                state.value = action.payload
            })
    }
})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer