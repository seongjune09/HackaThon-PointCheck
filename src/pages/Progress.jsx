import '../styles/Progress.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loading from '../Loading/Loading'

function Progress() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const handleStart = () => {
        setIsLoading(true)

        setTimeout(() => {
            navigate('/progress1')
        }, 2000)
    }

    return (
        <>
            <main className={`Progress ${isLoading ? 'blur' : ''}`}>
                <img className="Progress-img" src="Progress.png" />
            </main>

            <section className={`Progress-Content ${isLoading ? 'blur' : ''}`}>
                <p>
                    위치가 정확하다면<br />
                    시작버튼을 눌러주세요
                </p>
            </section>

            <div className={isLoading ? 'blur' : ''}>
                <button
                    className="Progress-Btn"
                    onClick={handleStart}
                    disabled={isLoading}
                >
                    측정 시작하기
                </button>
            </div>

            {isLoading && <Loading message="기기 구동중.." />}
            
        </>
    )
}

export default Progress