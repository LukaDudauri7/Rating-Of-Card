import './Selected.css'
import {useLocation} from "react-router";
function Selected(){
    const location = useLocation();
    return (
        <div>
            <div className="Next-Rectangle">
                <div className="box-of-tnx">
                    <div className="thank-you-img"></div>
                </div>
                <div className="box-of-number">
                    <div className="box-of-selected">
                        <div className="text-of-selected">You selected {location.hash.slice(1)} of 5</div>
                    </div>
                </div>
                <div className="box-of-header">
                    <div className="tnx-header-text">Thank You!</div>
                </div>
                <div className="box-of-text">
                    <div className="tnx-text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
                </div>
            </div>
        </div>
    )
}
export default Selected