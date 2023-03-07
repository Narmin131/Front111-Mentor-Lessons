import React, { useState } from 'react'

const TopToBtn = () => {

    const [visible, setVisible] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    })


    const TopToScroll = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }

    return (
        <button className='btn btn-primary' style={{ position: 'fixed', right: '30px', bottom: '30px', display: visible ? 'block' : 'none' }} onClick={TopToScroll}>
            Top
        </button>
    )
}

export default TopToBtn