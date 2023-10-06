function FindProxyForURL(url, host)
{
if (isPlainHostName(host) || dnsDomainIs(host, ".company.com"))
return "DIRECT";
else
return "PROXY 127.0.0.1:3128; SOCKS5 127.0.0.1:9180; DIRECT";
}
