function myAlert(type, msg, id) {
  let html = `
    <div class="alert alert-${type}" role="alert">
  ${msg}
</div>
    `
  document.getElementById(id).innerHTML = html;

  setTimeout(function () {
    html = ''
    document.getElementById(id).innerHTML = html


  }, 8000)
}

