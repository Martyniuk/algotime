/**
 * @param {string} IP
 * @return {string}
 */
// 1 - if IP is empty -> return "Neither"
// 2 - if IP includes '.' -> check for 'IPv4'
// 3 - else if IP includes ':' -> check for 'IPv6'
// 4 - else return "Neither"

// 5 - write helper function for checking IPv4
// 5.1 - IP split('.')
// 5.2 - splitted IP length should be 4
// 5.3 - every element should be number with range from 0-255
// 5.4 - otherwise - return false
// 6 - write helper function for checking IPv6
// 6.2 - IP split(':')
// 6.3 - splittedIP should be length of 8
// 6.4 - every element should be length of 4
// 6.4.1 - not bigger then 4 and not less 1

function isHex(num) {
  const regExp = new RegExp(/^[0-9a-fA-F]+$/);

  return regExp.test(num);
}

function isNum(num) {
  const regExp = new RegExp(/^[0-9]+$/);

  return regExp.test(num);
}

function lengthCheck(num) {
  return (
    num.length === 1 || num.length === 2 || num.length === 3 || num.length === 4
  );
}

function validateElementV4(e) {
  const invalidWithZero = e.length > 1 && e.startsWith(0);

  return isNum(e) && !invalidWithZero && parseInt(e) >= 0 && parseInt(e) <= 255;
}

function checkIPv4validity(IP) {
  const IParray = IP.split(".");
  const validElements = IParray.every((v) => validateElementV4(v));

  return IParray.length === 4 && validElements && "IPv4";
}

function checkIPv6validity(IP) {
  const IParray = IP.split(":");
  const validElements = IParray.every((v) => lengthCheck(v) && isHex(v));

  return IParray.length === 8 && validElements && "IPv6";
}

const validIPAddress = function (IP) {
  if (!IP) {
    return "Neither";
  }
  const isV4 = IP.includes(".");
  const isV6 = IP.includes(":");
  let result = "Neither";

  if (isV4) {
    result = checkIPv4validity(IP);
  } else if (isV6) {
    result = checkIPv6validity(IP);
  }

  return result || "Neither";
};
