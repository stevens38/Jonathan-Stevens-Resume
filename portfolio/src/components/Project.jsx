import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
    return (
        <div class="container">
            <img src={props.image} alt={props.title} class="image" />
            <div class="middle">
                <div class="text">{props.title}</div>
            </div>
        </div>
    );
}

    