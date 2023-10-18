import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Features/user-slice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})