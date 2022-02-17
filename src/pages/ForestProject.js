import logo from './33.jpg'

const ForestProject = () => {
    return (
        <div className='container'>
            <div className='information'>
                <a target='_blank' href='https://gorsko-kupane.netlify.app/#'>Forest</a>
                <br/>
                <a target='_blank' href='https://github.com/Plamen91Ivanov/Forest'>Git</a>
                <h3>Tech : <img className='img' src={logo} alt={logo}></img></h3>
            </div>
            <div className='description'>
             <p>Visualise some sorting and pathfinding algorithms</p>
            </div>
        </div>
    )
}

export default ForestProject