import { Card } from '@mui/material';
import { CardHeader, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';

export default function CityInfo({ cityName, currentTemp, futureForecast}){
const [isFav, setFav] = useState();
useEffect(() => {
    if(localStorage.getItem(`${cityName}`) != null){
        setFav(true);
    } 
}, )

    return(
        <div className='cityInfo'>
            <div className='cityInfo__title'>
                <h1>{cityName}</h1>
                <h2>{currentTemp}</h2>
                {isFav ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </div>
            {futureForecast.map((day) => {
                <Card>
                    <CardHeader>{day.name}</CardHeader>
                    <CardContent>{day.temperature}</CardContent>
                </Card>
            })}
        </div>
    )
}