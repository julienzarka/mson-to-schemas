function getDataStructure(result) {
  if (
    !result.meta ||
      !result.meta.classes ||
      !result.meta.classes.includes('dataStructures')
  ) {
    if (!result.content)
      return [];
    var x = 0;
    for (; x < result.content.length; ++x) {
      var local_result = getDataStructure(result.content[x]);
      if (local_result.length > 0)
        res.push.apply(res, local_result);
    }
  } else {
    return result.content;
  }
  return res;
}

export default function getDataStructures(result) {
  result = getDataStructure(result);
  return result.map(entry => entry.content[0]);
}
