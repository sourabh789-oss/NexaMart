import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';//for to know locomotiveScroll page is change now give the scrolling effect on this new content or new page  


const useLocoScroll = (start = true) => {//when we make custom hooks so far react ko samajnae ke liye use as a prefix use krna parta ha function bnate time name mein 
    
    //for give scrolling effect when we change the route then apply on a new page 
    const location=useLocation();//give our current route location 
    const scrollRef=useRef(null);//for detech scroll value 


    useEffect(() => {

        if (!start) {
            return;
        }

        const root = document.querySelector('.app');

        console.log(root);


        if (!root) {//if this element nahi ha to kuch nahi hona ciye so return 
            return;

        }

         scrollRef.current= new LocomotiveScroll({
            el: root,
            smooth: true,
            lerp:0.08
        })

        const handlesize = () => scrollRef.current?.update();

        window.addEventListener("resize", handlesize);

        return () => {
            scrollRef.current?.destroy();
            scrollRef.current=null;//memory cleanup 
            window.removeEventListener("resize", handlesize);

        };
    }, [start]);


  useEffect(()=>{
     if(start && scrollRef.current){
         scrollRef.current.update();
         scrollRef.current.scrollTo(0);
     }
  },[location.pathname]);

  return scrollRef;//makes this hook reusable 

};


export default useLocoScroll;