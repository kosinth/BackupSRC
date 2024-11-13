window.onload = async ()=>{

    console.log('on Load')

    const response = await axios.get('http://localhost:8002/testdb-list')

    //console.log(' Get data : ',response.data)
    const userDom = document.getElementById('user')
    let htmlData = '<div style="overflow-x:auto;">'
     htmlData += '<table >'
     htmlData +=  '<tr>'
     htmlData += '<th>Company</th>'
     htmlData += '<th>Contact</th>'
     htmlData += '<th>Country</th>'
     htmlData += '</tr>'
    for (let i =0;i<response.data.length;i++){
        let user = response.data[i]
            htmlData += ' <tr>'
            //table row
            htmlData += `<td>${user.Id}</td>`
            htmlData += `<td>${user.Fname}</td>`
            htmlData += `<td>${user.Lname}</td>`
            htmlData += `<td>${user.Sex}</td>`
            htmlData += `<td>${user.Age}</td>`
            htmlData += `<td>${user.Program}</td>`
            htmlData += `<td>${user.Interest}</td>`
            htmlData += `<td>${user.Address}</td>`
            htmlData += `<td> <button type="button"> Edit</button> </td>`
            htmlData += `<td> <button type="button"> Delete</button> </td>`
            htmlData += ' </tr>'

    }
    htmlData += '</table>'
    htmlData += '</div>'
    userDom.innerHTML = htmlData

}