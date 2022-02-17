import logo from './33.jpg'

const ShopProject = () => {
    return (
        <div className='container'>
            <div className='information'>
                <a>Shop</a>
                <br/>
                <a target='_blank' href='https://github.com/Plamen91Ivanov/MyShop'>Git</a>
                <h3>Tech : <img className='img' src={logo} alt={logo}></img></h3>
            </div>
            <div className='description'>
             <p>Visualise some sorting and pathfinding algorithms</p>
            </div>
        </div>
    )
}

export default ShopProject