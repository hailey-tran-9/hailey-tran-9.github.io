let csvToJson = require('convert-csv-to-json');
let jsonData = csvToJson.parseSubArray(',',',')
                .getJsonFromCsv("public/projects/website_projects.csv");

export async function GET() {
    console.log("GET");
    return Response.json(jsonData);
}