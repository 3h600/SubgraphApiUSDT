# First API for USDT

## Subgraph boilerplate

**npm init -y**

**pacakge.json** - add dependencies for typescript: "devDependencies": {
"@graphprotocol/graph-cli": "0.20.0",
"@graphprotocol/graph-ts": "^0.20.1",
"typescript": "^4.9.4"
}

*also*

 "scripts": {
    "codegen": "graph codegen ./token.yaml"
  },

  *script for deploy*
  *if legacy deployment +node path +ipfs files hosting*
    "deploy": "graph deploy --product hosted--service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ 3h600/usdt-transfers ./token.yaml --access-token"
  *if studio deployment*


**token.graphql** - functions to use in subgraph mapping, name of file can be different for each project

**token.yaml** - project version, repository, functions file(ex. token.graphql), source of address where are we query, entities: (event on abi), eventHandlers: function we want to observe

**tsconfig.json** - extends subgraph protocol on typescript

## Installing node_modules

npm install

## Create the mapping/transfer/ts
*Specifying handlers*
*Exchange* - is the name of token.graphql functions
*Transfer* - is the event


## Create place to deploy
*thegraph.com/hosted-service*

**copy access token** after creating one

## Deploying
* generating the schema and transfer for transfer.ts
*because we added in package.json @graphprotocol we can generate*
**graph codegen ./token.yaml**
