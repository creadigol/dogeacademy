// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract GogsNft is ERC721URIStorage, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;
    Counters.Counter private dogWhitelist;
    Counters.Counter private alphaWhitelist;

    string public baseURI;
    
    uint256 public cost = 0.02 ether;
    uint256 public whitelistCost = 0.02 ether;
    uint256 public maxSupply = 10000;
    uint256 public maxDogWhitelist = 200;
    uint256 public maxWhitelsitAlpha = 1696;
    uint256 public maxMintAmountPerTx = 1;
    uint256 public pendingRevival = 1;
    uint256 public dogesaleDuration = 24;

    bytes32 public dogWhitelists;
    bytes32 public alphsWhitelists; 

    bool public paused = true;
    bool private dogeSale = false;

    uint256 public saleEndtime;

    constructor() ERC721("TEST CONTRACT", "TEST") {
            baseURI = "http://thepicab.com/dognft/Ipfs/";
    }

    modifier mintCompliance() {
        require(!paused, "The contract is paused!");
        require(supply.current() + 1 <= maxSupply, "Max supply exceeded!");
        _;
    }

    function updateWhitelists(bytes32 _dogWhitelists, bytes32 _alphsWhitelists) external onlyOwner(){
        dogWhitelists = _dogWhitelists;
        alphsWhitelists = _alphsWhitelists;
    }

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }
    
    function DogWhitelsitSupply() public view returns (uint256) {
        return dogWhitelist.current();
    }

    function alphaWhitelistSupply() public view returns (uint256) {
        return alphaWhitelist.current();
    }

    function mint(uint256 _mintAmount, bytes32[] calldata _data) public payable mintCompliance() {
        
        uint256 addressBalance = ERC721.balanceOf(msg.sender);
        
        if(block.timestamp < saleEndtime){
            if(MerkleProof.verify(_data, dogWhitelists, keccak256(abi.encodePacked(msg.sender)))){
                require((addressBalance + _mintAmount) <= maxMintAmountPerTx, "Out of limit nft amount");
                require(dogWhitelist.current() + _mintAmount <= maxDogWhitelist, "Max supply exceeded!");
                _dogMint(_mintAmount);
            }else{
                require(!dogeSale, "You are in not dog list");
            }
        }else{
            if(MerkleProof.verify(_data, alphsWhitelists, keccak256(abi.encodePacked(msg.sender)))){
                require(alphaWhitelist.current() + _mintAmount <= maxWhitelsitAlpha, "Max supply exceeded!");
                require(msg.value >= cost * whitelistCost, "Insufficient funds!");
                _alphaMint(_mintAmount);
            }else{
                require(msg.value >= cost * _mintAmount, "Insufficient funds!");
                _mint(_mintAmount);
            }
        }
    }

    function setMaxSupply(uint256 _totalAmount) public onlyOwner {
        maxSupply = _totalAmount;
    }

    function setDogWhitelistMaxSupply(uint256 _maxDogWhitelist) public onlyOwner {
        maxDogWhitelist = _maxDogWhitelist;
    }

    function setAlphaWhitelistMaxSupply(uint256 _maxWhitelsitAlpha) public onlyOwner {
        maxWhitelsitAlpha = _maxWhitelsitAlpha;
    }

    function setCost(uint256 _cost) public onlyOwner {
        cost = _cost;
    }

    function setWhitelistCost(uint256 _whitelistCost) public onlyOwner {
        whitelistCost = _whitelistCost;
    }

    function setBaseUri(string memory _uriPrefix) public onlyOwner {
        baseURI = _uriPrefix;
    }

    function setDogSaleDuration(uint16 _hours) public onlyOwner {
        dogesaleDuration = _hours;
    }

    function setPaused(bool _state) public onlyOwner{
        paused = _state;
        if(!dogeSale){
            saleEndtime = (block.timestamp + (dogesaleDuration * 1 minutes));
            dogeSale = true;
        }
    }

    function withdraw() public onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }

    function reveal(string[] memory nftData) public onlyOwner{
        
        uint256 newTokenCounter = supply.current();
        uint256 mintcounters = 0;
        
        for(uint256 i = pendingRevival; i <= newTokenCounter ; i++){
            _setTokenURI(i, nftData[mintcounters]);
            mintcounters++;
        }
        pendingRevival = (newTokenCounter+1);
    }

    function _mint(uint256 _amount) private {
        for (uint256 i; i < _amount; i++) {
            supply.increment();
            _safeMint(msg.sender, supply.current());
        }
    }

    function _dogMint(uint256 _amount) private {
        for (uint256 i; i < _amount; i++) {
            supply.increment();
            dogWhitelist.increment();
            _safeMint(msg.sender, supply.current());
        }
    }

    function _alphaMint(uint256 _amount) private {
        for (uint256 i; i < _amount; i++) {
            supply.increment();
            alphaWhitelist.increment();
            _safeMint(msg.sender, supply.current());
        }
    }
 
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require( _exists(_tokenId), "ERC721Metadata: URI query for nonexistent token" );
        
        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, _tokenId.toString())) : "";
    }

}