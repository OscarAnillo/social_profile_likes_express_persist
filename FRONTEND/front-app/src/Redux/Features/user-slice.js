import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    posts: []
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if(post._id === action.payload._id){
                    return action.payload
                }
                return post
            })
            state.posts = updatedPosts;
        }
    }
})

export const { setUser, setPosts, setPost } = userSlice.actions;
export default userSlice.reducer;