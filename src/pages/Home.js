import image from './33.jpg'

import './Home.css'

const Home = () => {

    return(
        <div className='home-card'>
            <div className='image-div'><img className='image' src={image} alt={image}></img></div>
            <div className='about'>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
                <p>
                    say something here .................................................
                </p>
            </div>
        </div>
    )
}

export default Home