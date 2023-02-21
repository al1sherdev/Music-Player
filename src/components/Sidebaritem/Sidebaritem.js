import React from 'react'
import { MdPlaylistAdd, MdPerson, MdStore } from 'react-icons/md'
import { IoMdAlbums, IoMdRadio, IoMdHeart } from 'react-icons/io'
import { IoLogoChrome } from 'react-icons/io'
import {TbLogin} from 'react-icons/tb' 
import './Sidebaritem.css'

const Sidebaritem = () => {
  return (
    <div className='sidebar_item'>
        <div className='title'>
            menu
        </div>
        <div className='item'>
            <MdPlaylistAdd  className='icon'/>
            <p>Playlist</p>
        </div>
        <div className='item'>
            <MdPerson className='icon'/>
            <p>Artists</p>
        </div>
        <div className='item'>
            <IoMdAlbums className='icon' />
            <p>Albums</p>
        </div>
        <div className='item'>
            <MdStore className='icon'/>
            <p>Store</p>
        </div>
        <div className='item'>
            <IoMdRadio className='icon'/>
            <p>Radio</p>
        </div>
        <div className='item'>
            <IoMdHeart className='icon'/>
            <p>For You</p>
        </div>
        <div className='item'>
            <IoLogoChrome className='icon'/>
            <p>Browse</p>
        </div>
        <div className='item'>
            <TbLogin className='icon'/>
            <p>Log Out</p>
        </div>
        
    </div>
  )
}

export default Sidebaritem