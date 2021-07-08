import React from "react";

function Gamestats({hits, runs, errors}) {
    return(
        <div className="col-end-6 flex items-center justify-center">
            <ul className="flex-col items-center flex justify-center">
                <div className="border-2 border-black w-8 text-center">
                    <li>R</li>
                    <li>{runs}</li>
                </div>
                <div className="border-2 border-black w-8 text-center">
                    <li>H</li>
                    <li>{hits}</li>
                </div>
                <div className="border-2 border-black w-8 text-center">
                    <li>E</li>
                    <li>{errors}</li>
                </div>
            </ul>
        </div>
    )
};

export default Gamestats;