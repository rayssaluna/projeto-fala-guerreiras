
$(function () {
    $("#slideHome ul").cycle({
        fx: 'fade',  // efeito
        speed: 2000, // tempo
        timeout: 3000, // tempo que ele demora para trocar 
        prev: '#previous',
        next: '#next',
    })
})
