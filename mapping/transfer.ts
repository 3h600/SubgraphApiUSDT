import { Exchange } from "../generated/schema";
import { Transfer } from "../generated/Transfer/USDT";

// function returns void
export function handleTransfer(event: Transfer): void {
  // load the event
  // id is a unique hash but needs to be lower cased by toHex()
  let transfer = Exchange.load(event.transaction.hash.toHex());
  // if id doesn't exist
  // in first call id will not exist
  if (transfer === null) {
    transfer = new Exchange(event.transaction.hash.toHex());
  }

  // to set tbe block rule
  transfer.block = event.block.number;
  // once we load event we can do functions on it like from, to etc... from token.graphql
  transfer.from = event.params.from.toHex();
  transfer.to = event.params.to.toHex();
  transfer.amount = event.params.value;

  transfer.save();
}
