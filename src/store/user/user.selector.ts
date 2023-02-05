import { createSelector } from "reselect";
import { RooteState } from "../store";
import { UserState } from "./user-reducer";

export const selectUserReducer = (state: RooteState): UserState => state.user 

export const selectCurrentUser  = createSelector(
    selectUserReducer,
    (user) => user.currentUser);