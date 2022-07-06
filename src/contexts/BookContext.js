import React,{createContext,useState} from "react";

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    const [books, setBooks] = useState([
        {ad:'Var Mısın', id: 1},
        {ad:'Hayvan Çiftliği', id: 2},
        {ad:'Bir Ömür Nasıl Yaşanır', id: 3}
    ])
        return(
            <BookContext.Provider value={{books}}>
                {props.children}
            </BookContext.Provider>
        )
}

export default BookContextProvider