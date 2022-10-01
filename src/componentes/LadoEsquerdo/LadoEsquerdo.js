import './LadoEsquerdo.css'
import { DonutLarge } from '@material-ui/icons'
import { Chat } from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons'
import { Search } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import ChatItem from '../ChatItem/ChatItem'

export default function LadoEsquerdo(){
    const [chat, setchat] = useState([{}, {}, {}])
    return(
        <div className='lado-esquerdo'>
            <header>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar'></img>
                <div className='buttons'>
                    <div className='botao'>
                        <DonutLarge style={{color:"#919191"}}></DonutLarge>
                    </div>
                    <div className='botao'>
                        <Chat style={{color:"#919191"}}></Chat>
                    </div>
                    <div className='botao'>
                        <MoreVert style={{color:"#919191"}}></MoreVert>
                    </div>
                </div>
            </header>
            <div className='busca'>
                <div className='input'>
                    <Search style={{color:"#919191"}} fontSize='small'></Search>
                    <input type='search' placeholder='Procurar uma nova conversa'></input>
                </div>
            </div>
            <div className='chatlist'>
                {chat.map((item, index) => (
                    <ChatItem key={index}></ChatItem>
                ))}
            </div>
        </div>
    )
}