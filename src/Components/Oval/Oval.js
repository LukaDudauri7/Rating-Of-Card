import './Oval.css'
import React, {useState} from 'react';

function Ovals({index, passNumber}) {

    const [active, setActive] = useState(false);
    const handleClick = event => {
        setActive(current => !current)
    }
    return (
        <div className='Oval-buttons'>
            {index.map((i) => (
                <div key={i}
                    className={`Page ${active == i && 'active'}`}
                    onClick={ () => {setActive(i)
                        passNumber(i)
                    }
                }
                    >{i}
                </div>
            ))}
        </div>
    )
}
export default Ovals;