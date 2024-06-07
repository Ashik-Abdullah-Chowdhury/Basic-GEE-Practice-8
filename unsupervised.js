// Do a unsupervised classification by using Landsat-9 for your upazila, export the classified image

// Define region of interest
var upzla=table.filter(ee.Filter.eq("ADM3_EN","Boalkhali"))

// Load Landsat-9 image collection
var img=ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
         .filterBounds(upzla)
         .filterDate("2023-01-01","2023-12-30")
         .filter(ee.Filter.lt('CLOUD_COVER',10))
         .mean().clip(upzla)

// Select bands for clustering
var bands=['SR_B2','SR_B3','SR_B4','SR_B5']
var image=img.select(bands)
Map.centerObject(upzla)
Map.addLayer(image,{bands:['SR_B4','SR_B3','SR_B2'],min:8037,max:11423},"Landsat-9 RGB")

// Sample the image
var training=image.sample({
  region:upzla,
  scale:30,
  numPixels:5000
})
print(training)

// Instantiate the clusterer and train it
var clusterer=ee.Clusterer.wekaKMeans(5).train(training)
var result=image.cluster(clusterer)
print(result)
Map.addLayer(result.randomVisualizer(),{},"K-means cluster")

// Export the clustered image
Export.image.toDrive({
  image:result,
  region:upzla,
  description:"Clustered_image.",
  folder:"class-15",
  scale:30,
  fileFormat:'GeoTIFF'
})
