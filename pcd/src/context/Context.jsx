import { createContext, useState } from "react";
import runChat from '../config/gemini.js';

export const Context = createContext() ;
const ContextProvider = (props) => {
    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [ prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const []

    const onSent = async (prompt) => {
       await runChat(prompt)
    }
    

    const ContextProvider= async(prompt) => {
        await runChat(prompt)
    }
    
    const contextValue = {

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
    
}
export default ContextProvider