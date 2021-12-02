const { write } = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url=== '/'){
        res.end('I am live now, listening on port 5000 on the home page')
    }

    if(req.url=== '/about'){
        res.end('About Page yooo')
    }
    res.end(`
    
    
    <h1>Opps !!!</h2>
    <p>you are landed in a wrong spot hommie!!!!!</p>
    `)

    console.log(req)
    
    


}
)

server.listen(5000)