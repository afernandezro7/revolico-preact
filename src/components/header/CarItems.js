import { h } from 'preact';
import { useContext, useEffect, useLayoutEffect, useRef } from 'preact/hooks';
import { BsCart3 } from "react-icons/bs";
import { CarContext } from '../../hooks/carContext';
import style from './style.css';
import { gsap } from 'gsap'

export const CarItems = () => {

    const { state:{count} } = useContext(CarContext)
    const countRef = useRef(null)
    const tl = useRef(gsap.timeline())

    useLayoutEffect(() => {
        tl.current.to(countRef.current, {y: -10 , duration: 0.2 , ease: 'ease.out'})
                  .to(countRef.current, {y: 0 , duration: 1 , ease: 'bounce.out'})
                  .pause();
    }, [])

    useEffect(() => {
       tl.current.play(0)
    }, [count])

    return (
        <button type="button" class={style.btn}>
            <BsCart3 /><span ref={countRef} class={style.badge}>{count}</span>
        </button>
    );
}