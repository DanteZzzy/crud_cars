// Este middleware é responsável por registrar as requisições feitas ao servidor.
// Ele imprime no console o método HTTP e a URL da requisição, o que pode ser útil para depuração 
// e monitoramento do tráfego do servidor.

function logger(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

module.exports = logger;