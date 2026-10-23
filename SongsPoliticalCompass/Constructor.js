var stylesPerGenre = {
    "pop": styles_pop,
    "electronic": styles_electronic,
    "hiphop": styles_hiphop,
    "house": styles_house,
    "poprock": styles_poprock,
    "funk": styles_funk,
    "rock": styles_rock,
    "metal": styles_metal,
}
var iconsPerGenre = {
    "pop": popIcon,
    "electronic": electronicIcon,
    "hiphop": hiphopIcon,
    "house": houseIcon,
    "poprock": poprockIcon,
    "funk": funkIcon,
    "rock": rockIcon,
    "metal": metalIcon,
}
var numCoords = parseFloat(0)
var allLats = parseFloat(0)
var allLngs = parseFloat(0)
var averageLocationPopup = L.marker()
function constructor (parent, layer) {
    var prop = layer.feature.properties
    var icon = iconsPerGenre[prop.genre]
    var satisfiesDate = false
    var satisfiesGenre = false
    var satisfiesSubgenre = false
    if (prop.release[0] >= yearMIN && prop.release[0] <= yearMAX) {
        satisfiesDate=true
    }
    if (genreFiltered==false || genreALLOW[prop.genre] == true) {
        satisfiesGenre=true
    }
    for (let i=0; i<prop.subgenre.length; i++) {
        if (subgenreFiltered==false || subgenreALLOW[prop.subgenre[i]] == true) {
            satisfiesSubgenre = true
        }
    }
    if (satisfiesDate && satisfiesSubgenre) {
        // layer.setStyle(style)
        layer.on("click", tornadoClicked)
        layer.setIcon(icon)
        numCoords += 1;
        allLats = parseFloat(allLats) + parseFloat(layer.feature.geometry.coordinates[1]);
        allLngs = parseFloat(allLngs) + parseFloat(layer.feature.geometry.coordinates[0]);
    } else {
        parent.removeLayer(layer);
    }
}