function validation(){
    var user = document.getElementById("name")
    var password =  document.getElementById("pass")
    if(user.value.trim() =="" || password.value.trim()=="")
    {
        alert("pleace fill text box");
        return false;
    }
    else
    {
        true
    }

}