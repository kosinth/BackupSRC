
window.onload = async ()=>{
    await loadData()
}

const loadData = async() =>{

    let errmsg = document.getElementById('errMsg')
    console.log('on Load')
    try{
        const response = await axios.get('http://localhost:8002/testdb-list')

        //console.log(' Get data : ',response.data)
        const userDom = document.getElementById('user')
        let htmlData = '<div style="overflow-x:auto;">'
        htmlData += '<table >'
        htmlData +=  '<tr>'
        htmlData += '<th>Id</th>'
        htmlData += '<th>ชื่อ</th>'
        htmlData += '<th>นามสกุล</th>'
        htmlData += '<th>เพศ</th>'
        htmlData += '<th>อายุ</th>'
        htmlData += '<th>โปรแกรม</th>'
        htmlData += '<th>สิ่งที่สนใจ</th>'
        htmlData += '<th>ที่อยู่</th>'

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
                //htmlData += `<td> <button class ='edit' data-edit='${EDIT} ${user.Id}'> Edit</button> </td>`
                htmlData += `<td> <button class='edit' data-id='${'EDIT'},${user.Id}'> Edit</button> </td>`
                htmlData += `<td> <button class='delete' data-id='${user.Id}'> Delete</button> </td>`
                htmlData += ' </tr>'

        }
        htmlData += '</table>'
        htmlData += '</div>'
        userDom.innerHTML = htmlData

        const deleteDom = document.getElementsByClassName('delete')
        for(let i =0;i<deleteDom.length;i++){
            deleteDom[i].addEventListener('click',async(event)=>{
                const id = event.target.dataset.id
                //alert(id)
                //api app.delete('/user/:id',async(req,res)=>{
                console.log('ID -->',id)
                try{
                    await axios.delete(`http://localhost:8002/user/${id}`)
                    console.log('Delete success...')
                    loadData()
                }catch(err){
                    console.log('Error: ',err.message)            

                }

            })
        }

        const editDom = document.getElementsByClassName('edit')
        for(let j=0;j<editDom.length;j++){
            editDom[j].addEventListener('click',async(event)=>{
                const editId = await event.target.dataset.id
                console.log('EDIT -->',editId)
            })
        }

    }catch(err){
        if(err.response){
            console.log(err.response.data.message)
            errmsg.innerText = err.response.data.err + " " +err.response.data.msg
            errmsg.style.color = "red"
        }
    }


}





