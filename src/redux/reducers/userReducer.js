import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import db, { auth } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const INITIAL_STATE = {
    user:null,
    loading:false
}

export const createUserAsync = createAsyncThunk(
    "user/createUser",
    async (values, thunkAPI) => {
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
            console.log("signed up successfully.")
            await updateProfile(res.user, {
                displayName: values.name
            });
            const currentUser = {
                name: res.user.displayName,
                email: res.user.email,
                password:values.pass,
            }
            const userDocRef = doc(db , "users" , currentUser.email);
            setDoc(userDocRef , currentUser);
            thunkAPI.dispatch(setUser(currentUser));
        }).catch((err) => {
            console.log(err);
        })
    }
)

// Sign In
export const logInAsync = createAsyncThunk(
    "user/login",
    async (values, thunkAPI) => {
        await signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
            console.log('signed in successfully');
            const currentUser = {
                name: res.user.displayName,
                email: res.user.email,
                password:values.pass,
            }
            thunkAPI.dispatch(setUser(currentUser));
        })
        .catch((err) => {
            console.log(err);
        })
    }
)

// Sign in with google
export const signInWithGoogle = createAsyncThunk(
    "user/signInWithGoogle",
    async (arg, thunkAPI) => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        .then((res) => {
            const currentUser = {
                name: res.user.displayName,
                email: res.user.email
            }
            thunkAPI.dispatch(setUser(currentUser));
        }).catch((err) => {
            console.log(err);
        })
    }
)

// Sign out
export const logOutAsync = createAsyncThunk(
    'user/logOut',
    async (arg, thunkAPI) => {
        signOut(auth)
        .then(() => {
            console.log("signed out successfully ! ");
            thunkAPI.dispatch(setUser(null));
        }).catch((err) => {
            console.log(err);
        })
    }
)

const userSlice = createSlice({
    name:'userInfo',
    initialState:INITIAL_STATE,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const userReducer = userSlice.reducer;
export const { setUser, setData } = userSlice.actions;
export const userSelector = (state) => state.userReducer.user;
