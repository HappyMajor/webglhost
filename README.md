# webglhost
Nodejs webserver used as the host for my webgl client

# How to use

1. Clone repo
2. Put webgl files exported by unity into the same directory as server.js (server expects an index.html)
3. containerize with docker ```docker build . -t happymajor/webglhost```
4. run the container ```docker run -p 8001:8080 -d happymajor/webglhost``` 
5. open localhost:8001 in your browser
