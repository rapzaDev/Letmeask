import React from 'react';

import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
    code: string;
}

function RoomCode({ code }: RoomCodeProps) {

    /**
     * @description copy the room code displayed on interface when the user
     * click on him.
     */
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code); 
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>{`Sala #${code}`}</span>
        </button>
    );
};

export { RoomCode };