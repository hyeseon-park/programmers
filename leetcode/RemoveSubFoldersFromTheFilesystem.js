let folder = ["/a/b/c", "/a/b/ca", "/a/b/d"];

var removeSubfolders = function (folder) {
  let set = new Set();
  folder.sort();

  for (var i = 0; i < folder.length; i++) {
    let isDup = false;
    let target = folder[i];

    for (var j = i + 1; j < folder.length; j++) {
      if (folder[j].startsWith(target)) {
        if (folder[j].substring(target.length).startsWith("/") === true) {
          folder.splice(j, 1);
          j--;
          set.add(target);
          isDup = true;
        }
      }
    }
    if (isDup === false) set.add(target);
  }

  return [...set];
};

var removeSubfolders = function (folder) {
  let set = new Set();
  folder.sort();

  outer: for (var i = 0; i < folder.length; i++) {
    for (var j = 2; j < folder[i].length; ++j) {
      if (folder[i].charAt(j) === "/" && set.has(folder[i].substring(0, j))) {
        continue outer;
      }
    }
    set.add(folder[i]);
  }

  return [...set];
};

console.log(removeSubfolders(folder));
