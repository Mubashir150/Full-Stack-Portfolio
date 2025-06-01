import { useRef, useImperativeHandle, forwardRef } from 'react';





const Modal = forwardRef(function Modal({ title, description, image }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));

    return (
        <dialog id="dialog-box" ref={dialog}>
            <h2>{title}</h2>
            <img src={image}/>
            <p>{description}</p>
            <p>Live Link <a href='https://mega-project-elegant-wears.vercel.app/' >Click here</a></p>
            <form method='dialog'>
                <button>Close</button>
            </form>


        </dialog>
    );
});

export default Modal;