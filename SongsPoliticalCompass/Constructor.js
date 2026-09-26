var stylesPerGenre = {
    "pop": styles_pop,
    "electronic": styles_electronic,
    "hiphop": styles_hiphop,
    "house": styles_house,
    "poprock": styles_poprock,
    "funk": styles_funk,
    "postpunk": styles_postpunk,
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
    "postpunk": postpunkIcon,
    "rock": rockIcon,
    "metal": metalIcon,
}
function constructor (parent, layer) {
    var prop = layer.feature.properties
    var icon = iconsPerGenre[prop.genre]
    if (true) {
        // layer.setStyle(style)
        layer.on("click", tornadoClicked)
        layer.setIcon(icon)
    } else {
        parent.removeLayer(layer);
    }
}