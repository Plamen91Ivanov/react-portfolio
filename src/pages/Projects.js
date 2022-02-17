import { Link, Route } from 'react-router-dom'

import AlgorithmVisualiser from './AlgorithmVisualiser'
import ForestProject from './ForestProject'
import DocInfoProject from './DocInfoProject'
import ShopProject from './ShopProject'

import './Projects.css'
import Card from '../components/UI/Card'

const Projects = () => {

    return(
        <section>
        <div className='boxes'>
            <div className='box'><Link className='project' to='/projects/AlgorithmVisualiser'><div tabindex="1" className='project-card'>Algorithm visualiser</div></Link></div>
            <div className='box'><Link className='project' to='/projects/DocInfoProject'><div tabindex="3" className='project-card'>DocInfo</div></Link></div>
            <div className='box'><Link className='project' to='/projects/ShopProject'><div  tabindex="4"className='project-card'>Shop</div></Link></div>
            <div className='box'><Link className='project' to='/projects/ForestProject'><div tabindex="2" className='project-card'>Forest</div></Link></div>
        </div>
        <div className='card-body'>
        <Route path='/projects/AlgorithmVisualiser'><Card><AlgorithmVisualiser/></Card></Route>
		<Route path='/projects/ForestProject'><Card><ForestProject/></Card></Route>
		<Route path='/projects/DocInfoProject'><Card><DocInfoProject/></Card></Route>
		<Route path='/projects/ShopProject'><Card><ShopProject/></Card></Route>
        </div>
        </section>
        //Route here mby !!! try
    )
}

export default Projects