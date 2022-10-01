import React from 'react'
import './ChatItem.css'

export default function ChatItem(){
    return(
        <div className='chatitem'>
            <img className='avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='chat'></img>
            <div className='chatlinhas'>
                <div className='chatlinha'>
                    <div className='name'>João gomes</div>
                    <div className='data'>10:40</div>
                </div>
                <div className='chatlinha'>
                    <div className='ultima'>
                        <p>Eai gay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}