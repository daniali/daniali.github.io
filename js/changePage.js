function pauseAndChange(url, timeout) {
  setTimeout(function() {
    document.location.href = url;
  }, timeout);
}
