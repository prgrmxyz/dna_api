# STEPS

## (OPTIONAL) STEP 1: TURN ON MONGODB
### Skip: if you have mongodb running at your local
```sudo docker-compose up -d```

## STEP 2: INSTALL NODE PACKAGES
```npm install```

## STEP 3: DOWNLOAD (https://opensnp.org/data/8193.23andme.6530) AND LOAD DATA TO MONGODB 
```bash setup.sh```

## STEP 4: RUN THE SERVER (PORT 3000)
```node bin/www```

# View the response at http://localhost:3000/

# YOU CAN ACCESS THE API USING
```curl -X GET http://localhost:3000/api/data```