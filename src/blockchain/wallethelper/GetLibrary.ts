import web3 from 'web3';

export default function getLibrary(provider:any) {
  const library = new web3(provider);
  return library;
}