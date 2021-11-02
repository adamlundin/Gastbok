function submitForm()
{
    console.log("debug");
    debugger;

    const name = document.forms["guestBook"]["namn"].value;
    const epost = document.forms["guestBook"]["epost"].value;
    const telefon = document.forms["guestBook"]["telefon"].value;
    const meddelande = document.forms["guestBook"]["meddelande"].value;

    console.log(name);
    console.log(meddelande);
    console.log(telefon);
    console.log(epost);

    return false;
}