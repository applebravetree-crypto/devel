var monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
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
        txtWidth = "<tr><th>Breedte</th><td>" + prop.width + " m</td></tr> "
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>Lengte</th><td>" + prop.length + " km</td></tr> "
        if (prop.duration != -99) {
            txtDuration = "<tr><th>Duur</th><td>" + prop.duration + " uur</td></tr> "
        } else {
            txtDuration = "<tr><th>Duur</th><td>?</td></tr> "
        }
    }
    if (prop.duration != -99) {
        txtDuration = "<tr><th>Duur</th><td>" + prop.duration + " uur</td></tr> "
    }
    if (prop.locerror != -99) {
        txtLocError = "<tr><th>Locatie error</th><td>" + prop.locerror + " m</td></tr> "
    }
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_F" + prop.rating + "' colspan='99'><h2>EF" + prop.rating + " Tornado - " + prop.year + "/" + numLeng(prop.month, 2) + "/" + numLeng(prop.day, 2) + "</h2></th></tr></thead> <tbody><tr><th>Starttijd</th><td>" + txtTime + txtDate + "</td></tr> <tr><th>Intensiteit</th><td>EF" + prop.rating + "</td></tr> " + txtWidth + txtLength + txtDuration + txtLocError + "<tr><th>Opmerkingen</th><td>" + prop.comments + "</td></tr></tbody><table>")
        .openOn(map);
}