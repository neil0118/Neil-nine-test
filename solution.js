exports.rootPost = (req, res) => {
  const result = [];
  req.body.payload.forEach((show) => {
    if (!show.drm || !show.episodeCount) return;
    result.push({
      image: show.image.showImage,
      slug: show.slug,
      title: show.title,
    });
  });
  res.send(result);
};
