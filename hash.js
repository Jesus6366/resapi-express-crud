const crypto = require("crypto");
const fs = require("fs/promises"); // For asynchronous file operations

async function calculateSHA3256(data) {
  const hash = crypto.createHash("sha3-256");
  hash.update(data);
  return hash.digest("hex").toLowerCase(); // Lowercase hex digest
}

async function processDirectory(directoryPath, yourEmail) {
  const files = await fs.readdir(directoryPath);

  // Calculate SHA3-256 for each file and sort the hashes
  const sortedHashes = await Promise.all(
    files.map(async (file) => {
      const filePath = `${directoryPath}/${file}`;
      const fileData = await fs.readFile(filePath);
      return calculateSHA3256(fileData);
    })
  ).then((hashes) => hashes.sort());

  // Join sorted hashes and concatenate with email
  const joinedHashes = sortedHashes.join("");
  const finalString = joinedHashes + yourEmail.toLowerCase();

  // Calculate final SHA3-256
  const finalHash = calculateSHA3256(finalString);

  return finalHash;
}

// Replace 'path/to/your/task2/directory' with the actual path to your folder
const directoryPath = "./task2";
const yourEmail = "polibos6366@gmail.com"; // Your actual email address

processDirectory(directoryPath, yourEmail)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
