const winCounter = { count: 0, removeWins };
if (localStorage.getItem("fx_winCount") !== null) winCounter.count = localStorage.getItem("fx_winCount");

function removeWins() {
    if (confirm('Do you really want to reset your wins?')) {
        winCounter.count = 0;
        localStorage.removeItem('fx_winCount');
        alert("Successfully reset wins");
    }
}

export default winCounter