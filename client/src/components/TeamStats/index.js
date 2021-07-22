import React from "react";
import Col from "../Col";
import LogoTile from "../LogoTile";

const TeamStats = ({Team, sport}) => {
    if (sport === "mlb") {
    return (
        <div className="tile is-vertical">
            <div className="tile is-ancestor">
                <Col content1={`${Team.wins} - ${Team.losses}`}
                    subtitle1={`Record`}
                    content2={`${Team.divisionWins} - ${Team.divisionLosses}`}
                    subtitle2={'Division Record'}
                    content3={`${Team.homeWins} - ${Team.homeLosses}`}
                    subtitle3={'Home'}
                    content4={`Rank ${Team.divisionRank}`}
                    subtitle4={`${Team.league} ${Team.division}`}
                />
                <Col content1={`${Math.round((Team.winPercent * 100) * 10) / 10}%`}
                    subtitle1={'Win Percentage'}
                    content2={`${Team.lastTenWins} - ${Team.lastTenLosses}`}
                    subtitle2={'Last Ten'}
                    content3={`${Team.awayWins} - ${Team.awayLosses}`}
                    subtitle3={'Away'}
                    content4={`Rank ${Team.wildCardRank}`}
                    subtitle4={'Wild Card'}
                />
            <LogoTile secondColor={`#${Team.secondaryColor}`} name={`${Team.city} ${Team.teamName}`}logo={Team.logoURL} />
            </div>
        </div>
    )}
    if (sport === "nba") {
        return (
            <div className="tile is-vertical">
            <div className="tile is-ancestor">
                <Col content1={`${Team.wins} - ${Team.losses}`}
                    subtitle1={`Record`}
                    content2={`${Team.divisionWins} - ${Team.divisionLosses}`}
                    subtitle2={'Division Record'}
                    content3={`${Team.homeWins} - ${Team.homeLosses}`}
                    subtitle3={'Home'}
                    content4={Team.pointPerGame}
                    subtitle4={'Points Per Game'}
                />
                <Col content1={`${Team.confWins} - ${Team.confLosses}`}
                    subtitle1={'Conf. Record'}
                    content2={`${Team.lastTenWins} - ${Team.lastTenLosses}`}
                    subtitle2={'Last Ten'}
                    content3={`${Team.awayWins} - ${Team.awayLosses}`}
                    subtitle3={'Away'}
                    content4={Team.pointsAllowedPerGame}
                    subtitle4={'Allowed Points Per Game'}
                />
            <LogoTile secondColor={`#${Team.secondaryColor}`} name={`${Team.city} ${Team.teamName}`}logo={Team.logoURL} />
            </div>
        </div>
        )
    }
    if (sport === "nfl") {
        return (
            <div className="tile is-vertical">
            <div className="tile is-ancestor">
                <Col content1={`${Team.wins} - ${Team.losses} - ${Team.ties}`}
                    subtitle1={`Record`}
                    content2={`${Team.divisionWins} - ${Team.divisionLosses} - ${Team.divisionTies}`}
                    subtitle2={`Rank ${Team.divisionRank} in ${Team.conference} ${Team.division}`}
                    content3={`${Team.offensiveCoordinator}`}
                    subtitle3={'Offensive Cooordinator'}
                    content4={`Rank ${Team.divisionRank}`}
                    subtitle4={'Conference Rank'}
                />
                <Col content1={`${Team.confWins} - ${Team.confLosses} - ${Team.confTies}`}
                    subtitle1={`Rank ${Team.confRank} in the ${Team.conference}`}
                    content2={`${Math.round((Team.winPercent * 100) * 10) / 10}%`}
                    subtitle2={'Win Percentage'}
                    content3={`${Team.defensiveCoordinator}`}
                    subtitle3={'Defensive Coordinator'}
                    content4={`Week ${Team.byeWeek}`}
                    subtitle4={'2021-2022 Bye Week'}
                />
            <LogoTile secondColor={`#${Team.secondaryColor}`}name={`${Team.city} ${Team.teamName}`} logo={Team.logoURL} />
            </div>
        </div>
        )
    
}
if (sport === "nhl") {
    return (
        <div className="tile is-vertical">
        <div className="tile is-ancestor">
            <Col content1={`${Team.wins} - ${Team.losses} `}
                subtitle1={`Record`}
                content2={`${Team.divisionWins} - ${Team.divisionLosses} `}
                subtitle2={`Rank ${Team.divisionRank} in ${Team.conference} ${Team.division}`}
                content3={`${Team.divisionWins} `}
                subtitle3={'Conference Wins'}
                content4={`Rank ${Team.divisionRank} in ${Team.conference} ${Team.division}`}
                subtitle4={'Division Rank'}
            />
            <Col content1={`${Team.confWins} - ${Team.confLosses} `}
                subtitle1={`Rank ${Team.divisionRank} in the ${Team.conference}`}
                content2={`${Math.round((Team.winPercent * 100) * 10) / 10}%`}
                subtitle2={'Win Percentage'}
                content3={`${Team.shutoutWins}`}
                subtitle3={'Team Shut-out wins'}
                content4={`Season over`}
                subtitle4={'2021-2022 Bye Week'}
            />
        <LogoTile secondColor={`#${Team.secondaryColor}`} name={`${Team.city} ${Team.teamName}`} logo={Team.logoURL} />
        </div>
    </div>
    )
}}
;

export default TeamStats;