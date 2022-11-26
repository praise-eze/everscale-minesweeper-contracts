pragma ever-solidity >=0.61.2;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract MineSweeper {
  uint256[] mineNumbers;
  uint256[] moved;
  bool isLost;
  bool isWon;

  constructor() public {
    generateRandomMinesNumbers({ _mineCount: 7 });
  }

  /// @dev Generate 7 numbers ( 1 <= x >= 17) without duplicate numbers
  /// @param _mineCount used for the random generator number function
  /// @return uint256[7] return an array of 5 generated uint
  function generateRandomMinesNumbers(uint256 _mineCount) public returns (uint256[7]) {
    uint256[7] numbers;
    uint256 generatedNumber;

    // Execute 7 times (to generate 7 numbers)
    for (uint256 i = 0; i < 7; i++) {
      //   Check duplicate
      bool readyToAdd = false;
      uint256 maxRetry = 7;
      uint256 retry = 0;

      // Generate a new number while it is a duplicate, up to 5 times (to prevent errors and infinite loops)
      while (!readyToAdd && retry <= maxRetry) {
        generatedNumber = uint256(tvm.hash(abi.encode(msg.sender, tx.timestamp, i, retry, _mineCount)) % 17) + 1;
        bool isDuplicate = false;

        // Look in all already generated numbers array if the new generated number is already there.
        for (uint256 j = 0; j < numbers.length; j++) {
          if (numbers[j] == generatedNumber) {
            isDuplicate = true;
            break;
          }
        }
        readyToAdd = !isDuplicate;
        retry++;
      }
      // Throw if we hit maximum retry : generated a duplicate 7 times in a row.
      require(retry < maxRetry, 20, "Error generating random ticket numbers. Max retry.");
      numbers[i] = uint256(generatedNumber);
      mineNumbers.push(numbers[i]);
    }

    return numbers;
  }

  function checkMineNumber(uint256 _num) public view returns (bool answ) {
    for (uint256 i = 0; i < mineNumbers.length; i++) {
      if (mineNumbers[i] == _num) {
        answ = true;
        break;
      }
    }
    answ = false;
  }

  function move(uint256 _id) public returns (bool result) {
    tvm.accept();

    require(isLost == false || isWon == true, 10, "already won");
    isLost = checkMineNumber(_id);
    for (uint256 i = 0; i < 17; i++) {
      if (moved[i] == _id) {
        result = true;
        break;
      }
    }
    if (moved.length == 9 && isLost == false) {
      isWon = true;
    }
    moved.push(_id);
  }

  function checkAreaMoved(uint256 _num) public view returns (bool _result) {
    for (uint256 i = 0; i < moved.length; i++) {
      if (moved[i] == _num) {
        _result = true;
        break;
      }
    }
    _result = false;
  }

  function checkIsWon() public view returns (bool result) {
    result = isWon;
  }

  function checkIsLost() public view returns (bool result) {
    result = isLost;
  }
}
