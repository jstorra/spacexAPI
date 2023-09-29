export const getAllImgRockets = async () => {
  let config = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      options: {
        select: {
          flickr_images: 1,
        },
      },
    }),
  };
  let res = await (
    await fetch("https://api.spacexdata.com/v4/rockets/query", config)
  ).json();
  let img = res.docs.map((element) => {
    return element.flickr_images;
  });
  return img;
};

export const getAllImgShips = async () => {
  let config = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      options: {
        select: {
          image: 1,
        },
      },
    }),
  };
  let res = await (
    await fetch("https://api.spacexdata.com/v4/ships/query", config)
  ).json();
  let img = res.docs.map((element) => {
    return element.image;
  });
  return img;
};
