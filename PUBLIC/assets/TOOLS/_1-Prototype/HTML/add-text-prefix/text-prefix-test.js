
  let bridge = function (text) {
    let options = this.options.get();
    let prefix = options.prefix;
    let singlePrefixMode = options["single-prefix-mode"];
    let multiLineMode = options["multi-line"] || options["multi-line-mode"];
    let paragraphMode = options["paragraph-mode"];
    let skipEmptyLines = options["skip-empty-lines"];

    let lines = text.split("\n");
    let ret = "";

    if (
      (multiLineMode == false || multiLineMode === undefined) &&
      (paragraphMode == false || paragraphMode === undefined)
    ) {
      singlePrefixMode = true;
    }

    if (multiLineMode) {
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (skipEmptyLines && line.length == 0) {
          ret += "\n";
          continue;
        }
        ret += prefix + line + "\n";
      }
      return ret;
    } else if (paragraphMode) {
      let newParagraph = true;
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.length == 0) {
          newParagraph = true;
          ret += "\n";
          continue;
        }
        if (newParagraph) {
          ret += prefix + line + "\n";
          newParagraph = false;
        } else {
          ret += line + "\n";
        }
      }
      return ret;
    } else if (singlePrefixMode) {
      return prefix + text;
    }
  };

  return {
    converter: bridge,
    config: {},
  };

