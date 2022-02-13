import Search from '../../images/search.png'
import '../Home/Home.scss';
import CityInfo from '../CityInfo/CityInfo';

export default function Home(){
    return(
        <div className='homeContainer'>
            <div className='homeContainer__search'>
                <input className='homeContainer__search__input' placeholder='Enter location'/>
                <img className='homeContainer__search__icon' src={Search} alt='Search icon' />
            </div>
            <div className='homeContainer__info'>
                <CityInfo/>
            </div>
        </div>
    )
}