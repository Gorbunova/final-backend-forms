document.querySelector('.element_numbers').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

function handleChangeCode() {
  document.querySelectorAll('.activation_code_wrapper').forEach(n => n.classList.remove('element_wrapper_error'));
  console.log(document.querySelectorAll('.activation_code_wrapper'))
}