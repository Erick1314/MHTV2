// Configura el botón de Iniciar Sesión con Google
document.getElementById('btnGoogleLogin').addEventListener('click', function() {
    // Llama a la función de inicio de sesión con Google
    googleSignIn();
});

// Función para iniciar sesión con Google
function googleSignIn() {
    // Abre la ventana emergente de inicio de sesión de Google
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // Maneja el resultado del inicio de sesión
        var user = result.user;
        console.log('Inicio de sesión exitoso con Google:', user);
    }).catch(function(error) {
        // Maneja errores
        console.error('Error al iniciar sesión con Google:', error);
    });
}
// Cerrar sesión con Google
function googleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('Sesión cerrada.');
    });
  }
      <><script src="https://apis.google.com/js/platform.js" async defer></script><script>
          document.getElementById('btnGoogleLogin').addEventListener('click', function() {gapi.load('auth2', function () {
              gapi.auth2.init({
                  client_id: 'TU_CLIENT_ID', // Reemplaza con tu ID de cliente
              }).then(function (auth2) {
                  auth2.signIn().then(function (googleUser) {
                      // Maneja el usuario de Google
                      var profile = googleUser.getBasicProfile();
                      console.log('ID: ' + profile.getId());
                      console.log('Name: ' + profile.getName());
                      console.log('Email: ' + profile.getEmail());
                      console.log('Image URL: ' + profile.getImageUrl());
                  });
              });
          })};
);
      </script></>