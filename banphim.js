//phim mui ten len
function upArrowPressed(){
    let element=document.getElementById('nobi');
    element.style.top=parseInt(element.style.top) - 5 + 'px';
}
//phim mui ten xuong
function downArrowPressed(){
    var element=document.getElementById('nobi');
    element.style.top=parseInt(element.style.top) + 5 + 'px';
}
//phim mui ten trai
function leftArrowPressed(){
    var element=document.getElementById('nobi');
    element.style.left=parseInt(element.style.left) - 5 + 'px';
}
//phim mui ten phai
function rightArrowPressed(){
    var element=document.getElementById('nobi');
    element.style.left=parseInt(element.style.left) + 5 + 'px';
}
//Ham nhan cac phim
function moveSelection(evt){
    switch(evt.keyCode){
        case 65:
            leftArrowPressed();
            break;
            case 68:
                rightArrowPressed();
                break;
                case 87:
                    upArrowPressed();
                    break;
                    case 83:
                        downArrowPressed();
                        break;
    }
}
//Xay dung ham doReady()
function doReady(){
    window.addEventListener('keydown', moveSelection);
}


