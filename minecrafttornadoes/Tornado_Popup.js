var monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
function tornadoClicked(e) {
    // console.log(e)
    var prop = e.sourceTarget.feature.properties
    var txtTime = ""
    var txtDate = ""
    var txtRDate = ""
    var txtWidth = ""
    var txtLength = ""
    var txtDuration = ""
    var txtLocError = ""
    if (prop.hour != -99) {
        txtTime = numLeng(prop.hour, 2) + ":" + numLeng(prop.minute, 2) + ", "
    }
    if (prop.date[1] != -99 && prop.date[2] != -99) {
        txtDate = prop.date[2] + " " + monthNames[prop.date[1]-1] + " " + prop.date[0]
    }
    if (prop.date[1] != -99 && prop.date[2] == -99) {
        txtDate = monthNames[prop.date[1]-1] + " " + prop.date[0]
    }
    if (prop.date[1] == -99 && prop.date[2] != -99) {
        txtDate = prop.date[2] + " ??? " + prop.date[0]
    }
    if (prop.date[1] == -99 && prop.date[2] == -99) {
        txtDate = prop.date[0]
    }
    if (prop.rdate) {
        if (prop.rdate[1] != -99 && prop.rdate[2] != -99) {
            txtRDate = prop.rdate[2] + " " + monthNames[prop.rdate[1]-1] + " " + prop.rdate[0]
        }
        if (prop.rdate[1] != -99 && prop.rdate[2] == -99) {
            txtRDate = monthNames[prop.rdate[1]-1] + " " + prop.rdate[0]
        }
        if (prop.rdate[1] == -99 && prop.rdate[2] != -99) {
            txtRDate = prop.rdate[2] + " ??? " + prop.rdate[0]
        }
        if (prop.rdate[1] == -99 && prop.rdate[2] == -99) {
            txtRDate = prop.rdate[0]
        }
        txtRDate = "<tbody><tr><th>Echte tijd</th><td>" + txtRDate + "</td></tr>"
    }
    if (prop.width != -99) {
        txtWidth = "<tr><th>Width</th><td>" + prop.width + " m</td></tr> "
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>Length</th><td>" + prop.length + " km</td></tr> "
        if (prop.duration != -99) {
            txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " h</td></tr> "
        } else {
            txtDuration = "<tr><th>Duration</th><td>?</td></tr> "
        }
    }
    if (prop.duration != -99) {
        txtDuration = "<tr><th>Duration</th><td>" + prop.duration + " h</td></tr> "
    }
    if (prop.locerror != -99) {
        txtLocError = "<tr><th>Location error</th><td>" + prop.locerror + " m</td></tr> "
    }
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_F" + prop.rating + "' colspan='99'><h2>EF" + prop.rating + " Tornado - " + prop.date[0] + "/" + numLeng(prop.date[1], 2) + "/" + numLeng(prop.date[2], 2) + "</h2></th></tr></thead> <tbody><tr><th>Start-time</th><td>" + txtTime + txtDate + "</td></tr>" + txtRDate + " <tr><th>Intensity</th><td>EF" + prop.rating + "</td></tr> " + txtWidth + txtLength + txtDuration + txtLocError + "<tr><th>Comments</th><td>" + prop.comments + "</td></tr></tbody><table>")
        .openOn(map);
}
