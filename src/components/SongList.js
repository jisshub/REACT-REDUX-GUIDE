import React from 'react'
import { connect } from 'react-redux'

export default function SongList() {
  return (
    <div>
        <h1>Song List</h1>
    </div>
  ) 
}

connect()(SongList);