//instancia de login
var provider = new firebase.auth.GoogleAuthProvider();


//acciona login y abre ventana de logueo, luego oculta boton y muestra imagen del usuario
$('#login').click(function(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log(result.user);
            guardaDatos(result.user);
            $('#login').hide();
            $('#root').append("<img src='"+result.user.photoURL+"' />")
        });

});

//almacenamiento automatico de datos de usuario 
function guardaDatos(user){
    var usuario = {
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL
    }
    firebase.database().ref("Lista-usuarios/" + user.uid)
    .set(usuario)
}

//leyendo desde BD
firebase.database().ref("Lista-usuarios")
.on("child_added", function(){
    var lupe = s.val();
    $('#root').append("<img width='100px' src='"+user.foto+"' />")
})



