function hash_js () {
  pass = document.getElementById('password').value
  xmlCall('xx', 'hashes', 'hasher.php?pass=' + pass)
}

function xmlCall (a, b, d) {
  if (a === '') {
    document.getElementById(b).innerHTML = ''
    return
  } else {
    var xmlhttp
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById(b).innerHTML = xmlhttp.responseText
      }
    }
    xmlhttp.open('GET', d, true)
    xmlhttp.send()
  }
  return true
}
