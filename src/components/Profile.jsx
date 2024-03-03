import { firstAtom } from '../store/firstAtom';
import{useRecoilValue,useSetRecoilState} from "recoil"
import {useRef,useEffect} from 'react'
export default function Profile()
{
   
    const name =useRecoilValue(firstAtom); 
    const inputRef=useRef()
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const setName= useSetRecoilState(firstAtom);

return <div>
    <div>Profile Card</div>
    <input type="text" ref={inputRef} placeholder='Enter Name here' onChange={e=>setName(e.target.value)} ></input> 
    

    <div id="card">
        <section id="picture">
            <img src=""></img>
        </section>
        <p id="b">{name}</p>
        <p>Software Developer</p>
        <section id="stats">
            <div>
                <p id="b">Followers</p>
                <b>20K</b>
            </div>
            <div>
                <p id="b">Following</p>
                <b>24K</b>
            </div>
            <div>
                <p id="b">Awesomeness</p>
                <b>8.8</b>
            </div>
        </section>
    </div>


</div>
}