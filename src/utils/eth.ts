import Web3 from 'web3'
const web3 = new Web3();

/***
 * 创建钱包
 * @param entropy: 自定义的密码(可选)
 */
export const createAccount = (entropy?: string) => {
  return web3.eth.accounts.create(entropy)
}

/***
 *
 */
export const createWallet = () => {
  console.log(web3.eth.accounts.wallet)
  return web3.eth.accounts.wallet.create(1)
}
