const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const boba = {
    'taro boba': {
        'prep-time': 3,
        'pearl colour': 'Purple',
        'flavour': 'Taro'},

    'brown sugar boba':{
        'prep-time': 5,
        'pearl colour': 'Black',
        'flavour': 'Brown Sugar' },

    'unknown':{
        'prep-time': 0,
        'pearl colour': 'unknown',
        'flavour': 'unknown'}}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')})

app.get('/api/:name',(request,response)=>{
    const bobaName = request.params.name.toLowerCase()

    if ( boba[bobaName] ){
        response.json(boba[bobaName])}
    else {
        response.json(boba['unknown'])}})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)})