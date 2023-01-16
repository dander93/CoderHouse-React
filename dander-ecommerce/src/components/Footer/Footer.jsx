import React from 'react';
import { ToastContainer } from 'react-toastify';

function Footer() {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                limit={2}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            <div className='footer d-none'></div>
        </>
    );
}

export default Footer;