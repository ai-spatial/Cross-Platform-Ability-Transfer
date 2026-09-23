var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
    .filterDate('2017-01-01', '2024-05-01');

print('Collection: ', collection);

var first = collection.first();
print(first);


// Get the number of images.
var count = collection.size();
print('Count: ', count);

// Function to extract metadata properties
var extractMetadata = function(image) {
  // Get image metadata properties
  var properties = image.toDictionary();

  // Get specific properties (geometry, time, cloud cover, etc.)
  var geometry = image.geometry();
  // var date = properties.get('DATE_ACQUIRED');
  // var time = properties.get('SCENE_CENTER_TIME');
  var timestamp = ee.Date(image.get('system:time_start')).format('YYYY-MM-dd HH:mm:ss');
  var cloudcover = properties.get('CLOUD_COVER'); // Change this to the actual cloud cover property name
  var sun_azimuth = properties.get('SUN_AZIMUTH');
  var sun_elevation = properties.get('SUN_ELEVATION');


  // Return a feature with metadata properties
  return ee.Feature(geometry, {
    // 'date': date,
    // 'time': time,
    'timestamp': timestamp,
    'cloud_cover': cloudcover,
    'sun_azimuth': sun_azimuth,
    'sun_elevation': sun_elevation,
    // Add more properties as needed
  });
};

// Map over the image collection to extract metadata
var metadataCollection = collection.map(extractMetadata);

print(metadataCollection);

// Export metadata to a CSV file
Export.table.toDrive({
  collection: metadataCollection,
  description: 'l8_metadata_export',
  fileFormat: 'CSV'
});
