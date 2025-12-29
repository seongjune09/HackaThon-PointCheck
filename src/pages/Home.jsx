import { useState } from 'react'
import '../styles/Home.css'



function Home() {

    return (
        <>
            <main className="Main-Title">
                <p className = "Title">Point Check ✔️</p>
            </main>

            <div>
                <button className="Check-Btn">체크하러가기</button>
            </div>
            <div>
                <button className="Help-Btn"><img className="circle-questions" src="circle-questions.png" />도움말</button>
            </div>

        </>
    )
}
export default Home
