'use strict';

function getRequiredFilesFromParentChunks(parentChunks, allChunks) {
  let requiredFiles = [];

  for (let i = 0; i < parentChunks.length; i++) {
    const parentChunkId = parentChunks[i];
    const parentChunk = allChunks.find((chunk) => chunk.id === parentChunkId);

    if (parentChunk) {
      if (parentChunk.parents.length > 0) {
        requiredFiles = getRequiredFilesFromParentChunks(parentChunk.parents, allChunks);
      }
      requiredFiles = requiredFiles.concat(parentChunk.files);
    }
  }

  return requiredFiles;
}

function outputBuildInfo(res) {
  const logs = {
    size: {
      total: 0,
      gz: 0,
    },
    num: {
      total: 0,
      gz: 0,
    },
    chunks: {},
    assets: {},
  };
  const stats = res.toJson();

  for (const chunk of stats.chunks) {
    const { names, parents, id, hash, files } = chunk;
    const name = names[0] || id;
    const requiredFiles = [
      ...getRequiredFilesFromParentChunks(parents, stats.chunks),
      ...chunk.files,
    ];

    logs.chunks[`${name}`] = {
      hash,
      files,
      deps: requiredFiles,
    };
  }

  Object.entries(res.compilation.assets).forEach(([name, asset]) => {
    const size = asset.size();

    logs.size.total += size;
    logs.num.total++;

    if (name.includes('.gz')) {
      logs.size.gz += size;
      logs.num.gz++;
    }

    logs.assets[name] = {
      size,
    };
  });

  return logs;
}

module.exports = outputBuildInfo;
