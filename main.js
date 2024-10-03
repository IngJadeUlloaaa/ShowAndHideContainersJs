function ShowHome(){
    const home = document.getElementById('homeContainer');
    const profile = document.getElementById('profileContainer');

    home.classList.remove('hidden2');
    profile.classList.add('hidden2')
}

function ShowProfile(){
    const home = document.getElementById('homeContainer');
    const profile = document.getElementById('profileContainer');

    profile.classList.remove('hidden2')
    home.classList.add('hidden2');
}