const { ethereum } = window;

export const handleRPCWalletLogin = async () => {
  try {
    if (typeof ethereum !== "undefined") {
      const userAddress = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (ethereum.isMetaMask)
        console.log("Metamask Says: Other EVM Compatible Wallets not detected!");
      else console.log("Metamask Says: Other EVM Compatible wallets maybe installed!");

      const tempRpcData = {
        userPublicAddress: userAddress[0],
        isWalletConnected: true,
      };

      const currentDate = new Date();
      currentDate.setTime(currentDate.getTime() + 6 * 60 * 60 * 1000);

      localStorage.setItem("rpcUserData", JSON.stringify(tempRpcData));
      localStorage.setItem("isRPCUserAuthenticated", true);
      localStorage.setItem("rpcUserExpiresAt", currentDate);

      return tempRpcData;
    } else alert("Metamask is not installed!");
  } catch (error) {
    console.error(error);
  }
};

export const handleRPCLogout = (dispatch) => {
  localStorage.removeItem("isRPCUserAuthenticated");
  localStorage.removeItem("rpcUserData");

  dispatch({
    rpcAccountAddress: "",
    isWalletSet: false,
  });
};
