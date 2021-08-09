import context from './context';
import {useRef} from 'react';

export default function (params) {
    const test = useRef(0);
    const zIndex1 = setTimeout(() => {
            test.current.style.zIndex = "2";
        }, 2700);
    
}