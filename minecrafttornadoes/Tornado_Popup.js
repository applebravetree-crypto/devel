var monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
function tornadoClicked(e) {
    console.log(e)
    var prop = e.sourceTarget.feature.properties
    var txtTime = ""
    var txtDate = ""
    var txtWidth = ""
    var txtLength = ""
    var txtDuration = ""
    var txtLocError = ""
    if (prop.hour != -99) {
        txtTime = numLeng(prop.hour, 2) + ":" + numLeng(prop.minute, 2) + ", "
    }
    if (prop.month != -99 && prop.day != -99) {
        txtDate = prop.day + " " + monthNames[prop.month-1] + " " + prop.year
    }
    if (prop.month != -99 && prop.day == -99) {
        txtDate = monthNames[prop.month-1] + " " + prop.year
    }
    if (prop.month == -99 && prop.day != -99) {
        txtDate = prop.day + " ??? " + prop.year
    }
    if (prop.month == -99 && prop.day == -99) {
        txtDate = prop.year
    }
    if (prop.width != -99) {
        txtWidth = "<tr><th>Width</th><td>" + prop.width + " m</td></tr> "
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>Length</th><td>" + prop.length + " km</td></tr> "
        if (prop.duration != -99) {
            txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " uur</td></tr> "
        } else {
            txtDuration = "<tr><th>Duration</th><td>?</td></tr> "
        }
    }
    if (prop.duration != -99) {
        txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " uur</td></tr> "
    }
    if (prop.locerror != -99) {
        txtLocError = "<tr><th>Location error</th><td>" + prop.locerror + " m</td></tr> "
    }
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_F" + prop.rating + "' colspan='99'><h2>EF" + prop.rating + " Tornado - " + prop.year + "/" + numLeng(prop.month, 2) + "/" + numLeng(prop.day, 2) + "</h2></th></tr></thead> <tbody><tr><th>Start time</th><td>" + txtTime + txtDate + "</td></tr> <tr><th>Intensity</th><td>EF" + prop.rating + "</td></tr> " + txtWidth + txtLength + txtDuration + txtLocError + "<tr><th>Comments</th><td>" + prop.comments + "</td></tr></tbody><table>")
        .openOn(map);
}
