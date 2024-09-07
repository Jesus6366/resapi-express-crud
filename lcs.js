const args = process.argv.slice(2);
if (args.length < 2) {
  console.log(args[0] || "");
} else {
  const strs = args.map(String);
  const lcs = (strs) => {
    const [first] = strs;
    for (let len = first.length; len; len--) {
      for (let start = 0; start <= first.length - len; start++) {
        const substr = first.substring(start, start + len);
        if (strs.every((str) => str.includes(substr))) return substr;
      }
    }
    return "";
  };
  console.log(lcs(strs));
}
