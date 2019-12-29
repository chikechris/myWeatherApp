import {combineReducers} from "redux"
import { weatherInfo} from "./weatherReducer"

// combine reucers
const reducers = combineReducers({
  WeatherInfo: weatherInfo
})

export default reducers