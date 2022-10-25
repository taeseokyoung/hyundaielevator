import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const Pop = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 100vh;
background: rgba(0,0,0,0.5);
z-index:99999;

&.on {
    display: none;
}
button {
    float: right;
}
.popbox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
}
`
const Popup = () => {
    const [TG, setTG] = useState();
    const [cookie, setCookie] = useCookies();
    const pop = useRef(null);

    const whellstop = e => {
        e.preventDefault();
    }

    useEffect(() => {
        pop.current.addEventListener('wheel', whellstop);
        return () => {
            pop.current.removeEventListener('wheel', whellstop);
        }
    }, [])

    let after = new Date();

    return (

        <Pop className={(cookie.pop || TG) && 'on'} ref={pop}>
            <div className="popbox">
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_news02.jpg'} alt="" />
                </div>
                <div className="bottom">
                    <input type='checkbox' onChange={
                        () => {
                            after.setMinutes(after.getMinutes() + 1)
                            setCookie('pop', 'pop', { path: '/', expires: after })
                        }
                    } />
                    오늘 하루 열지 않기.
                    <button onClick={() => setTG(true)}>Close</button>
                </div>
            </div>

        </Pop>
    )
}

export default Popup;