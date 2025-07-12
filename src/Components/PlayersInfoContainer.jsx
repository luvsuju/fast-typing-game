import "../StyleSheets/PlayersInfoContainer.css";

import { useState } from "react";
import {
  addPlayers,
  setAssignedProfile,
} from "../redux/app/fetures/playersSlice";
import { getMyProfile } from "../utils/multiplayerFunctions";
import { useDispatch, useSelector } from "react-redux";

import Performance from "../Assets/performance.svg";
import { socket } from "../customHooks/useSetupHook";
import { useParams } from "react-router-dom";
import useSocketroom from "../customHooks/useSocketroom";

const PlayersInfoContainer = () => {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const assignProfile = useSelector(
    (state) => state.rootReducer.playersInfo.assignProfile
  );
  const [start, setStart] = useState(false);
  const playerResult = useSelector(
    (state) => state.rootReducer.playersInfo.scoreRecord
  );
  let count = 0;
  const dispatch = useDispatch();
  socket.on("room_members", (data) => {
    setPlayers(data.members);
    dispatch(addPlayers({ players: data?.members }));
    dispatch(setAssignedProfile({ data: data.assignedProfiles }));
  });

  function convertToSocketId(str) {
    const result = str.replace(new RegExp("room", "g"), ""); 
    return result;
  }
  const startGame = (roomId) => {
    useSocketroom.startGame(roomId);
  };
  socket.on("start", (status) => {
    switch (status.start) {
      case true:
        setStart(true);
        setTimeout(() => {
          setStart(false);
        }, 3000);
        break;
    }
  });

  return (
    <>
      {start && (
        <div className="start-countdown">
          <p className="count">starting...</p>
        </div>
      )}
      <div className="players-stat-container">
        {players.map((elm) => (
          <div
            className={
              elm === socket.id ? "user-container-active" : "user-container"
            }
          >
            <div className="player-stat-card">
              <div className="player-profile-conatainer">
                <img src={getMyProfile(assignProfile, elm)} alt="" />
              </div>
              <div className="player-stat-wpm-conatainer">
                <img src={Performance} alt="" />
                <p>
                  {playerResult[elm] ? playerResult[elm] : 0} <span>wpm</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default PlayersInfoContainer;
