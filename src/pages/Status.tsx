import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status () {
    const [newAnswers, setNewAnswers] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido mesmo',
        'Parabens pelo trabalho'
    ])


    function createNewAnswers(event: FormEvent) {
        event.preventDefault()
        setAnswers([newAnswers, ...answers])
        setNewAnswers('')
    }

    function handleHotkeySubmit (event: KeyboardEvent) {
        if (event.key === 'Enter' && event.ctrlKey ) {
            setAnswers([newAnswers, ...answers])
            setNewAnswers('')
        }
    }


    return (
        <main className="status">
        <Header title="Tweet"/>

        <Tweet content ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero pariatur modi dolor non ab vel debitis illum. Iure, eos assumenda, vitae quo at ad quam libero voluptate sunt quod dignissimos!"/>

        <Separator />

        <form onSubmit={createNewAnswers} className="answer-tweet-form">
            <label htmlFor="tweet">
                <img src="https://github.com/Eriralf.png" alt="Eriralf" />
                <textarea 
                id="tweet" 
                placeholder="Tweet your answer"
                value={newAnswers}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                    setNewAnswers(event.target.value)
                }}
                
                />
            </label>
            <button type="submit">
                <PaperPlaneRight />
                <span>Answer</span>
            </button>
        </form>

       {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
        })}

    </main>
    )
}