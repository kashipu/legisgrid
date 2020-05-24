function toggle() {
    let navBar = document.querySelector('#navToggle');
    let contentBox = document.querySelector('#contentBox')
    let footerBox = document.querySelector('#footerBox')
    let helpTextBox = document.querySelector('#helpText')
    navBar.classList.toggle('show-ico');
    contentBox.classList.toggle('none-ico');
    footerBox.classList.toggle('none-ico');
    helpTextBox.classList.toggle('none-ico');

}


