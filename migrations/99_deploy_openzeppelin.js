var ERC20 = artifacts.require("ERC20");
var SafeMath = artifacts.require("SafeMath");
var ERC20Burnable = artifacts.require("ERC20Burnable");
var ERC20Capped = artifacts.require("ERC20Capped");
var ERC20Mintable = artifacts.require("ERC20Mintable");
var Roles = artifacts.require("Roles");
var ERC20Pausable = artifacts.require("ERC20Pausable");
var SafeERC20 = artifacts.require("SafeERC20");
var Address = artifacts.require("Address");
var TokenTimelock = artifacts.require("TokenTimelock");

module.exports = deployer => {
    deployer.deploy(SafeMath);
    deployer.deploy(Roles);
    deployer.deploy(SafeERC20);
    deployer.deploy(Address);
    deployer.link(SafeMath, ERC20);
    deployer.link(SafeMath, ERC20Burnable);
    deployer.link(SafeMath, ERC20Capped);
    deployer.link(Roles, ERC20Capped);
    deployer.link(SafeMath, ERC20Mintable);
    deployer.link(Roles, ERC20Mintable);
    deployer.link(SafeMath, ERC20Pausable);
    deployer.link(Roles, ERC20Pausable);
    deployer.link(SafeERC20, TokenTimelock);
    deployer.deploy(ERC20);
    deployer.deploy(ERC20Burnable);
    deployer.deploy(ERC20Capped);
    deployer.deploy(ERC20Mintable);
    deployer.deploy(ERC20Pausable);
    deployer.deploy(TokenTimelock);
};