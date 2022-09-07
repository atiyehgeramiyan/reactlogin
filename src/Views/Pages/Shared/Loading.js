
import {Spinner} from 'react-bootstrap'

const Loading = () => {

    return <div style={{ zIndex: 100000000, position: "fixed", top: 0, width: window.screen.width, height: window.screen.height }}>
        <div className="bg-dark" style={{ zIndex: 100000001, position: "fixed", opacity: 0.5, top: 0, width: window.screen.width, height: window.screen.height }}></div>
        <div style={{ marginTop: window.screen.availHeight / 3, opacity: 1, marginRight: window.screen.availWidth / 3 }}>
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    </div>

}

export default Loading;