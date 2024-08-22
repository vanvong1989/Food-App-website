import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>
       Choose from a diverse menu featuring a delectable array of difshes craft with the finges ingredient and
       culinary. Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time 
       </p>
       <div className='explore-menu-list'>
            {menu_list.map((item, index) =>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className='explore-menu-list-item'>
                       <img className={category===item.menu_name?"active":null} src={item.menu_image} alt='' />
                       <p className={category===item.menu_name?"activetext":null} >{item.menu_name}</p>
                    </div>
                )
            })}
       </div>
       <hr />
        </div>
  )
}

export default ExploreMenu