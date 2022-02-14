import { Card } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../redux/slices/weatherSlices";

export default function CityInfo(){
// const [city, setCity] = useState('Tel Aviv');
const [isFav, setFav] = useState(false);
useEffect(() => {
    if(localStorage.getItem(`${city}`) != null){
        setFav(true);
    } 
}, )

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchWeatherAction(city));
}, []);

const state = useSelector(state => state);
const { weather, city, error } = state;

    return(
        <div className='cityInfo'>
            <div className='cityInfo__title'>
                <h1>{city}</h1>
                <h2>{weather}</h2>
                {/* {isFav ? <FavoriteIcon/> : <FavoriteBorderIcon/>} */}
            </div>
            {/* {futureForecast.map((day) => {
                <Card>
                    <CardHeader>{day.name}</CardHeader>
                    <CardContent>{day.temperature}</CardContent>
                </Card>
            })} */}
        </div>
    )
}