<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>

	<p id ="demo"></p>

	<script type="text/javascript">

        var myDate = new Date();
        var name = window.prompt("Please enter your name: ");

    if (myDate.getHours() < 12) {
    document.write("Good Morning " +name);
    }
    else if(myDate.getHours() >=12 && myDate.getHours() <=17){
    document.write("Good Afternoon " +name);
    }
    else if (myDate.getHours() > 17 && myDate.getHours() <=24) {
    document.write("Good Evening " +name);
    }
    else {
    document.write("Good Night" +name);
}
</script>

</body>
</html>
