import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { RoomCode } from '../../components/RoomCode/RoomCode';

import './styles.scss';

function Room() {
    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code="-MvoX6TS2zESgAzyrKyL"/>
                </div>
            </header>

            <main className="main-content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>

                <form>
                    <textarea 
                        placeholder="Escreva sua pergunta aqui."
                    />
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
                        <DefaultButton type="submit">Enviar pergunta</DefaultButton>
                    </div>
                </form>
            </main>
        </div>
    );
};

export { Room };