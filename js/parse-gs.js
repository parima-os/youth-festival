const API_KEY = "AIzaSyCx-e8UlqDRV_EFFeelTiOSSqGKKuxUfUU";
const SHEET_ID = "1hu32vNC7Q0SMB3COdHDO9K1At6haI8Nu0-Bdh5UCn7E";
const SHEET_NAME="Sheet2"


// function init() {
//     Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTXfFunq7tpSf3oxaiZdU4ARseYv3kr0dfH79MUZpXQzobjyXllAw2ySd9acRUnOg/pub?output=csv', 
//     {
//         download: true,
//         complete: function(results) {
//             var data = results.data;
//             console.log(data);
//         }
//     })
// }
// window.addEventListener('DOMContentLoaded', init);
let ppData; 
function fetchSheet({ spreadsheetId, sheetName, apiKey, complete }) {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    return fetch(url).then(response =>
        response.json().then(result => {
            //console.log(result);
            ppData = Papa.parse(Papa.unparse(result.values), { header: true });
            // complete(data);
            // console.log(data);
        })
    );
}

function showInfo(){
    console.log('done');
}

function init() {
    console.log('init');
    fetchSheet({
        spreadsheetId: SHEET_ID,
        sheetName: SHEET_NAME,
        apiKey: API_KEY,
        complete: showInfo
    });
}

window.addEventListener('DOMContentLoaded', init);


document.getElementById('submit').onclick = function () {
    const formNo = document.getElementById("formId").value.trim();
    const email = document.getElementById("email").value.trim();
    const airmeetLink = document.getElementById("airmeetLink");
    const row = ppData.data.filter(x => x["Form No"] === formNo)[0];
    console.log(row, row == null);
    if(row == null){
        airmeetLink.innerHTML = `<p> A registration under that Form No does not exist. Please contact <a href="mailto:info.youthfestival@youth.srmd.org">info.youthfestival@youth.srmd.org</a></p>`
        return;
    }
    else if(row["Email"].trim().toLowerCase() === email.toLowerCase()){
        const link = row["Links"];
        airmeetLink.innerHTML = `Click here: <a href="${link}" class="yf-link link">${link}</a>`;
        return;
    }
    else{
        airmeetLink.innerHTML = `<p> The form number and email does not match. Try another email or please contact <a href="mailto:info.youthfestival@youth.srmd.org">info.youthfestival@youth.srmd.org</a></p>`
        return;
    }
}