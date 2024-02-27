
export default function ModalComponent({id, header, body, footer, onclose}){
    return(
        <div id={id || 'ModalComponent'} className="Modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onclose} className="close-modal-icon">&times;</span>
                    <h2>{header ? header : 'Header'}</h2>
                </div>
                <div className="body">
                    {
                        body ? body : <div><p>This is modal body</p></div>
                    }
                </div>
                <div className="footer">
                    {
                        footer ? footer : <h2>Footer Body</h2>
                    }
                </div>
            </div>
        </div>
    );
}