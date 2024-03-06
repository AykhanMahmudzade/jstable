const telebelerS4 =[

{
    
    sakinler: 1,
    finkod: '2JTU3LS',
    ad: 'Jale',
    soyad: "Zuliyeva",
    tehsili:{
        ortaMekteb:"63 nomreli mekteb",
        bakalavriratura:"ADNSU",
        bakalavriraturaIxtisas:"Informasiya texnologiyalari",
        magistratura:"AzTU",
        magistraturaIxtisas:"Tetbiqi proqram teminati",
        doktorantura:{
            mudafiyeIli:"2028",
            mudafiyeMovzusu:"IT esaslari"
        }


    },

}

,

{
    sakinler: 2,
    finkod: '785S4YZ',
    ad: 'Ayxan',
    soyad: "Mahmudzade",
    tehsili:{
        ortaMekteb:"153 nomreli mekteb",
        bakalavriratura:"UNEC",
        bakalavriraturaIxtisas:"Informasiya tehsukezliyi",
        magistratura:"AzTU",
        magistraturaIxtisas:"Kibertehlukesizlik",
        doktorantura:{
            mudafiyeIli:"2030",
            mudafiyeMovzusu:"IT esaslari"
        }


    },

}

,

{
    sakinler: 3,
    finkod: 'PHA27SD',
    ad: 'Sevinc',
    soyad: "Cavadova",
    tehsili:{
        ortaMekteb:"Xirdalan 1 nomreli mekteb",
        bakalavriratura:"WCU",
        bakalavriraturaIxtisas:"Kompyuter Muhendisliyi",
        magistratura:"ADA",
        magistraturaIxtisas:"Informasiya muhafizesi",
        doktorantura:{
            mudafiyeIli:"2033",
            mudafiyeMovzusu:"Kiber hucumlarin analizi"
        }


    },

}
,

{
    sakinler: 4,
    finkod: '9HFY3SC',
    ad: 'Perviz',
    soyad: "Abdullayev",
    tehsili:{
        ortaMekteb:"18 nomreli mekteb",
        bakalavriratura:"MAA",
        bakalavriraturaIxtisas:"Kompyuter Elmleri",
        magistratura:"BANM",
        magistraturaIxtisas:"Kompyuter Sistemleri",
        doktorantura:{
            mudafiyeIli:"2033",
            mudafiyeMovzusu:"Kiber hucumlarin analizi"
        }


    },

}




]

// console.log('MIT Academiyada "Front-End uzre" tehsil alan' + " " + telebelerS4[0].ad + " " + telebelerS4[0].soyad)
// console.log('MIT Academiyada "Front-End uzre" tehsil alan' + " " + telebelerS4[1].ad + " " + telebelerS4[1].soyad)
// console.log('MIT Academiyada "Front-End uzre" tehsil alan' + " " + telebelerS4[2].ad + " " + telebelerS4[2].soyad)
// console.log('MIT Academiyada "Front-End uzre" tehsil alan' + " " + telebelerS4[3].ad + " " + telebelerS4[3].soyad)

for( let i=0; i<telebelerS4.length; i++ ) {
    // console.log('MIT Academiyada "Front-End uzre" tehsil alan' + " " + telebelerS4[i].ad + " " + telebelerS4[i].soyad + " " + telebelerS4[i].tehsili.bakalavriratura)
document.querySelector("#melumatlar").innerHTML += `<tr>
<th scope="row">${telebelerS4[i].sakinler}</th>
<th scope="row">${telebelerS4[i].finkod}</th>
<td>${telebelerS4[i].ad}</td> 
<td>${telebelerS4[i].soyad}</td>
<td>${telebelerS4[i].tehsili.ortaMekteb}</td>
<td>${telebelerS4[i].tehsili.bakalavriratura}</td>
<td>${telebelerS4[i].tehsili.bakalavriraturaIxtisas}</td>
<td>${telebelerS4[i].tehsili.magistratura}</td>
<td>${telebelerS4[i].tehsili.magistraturaIxtisas}</td>
</tr>`
}





            {/**/}
