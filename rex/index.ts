/* This entire file probably doesn't need to be here. At the moment just exists
to please a tsconfig error that appears if not present. */

async function main() {
  console.log("Index file. Running this does nothing.");
}

main()
  .then(async () => {
    console.log("Main function successful.");
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
