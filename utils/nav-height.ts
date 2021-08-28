import { useEffect, useState } from "react";

export const useNavHeight = () => {
    const [navHeight, setNavHeight] = useState<number>(0);

    useEffect(() => {
        const nav :  HTMLElement | null = document.getElementById("navigation") 
        if(nav) {
            setNavHeight(nav.offsetHeight)
        }
       },[])

       return {
           navHeight
       }
}