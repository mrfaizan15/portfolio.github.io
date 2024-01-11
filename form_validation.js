function validation()
{
    var un = document.getElementById("uname").value
    var unp = /^[a-zA-Z]+$/
    var ph = document.getElementById("phone").value
    var php = /^[6-9]{1}[0-9]{9}$/

    if(un=="")
    {
        document.getElementById("msg").innerHTML="Enter The UserName"
        return false
    }
    if(un.match(unp))
    true
    else
    {
        document.getElementById("msg").innerHTML="UserName Shoud Contains Alphabets Only"
        return false
    }
    if(un.length<3)
    {
        document.getElementById("msg").innerHTML="UserName Shoud Contains minimum 3 Charaters"
        return false
    }
    if(un.length>12)
    {
        document.getElementById("msg").innerHTML="UserName Shoud Contains maximum 12 Charaters"
        return false
    }

    if(ph=="")
    {
        document.getElementById("msg1").innerHTML="Enter The Phone Number"
        return false
    }
    if(ph.match(php))
    true
    else
    {
        document.getElementById("msg1").innerHTML="Invalid Phone Number"
        return false
    }
   
}