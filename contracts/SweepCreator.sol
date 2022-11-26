pragma ever-solidity >=0.61.2;
pragma AbiHeader expire;
pragma AbiHeader pubkey;
import "./MineSweeper.sol";

contract SweepCreator {
  mapping(address => address[]) boardCreated;
  event _boardCreated(address _board);

  function createBoard(TvmCell sweepercode) external {
    tvm.accept();
    MineSweeper sweeper = new MineSweeper{ code: sweepercode, value: 0, flag: 128 }();
    emit _boardCreated(sweeper);
    boardCreated[msg.sender].push(sweeper);
  }

  function lastestBoardWithMsg() public view returns (address) {
    return boardCreated[msg.sender][boardCreated[msg.sender].length - 1];
  }

  function lastestBoardWithoutMsg(address _addr) public view returns (address) {
    return boardCreated[_addr][boardCreated[_addr].length - 1];
  }
}
