var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucionIndicedeHumedad02100211_1 = new ol.format.GeoJSON();
var features_EvolucionIndicedeHumedad02100211_1 = format_EvolucionIndicedeHumedad02100211_1.readFeatures(json_EvolucionIndicedeHumedad02100211_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeHumedad02100211_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeHumedad02100211_1.addFeatures(features_EvolucionIndicedeHumedad02100211_1);
var lyr_EvolucionIndicedeHumedad02100211_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeHumedad02100211_1, 
                style: style_EvolucionIndicedeHumedad02100211_1,
                interactive: true,
    title: 'Evolucion Indice de Humedad - 02/10 - 02/11<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad02100211_1_0.png" /> -0,29 - -0,21 - Muy Bajo<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad02100211_1_1.png" /> -0,21 - -0,13 - Bajo<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad02100211_1_2.png" /> -0,13 - -0,05 - Medio<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad02100211_1_3.png" /> -0,05 - 0,03 - Alto<br />\
    <img src="styles/legend/EvolucionIndicedeHumedad02100211_1_4.png" /> 0,03 - 0,11 - Muy Alto<br />'
        });
var format_IndicedeHumedad021120_2 = new ol.format.GeoJSON();
var features_IndicedeHumedad021120_2 = format_IndicedeHumedad021120_2.readFeatures(json_IndicedeHumedad021120_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedad021120_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedad021120_2.addFeatures(features_IndicedeHumedad021120_2);
var lyr_IndicedeHumedad021120_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedad021120_2, 
                style: style_IndicedeHumedad021120_2,
                interactive: true,
    title: 'Indice de Humedad - 02/11/20<br />\
    <img src="styles/legend/IndicedeHumedad021120_2_0.png" /> -0,30 - -0,22 - Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedad021120_2_1.png" /> -0,22 - -0,14 - Bajo<br />\
    <img src="styles/legend/IndicedeHumedad021120_2_2.png" /> -0,14 - -0,07 - Medio<br />\
    <img src="styles/legend/IndicedeHumedad021120_2_3.png" /> -0,07 - 0,01 - Alto<br />\
    <img src="styles/legend/IndicedeHumedad021120_2_4.png" /> 0,01 - 0,09 - Muy alto<br />'
        });
var format_EvolucionIndicedeVegetacion02100211_3 = new ol.format.GeoJSON();
var features_EvolucionIndicedeVegetacion02100211_3 = format_EvolucionIndicedeVegetacion02100211_3.readFeatures(json_EvolucionIndicedeVegetacion02100211_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucionIndicedeVegetacion02100211_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucionIndicedeVegetacion02100211_3.addFeatures(features_EvolucionIndicedeVegetacion02100211_3);
var lyr_EvolucionIndicedeVegetacion02100211_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucionIndicedeVegetacion02100211_3, 
                style: style_EvolucionIndicedeVegetacion02100211_3,
                interactive: true,
    title: 'Evolucion Indice de Vegetacion - 02/10 - 02/11<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion02100211_3_0.png" /> -0,26 - -0,17 - Muy Bajo<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion02100211_3_1.png" /> -0,17 - -0,08 - Bajo<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion02100211_3_2.png" /> -0,08 - 0,01 - Medio<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion02100211_3_3.png" /> 0,01 - 0,10 - Alto<br />\
    <img src="styles/legend/EvolucionIndicedeVegetacion02100211_3_4.png" /> 0,10 - 0,19 - Muy alto<br />'
        });
var format_IndicedeVegetacion021120_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacion021120_4 = format_IndicedeVegetacion021120_4.readFeatures(json_IndicedeVegetacion021120_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacion021120_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacion021120_4.addFeatures(features_IndicedeVegetacion021120_4);
var lyr_IndicedeVegetacion021120_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacion021120_4, 
                style: style_IndicedeVegetacion021120_4,
                interactive: true,
    title: 'Indice de Vegetacion - 02/11/20<br />\
    <img src="styles/legend/IndicedeVegetacion021120_4_0.png" /> 0,05 - 0,14 - Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacion021120_4_1.png" /> 0,14 - 0,22 - Bajo<br />\
    <img src="styles/legend/IndicedeVegetacion021120_4_2.png" /> 0,22 - 0,31 - Medio<br />\
    <img src="styles/legend/IndicedeVegetacion021120_4_3.png" /> 0,31 - 0,40 - Alto<br />\
    <img src="styles/legend/IndicedeVegetacion021120_4_4.png" /> 0,40 - 0,49 - Muy alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucionIndicedeHumedad02100211_1.setVisible(true);lyr_IndicedeHumedad021120_2.setVisible(true);lyr_EvolucionIndicedeVegetacion02100211_3.setVisible(true);lyr_IndicedeVegetacion021120_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucionIndicedeHumedad02100211_1,lyr_IndicedeHumedad021120_2,lyr_EvolucionIndicedeVegetacion02100211_3,lyr_IndicedeVegetacion021120_4];
lyr_EvolucionIndicedeHumedad02100211_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedad021120_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucionIndicedeVegetacion02100211_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacion021120_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucionIndicedeHumedad02100211_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedad021120_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucionIndicedeVegetacion02100211_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacion021120_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucionIndicedeHumedad02100211_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedad021120_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucionIndicedeVegetacion02100211_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacion021120_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacion021120_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});