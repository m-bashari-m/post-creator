import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = {
  id: string;
  name: string;
};

export type UserSliceType = User[];

const initialState: UserSliceType = [
  { id: "0", name: "Mojtaba Bashari" },
  { id: "1", name: "Alireza Akbari" },
  { id: "2", name: "Rasoul Zareiee" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersSelector = (state: RootState) => state.users;

// export const {} = userSlice.actions;
export default userSlice.reducer;
