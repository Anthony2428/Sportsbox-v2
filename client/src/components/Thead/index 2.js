import React from "react";

const Thead = ({sport}) => {
    if (sport === "MLB") {
        return (
            <thead>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="B/T">B/T</th>
                    <th title="pos">Pos</th>
                </tr>
            </thead>
        )
    } else if (sport === "NHL") {
        return (
            <thead>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="Shooting Hand">Shooting Hand</th>
                    <th title="pos">Pos</th>
                </tr>
            </thead>
        )
    }
    else {
        return (
            <thead>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="pos">Pos</th>
                </tr>
            </thead>
        )
    }
};
export default Thead;