import css from "../styles/Header.module.css"
import Image from "next/image"
import Logo from "../assets/Logo.png"
import {UilShoppingBag} from '@iconscout/react-unicons'
export default function Header() {
    return(
        <div className={css.Header}>
        {/*Logo side*/}
        <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
         <span>MEDO</span>
        </div>

        {/*Menu side*/}

        <ul className={css.menu}>
         <li>Home</li>
         <li>Medicines</li>
         <li>Contact</li>
        </ul>

         {/*right side*/}
         <div className={css.rightside}>
          <div className={css.cart}>
           <UilShoppingBag/>
          </div>
         </div>
        </div>
    )
    
};
