import logo from './33.jpg'

const DocInfoProject = () => {
    return (
        <div className='container'>
        <div className='information'>
            <a>Doc</a>
            <br/>
            <a target='_blank' href='https://github.com/Plamen91Ivanov/DoctorInformation'>Git</a>
            <h3>Tech : <img className='img' src={logo} alt={logo}></img></h3>
        </div>
        <div className='description'>
         <p>Visualise some sorting and pathfinding algorithms</p>
        </div>
    </div>
    )
}

export default DocInfoProject