import '../styles/Loading.css'

function Loading() {
    return (
        <div className="Loading-Overlay">
            <div className="spinner"></div>
            <p>기기 상태 확인 중...</p>
        </div>
    )
}

export default Loading