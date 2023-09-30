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
  let images = res.docs.map((element) => {
    return element.flickr_images;
  });
  return images;
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
  let images = res.docs.map((element) => {
    return element.image;
  });
  return images;
};

export const getAllImgCores = async () => {
  let config = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      options: {
        select: "launches",
        populate: {
          path: "launches",
          select: "links.patch",
        },
      },
    }),
  };
  let res = await (
    await fetch("https://api.spacexdata.com/v4/cores/query", config)
  ).json();
  let images = res.docs.map((element) => {
    let patches = element.launches.map((patch) => {
      let { small: small_patch, large: large_patch } = patch.links.patch;
      return { small_patch, large_patch };
    });
    return patches;
  });
  return images;
};

export const getAllImgCapsules = async () => {
  let config = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      options: {
        select: "launches",
        populate: {
          path: "launches",
          select: "links.patch",
        },
      },
    }),
  };
  let res = await (
    await fetch("https://api.spacexdata.com/v4/cores/query", config)
  ).json();
  let images = res.docs.map((element) => {
    let patches = element.launches.map((patch) => {
      let { small: small_patch, large: large_patch } = patch.links.patch;
      return { small_patch, large_patch };
    });
    return patches;
  });
  return images;
};
