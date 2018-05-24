if (process.env.CSS_PATH && process.env.CSS_PATH.match(/\+*.css$/i)) {
  try {
    require(process.env.CSS_PATH);
  } catch (e) {
    console.error(e);
  }
}
