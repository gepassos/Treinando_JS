function myAlert(type, msg, id){
    const html = `
    <div class="alert alert-${type}" role="alert">
  ${msg}
</div>
    `
document.getElementById(id).innerHTML = html;
}