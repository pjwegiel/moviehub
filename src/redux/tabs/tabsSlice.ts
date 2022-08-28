import { createSlice } from '@reduxjs/toolkit'

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        tab: 'Home',
    },
    reducers: {
        changeTab: (state, action) => (state.tab = action.payload),
    },
})

export const { changeTab } = tabsSlice.actions
export const tabsReducer = tabsSlice.reducer
