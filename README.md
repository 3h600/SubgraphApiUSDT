# First API for USDT

## Subgraph boilerplate

**npm init -y**

**pacakge.json** - add dependencies for typescript: "devDependencies": {
"@graphprotocol/graph-cli": "0.20.0",
"@graphprotocol/graph-ts": "^0.20.1",
"typescript": "^4.9.4"
}

**token.graphql** - functions to use in subgraph mapping, name of file can be different for each project

**token.yaml** - project version, repository, functions file(ex. token.graphql), source of address where are we query, entities: (event on abi), eventHandlers: function we want to observe

**tsconfig.json** - extends subgraph protocol on typescript

## Installing node_modules

npm install

##
