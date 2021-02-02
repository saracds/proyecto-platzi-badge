import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader'

export default function PageLoading(){

    return(
        <div className="PageLoading">
            <Loader/>
        </div>
    );
}