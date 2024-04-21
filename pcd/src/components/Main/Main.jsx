import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/Context.jsx";

const Main = () => {

    const { onSent , recentPrompt , showResult , loading,resultData,setInput,input} = useContext(Context);


    return (
        <div className="main">
            <div className="nav">
                <p>chat buddy</p>
                
            </div>
            <div className="main-container">

                {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello , buddy</span></p>
                    <p>How can i help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>asking about phising</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>need help on somthing</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>spacific information ?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>ai and cyber </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ? <div className="loader">
                            <hr />
                            <hr />
                            <hr />

                        </div>  
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
                }


                
                <div className="main-botton">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter what's in mind ?" />
                        <div>
                            
                        <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="botton-info">Though our chat buddy may provide accurate results, we're continuously evolving and striving for excellence. With ongoing development efforts, we're confident in reaching new heights
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Main