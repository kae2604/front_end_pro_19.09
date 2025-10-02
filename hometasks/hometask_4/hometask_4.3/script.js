let yearOfBirth = prompt('Будь ласка введіть Ваш рік народження');
let placeOflive = prompt('Будь ласка введіть Ваше місце проживання');
let favoriteSport = prompt('Будь ласка введіть Ваш улюблений вид спорту');

let checkage;

if (!yearOfBirth){
    checkage = 'Я розумію що це не красиво питати вік';
}else{
    checkage = `Ваш вік ${2025 - +yearOfBirth}`
};

let checkCity;
let placeOfliveBigLetter;

if (!placeOflive){
    checkCity = 'Шкода, що Ви не захотіли ввести місце проживання';
 } else{
    placeOfliveBigLetter = placeOflive[0].toUpperCase() + placeOflive.slice(1);

    switch (placeOfliveBigLetter) {
        case 'Київ' :
                checkCity = 'Ви жевете в столиці України';
            break;
        case 'Вашингтон' :
                checkCity = 'Ви жевете в столиці США';
            break;    
        case 'Лондон' :
                checkCity = 'Ви жевете в столиці Великобританії';
            break;
        default :
                checkCity = `Ви жевете в місті ${placeOfliveBigLetter}`;
    }
};

let checkSport;

if (!favoriteSport){
    checkSport = 'Шкода, що Ви не полюбляєте спорт';
}else{
    switch (favoriteSport.toLocaleLowerCase()) {
        case 'бокс' :
            checkSport = 'Круто! Хочеш стати як Майк Тайсон?';
            break;
        case 'біг' :
            checkSport = 'Круто! Хочеш стати як Усейн Болт?';
            break;
        case 'плавання' :
            checkSport = 'Круто! Хочеш стати як Майкл Фелпс?';
            break;
        default :
            checkSport = `Круто! що тобі подобається ${favoriteSport}`; 
    }
};

alert(`
    ${checkage}
    ${checkCity}
    ${checkSport}`);

