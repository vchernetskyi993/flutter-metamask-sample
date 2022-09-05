// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract Greeting {
    string public greeting = "Hello, World!";

    function setGreeting(string calldata text) external {
        greeting = text;
    }
}
