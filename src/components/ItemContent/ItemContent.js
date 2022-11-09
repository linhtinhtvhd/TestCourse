import './ItemContent.css'


function ItemContent({tittle='Lorem ipsum dolor sit amet',image}) {
    return (  <div className='ItemContent'>
        <div className='content-tittle'>{tittle}</div>
        <div className='content-inner'>
            <img src={image} className='content-img' alt='img'/>
            <p className='content-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
        </div>
    </div>);
}

export default ItemContent;