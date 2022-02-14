import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const API_KEY = 'vCobKmJjxWFC3S2H1zWvaRaiUPjeqYCj';
const baseUrl = 'http://dataservice.accuweather.com/';

//action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${payload}`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: builder => {
    //pending
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;