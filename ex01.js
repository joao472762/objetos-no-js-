let allPhones = []
function newPhoneInformations(name='uninformed',brand='uninformed',price=999.88, batery= 4000){
    return{
        name,
        brand,
        price,
        batery
    }
}
let newPhone = newPhoneInformations('moto E2','motorola')

allPhones.push(newPhone)
newPhone = newPhoneInformations('samsung egle','samsung',2500.22, 6000)
allPhones.push(newPhone)

// allPhones.forEach(phone => {
//     console.log(`o nome do celular é ${phone.name}, ele é um celular da ${phone.brand} e ele custa R$ ${phone.price}`)
// });

allPhones.map(phone => {
    console.log(`o nome do celular é ${phone.name}, ele é um celular da ${phone.brand} e ele custa R$ ${phone.price}`)
})
let number = 1
do {

    console.log(number++)
} while(number < 6)



let stop = setTimeout(()=>{},5000)
setInterval(() => {
    let count = 0
    console.log(count++)
}, 1000);