import '../styles/Loading.css'

function Loading({ message = '로딩 중...' }) {
    return (
        <div className="Loading-Overlay">
            <div className="square-loader">
                <img src="square-green.png" className="sq sq1" />
                <img src="square-yellow.png" className="sq sq2" />
                <img src="square-red.png" className="sq sq3" />
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Loading