// Do a supervised classification by using Sentinel-2 for your upazila, export the classified image

// Define region of interest
var upzla=table.filter(ee.Filter.eq("ADM3_EN","Boalkhali"))

// Load Landsat-9 image collection
var img=ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
         .filterBounds(upzla)
         .filterDate("2023-01-01","2023-12-30")
         .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
         .mean().clip(upzla)

// Select bands for clustering
var bands=['B2', 'B3', 'B4', 'B8']
var image=img.select(bands)
Map.centerObject(upzla)
Map.addLayer(image,{bands:['B4', 'B3', 'B2'],min:324,max:1008},"Sentinel-2 RGB")

// Merge the feature collection
var trainingData=vegetation.merge(waterbody).merge(cropland).merge(settlement)
print(trainingData)

// Sample the imagery to get a FeatureCollection of training data
var training=image.sampleRegions({
  collection:trainingData,
  properties:['landcover'],
  scale:10
})
print(training)

// Train a classifier
var classifier=ee.Classifier.smileRandomForest(50).train({
  features:training,
  classProperty:'landcover',
  inputProperties:image.bandNames()
})

// Classify the image
var classified=image.classify(classifier)

// Define the visualization parametersvar
var visParams={
  min:0,
  max:3,
  palette: ['green','blue','red','yellow']}


// Add layers to the map
Map.addLayer(classified,visParams,"Supervised image")



// Export image
Export.image.toDrive({
  image:classified,
  region:upzla,
  description:"Supervised_image",
  folder:"class-15",
  scale:10,
  fileFormat:'GeoTIFF'
})