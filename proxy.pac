function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, "localhost")) {
    return "DIRECT";
  } else {
    return "PROXY 127.0.0.1:8118; 127.0.0.1:3128; SOCKS5 127.0.0.1:9050; DIRECT";
  }
}
