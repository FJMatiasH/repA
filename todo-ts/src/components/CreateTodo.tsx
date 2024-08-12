import React, { useState } from "react"
import { TodoTitle } from "../types"

interface Props{
    onAddTodo: ({title}: TodoTitle )=> void
}
 
export const CreateTodo: React.FC<Props> = ({saveTodo}) =>{
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void =>{
        event.preventDefault()
        saveTodo({title: inputValue})
        setInputValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            className="new-todo"
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            placeholder="¿Que quieres hacer?"
            autoFocus
            />
        </form>
    )
}