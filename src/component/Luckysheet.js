import React, { useEffect, useState } from 'react';


function Luckysheet() {
    const luckysheet = window.luckysheet;
    const [data, setData] = useState([])
    const luckysheetCss = {
        margin: "0px",
        padding: "0px",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px",
    }
    useEffect(() => {

        luckysheet.create({
            container: "luckysheet",
            plugins: ['chart']
        });
    }, [])
    // luckysheet.setCellValue(0, 0, 1);

    // luckysheet.getCellValue(0, 0)
    // luckysheet.setCellFormat(0, 0, "bd", { borderType: "border-right", style: "1", color: "#ff0000" })

    return (
        <>
            <div
                style={luckysheetCss}
                id="luckysheet"

            ></div>

            {console.log(data)}
            <button onClick={() => { setData(luckysheet.getluckysheetfile()) }} style={{ color: "red", zIndex: '100' }} >save</button>
        </>
    )

}
export default Luckysheet