function ShowImage() {
    var selectedItem = document.getElementById("Movie").value;
    if (selectedItem == "Top Gun - Maverick") {
     document.getElementById("topgunmaverick-pic").style.display = "block";
     document.getElementById("pathaan-pic").style.display = "none";
    } else if (selectedItem == "Pathan - Hindi") {
     document.getElementById("topgunmaverick-pic").style.display = "none";
     document.getElementById("pathaan-pic").style.display = "block";
    }
}
function BookClick() {
    document.getElementById("DetailsContainer").style.display="block";
    document.getElementById("BookContainer").style.display="none";
    document.getElementById("lblMovies").innerHTML=document.getElementById("Movie").value;
    document.getElementById("lblCinema").innerHTML=document.getElementById("Cinema").value;
    document.getElementById("lblDate").innerHTML=document.getElementById("Date").value;
    document.getElementById("lblTime").innerHTML=document.getElementById("Time").value;
    document.getElementById("lblSeats").innerHTML=document.getElementById("Seats").value;
}
function ConfirmTicket() {
    document.getElementById("DetailsContainer").style.display="none";
    document.getElementById("BookContainer").style.display="none";
    document.getElementById("topgunmaverick-pic").style.display="none";
    document.getElementById("pathaan-pic").style.display="none";
    document.getElementById("HeadingContainer").style.display="block";
    document.getElementById("qrcode-pic").style.display="block";
    document.getElementById("ConfirmTicketContainer").style.display="block";
    document.getElementById("lblName").innerHTML=document.getElementById("Name").value;
    document.getElementById("lblEmail").innerHTML=document.getElementById("Email").value;
    document.getElementById("lblPhoneNumber").innerHTML=document.getElementById("PhoneNumber").value;
}