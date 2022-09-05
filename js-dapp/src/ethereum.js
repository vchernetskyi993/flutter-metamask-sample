import { ethers } from "ethers";
import abiJson from "./abi.json"

export async function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  const address = process.env.REACT_APP_CONTRACT_ADDRESS;
  const contract = new ethers.Contract(address, abiJson.abi, signer);
  return contract;
}
