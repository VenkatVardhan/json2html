// json2html.js
export default function json2html(data) {
    const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
    let html = `<table data-user="saivenkat1579@gmail.com">`;
    html += "<thead><tr>";
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>";
    });
    html += "</tbody></table>";
    return html;
}
