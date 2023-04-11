function validate(elem) {
    if(elem.val() == '' ) {
        elem.parent().find('.text-muted').show()
        return false
    } else {
        elem.parent().find('.text-muted').hide()    
    }
}

$('.form').on('submit', function(e) {
    e.preventDefault()
    const inputName = $('#name')
    validate(inputName)
    if(inputName.hasClass('invalid')) {
        console.log('Verificar os campos obrigatóios')
        return false
    } else {
        $(this).submit()
    }
})

$('.form').on('blur', '#name', function() {
    validate($(this))   
})