var monthNamesPor = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
var monthNamesEsp = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
var Esp = ["Vientes", "Ancho", "Longitud", "Duración","Muertes", "Heridos", "Error de ubicación"]
var Por = ["Ventos", "Largura", "Comprimento", "Duração", "Mortes", "Ferimentos", "Erro de localização"]
var monthNames2 = ["January", "February", "March", "April", "May", "June", "Jovil", "Vulcana", "Minerve", "Cerese", "Brume", "Angerune"]
var tornadoTypes = {"T": "Tornado", "L": "Landspout"}
function tornadoClicked(e) {
    console.log(e)
    var prop = e.sourceTarget.feature.properties
    var monthNames = monthNamesEsp
    var language = Esp
    var txtTime = ""
    var txtDate = ""
    var txtDate2 = ""
    var txtWindspeed = ""
    var txtWidth = ""
    var txtLength = ""
    var txtDuration = ""
    var txtDeaths = ""
    var txtInjuries = ""
    var txtLocError = ""
    if (prop.lang == "por") {
        var txtSources = "<tr><th>Fontes</th><td>"
        monthNames = monthNamesPor
        language = Por
    } else {
        var txtSources = "<tr><th>Fuentes</th><td>"
    }
    var Sources = prop.sources
    console.log(Sources)
    if (prop.hour != -99) {
        txtTime = numLeng(prop.hour, 2) + ":" + numLeng(prop.minute, 2) + " " + prop.timezone + " "
    }
    if (prop.month != -99 && prop.day != -99) {
        txtDate = prop.day + " " + monthNames[prop.month-1] + " " + prop.year
        txtDate2 = prop.year + "/" + numLeng(prop.month, 2) + "/" + numLeng(prop.day, 2)
    }
    if (prop.month != -99 && prop.day == -99) {
        txtDate = monthNames[prop.month-1] + " " + prop.year
        txtDate2 = prop.year + "/" + numLeng(prop.month, 2) + "/??"
    }
    if (prop.month == -99 && prop.day != -99) {
        txtDate = prop.day + " ??? " + prop.year
        txtDate2 = prop.year + "/??/" + numLeng(prop.day, 2)
    }
    if (prop.month == -99 && prop.day == -99) {
        txtDate = prop.year
        txtDate2 = prop.year
    }
    if (prop.windspeed != -99) {
        txtWindspeed = "<tr><th>" + language[0] + "</th><td>" + prop.windspeed + " km/h</td></tr> "
    }
    if (prop.width != -99) {
        txtWidth = "<tr><th>" + language[1] + "</th><td>" + prop.width + " m</td></tr> "
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>" + language[2] + "</th><td>" + prop.length + " km</td></tr> "
        if (prop.duration != -99) {
            txtDuration = "<tr><th>" + language[3] + "</th><td>" + prop.duration + " min</td></tr> "
        } else {
            txtDuration = "<tr><th>" + language[3] + "</th><td>?</td></tr> "
        }
    }
    if (prop.duration != -99) {
        txtDuration = "<tr><th>" + language[3] + "</th><td>" + prop.duration + " min</td></tr> "
    }
    if (prop.deaths != -99) {
        txtDeaths = "<tr><th>" + language[4] + "</th><td>" + prop.deaths + "</td></tr> "
    }
    if (prop.injuries != -99) {
        txtInjuries = "<tr><th>" + language[5] + "</th><td>" + prop.injuries + "</td></tr> "
    }
    if (prop.locerror != -99) {
        var txtLocError = "<tr><th>" + language[6] + "</th><td>" + prop.locerror + " km</td></tr> "
    }
    
    for (let i = 0; i < Sources.length; i++) {
        txtSources += "[" + (i+1) + "]:<a target='_blank' href='" + Sources[i][1] + "'>" + Sources[i][0] + "</a><br>"
    }
    console.log(txtSources, Sources.length)
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_F" + prop.rating + "' colspan='99'><h2>F" + prop.rating + " " + tornadoTypes[prop.type] + " - " + txtDate2 + "</h2></th></tr></thead> <tbody><tr><th>Start time</th><td>" + txtTime + txtDate + "</td></tr> <tr><th>Rating</th><td>F" + prop.rating + "</td></tr> " + txtWindspeed + txtWidth + txtLength + txtDuration + txtLocError + txtDeaths + txtInjuries + txtSources + "</td></tr> <tr><th>Comments</th><td>" + prop.comments + "</td></tr></tbody><table>")
        .openOn(map);
}