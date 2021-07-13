import React from "react";

const RecordBox = ({League, Division, DivisionRank, Record, HomeRecord, AwayRecord, LastTenRecord}) => {
    return (
        <div class="relative items-center bg-white py-6 px-6 rounded-3xl w-128 my-4 shadow-xl xl:col-span-2">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                <span>{DivisionRank}nd Place in {League} {Division}</span>
            </div>
            <div class="mt-8 text-center">
                <p class="text-xl font-semibold my-2">Record</p>
                <div class="flex-col text-center text-blue-400 text-sm">
                     <p>{League}</p> 
                     <p>{Division}</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex-col mx-auto">
                    <div className="w-full">
                        <p className="text-right"><span className="float-left">W/L</span>{Record}</p>
                    </div>
                    <div className="w-full">
                        <p className="text-right"><span className="float-left">Home</span>{HomeRecord}</p>
                    </div>
                    <div className="w-full">
                        <p className="text-right"><span className="float-left">Away</span>{AwayRecord}</p>
                    </div>
                    <div className="w-full">
                        <p className="text-right"><span className="float-left">Last Ten</span>{LastTenRecord}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecordBox;