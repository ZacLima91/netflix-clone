import { useEffect, useState } from "react";
import { Image } from "../Image";
import { BrowserHeaderComponents } from "./styles"
import logo from '../../assets/logo/netflix-logo.svg'
import { NavBrowser } from "../NavBrowser";


export const BrowserHeader = (props:{img: string | undefined})=>{
    const [headerColor, setHeaderColor] = useState('transparent');

    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setHeaderColor('black');
      } else {
        setHeaderColor('transparent');
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <BrowserHeaderComponents bg={headerColor}>
           <Image src={logo} alt="" width={100} height={40}/>
           <NavBrowser img={props.img}/>
        </BrowserHeaderComponents>
    )
}