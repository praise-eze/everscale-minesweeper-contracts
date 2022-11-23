import { Address, WalletTypes, zeroAddress } from "locklift/.";

async function main() {
  /*
  const nft_address = response.nft_address;
  */
  const nft_address = "0:1a6af6baff08ca7a73796e55d5d87d3c93235050491af10e4208564d519d8c56";

  try {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const nft = await locklift.factory.getDeployedContract("SweepCreator", new Address(nft_address));
    /*
    const accountsFactory = await locklift.factory.getAccountsFactory("Wallet");
    const { account: account, tx } = await accountsFactory.deployNewAccount({
      publicKey: signer.publicKey,
      initParams: {
        _randomNonce: 0,
      },
      constructorParams: {},
      value: locklift.utils.toNano(2),
    });
    const userBalance = await locklift.provider.getBalance(account.address);
    */
    //  console.log(locklift.utils.fromNano(userBalance));

    /*
    const run = account.runTarget(
      {
        contract: collection,
        value: locklift.utils.toNano(1.5),
      },
      collection =>
        collection.methods.mintNft({
          json: payload,
        }),
    );
*/
    // const Trace = await locklift.tracing.trace(run);
    // await Trace.traceTree?.beautyPrint();
    console.log("-----------------------------------------------------------------");
    console.log("🔎 Getting NFT details for: " + nft_address);
    console.log("-----------------------------------------------------------------");
    const nftjson = await nft.methods
      .lastestBoardWithoutMsg({
        _addr: new Address("0:6c71c6e075ed0d1e235b38d0060bf753b587e971eac27fa12295c1072529c6b5"),
      })
      .call();
    console.log("✅ json mmetadata for this NFT: " + JSON.stringify(nftjson.value0));
    /*
    console.log("-----------------------------------------------------------------");
    const rewardrate = await nft.methods.rewardRate().call();
    console.log(`✅ This NFT reward rate: ${JSON.stringify(Number(rewardrate.value0))}`);
    */
  } catch (err) {
    console.log("❌ Error: " + JSON.stringify(err));
  }
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
