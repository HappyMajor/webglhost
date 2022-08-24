# webglhost
Nodejs webserver used as the host for my webgl client

# How to use

1. Clone repo
2. Put webgl files exported by unity into the client folder
3. Open terminal and cd into the freshly cloned repo 
4. containerize with docker ```docker build . -t happymajor/webglhost```
5. run the container ```docker run -p 8001:8080 -d happymajor/webglhost``` 
6. open localhost:8001 in your browser

# What to be careful of

1. You need to disable compression in Unity before building the WebGl client```files>build settings>player settings>Publishing settings``` (Otherwise you need HTTPS for br files)
