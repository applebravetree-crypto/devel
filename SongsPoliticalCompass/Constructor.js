var stylesPerGenre = {
    "pop": styles_pop,
    "hiphop": styles_hiphop,
    "house": styles_poprock,
    "poprock": styles_house,
    "funk": styles_funk,
    "rock": styles_rock,
    "metal": styles_metal,
}
var iconsPerGenre = {
    "pop": popIcon,
    "hiphop": hiphopIcon,
    "house": houseIcon,
    "poprock": poprockIcon,
    "funk": funkIcon,
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