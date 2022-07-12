import { createReducer } from '@reduxjs/toolkit'
import { counter } from '../actions'

interface I_ApplicationState {
    readonly value: number
}

export const initialStata: I_ApplicationState = {
    value: 0
}

export default createReducer(initialStata, (builder) => {
    builder
        .addCase(counter, (state, action) => {
            state.value = state.value + action.payload.value
        })
})