
import { createAction } from '@reduxjs/toolkit'

export const counter = createAction<{ value: number }>('counter/increment')