module.exports = function(gameObj) {
  //extract the needed JSON data
  let filteredObject = {};
  filteredObject.icon_image = gameObj.image.icon_url;
  filteredObject.small_image = gameObj.image.small_url;
  filteredObject.title = gameObj.name;
  filteredObject.release_date = gameObj.original_release_date;
  filteredObject.more_detail = gameObj.site_detail_url;
  filteredObject.price = Math.round(
    60 - (2019 - filteredObject.release_date.slice(0, 4)) * 2.75
  );
  //count for numbers of platform
  let platformCount = 0;
  filteredObject.platforms = gameObj.platforms.map(platform => {
    let filteredPlatform = {};
    filteredPlatform[platformCount] = platform.abbreviation;
    platformCount++;
    return filteredPlatform;
  });
  return filteredObject;
};
