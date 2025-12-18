<script>
function getTransactions() {
  return JSON.parse(localStorage.getItem("zifx_transactions")) || [];
}

function saveTransactions(data) {
  localStorage.setItem("zifx_transactions", JSON.stringify(data));
}
</script>
