var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IUENNA_Metadata06_RET_1 = new ol.format.GeoJSON();
var features_IUENNA_Metadata06_RET_1 = format_IUENNA_Metadata06_RET_1.readFeatures(json_IUENNA_Metadata06_RET_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata06_RET_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata06_RET_1.addFeatures(features_IUENNA_Metadata06_RET_1);
var lyr_IUENNA_Metadata06_RET_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata06_RET_1, 
                style: style_IUENNA_Metadata06_RET_1,
                popuplayertitle: "IUENNA_Metadata 06_RET",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata06_RET_1.png" /> IUENNA_Metadata 06_RET'
            });
var format_IUENNA_Metadata05_TAL_2 = new ol.format.GeoJSON();
var features_IUENNA_Metadata05_TAL_2 = format_IUENNA_Metadata05_TAL_2.readFeatures(json_IUENNA_Metadata05_TAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata05_TAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata05_TAL_2.addFeatures(features_IUENNA_Metadata05_TAL_2);
var lyr_IUENNA_Metadata05_TAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata05_TAL_2, 
                style: style_IUENNA_Metadata05_TAL_2,
                popuplayertitle: "IUENNA_Metadata 05_TAL",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata05_TAL_2.png" /> IUENNA_Metadata 05_TAL'
            });
var format_IUENNA_Metadata04_STE_3 = new ol.format.GeoJSON();
var features_IUENNA_Metadata04_STE_3 = format_IUENNA_Metadata04_STE_3.readFeatures(json_IUENNA_Metadata04_STE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata04_STE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata04_STE_3.addFeatures(features_IUENNA_Metadata04_STE_3);
var lyr_IUENNA_Metadata04_STE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata04_STE_3, 
                style: style_IUENNA_Metadata04_STE_3,
                popuplayertitle: "IUENNA_Metadata 04_STE",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata04_STE_3.png" /> IUENNA_Metadata 04_STE'
            });
var format_IUENNA_Metadata03_JAU_4 = new ol.format.GeoJSON();
var features_IUENNA_Metadata03_JAU_4 = format_IUENNA_Metadata03_JAU_4.readFeatures(json_IUENNA_Metadata03_JAU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata03_JAU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata03_JAU_4.addFeatures(features_IUENNA_Metadata03_JAU_4);
var lyr_IUENNA_Metadata03_JAU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata03_JAU_4, 
                style: style_IUENNA_Metadata03_JAU_4,
                popuplayertitle: "IUENNA_Metadata 03_JAU",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata03_JAU_4.png" /> IUENNA_Metadata 03_JAU'
            });
var format_IUENNA_Metadata02_HB_5 = new ol.format.GeoJSON();
var features_IUENNA_Metadata02_HB_5 = format_IUENNA_Metadata02_HB_5.readFeatures(json_IUENNA_Metadata02_HB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata02_HB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata02_HB_5.addFeatures(features_IUENNA_Metadata02_HB_5);
var lyr_IUENNA_Metadata02_HB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata02_HB_5, 
                style: style_IUENNA_Metadata02_HB_5,
                popuplayertitle: "IUENNA_Metadata 02_HB",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata02_HB_5.png" /> IUENNA_Metadata 02_HB'
            });
var format_IUENNA_Metadata01_GLO_6 = new ol.format.GeoJSON();
var features_IUENNA_Metadata01_GLO_6 = format_IUENNA_Metadata01_GLO_6.readFeatures(json_IUENNA_Metadata01_GLO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNA_Metadata01_GLO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNA_Metadata01_GLO_6.addFeatures(features_IUENNA_Metadata01_GLO_6);
var lyr_IUENNA_Metadata01_GLO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNA_Metadata01_GLO_6, 
                style: style_IUENNA_Metadata01_GLO_6,
                popuplayertitle: "IUENNA_Metadata 01_GLO",
                interactive: true,
                title: '<img src="styles/legend/IUENNA_Metadata01_GLO_6.png" /> IUENNA_Metadata 01_GLO'
            });
var format_IUENNAVoronoi_7 = new ol.format.GeoJSON();
var features_IUENNAVoronoi_7 = format_IUENNAVoronoi_7.readFeatures(json_IUENNAVoronoi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNAVoronoi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNAVoronoi_7.addFeatures(features_IUENNAVoronoi_7);
var lyr_IUENNAVoronoi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNAVoronoi_7, 
                style: style_IUENNAVoronoi_7,
                popuplayertitle: "IUENNA-Voronoi",
                interactive: true,
                title: '<img src="styles/legend/IUENNAVoronoi_7.png" /> IUENNA-Voronoi'
            });
var format_IUENNABegrenzendeGeometrieadaptiert_8 = new ol.format.GeoJSON();
var features_IUENNABegrenzendeGeometrieadaptiert_8 = format_IUENNABegrenzendeGeometrieadaptiert_8.readFeatures(json_IUENNABegrenzendeGeometrieadaptiert_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUENNABegrenzendeGeometrieadaptiert_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUENNABegrenzendeGeometrieadaptiert_8.addFeatures(features_IUENNABegrenzendeGeometrieadaptiert_8);
var lyr_IUENNABegrenzendeGeometrieadaptiert_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUENNABegrenzendeGeometrieadaptiert_8, 
                style: style_IUENNABegrenzendeGeometrieadaptiert_8,
                popuplayertitle: "IUENNA-Begrenzende-Geometrie-adaptiert",
                interactive: true,
                title: '<img src="styles/legend/IUENNABegrenzendeGeometrieadaptiert_8.png" /> IUENNA-Begrenzende-Geometrie-adaptiert'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IUENNA_Metadata06_RET_1.setVisible(true);lyr_IUENNA_Metadata05_TAL_2.setVisible(true);lyr_IUENNA_Metadata04_STE_3.setVisible(true);lyr_IUENNA_Metadata03_JAU_4.setVisible(true);lyr_IUENNA_Metadata02_HB_5.setVisible(true);lyr_IUENNA_Metadata01_GLO_6.setVisible(true);lyr_IUENNAVoronoi_7.setVisible(true);lyr_IUENNABegrenzendeGeometrieadaptiert_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IUENNA_Metadata06_RET_1,lyr_IUENNA_Metadata05_TAL_2,lyr_IUENNA_Metadata04_STE_3,lyr_IUENNA_Metadata03_JAU_4,lyr_IUENNA_Metadata02_HB_5,lyr_IUENNA_Metadata01_GLO_6,lyr_IUENNAVoronoi_7,lyr_IUENNABegrenzendeGeometrieadaptiert_8];
lyr_IUENNA_Metadata06_RET_1.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNA_Metadata05_TAL_2.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNA_Metadata04_STE_3.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNA_Metadata03_JAU_4.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNA_Metadata02_HB_5.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNA_Metadata01_GLO_6.set('fieldAliases', {'fid': 'fid', 'hasTitle': 'hasTitle', 'x': 'x', 'y': 'y', 'Relative folder path': 'Relative folder path', 'hasCollectedEndDate': 'hasCollectedEndDate', 'hasCreator': 'hasCreator', 'hasRightsHolder': 'hasRightsHolder', 'hasOwner': 'hasOwner', 'hasLicensor': 'hasLicensor', 'hasLicense': 'hasLicense', 'hasAccessRestriction': 'hasAccessRestriction', 'hasDigitisingAgent': 'hasDigitisingAgent', 'hasMetadataCreator': 'hasMetadataCreator', 'hasDescription': 'hasDescription', 'hasNote': 'hasNote', 'hasSubject': 'hasSubject', 'hasSpatialCoverage': 'hasSpatialCoverage', 'relation': 'relation', 'Collection (level 0)': 'Collection (level 0)', 'Collection (level 1)': 'Collection (level 1)', 'Collection (level 2)': 'Collection (level 2)', 'Collection (level 3)': 'Collection (level 3)', 'Collection (level 4)': 'Collection (level 4)', 'Collection (level 5)': 'Collection (level 5)', });
lyr_IUENNAVoronoi_7.set('fieldAliases', {'hasTitle': 'hasTitle', 'hasIdentif': 'hasIdentif', 'x': 'x', 'y': 'y', });
lyr_IUENNABegrenzendeGeometrieadaptiert_8.set('fieldAliases', {'id': 'id', 'area': 'area', 'perimeter': 'perimeter', });
lyr_IUENNA_Metadata06_RET_1.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNA_Metadata05_TAL_2.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNA_Metadata04_STE_3.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNA_Metadata03_JAU_4.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNA_Metadata02_HB_5.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNA_Metadata01_GLO_6.set('fieldImages', {'fid': '', 'hasTitle': '', 'x': '', 'y': '', 'Relative folder path': '', 'hasCollectedEndDate': '', 'hasCreator': '', 'hasRightsHolder': '', 'hasOwner': '', 'hasLicensor': '', 'hasLicense': '', 'hasAccessRestriction': '', 'hasDigitisingAgent': '', 'hasMetadataCreator': '', 'hasDescription': '', 'hasNote': '', 'hasSubject': '', 'hasSpatialCoverage': '', 'relation': '', 'Collection (level 0)': '', 'Collection (level 1)': '', 'Collection (level 2)': '', 'Collection (level 3)': '', 'Collection (level 4)': '', 'Collection (level 5)': '', });
lyr_IUENNAVoronoi_7.set('fieldImages', {'hasTitle': '', 'hasIdentif': '', 'x': '', 'y': '', });
lyr_IUENNABegrenzendeGeometrieadaptiert_8.set('fieldImages', {'id': '', 'area': '', 'perimeter': '', });
lyr_IUENNA_Metadata06_RET_1.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNA_Metadata05_TAL_2.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNA_Metadata04_STE_3.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNA_Metadata03_JAU_4.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNA_Metadata02_HB_5.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNA_Metadata01_GLO_6.set('fieldLabels', {'fid': 'no label', 'hasTitle': 'no label', 'x': 'no label', 'y': 'no label', 'Relative folder path': 'no label', 'hasCollectedEndDate': 'no label', 'hasCreator': 'no label', 'hasRightsHolder': 'no label', 'hasOwner': 'no label', 'hasLicensor': 'no label', 'hasLicense': 'no label', 'hasAccessRestriction': 'no label', 'hasDigitisingAgent': 'no label', 'hasMetadataCreator': 'no label', 'hasDescription': 'no label', 'hasNote': 'no label', 'hasSubject': 'no label', 'hasSpatialCoverage': 'no label', 'relation': 'no label', 'Collection (level 0)': 'no label', 'Collection (level 1)': 'no label', 'Collection (level 2)': 'no label', 'Collection (level 3)': 'no label', 'Collection (level 4)': 'no label', 'Collection (level 5)': 'no label', });
lyr_IUENNAVoronoi_7.set('fieldLabels', {'hasTitle': 'header label - visible with data', 'hasIdentif': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', });
lyr_IUENNABegrenzendeGeometrieadaptiert_8.set('fieldLabels', {'id': 'header label - visible with data', 'area': 'header label - visible with data', 'perimeter': 'header label - visible with data', });
lyr_IUENNABegrenzendeGeometrieadaptiert_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});