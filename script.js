const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
});

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert("seu formulario foi enviado");
}
);


