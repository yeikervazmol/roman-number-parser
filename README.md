# roman-number-parser

### Usage
Once you have downloaded the project run:
```
npm install
```

And then:
```
npm start
```

You will be able to parse an arabic number into a roman number using:
`http:localhost:3000/number/:number`

For monitoring you can ping `http:localhost:3000/healthcheck`. Sample response:
```
{
    "status": "OK"
}
```

### Dockerization
If you want to build the image use the following command from the root of the project:
```
docker build -t roman-number-parser .
```


To run the docker container use:
```
docker run -d --name running-roman-number-parser -p 3000:3000 roman-number-parser
```

Then you will have the API exposed in `dockerhost:3000`

### Steps followed to create this parser:

1. Jasmine example project
2. Create lib and tests
3. Create the server and tests
4. Dockerization of the app
