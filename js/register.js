let mode = 'CREATE'
let selectedId = ''

window.onload = async ()=>{
    
    const urlParams = new URLSearchParams(window.location.search)    
    const id = urlParams.get('id')
    console.log(id)
    if(id){
        mode = 'EDIT'
        selectedId = id
        console.log(mode +" " + selectedId)

        try{
            //app.get('/user/:id',async(req,res) =>{
            const response = await axios.get(`http://localhost:8002/user/${selectedId}`)
            console.log( response.data)
            // Convert to Object
            const data = Object.values(response.data['data']);
            // for (let i=0;i<data.length;i++){
            //     console.log(data[0].Fname)
            // }

            let domSelectInputfname = document.querySelector('input[name=fname]')
            let domSelectInputlanme = document.querySelector('input[name=lname]')
            domSelectInputfname.value = data[0].Fname
            domSelectInputlanme.value = data[0].Lname

            //age 
            let ageDom = document.querySelector('input[name=age]')
            ageDom.value = data[0].Age
            //sex
            let checkgender = document.querySelectorAll('input[name=sex]')
            //checkgender.values = data[0].Sex
            for(let i =0;i<checkgender.length;i++){
                if(checkgender[i].value==data[0].Sex){
                    checkgender[i].checked = true
                }
            }

            // interest
            let checkboxinput = document.querySelectorAll('input[name=interest]')
            for(let i =0;i<checkboxinput.length;i++){
                if(data[0].Interest.includes(checkboxinput[i].value)){
                    checkboxinput[i].checked = true
                }
            }

            //program
            let selectObj = document.getElementById("slect_T");
            for (let i = 0;i<selectObj.options.length;i++) {
                if (selectObj.options[i].text== data[0].Program) {
                    selectObj.options[i].selected = true;
                }
            }
            //addr
            let addrDom = document.querySelector('textarea[name=address]')
            addrDom.value = data[0].Address  

        }catch(err){
            console.log(err.message)

        }


    }   
    
    //alert(mode +" " +selectedId)
}


