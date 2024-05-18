        
function showMessage(letter) {
    let message = '';
    switch (letter) {
        case 'F':
            message = 'La letra F significa [significado F].';
            break;
        case 'R':
            message = 'La letra R significa [significado R].';
            break;
        case 'A':
            message = 'La letra A significa [significado A].';
            break;
        case 'Y':
            message = 'La letra Y significa [significado Y].';
            break;
        case 'L':
            message = 'La letra L significa [significado L].';
            break;
        case 'I':
            message = 'La letra I significa [significado I].';
            break;
        case 'N':
            message = 'La letra N significa [significado N].';
            break;
        default:
            message = 'No se ha proporcionado un significado para esta letra.';
    }
    alert(message);
}
