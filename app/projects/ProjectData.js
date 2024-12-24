"use server";

import projects from './projects.module.css';

let csvToJson = require('convert-csv-to-json');
let jsonData = csvToJson.parseSubArray(',',',')
                .getJsonFromCsv("public/projects/website_projects.csv");

export async function ProjData() {
    return jsonData;
}

export async function ProjTab({proj, index, onProjectTabClick}) {
    return (
        <div id={`${proj}` + '-tab-' + `${index}`}>
            <button type="button" 
            className={`${projects.tab} makoRegular align-items-center`}
            onClick={onProjectTabClick}>
                    <p>{proj}</p>
                <div className={projects.tabStripe}></div>
            </button>
        </div>
    )
}

export async function ProjTabs() {
    return (<>
        {jsonData.map((proj, index) => 
            <ProjTab proj={proj} index={index} />
        )}
    </>)
}