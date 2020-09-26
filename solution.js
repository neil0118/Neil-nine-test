exports.rootPost = (req, res) => {
  console.log(123123);
  const result = [];
  req.body.payload.forEach((show) => {
    if (!show.drm || !show.episodeCount) return;
    result.push({
      image: show.image.showImage,
      slug: show.slug,
      title: show.title,
    });
  });
  res.send({ response: result });
};
