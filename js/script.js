$(document).ready(function() {
            $('#btnSend').click(function() {
                        var errores = '';
                        //validado Nombre===============================
                        if (~$('#names').val() == '') {
                            errores += '<p>Escriba un nombre</p>';
                        }

                    }