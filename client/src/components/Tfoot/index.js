import React from "react";

const Tfoot = ({sport}) => {
    if (sport === "MLB") {
        return (
            <tfoot>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="B/T">B/T</th>
                    <th title="pos">Pos</th>
                </tr>
            </tfoot>
        )
    } else if (sport === "NHL") {
        return (
            <tfoot>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="Shooting Hand">Shooting Hand</th>
                    <th title="pos">Pos</th>
                </tr>
            </tfoot>
        )
    }
    else {
        return (
            <tfoot>
                <tr>
                    <th title="#">#</th>
                    <th title="name">Name</th>
                    <th title="pos">Pos</th>
                </tr>
            </tfoot>
        )
    }
};
export default Tfoot;