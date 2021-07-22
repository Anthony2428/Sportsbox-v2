import React from "react";
import Thead from "../Thead";
import Tfoot from "../Tfoot";

const Roster = ({Roster, sport}) => {
    let rosterListJsx;
    if (sport === "mlb") {
    rosterListJsx = Roster.map(player => {
        return (
            <tr key={player.PlayerID}>
                <td>{`#${player.Jersey}`}</td>
                <td>{`${player.FirstName} ${player.LastName}`}</td>
                <td>{`${player.BatHand}/${player.ThrowHand}`}</td>
                <td>{player.Position}</td>
            </tr>
            )
        })
    } else if (sport === "nfl") {
    rosterListJsx = Roster.map(player => {
            return (
                <tr key={player.PlayerID}>
                    <td>{`#${player.Number}`}</td>
                    <td>{`${player.FirstName} ${player.LastName}`}</td>
                    <td>{player.Position}</td>
                </tr>
                )
        })
    } else if (sport === "nhl") {
    rosterListJsx = Roster.map(player => {
            return (
                <tr key={player.PlayerID}>
                    <td>{`#${player.Jersey}`}</td>
                    <td>{`${player.FirstName} ${player.LastName}`}</td>
                    <td>{`${player.Shoots}`}</td>
                    <td>{player.Position}</td>
                </tr>
                )
        })
    } else {
    rosterListJsx = Roster.map(player => {
            return (
                <tr key={player.PlayerID}>
                    <td>{`#${player.Jersey}`}</td>
                    <td>{`${player.FirstName} ${player.LastName}`}</td>
                    <td>{player.Position}</td>
                </tr>
                )
        })
    }
    return (
        <div className="tile is-parent">
            <article className="tile is-child box">
                <div className="content">
                    <p className="title">Roster</p>
                    <div className="content">
                        <div className="column table-container is-full">
                            <table id="roster" className="table mr-0">
                                <Thead sport={sport} />
                                <tbody id="playerList">
                                    {rosterListJsx}
                                </tbody>
                                <Tfoot sport={sport} />
                            </table>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
};
export default Roster;