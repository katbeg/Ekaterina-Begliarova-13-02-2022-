import Search from '../../images/search.png'
import '../Home/Home.scss';
import CityInfo from '../CityInfo/CityInfo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../redux/slices/weatherSlices";

export default function Home(){
    const [city, setCity] = useState('Tel Aviv');

    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(fetchWeatherAction(city));
    }, []);

    const state = useSelector(state => state);
    const { weather, loading, error } = state;
    console.log(state);
    return(
        <div className='homeContainer'>
            <div className='homeContainer__search'>
                <input 
                onClick={() => dispatch(fetchWeatherAction(city))}
                value={city}
                onChange={e => setCity(e.target.value)}
                className='homeContainer__search__input' 
                placeholder='Enter location'/>
                <img className='homeContainer__search__icon' src={Search} alt='Search icon' />
            </div>
            <div className='homeContainer__info'>
                <CityInfo/>
            </div>
        </div>
    )
}