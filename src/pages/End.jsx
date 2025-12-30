import '../styles/Progress.css'

function Progress() {
    return (
        <>
            <main className="Progress">
                <img className="Progress-img" src="Progress.png"></img>
            </main>

            <section className="Progress-Content">
                <p>기기가 입수하기 괜찮은지 판단하고 있습니다.<br></br>잠시만 기다려주세요.</p>
            </section>

            <div>
                <button
                    className="Progress-Btn"
                    onClick={() => navigate('/end')}
                >
                    측정 끝내기
                </button>
            </div>
        </>
    )
}

export default Progress