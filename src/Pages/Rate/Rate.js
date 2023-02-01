import Ovals from "../../Components/Oval/Oval";
import {Link} from "react-router-dom";
import './Rate.css'
import {click} from "@testing-library/user-event/dist/click";
import {useState} from "react";
function Rate(props) {
    const numberOfOvals = [1, 2, 3, 4, 5];
    const [clickedNumber, changeClickedNumber] = useState();
    const passedNumber = (num) => {changeClickedNumber(num)}
    
    return(
        <div className='Rectangle'>
            <div className='Oval'>
                <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>
            <div className='HeaderText'>How did we do?</div>
            <div className='text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
            <Ovals passNumber={passedNumber} index={numberOfOvals}></Ovals>
            <div className='submit-header'>
            <Link to={{ 
                pathname: `Selected#${clickedNumber}`
            }} 
                style={{textDecoration:'none'}}>
                <div className='submit'>Submit</div>
            </Link>
            </div>
        </div>
    )
}

export default Rate;