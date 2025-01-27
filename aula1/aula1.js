let idade = 25;
const nome = "João";
let pessoa_viva = true;
let pessoa_casada = false;
let status_vida = false,
  status_casamento = false;

function get_info_ver() {
  if (pessoa_viva == true) {
    status_vida = `vivo(a)`;
    status_casamento = `..., me esqueci!`;
  } else {
    status_vida = `morto(a)`;
    status_casamento = `desencarnado!`;
  }

  let text_out = `Hey meu nome é ${nome} e tenho ${idade} anos, atualmente estou ${status_vida} logo meu status de relacionamento é ${status_casamento}.`;

  document.getElementById("text_h2").innerHTML = text_out;
}
get_info_ver();
