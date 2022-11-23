async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: sweeper, tx } = await locklift.factory.deployContract({
    contract: "SweepCreator",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: 0,
    },
    constructorParams: {},
    value: locklift.utils.toNano(0.01),
  });

  console.log(`Sweeper deployed at: ${sweeper.address.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
