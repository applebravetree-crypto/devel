var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var genreNames = {
    "pop":"pop",
    "hiphop":"hip-hop",
    "house":"house",
    "poprock":"pop rock",
    "funk":"funk",
    "rock":"rock",
    "metal":"metal"
}
var subgenreNames = {
    "pop":"pop",
    "britpop":"britpop",
    "synthpop":"synth pop",
    "rock":"rock",
    "newwave":"new wave",
    "walkawaynewwave":"''walkaway'' new wave",
}
var linkBySite = {
    "yt": ["www.youtube.com/watch?v="]
}
function tornadoClicked(e) {
    console.log(e)
    var prop = e.sourceTarget.feature.properties
    var txtTime = ""
    var txtDate = ""
    var txtArtists = "<tr><th>Artists</th><td>"
    var txtUpdDate = prop.update[2] + " " + monthNames[prop.update[1]-1] + " " + prop.update[0]
    var txtGenre = ""
    var txtSubgenre = ""
    var txtLength = ""
    var txtLink = ""
    if (prop.release[1] != -99 && prop.release[2] != -99) {
        txtDate = prop.release[2] + " " + monthNames[prop.release[1]-1] + " " + prop.release[0]
    }
    if (prop.release[1] != -99 && prop.day != -99) {
        txtDate = prop.release[2] + " " + monthNames[prop.release[1]-1] + " " + prop.release[0]
    }
    if (prop.release[1] != -99 && prop.release[2] == -99) {
        txtDate = monthNames[prop.release[1]-1] + " " + prop.release[0]
    }
    if (prop.release[1] == -99 && prop.release[2] != -99) {
        txtDate = prop.release[2] + " ??? " + prop.release[0]
    }
    if (prop.release[1] == -99 && prop.release[2] == -99) {
        txtDate = prop.release[0]
    }
    if (prop.subgenre[0] != "") {
        txtSubgenre = "<tr><th>Subgenre</th><td>"
    }
    if (prop.length != -99) {
        txtLength = "<tr><th>Length</th><td>" + prop.length + " sec</td></tr> "
    }
    prop.subgenre.forEach(subgenre => {
        if (prop.subgenre[0] == subgenre) {
            txtSubgenre += subgenreNames[subgenre]
        } else {
            txtSubgenre += ", " + subgenreNames[subgenre]
        }
    });
    prop.artists.forEach(artist => {
        if (prop.artists[0] == artist) {
            txtArtists += artist
        } else {
            txtArtists += ", " + artist
        }
    });
    txtLink = "https://" + linkBySite[prop.link[0]] + prop.link[1]
    txtLink = "<tr><th>Source</th><td><a target='_blank' href='" + txtLink + "'>" + txtLink + "</a></td></tr> "
    txtSubgenre += "</td></tr> "
    txtArtists += "</td></tr> "
    L.popup()
        .setLatLng(e.latlng)
        .setContent("<table><thead><tr><th class='popup_header_" + prop.genre + "' colspan='99'><h2> " + prop.title + " &ndash; " + prop.release[0] + "</h2></th></tr></thead> <tbody><tr><th>Released</th><td>" + txtTime + txtDate + "</td></tr> <tr><th>Last updated</th><td>" + txtUpdDate + "</td></tr> " + txtArtists + "<tr><th>Genre</th><td>" + genreNames[prop.genre] + "</td></tr> " + txtSubgenre + txtLength + txtLink + "</tbody><table>")
        .openOn(map);
}