function copybankinfo(){
  const bankInfo = document.querySelector('.bank-info').innerText;
  const textarea = document.createElement('textarea');
  textarea.value = bankInfo;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('nomor rekening sudah tersalin');
}