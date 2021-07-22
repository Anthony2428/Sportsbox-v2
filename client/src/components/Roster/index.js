<<<<<<< HEAD
import React from "react";
// import RosterList from "../RosterList";
import Thead from "../Thead";
import Tfoot from "../Tfoot";

const Roster = ({Roster, sport}) => {
    console.log(Roster)
    let rosterListJsx;
    if (sport === "mlb") {
    rosterListJsx = Roster.map(player => {
        return (
            <tr>
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
                <tr>
                    <td>{`#${player.Number}`}</td>
                    <td>{`${player.FirstName} ${player.LastName}`}</td>
                    <td>{player.Position}</td>
                </tr>
                )
        })
    } else if (sport === "nhl") {
    rosterListJsx = Roster.map(player => {
            return (
                <tr>
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
                <tr>
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
=======
import React from "react";import Thead from "../Thead";import Tfoot from "../Tfoot";const Roster=({Roster,sport})=>{console.log(Roster)
    let rosterListJsx;if(sport==="MLB"){rosterListJsx=Roster.map(player=>{return(<tr><td>{`#${player.Jersey}`}</td><td>{`${player.FirstName} ${player.LastName}`}</td><td>{`${player.BatHand}/${player.ThrowHand}`}</td><td>{player.Position}</td></tr>)})}else if(sport==="NFL"){rosterListJsx=Roster.map(player=>{return(<tr><td>{`#${player.Number}`}</td><td>{`${player.FirstName} ${player.LastName}`}</td><td>{player.Position}</td></tr>)})}else if(sport==="NHL"){rosterListJsx=Roster.map(player=>{return(<tr><td>{`#${player.Jersey}`}</td><td>{`${player.FirstName} ${player.LastName}`}</td><td>{`${player.Shoots}`}</td><td>{player.Position}</td></tr>)})}else{rosterListJsx=Roster.map(player=>{return(<tr><td>{`#${player.Jersey}`}</td><td>{`${player.FirstName} ${player.LastName}`}</td><td>{player.Position}</td></tr>)})}
    return(<div className="tile is-parent"><article className="tile is-child box"><div className="content"><p className="title">Roster</p><div className="content"><div className="column table-container is-full"><table id="roster" className="table mr-0"><Thead sport={sport}/><tbody id="playerList">{rosterListJsx}</tbody><Tfoot sport={sport}/></table></div></div></div></article></div>)};export default Roster
>>>>>>> 09eceb2ec7c4877329cdcd3aaa9b0efe833ab6d9
