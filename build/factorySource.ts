const mineSweeperAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"generateRandomMinesNumbers","inputs":[{"name":"_mineCount","type":"uint256"}],"outputs":[{"name":"value0","type":"uint256[]"}]},{"name":"checkMineNumber","inputs":[{"name":"_num","type":"uint256"}],"outputs":[{"name":"answ","type":"bool"}]},{"name":"move","inputs":[{"name":"_id","type":"uint256"}],"outputs":[{"name":"result","type":"bool"}]},{"name":"checkAreaMoved","inputs":[{"name":"_num","type":"uint256"}],"outputs":[{"name":"_result","type":"bool"}]},{"name":"checkIsWon","inputs":[],"outputs":[{"name":"result","type":"bool"}]},{"name":"checkIsLost","inputs":[],"outputs":[{"name":"result","type":"bool"}]},{"name":"constructor","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"mineNumbers","type":"uint256[]"},{"name":"moved","type":"uint256[]"},{"name":"isLost","type":"bool"},{"name":"isWon","type":"bool"}]} as const
const sampleAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]},{"name":"setState","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_state","type":"uint256"}]}],"data":[{"key":1,"name":"_nonce","type":"uint16"}],"events":[{"name":"StateChange","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint16"},{"name":"state","type":"uint256"}]} as const
const sweepCreatorAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"createBoard","inputs":[{"name":"sweepercode","type":"cell"}],"outputs":[]},{"name":"lastestBoardWithMsg","inputs":[],"outputs":[{"name":"value0","type":"address"}]},{"name":"lastestBoardWithoutMsg","inputs":[{"name":"_addr","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"constructor","inputs":[],"outputs":[]}],"data":[],"events":[{"name":"_boardCreated","inputs":[{"name":"_board","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"boardCreated","type":"map(address,address[])"}]} as const

export const factorySource = {
    MineSweeper: mineSweeperAbi,
    Sample: sampleAbi,
    SweepCreator: sweepCreatorAbi
} as const

export type FactorySource = typeof factorySource
export type MineSweeperAbi = typeof mineSweeperAbi
export type SampleAbi = typeof sampleAbi
export type SweepCreatorAbi = typeof sweepCreatorAbi