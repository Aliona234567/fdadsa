import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.module.css"; // Исправлено: правильное имя файла
import { PiShoppingCart } from "react-icons/pi";
import Order from './peges/Order';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.prace))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>
        Сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
}
const showNothing = () => {
  return (
    <div className='emty'>
      <h2>Товаром нету</h2>
    </div>
  );
}

export default function Navbar(props) {
    let [cartOpen, setCertOpen] = useState(false)

  return (
    <header>
      <div className='qwe'>
    <nav>
      
        <Link to="/" className='logo'><svg className='logo1' width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.52849 13.0622L24.0753 1.37873C25.5825 0.521741 27.426 0.506655 28.9469 1.33887L50.3051 13.0254C51.9582 13.9299 52.9623 15.687 52.9025 17.5704L52.0905 43.1487C52.0344 44.9159 51.0492 46.522 49.4993 47.3729L28.9915 58.6321C27.4466 59.4803 25.5692 59.4525 24.0501 58.5589L3.4649 46.4499C1.93771 45.5516 1 43.9121 1 42.1403V17.4087C1 15.6106 1.96545 13.951 3.52849 13.0622Z" stroke="black"/>
<path d="M22.888 45.976C20.12 45.976 17.992 45.4 16.504 44.248C15.032 43.08 14.152 41.272 13.864 38.824C13.816 38.232 13.944 37.784 14.248 37.48C14.568 37.16 15.016 37 15.592 37C16.168 37 16.592 37.144 16.864 37.432C17.152 37.72 17.336 38.152 17.416 38.728C17.608 40.136 18.112 41.112 18.928 41.656C19.76 42.184 21.08 42.448 22.888 42.448H29.8C31.944 42.448 33.408 42.056 34.192 41.272C34.992 40.472 35.392 39.024 35.392 36.928C35.392 34.8 34.984 33.336 34.168 32.536C33.368 31.72 31.912 31.312 29.8 31.312H23.656C20.696 31.312 18.504 30.6 17.08 29.176C15.672 27.752 14.968 25.568 14.968 22.624C14.968 19.68 15.664 17.504 17.056 16.096C18.464 14.688 20.648 13.984 23.608 13.984H29.656C32.248 13.984 34.24 14.536 35.632 15.64C37.04 16.728 37.888 18.416 38.176 20.704C38.24 21.296 38.112 21.752 37.792 22.072C37.488 22.376 37.04 22.528 36.448 22.528C35.888 22.528 35.464 22.384 35.176 22.096C34.888 21.792 34.712 21.36 34.648 20.8C34.456 19.568 33.976 18.712 33.208 18.232C32.456 17.752 31.272 17.512 29.656 17.512H23.608C21.624 17.512 20.272 17.88 19.552 18.616C18.848 19.336 18.496 20.672 18.496 22.624C18.496 24.576 18.856 25.928 19.576 26.68C20.312 27.416 21.672 27.784 23.656 27.784H29.8C32.904 27.784 35.2 28.528 36.688 30.016C38.176 31.504 38.92 33.808 38.92 36.928C38.92 40.032 38.176 42.32 36.688 43.792C35.2 45.248 32.904 45.976 29.8 45.976H22.888Z" fill="black"/>
</svg>
Sugar</Link>
        <ul className='nav'>
          <li >              
              <PiShoppingCart onClick={() => setCertOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
          </li>
            <li>
                <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
                <NavLink to="/">Католог</NavLink>
            </li>
            <li>
                <NavLink to="/contsct">Контакты</NavLink>  

            </li>
        </ul>
    </nav>


{cartOpen && (
  <div className='shop-cart'>
    {props.orders.length > 0 ? showOrders(props) : showNothing()} {}
  </div>
)}

</div>
<div className='presentesion'>

</div>
</header>
)
}

