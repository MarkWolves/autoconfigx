function FindProxyForURL(url, host)
{
return "PROXY 127.0.0.1:3128; SOCKS5 127.0.0.1:9180; DIRECT";
}
